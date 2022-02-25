"use strict";

module.exports = (server) => {
  const Schema = require("../../../schema/advert.schema")(server);
  const { params, payload } = Schema.updateByID()
  const {
    controllers: {
      advert: { updateByID },
    },
    helpers: {
      permissions: { isAdminOrError },
    },
  } = server.app;

  return {
    method: "PUT",
    path: "/ad/{id}",
    config: {
      pre: [{ method: isAdminOrError, assign: "permission" }],
      handler: updateByID,
      auth: "jwt",
      validate: {
        params,
        payload,
      },
    },
  };
};
