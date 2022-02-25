import React, { useEffect, useState } from "react";
import "./advert.style.css";
import { Modal, Image, Alert, Button, Form, Badge } from "react-bootstrap";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { notify } from "../../../../_helpers/notify";
// Assets
import usdt_icon from "../../app-assets/images/icon/usdt.png";
import bank_icon from "../../app-assets/images/icon/bank-icon.png";
import money_icon from "../../app-assets/images/icon/money.png";
import chat_icon from "../../app-assets/images/icon/chat-icon.png";
import FiatCurrency from "../../components/input/FiatCurrency.component";
import PaymentMethod from "../../components/input/PaymentMethod.component";
import conversion from "../../app-assets/images/icon/conversion.png";
import AdvertType from "../../components/input/AdvertType.component";

import Feedback from "../../components/Feedback";

// COMPONENTS
import Loader from "../../../_shared/component/loader.component";

// HELPERS
import { routeMap } from "../../routes";
import { objectToQuery } from "../../../../_helpers/utils.helper";

// Multi language
import { useTranslation } from "react-i18next";
import useServiceContextHook from "../../../../_hooks/service.context.hook";
import useToggler from "../../../../_hooks/toggler.hook";
import usePaginatorHook from "../../../../_hooks/paginator.hook.js";
import { TextField } from "@mui/material";
import { FieldGroup, MiscContainer } from "../../components/styled.component";
// CONSTANTS
const trade_types = ["buy", "sell"];
const crypto = ["btc", "eth", "eos", "xrp", "usdt"];

const fiat = ["KRW", "USD", "CNY", "JPY", "EURO"];

const payment_methods = {
  ALIPAY: {
    icon: money_icon,
  },
  WECHAT: {
    icon: chat_icon,
  },
  BANK_TRANSFER: {
    icon: bank_icon,
  },
  CASH_DEPOSIT: {
    icon: usdt_icon,
  },
};

// STYLED COMPONENTS

const ActionButtonStyle = {
  backgroundColor: "#0059ff",
  color: "white",
  width: "100%",
  display: "block",
};

