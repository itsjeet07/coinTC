"use strict";
const Tatum = require("@tatumio/tatum");
/**
 * @description - KYC Controller helpers
 * @param {Object} server  - Hapi Server Instance
 * @returns
 */
function TransactionController(server) {
  const {
    db: { Transaction, Order },
    boom,
    helpers: { filters, paginator },
  } = server.app;
  return {
    // FIND ------------------------------------------------------------------------------------------------------
    /**
     * @function find
     * @describe - Find multiple records
     * @param {Object} req
     * @returns
     */
    async find(req) {
      const {
        query,
        pre: {
          permission: {user, fake, sudo },
        },
      } = req;
      try {
        const queryFilters = await filters({
          query,
          searchFields: ["user_id"],
        });

        /* const include = validateAndFilterAssociation(
          query?.include,
          ["security"],
          User
        ); */

        const options = {
          ...queryFilters,
          // attributes: { exclude: ["password"] },
        };

        const { limit, offset } = queryFilters;

        let queryset = fake
          ? await Transaction.FAKE(limit)
          : await Transaction.findAndCountAll(options);

        return paginator({
          queryset,
          limit,
          offset,
        });
      } catch (error) {
        console.error(error);
        return boom.internal(error.message, error);
      }
    },

    /**
     * @function findByID
     * @describe - Find record by ID
     * @param {Object} req
     * @returns
     */
    async findByID(req) {
      const {
        params: { id },
        query,
        pre: {
          permission: {user, fake, sudo },
        },
      } = req;
      try {
        const queryFilters = await filters({
          query,
          searchFields: ["user_id"],
          extras: {
            id,
            ...(!sudo && { user_id: user?.id }),
          },
        });

        const options = {
          ...queryFilters,
        };

        let result = fake
          ? await Transaction.FAKE()
          : await Transaction.findOne(options);

        return result
          ? result
          : boom.notFound(`No transaction with ID: [ ${id} ] found`);
      } catch (error) {
        console.error(error);
        return boom.internal(error.message, error);
      }
    },
  };
}

module.exports = TransactionController;
