const WalletInterface = require("../wallet.interface");
const cmd = require("../../services/commandline.utils");
const tatum = require("@tatumio/tatum");

/**
 * @typedef CreateTatumAccountResponse
 * @property {tatum.Account} account
 * @property {tatum.Address} address
 * @property {String} signatureId
 * @property {String} [memo]
 * @property {String} [tag]
 */

class BTCWallet extends WalletInterface {
  constructor() {
    super();
    this._name = "BTC";
    return this;
  }
  /**
   *
   * @param {import('../wallet.interface').WalletSchema} ref
   * @param {import('../wallet.interface').WalletSchema} wallet
   * @param {Number} quantity
   * @param {Sequelize} [sequelize]
   */
  async transferToWallet(ref, wallet, quantity, sequelize) {
    // return walletServices.transferBetweenWallet(this.constructor, {
    //   from: this,
    //   to: wallet,
    //   qty,
    // });
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
    let command = `tatum-kms generatemanagedwallet ${ref.currency}`;
    const { signatureId, xpub,mnemonic } = this.testnet
      ? await this.Tatum.generateWallet(ref.currency, this.testnet)
      : await cmd(command);

    const account = await this.Tatum.createAccount(
      {
        currency: ref.currency,
        customer: {
          externalId: ref.user_id,
        },
        xpub,
        accountingCurrency: "USD",
      },
      this.testnet
    );

    const address = await this.Tatum.generateDepositAddress(account.id)
    return { signatureId,mnemonic, account,address };
  }

  /**
   *
   * @param {import('../wallet.interface').WalletSchema} ref
   * @param {import('../wallet.interface').WalletSchema} wallet
   * @param {Number} qty
   * @param {Sequelize} [sequelize]
   */
  async transferToWallet(ref, wallet, qty, sequelize) {
    this.Tatum.sendBitcoinOffchainTransaction()
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

    /**
     * @type {Object} body
     */
    let body = {};

    const { xpub } = await tatum.getAccountById(from.tatum_account_id);
    body.senderAccountId = from.tatum_account_id;
    body.signatureId = from.signature_id;
    body.address = [
      to.address,
      ...chargeWallets.map((walletData) => walletData.wallet.address),
    ].join(",");

    body.amount = (Number(qty) + Number(charges))?.toString();
    body.xpub = xpub;
    body.compliant = false;
    body.multipleAmounts = [
      qty?.toString(),
      ...chargeWallets.map((walletData) => walletData?.amount?.toString()),
    ];

    const results =  await tatumApi.OffChain.blockchainTransfer({
      data: body,
      currency: from.currency,
    });


    chargeWallets.filter(({wallet})=>!wallet.is_company_wallet).forEach(async ({wallet,amount})=>{
      /**
       * @type {import('../../schema/logger.metadata.schema').COMMISSIONSchema}
       */
      let metadata = {}
      metadata.commission_earned = amount
      metadata.distribution_status =  "SUCCESS"
      metadata.friend_trade_datetime = new Date()
      metadata.friends_user_id = from.user_id
      metadata.order_type = ''
      await wallet.logCommission(metadata)
    })

    return results
  }

  /**
   *
   * @param {import('../wallet.interface').WalletSchema} ref
   * @param {Number} qty
   * @param {String} address
   * @param {Sequelize} [sequelize]
   */
  async transferToAddress(ref, qty, address, sequelize) {
    const from = ref;

    /**
     * @type {Array}
     */
    const chargeWallets = await from.getWalletsForTransactionFee(qty, false);

    // get total charges
    const charges = await from.getTotalCharges(qty, false);

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

    /**
     * @type {Object} body
     */
    let body = {};

    const { xpub } = await tatum.getAccountById(from.tatum_account_id);
    body.senderAccountId = from.tatum_account_id;
    body.signatureId = from.signature_id;
    body.address = [
      address,
      ...chargeWallets.map((walletData) => walletData.wallet.address),
    ].join(",");

    body.amount = (Number(qty) + Number(charges))?.toString();
    body.xpub = xpub;
    body.compliant = false;
    body.multipleAmounts = [
      qty?.toString(),
      ...chargeWallets.map((walletData) => walletData?.amount?.toString()),
    ];

    return await tatumApi.OffChain.blockchainTransfer({
      data: body,
      currency: from.currency,
    });
  }
}

module.exports = new BTCWallet();
