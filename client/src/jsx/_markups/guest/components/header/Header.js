import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { createBrowserHistory } from "history";
import logo from "../../app-assets/images/logo/logo.png";
import { useSelector } from "react-redux";

import icon_user from "../../app-assets/images/icon/icon_user.png";
import _actions from "../../../../_actions";

// Multi language
import { useTranslation } from "react-i18next";

// HELPERS
import { routeMap } from "../../routes";
import UserMenu from "../userMenu.component";

export const Header = () => {
  const { t } = useTranslation();
  const history = createBrowserHistory();

  const session = useSelector((state) => state?.session);
  const [scroll, setScroll] = useState(false);
  const cur_loc = window.location.pathname;

  const [menuToggle, setMenuToggle] = useState(false);
  const handleClick = () => {
    setMenuToggle(!menuToggle);
  };

  useEffect(() => {
    const scrollFn = () => {
      setScroll(window.scrollY > 100);
    };
    window.addEventListener("scroll", scrollFn);

    return () => {
      if (window?.removeEventListener) {
        // For all major browsers, except IE 8 and earlier
        window?.removeEventListener("scroll", scrollFn);
      } else if (window?.detachEvent) {
        // For IE 8 and earlier versions
        window?.detachEvent("scroll", scrollFn);
      }
    };
  }, []);

  return (
    <header
      className="header1 fixed-header"
      style={
        scroll
          ? { backgroundColor: "rgba(0,0,0,0.75)" }
          : { backgroundColor: "transparent" }
      }
    >
      <div className="inner clear">
        <h1>
          <Link to={routeMap?.home}>
            <img src={logo} alt-="CoinTC" />
          </Link>
        </h1>
        <nav>
          <h2 className="hidden">메인메뉴</h2>
          <div className="gnb_pc clear">
            <ul className="clear">
              <li
                className={
                  cur_loc === routeMap?.advert ||
                  cur_loc === routeMap?.createOffer ||
                  cur_loc === routeMap?.addPayment
                    ? "on"
                    : ""
                }
              >
                <Link to={routeMap?.advert}>{t("P2P Trade")}</Link>
              </li>
              <li className={cur_loc === routeMap?.order ? "on" : ""}>
                <Link to={routeMap?.order}>{t("Orders")}</Link>
              </li>
              <li className={cur_loc === routeMap?.wallet ? "on" : ""}>
                <Link to={routeMap?.wallet}>{t("Wallet")}</Link>
              </li>
              <li className={cur_loc === routeMap?.affiliate ? "on" : ""}>
                <Link to={routeMap?.affiliate}>{t("Affiliate")}</Link>
              </li>
              <li className={cur_loc === routeMap?.support ? "on" : ""}>
                <Link to={routeMap?.support}>{t("Support")}</Link>
              </li>
            </ul>
          </div>
          {/* <div className="search_pc">
            <div className="form-group has-search mb-0">
              <span className="fa fa-search form-control-feedback"></span>
              <input
                type="text"
                className="form-control"
                placeholder={t("Search blocks,transactions,hash...")}
              />
            </div>
          </div> */}

          <UserMenu />

          <div
            className="side_menu"
            style={menuToggle ? { right: "0px" } : { right: "-250px" }}
          >
            <div className="burger_box">
              <div className="menu-icon-container">
                <button
                  type="button"
                  className={
                    "menu-icon js-menu_toggle " +
                    (menuToggle ? "opened" : "closed")
                  }
                  onClick={handleClick}
                >
                  <span className="menu-icon_box">
                    <span className="menu-icon_line menu-icon_line--1"></span>
                    <span className="menu-icon_line menu-icon_line--2"></span>
                    <span className="menu-icon_line menu-icon_line--3"></span>
                  </span>
                </button>
              </div>
            </div>
            <div className="search_m">
              <div className="form-group has-search">
                <span className="fa fa-search form-control-feedback"></span>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search blocks,transactions,hash..."
                />
              </div>
            </div>
            <div className="gnb_m">
              <ul className="clear">
                <li>
                  <Link to={routeMap?.advert}>P2P Trade</Link>
                </li>
                <li>
                  <Link to={routeMap?.order}>Orders</Link>
                </li>
                <li>
                  <Link to={routeMap?.wallet}>Wallet</Link>
                </li>
                <li>
                  <Link to={routeMap?.affiliate}>Affiliate</Link>
                </li>
                <li>
                  <Link to={routeMap?.support}>Support</Link>
                </li>
              </ul>
            </div>
            <UserMenu />
          </div>
        </nav>
      </div>
    </header>
  );
};
