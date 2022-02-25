import Services from "./Services";

class TransactionService extends Services {
  constructor(init) {
    super(init);
    this._name = "TRANSACTION";
    return this;
  }
  // FIND ------------------------------------------------------------------
  /**
   * @function find
   * @param {Object} params
   * @returns
   */
  find = async (params) => {
    return await this.decorate(
      async () =>
        await this.axios(`transaction`, {
          method: "GET",
          params,
        })
    );
  };
  /**
   * @function findByID
   * @param {String} id
   * @param {Object} params
   * @returns
   */
  findByID = async (id, params) => {
    return await this.decorate(
      async () =>
        await this.axios(`transaction/${id}`, {
          method: "GET",
          params,
        })
    );
  };
}

export default TransactionService;
