"use strict";
const Joi = require("joi");
module.exports = (server) => {
  const {
    controllers: {
      secession: { create },
    },
    helpers: {
      permissions: { isUser },
    },
  } = server.app;

  const schema = Joi.object({
    description: Joi.string(),
    access_level: Joi.number().integer().min(1).max(3)
  });

  return {
    method: "POST",
    path: "/secession",
    config: {
      pre: [
        {
          method: isUser,
          assign: "permission",
        },
      ],
      handler: create,
      auth: "jwt",
      validate: {
        payload: schema,
      },
    },
  };
};
