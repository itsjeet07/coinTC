import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import useServiceContextHook from "../../../_hooks/service.context.hook";
import { routeMap } from "../routes";
import icon_user from "../app-assets/images/icon/icon_user.png";

export default function UserMenu() {
  const {
    session: { user },
  } = useServiceContextHook();
  const { t } = useTranslation();
  return user ? (
    <div className="user clear">
      <Link
        to={routeMap?.me}
        className="truncate"
        style={{
          maxWidth: 150,
          display: "flex",
          gap: 2,
          alignContent: "center",
          position: "relative",
        }}
      >
        <img
          src={icon_user}
          alt="My page"
          style={{ display: "inline-block", width: 30, height: 30 }}
        />
        <p className="truncate" title={user?.profile?.pname || t("My page")}>
          {user?.profile?.pname || t("My page")}
        </p>
      </Link>
    </div>
  ) : (
    <div className="user_btn" style={{display: 'flex', gap: 8}}>
      <Link to={routeMap?.login} className="btn btn_login text-white">
        {t("Login")}
      </Link>
      <Link to={routeMap?.register} className="btn btn_signup">
        {t("Register")}
      </Link>
    </div>
  );
}
