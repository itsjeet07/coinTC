"use strict";
const Tatum = require("@tatumio/tatum")
const boom = require("@hapi/boom")


module.exports = function TestController(server) {
  const {
    db: {
      User,
      Profile,
      Kyc,
      sequelize,
      Sequelize: { Op },
    },
    boom,
    config: { base_url },
    consts: { KYC_STATUSES, KYC_TYPES },
    helpers: {
      decrypt,
      jwt,
      generator,
      paginator,
      filters,
      encrypt,
      validateAndFilterAssociation,
    },
    mailer,
  } = server.app;

  return {
    async sendOTP(req) {
      const {
        pre: {
         permission: { user },
        },
        payload: { email, phone },
      } = req;

      return user.sendOTP({ email });
    },
    async wallet(req) {
      const {
        pre: {
          user: { user },
        },
        // payload: { email, phone },
      } = req;

      // await user.createSupportedWallet()
      //  await user.createWallet({
      //   currency:"USDT"
      // })

      

      try {
        
        
        let [wallet,...rest] = await user.getWallets({
          where:{
            currency:"BTC"
          }
        })
        
        // let balance =  await wallet.getBalance()
        // let freeze =  await wallet.freezeWallet(20)
        // let unfreeze =  await wallet.unfreezeWallet()
        let sufficient =  await wallet.hasSufficientAmount(20)

        // let chargesWallets = await wallet.getWalletsForTransactionFee(20)
        // let getTotalCharges = await  wallet.getTotalCharges(20)

        return {}
      } catch (error) {
        console.error(error)
        return boom.boomify(error)
      }
    },
  };
};
