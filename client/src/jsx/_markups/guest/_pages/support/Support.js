import React, { useEffect, useState, useRef } from "react";
import {
  Container,
  Row,
  Col,
  Form,
  Button,
  Div,
  Dropdown,
  Tabs,
  Tab,
  Sonnet,
  ToggleButton,
  ToggleButtonGroup,
} from "react-bootstrap";
// import "./support.css";

import icon_password from "../../app-assets/images/icon/icon_password.png";
import icon_recommended from "../../app-assets/images/icon/icon_recommended.png";
import icon_phone from "../../app-assets/images/icon/icon_phone.png";
import icon_email from "../../app-assets/images/icon/icon_email.png";
import icon_verification from "../../app-assets/images/icon/icon_verification.png";

import { useTranslation } from 'react-i18next'
function ToggleButtonGroupControlled() {
  const [value, setValue] = useState([1, 3]);

  const { t } = useTranslation()

  /*
   * The second argument that will be passed to
   * `handleChange` from `ToggleButtonGroup`
   * is the SyntheticEvent object, but we are
   * not using it in this example so we will omit it.
   */
  const handleChange = (val) => setValue(val);

  return (
    <ToggleButtonGroup type="switch" value={value} onChange={handleChange}>
      <ToggleButton id="tbg-btn-1" value={1}>
        Option 1
      </ToggleButton>
      <ToggleButton id="tbg-btn-2" value={2}>
        Option 2
      </ToggleButton>
      <ToggleButton id="tbg-btn-3" value={3}>
        Option 3
      </ToggleButton>
    </ToggleButtonGroup>
  );
}

