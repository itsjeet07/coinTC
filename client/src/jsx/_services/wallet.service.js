import Services from "./Services";

/**
 * Class of all Group services
 * @class
 */
export default class WalletServices extends Services {
  constructor(init) {
    super(init);
    this._name = "WALLET";
    return this;
  }

  /************************* WALLET ******************************/
  /**
   * @function find - Gets wallets (**Admin only**)
   * @param {Object} params
   * @returns
   */
  find = async (params) => {
    return await this.decorate(
      async () =>
        await this?.axios(`wallet`, {
          method: "GET",
          params,
        })
    );
  };

  /**
   * @function findByID - Gets a wallet balances (**Admins only**)
   * @param {string} [id] - Wallet ID
   * @param {Object} params - Response limit
   * @returns
   */
  findByAddress = async (address, params) => {
    return await this.decorate(
      async () =>
        await this?.axios(`wallet/${address}`, {
          method: "GET",
          params,
        })
    );
  };
}
