import React, { useState, useEffect, useReducer ,useRef} from "react";
import "./advert.style.css";
import styled from "styled-components";
import { Multiselect } from "multiselect-react-dropdown";

// COMPONENTS
import FiatCurrency from "../../components/input/FiatCurrency.component";
import CryptoCurrencySelector from "../../components/input/CryptoCurrency.component";
import useServiceContextHook from "../../../../_hooks/service.context.hook";
import { notify } from "../../../../_helpers/notify";
import { routeMap } from "../../routes";
import { Alert } from "react-bootstrap";
import { FormControlLabel, FormGroup, Switch } from "@mui/material";

// import BTCPrice from "../../components/input/BTCPrice.component";

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
    content: SetQuantityAndPayment,
  },
  {
    label: "Set remarks and Automatic response",
    index: 3,
    content: SetRemarksAndResponse,
  },
];

const WizardForm = styled.form`
  padding: 30px 0;
  max-width: 769px;
  width: 100%;
  flex: 1;
`;

const Cage = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  padding: 8px 0 16px;
`;

const StyledSwitch = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: inset 0 0 20px -10px rgb(0 0 0 / 15%);
  border-radius: 10px;
  /* overflow: hidden; */
  width: 100%;
  padding: 0;
  /* border-bottom: 1px solid #ededed; */
  .switch-part {
    cursor: pointer;
    flex-grow: 1;
    display: inline-flex;
    justify-content: center;
    position: relative;
    padding: 8px;
    border-radius: inherit;
    input[type="radio"] {
      position: absolute;
      display: block;
      text-align: center;
      opacity: 0;
      ~ span {
        opacity: 0.5;
        padding: 16px 20px;
        display: inline-flex;
        justify-content: center;
        width: 100%;
        border-radius: inherit;
      }
      &:checked ~ span {
        font-weight: bold;
        color: #0059ff;
        opacity: 1;
        box-shadow: 0 5px 20px -1px rgba(0, 0, 0, 15%);
      }
    }
  }
`;

const StyledPriceInput = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  box-sizing: border-box;
  border-radius: 4px;
  box-shadow: 0 0 2px 1px rgba(0, 0, 0, 15%);
  overflow: hidden;

  /* &:focus,
  &:focus-within {
    box-shadow: 0 0 2px 3px rgba(89, 89, 89, 30%);
  } */
  /* padding-left: 8px; */
  > input {
    display: block;
    flex: 1 auto;
    width: auto;
    min-width: 0;
    padding-top: 6px;
    padding-bottom: 6px;
    padding-left: 8px;
    box-sizing: border-box;
    /* max-width: 70%; */

    &:focus {
      border: none;
      box-shadow: none;
      outline: none;
    }
    &:invalid {
      box-shadow: inset 0 0 2px 3px rgba(255, 89, 89, 30%);
    }
  }
  input[type="number"]::-webkit-inner-spin-button,
  input[type="number"]::-webkit-outer-spin-button {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    margin: 0;
  }
  > button {
    padding: 8px 20px;
    display: block;
    border: none;
    font-size: 18px;
    &:active {
      background: #ededed;
    }
  }
  > .buttons {
    display: flex;
    /* flex: 1 auto; */
    position: relative;
    overflow: hidden;
    border-left: 1px solid rgba(0, 0, 0, 15%);
  }
`;

const StyleInput = styled.input`
  // display: block;
  // flex: 1 auto;
  // width: auto;
  // min-width: 0;
  // padding-top: 6px;
  // padding-bottom: 6px;
  // padding-left: 8px;
  // box-sizing: border-box;
`;

const StyledTabParent = styled("section")`
  border: none !important;
  padding: 0 !important;
`;

const StyledSelector = styled("div")`
  select {
    appearance: none;
    width: 100%;
    padding: 10px;
    display: block;
    background-color: transparent;
    box-shadow: 0 5px 20px -1px rgba(0, 0, 0, 15%);
    border-radius: 8px;
    &:focus {
    }
  }
`;

const NumberInput = styled("div")`
  input[type="number"]::-webkit-inner-spin-button,
  input[type="number"]::-webkit-outer-spin-button {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    margin: 0;
  }
