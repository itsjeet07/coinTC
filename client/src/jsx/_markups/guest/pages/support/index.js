import React, {  useState } from "react";
import { ToggleButton, ToggleButtonGroup } from "react-bootstrap";
import "./support.style.css";

import { useTranslation } from "react-i18next";
import { Link } from "@mui/material";

// function ToggleButtonGroupControlled() {
//   const [value, setValue] = useState([1, 3]);


//   /*
//    * The second argument that will be passed to
//    * `handleChange` from `ToggleButtonGroup`
//    * is the SyntheticEvent object, but we are
//    * not using it in this example so we will omit it.
//    */
//   const handleChange = (val) => setValue(val);

//   return (
//     <ToggleButtonGroup type="switch" value={value} onChange={handleChange}>
//       <ToggleButton id="tbg-btn-1" value={1}>
//         Option 1
//       </ToggleButton>
//       <ToggleButton id="tbg-btn-2" value={2}>
//         Option 2
//       </ToggleButton>
//       <ToggleButton id="tbg-btn-3" value={3}>
//         Option 3
//       </ToggleButton>
//     </ToggleButtonGroup>
//   );
// }

export default function Support() {
  const { t } = useTranslation();
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
                      <Link 
                        className="nav-link d-flex align-items-center text-black"
                        to="#"
                      >
                        Transaction Usage Guide
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link
                        className="nav-link d-flex align-items-center text-black"
                        to="#"
                      >
                        {" "}
                        [Consultation] 1:1 inquiry and Kakao Talk consultation
                        method
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="col col-sm-12 col-md-4 my-text">
                  <h5 className="text-left font-weight-bold">
                    Certification process
                  </h5>
                  <ul className="navbar-nav">
                    <li className="nav-item">
                      <Link
                        className="nav-link d-flex align-items-center text-black"
                        to="#"
                      >
                        How to raise security level 3 (PC)
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link
                        className="nav-link d-flex align-items-center text-black"
                        to="#"
                      >
                        {" "}
                        How to raise security level 3 (mobile)
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link
                        className="nav-link d-flex align-items-center text-black"
                        to="#"
                      >
                        {" "}
                        How to raise security level 4
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link
                        className="nav-link d-flex align-items-center text-black"
                        to="#"
                      >
                        {" "}
                        + More
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="col col-sm-12 col-md-4 my-text">
                  <h5 className="text-left font-weight-bold">
                    deposit and withdrawal
                  </h5>
                  <ul className="navbar-nav">
                    <li className="nav-item">
                      <Link
                        className="nav-link d-flex align-items-center text-black"
                        to="#"
                      >
                        {" "}
                        How to deposit and withdraw KRW (mobile)
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link
                        className="nav-link d-flex align-items-center text-black"
                        to="#"
                      >
                        {" "}
                        How to deposit and withdraw KRW (PC)
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link
                        className="nav-link d-flex align-items-center text-black"
                        to="#"
                      >
                        {" "}
                        How to reset deposit/withdrawal account (mobile)
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link
                        className="nav-link d-flex align-items-center text-black"
                        to="#"
                      >
                        + More
                      </Link>
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
                      <Link
                        className="nav-link d-flex align-items-center text-black"
                        to="#"
                      >
                        {" "}
                        Transaction Usage Guide
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link
                        className="nav-link d-flex align-items-center text-black"
                        to="#"
                      >
                        {" "}
                        [Consultation] 1:1 inquiry and Kakao Talk consultation
                        method
                      </Link>
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
                      <Link
                        className="nav-link d-flex align-items-center text-black"
                        to="#"
                      >
                        {" "}
                        I want to recover my Coin TC account.{" "}
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link
                        className="nav-link d-flex align-items-center text-black"
                        to="#"
                      >
                        {" "}
                        I can't log in. / The login verification code does not
                        come.{" "}
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link
                        className="nav-link d-flex align-items-center text-black"
                        to="#"
                      >
                        {" "}
                        My mobile phone number has changed.{" "}
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link
                        className="nav-link d-flex align-items-center text-black"
                        to="#"
                      >
                        {" "}
                        + More
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="col col-sm-12 col-md-4 my-text">
                  <h5 className="text-left font-weight-bold">
                    Signup / Security Level / Withdrawal
                  </h5>
                  <ul className="navbar-nav">
                    <li className="nav-item">
                      <Link
                        className="nav-link d-flex align-items-center text-black"
                        to="#"
                      >
                        {" "}
                        Do I need to have my own mobile phone and account?{" "}
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link
                        className="nav-link d-flex align-items-center text-black"
                        to="#"
                      >
                        Is it possible to use the phone in the corporate name?{" "}
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link
                        className="nav-link d-flex align-items-center text-black"
                        to="#"
                      >
                        {" "}
                        How do I upgrade the security level?{" "}
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link
                        className="nav-link d-flex align-items-center text-black"
                        to="#"
                      >
                        + More{" "}
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="col col-sm-12 col-md-4 my-text">
                  <h5 className="text-left font-weight-bold">
                    Transactions / Assets
                  </h5>
                  <ul className="navbar-nav">
                    <li className="nav-item">
                      <Link
                        className="nav-link d-flex align-items-center text-black"
                        to="#"
                      >
                        Suddenly there was USDT.{" "}
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link
                        className="nav-link d-flex align-items-center text-black"
                        to="#"
                      >
                        How is the KRW market, BTC market, and USDT market
                        different?
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link
                        className="nav-link d-flex align-items-center text-black"
                        to="#"
                      >
                        {" "}
                        I have an asset, but I cannot place a buy or sell order.{" "}
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link
                        className="nav-link d-flex align-items-center text-black"
                        to="#"
                      >
                        + More
                      </Link>
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
                      <Link
                        className="nav-link d-flex align-items-center text-black"
                        to="#"
                      >
                        Failed to withdraw KRW.{" "}
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link
                        className="nav-link d-flex align-items-center text-black"
                        to="#"
                      >
                        {" "}
                        Failed to deposit KRW.{" "}
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link
                        className="nav-link d-flex align-items-center text-black"
                        to="#"
                      >
                        {" "}
                        How do I deposit KRW into my Coin TC account?{" "}
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link
                        className="nav-link d-flex align-items-center text-black"
                        to="#"
                      >
                        + More
                      </Link>
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
                      <Link
                        className="nav-link d-flex align-items-center text-black"
                        to="#"
                      >
                        {" "}
                        What is the secondary address?{" "}
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link
                        className="nav-link d-flex align-items-center text-black"
                        to="#"
                      >
                        Please tell me how to withdraw digital assets.{" "}
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link
                        className="nav-link d-flex align-items-center text-black"
                        to="#"
                      >
                        {" "}
                        How can I check whether deposits and withdrawals are
                        possible by digital asset?{" "}
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link
                        className="nav-link d-flex align-items-center text-black"
                        to="#"
                      >
                        {" "}
                        + More{" "}
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="col col-sm-12 col-md-4 mt-5 my-text">
                  <h5 className="text-left font-weight-bold">
                    Digital asset misdeposit
                  </h5>
                  <ul className="navbar-nav">
                    <li className="nav-item">
                      <Link
                        className="nav-link d-flex align-items-center text-black"
                        to="#"
                      >
                        {" "}
                        I made an incorrect withdrawal to another exchange and
                        it was returned.{" "}
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link
                        className="nav-link d-flex align-items-center text-black"
                        to="#"
                      >
                        You entered the wrong digital asset address.{" "}
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link
                        className="nav-link d-flex align-items-center text-black"
                        to="#"
                      >
                        {" "}
                        I made a deposit to the previously deposited address,
                        but it is different from the currently issued deposit
                        address.{" "}
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link
                        className="nav-link d-flex align-items-center text-black"
                        to="#"
                      >
                        + More
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="row py-3">
                <div className="col col-sm-12 col-md-4 mt-5 my-text">
                  <h5 className="text-left font-weight-bold">Kakao Pay</h5>
                  <ul className="navbar-nav">
                    <li className="nav-item">
                      <Link
                        className="nav-link d-flex align-items-center text-black"
                        to="#"
                      >
                        I want to use Kakao Pay authentication.
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link
                        className="nav-link d-flex align-items-center text-black"
                        to="#"
                      >
                        {" "}
                        I have completed Kakao Pay verification, but why can't I
                        withdraw money?
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link
                        className="nav-link d-flex align-items-center text-black"
                        to="#"
                      >
                        {" "}
                        I can't receive Kakao Pay authentication message.
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link
                        className="nav-link d-flex align-items-center text-black"
                        to="#"
                      >
                        {" "}
                        + More
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="col col-sm-12 col-md-4 mt-5 my-text">
                  <h5 className="text-left font-weight-bold">
                    Terms related to digital assets
                  </h5>
                  <ul className="navbar-nav">
                    <li className="nav-item">
                      <Link
                        className="nav-link d-flex align-items-center text-black"
                        to="#"
                      >
                        What is NFT?
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link
                        className="nav-link d-flex align-items-center text-black"
                        to="#"
                      >
                        {" "}
                        What is TXID?{" "}
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link
                        className="nav-link d-flex align-items-center text-black"
                        to="#"
                      >
                        {" "}
                        I'm not familiar with exchange terminology.{" "}
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link
                        className="nav-link d-flex align-items-center text-black"
                        to="#"
                      >
                        {" "}
                        + More
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="col col-sm-12 col-md-4 mt-5 my-text">
                  <h5 className="text-left font-weight-bold">
                    Other inquiries
                  </h5>
                  <ul className="navbar-nav">
                    <li className="nav-item">
                      <Link
                        className="nav-link d-flex align-items-center text-black"
                        to="#"
                      >
                        {" "}
                        I want to use the Open API.{" "}
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link
                        className="nav-link d-flex align-items-center text-black"
                        to="#"
                      >
                        What is an API?
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link
                        className="nav-link d-flex align-items-center text-black"
                        to="#"
                      >
                        {" "}
                        Is there a feature to keep me logged in?
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link
                        className="nav-link d-flex align-items-center text-black"
                        to="#"
                      >
                        {" "}
                        + More{" "}
                      </Link>
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
}
