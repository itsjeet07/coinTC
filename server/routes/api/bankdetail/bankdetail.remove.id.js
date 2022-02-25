"use strict";

module.exports = (server) => {
  const Schema = require("../../../schema/bankdetail.schema")(server);
  const { params, payload } = Schema?.remove();
  const {
    controllers: {
      bankdetail: { removeByID },
    },
    helpers: {
      permissions: { isUser },
    },
  } = server.app;

  return {
    method: "DELETE",
    path: "/bank-detail/{id}",
    config: {
      pre: [
        {
          method: isUser,
          assign: "permission",
        },
      ],
      handler: removeByID,
      auth: "jwt",
      validate: {
        params,
        payload,
      },
    },
  };
};
