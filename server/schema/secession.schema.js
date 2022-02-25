const Joi = require("joi");
const { SECESSION_STATUSES } = require("../constants");

module.exports = (server) => {
  const {
    consts: { PATTERNS },
    boom,
  } = server.app;

  return {
    // CREATE ------------------------------------------------

    /**
     * @function create - Schema validator for creating a single record
     * @param {Object} server - Hapi server instance
     * @returns {Object} validator
     */
    create() {
      return {
        payload: Joi.object({
          min_order_qty: Joi.number()
            .required()
            .error(
              boom.badRequest(
                `Required input <min_order_qty::number> is invalid`
              )
            ),
          max_order_qty: Joi.number()
            .required()
            .error(
              boom.badRequest(
                `Required input <max_order_qty::number> is invalid`
              )
            ),
          min_order_price: Joi.number()
            .required()
            .error(
              boom.badRequest(
                `Required input <min_order_price::number> is invalid`
              )
            ),
          max_order_price: Joi.number()
            .required()
            .error(
              boom.badRequest(
                `Required input <max_order_price::number> is invalid`
              )
            ),
          payment_methods: Joi.any()
            .allow(
              Joi.object().allow({}),
              Joi.array().items(Joi.object()),
              Joi.string()
            )
            .required()
            .error(
              boom.badRequest(
                `Required input <payment_method::array[string]> is invalid`
              )
            ),
          type: Joi.string()
            .pattern(PATTERNS.ADVERT_TYPE)
            .required()
            .error(boom.badRequest(`Required input <type::string> is invalid`)),
          price: Joi.number()
            .required()
            .error(
              boom.badRequest(`Required input <price::number> is invalid`)
            ),
          qty: Joi.number()
            .required()
            .error(boom.badRequest(`Required input <qty::number> is invalid`)),
          crypto: Joi.string()
            .required()
            .error(
              boom.badRequest(`Required input <crypto::string> is invalid`)
            ),
          fiat: Joi.string()
            .label("Fiat currency")
            .required()
            .error(boom.badRequest(`Required input <fiat::string> is invalid`)),
          payment_ttl_mins: Joi.number()
            .integer()
            .allow(-1)
            .label("Payment time to live")
            .optional()
            .error(
              boom.badRequest(
                `Optional input <payment_time_limit::number> is invalid`
              )
            ),
          floating_price: Joi.number()
            .optional()
            .error(
              boom.badRequest(
                `Optional input <floating_price::number> is invalid`
              )
            ),
          remarks: Joi.string()
            .optional()
            .error(
              boom.badRequest(`Optional input <remarks::string> is invalid`)
            ),
          auto_reply_message: Joi.string()
            .optional()
            .error(
              boom.badRequest(
                `Optional input <auto_reply_message::string> is invalid`
              )
            ),
          trade_conditions: Joi.string()
            .optional()
            .error(
              boom.badRequest(
                `Optional input <trade_conditions::string> is invalid`
              )
            ),
          published: Joi.boolean()
            .default(false)
            .optional()
            .error(
              boom.badRequest(`Optional input <published::string> is invalid`)
            ),
        }),
      };
    },

    // UPDATE ------------------------------------------------

    /**
     * @function updateByID
     * @param {Object} server - Hapi server instance
     * @returns
     */
    updateByID() {
      const types = Object.values(SECESSION_STATUSES);
      return {
        params: Joi.object({
          id: Joi.string()
            .uuid()
            .required()
            .error(boom.badRequest(`Required input <id::uuid> is invalid`)),
        }),
        payload: Joi.object({
          status: Joi.any()
            .custom((value) => {
              if (!types.includes(String(value)?.toUpperCase()))
                throw new Error("any.invalid");
              return value;
            })
            .optional()
            .error(
              boom.badRequest(
                `Optional input <status::string> is invalid. Expected: [ ${types?.join(
                  ","
                )} ]`
              )
            ),
        }),
      };
    },

    /**
     * @function update
     * @param {Object} server - Hapi server instance
     * @returns
     */
    update() {
      return {
        payload: Joi.object({
          ids: Joi.array().items(
            Joi.string()
              .uuid()
              .error(boom.badRequest(`Required input <ids::uuid> is invalid`))
          ),
        }),
      };
    },

    // FIND ------------------------------------------------

    findByID() {
      return {
        params: this.update()?.params,
      };
    },
    // REMOVE ------------------------------------------------

    remove() {
      return {
        params: Joi.object({
          id: Joi.string()
            .uuid()
            .error(boom.badRequest(`Required input [<id::uuid>] is invalid`)),
        }),
        payload: Joi.object({
          ids: Joi.array()
            .items(
              Joi.string()
                .uuid()
                .error(
                  boom.badRequest(`Required input [<id::uuid>] is invalid`)
                )
            )
            .optional()
            .error(boom.badRequest(`Required input <data::Array> is invalid`)),
          force: Joi.boolean()
            .default(false)
            .optional()
            .error(boom.badData("Optional input <force::boolean> is invalid")),
        }).error(
          boom.badRequest(`Required input <payload::Object> is invalid`)
        ),
      };
    },

    // RESTORE ------------------------------------------------

    restoreByID() {
      return {
        params: this.update()?.params,
      };
    },

    restore() {
      return {
        payload: Joi.object({
          data: Joi.array()
            .items(
              Joi.string()
                .uuid()
                .error(
                  boom.badRequest(`Required input [<id::uuid>] is invalid`)
                )
            )
            .error(boom.badRequest(`Required input <data::Array> is invalid`)),
        }),
      };
    },
  };
};
