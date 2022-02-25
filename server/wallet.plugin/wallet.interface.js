const { Sequelize } = require("sequelize");
const Tatum = require("@tatumio/tatum");

/**
 * @typedef {{id:String,user_id: String,signature_id: String,tatum_account_id: String,derivation_key: Number,address: String,frozen: Boolean,currency: String,is_company_wallet: Boolean}} WalletSchema
 */

class WalletInterface {
  constructor() {
    this.testnet = process.env.NODE_ENV == "development" ? true : false;
    this.Tatum = Tatum;
  }
  /**
   *
   * @param {WalletSchema} ref
   * @param {Number} amount
   * @param {Sequelize} [sequelize]
   * @param {Boolean} withAffiliate
   * @returns {Promise<Number>}
   */
  async getTotalCharges(ref, amount, sequelize, withAffiliate) {
    throw new Error("getTotalCharge(ref,amount) is not implemented");
  }
  /**
   *
   * @param {WalletSchema} ref
   * @param {Number} amount
   * @param {Sequelize} [sequelize]
   * @param {Boolean} [withAffiliate=true]
   * @returns {Promise<GetChargesWallet>}
   */
  async getWalletsForTransactionFee(ref, amount, sequelize, withAffiliate) {
    throw new Error(
      "getWalletsForTransactionFee(ref,amount) is not implemented"
    );
  }

  /**
   *
   * @param {WalletSchema} ref
   * @param {Number} amountToSend
   * @param {Sequelize} [sequelize]
   * @param {Boolean} [withAffiliate=true]
   * @returns {Promise<Boolean>}
   */
  async hasSufficientAmount(ref, amountToSend, sequelize) {
    throw new Error("hasSufficientAmount(ref,amountToSend) is not implemented");
  }

  /**
   *
   * @param {WalletSchema} ref
   * @param {Number} quantity
   * @param {String} address
   * @param {Sequelize} [sequelize]
   */
  async transferToAddress(ref, quantity, address, sequelize) {
    throw new Error(
      "transferToAddress(ref,quantity,address) is not implemented"
    );
  }

  /**
   *
   * @param {WalletSchema} ref
   * @param {WalletSchema} wallet
   * @param {Number} quantity
   * @param {Sequelize} [sequelize]
   */
  async transferToWallet(ref, wallet, quantity, sequelize) {
    throw new Error("transferToWallet(ref,wallet,quantity) is not implemented");
  }

  /**
   *
   * @param {WalletSchema} ref
   * @param {Number|String} quantity
   * @param {Sequelize} [sequelize]
   * @returns {Promise<{id:string}|any>}
   */
  async freezeWallet(ref, quantity, sequelize) {
    throw new Error("freezeWallet(ref,quantity) is not implemented");
  }

  /**
   *
   * @param {WalletSchema} ref
   * @param {String} blockageId
   * @param {Sequelize} [sequelize]
   */
  async unfreezeWallet(ref, blockageId, sequelize) {
    throw new Error("unfreezeWallet(ref,blockageId) is not implemented");
  }

  /**
   *
   * @param {WalletSchema} ref
   * @param {Sequelize} [sequelize]
   */
  async getBalance(ref, sequelize) {
    try {
      return await this.Tatum.getAccountBalance(ref.tatum_account_id);
    } catch (err) {}
  }

  /**
   *
   * @param {WalletSchema} ref
   * @param {Sequelize} [sequelize]
   */
  async createTatumAccount(ref, sequelize) {
    throw new Error(`createTatumAccount(${ref.toString()}) is not implemented`);
  }

  /**
   *
   * @param {WalletSchema} ref
   * @param {Sequelize} [sequelize]
   */
  // async getTatumAccountById(ref, sequelize) {
  //   throw new Error("getTatumAccountById(ref,sequelize) is not implemented");
  // }
  async getTatumAccountById(ref, sequelize) {
    return await this.Tatum.getAccountById(ref.tatum_account_id);
  }
  /**
   *
   * @param {WalletSchema} ref
   * @param {Sequelize} [sequelize]
   * @returns {Promise<GetmanagedwalletResponse>}
   */
  async getmanagedwallet(ref, sequelize) {
    throw new Error("getmanagedwallet(ref,sequelize) is not implemented");
  }

  /**
   *
   * @param {WalletSchema} ref
   * @param {Sequelize} [sequelize]
   */
  async removewallet(ref, sequelize) {
    throw new Error("removewallet(ref,sequelize) is not implemented");
  }

  /**
   *
   * @param {WalletSchema} ref
   * @param {Number} index
   * @param {Sequelize} [sequelize]
   * @returns {Promise<{privateKey:string}>}
   */
  async getprivatekey(ref, index = 0, sequelize) {
    throw new Error("getprivatekey(ref,index=0,sequelize) is not implemented");
  }

  /**
   *
   * @param {WalletSchema} ref
   * @param {Number} index
   * @param {Sequelize} [sequelize]
   * @returns {Promise<{address:string}>}
   */
  async getaddress(ref, index = 0, sequelize) {
    throw new Error("getaddress(ref,index=0,sequelize) is not implemented");
  }

  async exportAllKeys() {
    throw new Error("exportAllKeys() is not implemented");
  }

  /**
   *
   * @param {WalletSchema} ref
   * @param {Number} index
   * @param {Sequelize} [sequelize]
   * @returns {Promise<{address:string}>}
   */
  async generateAddressFromXpub(ref,index=0,sequelize){
    return this.Tatum.generateAddressFromXPub(ref.currency,ref.address,this.testnet,index)
  }

  /**
   *
   * @param {WalletSchema} ref
   * @param {String} privateKey
   * @param {Sequelize} [sequelize]
   * @returns {Promise<{address:string}>}
   */
  async generateAddressFromPrivatekey(ref,privateKey,sequelize){
    return this.Tatum.generateAddressFromPrivatekey(ref.currency,this.testnet,privateKey)
  }
}

module.exports = WalletInterface;