export const Support = () => {
  const { t } = useTranslation()
  return (
    <div className="content">
      <div className="support-banner" id="support">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col col-sm-12 col-md-6">
              <div className="support-search-input">
                <label
                  htmlFor="searchInput"
                  className="d-flex justify-content-center font-weight-bold"
                >
                  <h4>{t("Search your questions.")}</h4>
                </label>
                <div className="input-group">
                  <div className="input-group-prepend">
                    <span className="input-group-text" id="basic-addon1">
                      <i className="fas fa-search"></i>
                    </span>
                  </div>
                  <input
                    type="text"
                    className="form-control"
                    placeholder={t("search")}
                    aria-label="search"
                    aria-describedby="basic-addon1"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="py-5">
        <div className="container-fluid">
          <div className="container">
            <div className="customer-center">
              <h5 className="customer-center-title font-weight-bold mb-5">
                Online Customer Center Information
              </h5>
              <p className="customer-center-content font-weight-bold mb-0">
                [Information] Coin TC releases ‘Almost everything about Coin TC’
                video with Algoran channel
              </p>
              <hr className="mt-0 mb-4" />
              <p className="customer-center-content font-weight-bold mb-0">
                [Information] Release of 'Coin TC App User Manual' video for
                beginners
              </p>
              <hr className="m-0" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-5">
        <div className="container-fluid">
          <div className="container">
            <div className="user-guide">
              <div className="user-guide-title mb-3">
                <h5 className="font-weight-bold">User Guide</h5>
              </div>
              <div className="row py-3">
                <div className="col col-sm-12 col-md-4 my-text">
                  <h5 className="text-left font-weight-bold">
                    Information Use
                  </h5>
                  <ul className="navbar-nav">
                    <li className="nav-item">
                      <a
                        className="nav-link d-flex align-items-center text-black"
                        href="#"
                      >
                        Transaction Usage Guide
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link d-flex align-items-center text-black"
                        href="#"
                      >
                        {" "}
                        [Consultation] 1:1 inquiry and Kakao Talk consultation
                        method
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="col col-sm-12 col-md-4 my-text">
                  <h5 className="text-left font-weight-bold">
                    Certification process
                  </h5>
                  <ul className="navbar-nav">
                    <li className="nav-item">
                      <a
                        className="nav-link d-flex align-items-center text-black"
                        href="#"
                      >
                        How to raise security level 3 (PC)
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link d-flex align-items-center text-black"
                        href="#"
                      >
                        {" "}
                        How to raise security level 3 (mobile)
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link d-flex align-items-center text-black"
                        href="#"
                      >
                        {" "}
                        How to raise security level 4
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link d-flex align-items-center text-black"
                        href="#"
                      >
                        {" "}
                        + More
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="col col-sm-12 col-md-4 my-text">
                  <h5 className="text-left font-weight-bold">
                    deposit and withdrawal
                  </h5>
                  <ul className="navbar-nav">
                    <li className="nav-item">
                      <a
                        className="nav-link d-flex align-items-center text-black"
                        href="#"
                      >
                        {" "}
                        How to deposit and withdraw KRW (mobile)
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link d-flex align-items-center text-black"
                        href="#"
                      >
                        {" "}
                        How to deposit and withdraw KRW (PC)
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link d-flex align-items-center text-black"
                        href="#"
                      >
                        {" "}
                        How to reset deposit/withdrawal account (mobile)
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link d-flex align-items-center text-black"
                        href="#"
                      >
                        + More
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="row py-3">
                <div className="col col-sm-12 col-md-4 mt-5 my-text">
                  <h5 className="text-left font-weight-bold">
                    Information Use
                  </h5>
                  <ul className="navbar-nav">
                    <li className="nav-item">
                      <a
                        className="nav-link d-flex align-items-center text-black"
                        href="#"
                      >
                        {" "}
                        Transaction Usage Guide
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link d-flex align-items-center text-black"
                        href="#"
                      >
                        {" "}
                        [Consultation] 1:1 inquiry and Kakao Talk consultation
                        method
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-5">
        <div className="container-fluid">
          <div className="container">
            <div className="user-guide">
              <div className="user-guide-title mb-3">
                <h5 className="font-weight-bold">
                  {" "}
                  Frequently Asked Questions{" "}
                </h5>
              </div>
              <div className="row py-3">
                <div className="col col-sm-12 col-md-4 my-text">
                  <h5 className="text-left font-weight-bold"> account </h5>
                  <ul className="navbar-nav">
                    <li className="nav-item">
                      <a
                        className="nav-link d-flex align-items-center text-black"
                        href="#"
                      >
                        {" "}
                        I want to recover my Coin TC account.{" "}
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link d-flex align-items-center text-black"
                        href="#"
                      >
                        {" "}
                        I can't log in. / The login verification code does not
                        come.{" "}
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link d-flex align-items-center text-black"
                        href="#"
                      >
                        {" "}
                        My mobile phone number has changed.{" "}
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link d-flex align-items-center text-black"
                        href="#"
                      >
                        {" "}
                        + More
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="col col-sm-12 col-md-4 my-text">
                  <h5 className="text-left font-weight-bold">
                    Signup / Security Level / Withdrawal
                  </h5>
                  <ul className="navbar-nav">
                    <li className="nav-item">
                      <a
                        className="nav-link d-flex align-items-center text-black"
                        href="#"
                      >
                        {" "}
                        Do I need to have my own mobile phone and account?{" "}
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link d-flex align-items-center text-black"
                        href="#"
                      >
                        Is it possible to use the phone in the corporate name?{" "}
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link d-flex align-items-center text-black"
                        href="#"
                      >
                        {" "}
                        How do I upgrade the security level?{" "}
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link d-flex align-items-center text-black"
                        href="#"
                      >
                        + More{" "}
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="col col-sm-12 col-md-4 my-text">
                  <h5 className="text-left font-weight-bold">
                    Transactions / Assets
                  </h5>
                  <ul className="navbar-nav">
                    <li className="nav-item">
                      <a
                        className="nav-link d-flex align-items-center text-black"
                        href="#"
                      >
                        Suddenly there was USDT.{" "}
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link d-flex align-items-center text-black"
                        href="#"
                      >
                        How is the KRW market, BTC market, and USDT market
                        different?
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link d-flex align-items-center text-black"
                        href="#"
                      >
                        {" "}
                        I have an asset, but I cannot place a buy or sell order.{" "}
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link d-flex align-items-center text-black"
                        href="#"
                      >
                        + More
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="row py-3">
                <div className="col col-sm-12 col-md-4 mt-5 my-text">
                  <h5 className="text-left font-weight-bold">
                    Deposit / Withdraw in KRW{" "}
                  </h5>
                  <ul className="navbar-nav">
                    <li className="nav-item">
                      <a
                        className="nav-link d-flex align-items-center text-black"
                        href="#"
                      >
                        Failed to withdraw KRW.{" "}
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link d-flex align-items-center text-black"
                        href="#"
                      >
                        {" "}
                        Failed to deposit KRW.{" "}
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link d-flex align-items-center text-black"
                        href="#"
                      >
                        {" "}
                        How do I deposit KRW into my Coin TC account?{" "}
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link d-flex align-items-center text-black"
                        href="#"
                      >
                        + More
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="col col-sm-12 col-md-4 mt-5 my-text">
                  <h5 className="text-left font-weight-bold">
                    {" "}
                    Digital asset deposit/withdrawal
                  </h5>
                  <ul className="navbar-nav">
                    <li className="nav-item">
                      <a
                        className="nav-link d-flex align-items-center text-black"
                        href="#"
                      >
                        {" "}
                        What is the secondary address?{" "}
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link d-flex align-items-center text-black"
                        href="#"
                      >
                        Please tell me how to withdraw digital assets.{" "}
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link d-flex align-items-center text-black"
                        href="#"
                      >
                        {" "}
                        How can I check whether deposits and withdrawals are
                        possible by digital asset?{" "}
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link d-flex align-items-center text-black"
                        href="#"
                      >
                        {" "}
                        + More{" "}
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="col col-sm-12 col-md-4 mt-5 my-text">
                  <h5 className="text-left font-weight-bold">
                    Digital asset misdeposit
                  </h5>
                  <ul className="navbar-nav">
                    <li className="nav-item">
                      <a
                        className="nav-link d-flex align-items-center text-black"
                        href="#"
                      >
                        {" "}
                        I made an incorrect withdrawal to another exchange and
                        it was returned.{" "}
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link d-flex align-items-center text-black"
                        href="#"
                      >
                        You entered the wrong digital asset address.{" "}
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link d-flex align-items-center text-black"
                        href="#"
                      >
                        {" "}
                        I made a deposit to the previously deposited address,
                        but it is different from the currently issued deposit
                        address.{" "}
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link d-flex align-items-center text-black"
                        href="#"
                      >
                        + More
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="row py-3">
                <div className="col col-sm-12 col-md-4 mt-5 my-text">
                  <h5 className="text-left font-weight-bold">Kakao Pay</h5>
                  <ul className="navbar-nav">
                    <li className="nav-item">
                      <a
                        className="nav-link d-flex align-items-center text-black"
                        href="#"
                      >
                        I want to use Kakao Pay authentication.
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link d-flex align-items-center text-black"
                        href="#"
                      >
                        {" "}
                        I have completed Kakao Pay verification, but why can't I
                        withdraw money?
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link d-flex align-items-center text-black"
                        href="#"
                      >
                        {" "}
                        I can't receive Kakao Pay authentication message.
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link d-flex align-items-center text-black"
                        href="#"
                      >
                        {" "}
                        + More
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="col col-sm-12 col-md-4 mt-5 my-text">
                  <h5 className="text-left font-weight-bold">
                    Terms related to digital assets
                  </h5>
                  <ul className="navbar-nav">
                    <li className="nav-item">
                      <a
                        className="nav-link d-flex align-items-center text-black"
                        href="#"
                      >
                        What is NFT?
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link d-flex align-items-center text-black"
                        href="#"
                      >
                        {" "}
                        What is TXID?{" "}
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link d-flex align-items-center text-black"
                        href="#"
                      >
                        {" "}
                        I'm not familiar with exchange terminology.{" "}
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link d-flex align-items-center text-black"
                        href="#"
                      >
                        {" "}
                        + More
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="col col-sm-12 col-md-4 mt-5 my-text">
                  <h5 className="text-left font-weight-bold">
                    Other inquiries
                  </h5>
                  <ul className="navbar-nav">
                    <li className="nav-item">
                      <a
                        className="nav-link d-flex align-items-center text-black"
                        href="#"
                      >
                        {" "}
                        I want to use the Open API.{" "}
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link d-flex align-items-center text-black"
                        href="#"
                      >
                        What is an API?
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link d-flex align-items-center text-black"
                        href="#"
                      >
                        {" "}
                        Is there a feature to keep me logged in?
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link d-flex align-items-center text-black"
                        href="#"
                      >
                        {" "}
                        + More{" "}
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
