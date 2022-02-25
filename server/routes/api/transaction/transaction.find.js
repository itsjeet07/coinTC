"use strict";
const Joi = require("joi");

module.exports = (server) => {
  const {
    boom,
    controllers: {
      transaction: { find },
    },
    helpers: {
      permissions: { isUser },
    },
  } = server.app;

  const query = Joi.object().keys({
    filter: Joi.string().uuid(),
    fake: Joi.bool(),
    limit: Joi.number().integer()
  });

  return {
    method: "GET",
    path: "/transaction",
    config: {
      pre: [
        {
          method: isUser,
          assign: "permission",
        },
      ],
      handler: find,
      validate: {
        query,
      },
    },
  };
};
