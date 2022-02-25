"use strict";
const { Model, Op } = require("sequelize");
const _ = require("underscore");
const {
  TABLE_NAMES,
  SUPPORTED_TOKENS,
  SUPPORTED_FIAT,
  FEE_TYPES,
  LOG_TYPES
} = require("../../constants");
const hooks = require("../hooks/wallet.hook");
const faker = require("faker");
let walletPlugin = require("../../wallet.plugin");

const all_currencies_names = {
  ...SUPPORTED_TOKENS,
  // ...SUPPORTED_FIAT,
};
const all_currencies_codes = Object.keys(all_currencies_names);

module.exports = (sequelize, DataTypes) => {
  class Wallet extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      const { User, Wallet } = models;
      // User
      Wallet.belongsTo(User, {
        foreignKey: "user_id",
      });
      User.hasMany(Wallet);
    }

    static generateCompanyWallets = async () => {
      const companyWallets = await this.findAll({
        where: {
          is_company_wallet: true,
        },
      });
      const presentCurrencies = companyWallets.map((c) =>
        c.dataValues.currency.toUpperCase()
      );

      const currenciesNotPresent = Object.keys(SUPPORTED_TOKENS).filter(
        (currency) => !presentCurrencies.includes(currency)
      );

      await Promise.all(
        currenciesNotPresent.map((currency) => {
          return this.create({ currency });
        })
      );

      return { status: "success" };
    };

    static FAKE(count) {
      let rows = [],
        result = {},
        index = 0;
      let generateFakeData = () => {
        let currencyCode = faker.helpers.randomize(all_currencies_codes);
        let amount = faker.finance.amount();
        const { User } = this.sequelize.models;
        return {
          id: faker.datatype.uuid(),
          address: faker.finance.bitcoinAddress(),
          frozen: faker.datatype.boolean(),
          createdAt: faker.datatype.datetime(),
          updatedAt: faker.datatype.datetime(),
          is_company_wallet: false,
          currency: currencyCode,
          account: {
            balance: {
              accountBalance: amount,
              availableBalance: faker.helpers.randomize([
                amount - 100,
                amount - 200,
                amount,
                amount - 50,
              ]),
            },
            currency: currencyCode,
            frozen: faker.datatype.boolean(),
            active: faker.datatype.boolean(),
            customerId: faker.datatype.uuid(),
            xpub: `xpub${faker.finance.bitcoinAddress()}`,
          },
          user: User.FAKE(),
        };
      };
      if (count > 1) {
        for (; index < count; ++index) {
          rows.push(generateFakeData());
        }
        result = { count, rows };
      } else result = { ...generateFakeData() };
      return result;
    }

    /**
     *
     * @param {Number|String} amount
     * @param {Boolean} [withAffiliate=true]
     * @returns {Promise<Number>}
     */
    getTotalCharges = async (amount, withAffiliate = true) => {
      
      return await walletPlugin.getTotalCharges(
        this,
        amount,
        sequelize,
        withAffiliate
      );
    };

    /**
     * @typedef GetChargesWallet
     * @property {Number|String} amount
     * @property {Model} wallet
     *
     */

    /**
     * this function return a list of object containing amount and wallet
     * [{amount:0.03,wallet:Wallet},...]
     * @param {Number|String} amount
     * @param {Boolean} [withAffiliate=true]
     * @returns {Promise<GetChargesWallet[]>}
     */
    getWalletsForTransactionFee = async (amount, withAffiliate = true) => {
      return await walletPlugin.getWalletsForTransactionFee(
        this,
        amount,
        sequelize,
        withAffiliate
      );
    };

    /**
     *
     * @param {Number|String} amountToSend
     * @param {Boolean} [withAffiliate=true]
     * @returns {Promise<Boolean>}
     */
    hasSufficientAmount = async (amountToSend, withAffiliate = true) => {
      return await walletPlugin.hasSufficientAmount(
        this,
        amountToSend,
        sequelize,
        withAffiliate
      );
    };

    /**
     *
     * @param {Number} quantity
     * @param {String} address
     * @returns {Promise}
     */
    transferToAddress = async (quantity, address) => {
      // return walletServices.transferToAddress(this, address, quantity);
      return await walletPlugin.transferToAddress(
        this,
        quantity,
        address,
        sequelize
      );
    };

    /**
     *
     * @param {Object} params
     * @param {Wallet} params.wallet
     * @param {Number} params.quantity
     * @returns {Promise}
     */
    transferToWallet = async ({ wallet, quantity }) => {
      return await walletPlugin.transferToWallet(
        this,
        wallet,
        quantity,
        sequelize
      );
    };

    /**
     *
     * @param {Number} quantity
     * @returns {Promise<{id:string}|any>}
     */
    freezeWallet = async (quantity) => {
      return await walletPlugin.freezeWallet(this, quantity && quantity.toString(),sequelize);
    }

    unfreezeWallet = async (blockageId)=> {
      return await walletPlugin.unfreezeWallet(this,blockageId,sequelize);
    }
     

    getBalance = async () =>{
      return await walletPlugin.getBalance(this,sequelize);
    }
    
    /**
     * 
     * @param {import('../../schema/logger.metadata.schema').TRADESSchema} metadata 
     * @returns {Promise<import('../../schema/others').StatusResponse>}
     */
    async logTrade(metadata){
      
      /**
       * @type Model
       */
      const Logger = sequelize.models.Logger
      await Logger.create({
        type:LOG_TYPES.TRADES,
        metadata
      })

      return {status:"success",message:"transaction log has been created"}
    }

    /**
     * 
     * @param {import('../../schema/logger.metadata.schema').TRANSACTIONSSchema} metadata 
     * @returns {Promise<import('../../schema/others').StatusResponse>}
     */
    async logTransaction(metadata){
      
      /**
       * @type Model
       */
      const Logger = sequelize.models.Logger
      await Logger.create({
        type:LOG_TYPES.TRANSACTIONS,
        metadata
      })

      return {status:"success",message:"transaction log has been created"}
    }

    /**
     * 
     * @param {import('../../schema/logger.metadata.schema').COMMISSIONSchema} metadata 
     * @returns {Promise<import('../../schema/others').StatusResponse>}
     */
    async logCommission(metadata){

      /**
       * @type Model
       */
      const Logger = sequelize.models.Logger
      await Logger.create({
        user_id:this.user_id,
        type:LOG_TYPES.COMMISSION,
        metadata
      })

      return {status:"success",message:"commission log has been created"}
    }

    toPublic() {
      return _.pick(this, "extended_pub", "asset", "address");
    }
  }

  Wallet.init(
    {
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
      },
      user_id: {
        type: DataTypes.UUID,
        allowNull: true,
      },
      signature_id: DataTypes.UUID,
      tatum_account_id: DataTypes.STRING,
      memo: DataTypes.STRING,
      mnemonic: DataTypes.STRING,
      destination_tag: DataTypes.STRING,
      derivation_key: DataTypes.INTEGER,
      address: DataTypes.STRING,
      frozen: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
      currency: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      // create companies account
      is_company_wallet: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
    },
    {
      sequelize,
      modelName: "Wallet",
      underscored: true,
      tableName: TABLE_NAMES?.WALLET || "tbl_wallets",
      hooks,
    }
  );
  return Wallet;
};
