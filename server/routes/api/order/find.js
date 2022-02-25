"use strict";

module.exports = (server) => {
  // const Schema = require("../../../schema/order.schema")(server);

  const {
    controllers: {
      order: { find },
    },
    helpers: {
      permissions: { isUser },
    },
  } = server.app;

  return {
    method: "GET",
    path: "/order",
    config: {
      pre: [
        {
          method: isUser,
          assign: "permission",
        },
      ],
      handler: find,
      auth: { strategy: "jwt", mode: "optional" },
    },
  };
};
