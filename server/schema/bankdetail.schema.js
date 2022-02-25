const Joi = require("joi");
// CREATE ------------------------------------------------
module.exports = (server) => {
  const {
    consts: { FIAT_CURRENCIES },
    boom,
  } = server.app;

  return {
    create() {
      return {
        payload: Joi.object({
          account_no: Joi.string()
            .regex(/^\w{1,17}$/)
            .required()
            .error(boom.badRequest("Account number must be between 1 and 17")),
          /* 
            SWIFT CODE FORMAT: AAAABBCCDDD

            AAAA: 4 character bank code
            BB: 2 character country code
            CC: 2 character location code 
            */
          bank_code: Joi.string()
            .alphanum()
            .min(8)
            .max(11)
            .required()
            .error(boom.badRequest("Invalid bank code")),

          currency: Joi.string()
            .allow(...Object.keys(FIAT_CURRENCIES))
            .insensitive()
            .required()
            .error(boom.badRequest("Invalid currency input")),

          bank_name: Joi.string()
            .optional()
            .error(boom.badRequest("Bank name is invalid")),
        }),
      };
    },

    // UPDATE ------------------------------------------------

    update() {
      return {
        params: Joi.object({
          id: Joi.string()
            .uuid()
            .required()
            .error(boom.badRequest(`Optional input <id::uuid> is invalid`)),
        }),
        payload: Joi.object({
          id: Joi.string()
            .uuid()
            .optional(),
          account_no: Joi.string()
            .regex(/^\w{1,17}$/)
            .optional()
            .error(
              boom.badRequest(`Optional input <account_no::string> is invalid`)
            ),
          bank_code: Joi.string()
            .alphanum()
            .min(8)
            .max(11)
            .optional()
            .error(
              boom.badRequest(`Optional input <swift_code::string> is invalid`)
            ),

          currency: Joi.string()
            .valid(...Object.keys(FIAT_CURRENCIES))
            .optional()
            .error(
              boom.badRequest(`Optional input <currency::string> is invalid`)
            ),

          bank_name: Joi.string()
            .optional()
            .error(
              boom.badRequest(`Optional input <bank_name::string> is invalid`)
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
        }).optional(),

        params: this.update()?.params,
      };
    },

    // RESTORE ------------------------------------------------

    restore(server) {
      return {
        params: this.update()?.params,
      };
    },
  };
};
