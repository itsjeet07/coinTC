import SelectInput from "./Select.component";
import useServiceContextHook from "../../../../_hooks/service.context.hook";
import { useEffect, useState } from "react";
/* const currencies = {
  ALL: null,
  USDT: "usdt",
  BTC: "btc",
  EOS: "eos",
  ETH: "eth",
  XRP: "xrp",
};
 */
export default function CryptoCurrencySelector({
  onChange,
  attributes,
  altTitle = "Crypto",
}) {
  const {
    services: { type },
  } = useServiceContextHook();
  const [currencies, setCurrencies] = useState({ "": altTitle });

  useEffect(async () => {
    try {
      let { data } = await type.findByName("supported_tokens");
      if (data) setCurrencies((state) => ({ ...state, ...data }));
    } catch (err) {
      console.error(err);
    }
  }, []);
  return (
    <SelectInput
      onChange={onChange}
      attributes={{
        ...{
          name: "crypto-currencies",
          id: "crypto-currencies",
          ...attributes,
        },
      }}
      transformValue={(value) => String(value)[0]?.toUpperCase() + value?.substring(1)}
      data={currencies}
    />
  );
}
