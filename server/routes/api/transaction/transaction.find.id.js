"use strict"
const Joi = require("joi");

module.exports = (server) => {
  const {
    boom,
    controllers: { transaction: {findByID} },
    helpers: {
      permissions: { isUser },
    },
  } = server.app;

  const schema = Joi.object({
    id: Joi.string().uuid(),
  });

  return {
    method: "GET",
    path: "/transaction/{id}",
    config: {
      pre: [
        {
          method: isUser,
          assign: "permission",
        },
      ],
      handler: findByID,
      validate: {
        params: schema,
      },
    },
  };
};
