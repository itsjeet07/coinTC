/**************************************************************************
  // TODO: attach onPaymentMethodChange handler to the payment select input
  // TODO: attach onFiatChange handler to the fiat currency select input
***************************************************************************/

import React, { useEffect, useState, useRef } from "react";
import "./Trade.css";
import { Modal, Image } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import usePaginatorHook from "../../../../_hooks/paginator.hook.js";

// Assets
import usdt_icon from "../../app-assets/images/icon/usdt.png";
import refresh_icon from "../../app-assets/images/page/creat-ad/refresh.png";
import bank_icon from "../../app-assets/images/icon/bank-icon.png";
import money_icon from "../../app-assets/images/icon/money.png";
import chat_icon from "../../app-assets/images/icon/chat-icon.png";
import FiatCurrency from "../../components/input/FiatCurrency.component";
import PaymentMethod from "../../components/input/PaymentMethod.component";
import conversion from "../../app-assets/images/icon/conversion.png";
import bank from "../../../../../images/svg/bank.svg";
// Multi language
import { useTranslation } from "react-i18next";
import CreateOrder from "../order/create.order.page";

// HELPERS
import { routeMap } from "../../routes";

// CONSTANTS
const trade_types = ["buy", "sell"];
const crypto = ["btc", "eth", "eos", "xrp", "usdt"];
const fiat = ["btc", "eth", "eos", "xrp", "usdt"];
// TODO: Use this to create dynamic icon for the payment methods
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

export const Trade = ({ services }) => {
  const { advert } = services;
  const paginator = usePaginatorHook();
  const { count, page, setCount, limit, Skeleton } = paginator;

  const [cachedData, setCachedData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [activeCrypto, setActiveCrypto] = useState(crypto[0]);
  const [activeTradeType, setActiveTradeType] = useState(trade_types[0]);
  const [data, setData] = useState(null);
  const [activeFiat, setActiveFiat] = useState(null);
  const [paymentMethod, setPaymentMethod] = useState(null);

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
      },
    };
  }

  /**
   * @function fetchData
   * @description Makes a network request
   * @returns
   */
  async function fetchData() {
    let response = await advert?.find({
      ...(activeTradeType && { [`filter[type]`]: activeTradeType }),
      ...(activeCrypto && { [`filter[crypto]`]: activeCrypto }),
      ...(activeFiat && { [`filter[fiat]`]: activeFiat }),
      ...(paymentMethod && {
        [`filter[payment_methods]`]: paymentMethod,
        [`filter[payment_methods][_condition]`]: "in",
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
    let item = cachedData[`${activeTradeType}/${activeCrypto}`];
    // if data is not cached, fetch from server
    if (!item) {
      return fetchData();
    }

    let { result, count, ...old } = item;
    old = Object.values(old)?.join("");
    let changed = Object.values({
      trade: activeTradeType,
      fiat: activeFiat,
      limit,
      page,
      paymentMethod,
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

  /**
   * @description handle payment method change
   * @param {String} method
   */
  function onPaymentMethodChange(method) {
    setPaymentMethod(String(method)?.toUpperCase());
  }

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
      setIsLoading(advert?.isFetching);
    }
  }, [page, limit, activeTradeType, paymentMethod, activeCrypto]);




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
                P2P Trade 
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
                      className="text-capitalize"
                      href="#"
                      onClick={() => onTradeTypeChange(type)}
                    >
                      {type}
                    </a>
                  </li>
                ))}
              </ul>
              <ul className="coin_name clear">
                {crypto.map((currency, key) => (
                  <li
                    key={key}
                    className={activeCrypto === currency ? "on" : ""}
                  >
                    <a
                      className="text-uppercase"
                      href="#"
                      onClick={() => onCryptoChange(currency)}
                    >
                      {currency}
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
              <dl className="money">
                <dt>Currency</dt>
                <dd>
                  <select name="" id="">
                    {/* {/ TODO: Reusable component - currencySelectInput /} */}
                    <option value="CNY">CNY</option>
                    <option value="AED">AED</option>
                    <option value="AMD">AMD</option>
                    <option value="ARS">ARS</option>
                    <option value="AUD">AUD</option>
                    <option value="BDT">BDT</option>
                    <option value="BHD">BHD</option>
                  </select>
                </dd>
              </dl>
              <dl className="method">
                <dt>Payment Method</dt>
                <dd>
                  {/* {/ TODO: Reusable component - paymentTypesSelectInput /} */}
                  <select name="payment_method" id="payment_method" >
                    <option value="all_payment">All payments</option>
                    <option value="bank_transfer">Bank Transfer</option>
                    <option value="wechat">WeChat</option>
                    <option value="alipay">Alipay</option>
                    <option value="cash_deposit">Cash Deposit to Bank</option>
                  </select>
                </dd>
              </dl>
<<<<<<< HEAD
<<<<<<< HEAD:client/src/jsx/_markups/guest/pages/trade/Trade.js
              <a href="/ad_create" className="btn_creat">
                <i className="fas fa-plus-square"></i>Creat an AD
=======
              <a href="/offer/create" className="btn_creat">
                <i className="fas fa-plus-square"></i>
                {t("Creat an AD")}
>>>>>>> fa46b5c9f312651a87bf37d8647175f77df8e205:client/src/jsx/_markups/guest/_pages/trade/trade.page.js
              </a>
=======
              <Link to={routeMap?.createAdvert} className="btn_creat">
                <i className="fas fa-plus-square"></i>
                {t("Creat an AD")}
              </Link>
>>>>>>> 90490a01bba4bf8a4cca2d2c60449c7e77d18d2a
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
                className={`tab-pane ${activeTradeType === type ? "active" : ""
                  }`}
              ></li>
            ))}
          </ul>
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
          ) : (
            <RenderData
              {...{ services }}
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
};

