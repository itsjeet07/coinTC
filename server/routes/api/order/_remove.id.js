"use strict";

module.exports = (server) => {
  const Schema = require("../../../schema/order.schema")(server);
  const { params, payload } = Schema.remove();

  const {
    controllers: {
      order: { removeByID },
    },
    helpers: {
      permissions: { isAdminOrError },
    },
  } = server.app;

  return {
    method: "DELETE",
    path: "/order/{id}",
    config: {
      pre: [
        {
          method: isAdminOrError,
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