`;

const stepTrack = [false, false, false];

function formReducer(state, { type, value }) {
  // console.log({ type, value });
  switch (type) {
    case "type": {
      return { ...state, type: value };
    }
    case "fiat": {
      return { ...state, fiat: value };
    }
    case "crypto": {
      return { ...state, crypto: value };
    }
    case "price": {
      return { ...state, price: value };
    }
    case "market_price": {
      return { ...state, market_price: value };
    }
    case "published": {
      return { ...state, published: value };
    }
    case "total_qty": {
      return { ...state, total_qty: value };
    }
    case "available_qty": {
      return { ...state, available_qty: value };
    }
    case "min_order_qty": {
      return { ...state, min_order_qty: value };
    }
    case "max_order_qty": {
      return { ...state, max_order_qty: value };
    }
    case "payment_methods": {
      return { ...state, payment_methods: value };
    }
    case "floating_price_margin": {
      return { ...state, floating_price_margin: value };
    }
    case "auto_reply_message": {
      return { ...state, auto_reply_message: value };
    }
    case "counter_party_conditions": {
      return {
        ...state,
        counter_party_conditions: value,
      };
    }
    case "remarks": {
      return { ...state, remarks: value };
    }
    
    default: {
      return state;
    }
  }
}
const initialData = {
  payment_ttl_mins: -1,
  total_qty: 1,
  available_qty: 1,
  type: "buy",
  fiat: "",
  crypto: "",
  price: 1,
  market_price: 1,
  floating_price_margin: 100,
  auto_reply_message: "",
  payment_methods: [],
  min_order_qty: 0,
  max_order_qty: 0,
  published: true,
  counter_party_conditions: {
    requires_kyc_id: false,
  },
  auto_reply_message: "",
  remarks: "",
};

export default function CreateAdvert() {
  const {
    services: { advert },
    history,
  } = useServiceContextHook();

  const [formData, setFormData] = useReducer(formReducer, initialData);
  const [isLoading, setIsLoading] = useState(false);

  async function onCreateAdvert() {
    try {
      setIsLoading(true);
      let { data, error, message } = await advert?.create(formData);

      if (!data)
        throw new Error(
          error?.message || message || "Cannot create advert! Unknown error"
        );

      notify("Advert created successfully!");
      history.push({
        pathname: routeMap?.order,
      });
    } catch (err) {
      notify(err?.message, "error");
    } finally {
      setIsLoading(false);
    }
  }

  const [progressCount, setProgressCount] = useState(1);

  function nextProgress() {
    if (progressCount < wizards.length) setProgressCount(progressCount + 1);

    if (progressCount >= wizards.length) {
      console.log("HERE", formData, onCreateAdvert);
      onCreateAdvert();
    }
  }

  function prevProgress() {
    if (progressCount > 1) setProgressCount(progressCount - 1);
  }

  return (
    <div className="content">
      {/* Top */}
      <section id="mainTop">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h3
                className="wow animate__animated fadeInDown"
                data-wow-delay="0.3s"
              >
                Post advertisement
              </h3>
            </div>
          </div>
        </div>
      </section>

      {/* Create ad wizard*/}
      <div style={{ paddingTop: 60, paddingBottom: 60 }}>
        <div className="container">
          <div className="d-flex justify-content-center">
            <div className="mx-auto p-0">
              <div className="timeline-title">
                <h3 className="h3 text-center">Post Trade advertisement</h3>
              </div>
            </div>
          </div>
          {/* Wizard Forms */}
          <div>
            {/* TIMELINE */}
            <div className="row justify-content-center">
              <div className="d-flex justify-content-center mt-5">
                <ul className="timeline my-timeline">
                  {Object.values(wizards).map((wizard, index) => (
                    <li
                      key={index}
                      onClick={() => {
                        if (stepTrack[wizard?.index - 1] == true) {
                          setProgressCount(wizard?.index);
                        } else if (
                          wizard?.index > 1 &&
                          stepTrack[wizard?.index - 2] == true
                        ) {
                          setProgressCount(wizard?.index);
                        }
                      }}
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

            {/* FORM CONTENTS */}
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
                    <wizard.content
                      {...{
                        next: nextProgress,
                        setFormData,
                        formData,
                        prev: prevProgress,
                      }}
                    />
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
  newPrice = 0,
  actualPrice = 0,
  isFloat = false,
}) {
  const [floatVal, setfloatVal] = useState(100);

  const [value, setValue] = useState(0);

  function onValueChange({ target }) {
    let update = target?.value;

    if (Number.isNaN(update)) {
      update = 0;
      target.value = 0;
    }

    if (update > 0) {
      // onCryptoChange(e)
    }

    if (isFloat) {
      setfloatVal(Number(update));
      const updateVal = (update / 100) * actualPrice;
      onChange(updateVal, update);
    } else {
      setValue(update);
      onChange(update, update);
    }
  }

  function increment() {
    const step = isFloat ? 1 : 1;
    const new_val = floatVal + step;
    
    if (isFloat) {
      setfloatVal(new_val);
      if (!disabled) {
        let update = (new_val / 100) * actualPrice;
        onChange(update, new_val);
      }
    } else {
      if (!disabled) {
        let update = (+newPrice + step).toFixed(2);
        setValue(update);
        onChange(update, floatVal);
      }
    }
  }

  function decrement() {
    const step = isFloat ? 1 : 1;
    const new_val = floatVal - step;
    
    if (isFloat) {
      setfloatVal(new_val);
      if (!disabled && floatVal > 0) {
        let update = (floatVal / 100) * actualPrice;
        onChange(update, new_val);
      }
    } else {
      if (!disabled) {
        let update = (+newPrice - step).toFixed(2);
        setValue(update);
        onChange(update, floatVal);
      }
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
        type="number"
        pattern="\d+"
        // value={newprice}
        value={isFloat ? floatVal : newPrice}
        onChange={onValueChange}
      />
      {isFloat ? (
        <button type="button" className="btn-light">
          {" "}
          %{" "}
        </button>
      ) : null}
      <button type="button" onClick={increment}>
        +
      </button>
    </StyledPriceInput>
  );
}

/* const con_ids = {
    BTC: "bitcoin",
    ETH: "ethereum",
    BNB: "binancecoin",
    XRP: "ripple",
    USDT: "tether",
  }; */

/**
 * @function SetPriceAndType
 * @param {Object} props
 * @returns
 */
function SetPriceAndType({ next, prev, setFormData, formData }) {
  const {
    services: { coingecko, type },
  } = useServiceContextHook();

  const [priceType, setPriceType] = useState(PRICE_TYPE?.FIXED);
  const [allCrypto, setAllCrypto] = useState({});
  const [allFiat, setAllFiat] = useState({});
  const [floatPercent, setFloatPercent] = useState(100);
  const [errors, setErrors] = useState();
  const [fixedFloat, setFixedFlot] = useState(100);
  const [isLatestPrice, setIsLatestPrice] = useState(false);

  useEffect(() => {
    async function supportedFiat() {
      try {
        let { data } = await type.findByName("supported_fiat");
        if (!data) throw new Error(`Cannot fetch supported fiat`);
        return setAllFiat(data);
      } catch (err) {
        console.error(err);
        return null;
      }
    }

    async function supportedCrypto() {
      try {
        let { data } = await type.findByName("supported_tokens");
        if (!data) throw new Error(`Cannot fetch supported tokens`);
        setAllCrypto(data);
      } catch (err) {
        console.error(err);
        return null;
      }
    }

    supportedCrypto();
    supportedFiat();
  }, []);

  const cryptoID = {
    BTC: "bitcoin",
    ETH: "ethereum",
    BNB: "oec-binance-coin",
    XRP: "ripple"
  }

  const intervalId = useRef();
  const [count, setCount] = useState(0);

  // WATCH - Crypto or fiat input changes
  useEffect(async () => {
    try {
      if (formData?.crypto && formData.fiat) {
        var currentCrypto = allCrypto[formData?.crypto];

        const { data, error, message } = await coingecko?.cryptoVsFiatPrice(
          currentCrypto,
          formData?.fiat
        );

        if (!data)
          throw new Error(error.message || message || "Network error!");

          
        setRealDataPrice(data, true)
        clearInterval(intervalId.current);
        intervalId.current = setInterval(async () => {
          const { data, error, message } = await coingecko?.cryptoVsFiatPrice(
            currentCrypto,
            formData?.fiat
          );
  
          if (!data)
            throw new Error(error.message || message || "Network error!");

          setRealDataPrice(data)
        }, 3000);
        return () => clearInterval(intervalId.current);       

      }
    } catch (err) {
      console.error(err);
      setErrors((state) => ({ ...state, network: err.message }));
    }

    return () => {
      coingecko.abort();
    };
  }, [formData?.crypto, formData?.fiat]);

  useEffect(async () => {
    const market_price = formData?.market_price;
    updatePrice(market_price);

  }, [formData?.crypto, formData?.fiat, priceType,formData?.floating_price_margin,,formData?.market_price]); 

  function setRealDataPrice(data, isupdate){
    
    const values = Object.values(data);
    const curreObj = data;
    if (curreObj) {
      const fiatObj = Object.values(curreObj);
      const thValue = fiatObj[0];
      if (thValue) {
        const acCurrent = Object.values(thValue);

        // setFormData({
        //   type: "price",
        //   value: acCurrent ? acCurrent[0] : 1,
        // });
        
        if(isupdate){
          setIsLatestPrice(true);          
        }
        setFormData({
          type: "market_price",
          value: acCurrent ? acCurrent[0] : 1,
        });
        
        
      }
    }
  }
  function updatePrice(price){
    
    if(priceType == 'floating'){
      price = price * formData?.floating_price_margin /100;      
      setFormData({ type: "price", value: price });
    }else{      
      if (formData?.crypto && formData.fiat && isLatestPrice) {
        setIsLatestPrice(false);
        setFormData({
          type: "price",
          value: price,
        });
      }
    }
  }
  function isValid() {
    const errors = {};

    if (!formData?.crypto) {
      errors.crypto = "Crypto cannot be empty";
    }
    if (!formData?.fiat) {
      errors.fiat = "Fiat cannot be empty";
    }
    if (formData?.price <= 0) {
      errors.price = "Price cannot be zero";
    }
    if (priceType == "floating") {
      if (floatPercent < 80 || floatPercent > 120) {
        errors.floating_price_margin =
          "Price is not zeroFloating price margin should be between 80% to 120%";
      }
    }
    setErrors(errors);
    return Boolean(!Object?.keys(errors)?.length);
  }

  function onPriceChange({ currentTarget }) {
    setPriceType(currentTarget?.value);
  }

  function onPriceInputChange(e, f) {
    
    setFormData({ type: "price", value: e });
    setFormData({ type: "floating_price_margin", value: f });
    setFloatPercent(f);
    if (e <= 0) {
      setErrors("Price is not zero");
    }
  }

  function validateAndContinue() {
    isValid() && next();
  }

  // console.log(formData)
  return (
    <>
      <WizardForm>
        {errors?.network && <Alert variant="danger">{errors?.network}</Alert>}
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
                  checked={formData?.type === value}
                  onChange={({ target }) =>
                    setFormData({ type: "type", value: target.value })
                  }
                  id={key}
                  name="type"
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
                  <CryptoCurrencySelector
                    onChange={(value) => setFormData({ type: "crypto", value })}
                  />
                </StyledSelector>
                <small className="text-danger">
                  {errors && errors?.crypto}
                </small>
              </Cage>
            </div>
            <div className="col-md-6">
              <Cage>
                <dl>With Fiat</dl>
                <StyledSelector>
                  <FiatCurrency
                    onChange={(value) => setFormData({ type: "fiat", value })}
                  />
                </StyledSelector>
                <small className="text-danger">
                  {" "}
                  {errors && errors?.fiat}{" "}
                </small>
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
                    onChange={(e, f) => {
                      onPriceInputChange(e, f);
                    }}
                    //onFloatChange={(e) => { setfloatVal(e) }}
                    newPrice={formData?.price}
                    floatPrice={fixedFloat}
                    actualPrice={formData?.market_price}
                    isFloat={true}
                  />
                  <small className="text-danger">
                    {errors && errors?.floating_price_margin}
                  </small>
                </Cage>
              </div>
            ) : (
              <div className="col-md-6">
                {/* Fixed price */}
                <Cage>
                  <p className="h6 text-muted">Fixed Price Margin</p>
                  <PriceInput
                    newPrice={formData?.price}
                    onChange={(e, f) => {
                      onPriceInputChange(e, f);
                    }}
                  />
                  <small className="text-danger">
                    {errors && errors?.price}
                  </small>
                </Cage>
              </div>
            )}
          </div>
        </Cage>
        <div className="row">
          <div className="col-md-6">
            <Cage>
              <dl>Your Price</dl>
              <dd>
                {formData?.price} {formData?.fiat}
              </dd>
            </Cage>
          </div>
          <div className="col-md-6">
            <Cage className="text-right">
              {/* <BTCPrice /> */}
            </Cage>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
              {formData?.fiat && formData?.crypto && formData?.market_price && 
                <div className="font-italic text-green">1 {formData?.crypto} = {formData?.market_price} {formData?.fiat}</div>
              }
          </div>
        </div>

        <hr />
        <Cage>
          <div className="d-flex flex-row-reverse justify-content-between">
            <button
              type="button"
              onClick={validateAndContinue}
              className="btn d-block next-bn"
            >
              Continue
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
function SetQuantityAndPayment({ next, prev, setFormData, formData }) {
  const [errors, setErrors] = useState();

  const {
    session,
    services: { user },
  } = useServiceContextHook();

  const [userData, setUserData] = useState(null);
  
  useEffect(() => {
    if (session?.user)
      (async () => {
        try {
          if (!userData) {
            let { data, error } = await fetchUserData();
            if (error) throw new Error(error);
            setUserData(data);
          }
        } catch (error) {
          console.error(error);
        }
      })();
    return user.abort;
  }, [session]);

  async function fetchUserData(
    filter = {
      include: ["profile"],
    }
  ) {
    return await user.find(filter);
  }

  function isValid() {
    const errors = {};
    if (formData?.total_qty <= 0)
      errors.total_qty = "Total Amount should not be zero";

    if (Number(formData?.min_order_qty) >= Number(formData?.max_order_qty)) {
      errors.min_order_qty =
        "Minimum order cannot be greater than maximum order";
      errors.max_order_qty = "Maximum order cannot be less than minimum order";
    }

    if (formData?.min_order_qty == 0)
      errors.min_order_qty = "Minimum order  should not be zero";

    if (formData?.max_order_qty == 0)
      errors.max_order_qty = "Maximum order  should not be zero";

    if (!formData?.payment_methods?.length)
      errors.payment_methods = "Please select payment method";

    setErrors(errors);
    return Boolean(!Object.keys(errors)?.length);
  }

  function validateAndContinue() {
    isValid() && next();
  }

  const user_payment_methods = userData?.profile?.payment_methods;

  const toTitleCase = (phrase) => {
    return phrase
      .toLowerCase()
      .split(' ')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  };

  const paymentMethods = []
  user_payment_methods && Object.keys(user_payment_methods).map(function(key) {
    const title = toTitleCase(key.replace('_',' '));
    paymentMethods.push({'id':key.toUpperCase(), 'key' : title});
  });

  // console.log([
  //   { id: "BANK_TRANSFER", key: "Bank Transfer" },
  //   { id: "WECHAT", key: "Wechat" },
  //   { id: "ALIPAY", key: "Alipay" },
  // ])
  return (
    <>
      <WizardForm>
        <Cage>
          <div className="row">
            <div className="col-md-12">
              <Cage>
                <dl>Total Amount</dl>
                <NumberInput>
                  <div className="input-group mb-3">
                    <input
                      type="number"
                      className="form-control number-input"
                      aria-describedby="basic-addon2"
                      onChange={({ target }) => {
                        setFormData({
                          type: "total_qty",
                          value: target?.value,
                        });
                        setFormData({
                          type: "available_qty",
                          value: target?.value,
                        });
                      }}
                    />
                    <span className="input-group-text" id="basic-addon2">
                      {formData.crypto}
                    </span>
                  </div>
                </NumberInput>
                <small className="text-danger">
                  {errors && errors?.total_qty}
                </small>
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
                <label htmlFor="">Minimum quantity</label>
                <NumberInput>
                  <div className="input-group mb-3">
                    <input
                      type="number"
                      className="form-control number-input"
                      aria-describedby="basic-addon2"
                      onChange={({ target }) =>
                        setFormData({
                          type: "min_order_qty",
                          value: target?.value,
                        })
                      }
                    />

                    <span className="input-group-text" id="basic-addon2">
                      {String(formData.fiat)?.toUpperCase()}
                    </span>
                  </div>
                </NumberInput>
                <small className="text-danger">
                  {errors && errors.min_order_qty}
                </small>
              </Cage>
            </div>

            <div className="col-md-6">
              <Cage>
                <label htmlFor="">Maximum quantity</label>
                <NumberInput>
                  <div className="input-group mb-3">
                    <input
                      type="number"
                      className="form-control number-input"
                      aria-describedby="basic-addon2"
                      onChange={({ target }) =>
                        setFormData({
                          type: "max_order_qty",
                          value: target?.value,
                        })
                      }
                    />
                    <span className="input-group-text" id="basic-addon2">
                      {String(formData.fiat)?.toUpperCase()}
                    </span>
                  </div>
                </NumberInput>
                <small className="text-danger">
                  {errors && errors.max_order_qty}
                </small>
              </Cage>
            </div>
          </div>
        </Cage>
        <hr />
        {/* Payment methods settings */}
        <Cage>
          <div className="row">
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
              setFormData({
                type: "payment_methods",
                value: selectedList?.map(({ id }) => id),
              });
              if (selectedList.length == 0) {
                setErrors((state) => ({
                  ...state,
                  payment_methods: "Please select payment method",
                }));
              }
            }}
            onSearch={function noRefCheck() {}}
            onSelect={function noRefCheck(selectedList, selectedItem) {
              setFormData({
                type: "payment_methods",
                value: selectedList?.map(({ id }) => id),
              });
              if (selectedList.length == 0) {
                setErrors((state) => ({
                  ...state,
                  payment_methods: "Please select payment method",
                }));
              }
            }}
            options={paymentMethods}
            selectionLimit={3}
          />

          <small className="text-danger">
            {errors && errors?.payment_methods}
          </small>
        </Cage>

        <hr />
        <Cage>
          <div className="d-flex flex-row-reverse justify-content-between">
            <button
              type="button"
              onClick={validateAndContinue}
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
function SetRemarksAndResponse({ next, prev, setFormData, formData }) {
  const [errors, setErrors] = useState(null);

  function isValid() {
    const errors = {};

    setErrors(errors);
    return Boolean(!Object.keys(errors).length);
  }

  // const [termErr, setTermErr] = useState("");
  // const [autoReplyErr, setautoReplyErr] = useState("");
  // const [autoRemarksErr, setRemarksErr] = useState("");

  function validateAndContinue() {
    isValid() && next();
  }

  return (
    <>
      <WizardForm>
        <Cage>
          <div className="row">
            <div className="col-md-12">
              <Cage>
                <dl>Auto-reply message(Optional)</dl>
                <textarea
                  style={{ borderRadius: "5px", border: "1px solid" }}
                  rows="4"
                  onChange={({ target }) =>
                    setFormData({
                      type: "auto_reply_message",
                      value: target?.value,
                    })
                  }
                ></textarea>
                {/* <small className="text-danger">
                  {errors && errors?.auto_reply_message}
                </small> */}
              </Cage>
            </div>
          </div>

          <div className="row">
            <div className="col-md-12">
              <Cage>
                <dl>Remarks(Optional)</dl>
                <textarea
                  style={{ borderRadius: "4px", border: "1px solid" }}
                  rows="4"
                  onChange={({ target }) =>
                    setFormData({ type: "remarks", value: target?.value })
                  }
                ></textarea>
                {/* <small className="text-danger">
                  {errors && errors?.remarks}
                </small> */}
              </Cage>
            </div>
          </div>
        </Cage>

        <hr />
        {/*Counter party terms setting */}
        <Cage>
          <div>
            <p className="h5 text-muted">Counterparty conditions</p>
          </div>

          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              defaultValue={formData?.counter_party_conditions?.requires_kyc_id}
              id="requires_kyc_id"
              onChange={({ target }) =>
                setFormData({
                  type: "counter_party_conditions",
                  value: { requires_kyc_id: target?.checked },
                })
              }
            />
            <label className="form-check-label" htmlFor="requires_kyc_id">
              Completed KYC
            </label>
          </div>
          {/* <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              value=""
              id="registration_date"
              onChange={({ target }) =>
                setFormData({
                  type: "counter_party_conditions",
                  value: { recent_u: target?.checked },
                })
              }
            />
            <label className="form-check-label" htmlFor="flexCheckDefault">
              Registarted 0 day(s) ago
            </label>
          </div> */}
          {/* <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              value=""
              id="holding-more-ID"
            />
            <label className="form-check-label" htmlFor="flexCheckDefault">
              Holding more than 0.01 BTC
            </label>
          </div> */}
        </Cage>

        <Cage>
          <div>
            <hr />
          </div>
          <FormGroup>
            <FormControlLabel
              control={
                <Switch
                  onChange={({ target }) =>
                    setFormData({ type: "published", value: target?.checked })
                  }
                  inputProps={{ "aria-label": "controlled" }}
                  checked={formData?.published}
                ></Switch>
              }
              label="Publish"
            ></FormControlLabel>
          </FormGroup>
        </Cage>

        <hr />
        <Cage>
          <div className="d-flex flex-row-reverse justify-content-between">
            <button
              type="button"
              onClick={validateAndContinue}
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