function RenderData({ data, type, crypto, paginator, services }) {
  const { t } = useTranslation();

  const {
    count,
    page,
    limit,
    onRowsPerPageChange,
    onPageChange,
    StyledPagination,
    Skeleton,
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
                      <th>User</th>
                      <th>Available/Limited</th>
                      <th>Payment</th>
                      <th>Price</th>
                      <th>Transaction</th>
                    </tr>
                  </thead>
                  <tbody>
                    {data.map((item, key) => (
                      <tr key={key}>
                        <td className="user">
                          {/ Username /} {/ check-mark /}
                          {/ order count /} 98.1% completion
                          <p>
                            <span>{item?.user?.pname?.charAt(0)}</span>
                            {item?.user?.pname}
                            {item?.user?.verified ? (
                              <i
                                className="fas fa-check-circle"
                                aria-hidden="true"
                              ></i>
                            ) : null}
                          </p>
                          <ul className="clear">
                            <li>
                              <span>{item?.total_orders}</span> order
                            </li>
                            <li>
                              <span>
                                {(
                                  Number(
                                    item?.total_completed_orders /
                                    item?.total_orders
                                  ).toPrecision(2) * 100
                                ).toFixed(2)}
                              </span>
                              % completion
                            </li>
                          </ul>
                        </td>
                        <td className="available_limit">
                          <dl className="available clear">
                            <dt>Available:</dt>
                            <dd>
                              {item?.available_qty}{" "}
                              <span className="text-uppercase">
                                {item?.crypto}
                              </span>
                            </dd>
                          </dl>
                          <dl className="limit clear">
                            <dt>Limit:</dt>
                            <dd>
                              {item?.min_order_price} - {item?.max_order_price}{" "}
                              {item?.fiat}
                            </dd>
                          </dl>
                        </td>
                        <td className="payment">
                          {item?.payment_methods.map((pm, key) =>
                            typeof pm == "string" ? (
                              <span key={key}>
                                {payment_methods[pm] &&
                                  payment_methods[pm].icon ? (
                                  <Image
                                    src={payment_methods[pm].icon}
                                    style={{ width: 25 }}
                                    alt={`${pm} icon`}
                                  />
                                ) : null}
                              </span>
                            ) : null
                          )}
                        </td>
                        <td className="price">
                          {item?.price} {item?.fiat}
                        </td>
                        <td className="transaction">
                          <TradeModal
                            {...{ services }}
                            data={item}
                          ></TradeModal>
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
    </>
  ) : null;
}

function TradeModal(props) {
  const {
    data,
    services: { advert, order },
  } = props;
  console.log("services---------", advert);

  const button_text = props.data?.type + " " + props.data?.crypto.toUpperCase();
  const button_class = "btn_buy text-capitalize";
  const isPopup = true;
  const [advertData, setAdvertData] = useState(data);
  const [show, setShow] = useState(false);
  const [timer, setTimer] = useState(30);
  const [amountToSell, setAmountToSell] = useState("");
  const [quantity, setQuantity] = useState("");
  const [availAfterApply, setAvailAfterApply] = useState(
    data && data.available_qty ? data.available_qty : ""
  );
  const [errors, setErrors] = useState({
    amount: "",
    quantity: "",
  });
  const [orderID, setOrderID] = useState("");

  const handleClose = () => setShow(false);

  const handleShow = () => {
    setShow(true);
    setTimer(30);
    setErrors({ amount: "" });
    setAmountToSell("");
  };

  const handleAmount = (e) => {
    let quantity = e.target.value / advertData?.price;
    quantity = quantity === 0 ? "" : quantity;
    setQuantity(quantity);
    setAvailAfterApply(advertData.available_qty - quantity);

    setAmountToSell(e.target.value);
    if (e.target.value >= advertData?.price) {
      setAmountToSell(e.target.value);
      setErrors({ amount: "" });
      if (availAfterApply < 0) {
        setErrors({
          amount:
            "Amount should be less than or equal to available " +
            advertData?.available_qty,
        });
      }
    } else {
      setErrors({
        amount:
          "Amount must be greater than or equal to price " + advertData?.price,
      });
    }
    if (e.target.value == "") {
      setErrors({ amount: "" });
    }
  };

  const handleQuantity = (e) => {
    if (advertData && advertData.price) {
      let amount = e.target.value * advertData.price;
      amount = amount === 0 ? "" : amount;
      setQuantity(e.target.value);
      setAmountToSell(amount);
      setAvailAfterApply(advertData.available_qty - e.target.value);
      if (amount >= advertData?.price) {
        // setAmountToSell(e.target.value);
        setErrors({ amount: "" });
        if (availAfterApply < 0) {
          setErrors({
            amount:
              "Amount should be less than or equal to available " +
              advertData?.available_qty,
          });
        }
      } else {
        setErrors({
          amount:
            "Amount must be greater than or equal to price " +
            advertData?.price,
        });
      }
    }
  };

  async function refreshAdvert(id, options) {
    return await advert.findByID(id, options);
  }

  useEffect(async () => {
    try {
      if (show === true) {
        const timeout = setTimeout(async () => {
          timer
            ? setTimer(Number(timer - 1))
            : (async () => {
                let response = await refreshAdvert(advertData?.id, {
                  fake: true,
                });
                if (response?.data) {
                  setAdvertData(response?.data);
                  setTimer(30);
                } else if (response.error) {
                  throw new Error(
                    response.message || "Request error! No data received."
                  );
                }
              })();
        }, 1000);

        return () => {
          clearTimeout(timeout);
        };
      }
    } catch (err) {
      console.error(err);
    }
  }, [show, timer]);

  async function createOrder() {
    let dataToApi = {
      advert_id: data.id,
      total_amount: parseInt(amountToSell),
      total_quantity: parseInt(quantity),
    };
    let options = { fake: true };
    return await order.createOrder(dataToApi, options);
  }

  // useEffect(() => {
  //   try {
  //           (async () => {
  //               let response = await createOrder();
  //               if (response?.data) {
  //                 setOrderID(response?.data?.id);
  //               } else if (response.error) {
  //                 throw new Error(
  //                   response.message || "Request error! No data received."
  //                 );
  //               }
  //             })();

  //   } catch (err) {
  //     console.error(err);
  //   }
  // },[orderID])

  return advertData ? (
    <>
      <Link
        to="#"
        className={button_class}
        onClick={isPopup ? handleShow : undefined}
      >
        {button_text}
      </Link>

      <Modal show={show} onHide={handleClose} size={"xl"} animation={false}>
        <Modal.Body>
          <div className="row" id="tradeModal">
            <div className="col-sm-12 col-md-6">
              <div className="scroll-area-sm">
                <div className="modal-header align-items-center">
                  <h3 className="modal-title">
                    {advertData?.user?.profile.pname}
                    {advertData?.user?.profile.verified ? (
                      <i className="fas fa-check-circle" aria-hidden="true"></i>
                    ) : null}
                  </h3>
                  <p className="mb-0">
                    {advertData?.total_orders} orders &nbsp;
                    {(
                      Number(
                        advertData?.total_completed_orders /
                          advertData?.total_orders
                      ).toPrecision(2) * 100
                    ).toFixed(2)}{" "}
                    % completion
                  </p>
                </div>

                <div className="col col-sm-12 col-md-8 mt-3">
                  <div className="trade-my-modal">
                    <div className="my-modal-top d-flex justify-content-between align-items-center">
                      <h5 className="mb-0">Trade Info</h5>
                      <a href="#" className="btn btn-ref-my-modal">
                        {timer}s to Refresh
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col col-sm-12 col-md-10 mt-4">
                  <div className="trade-my-modal">
                    <div className="my-modal-center">
                      <table className="w-100">
                        <thead>
                          <th className="text-light-gray font-weight-light">
                            Price
                          </th>
                          <th className="text-light-gray font-weight-light">
                            Available
                          </th>
                        </thead>
                        <tbody>
                          <td className="text-black">
                            {advertData?.price} {advertData?.fiat}
                          </td>

                          <td className="text-black">
                            {advertData?.available_qty}{" "}
                            {advertData?.crypto?.toUpperCase()}
                          </td>
                        </tbody>
                        <thead>
                          <th className="text-light-gray font-weight-light pt-4">
                            Payment
                          </th>
                          <th className="text-light-gray font-weight-light pt-4">
                            Limit
                          </th>
                        </thead>
                        <tbody>
                          <td className="text-black">
                            {advertData?.payment_ttl_mins} Minutes
                          </td>
                          <td className="text-black">
                            {advertData?.min_order_price} ~{" "}
                            {advertData?.max_order_price} {advertData?.fiat}
                          </td>
                        </tbody>
                        <thead>
                          <th className="text-light-gray font-weight-light pt-4">
                            Payment Method
                          </th>
                          <th className="text-light-gray font-weight-light pt-4">
                            {advertData?.payment_methods}
                          </th>
                        </thead>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-6">
              {/* <form> */}
              <div className="modal-body">
                <div className="modal-body-input">
                  <label>How much do you want to Sell?</label>
                  <div className="input-group mb-3">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter Quantity.."
                      aria-label="Recipient's username"
                      aria-describedby="basic-addon2"
                      value={quantity}
                      onChange={(e) => handleQuantity(e)}
                    />

                    <div className="input-group-append">
                      <span
                        className="input-group-text my-input"
                        id="basic-addon2"
                      >
                        {advertData?.crypto?.toUpperCase()}
                      </span>
                    </div>
                  </div>
                  <p className="d-flex justify-content-between text-black">
                    &nbsp;
                    <span className="text">
                      {" "}
                      사용 가능 : {availAfterApply}{" "}
                      {advertData?.crypto.toUpperCase()}{" "}
                      <span className="text-light-blue">전체 </span>
                    </span>{" "}
                  </p>
                </div>
                <div className="d-flex justify-content-center mb-4">
                  <Image
                    src={conversion}
                    style={{ width: 25 }}
                    alt="conversion"
                  />
                </div>
                <div className="modal-body-input">
                  {/* <label>How much do you want to Sell?</label> */}
                  <div className="input-group mb-3">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter Amount.."
                      aria-label="Recipient's username"
                      aria-describedby="basic-addon2"
                      value={amountToSell}
                      onChange={(e) => handleAmount(e)}
                    />
                    <div className="input-group-append">
                      <span
                        className="input-group-text my-input"
                        id="basic-addon2"
                      >
                        {advertData?.fiat.toUpperCase()}
                      </span>
                    </div>
                  </div>
                  <p className="d-flex justify-content text-black">
                    {errors && errors.amount !== "" && (
                      <span style={{ color: "red" }}>{errors["amount"]}</span>
                    )}
                  </p>

                  <p className="d-flex justify-content text-black">
                    <span>
                      Sell Limit: {advertData?.min_order_price} ~{" "}
                      {advertData?.max_order_price} {advertData?.fiat}
                    </span>
                    {/* 사용 가능 : 0.24810 {props.data?.crypto.toUpperCase()}{" "} */}
                    {/* &nbsp; */}
                    {/* <span className="text"> 사용 가능 : 0.24810 {props.data?.crypto.toUpperCase()}{" "} <span className="text-light-blue">전체 </span></span>{" "} */}
                  </p>
                  <div className="row ">
                    <div className="col-12">
                      <div className="md-head">Guides</div>
                      <div className="md-dt-txt">
                        1. Please confirm the price and amount before place this
                        trade.
                      </div>
                      <div className="md-dt-txt">
                        2. Please pay the seller in the payment window. After
                        completed the payment, please click "I have paid". The
                        seller will release the crypto to you after received
                        payment. If you do not mark as paid in time, the trade
                        will be automatically cancelled after timeout.
                      </div>
                      <div className="md-dt-txt">
                        3.If you encounter trade dispute, you can open a
                        dispute, the customer service will intervene to deal
                        with it. For details, please see "Help
                      </div>
                    </div>
                  </div>
                  <div className="row justify-content-center mt-5 mb-5">
                    <div className="col-4">
                      <Link to={`order/${`ORD-1637538341856`}`}>
                        <button
                          className="btn btn-primary"
                          disabled={
                            (quantity === "" && amountToSell === "") ||
                            errors.amount !== ""
                          }
                          onClick={() => createOrder()}
                        >
                          {" "}
                          {button_text}{" "}
                        </button>
                      </Link>
                      {/* <a href="/order" className="btn btn-primary ">
                        {button_text}
                      </a> */}
                    </div>
                    <div className="col-4">
                      <a
                        href="#"
                        className="btn btn-outline-limited btn-cans"
                        onClick={handleClose}
                      >
                        Cancel
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              {/* </form> */}
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  ) : (
    <>No data</>
  );
}
