import SelectInput from "./Select.component";
import useServiceContextHook from "../../../../_hooks/service.context.hook";
import { useEffect, useState } from "react";

export default function AdvertType({ onChange, attributes }) {
  const {
    services: { type },
  } = useServiceContextHook();
  const [advertTypes, setAdvertTypes] = useState({ "": "All" });

  useEffect(() => {
    (async () => {
      try {
        let data = { "": "All" ,"MY_ADVERTS": "My Adverts" };
        if (data) setAdvertTypes((state) => ({ ...state, ...data }));
      } catch (err) {
        console.error(err);
      }
    })();
  }, []);
  
  return (
    <SelectInput
      onChange={onChange}
      attributes={{
        name: "payment-methods",
        id: "payment-methods",
        ...attributes,
      }}
      data={advertTypes}
    />
  );
}
