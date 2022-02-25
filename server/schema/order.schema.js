const Joi = require("joi");
const { ORDER_STATUSES } = require("../constants");

module.exports = function(server) {
  let schema = _getSchema(server);
  const {
    boom,
    consts: { PATTERNS },
  } = server.app;

  return {
    /**
     * @function create - Schema validator for creating a single currency entity
     * @param {Object} server - Hapi server instance
     * @returns {Object} validator
     */
    confirm() {
      return {
        params: Joi.string()
          .uuid()
          .required()
          .error(boom.badData(`Id is required`)),
      };
    },
    // CREATE ------------------------------------------------

    /**
     * @function create - Schema validator for creating a single currency entity
     * @param {Object} server - Hapi server instance
     * @returns {Object} validator
     */
    create() {
      return {
        payload: Joi.object({
          advert_id: Joi.string()
            .uuid()
            .required()
            .error(boom.badData(`<advert_id::uuid> is invalid or missing`)),
          total_amount: Joi.number()
            .required()
            .error(
              boom.badData(`<total_amount::number> is invalid or missing`)
            ),
          total_quantity: Joi.number()
            .required()
            .error(
              boom.badData(`<total_quantity::number> is invalid or missing`)
            ),
        }),
      };
    },

    // UPDATE ------------------------------------------------

    /**
     * @function update - Schema validator for updating a single currency entity
     * @param {Object} server - Hapi server instance
     * @returns
     */
    update() {
      return {
        params: Joi.object({
          id: Joi.string()
            .pattern(/^ORD-\d{13}$/)
            .required()
            .error(boom.badRequest(`Required input <id::uuid> is invalid`)),
        }),
        payload: Joi.object({
          total_quantity: Joi.number()
            .optional()
            .error(
              boom.badData(`optional data <total_quantity::number> is invalid`)
            ),

          appeal: Joi.string()
            .max(100)
            .optional()
            .label("Order Appeal"),

          remark: Joi.string()
            .max(100)
            .label("Order remark")
            .optional()
            .error(
              boom.badRequest(`Missing or invalid payload input <remark::text>`)
            ),

          status: Joi.string()
            .valid(...Object.keys(ORDER_STATUSES))
            .uppercase()
            .optional()
            .error(
              boom.badRequest(
                `Missing or invalid payload input <status::string>`
              )
            ),

          rating: Joi.number()
            .integer()
            .min(0)
            .max(5)
            .optional()
            .error(
              boom.badRequest(`Required input <rating::number> is invalid`)
            ),

          trx_id: Joi.string()
            .label("Transaction ID")
            .optional(),
        }),
      };
    },

    // REMOVE ------------------------------------------------

    remove() {
      return {
        params: retrieve()?.params,
        payload: Joi.object({
          ids: Joi.array()
            .items(
              Joi.string()
                .pattern(/^ORD-\d{13}$/)
                .error(
                  boom.badRequest(`Required input [<id::uuid>] is invalid`)
                )
            )
            .error(boom.badRequest(`Required input <data::Array> is invalid`)),
          force: Joi.boolean()
            .default(false)
            .optional()
            .error(new Error("Optional input <force::boolean> is invalid")),
        }).error(
          boom.badRequest(`Required input <payload::Object> is invalid`)
        ),
      };
    },

    // RESTORE ------------------------------------------------

    restore() {
      return {
        params: update()?.params,
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

    // FIND ------------------------------------------------

    find() {
      return {
        params: Joi.object({
          id: Joi.string()
            .pattern(PATTERNS?.ORDER_ID)
            .required()
            .error(
              boom.badData(
                "required data <id::string> is not a valid order number"
              )
            ),
        }),
      };
    },
  };
};

function _getSchema(server) {
  const {
    boom,
    // consts: { PATTERNS },
  } = server.app;
  return {
    id: Joi.string()
      .uuid()
      .error(boom.badRequest(`<id::uuid> is invalid`)),
  };
}
