const model = require("../../services/model");

module.exports = (server) => {
  const {
    db,
    db: { User },
    consts: { roles: _roles },
  } = server.app;

  return {
    async __create(model, payload, options) {
      return await db[model].create(payload, options);
    },
    async __destroy(model, where, force, options = {}) {
      return await db[model].destroy(
        { where, force },
        { ...options, logging: console.log }
      );
    },

    async __update(model, values, options) {
      let [affectedRowCount, affectedRow] = await db[model]?.update(values, {
        ...options,
        logging: console.log,
      });
      return {
        status: Boolean(affectedRowCount),       
      };
    },

    async __upsert(model, values, options) {
      return await db[model]?.upsert(values, options);
    },
  };
};
