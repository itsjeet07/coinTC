import SelectInput from "./Select.component";
import useServiceContextHook from "../../../../_hooks/service.context.hook";
import { useEffect, useState } from "react";

export default function FiatCurrency({ onChange, attributes, altTitle = 'Fiat'}) {
  const {
    services: { type },
  } = useServiceContextHook();
  const [currencies, setCurrencies] = useState({ "": altTitle });

  useEffect(async () => {
    try {
      let { data } = await type.findByName("supported_fiat");
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
          name: "fiat-currencies",
          id: "fiat-currencies",
          ...attributes,
        },
      }}
      data={currencies}
    />
  );
}
