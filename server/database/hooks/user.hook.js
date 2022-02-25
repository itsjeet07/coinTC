const { encrypt } = require("../../helpers");
const _ = require("underscore");
const { ORDER_STATUSES } = require("../../constants");
const { Sequelize } = require("sequelize");
module.exports = {
  // prioryty 1
  // beforeBulkCreate:async (instances,options)=>{

  // },
  // beforeBulkDestroy:async (options)=>{

  // },
  // beforeBulkUpdate:async (options)=>{

  // },

  // prioryty 4
  async beforeCreate(instance, options) {
    if (!instance) return;
    instance.password = await encrypt(instance.password);
  },

  async afterFind(findResult, options) {
    if (!findResult) return;
    let trim = options?.trim ?? true;
    if (!Array.isArray(findResult)) findResult = [findResult];

    let { Op } = Sequelize;
    for (const instance of findResult) {
      let profile = await instance.getProfile();
      let total_orders = await instance?.countOrders();

      let total_completed_orders = await instance?.countOrders({
        where: { status: ORDER_STATUSES?.COMPLETED },
      });

      // additional data
      let total_number_of_friends,total_numbers_of_traded_friend,your_earnings

      // total_number_of_friends = instance.getAffliate

      let total_adverts = await instance?.countAdverts();
      let total_positive_reviews = await instance?.countOrders({
        where: { status: ORDER_STATUSES?.COMPLETED, rating: { [Op.gt]: 2 } },
      });
      let total_negative_reviews = await instance?.countOrders({
        where: { status: ORDER_STATUSES?.COMPLETED, rating: { [Op.lt]: 3 } },
      });
      let addresses = await instance.getAddresses();
      // let security = await instance.getKyc();

      let compiled = {
        profile: profile?.toJSON(),
        ...(trim
          ? _.omit(instance?.toJSON(), ["password"])
          : instance?.toJSON()),
        total_adverts,
        total_orders,
        total_completed_orders,
        total_positive_reviews,
        total_negative_reviews,
        addresses
      };
      instance.dataValues = {
        ...compiled,
      };
    }
  },
  // beforeDestroy:async (instance,options)=>{

  // },
  // beforeUpdate:async (instance,options)=>{

  // },
  // beforeSave:async (instance,options)=>{

  // },
  // beforeUpsert:async (values,options)=>{

  // },

  // prioryty 5
  // afterCreate:async (instance,options)=>{
    
  // },
  // afterDestroy:async (instance,options)=>{

  // },
  //   afterUpdate: async (instance, options) => {
  //     let profile = await instance.getProfile();

  //     if (instance)
  //       instance.dataValues = {
  //         ...profile?.dataValues,
  //         ...instance?.dataValues,
  //       };
  //   },
  // afterSave:async (instance,options)=>{

  // },
  // afterUpsert:async (created,options)=>{

  // },

  // priority 6

  // afterBulkCreate:async (instances,options)=>{

  // },
  // afterBulkDestroy:async (options)=>{

  // },
  // afterBulkUpdate:async (options)=>{

  // },
};
