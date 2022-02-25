import Services from "./Services";

class CoingeckoServices extends Services {
    constructor(init) {
        super(init);
        this._name = "COINGECKO";
        return this;
    }

    cryptoVsFiatPrice = async (crypto, fiat) => {
        return await this.decorate(
            async () =>
                await this.axios(`https://api.coingecko.com/api/v3/simple/price?ids=${crypto}&vs_currencies=${fiat}`, {
                    method: "GET"
                })
        )
    }
}

export default CoingeckoServices;