export default function Adverts() {
  const { t } = useTranslation();
  const {
    services: { advert },
  } = useServiceContextHook();
  const paginator = usePaginatorHook();
  const { count, page, setCount, limit, Skeleton } = paginator;

  const [cachedData, setCachedData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [activeCrypto, setActiveCrypto] = useState(null);
  const [activeTradeType, setActiveTradeType] = useState(trade_types[0]);
  const [data, setData] = useState(null);
  const [activeFiat, setActiveFiat] = useState(null);
  const [paymentMethod, setPaymentMethod] = useState(null);
  const [advertType, setAdvertType] = useState(null);

  const [query, setQuery] = useState(null);

  /**
   * @function buildCachedData
   * @description constructs the cached data
   * @param {String} currency Currency type
   * @param {String} type Trade type
   */
  function buildCacheData(result) {
    return {
      [`${activeTradeType}/${activeCrypto}`]: {
        trade: activeTradeType,
        fiat: activeFiat,
        limit,
        result,
        page,
        count,
        paymentMethod,
        advertType,
      },
    };
  }

  /**
   * @function fetchData
   * @description Makes a network request
   * @returns
   */
  async function fetchData() {
    let response = await advert?.find(query);

    if (response.data) {
      const { result, count } = response.data;
      setCount(count);
      // Store new data in cache
      setCachedData((old) => ({ ...old, ...buildCacheData(result) }));
    }
    return response;
  }

  /**
   * @description fetches cached data if any, else makes a network request
   * @returns
   */
  async function cacheOrFetch(refresh = false) {
    let item = cachedData[`${activeTradeType}/${activeCrypto}`];
    // if data is not cached, fetch from server
    if (!item || refresh) {
      return fetchData();
    }
    // compare cached data with current
    let { result, count, ...old } = item;
    old = Object.values(old)?.join("");
    let changed = Object.values({
      trade: activeTradeType,
      fiat: activeFiat,
      limit,
      page,
      paymentMethod,
      advertType,
    }).join("");

    // Check that all filters match
    return old === changed ? { data: item } : fetchData();
  }

  /**
   * @description handle fiat currency change
   * @param {String} currency
   */
  function onFiatChange(currency) {
    setActiveFiat(currency);
  }

  /**
   * @description handle crypto currency change
   * @param {String} currency
   */
  function onCryptoChange(currency) {
    setActiveCrypto(currency);
  }

  /**
   * @description handle trade type change
   * @param {String} currency
   */
  function onTradeTypeChange(type) {
    setActiveTradeType(type);
  }

  async function onDemand(refresh = false) {
    try {
      setIsLoading(true);
      let { data } = await cacheOrFetch(refresh);

      if (!data) return;
      setData(data.result);
    } catch (err) {
      console.error(err);
    } finally {
      setIsLoading(advert?.isFetching);
    }
  }
  /**
   * @description handle payment method change
   * @param {String} method
   */
  function onPaymentMethodChange(method) {
    setPaymentMethod(String(method)?.toUpperCase());
  }

  /**
   * @description handle advert type change
   * @param {String} method
   */
  function onAdvertTypeChange(method) {
    setAdvertType(String(method)?.toUpperCase());
  }

  useEffect(() => {
    if (query) {
      onDemand();
    }
  }, [query]);

  useEffect(() => {
    const filter = {
      ...(activeTradeType && {
        [`filter[type]`]: String(activeTradeType)?.toUpperCase(),
      }),
      ...(activeCrypto && {
        [`filter[crypto]`]: String(activeCrypto)?.toUpperCase(),
      }),
      ...(activeFiat && {
        // [`filter[fiat]`]: String(activeFiat)?.toUpperCase(),
        filter: {
          fiat: String(activeFiat)?.toUpperCase(),
        },
      }),
      ...(paymentMethod && {
        q: {
          $op: "contains",
          filter: { payment_methods: paymentMethod },
        },
        // [`filter[payment_methods][$in]`]: paymentMethod,
      }),
      // fake: true,
      published: true,
      limit,
      offset: page * limit || 0,
    };
    // history.location.search = query;
    // history.location.state = filter;
    setQuery(filter);

    return advert.abort;
  }, [
    page,
    limit,
    activeTradeType,
    activeFiat,
    paymentMethod,
    activeCrypto,
    advertType,
  ]);

  return (
    <div className="content">
      <section id="mainTop">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h3
                className="wow animate__animated fadeInDown"
                data-wow-delay="0.3s"
              >
                {t("P2P Trade")}
              </h3>
            </div>
          </div>
        </div>
      </section>

      <section id="lnb">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <ul className="buy_sell clear">
                {trade_types.map((type, key) => (
                  <li
                    key={key}
                    className={activeTradeType === type ? "on" : ""}
                  >
                    <a
                      className="text-capitalize cursor-pointer"
                      to="#"
                      onClick={() => onTradeTypeChange(type)}
                    >
                      {type}
                    </a>
                  </li>
                ))}
              </ul>
              <ul className="coin_name clear">
                {/* <li
                  style={
                    !activeCrypto
                      ? {
                          color: "#36f",
                          borderBottom: "2px solid #36f",
                        }
                      : {}
                  }
                >
                  <span
                    onClick={() => onCryptoChange(null)}
                    className={`text-uppercase cursor-pointer`}
                  >
                    ANY
                  </span>
                </li> */}
                {crypto.map((currency, key) => (
                  <li
                    key={key}
                    style={
                      activeCrypto === currency
                        ? {
                            color: "#36f",
                            borderBottom: "2px solid #36f",
                          }
                        : {}
                    }
                  >
                    <span
                      className={`text-uppercase cursor-pointer`}
                      onClick={() => onCryptoChange(currency)}
                    >
                      {currency}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="setting">
        <div className="container">
          <div style={{ display: "flex", flexWrap: "wrap" }}>
            <ul
              className=""
              style={{ display: "flex", gap: 10, flexWrap: "wrap" }}
            >
              {/* FILTER SELECTORS */}
              <li
                className=""
                style={{
                  width: "auto",
                  display: "flex",
                  flexDirection: "column",
                  gap: 8,
                  flexGrow: "1",
                }}
              >
                <p>{t("Currency")}</p>
                <FiatCurrency onChange={onFiatChange} />
              </li>
              <li
                style={{
                  width: "auto",
                  display: "flex",
                  flexDirection: "column",
                  gap: 8,
                  flexGrow: "1",
                }}
              >
                <p>{t("Payment Method")}</p>
                <PaymentMethod onChange={onPaymentMethodChange} />
              </li>
              <li
                style={{
                  width: "auto",
                  display: "flex",
                  flexDirection: "column",
                  gap: 8,
                  flexGrow: "1",
                }}
              >
                <p>{t("advert")}</p>
                <AdvertType onChange={onAdvertTypeChange} />
              </li>
            </ul>
            <div className="ml-auto">
              {/* BUTTONS */}
              <div
                className="d-flex justify-content-end pb-2"
                style={{ alignItems: "baseline", gap: 10, flexWrap: "wrap" }}
              >
                <button
                  className="btn  text-muted"
                  type="button"
                  onClick={() => onDemand(true)}
                >
                  <small className="">
                    <i className="fa fa-refresh"></i>&nbsp; Refresh
                  </small>
                </button>
                <Link to={routeMap?.createAdvert} className="btn_creat">
                  <i className="fas fa-plus-square"></i>
                  {t("Post advert")}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="trade">
        <div className="container">
          <ul className="tab-content">
            {trade_types.map((type, key) => (
              <li
                key={key}
                className={`tab-pane ${
                  activeTradeType === type ? "active" : ""
                }`}
              ></li>
            ))}
          </ul>
          {isLoading ? (

            <Feedback.Loading />
            
          ) : (
            <RenderData
              data={data}
              type={activeTradeType}
              crypto={activeCrypto}
              paginator={paginator}
            />
          )}
        </div>
      </section>
    </div>
  );
}

function RenderData({ data, type, crypto, paginator }) {
  const { t } = useTranslation();
  const { isOpen, onClose, toggledPayload, onOpen } = useToggler();
  const {
    count,
    page,
    limit,
    onRowsPerPageChange,
    onPageChange,
    StyledPagination,
  } = paginator;

  return data && data?.length ? (
    <>
      <div className="tab-content">
        <div
          className={"active"}
          role="tabpanel"
          aria-labelledby={`${type}-${crypto}-tab`}
        >
          <div className="row">
            <div className="col-12">
              <div
                className="table_container wow fadeInUp"
                data-wow-delay="0.6s"
              >
                <table>
                  <thead>
                    <tr>
                      <th className="user">{t("User")}</th>
                      <th className="price">{t("Price")}</th>
                      <th className="order_limit">{t("Available/Limited")}</th>
                      <th className="payment">{t("Payment")}</th>
                      <th className="action">{t("Transaction")}</th>
                    </tr>
                  </thead>
                  <tbody>
                    {data.map((item, key) => (
                      <tr key={key}>
                        <td className="user">
                          <div className="user__card">
                            <span className="user__initials">
                              {item?.user?.profile?.pname.charAt(0)}
                            </span>
                            {item?.user?.profile?.pname}
                            {item?.user?.verified ? (
                              <i
                                className="fas fa-check-circle"
                                aria-hidden="true"
                              ></i>
                            ) : null}
                          </div>
                          <ul className="divider-list">
                            <li className="truncate list-item">
                              <span>{item?.total_orders}</span> order
                            </li>
                            <li className="list-item truncate">|</li>
                            <li className="truncate list-item">
                              <span>
                                {(
                                  item?.total_orders &&
                                  Number(
                                    item?.total_completed_orders /
                                      item?.total_orders
                                  ).toPrecision(2) * 100
                                ).toFixed(2)}
                                % completion
                              </span>
                            </li>
                          </ul>
                        </td>
                        <td className="price">
                          {item?.price}{" "}
                          <span className="text-uppercase">{item?.fiat}</span>
                        </td>
                        {/* ORDER LIMITS */}
                        <td className="order_limit">
                          <ul className="limit__item">
                            <li>{t("Available")}:</li>
                            <li className="font-weight-bold">
                              {item?.available_qty}{" "}
                              <span className="text-uppercase">
                                <span className="text-uppercase">
                                  {item?.crypto}
                                </span>
                              </span>
                            </li>
                          </ul>

                          <ul className="limit__item">
                            <li>{t("Limit")}:</li>
                            <li className="font-weight-bold">
                              {item?.min_order_qty} - {item?.max_order_qty}{" "}
                              <span className="text-uppercase">
                                {item?.fiat}
                              </span>
                            </li>
                          </ul>
                        </td>
                        {/* PAYMENT */}
                        <td className="payment">
                          <ul className="payment__list">
                            {item?.payment_methods.map((pm, key) =>
                              typeof pm == "string" ? (
                                <li key={key}>
                                  {payment_methods[String(pm)?.toUpperCase()] &&
                                  payment_methods[String(pm)?.toUpperCase()]
                                    .icon ? (
                                    <Image
                                      className="icon"
                                      src={
                                        payment_methods[
                                          String(pm)?.toUpperCase()
                                        ].icon
                                      }
                                      alt={`${String(pm)?.toUpperCase()} icon`}
                                    />
                                  ) : null}
                                </li>
                              ) : null
                            )}
                          </ul>
                        </td>
                        {/* ACTION */}
                        <td className="action">
                          {item?.min_order_qty > item?.available_qty ? (
                            <button
                              type="button"
                              className="btn__limited"
                              disabled
                            >
                              Limited
                            </button>
                          ) : (
                            <Button
                              type="button"
                              className="btn__order text-capitalize"
                              onClick={() => onOpen(item)}
                            >
                              {item?.type}{" "}
                              <span className="text-uppercase">
                                {item?.crypto}
                              </span>
                            </Button>
                          )}
                          {/* <TradeModal data={item}></TradeModal> */}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <StyledPagination
                style={{ alignItems: "center" }}
                component="div"
                count={count}
                page={page}
                onPageChange={onPageChange}
                rowsPerPage={limit || 10}
                onRowsPerPageChange={onRowsPerPageChange}
              />
            </div>
          </div>
        </div>
      </div>

      {isOpen ? (
        <OfferDetail {...{ data: toggledPayload, isOpen, onClose }} />
      ) : null}
    </>
  ) : (
    <>
      <Feedback hasLink={true} redirectTo={routeMap?.createAdvert} linkText={'Post advert'}/>
      {/* <Link to={routeMap?.createAdvert} className="btn btn-primary">
        <i className="fas fa-plus-square"></i>&nbsp;
        {t("Post advert")}
      </Link> */}
    </>
  );
}



function OfferDetail({ data = null, isOpen, onClose }) {
  const {
    services: { advert, order, coingecko },
    history,
    session: { user },
  } = useServiceContextHook();
  const { t } = useTranslation();

  const default_timer = 30; //Default timeout

  const cryptoID = {
    BTC: "bitcoin",
    ETH: "ethereum",
    BNB: "oec-binance-coin",
    XRP: "ripple"
  }
  
  // STATES
  const [timer, setTimer] = useState(default_timer);
  const [advertData, setAdvertData] = useState(data);
  const [isLoading, setIsLoading] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [qty, setQty] = useState({ fiat: 0, crypto: 0 });
  const [errors, setErrors] = useState(null);
  const [cryptoCurrentPrice, setCryptoCurrentPrice] = useState(0);

  // FUNCTIONS
  /**
   * @description Form validation function
   * @returns
   */
  function validate() {
    const newErrors = {};
    const { min_order_qty, max_order_qty, user_id, crypto } = advertData;

    if (qty !== null) {
      if (!isBetween(qty.crypto, min_order_qty, max_order_qty)) {
        newErrors.qty = `${String(
          crypto
        )?.toUpperCase()} quantity amount must be between ${min_order_qty} and ${max_order_qty}`;
      }
    }

    // console.log(user && user?.id, user_id);
    if (user && user?.id === user_id) {
      newErrors.permission = `You cannot place an order on your advert`;
    }

    setErrors(newErrors);
    return !Object.keys(newErrors)?.length;
  }

  /**
   * @description Copies the advert ID to clipboard
   * @param {String} id
   */
  function copy_advertID(id) {
    navigator.clipboard.writeText(id);
    toast.success(
      <div className="d-block overflow-hidden" style={{ maxWidth: 250 }}>
        <strong className="font-weight-bold truncate d-block">{id}</strong>{" "}
        <span className="d-block">copied to clipboard</span>
      </div>,
      { hideProgressBar: true, closeButton: false }
    );
  }

  function setRealDataPrice(data){
    const curreObj = data;
    if (curreObj) {
      const fiatObj = Object.values(curreObj);      
      const thValue = fiatObj[0];     
      if (thValue) {
        const acCurrent = Object.values(thValue);
        setCryptoCurrentPrice((acCurrent ? acCurrent[0] : 1));
      }
    }
  }


  /**
   * @description refetches the advert data from the server
   */
  async function refreshAdvert() {

    var currentCrypto = data?.crypto;
    let  price_data = await coingecko?.cryptoVsFiatPrice(
      cryptoID[currentCrypto],
      data?.fiat
    );
    if(price_data?.data){
      setRealDataPrice(price_data?.data)
    }
    try {
      setIsLoading(true);
      let response = await advert.findByID(data?.id, {
        // fake: true,
        "filter[type]": String(data?.type)?.toUpperCase(),
      });
      if (response?.data) {
        setAdvertData(response?.data);
        setQty({
          fiat: response?.data?.min_order_qty * response?.data?.price,
          crypto: response?.data?.min_order_qty,
        });
        setTimer(default_timer);
      } else if (response.error) {
        throw new Error(
          response.message || "Request error! No data received. Reload page"
        );
      }
    } catch (err) {
      notify(err.message, "error");
    } finally {
      setIsLoading(false);
    }
  }

  /**
   *@description Check if value is between min and max
   * @param {Number} value
   * @param {Number} min
   * @param {Number} max
   * @returns
   */

  function isBetween(value, min, max) {
    return value >= min && value <= max;
  }

  /**
   * @description Handles form submission event
   * @param {Object} e Event object
   */
  async function onSubmit(e) {
    e.preventDefault();
    if (validate()) {
      try {
        setIsSubmitting(true);
        let { data, error, message } = await order.create({
          advert_id: advertData?.id,
          total_amount: qty.fiat,
          total_quantity: qty.crypto,
        });

        if (!data)
          throw new Error(error?.message || message || `Error placing order`);

        notify("Order has been placed successfully!");
        let query = objectToQuery({ id: data?.id });
        history.push(routeMap?.orderByID + query);
      } catch (err) {
        notify(err.message, "error");
      } finally {
        setIsSubmitting(false);
      }
    }
  }

  /**
   * @description Handles fiat value change event
   * @param {Object} e Event object
   * @param {Object} e.target
   */
  function onFiatChange({ target }) {
    const { price } = advertData;
    const value = +target?.value;
    if (price && !Number.isNaN(value)) {
      // setTotal(value);
      setQty((state) => ({ fiat: value, crypto: value / +price }));
    }
  }

  /**
   * @description handles crypto value change event
   * @param {Object} e Event object
   */
  function onCryptoChange({ target }) {
    const { price } = advertData;
    const value = +target?.value;

    if (price && !Number?.isNaN(value)) {
      setQty((state) => ({ crypto: value, fiat: value * +price }));
      // setTotal(value * +price);
    }
  }

  // WATCHERS
  useEffect(() => validate(), [qty]);

  useEffect(() => {
    data && refreshAdvert();
    return advert.abort;
  }, []);

  // TIMER
  useEffect(() => {
    let timeout = null;
    if (timer && data && isOpen) {
      timeout = setTimeout(async () => {
        setTimer(timer - 1);
      }, 1000);
    } else refreshAdvert();
    return () => {
      clearTimeout(timeout);
    };
  }, [isOpen, timer]);

  return (
    <Modal show={isOpen} onHide={onClose} centered size="xl">
      <Modal.Body style={{ padding: 0 }}>
        {isLoading ? (
          <div style={{ padding: 15 }}>
            <Loader />
          </div>
        ) : advertData ? (
          <div style={{ display: "flex", flexWrap: "wrap" }}>
            {/* INFORMATION */}
            <div
              style={{
                flex: "1",
                minWidth: 300,
                borderRight: "1px groove #e3e3e3",
              }}
            >
              {/* HEADER */}
              <div
                className=""
                style={{
                  borderBottom: "1px groove #e3e3e3",
                  padding: 15,
                  display: "flex",
                  flexWrap: "wrap",
                  gap: 10,
                  justifyContent: "space-between",
                }}
              >
                <div>
                  <div
                    style={{
                      gap: 10,
                      display: "flex",
                      flexWrap: "wrap",
                      alignItems: "baseline",
                    }}
                  >
                    <span className="h4" style={{ color: "#0059ff" }}>
                      {advertData?.user?.profile?.pname}
                    </span>
                    <span>
                      {advertData?.user?.verified ? (
                        <i
                          className="fas fa-check-circle"
                          style={{ color: "#85c4f9" }}
                          aria-hidden="true"
                        ></i>
                      ) : null}
                    </span>
                  </div>

                  <div
                    className="d-flex"
                    style={{ gap: 10, alignItems: "baseline" }}
                  >
                    <Badge
                      variant={
                        String(advertData?.type)?.toLowerCase() == "buy"
                          ? "success"
                          : "danger"
                      }
                    >
                      {advertData?.type}
                    </Badge>
                    <span>
                      {(
                        advertData?.total_orders &&
                        Number(
                          advertData?.total_completed_orders /
                            advertData?.total_orders
                        ).toPrecision(2) * 100
                      ).toFixed(2)}
                      %{" "}
                      <small className="text-muted">
                        {t("completion rate")}
                      </small>
                    </span>
                  </div>
                </div>

                <ul>
                  <li className="d-flex align-items-center">
                    <small
                      className="truncate text-muted"
                      title={`Advert ID: ${advertData?.id} `}
                      style={{ maxWidth: 200 }}
                    >
                      {advertData?.id}
                    </small>{" "}
                    <button
                      type="button"
                      className="btn"
                      style={{ fontSize: 12 }}
                      onClick={() => {
                        copy_advertID(advertData?.id);
                      }}
                    >
                      {t("Copy")}
                    </button>
                  </li>
                </ul>
              </div>

              {/* DESCRIPTION */}
              <div className="description" style={{ padding: 15 }}>
                <ul
                  style={{
                    display: "flex",
                    rowGap: 10,
                    flexWrap: "wrap",
                    justifyContent: "space-between",
                  }}
                >
                  {/* TOTAL ORDERS */}
                  <li
                    className=""
                    style={{
                      flex: "1",
                      minWidth: "50%",
                      maxWidth: "45%",
                    }}
                  >
                    <small className="descr-title">{t("Total orders")}</small>
                    <span className="d-block">{advertData?.total_orders}</span>
                  </li>
                  {/* TOTAL COMPLETED */}
                  <li
                    className=""
                    style={{
                      flex: "1",
                      minWidth: "50%",
                      maxWidth: "45%",
                    }}
                  >
                    <small className="descr-title">
                      {t("Completed orders")}
                    </small>
                    <span className="d-block">
                      {advertData?.total_completed_orders}
                    </span>
                  </li>
                  {/* PRICE */}
                  <li
                    className=""
                    style={{
                      flex: "1",
                      minWidth: "50%",
                      maxWidth: "45%",
                    }}
                  >
                    <small className="descr-title">{t("Price")}</small>
                    <span className="d-block">
                      {/* {advertData?.price}{" "} */}
                      {cryptoCurrentPrice}{" "}
                      <small className="text-muted text-uppercase">
                        {advertData?.fiat}/{advertData?.crypto}
                      </small>
                    </span>
                  </li>
                  {/* AVAILABLE */}
                  <li
                    className=""
                    style={{
                      flex: "1",
                      minWidth: "50%",
                      maxWidth: "45%",
                    }}
                  >
                    <small className="descr-title">{t("Available")}</small>
                    <span className="d-block">
                      {advertData?.available_qty}{" "}
                      <small className="text-muted text-uppercase">
                        {advertData?.crypto}
                      </small>
                    </span>
                  </li>
                  {/* TIME LIMIT */}
                  <li
                    className=""
                    style={{
                      flex: "1",
                      minWidth: "50%",
                      maxWidth: "45%",
                    }}
                  >
                    <small className="descr-title">{t("Time limit")}</small>
                    <span className="d-block">
                      {+advertData?.payment_ttl_mins == -1
                        ? 30
                        : +advertData?.payment_ttl_mins}{" "}
                      <small className="text-muted">minute(s)</small>
                    </span>
                  </li>
                  {/* ORDER LIMIT */}
                  <li
                    className=""
                    style={{
                      flex: "1",
                      minWidth: "50%",
                      maxWidth: "45%",
                    }}
                  >
                    <small className="descr-title">{t("Order limit")}</small>
                    <span className="d-block">
                      {advertData?.min_order_qty} - {advertData?.max_order_qty}{" "}
                      {/* <small className="text-muted">{advertData?.fiat}</sma> */}
                    </span>
                  </li>
                  {/* PAYMENT METHODS */}
                  <li
                    className=""
                    style={{
                      flex: "1",
                      minWidth: "50%",
                      maxWidth: "45%",
                    }}
                  >
                    <small className="descr-title">
                      {t("Payment methods")}
                    </small>
                    <ul className="d-flex" style={{ gap: 10 }}>
                      {advertData?.payment_methods &&
                        Object.entries(advertData?.payment_methods)?.map(
                          ([key, value]) => {
                            return (
                              <li className="text-capitalize" key={key}>
                                <span>{String(value).replace(/_/g, " ")}</span>
                              </li>
                            );
                          }
                        )}
                    </ul>
                  </li>
                  {/* REFRESH TIME */}
                  <li
                    className=""
                    style={{
                      flex: "1",
                      minWidth: "50%",
                      maxWidth: "45%",
                    }}
                  >
                    <small className="descr-title">{t("Remaining time")}</small>
                    <span className="d-block">
                      {timer}
                      <small className="text-muted">s</small>
                    </span>
                  </li>
                </ul>
              </div>

              {/* MISCELLENEOUS */}
              <hr />
              <div style={{ paddingLeft: 15, fontSize: 12, paddingRight: 15 }}>
                <Alert variant="warning">
                  <strong className="font-weight-bold">
                    TIPS &amp; GUIDES
                  </strong>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Blanditiis fuga adipisci delectus fugit quam enim,
                    praesentium consequatur provident dolore ullam totam officia
                    architecto obcaecati deleniti quas ea atque unde quae.
                  </p>
                </Alert>
              </div>
            </div>

            {/* FORM */}
            <div
              style={{
                flex: "1",
                display: "flex",
                flexDirection: "column",
                minWidth: 300,
              }}
            >
              <Form
                onSubmit={onSubmit}
                style={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <div
                  style={{
                    padding: 15,
                    display: "flex",
                    flexDirection: "column",
                    gap: 10,
                  }}
                >
                  {/* CRYPTO QTY */}
                  <div
                    style={{
                      order:
                        String(advertData?.type)?.toLowerCase() == "buy"
                          ? 3
                          : 1,
                      display: "flex",
                      gap: 10,
                      flexDirection: "column",
                    }}
                  >
                    <label>{advertData?.type == "BUY" ? "I will receive" : "I will sent"}</label>
                    <FieldGroup>
                      <input
                        required
                        className="field__input"
                        placeholder={`Quantity of ${String(
                          advertData?.crypto
                        )?.toUpperCase()}`}
                        type="number"
                        min={advertData?.min_order_qty}
                        max={advertData?.max_order_qty}
                        onChange={onCryptoChange}
                        value={+qty.crypto}
                      />
                      <span className="field__addon">
                        {String(advertData?.crypto)?.toUpperCase()}
                      </span>
                    </FieldGroup>
                    <small className="text-danger">
                      {errors && errors?.qty}
                    </small>
                  </div>
                  {/* IMAGE */}
                  {/*  <div
                    style={{ order: 2 }}
                    className="d-flex justify-content-center mb-4"
                  >
                    <Image
                      src={conversion}
                      style={{ width: 25 }}
                      alt="conversion"
                    />
                  </div>
 */}
                  {/* FIAT QTY */}


                  <label>{advertData?.type == "BUY" ? "I want to pay" : "I want to sell"}</label>
                  <FieldGroup
                    style={{
                      order:
                        String(advertData?.type)?.toLowerCase() == "buy"
                          ? 1
                          : 3,
                    }}
                  >
                    {/*  <div className="field__input truncate">
                      {total || (
                        <span className="text-muted">{`Amount in ${advertData?.crypto} will be calculated automatically`}</span>
                      )}
                    </div> */}
                    <input
                      required
                      className="field__input"
                      placeholder={`Amount in ${advertData?.fiat}`}
                      type="number"
                      onChange={onFiatChange}
                      value={+qty.fiat}
                    />
                    <span className="field__addon">
                      {String(advertData?.fiat)?.toUpperCase()}
                    </span>
                  </FieldGroup>
                </div>
                <MiscContainer>
                  {/* TRADE CONDITION */}
                  {advertData?.trade_conditions && (
                    <div className="misc">
                      <header className="header">
                        <h4 className="title">Trade conditions</h4>
                      </header>
                      <div className="description">
                        {advertData?.trade_conditions}
                      </div>
                    </div>
                  )}
                  {/* REMARK */}
                  {advertData?.remarks && (
                    <div className="misc">
                      <header className="header">
                        <h4 className="title">Remarks</h4>
                      </header>
                      <div className="description">{advertData?.remarks}</div>
                    </div>
                  )}
                </MiscContainer>
                <div
                  className="d-flex"
                  style={{
                    marginTop: "auto",
                    padding: 15,
                    display: "flex",
                    gap: 20,
                  }}
                >
                  {user ? (
                    <Button
                      type="submit"
                      disabled={
                        !errors || Object.keys(errors)?.length || isSubmitting
                      }
                      style={{ flex: "auto" }}
                    >
                      {isSubmitting ? t("Placing Order") : t(`Place order`)} (
                      {advertData?.type})
                    </Button>
                  ) : (
                    <Button
                      style={{ flex: "auto" }}
                      onClick={() =>
                        history.push({
                          pathname: routeMap?.login,
                          state: {
                            pathname: routeMap?.advert,
                            state: { id: advertData?.id },
                          },
                        })
                      }
                    >
                      Login to place order
                    </Button>
                  )}
                  <Button onClick={onClose}>{t("Cancel")}</Button>
                </div>
              </Form>
            </div>
          </div>
        ) : null}
      </Modal.Body>
    </Modal>
  );
}
