"use strict";

module.exports = {
  async afterFind(findResult, options) {
    if (!findResult) return;
    if (!Array.isArray(findResult)) findResult = [findResult];

    for (const instance of findResult) {
      if (instance instanceof this) {
        let user = await instance?.getUser();

        instance.dataValues = {
          ...instance.dataValues,
          user: user?.dataValues,
        };
      }
    }
  },
};
