import Services from "./Services";

export default class Coingecko extends Services {
    constructor(init) {
      super(init);
      return this;
    }

    cryptoToCurrency = async (id,curr) => {
        return await this.decorate(
          async () =>
            await this.axios("https://api.coingecko.com/api/v3/simple/price?ids="+id+"&vs_currencies="+curr, {
              method: "GET",
            })
        );
      };

}