/**************************************************************************
TODO: 
- attach onCryptoChange handler to the crypto select input
- attach onOrderTypeChange handler to the order type select input
- attach onStatusChange handler to the status select input
***************************************************************************/

import React, { useEffect, useState, useRef } from "react";
import usePaginatorHook from "../../../../_hooks/paginator.hook.js";
import "./Orders.css";

import { useSelector } from "react-redux";

import { Image } from "react-bootstrap";

import usdt_icon from "../../app-assets/images/coin/usdt.png";
import lang_ch_icon from "../../app-assets/images/nation/lang_ch.png";
import lang_ko_icon from "../../app-assets/images/nation/lang_ko.png";
import xrp_icon from "../../app-assets/images/coin/xrp.png";
import eth_icon from "../../app-assets/images/coin/eth.png";

import bnb_image from "../../app-assets/images/coin/bnb.png";
import usdt_image from "../../app-assets/images/coin/usdt.png";
import xrp_round_image from "../../app-assets/images/coin/xrp-round.png";
import eth_image from "../../app-assets/images/coin/eth.png";
import btc_image from "../../app-assets/images/coin/btc.png";
import OrderType from "../../components/input/OrderType.component.jsx";
import CryptoCurrency from "../../components/input/CryptoCurrency.component.jsx";
import OrderStatus from "../../components/input/OrderStatus.component.jsx";

import { useTranslation } from 'react-i18next';

