import { useTranslation } from 'react-i18next'
const sharedStyles = {

  padding: 20,
  width: "100%",
  textAlign: "center",

  height: 200,
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
};

const HeadlineStyle = {
  fontSize: 20,
  fontWeight: 600,
};
function Empty() {
  const { t } = useTranslation()
  return (
    <div style={sharedStyles}>
      <h3 style={HeadlineStyle}>{t("No records found!")}</h3>
    </div>
  );
}

export function Table({ cols = 1 }) {
  const { t } = useTranslation()
  return (
    <tr>
      <td colSpan={cols} className="">
        <div style={sharedStyles}>{t("No records found!")}</div>
      </td>
    </tr>
  );
}
export function Chat() {
  const { t } = useTranslation()
  return (
    <div style={{ ...sharedStyles, height: "100%" }}>
      <h3 style={HeadlineStyle}>{t("No Active Chat")}</h3>
      <p>{t("Select a contact to begin chatting with them")}</p>
    </div>
  );
}
export function Loading() {
  const { t } = useTranslation()
  return (
    <div style={{ ...sharedStyles, height: "100%" }}>
      <p>{t("Loading...")}</p>
    </div>
  );
}

export default Object.assign(Empty, {
  Table,
  Loading,
  Chat,
});
