import React from "react";
import "./Wallet_th.css";

import useQuery from "../../../../_hooks/query.hook";

import no_data_icon from "../../app-assets/images/nodata.png";

export default function Wallet_th() {
  const { address } = useQuery();
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
                Wallet
              </h3>
            </div>
          </div>
        </div>
      </section>

      <section id="progressTransition">
        <div className="container">
          <div className="row mx-0">
            <div className="col-12 progress-top">
              <dl>
                <dt className="font-25 ">My Wallet</dt>
              </dl>
              <dl>
                <dt className="float-left progress-total">Total Balance:</dt>
                <dd className="progress-income">
                  <span className="pl-2">167.71 USD</span> ≈ $0.0003624 BTC
                </dd>
              </dl>
              <ul className="mt-3">
                <li>
                  Assets are converted to their estimated value via
                  CoinMarketCap's real-time coin price and are for reference
                  only.
                </li>
                <li>
                  Real assets should be based on the holding quantity of each
                  cryptocurrency.
                </li>
                <li>
                  Assets are converted to estimated value through the real-time
                  coin price of a coin market cap and are used for reference
                  only.
                </li>
                <li>
                  Actual assets must be based on the amount of each
                  cryptocurrency held.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="historyTransition">
        <div className="container">
          <div className="row mx-0">
            <div className="col-12 clearfix">
              <h4>Transaction History</h4>
              <ul>
                <li>
                  <a href="/wallet">Asset</a>
                </li>
                <li className="on">
                  <a href="#">History</a>
                </li>
              </ul>

              <div className="col-12 clearfix main-select">
                <dl className="time-select mb-0">
                  <dt>Time</dt>
                  <dd className="mb-0">2020-01-01 ~ 2021-05-08</dd>
                </dl>
                <dl className="type-select mb-0">
                  <dt>Type</dt>
                  <dd className="mb-0">
                    <select>
                      <option value="all">All</option>
                    </select>
                  </dd>
                </dl>
                <dl className="asset-select mb-0">
                  <dt>Asset</dt>
                  <dd className="mb-0">
                    <select>
                      <option value="all">All</option>
                    </select>
                  </dd>
                </dl>
              </div>

              <div className="table_container overflow-auto">
                <table className="w-100">
                  <thead>
                    <tr>
                      <th>Time</th>
                      <th>Type</th>
                      <th>Asset</th>
                      <th>Amount</th>
                      <th>TxID</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="time">2021-08-12 13:53</td>
                      <td className="type text-red">Fee</td>
                      <td className="asset">BTC</td>
                      <td className="amount">0.165160</td>
                      <td className="txid"></td>
                    </tr>

                    <tr>
                      <td className="time">2021-08-12 13:53</td>
                      <td className="type text-red">Sell</td>
                      <td className="asset">BTC</td>
                      <td className="amount">0.165160</td>
                      <td className="txid"></td>
                    </tr>

                    <tr>
                      <td className="time">2021-08-12 13:53</td>
                      <td className="type text-green">Deposit</td>
                      <td className="asset">BTC</td>
                      <td className="amount">0.165160</td>
                      <td className="txid">
                        0x45d215721a62430c21cbf81d2b4f20b0e56c
                        <br />
                        d7ab9690f25fb8dbcbccbd5ea805
                      </td>
                    </tr>

                    <tr>
                      <td className="time">2021-08-12 13:53</td>
                      <td className="type text-green">Buy</td>
                      <td className="asset">BTC</td>
                      <td className="amount">0.165160</td>
                      <td className="txid"></td>
                    </tr>

                    <tr>
                      <td className="time">2021-08-12 13:53</td>
                      <td className="type text-red">Fee</td>
                      <td className="asset">BTC</td>
                      <td className="amount">0.165160</td>
                      <td className="txid"></td>
                    </tr>

                    <tr>
                      <td className="time">2021-08-12 13:53</td>
                      <td className="type text-red">Sell</td>
                      <td className="asset">BTC</td>
                      <td className="amount">0.165160</td>
                      <td className="txid"></td>
                    </tr>

                    <tr>
                      <td className="time">2021-08-12 13:53</td>
                      <td className="type text-green">Deposit</td>
                      <td className="asset">BTC</td>
                      <td className="amount">0.165160</td>
                      <td className="txid">
                        0x45d215721a62430c21cbf81d2b4f20b0e56c
                        <br />
                        d7ab9690f25fb8dbcbccbd5ea805
                      </td>
                    </tr>

                    <tr>
                      <td className="time">2021-08-12 13:53</td>
                      <td className="type text-red">Fee</td>
                      <td className="asset">BTC</td>
                      <td className="amount">0.165160</td>
                      <td className="txid"></td>
                    </tr>

                    <tr>
                      <td className="time">2021-08-12 13:53</td>
                      <td className="type text-green">Deposit</td>
                      <td className="asset">BTC</td>
                      <td className="amount">0.165160</td>
                      <td className="txid">
                        0x45d215721a62430c21cbf81d2b4f20b0e56c
                        <br />
                        d7ab9690f25fb8dbcbccbd5ea805
                      </td>
                    </tr>

                    <tr>
                      <td className="time">2021-08-12 13:53</td>
                      <td className="type text-red">Fee</td>
                      <td className="asset">BTC</td>
                      <td className="amount">0.165160</td>
                      <td className="txid"></td>
                    </tr>

                    <tr>
                      <td className="time">2021-08-12 13:53</td>
                      <td className="type text-red">Fee</td>
                      <td className="asset">BTC</td>
                      <td className="amount">0.165160</td>
                      <td className="txid"></td>
                    </tr>

                    <tr>
                      <td className="time">2021-08-12 13:53</td>
                      <td className="type text-red">Sell</td>
                      <td className="asset">BTC</td>
                      <td className="amount">0.165160</td>
                      <td className="txid"></td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="indicator text-center">
                <span className="on">1</span>
                <span>2</span>
                <span>3</span>
                <span>4</span>
                <button type="button" className="btn_prev bg-transparent">
                  <i className="fas fa-chevron-right"></i>
                </button>
              </div>

              <div className="table_container overflow-auto">
                <table className="w-100">
                  <thead>
                    <tr>
                      <th>Time</th>
                      <th>Type</th>
                      <th>Asset</th>
                      <th>Amount</th>
                      <th>TxID</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="pt-4 data-title" colspan="6">
                        If there is no record.
                      </td>
                    </tr>
                    <tr>
                      <td className="no-record text-center" colspan="6">
                        <img src={no_data_icon} alt="No more orders" />
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