export const Orders = ({ services, useService }) => {

  const { t } = useTranslation()

  const { order } = services;
  const paginator = usePaginatorHook();
  const { count, page, setCount, limit, Skeleton } = paginator;
  const session = useSelector((state) => state?.session);

  const orderTab = {
    all: {
      label: t("All orders"),
      value: "all",
    },
    personal: {
      label: t("My orders"),
      value: "me",
      auth: true,
    },
  };
  const [data, setData] = useState([]);
  const [cachedData, setCachedData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [activeCrypto, setActiveCrypto] = useState(null);
  const [activeOrderType, setActiveOrderType] = useState(null);
  const [activeTab, setActiveTab] = useState(Object.keys(orderTab)[0] || null);
  const [activeStatus, setActiveStatus] = useState(null);

  /**
   * @function buildCachedData
   * @description constructs the cached data
   * @param {String} currency Currency type
   * @param {String} type Trade type
   */
  function buildCacheData(result) {
    return {
      [activeTab]: {
        crypto: activeCrypto,
        status: activeStatus,
        type: activeOrderType,
        limit,
        result,
        page,
        count,
      },
    };
  }

  /**
   * @function fetchData
   * @description Makes a network request
   * @returns
   */
  async function fetchData() {
    let response = await order?.find({
      ...(session &&
        activeTab == "personal" && { [`filter[user_id]`]: session?.user?.id }),
      ...(activeStatus && { [`filter[status]`]: activeStatus }),
      ...(activeCrypto && {
        [`filter[crypto]`]: activeCrypto,
      }),
      ...(activeOrderType && {
        [`filter[type]`]: activeOrderType,
      }),
      fake: true,
      limit,
      offset: page * limit || 0,
    });

  
    let {
      data: { result = [], count },
    } = response;
    setCount(count);
    // Store new data in cache
    setCachedData((old) => ({ ...old, ...buildCacheData(result) }));
    return response;
  }

  /**
   * @description fetches cached data if any, else makes a network request
   * @returns
   */
  async function cacheOrFetch() {
    let item = cachedData[activeTab];
    // if data is not cached, fetch from server
    if (!item) {
      return fetchData();
    }

    let { result, count, ...old } = item;
    old = Object.values(old)?.join("");
    let changed = Object.values({
      crypto: activeCrypto,
      status: activeStatus,
      type: activeOrderType,
      limit,
      page,
    }).join("");

    // Check that all filters match
    return old === changed ? { data: item } : fetchData();
  }

  const onCryptoChange = (crypto) => {
    console.log({ crypto });
    setActiveCrypto(crypto);
  };
  const onOrderTypeChange = (type) => {
    console.log({ type });
    setActiveOrderType(type);
  };
  const onStatusChange = (status) => {
    console.log({ status });
    setActiveStatus(status);
  };
  const onTabChange = (tab) => {
    setActiveTab(tab);
  };

  useEffect(async () => {
    try {
      setIsLoading(true);
      let {
        data: { result },
      } = await cacheOrFetch();
      setData(result);
    } catch (err) {
      console.error(err);
    } finally {
      setIsLoading(order?.isFetching);
    }
  }, [page, limit, activeStatus, activeOrderType, activeCrypto, activeTab]);

  return (
    <>
      <div className="content">
        <section id="mainTop">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <h3 className="wow fadeInDown" data-wow-delay="0.3s">
                  {t("Orders")}
                </h3>
              </div>
            </div>
          </div>
        </section>

        <section id="lnb">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <ul className="option clear">
                  {/* <li className={(activeTab === "in-progress-tab" ? "on" : "")}><a href="#" onClick={() => handleTab("in-progress-tab")}>In progress</a></li> */}
                  {Object.keys(orderTab).map((order_type, key) => (
                    <li
                      key={key}
                      className={activeTab === order_type ? "on" : ""}
                    >
                      <a
                        className="text-capitalize"
                        href="#"
                        onClick={() => onTabChange(order_type)}
                      >
                        {orderTab[order_type]?.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section id="setting">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <dl className="coins">
                  <dt>{t("Coins")}</dt>
                  <dd>
                    <CryptoCurrency onChange={onCryptoChange} />
                  </dd>
                </dl>
                <dl className="order_type">
                  <dt>{t("Order Type")}</dt>
                  <dd>
                    <OrderType onChange={onOrderTypeChange} />
                  </dd>
                </dl>
                <dl className="status">
                  <dt>{t("Status")}</dt>
                  <dd>
                    <OrderStatus onChange={onStatusChange} />
                  </dd>
                </dl>
                <a href="#" className="btn_creat">
                  <i className="fas fa-plus-square"></i>{t("Creat an AD")}
                </a>
              </div>
            </div>
          </div>
        </section>
        <section id="orders">
          <div className="container">
            <div className="tab-content">
              {isLoading ? (
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
              ) : orderTab[activeTab]?.auth ? (
                session?.user ? (
                  <RenderData
                    data={data}
                    user={session?.user}
                    paginator={paginator}
                  />
                ) : (
                  // TODO: Reusable component
                  <>{t("You must login first")}</>
                )
              ) : (
                <RenderData data={data} paginator={paginator} />
              )}
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

function RenderData({ data, paginator, user = null }) {
  const { t } = useTranslation()
  const {
    count,
    page,
    limit,
    onRowsPerPageChange,
    onPageChange,
    StyledPagination,
    Skeleton,
  } = paginator;

  const crypto_methods = {
    USDT: {
      icon: usdt_icon,
    },
    ETH: {
      icon: eth_icon,
    },
    XRP: {
      icon: xrp_round_image,
    },
    BTC: {
      icon: btc_image,
    },
    BNB: {
      icon: bnb_image,
    },
  };

  return data && data?.length ? (
    <div className="">
      <div className="row">
        {/* TODO: UI fix*/}
        <div className="table_container wow fadeInUp" data-wow-delay="0.6s">
          <table>
            <thead>
              <tr>
                <th>{t("Partner/Date")}</th>
                <th className="text-center">{t("Assets/Type")}</th>
                <th>{t("Price/Quantity")}</th>
                <th>{t("Total")}</th>
                <th>{t("Status")}</th>
              </tr>
            </thead>
            <tbody>
              {data.map((order, key) => (
                <tr key={key}>
                  {/* partner*/}
                  <td className="user">
                    <span className="flex_object">
                      <span className="min">{order.advert?.user?.profile?.pname}</span>
                    </span>
                    <ul className="d-flex">
                      <li>
                        <small className="text-muted">{order?.createdAt}</small>
                      </li>
                    </ul>
                  </td>
                  {/* asset/type */}
                  <td
                    style={{
                      display: "flex",
                      gap: 20,
                      height: "100%",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <div>
                      {crypto_methods[order?.advert?.crypto] &&
                        crypto_methods[order?.advert?.crypto].icon ? (
                        <Image
                          src={crypto_methods[order?.advert?.crypto].icon}
                          style={{ width: 30 }}
                          alt={`icon`}
                        />
                      ) : null}
                    </div>
                    <div>
                      <p className="text-uppercase text-muted">
                        {order?.advert?.type}
                      </p>
                      <p className="text-uppercase font-weight-bold">
                        {order?.advert?.crypto}
                      </p>
                    </div>
                  </td>
                  {/* price/quantity */}
                  <td className="available_limit">
                    <dl
                      className="limit d-flex"
                      style={{ gap: 10, justifyContent: "space-between" }}
                    >
                      <dt>Price</dt>
                      <dd>
                        {order?.advert?.price}{" "}
                        <span className="text-uppercase font-weight-bold">
                          {order?.advert?.fiat}
                        </span>
                      </dd>
                    </dl>
                    <dl
                      className="available d-flex"
                      style={{ gap: 10, justifyContent: "space-between" }}
                    >
                      <dt>Quantity</dt>
                      <dd className="crypt">{order.advert?.available_qty}</dd>
                    </dl>
                  </td>
                  {/* total */}
                  <td className="payment">
                    {order?.total_amount}{" "}
                    <span className="text-uppercase font-weight-bold">
                      {order?.advert?.fiat}
                    </span>
                  </td>
                  {/* status */}
                  <td className="price text-uppercase">{order.status}</td>
                </tr>
              ))}
            </tbody>
          </table>

          <StyledPagination
            style={{ alignItems: "center" }}
            component="div"
            count={count}
            page={page}
            onPageChange={onPageChange}
            rowsPerPage={limit || 10}
            onRowsPerPageChange={onRowsPerPageChange}
          />
          {/*  <div className="indicator">
            <button type="button" className="btn_prev" disabled>
              <i className="fal fa-chevron-left"></i>
            </button>
            <span className="on">1</span>
            <span>2</span>
            <span>3</span>
            <span style={{ cursor: "default" }}>...</span>
            <span>40</span>
            <button type="button" className="btn_next">
              <i className="fal fa-chevron-right"></i>
            </button>
          </div> */}
        </div>
      </div>
    </div>
  ) : (
    // TODO: Create Empty feedback component
    <>Nothing Found!</>
  );
}
