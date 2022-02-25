const WalletInterface = require("../wallet.interface");
const cmd = require("../../services/commandline.utils");
const tatum = require("@tatumio/tatum");

class USDTWallet extends WalletInterface {
  constructor() {
    super();
    this._name = "USDT";
    return this;
  }

  /**
   *
   * @param {import('../wallet.interface').WalletSchema} ref
   * @param {Sequelize} [sequelize]
   * @returns {Promise<{balance:number}>}
   */
   async getBalance(ref,sequelize){
    const contractAddress = process.env.USDT_CONTRACT_ADDRESS
    return await this.Tatum.ethGetAccountErc20Address(ref.address,contractAddress)
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
    let balance;
    const account = await this.Tatum.getAccountById(ref.tatum_account_id);
    if(!this.testnet){
      balance = await this.getBalance(ref)

    }
    return {...account,...(balance&&{usdtBalance:balance.balance})}

  }



  /**
   *
   * @param {import('../wallet.interface').WalletSchema} ref
   * @param {Sequelize} [sequelize]
   * @returns {Promsie<CreateTatumAccountResponse>}
   */
  async createTatumAccount(ref, sequelize) {
    /**
     * @typedef CmdResponse
     * @property {String} signatureId
     * @property {String} xpub
     */

    /**
     * @type {CmdResponse}
     */
    let command = `tatum-kms generatemanagedwallet ETH`;
      const { signatureId, xpub,mnemonic } = this.testnet
        ? await this.Tatum.generateWallet("ETH", this.testnet)
        : await cmd(command);

    const account = await tatum.createAccount(
      {
        currency: "ETH",
        customer: { externalId: ref.user_id },
        xpub,
        accountingCurrency: "USD",
      },
      this.testnet
    );

    const address = await this.Tatum.generateDepositAddress(account.id)
    return { signatureId, mnemonic,account,address };
  }


  /**
   *
   * @param {WalletSchema} ref
   * @param {WalletSchema} wallet
   * @param {Number} qty
   * @param {Sequelize} [sequelize]
   */
  async transferToWallet(ref, wallet, qty, sequelize) {
    const from = ref;
    const to = wallet;
    /**
     * @type {Array}
     */
    const chargeWallets = await from.getWalletsForTransactionFee(qty);

    // get total charges
    const charges = await from.getTotalCharges(qty);

    // get affiliate wallet
    // get company wallet
    // get affiliate fee
    // get company fee

    /**
     * @type {WalletObject}
     */
    const companyWallet = chargeWallets.find(
      (v) => v?.wallet?.is_company_wallet
    );

    if (!companyWallet)
      throw new Error(`CoinTC does not have wallet for ${from.currency}.`);

    throw new Error(`transaction for ${from.currency} not implemented.`);
  }
}

module.exports = new USDTWallet();
