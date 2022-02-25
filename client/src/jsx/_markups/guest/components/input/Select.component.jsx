import { Selector } from "../styled.component";
export default function SelectInput({
  onChange = () => null,
  attributes,
  data,
  transformValue = (value) => value,
}) {
  return (
    <Selector onChange={(e) => onChange(e.target?.value)} {...attributes}>
      {typeof data == "object" && Array?.isArray(data)
        ? data?.map((item, index) => (
            <option
              key={index}
              value={item}
              style={{ textTransform: "capitalize" }}
            >
              {transformValue(String(item).replace(/[-_]/gi, " "))}
            </option>
          ))
        : Object.keys(data)?.map((key) => (
            <option
              key={key}
              value={key || ""}
              style={{ textTransform: "capitalize" }}
            >
              {transformValue(String(data[key]).replace(/[-_]/gi, " "))}
            </option>
          ))}
    </Selector>
  );
}
