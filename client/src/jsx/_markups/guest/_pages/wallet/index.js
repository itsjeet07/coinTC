import React, { useEffect, useState } from "react";
import {
  Container,
  Row,
  Col,
  Modal,
  Button,
  Div,
  Dropdown,
  Tabs,
  Tab,
  Sonnet,
} from "react-bootstrap";

import eth_icon from "../../app-assets/images/coin/eth.png";
import usdt_icon from "../../app-assets/images/coin/usdt.png";
import xrp_icon from "../../app-assets/images/coin/xrp.png";
import eos_icon from "../../app-assets/images/coin/eos.png";
import btc_icon from "../../app-assets/images/coin/btc.png";
import bnb_icon from "../../app-assets/images/coin/bnb.png";

import qr_code_icon from "../../app-assets/images/page/wallet/qr-code.png";

import { Wallet_deposit } from "./Wallet_deposit";
import FiatCurrency from "../../components/input/FiatCurrency.component";
import { useTranslation } from "react-i18next";
import useServiceContextHook from "../../../../_hooks/service.context.hook";
import usePaginator from "../../../../_hooks/paginator.hook.js";

function Wallet_deposit_modal() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <a href="#" variant="primary" className="mt-2 mr-1" onClick={handleShow}>
        Deposit
      </a>

      <Modal show={show} onHide={handleClose} size="lg">
        <Modal.Body>
          <section id="withdrawCrypto" className="p-3">
            <div className="row">
              <div className="col col-sm-12 col-md-12 main-bg">
                <h4> Deposit Crypto </h4>
                <form>
                  <div className="form-group row justify-content-between mb-0 py-2">
                    <label className="col-sm-4 col-form-label">
                      Select Coin
                    </label>
                    <div className="col-sm-10  col-md-6 select-coin-input">
                      <FiatCurrency />
                    </div>
                  </div>

                  <div className="form-group row justify-content-between mb-0 py-2">
                    <label className="col-sm-2 col-form-label">Network</label>
                    <div className="col-sm-10  col-md-6 network-input">
                      <input
                        type="text"
                        className="form-control-plaintext text-md-right"
                        value="Ethreum ERC20"
                      />
                    </div>
                  </div>

                  <div className="form-group row justify-content-between mb-0 py-2">
                    <label
                      for="inputPassword"
                      className="col-sm-4 col-form-label"
                    >
                      {" "}
                      Deposit Address{" "}
                    </label>
                  </div>

                  <div className="col-md-8 mx-auto deposit-address-img">
                    <div className="card border-0">
                      <img
                        className="card-img-top w-25 mx-auto"
                        src={qr_code_icon}
                        alt="Card image cap"
                      />
                      <div className="card-body text-center">
                        <p className="card-text">
                          0x7790a6DAe3174A60E171A25a040f913b5d6054d4
                        </p>
                        <a href="#" className="btn btn-primary mr-1">
                          Share
                        </a>
                        <a href="#" className="btn btn-primary mr-1">
                          Copy
                        </a>
                        <p className="card-text-p card-text mt-3">
                          The minimum deposit amount is 2 USDT. Balance cannot
                          be reflected when depositing less than 2 USDT..
                        </p>
                      </div>
                    </div>
                  </div>

                  <hr className="form-hr-bottom" />

                  <div className="wd-info col-12">
                    <p>
                      <i className="fa fa-info-circle mr-2"></i>Deposit
                      information
                    </p>
                    <ul>
                      <li>
                        Only USDT can be deposited to the above deposit address.
                        Make sure the network is Ethreum ERC20.
                      </li>
                      <li>
                        {" "}
                        Please note that recovery is not possible when
                        depositing cryptocurrencies other than USDT.
                      </li>
                      <li>
                        In the case of contract deposits, there may be delays in
                        deposit and asset reflection.
                      </li>
                      <li>
                        If the digital asset name is the same but the
                        transmission method (network) is different, deposit and
                        recovery are not possible.
                      </li>
                      <li>
                        After 48 confirmations, it goes through the deposit
                        process and is reflected in the balance, and the
                        required time may vary depending on the network
                        situation.
                      </li>
                    </ul>
                  </div>

                  <div className="wd-btn mt-4">
                    <a href="#" className="btn btn-primary w-100">
                      Withdraw
                    </a>
                  </div>
                </form>
              </div>
            </div>
          </section>
        </Modal.Body>
      </Modal>
    </>
  );
}
function Wallet_withdraw_modal() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <a href="#" variant="primary" className="mt-2 mr-1" onClick={handleShow}>
        Withdraw
      </a>

      <Modal show={show} onHide={handleClose} size="lg">
        <Modal.Body>
          <section id="withdrawCrypto" className="p-3">
            <div className="row">
              <div className="col col-sm-12 col-md-12 main-bg">
                <h4>Withdraw Crypto</h4>
                <form>
                  <div className="form-group row justify-content-between mb-0 py-2">
                    <label className="col-sm-4 col-form-label">
                      Select Coin
                    </label>
                    <div className="col-sm-10  col-md-6 select-coin-input">
                      <FiatCurrency />
                    </div>
                  </div>

                  <div className="form-group row justify-content-between mb-0 py-2">
                    <label className="col-sm-2 col-form-label">Network</label>
                    <div className="col-sm-10  col-md-6 network-input">
                      <input
                        type="text"
                        className="form-control-plaintext text-md-right"
                        value="Ethreum ERC20"
                      />
                    </div>
                  </div>

                  <div className="form-group row justify-content-between mb-0 py-2">
                    <label
                      for="inputPassword"
                      className="col-sm-4 col-form-label"
                    >
                      Withdraw Address
                    </label>
                    <div className="col-sm-10  col-md-7 address-input">
                      <input
                        type="text"
                        className="form-control"
                        value="0x7790a6DAe3174A60E171A25a040f913b5d6054d4"
                      />
                    </div>
                  </div>

                  <div className="form-group row justify-content-between mb-0 py-2">
                    <label
                      for="inputPassword"
                      className="col-sm-4 col-form-label"
                    >
                      Withdraw Amount
                    </label>
                    <div className="col-sm-10  col-md-6 amount-input">
                      <div className="input-group">
                        <input type="text" className="form-control" />
                        <div className="input-group-append">
                          <span className="input-group-text" id="basic-addon2">
                            1000 | <span className="pl-2">USDT</span>
                          </span>
                        </div>
                      </div>
                      <p className="mb-0 text-right mt-2">
                        Available: 1,000 USDT <span>all</span>
                      </p>
                    </div>
                  </div>

                  <div className="form-group row justify-content-between mb-0 py-2 wa-icon">
                    <label className="col-sm-3 col-form-label postion-relative">
                      Withdrawal <span></span>{" "}
                      <span className="d-block">Available</span>
                    </label>
                    <div className="col-sm-10  col-md-6 fee-input">
                      <input
                        type="text"
                        className="form-control-plaintext text-md-right font-weight-bold"
                        value="999.000000 USDT"
                      />
                    </div>
                  </div>

                  <hr className="form-hr-bottom" />

                  <div className="form-group row justify-content-between mb-0 py-2">
                    <label className="col-sm-2 col-form-label">Fee</label>
                    <div className="col-sm-10  col-md-6 fee-input">
                      <input
                        type="text"
                        className="form-control-plaintext text-md-right"
                        value="1 USDT"
                      />
                    </div>
                  </div>

                  <div className="form-group row justify-content-between mb-0 py-2">
                    <label className="col-sm-4 col-form-label">
                      Receive Amount
                    </label>
                    <div className="col-sm-10  col-md-6 fee-input">
                      <input
                        type="text"
                        className="form-control-plaintext text-md-right font-weight-bold"
                        value="999.000000 USDT"
                      />
                    </div>
                  </div>

                  <div className="wd-info pt-5 col-9">
                    <p>
                      <i className="fa fa-info-circle mr-2"></i>withdrawal
                      information
                    </p>
                    <ul>
                      <li>Minimum withdrawal amount: 2 USDT.</li>
                      <li>
                        {" "}
                        The network fee is 1 USDT，which may be adjusted by
                        network congestion.
                      </li>
                      <li>
                        Internal withdrawal is real-time. Exceeding the free
                        transfer amount will be charged at the same rate as
                        regular withdrawals.
                      </li>
                    </ul>
                  </div>

                  <div className="wd-btn mt-4">
                    <a href="#" className="btn btn-primary w-100">
                      Withdraw
                    </a>
                  </div>
                </form>
              </div>
            </div>
          </section>
        </Modal.Body>
      </Modal>
    </>
  );
}

