import React, { useEffect, useState, lazy, Suspense } from "react";
import { Link } from "react-router-dom";

import "./Home.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import slider_content from "../../app-assets/images/slider-content.png";
import growth_icon from "../../app-assets/images/icon/growth-icon.png";

import bnb_image from "../../app-assets/images/coin/bnb.png";
import usdt_image from "../../app-assets/images/coin/usdt.png";
import xrp_round_image from "../../app-assets/images/coin/xrp-round.png";
import eth_image from "../../app-assets/images/coin/eth.png";
import btc_image from "../../app-assets/images/coin/btc.png";

import security_icon from "../../app-assets/images/icon/security-icon.png";
import support_icon from "../../app-assets/images/icon/support-icon.png";
import comment_icon from "../../app-assets/images/icon/comment-icon.png";

import home_growth_icon from "../../app-assets/images/home-growth.png";
import google_play_icon from "../../app-assets/images/icon/google-play.png";
import apple_icon from "../../app-assets/images/icon/apple.png";

import pMinDelay from "p-min-delay";
// import ApexCharts from 'apexcharts'

// Multi language
import { useTranslation } from "react-i18next";

// HOOKS
import useServiceContextHook from "../../../../_hooks/service.context.hook";
import { routeMap } from "../../routes";
const ApexLine = lazy(() =>
  pMinDelay(import("../../components/chart/market_price_chart.component"), 5000)
);

const icon_obj = {
  BNB: bnb_image,
  USDT: usdt_image,
  XRP: xrp_round_image,
  ETH: eth_image,
  BTC: btc_image,
};

