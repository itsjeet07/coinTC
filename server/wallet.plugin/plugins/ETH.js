const WalletInterface = require("../wallet.interface");
const tatumApi = require("../../services/tatumApi");
const cmd = require("../../services/commandline.utils");
const tatum = require("@tatumio/tatum");

class ETHWallet extends WalletInterface {
  constructor() {
    super();
    this._name = "ETH";
    return this;
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

    const account = await tatum.createAccount(
      {
        currency: ref.currency,
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
   * @param {import('../wallet.interface').WalletSchema} ref
   * @param {import('../wallet.interface').WalletSchema} wallet
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

    /**
     * @type {Object} body
     */
    let body = {};

    // {
    // "nonce": 0,
    // "address": "0x687422eEA2cB73B5d3e242bA5456b782919AFc85",
    // "amount": "100000",
    // "compliant": false,
    // "signatureId": "26d3883e-4e17-48b3-a0ee-09a3e484ac83",
    // "index": 0,
    // "paymentId": "1234",
    // "senderAccountId": "5e68c66581f2ee32bc354087",
    // "senderNote": "Sender note",
    // "gasLimit": "40000",
    // "gasPrice": "20"
    // }

    // send to recepient
    body.senderAccountId = from.tatum_account_id;
    body.address = to.address;
    body.amount = qty?.toString();
    body.compliant = false;
    body.signatureId = from.signature_id;

    const results =  await Promise.all([
      tatumApi.OffChain.blockchainTransfer({
        data: body,
        currency: from.currency,
      }),
      ...chargeWallets.map((walletData) => {
        let body = {};
        body.senderAccountId = from.tatum_account_id;
        body.address = walletData?.wallet?.address;
        body.amount = walletData?.amount?.toString();
        body.compliant = false;
        body.signatureId = from.signature_id;
        return tatumApi.OffChain.blockchainTransfer({
          data: body,
          currency: from.currency,
        });
      }),
    ]);
    
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
    //    {
    //     "senderAccountId": "35ab5ea8e48c4b179cadea653c6d732e",
    //     "address": "tbnb1q82g2h9q0kfe7sysnj5w7nlak92csfjztymp39",
    //     "amount": "10000",
    //     "compliant": false,
    //     "attr": "12355",
    //     "paymentId": "1234",
    //     "signatureId": "26d3883e-4e17-48b3-a0ee-09a3e484ac83",
    //     "fromAddress": "tbnb1q82g2h9q0kfe7sysnj5w7nlak92csfjztymp39",
    //     "senderNote": "Sender note"
    //     }
    const body = {};
    body.senderAccountId = from.tatum_account_id;
    body.address = address;
    body.amount = qty?.toString();
    body.compliant = false;
    body.signatureId = from.signature_id;

    return await Promise.all([
      tatumApi.OffChain.blockchainTransfer({
        data: companyBody,
        currency: from.currency,
      }),
      ...chargeWallets.map((walletData) => {
        let body = {};
        body.senderAccountId = from.tatum_account_id;
        body.address = walletData?.wallet?.address;
        body.amount = walletData?.amount?.toString();
        body.compliant = false;
        body.signatureId = from.signature_id;
        return tatumApi.OffChain.blockchainTransfer({
          data: body,
          currency: from.currency,
        });
      }),
    ]);
  }
}

module.exports = new ETHWallet();
