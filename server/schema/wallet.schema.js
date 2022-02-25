const Joi = require("joi");

module.exports = (server) => {
  const { boom } = server.app;
  return {
    // CREATE ------------------------------------------------

    /**
     * @function create - Schema validator for creating a single currency entity
     * @param {Object} server - Hapi server instance
     * @returns {Object} validator
     */
    create() {
      return {
        params: Joi.object({
          asset: Joi.string()
            .required()
            .error(
              boom.badRequest("Required input <asset::string> is invalid")
            ),
        }),
      };
    },

    // RETRIEVE ------------------------------------------------

    find() {
      return {
        params: Joi.object({
          address: Joi.string()
            .alphanum()
            .min(26)
            .max(35)
            .required()
            .error(
              boom.badData(
                "Required input <address::string(26, 35)> is invalid"
              )
            ),
        }).error(boom.badRequest()),
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
            .uuid()
            .required()
            .error(boom.badRequest(`Required input <id::uuid> is invalid`)),
        }),
        payload: Joi.object({
          iso_code: Joi.string()
            .optional()
            .error(
              boom.badRequest("Required input <iso_code::string> is invalid")
            ),
          name: Joi.string()
            .optional()
            .error(boom.badRequest("Required input <name::string> is invalid")),
          type: Joi.string()
            .optional()
            .error(boom.badRequest("Required input <type::string> is invalid")),
        }),
      };
    },

    /**
     * @function bulkUpdate - Schema validator for creating bulk currency entities
     * @param {Object} server - Hapi server instance
     * @returns
     */
    bulkUpdate() {
      return {
        payload: Joi.object({
          data: Joi.array().items(this.update()?.payload),
          paranoid: Joi.boolean()
            .optional()
            .error(
              boom.badRequest(`Optional input <paranoid::bool> is invalid`)
            ),
        }),
      };
    },
    // REMOVE ------------------------------------------------

    remove() {
      return {
        payload: Joi.object({
          force: Joi.boolean()
            .default(false)
            .optional()
            .error(new Error("Optional input <force::boolean> is invalid")),
        }),

        params: this.update()?.params,
      };
    },

    bulkRemove() {
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
        params: this.update()?.params,
      };
    },

    bulkRestore() {
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