export const Home = () => {
  const { services, session } = useServiceContextHook();
  const { t } = useTranslation();

  const { market } = services;
  const [marketTrendData, setMarketTrendData] = useState(null);

  async function fetchData() {
    return await market.coinmarketcap({
      symbol: "btc,eth,usdt,xrp,bnb",
    });
  }

  useEffect(async () => {
    try {
      if (!marketTrendData) {
        let { data } = await fetchData();
        setMarketTrendData(data);
      }
    } catch (err) {
      console.error(err);
    }
    return market?.abort;
  }, []);

  return (
    <div className="content Home">
      <section id="homeMainTop">
        <div className="container">
          <div className="row">
            <div className="col col-sm-12 col-md-4">
              <div className="homemain_left">
                <h5
                  className="wow animate__animated fadeInDown"
                  data-wow-delay="0.3s"
                >
                  {t("Buy & Sell your Cryptocurrency on CoinTC!")}
                </h5>
                <p className="wow animate__animated fadeInDown">
                  {t(
                    "Support for easy and fast cryptocurrency transactions between individuals."
                  )}
                </p>
                <div className="d-flex flex-column flex-md-row">
                  <Link
                    className="btn btn_getstarted mr-3 my-3 wow fadeInLeft"
                    to="/auth/register"
                  >
                    {t("Get started")}
                  </Link>
                  {!session?.user ? (
                    <Link
                      className="btn btn_login mr-3 my-3 wow fadeInRight"
                      to="/auth/login"
                    >
                      {t("Log In")}
                    </Link>
                  ) : null}
                </div>
              </div>
            </div>
            <div className="col col-sm-12 col-md-6 d-none">
              <div className="homemain_right">
                <img src={slider_content} className="w-auto" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {marketTrendData ? (
        <section id="trend">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="market_table_title">
                  <h3>Market trend</h3>
                </div>
                <RenderData data={marketTrendData} />
              </div>
            </div>
          </div>
        </section>
      ) : null}

      <section id="customerService">
        <div className="container">
          <div className="customer_service_title text-white wow fadeInLeft">
            <h3 className="mb-1 text-white h2">
              {t("CoinTC is a P2P exchange for everyone.")}
            </h3>
            <p>{t("It supports global currency.")}</p>
          </div>
          <div className="row">
            <div className="col-sm-6 col-md-6 col-lg-3 wow fadeInLeft">
              <div className="icon-card">
                <div className="card-body text-white">
                  <img className="mb-3 w-auto" src={growth_icon} />
                  <h6 className="card-title">
                    {t("Customer Service Available 24/7")}
                  </h6>
                  <p className="card-text">
                    {t(
                      "CoinTC supports rapid response to problems 365 days a year."
                    )}
                  </p>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-md-6 col-lg-3 wow fadeInLeft">
              <div className="icon-card">
                <div className="card-body text-white">
                  <img className="mb-3 w-auto" src={security_icon} />
                  <h6 className="card-title">
                    {t("The best security system.")}
                  </h6>
                  <p className="card-text">
                    {t(
                      "CoinTC protects your funds with both centralized and decentralized methods."
                    )}
                  </p>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-md-6 col-lg-3 wow fadeInRight">
              <div className="icon-card">
                <div className="card-body text-white">
                  <img className="mb-3 w-auto" src={support_icon} />
                  <h6 className="card-title">
                    {t("Supporting various Currency.")}
                  </h6>
                  <p className="card-text">
                    {t(
                      "We supporting free trade across border and language barriers."
                    )}
                  </p>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-md-6 col-lg-3 wow fadeInRight">
              <div className="icon-card">
                <div className="card-body text-white">
                  <img className="mb-3 w-auto" src={comment_icon} />
                  <h6 className="card-title">{t("Trade with confidence")}</h6>
                  <p className="card-text">
                    {t("CoinTC believes in security above everything.")}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="cryptoCurrency">
        <div className="container">
          <div className="row wow fadeInLeft">
            <div className="col-6 mx-auto col-md-6 order-md-2 col-lg-6 mb-3 mb-lg-none">
              <img src={home_growth_icon} className="w-100" />
            </div>
            <div className="col-md-6 order-md-1 col-lg-6">
              <h2 className="mb-3">
                {t("Start Your Cryptocurrency Journey Today.")}
              </h2>
              <p className="lead mb-0 text-black trade">
                {t("Trade Anytime, Anywhere")}
              </p>
              <p className="lead mb-4 text-black">
                {t("CoinTC offer you an easy and quick way to start trading.")}
              </p>

              <div className="col-md-12">
                <a
                  href="#"
                  className="btn btn-lg btn-brand float-left mr-3 mb-2 mb-md-0"
                >
                  <div className="google-play-icon pr-2 float-left">
                    <img src={google_play_icon} className="w-auto" />
                  </div>
                  <div className="google-play-content float-right">
                    <p className="mb-0 text-left">
                      {t("Download on the")} <br />{" "}
                      <strong>{t("Google Store")}</strong>
                    </p>
                  </div>
                </a>
                <a href="#" className="btn btn-lg btn-brand mb-2">
                  <div className="apple-icon pr-2 float-left">
                    <img src={apple_icon} className="w-auto" />
                  </div>
                  <div className="apple-content float-right">
                    <p className="mb-0 text-left">
                      {t("Download on the")} <br />{" "}
                      <strong>{t("App Store")}</strong>
                    </p>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="startCrypto">
        <div className="container">
          <div className="start_crypto_content d-flex justify-content-center">
            <h4 className="mr-3 mb-0 wow fadeInRight">
              {t("A simple, secure way to buy and sell cryptocurrency")}
            </h4>
            <Link to="/auth/login" className="btn btn_getstarted wow fadeInLeft">
              {t("Get stared")}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

function RenderData({ data }) {
  const { t } = useTranslation();
  return data ? (
    <>
      <div className="table_container wow fadeInUp" data-wow-delay="0.6s">
        <table>
          <thead>
            <tr>
              <th>{t("Name")}</th>
              <th>{t("Last Price")}</th>
              <th>{t("24h Change")}</th>
              <th>{t("Market")}</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {Object.keys(data.data).map((value, key) => {
              //console.log(key);
              const quote = data.data[value].quote.USD;
              const sparklineData = [
                quote.percent_change_90d.toFixed(2),
                quote.percent_change_60d.toFixed(2),
                quote.percent_change_30d.toFixed(2),
                quote.percent_change_7d.toFixed(2),
                quote.percent_change_24h.toFixed(2),
                quote.percent_change_1h.toFixed(2),
              ];
              return (
                <tr key={key}>
                  <td className="coin_name">
                    <img src={icon_obj[data.data[value].symbol]} />
                    <p>
                      {data.data[value].name}{" "}
                      <span>{data.data[value].symbol}</span>
                    </p>
                  </td>
                  <td className="last_price">
                    <dl
                      className="available d-flex"
                      style={{ flexWrap: "wrap", gap: 10 }}
                    >
                      <dt>{data.data[value].quote.USD.price.toFixed(2)}</dt>
                      <dd>
                        {data.data[value].quote.USD.volume_24h.toLocaleString(
                          undefined,
                          { maximumFractionDigits: 2 }
                        )}{" "}
                        USD
                      </dd>
                    </dl>
                  </td>
                  <td
                    className={
                      "24h_change " +
                      (data.data[value].quote.USD.volume_change_24h < 0
                        ? "text-red"
                        : "text-green")
                    }
                  >
                    {data.data[value].quote.USD.volume_change_24h.toFixed(2)}%
                  </td>
                  <td className="market">
                    {/* <img src={growth} /> */}
                    <Suspense fallback={<div>Loading...</div>}>
                      <ApexLine
                        data={data.data[key]}
                        sparklineData={sparklineData}
                        height={50}
                        width={150}
                        type={"area"}
                      />
                    </Suspense>
                  </td>
                  <td
                    className="transaction text-center"
                    style={{ display: "flex", gap: 10 }}
                  >
                    <Link to={routeMap?.advert} className="btn_buy">
                      Purchase
                    </Link>
                    <Link to={routeMap?.advert} className="btn_trade">
                      Trade
                    </Link>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  ) : null;
}