const currencyImages = {
  BTC: btc_icon,
  ETH: eth_icon,
  USDT: usdt_icon,
  XRP: xrp_icon,
  EOS: eos_icon,
  BNB: bnb_icon,
};

// Create our number formatter.
var formatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",

  // These options are needed to round to whole numbers if that's what you want.
  //minimumFractionDigits: 0, // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
  //maximumFractionDigits: 0, // (causes 2500.99 to be printed as $2,501)
});

export const Wallet = () => {
  const { t } = useTranslation();
  const {
    services: { wallet: walletService, type },
  } = useServiceContextHook();
  const [currencies, setCurrencies] = useState();
  const [wallets, setWallets] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [params, setParams] = useState({ fake: false });

  const {
    count,
    page,
    limit,
    setCount,
    onRowsPerPageChange,
    onPageChange,
    StyledPagination,
  } = usePaginator();

  function updateWallet(queryParams) {
    setIsLoading(true);
    walletService
      .find(
        queryParams || {
          limit,
          offset: page * limit,
          // fake: true,
        }
      )
      .then(({ error, data, message }) => {
        if (error) {
          console.log("error", error);
          return;
        }
        console.log(data);
        setWallets(data);
        setCount(data.count);
        setIsLoading(false);
      });
  }

  useEffect(() => {
    updateWallet();
    type.findByName("CRYPTO_CURRENCIES").then(({ error, data, message }) => {
      if (error) {
        return;
      }
      setCurrencies(data);
    });

    // return wallet?.abort
  }, [JSON.stringify(params), page, limit]);

  return !isLoading  ? (
    <div className="content">
      <section id="mainTop">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h3
                className="wow animate__animated fadeInDown"
                data-wow-delay="0.3s"
              >
                {t("Wallet")}
              </h3>
            </div>
          </div>
        </div>
      </section>

      <section id="progress">
        <div className="container">
          <div className="row wow fadeInUp" data-wow-delay="0.5s">
            <div className="col-lg-4 col-md-4 col-sm-12">
              <dl>
                <dt>{t("All balance")}</dt>
                <dd>
                  <span>0.00000000</span>BTC
                </dd>
                <dd>≈ $0.000000</dd>
              </dl>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-12">
              <dl>
                <dt>{t("Available balance")}</dt>
                <dd>
                  <span>0.00000000</span>BTC
                </dd>
                <dd>≈ $0.000000</dd>
              </dl>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-12">
              <dl>
                <dt>{t("Balance in process")}</dt>
                <dd>
                  <span>0.00000000</span>BTC
                </dd>
                <dd>≈ $0.000000</dd>
              </dl>
            </div>
          </div>
        </div>
      </section>

      <section id="asset">
        <div className="container">
          <div className="row wow fadeInUp" data-wow-delay="0.7s">
            <div className="col-12 clear">
              <h4>{t("Asset")}</h4>
              <ul className="clear">
                <li className="on">
                  <a href="#">{t("Asset")}</a>
                </li>
                <li>
                  <a href="/wallet/history">{t("History")}</a>
                </li>
              </ul>
              <div className="table_container">
                {wallets && currencies ? (
                  <table>
                    <thead>
                      <tr>
                        <th>{t("Coin")}</th>
                        <th>{t("Available")}</th>
                        <th>{t("In Order")}</th>
                        {/* <th>{t("USD Value")}</th> */}
                        <th>{t("Action")}</th>
                      </tr>
                    </thead>
                    <tbody>
                      {wallets.length ? (
                        wallets?.result.map((data) => (
                          <tr
                            key={data.id}
                            className={String(
                              currencies[data.currency]
                            )?.toLowerCase()}
                          >
                            <td className="coin clear">
                              <img
                                src={currencyImages[data.currency] || btc_icon}
                                alt={data.currency}
                              />
                              <dl>
                                <dt>{currencies[data.currency]}</dt>
                                <dd>{data.currency}</dd>
                              </dl>
                            </td>
                            <td className="available">
                              {data.account.balance.availableBalance}
                            </td>
                            <td className="order">
                              {(
                                Number(data.account.balance.accountBalance) -
                                Number(data.account.balance.availableBalance)
                              ).toFixed(6)}
                            </td>
                            {/* <td className="value">{formatter.format(data.usd_value)}</td> */}
                            <td className="action">
                              <a
                                href={"/wallet_deposit?address=" + data.address}
                              >
                                Deposit
                              </a>
                              <a
                                href={
                                  "/wallet_withdraw?address=" + data.address
                                }
                              >
                                Withdraw
                              </a>
                              <a href={"/wallet_trade?address=" + data.address}>
                                Trade
                              </a>
                            </td>
                          </tr>
                        ))
                      ) : (
                        <tr>
                          <td colSpan={4}>Nothing found</td>
                        </tr>
                      )}
                    </tbody>
                    {walletService?.length ? (
                      <tfoot>
                        <tr>
                          <StyledPagination
                            count={count}
                            page={page}
                            rowsPerPage={limit || 10}
                            onRowsPerPageChange={onRowsPerPageChange}
                            onPageChange={onPageChange}
                          />
                        </tr>
                      </tfoot>
                    ) : null}
                  </table>
                ) : null}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="guide">
        <div className="container">
          <div className="row wow fadeInUp" data-wow-delay="0.9s">
            <div className="col-12">
              <p>
                Transaction history can be checked in the Assets menu.
                <br />
                Detailed instructions on signup, verification and trading can be
                found in the guide below..
              </p>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <a href="#">
                Exchange Guide<i className="far fa-arrow-to-bottom"></i>
              </a>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <a href="#">
                pro chart guide<i className="far fa-arrow-to-bottom"></i>
              </a>
            </div>
            <div className="col-lg-4 col-md-12 col-sm-12">
              <a href="#">Verification guide to change account information</a>
            </div>
            <div className="col-12">
              <p>
                For more information <span>FAQ</span>can be found at.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  ) : (
    "Loading..."
  );
};
