import React, { useState, useRef } from "react";
import "./Ad_create.css";
import { Multiselect } from "multiselect-react-dropdown";

// COMPONENTS
import FiatCurrency from "../../components/input/FiatCurrency.component";
import CryptoCurrency from "../../components/input/CryptoCurrency.component";
import {
  WizardForm,
  Cage,
  StyledSwitch,
  StyledPriceInput,
  StyledTabParent,
  StyledSelector,
} from "../../components/styled.component";

// const { advert } = services;

// APP CONSTANTS
const ADVERT_TYPE = { SELL: "sell", BUY: "buy" };
const PRICE_TYPE = { FLOAT: "floating", FIXED: "fixed" };

// Wizard configurations
const wizards = [
  {
    label: "Set Type and price",
    index: 1,
    content: SetPriceAndType,
  },
  {
    label: "Set up trading amount and Payment Method",
    index: 2,
    content: SetTradingAmountAndPayment,
  },
  {
    label: "Set remarks and Automatic response",
    index: 3,
    content: SetRemarksAndResponse,
  },
];

const data = {};

export default function CreateAd({ services, useServices }) {
  const { advert } = services;

  data.min_order_qty = 1;
  data.max_order_qty = 1;
  data.min_order_price = 100;
  data.max_order_price = 200;
  // data.payment_methods = ["wechat"]
  // data.type = "sell"
  data.payment_ttl_mins = -1;
  data.price = 1000;
  data.floating_price = 100;
  data.qty = 1;
  // data.fiat = "BTC"
  data.remarks = "this is remarks";
  // data.auto_reply_message = "auto reply";
  // data.crypto = "BTC"
  // data.trade_conditions = "This is condtion"
  // data.published = false

  const [progressCount, setProgressCount] = useState(1);
  const tabRef = useRef();
  const nextProgress = async () => {
    console.log("Next clicked");
    if (progressCount < wizards.length) setProgressCount(progressCount + 1);

    if (progressCount === 3) {
      const response = await advert?.create(data);
      console.log(response);
    }
  };
  function prevProgress() {
    console.log("Previous clicked");
    if (progressCount > 1) setProgressCount(progressCount - 1);
  }

  function onSubmit(e) {
    e.preventDefault();
    let { target: form } = e;
    console.log("Form submitted", form);
  }

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
                Create an AD
              </h3>
            </div>
          </div>
        </div>
      </section>
      {/* Create ad */}
      <div style={{ paddingTop: 60, paddingBottom: 60 }}>
        <div className="container">
          <div className="d-flex justify-content-center">
            <div className="mx-auto p-0">
              <div className="timeline-title">
                <h3 className="h3 text-center">Post Trade advertisement</h3>
              </div>
            </div>
          </div>

          {/* Wizard */}
          <div>
            <div className="row justify-content-center">
              <div className="d-flex justify-content-center mt-5">
                <ul className="timeline my-timeline">
                  {Object.values(wizards).map((wizard, index) => (
                    <li
                      key={index}
                      onClick={() => setProgressCount(wizard?.index)}
                      className={`${
                        progressCount == wizard?.index ? "active" : ""
                      } text-capitalize`}
                    >
                      {wizard?.label}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div
              className=""
              style={{
                maxWidth: 768,
                margin: "0 auto",
                width: "100%",
              }}
            >
              <StyledTabParent>
                {Object.values(wizards).map((wizard) => (
                  <section
                    hidden={wizard.index !== progressCount}
                    key={wizard?.index}
                  >
                    <wizard.content next={nextProgress} prev={prevProgress} />
                  </section>
                ))}
              </StyledTabParent>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/**
 *
 * @param {Object} props
 * @param {Object} props.attributes
 * @param {Boolean} props.disabled
 * @param {Function} props.onChange
 * @returns
 */
function PriceInput({
  attributes = {},
  disabled = false,
  onChange = () => null,
}) {
  const [value, setValue] = useState(0);

  function onValueChange({ target }) {
    let update = target?.value;
    if (Number.isNaN(update)) {
      update = 0;
      target.value = 0;
    }
    setValue(update);
    onChange(update);
  }
  function increment() {
    if (!disabled) {
      let update = +value + 1;
      setValue(update);
      onChange(update);
    }
  }
  function decrement() {
    if (!disabled && value > 0) {
      let update = +value - 1;
      setValue(update);
      onChange(update);
    }
  }
  return (
    <StyledPriceInput>
      <button type="button" onClick={decrement}>
        -
      </button>
      <input
        {...attributes}
        disabled={disabled}
        type="text"
        pattern="\d+"
        value={value}
        onChange={onValueChange}
      />
      <button type="button" onClick={increment}>
        +
      </button>
    </StyledPriceInput>
  );
}

/**
 * @function SetPriceAndType
 * @param {Object} props
 * @returns
 */
function SetPriceAndType({ next, prev }) {
  const [advertType, setAdvertType] = useState(ADVERT_TYPE?.BUY);
  const [priceType, setPriceType] = useState(PRICE_TYPE?.FIXED);
  const [yourPrice, setYourPrice] = useState(0);
  const [fiat, setFiat] = useState(null);
  const [crypto, setCrypto] = useState(null);

  function onTypeChange({ currentTarget }) {
    setAdvertType(currentTarget?.value);
  }
  function onPriceChange({ currentTarget }) {
    setPriceType(currentTarget?.value);
  }

  data.type = advertType;
  // data.priceType = priceType;
  // data.yourPrice = yourPrice
  data.fiat = fiat;
  data.crypto = crypto;

  const [currErr, setcurrErr] = useState("");
  const [fiatErr, setfiatErr] = useState("");
  const [priceErr, setpriceErr] = useState("");

  function checkValidation() {
    let flag = false;
    if (crypto == null) {
      setcurrErr("Please select currency");
      flag = false;
    } else {
      setcurrErr("");
      flag = true;
    }

    if (fiat == null) {
      setfiatErr("Please select fiat");
      flag = false;
    } else {
      setfiatErr("");
      flag = true;
    }

    if (yourPrice == 0) {
      setpriceErr("Price is not zero");
      flag = false;
    } else {
      setpriceErr("");
      flag = true;
    }

    if (crypto != null && fiat != null && yourPrice != 0) {
      next();
    }
  }

  return (
    <>
      <WizardForm>
        <Cage>
          <StyledSwitch>
            {Object.entries(ADVERT_TYPE)?.map(([key, value], index) => (
              <label
                className="switch-part"
                htmlFor={key}
                key={`${key}-${index}`}
              >
                <input
                  type="radio"
                  defaultValue={value}
                  checked={advertType === value}
                  onChange={onTypeChange}
                  id={key}
                  name="advert-type"
                />
                <span className="text-capitalize">{value}</span>
              </label>
            ))}
          </StyledSwitch>
          <div className="row">
            <div className="col-md-6">
              <Cage>
                <dl>Asset</dl>
                <StyledSelector>
                  {" "}
                  <CryptoCurrency onChange={setCrypto} />
                </StyledSelector>
                <small className="text-danger">{currErr}</small>
              </Cage>
            </div>
            <div className="col-md-6">
              <Cage>
                <dl>With Fiat</dl>
                <StyledSelector>
                  <FiatCurrency onChange={setFiat} />
                </StyledSelector>
                <small className="text-danger"> {fiatErr} </small>
              </Cage>
            </div>
          </div>
        </Cage>
        {/* Price settings */}
        <Cage>
          <div>
            <p className="h5 text-muted">Price Settings</p>
            <hr />
          </div>
          <p className="h6 text-muted">Price Type</p>
          <StyledSwitch>
            {Object.entries(PRICE_TYPE)?.map(([key, value], index) => (
              <label
                className="switch-part"
                htmlFor={key}
                key={`${key}-${index}`}
              >
                <input
                  type="radio"
                  defaultValue={value}
                  checked={priceType === value}
                  onChange={onPriceChange}
                  id={key}
                  name="price-type"
                />
                <span className="text-capitalize">{value}</span>
              </label>
            ))}
          </StyledSwitch>
          <div className="row">
            {priceType == PRICE_TYPE.FLOAT ? (
              <div className="col-md-6">
                {/* Floating price */}
                <Cage>
                  <p className="h6 text-muted">Floating Price Margin</p>
                  <PriceInput
                    disabled={priceType !== PRICE_TYPE.FLOAT}
                    onChange={setYourPrice}
                  />
                </Cage>
              </div>
            ) : (
              <div className="col-md-6">
                {/* Fixed price */}
                <Cage>
                  <p className="h6 text-muted">Fixed Price Margin</p>
                  <PriceInput onChange={setYourPrice} />
                  <small className="text-danger">{priceErr}</small>
                </Cage>
              </div>
            )}
          </div>
        </Cage>

        <div className="row">
          <div className="col-md-6">
            <Cage>
              <dl>Your Price</dl>
              <dd>{yourPrice}</dd>
            </Cage>
          </div>
          <div className="col-md-6">
            <Cage className="text-right">
              <dl>Highest Order Price</dl>
              <dd></dd>
            </Cage>
          </div>
        </div>
        <hr />
        <Cage>
          <div className="d-flex flex-row-reverse justify-content-between">
            <button
              type="button"
              onClick={checkValidation}
              className="btn d-block next-bn"
            >
              Continue check
            </button>
          </div>
        </Cage>
      </WizardForm>
    </>
  );
}

/**
 * @function SetTradingAmountAndPayment
 * @param {Object} props
 * @returns
 */
function SetTradingAmountAndPayment({ next, prev }) {
  const [totalAmount, setTotalAmount] = useState(null);
  const [limitStart, setLimitStart] = useState(null);
  const [limitEnd, setLimitEnd] = useState(null);
  const [paymentMethod, setPaymentMethod] = useState([]);

  // data.totalAmount = totalAmount;
  // data.limitStart = limitStart;
  // data.limitEnd = limitEnd
  data.payment_methods = paymentMethod;

  function onTotalAmountChange({ currentTarget }) {
    // console.log("on Total AmountChange    "+ currentTarget?.value)
    setTotalAmount(currentTarget?.value);
  }

  function onLimitStartChange({ currentTarget }) {
    // console.log("onLimit Start Change    "+ currentTarget?.value)
    setLimitStart(currentTarget?.value);
  }

  function onLimitEndChange({ currentTarget }) {
    // console.log("onLimit EndnChange    "+ currentTarget?.value)
    setLimitEnd(currentTarget?.value);
  }

  const [totalAmountErr, settotalAmountErr] = useState("");
  const [limitStartErr, setlimitStartErr] = useState("");
  const [limitEndErr, setlimitEndErr] = useState("");
  const [addPaymentErr, setaddPaymentErr] = useState("");

  function checkValidation2() {
    let flag2 = false;

    if (totalAmount == 0) {
      settotalAmountErr("Price is not zero");
      flag2 = false;
    } else if (totalAmount == null) {
      settotalAmountErr("Please Enter Total Amount");
      flag2 = false;
    } else {
      settotalAmountErr("");
      flag2 = true;
    }

    if (limitStart == null) {
      setlimitStartErr("Please Enter Starting Limit");
      flag2 = false;
    } else {
      setlimitStartErr("");
      flag2 = true;
    }

    if (limitEnd == 0) {
      setlimitEndErr("Price is not zero");
      flag2 = false;
    } else if (limitEnd == null) {
      setlimitEndErr("Please Enter Ending Limit");
      flag2 = false;
    } else {
      setlimitEndErr("");
      flag2 = true;
    }

    if (paymentMethod.length == 0) {
      setaddPaymentErr("Please select payment method");
    }

    if (
      totalAmount != null &&
      totalAmount != 0 &&
      limitStart != null &&
      limitEnd != null &&
      limitEnd != 0 &&
      paymentMethod.length != 0
    ) {
      next();
    }
  }

  return (
    <>
      <WizardForm>
        <Cage>
          <div className="row">
            <div className="col-md-12">
              <Cage>
                <dl>Total Amount</dl>
                <div className="input-group mb-3">
                  <input
                    type="text"
                    className="form-control"
                    aria-describedby="basic-addon2"
                    onChange={onTotalAmountChange}
                  />
                  <span className="input-group-text" id="basic-addon2">
                    USDT
                  </span>
                </div>
                <small className="text-danger">{totalAmountErr}</small>
              </Cage>
            </div>
          </div>
        </Cage>

        {/* Order Limit */}
        <Cage>
          <dl>Order Limit</dl>
          <div className="row">
            <div className="col-md-6">
              <Cage>
                <div className="input-group mb-3">
                  <input
                    type="text"
                    className="form-control"
                    aria-describedby="basic-addon2"
                    onChange={onLimitStartChange}
                  />
                  <span className="input-group-text" id="basic-addon2">
                    NGN
                  </span>
                </div>
                <small className="text-danger">{limitStartErr}</small>
              </Cage>
            </div>

            <div className="col-md-6">
              <Cage>
                {/* <dl></dl> */}
                <div className="input-group mb-3">
                  <input
                    type="text"
                    className="form-control"
                    aria-describedby="basic-addon2"
                    onChange={onLimitEndChange}
                  />
                  <span className="input-group-text" id="basic-addon2">
                    NGN
                  </span>
                </div>
                <small className="text-danger">{limitEndErr}</small>
              </Cage>
            </div>
          </div>
        </Cage>
        {/* Price settings */}
        <Cage>
          <div className="row">
            <hr />
            <div className="col-md-6">
              <p className="h5 text-muted">Payment Method</p>
              <p>Select up to 3 method</p>
            </div>
            <div className="col-md-6">
              {/* <button className="float-right btn ">+ADD</button> */}
            </div>
          </div>
          <Multiselect
            displayValue="key"
            isObject={true}
            onKeyPressFn={function noRefCheck() {}}
            onRemove={function noRefCheck(selectedList, selectedItem) {
              paymentMethod.pop(selectedItem);
            }}
            onSearch={function noRefCheck() {}}
            onSelect={function noRefCheck(selectedList, selectedItem) {
              paymentMethod.push(selectedItem.id);
            }}
            options={[
              { id: "bankTransfer", key: "Bank Transfer" },
              { id: "wechat", key: "Wechat" },
              { id: "alipay", key: "Alipay" },
            ]}
            selectionLimit={3}
          />

          <small className="text-danger">{addPaymentErr}</small>
        </Cage>

        <hr />
        <Cage>
          <div className="d-flex flex-row-reverse justify-content-between">
            <button
              type="button"
              onClick={checkValidation2}
              className="btn d-block next-bn"
            >
              Continue
            </button>

            <button type="button" onClick={prev} className="btn text-muted">
              Previous
            </button>
          </div>
        </Cage>
      </WizardForm>
    </>
  );
}

// const textAreaStyle = {}
/**
 * @function SetRemarksAndResponse
 * @param {Object} props
 * @returns
 */
function SetRemarksAndResponse({ next, prev }) {
  const [terms, setTerms] = useState(null);
  const [autoReply, setautoReply] = useState(null);
  const [publish, setPublish] = useState(null);

  data.trade_conditions = terms;
  data.auto_reply_message = autoReply;
  data.published = publish;

  function onTermChange({ currentTarget }) {
    console.log("onTermChange    " + currentTarget?.value);
    setTerms(currentTarget?.value);
  }

  function onAutoReplyChange({ currentTarget }) {
    console.log("onAutoReplyChange    " + currentTarget?.value);
    setautoReply(currentTarget?.value);
  }

  const [termErr, setTermErr] = useState("");
  const [autoReplyErr, setautoReplyErr] = useState("");

  function validation3() {
    if (terms == null) {
      setTermErr("Please Enter Terms");
    }

    if (autoReply == null) {
      setautoReplyErr("Please Enter Auto-Reply  ");
    }
  }

  function handleChange(e) {
    console.log(typeof e.target.attributes.id);
  }

  function handlePublishChange({ currentTarget }) {
    console.log(currentTarget?.value);
    setPublish(currentTarget?.value);
  }

  return (
    <>
      <WizardForm>
        <Cage>
          <div className="row">
            <div className="col-md-12">
              <Cage>
                <dl>Terms(Optional)</dl>
                <textarea
                  style={{ "border-radius": "5px", border: "1px solid" }}
                  rows="4"
                  onChange={onTermChange}
                ></textarea>
                <small className="text-danger">{termErr}</small>
              </Cage>
            </div>
          </div>

          <div className="row">
            <div className="col-md-12">
              <Cage>
                <dl>Auto-reply(Optional)</dl>
                <textarea
                  style={{ "border-radius": "5px", border: "1px solid" }}
                  rows="4"
                  onChange={onAutoReplyChange}
                ></textarea>
                <small className="text-danger">{autoReplyErr}</small>
              </Cage>
            </div>
          </div>
        </Cage>
        {/* Price settings */}
        <Cage>
          <div>
            <hr />
            <p className="h5 text-muted">Counterparty conditions</p>
          </div>

          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              value="Completed KYC"
              id="complete-KYC-ID"
              onClick={handleChange}
            />
            <label className="form-check-label" for="flexCheckDefault27">
              Completed KYC
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              value=""
              id="register-ID"
              onClick={handleChange}
            />
            <label className="form-check-label" for="flexCheckDefault">
              Registarted 0 day(s) ago
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              value=""
              id="holding-more-ID"
            />
            <label className="form-check-label" for="flexCheckDefault">
              Holding more than 0.01 BTC
            </label>
          </div>
        </Cage>

        <Cage>
          <div>
            <hr />
          </div>

          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="flexRadioDefault"
              value={true}
              id="flexRadioDefault1"
              onClick={handlePublishChange}
            />
            <label className="form-check-label" for="flexRadioDefault1">
              Online
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="flexRadioDefault"
              value={false}
              id="flexRadioDefault1"
              onClick={handlePublishChange}
            />
            <label className="form-check-label" for="flexRadioDefault1">
              Offline now, Publish manually later.
            </label>
          </div>
        </Cage>

        <hr />
        <Cage>
          <div className="d-flex flex-row-reverse justify-content-between">
            <button
              type="button"
              onClick={next}
              className="btn d-block next-bn"
            >
              Finish
            </button>

            <button type="button" onClick={prev} className="btn btn-default">
              Previous
            </button>
          </div>
        </Cage>
      </WizardForm>
    </>
  );
}
