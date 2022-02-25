"use strict";

module.exports = (server) => {
  const Schema = require("../../../schema/advert.schema")(server);
  const { payload } = Schema.remove();
  const {
    controllers: {
      advert: { remove },
    },
    helpers: {
      permissions: { isUser },
    },
  } = server.app;

  return {
    method: "DELETE",
    path: "/ad",
    config: {
      pre: [
        {
          method: isUser,
          assign: "permission",
        },
      ],
      handler: remove,
      auth: "jwt",
      validate: {
        payload,
      },
    },
  };
};
