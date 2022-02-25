const WalletInterface = require("./wallet.interface");
const tatum = require("@tatumio/tatum");
const { Sequelize,Op } = require("sequelize");
const cmd = require("../services/commandline.utils");
const {FEE_TYPES} = require("../constants")

/**
 * @typedef GetmanagedwalletResponse
 * @property {String} mnemonic
 * @property {String} xpriv
 * @property {String} xpub
 * @property {String} testnet
 * @property {String} chain
 */

class WalletPlugin extends WalletInterface {
  /**
   *
   * @param {"BTC"|"ETH"|"BNB"|"XRP"|"USDT"} currency
   * @returns {WalletInterface}
   */
  #getWalletPlugin(currency) {
    try {
      let plugin = `./plugins/${String(currency).toUpperCase()}`;
      return require(plugin);
    } catch (error) {
      throw new Error(`${currency} plugin does not exist`);
    }
  }
  /**
   *
   * @param {import('./wallet.interface').WalletSchema} ref
   * @param {Number} amount
   * @param {Sequelize} [sequelize]
   * @param {Boolean} withAffiliate
   * @returns {Promise<Number>}
   */
  async getTotalCharges(ref, amount, sequelize, withAffiliate = true) {
    // return await this.#getWalletPlugin(ref.currency).getTotalCharges(ref,amount,sequelize)

    if (!amount) throw new Error("amount must be provided");

    // retrieve Fee and Affiliate models
    const { Fee } = sequelize.models;

    /**
     * @type {Model|null}
     */
    let affiliate;

    if (withAffiliate) {
      // find referrer if it exist
      let user = await ref.getUser()
      affiliate = user.referrer_id
    }

    /**
     * @type {Array}
     */
    const fees = await Fee?.findAll({
      where: {
        crypto: ref.currency,
        type: {
          [Op.in]: [
            FEE_TYPES.TRANSACTION,
            ...(affiliate ? [FEE_TYPES.COMMISSION] : []),
          ],
        },
      },
    });

    const total = fees.reduce((previous, current) => {
      return previous + Number(current.amount_in_percent);
    }, 0);

    return (total / 100) * Number(amount);
  }

  /**
   * @typedef GetChargesWallet
   * @property {Number|String} amount
   * @property {import('./wallet.interface').WalletSchema} wallet
   *
   */

  /**
   *
   * @param {import('./wallet.interface').WalletSchema} ref
   * @param {Number} amount
   * @param {Sequelize} [sequelize]
   * @param {Boolean} [withAffiliate=true]
   * @returns {Promise<GetChargesWallet>}
   */
  async getWalletsForTransactionFee(
    ref,
    amount,
    sequelize,
    withAffiliate = true
  ) {
    // return await this.#getWalletPlugin(ref.currency).getWalletsForTransactionFee(ref,amount,sequelize)
    if (!amount) throw new Error("amount must be provided");
    // retrieve Fee, Affiliate and Wallet models
    const { Fee, Affiliate, Wallet } = sequelize.models;

    let reffererWallet, affiliate;

    if (withAffiliate) {
      // check if this wallet user was reffered
      let user = await ref.getUser()
      /**
       * @type {Model|null}
       */
      affiliate = user.referrer_id
    }

    // if wallet user was reffered get reffer wallet
    if (affiliate) {
      reffererWallet = await Wallet.findOne({
        where: {
          currency: ref.currency,
          user_id: affiliate,
        },
      });
    }

    // get company wallet
    const companyWallet = await Wallet.findOne({
      where: {
        is_company_wallet: true,
        currency: ref.currency,
      },
    });

    // get charges fee for both commission and commission where commission is optional
    // depending on if affiliate exist

    /**
     * @type {Array}
     */
    const fees = await Fee.findAll({
      where: {
        crypto: ref.currency,
        type: {
          [Op.in]: [
            FEE_TYPES.TRANSACTION,
            ...(affiliate ? [FEE_TYPES.COMMISSION] : []),
          ],
        },
      },
    });

    // generate a list of object containing amount and the and the fee to be transfered to the wallet
    return fees.map((fee) => {
      if (fee.type == FEE_TYPES.TRANSACTION) {
        return {
          amount: (Number(fee.amount_in_percent) / 100) * Number(amount),
          wallet: companyWallet,
        };
      } else if (fee.type == FEE_TYPES.COMMISSION && reffererWallet) {
        return {
          amount: (Number(fee.amount_in_percent) / 100) * Number(amount),
          wallet: reffererWallet,
        };
      } else {
      }
    });
  }
  /**
   *
   * @param {import('./wallet.interface').WalletSchema} ref
   * @param {Number} amountToSend
   * @param {Sequelize} [sequelize]
   * @param {Boolean} [withAffiliate=true]
   * @returns {Promise<Boolean>}
   */
  async hasSufficientAmount(
    ref,
    amountToSend,
    sequelize,
    withAffiliate = true
  ) {
    // return this.#getWalletPlugin(ref.currency).hasSufficientAmount(ref,amountToSend)
    const { availableBalance } = await this.getBalance(ref);
    const charges = await this.getTotalCharges(
      ref,
      amountToSend,
      sequelize,
      withAffiliate
    );
      
    return Number(availableBalance) > Number(charges) + Number(amountToSend);
  }

  /**
   *
   * @param {import('./wallet.interface').WalletSchema} ref
   * @param {Number} quantity
   * @param {String} address
   * @param {Sequelize} [sequelize]
   */
  async transferToAddress(ref, quantity, address, sequelize) {
    return await this.#getWalletPlugin(ref.currency).transferToAddress(
      ref,
      quantity,
      address,
      sequelize
    );
  }

  /**
   *
   * @param {import('./wallet.interface').WalletSchema} ref
   * @param {import('./wallet.interface').WalletSchema} wallet
   * @param {Number} quantity
   * @param {Sequelize} [sequelize]
   */
  async transferToWallet(ref, wallet, quantity, sequelize) {
    return await this.#getWalletPlugin(ref.currency).transferToWallet(
      ref,
      wallet,
      quantity,
      sequelize
    );
  }

  /**
   *
   * @param {import('./wallet.interface').WalletSchema} ref
   * @param {String|Number} quantity
   * @param {Sequelize} [sequelize]
   * @returns {Promise<{id:string}|any>}
   */
  async freezeWallet(ref, quantity, sequelize) {
    try {
      // return this.#getWalletPlugin(ref.currency).freezeWallet(ref,quantity)
      if (quantity) {
        /**
         * @type {tatum.BlockAmount}
         */
        let blockAmount = {};
        blockAmount.amount = quantity.toString();
        blockAmount.type = "ORDER";
        return await tatum.blockAmount(ref.tatum_account_id,blockAmount);
      }
      
      await tatum.freezeAccount(ref.tatum_account_id);
      return { status: "success" };
    } catch (err) {
      console.error(err)
      return {status:"error"}
    }
  }

  /**
   *
   * @param {import('./wallet.interface').WalletSchema} ref
   * @param {String} blockageId
   * @param {Sequelize} [sequelize]
   */
  async unfreezeWallet(ref, blockageId, sequelize) {
    // return this.#getWalletPlugin(ref.currency).unfreezeWallet(ref,blockageId)
    try {
      if (blockageId) {
         await tatum.deleteBlockedAmount(blockageId);
      } else if (ref) {
         await tatum.deleteBlockedAmountForAccount(ref.tatum_account_id);
      }
      return {status:"success"}
    } catch (err) {
      console.error(err)
      return {status:"error"}
    }
  }

  /**
   *
   * @param {import('./wallet.interface').WalletSchema} ref
   * @param {Sequelize} [sequelize]
   * @returns {Promise<tatum.AccountBalance>}
   */
  async getBalance(ref, sequelize) {
    return this.#getWalletPlugin(ref.currency).getBalance(ref)
    
  }

  /**
   *
   * @param {import('./wallet.interface').WalletSchema} ref
   * @param {Sequelize} [sequelize]
   */
  async createTatumAccount(ref, sequelize) {
    try {
      return await this.#getWalletPlugin(ref.currency).createTatumAccount(
        ref,
        sequelize
      );
    } catch (err) {
      console.error(err)
    }
  }

  /**
   *
   * @param {import('./wallet.interface').WalletSchema} ref
   * @param {Sequelize} [sequelize]
   */
  async getTatumAccountById(ref, sequelize) {
    return await this.#getWalletPlugin(ref.currency).getTatumAccountById(
      ref,
      sequelize
    );
  }

  /**
   *
   * @param {import('./wallet.interface').WalletSchema} ref
   * @param {Sequelize} [sequelize]
   * @returns {Promise<GetmanagedwalletResponse>}
   */
  async getmanagedwallet(ref, sequelize) {
    return await cmd(`tatum-kms getmanagedwallet ${ref.signature_id}`);
  }

  /**
   *
   * @param {import('./wallet.interface').WalletSchema} ref
   * @param {Sequelize} [sequelize]
   */
  async removewallet(ref, sequelize) {
    await cmd(`tatum-kms removewallet ${ref.signature_id}`);
  }

  /**
   *
   * @param {import('./wallet.interface').WalletSchema} ref
   * @param {Number} index
   * @param {Sequelize} [sequelize]
   * @returns {Promise<{privateKey:string}>}
   */
  async getprivatekey(ref, index = 0, sequelize) {
    return await cmd(`tatum-kms getprivatekey ${ref.signature_id} ${index}`);
  }

  /**
   *
   * @param {import('./wallet.interface').WalletSchema} ref
   * @param {Number} index
   * @param {Sequelize} [sequelize]
   * @returns {Promise<{address:string}>}
   */
  async getaddress(ref, index = 0, sequelize) {
    return await cmd(`tatum-kms getaddress ${ref.signature_id} ${index}`);
  }

  async exportAllKeys() {
    return await cmd("tatum-kms export");
  }



  async getBalanceByDepositTag(ref){
    
  }
}

module.exports = new WalletPlugin();
