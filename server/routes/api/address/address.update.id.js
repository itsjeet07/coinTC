const Joi = require("joi");

module.exports = (server) => {
  const {
    controllers: {
      address: { updateByID },
    },
    helpers: {
      permissions: { isUser },
    },
  } = server.app;

  return {
    method: "PUT",
    path: "/address/{id}",
    config: {
      pre: [
        {
          method: isUser,
          assign: "permission",
        },
      ],
      handler: updateByID,
      auth: "jwt",
    },
  };
};
