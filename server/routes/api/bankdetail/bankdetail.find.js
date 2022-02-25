"use strict";

module.exports = (server) => {
  const {
    controllers: {
        bankdetail: { find },
    },
    helpers:{
      permissions:{
        isAdminOrError,
      }
    }
  } = server.app;

  return {
    method: "GET",
    path: "/bank-detail",
    config: {
      pre: [
        {
          method:isAdminOrError,
          assign: "permission",
        },
      ],
      handler: find,
      auth: "jwt",
    },
    
  };
};
