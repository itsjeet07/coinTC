import { useTranslation } from 'react-i18next'
import { Link } from "react-router-dom";
import usePaginatorHook from "../../../../_hooks/paginator.hook.js";
// HELPERS
import { routeMap } from "../../routes";

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
function Feedback({
  redirectTo = routeMap?.home,
  linkText = "Back to Home",
  hasLink = false
}) {
  const { t } = useTranslation()
  linkText = t(linkText)
  return (
    <div style={sharedStyles}>
      <h3 style={HeadlineStyle}>{t("No records found!")}</h3>
      {hasLink && <Link to={redirectTo} className="btn btn-primary mt-3">
        {linkText}
      </Link>
      }
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

export function Loading() {
  const paginator = usePaginatorHook();
  const { count, page, setCount, limit, Skeleton } = paginator;
  const { t } = useTranslation()
  return (
    <div
      style={{
        padding: "10px 70px 70px",
        position: "relative",
        overflow: "hidden",
        top: 0,
        width: "100%",
        left: 0,
        height: "100%",
        background: "#ffffffed",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Skeleton style={{ width: "100%", paddingTop: "5%" }} />
      <Skeleton style={{ width: "100%" }} animation="wave" />
      <Skeleton style={{ width: "100%" }} animation={false} />
      <Skeleton style={{ width: "100%" }} animation={"wave"} />
      <Skeleton style={{ width: "100%" }} animation={false} />
      <Skeleton style={{ width: "100%", paddingTop: "5%" }} />
    </div>
  );
}

export default Object.assign(Feedback, {
  Table,
  Loading
});
