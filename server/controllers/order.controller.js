"use strict";
const boom = require("@hapi/boom");
const { TRADE_TYPES, KYC_TYPES, ERROR_CODES } = require("../constants");

function OrderController(server) {
  const { __destroy } = require("./utils")(server);
  const {
    db: { Order, Advert, User, Wallet, Kyc },
    helpers: { filters, paginator },
    consts: { KYC_STATUSES },
  } = server.app;

  return {
    // CREATE ---------------------------------------------------------

    /**
     * @function create - create single order record
     * @param {Object} req
     * @returns
     */
    async create(req) {
      const {
        pre: {
          permission: { user, fake },
        },
        payload,
      } = req;

      const { advert_id, total_quantity, total_amount } = payload;

      // Check if user's KYC has been approved first
      let approvedKyc = await user.getKyc({
        where: {
          type: KYC_TYPES?.ID,
          status: KYC_STATUSES?.ACCEPTED,
        },
      });

      if (!approvedKyc) {
        return {
          status: false,
          message: `Please complete ID verification KYC in order to proceed`,
          code: ERROR_CODES["ERKYC01"],
        };
      }

      if (!advert_id) {
        throw boom.badRequest("Missing advert_id in request");
      }

      try {
        // find advert
        let ad = await Advert.findByPk(advert_id);
        if (ad) {
          // create order using the user info
          let result;

          if (fake) {
            result = await Order.FAKE();
          } else if (ad.published) {
            if (total_quantity > ad?.available_qty)
              throw boom.unacceptable(
                `The total amount value: ${total_amount} is greater that the total available asset`
              );
            let user_id =
              String(ad.type)?.toLowerCase() ===
              String(TRADE_TYPES?.SELL)?.toLowerCase()
                ? ad.user_id
                : user.id;

            // check if order is a sell order i.e advert is a buy advert
            // verify that seller has sufficient balance
            if (
              String(ad.type)?.toLowerCase() ===
              String(TRADE_TYPES?.BUY)?.toLowerCase()
            ) {
              let sellersWallet = await Wallet.findOne({
                where: {
                  user_id,
                  currency: ad.crypto,
                },
              });
              /*  TODO: ERROR: TypeError: Cannot destructure property 'Fee' of 'sequelize.models' as it is undefined.\n    at WalletPlugin.getTotalCharges (/home/lil-armstrong/Desktop/project/cointc/code/server/wallet.plugin/index.js:43:13)\n    at WalletPlugin.hasSufficientAmount (/home/lil-armstrong/Desktop/project/cointc/code/server/wallet.plugin/index.js:189:32)\n    at processTicksAndRejections (internal/process/task_queues.js:95:5)\n    at async Wallet.hasSufficientAmount (/home/lil-armstrong/Desktop/project/cointc/code/server/database/models/wallet.model.js:149:14)\n    at async create (/home/lil-armstrong/Desktop/project/cointc/code/server/controllers/order.controller.js:84:30)\n    at async exports.Manager.execute (/home/lil-armstrong/Desktop/project/cointc/code/server/node_modules/@hapi/hapi/lib/toolkit.js:60:28)\n    at async Object.internals.handler (/home/lil-armstrong/Desktop/project/cointc/code/server/node_modules/@hapi/hapi/lib/handler.js:46:20)\n    at async exports.execute (/home/lil-armstrong/Desktop/p… … */
              const status = await sellersWallet.hasSufficientAmount(
                total_quantity
              );
              if (!status) {
                return boom.badRequest("Insufficient user wallet balance");
              }
            }

            result = await user.createOrder({
              ...payload,
              blocked_account_id: user_id,
            });
          } else {
            throw boom.methodNotAllowed("Operation not permitted");
          }
          return result ? { status: true, id: result?.id } : boom.internal();
        } else {
          throw boom.notFound("Order not created. Advert not found!");
        }
      } catch (error) {
        // console.error(error);
        return boom.isBoom(error) ? error : boom.boomify(error.message, error);
      }
    },
    // REMOVE ---------------------------------------------------------

    /**
     * @function removeByID - remove a single record
     * @param {Object} req
     * @returns
     */
    async removeByID(req) {
      const {
        params: { id },
        payload: { force = false },
        pre: {
          user: {
            permission: { user, sudo },
          },
        },
      } = req;

      try {
        let where = { id };
        return {
          deleted: Boolean(
            await __destroy(
              "Order",
              where,
              ...(sudo ? { force } : { force: false, user_id: user?.id })
            )
          ),
        };
      } catch (error) {
        console.error(error);
        return boom.isBoom(error) ? error : boom.boomify(error.message, error);
      }
    },

    // FIND ---------------------------------------------------------
    /**
     * @function findByID
     * @param {Object} req
     * @returns
     */
    async findByID(req) {
      const {
        query,
        params: { id },
        pre: {
          permission: { user, fake, sudo },
        },
      } = req;
      try {
        const options = { where: { id, ...(!sudo & { user_id: user?.id }) } };
        let result = fake ? await Order.FAKE() : await Order.findOne(options);
        return result
          ? result
          : boom.notFound(`Order with ID: ${id} does not exist!`);
      } catch (error) {
        console.error(error);
        return boom.isBoom(error) ? error : boom.boomify(error.message, error);
      }
    },

    /**
     * @function find
     * @param {Object} req
     * @returns
     */
    async find(req) {
      const {
        query,
        pre: {
          permission: { user, fake, sudo },
        },
      } = req;

      try {
        const queryFilters = await filters({
          query,
          searchFields: ["user_id"],
          // extras: {
          //   ...(!sudo && user && { user_id: user?.id }),
          // },
        });

        const options = {
          ...queryFilters,
        };
        const { limit, offset } = queryFilters;

        const queryset = fake
          ? await Order.FAKE(limit, options)
          : await Order.findAndCountAll(options);

        return await paginator({
          queryset,
          limit,
          offset,
        });
      } catch (error) {
        console.error(error);
        return boom.isBoom(error) ? error : boom.boomify(error.message, error);
      }
    },

    // UPDATE -------------------------------------------------------------------------------------------
    /**
     * @function updateByID
     * @param {Object} req
     * @returns
     */
    async updateByID(req) {
      const {
        params: { id },
        payload,
        pre: {
          permission: { user, sudo },
        },
      } = req;

      try {
        let fields = sudo
            ? ["status"]
            : ["status", "rating", "trx_id", "appeal", "remark", "media"],
          result,
          where = {
            id,
            ...(!sudo && user && { user_id: user?.id }),
          };

        result = await Order.update(payload, {
          where,
          fields,
          returning: true,
        }).then(([count]) => count);

        return {
          id,
          status: Boolean(result),
        };
      } catch (error) {
        console.error(error);
        return boom.isBoom(error) ? error : boom.boomify(error.message, error);
      }
    },

    // CONFIRM ---------------------------------------------------------
    /**
     * @function confirmByID
     * @description Confirms an order by ID
     * @param {Object} req
     * @returns
     */
    async confirmByID(req) {
      const {
        params: { id },
        pre: {
          permission: { user, fake },
        },
      } = req;
      try {
        let result;
        if (fake) {
          result = await Order.FAKE();
        } else {
          let buyersId, sellersId;

          // get order by id
          const order = await Order.findByPk(id);

          // get advert from order
          const advert = await order.getAdvert();

          // check if user is permitted to confirm order
          let permitted =
            order.user_id === user.id || advert.user_id == user.id;

          // throught error if user is not permitted
          !permitted &&
            boom.badRequest("You do not have permission to confirm this order");

          if (order.order_user_confirm && order.advert_user_confirm) {
            throw boom.badRequest("Order has already been confirmed");
          }

          // set order confirm
          if (order.user_id === user.id) {
            order.order_user_confirm = user.id;
          } else if (advert.user_id == user.id) {
            order.advert_user_confirm = user.id;
          }

          // save order after confirm
          await order.save();

          // set buyers and sellers id
          if (
            String(advert.type)?.toLowerCase() ===
            String(TRADE_TYPES?.BUY)?.toLowerCase()
          ) {
            buyersId = advert.user_id;
            sellersId = order.user_id;
          } else {
            buyersId = order.user_id;
            sellersId = advert.user_id;
          }

          // unfreeze sellers Wallet if both buyer and seller confirms order
          if (order.order_user_confirm && order.advert_user_confirm) {
            const sellerWallet = await Wallet.findOne({
              where: {
                user_id: sellersId,
                currency: advert.crypto,
              },
            });

            const buyersWallet = await Wallet.findOne({
              where: {
                user_id: buyersId,
                currency: advert.crypto,
              },
            });

            // unfreeze sellers wallet
            await sellerWallet.unfreezeWallet(order.blocked_account_id);

            // send fund to buyer
            await sellerWallet.transfer({
              wallet: buyersWallet,
              qty: order.total_quantity,
            });
          }
        }

        return result;
      } catch (error) {
        console.error(error);
        return boom.isBoom(error) ? error : boom.boomify(error.message, error);
      }
    },
  };
}

module.exports = OrderController;
