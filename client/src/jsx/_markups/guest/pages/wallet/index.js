import React, { useEffect, useState } from "react";
import Feedback from "../../components/Feedback";
import QRCode from "react-qr-code";
import { CopyToClipboard } from "react-copy-to-clipboard";

// import qr_code_icon from "../../app-assets/images/page/wallet/qr-code.png";
// import FiatCurrency from "../../components/input/FiatCurrency.component";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { notify } from "../../../../_helpers/notify";
import usePaginator from "../../../../_hooks/paginator.hook.js";
import useServiceContextHook from "../../../../_hooks/service.context.hook";
import bnb_icon from "../../app-assets/images/coin/bnb.png";
import btc_icon from "../../app-assets/images/coin/btc.png";
import eos_icon from "../../app-assets/images/coin/eos.png";
import eth_icon from "../../app-assets/images/coin/eth.png";
import usdt_icon from "../../app-assets/images/coin/usdt.png";
import xrp_icon from "../../app-assets/images/coin/xrp.png";
import {
  StyledCard,
  StyledIcon,
  StyledSection,
  StyledTable,
  StyledTabButton,
  Cage,
} from "../../components/styled.component";
import { Button } from "react-bootstrap";
import { ModalForm } from "../../components/modalForm.component";
import useToggler from "../../../../_hooks/toggler.hook";

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
export default function Wallet() {
  const pageTabs = [
    {
      label: "Assets",
      async callback(cb) {
        let wallets = await walletService.find({
          limit,
          offset: page * limit,
          // fake: true,
        });
        const { error, data } = wallets;
        if (error) {
          console.log("error", error);
          return;
        }
        return data;
      },
    },
    {
      label: "History",
      callback: () => ({ count: 0, result: [] }),
    },
  ];
  const { t } = useTranslation();
  const {
    services: { wallet: walletService, type },
  } = useServiceContextHook();
  const [currencies, setCurrencies] = useState();
  const [assets, setAssets] = useState();
  const [assetHistory, setAssetsHistory] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [params /*  setParams */] = useState({ fake: false });
  const [activePageTab, setActivePageTab] = useState(0);
  const [data, setData] = useState([]);
  const {
    count,
    page,
    limit,
    setCount,
    onRowsPerPageChange,
    onPageChange,
    StyledPagination,
  } = usePaginator();

  useEffect(() => {
    (async () => {
      let response = await type.findByName("CRYPTO_CURRENCIES");

      let { error, data } = response;
      if (error) {
        return;
      }
      setCurrencies(data);
    })();
  }, [count, page, limit, walletService]);

  useEffect(() => {
    try {
      refetchData();
    } catch (err) {
      notify(err.message, "error");
    }
    return () => {
      walletService?.abort();
    };
  }, [activePageTab, walletService]);

  async function refetchData() {
    try {
      setIsLoading(true);
      let data = await pageTabs[activePageTab].callback();
      console.log(data);
      setCount(data?.count);
      setData(data?.result);
    } catch (err) {
      notify(err.message, "error");
    } finally {
      setIsLoading(false);
    }
  }
  function HandleTabSwitch() {
    switch (activePageTab) {
      default:
      case 0: {
        return <Assets {...{ data, currencies }} />;
      }
      case 1: {
        return <AssetHistory />;
      }
    }
  }
  return (
    <div className="">
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
      <div className="container p-0">
        <>
          <StyledCard style={{ marginTop: 30 }}>
            <ul className="row wow fadeInUp" data-wow-delay="0.5s">
              {/* TODO: Convert to BTC */}
              <li className="col-md-4 col-12">
                <StyledSection plain>
                  {" "}
                  <p className="font-weight-bold mb-2">{t("Total assets")}</p>
                  <div className="h5">{financial(0, 18)} BTC</div>
                  <div>≈ ${financial(0, 2)}</div>
                </StyledSection>
              </li>
              <li className="col-md-4 col-12">
                <StyledSection plain>
                  {" "}
                  <p className="font-weight-bold mb-2">
                    {t("Total available")}
                  </p>
                  <div className="h5">{financial(0, 18)} BTC</div>
                  <div>≈ ${financial(0, 2)}</div>
                </StyledSection>
              </li>
              <li className="col-md-4 col-12">
                <StyledSection plain>
                  <p className="font-weight-bold mb-2">
                    {t("Balance in process")}
                  </p>
                  <div className="h5">{financial(0, 18)} BTC</div>
                  <div>≈ ${financial(0, 2)}</div>
                </StyledSection>
              </li>
            </ul>
          </StyledCard>

          <div style={{ padding: 0, marginTop: 60 }}>
            <StyledSection plain>
              <div
                className="d-flex"
                style={{ display: "flex", gap: 10, alignItems: "center" }}
              >
                <h4 className="h4">{t(pageTabs[activePageTab].label)}</h4>
                <ul
                  className="ml-auto my-auto"
                  style={{ display: "flex", gap: 10 }}
                >
                  {pageTabs.map(({ label, callback }, id) => (
                    <li key={id}>
                      <StyledTabButton
                        onClick={() => setActivePageTab(id)}
                        className={`${id == activePageTab && "on"}`}
                        type="button"
                      >
                        {t(label)}
                      </StyledTabButton>
                    </li>
                  ))}
                </ul>
              </div>
            </StyledSection>
            <div className="table_container wow fadeInUp" data-wow-delay="0.7s">
              {!isLoading ? <HandleTabSwitch /> : <Feedback.Loading />}
            </div>
          </div>

          <StyledSection style={{ margin: "60px 0" }}>
            <div className="container">
              <div className="row wow fadeInUp" data-wow-delay="0.9s">
                <div className="col-12">
                  <p>
                    Transaction history can be checked in the Assets menu.
                    <br />
                    Detailed instructions on signup, verification and trading
                    can be found in the guide below..
                  </p>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12 my-4">
                  <Button to="#" style={{ width: "100%" }}>
                    Exchange Guide<i className="far fa-arrow-to-bottom"></i>
                  </Button>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12 my-4">
                  <Button to="#" style={{ width: "100%" }}>
                    pro chart guide<i className="far fa-arrow-to-bottom"></i>
                  </Button>
                </div>
                <div className="col-lg-4 col-md-12 col-sm-12 my-4">
                  <Button to="#" style={{ width: "100%" }}>
                    Verification guide
                  </Button>
                </div>
                <div className="col-12">
                  <p>
                    For more information <span>FAQ</span>can be found at.
                  </p>
                </div>
              </div>
            </div>
          </StyledSection>
        </>
      </div>
    </div>
  );
}

function financial(x, precision = 2) {
  return (Number.parseFloat(x) || 0).toFixed(precision);
}

function Assets({ data, currencies }) {
  const { t } = useTranslation();
  const {
    count,
    page,
    limit,
    setCount,
    onRowsPerPageChange,
    onPageChange,
    StyledPagination,
  } = usePaginator();
  return data && data.length ? (
    <StyledTable>
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
        {data?.map((data, idx) => (
          <tr
            key={idx}
            className={String(currencies[data.currency])?.toLowerCase()}
          >
            <RenderCoinRow data={data} currencies={currencies} />
          </tr>
        ))}
      </tbody>
      {data?.length ? (
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
    </StyledTable>
  ) : (
    <>
      <Feedback />
    </>
  );
}

function RenderCoinRow({ data, currencies }) {
  // TODO: Get data from CoinGecko
  const { isOpen, onOpen, toggledPayload, onClose } = useToggler();
  function RenderAction({ type, data }) {
    switch (type) {
      case "deposit": {
        if (data)
          return [
            <header>
              <h5 className="h5">Deposit {data?.currency || ""}</h5>
            </header>,
            <DepositFund data={data} currencies={currencies} />,
          ];
      }
      case "withdraw": {
        if (data)
          return [
            <header>
              <h5 className="h5">Withdraw {data?.currency || ""}</h5>
            </header>,
            <WithdrawFund data={data} currencies={currencies} />,
          ];
      }
      case "transfer": {
        if (data)
          return [
            <header>
              <h5 className="h5">Transfer {data?.currency || ""}</h5>
            </header>,
            <TransferFund data={data} currencies={currencies} />,
          ];
      }
      default: {
        return ["Nothing Found", <Feedback />];
      }
    }
  }
  return (
    <>
      <td
        className=""
        style={{ display: "flex", alignItems: "flex-start", gap: 10 }}
      >
        <ModalForm
          {...{
            useFormRenderer: RenderAction,
            formData: toggledPayload,
            onClose,
            isOpen,
          }}
        />
        <StyledIcon>
          <img
            src={currencyImages[data.currency] || btc_icon}
            alt={data.currency}
          />
        </StyledIcon>
        <dl>
          <dt>{data.currency}</dt>
          <dd>{currencies[data.currency]}</dd>
        </dl>
      </td>
      <>
        <td className="available">
          {financial(data.balance && +data.balance.availableBalance, 18)}
        </td>
        <td className="order">
          {financial(
            data.balance &&
              +data.balance.accountBalance - +data.balance.availableBalance,
            18
          )}
        </td>
      </>
      {/* <td className="value">
                                  {formatter.format(data.usd_value)}
                                </td> */}
      <td
        className=""
        style={{ display: "flex", gap: 8, alignItems: "baseline" }}
      >
        <Button
          variant="default"
          type="button"
          onClick={() => onOpen({ type: "deposit", data })}
          // {`?address=${data.address}&action=deposit`}
        >
          Deposit
        </Button>
        <Button
          variant="default"
          onClick={() => onOpen({ type: "withdraw", data })}
          type="button"
          // to={`?address=${data.address}&action=withdraw`}
        >
          Withdraw
        </Button>
        <Button
          onClick={() => onOpen({ type: "transfer", data })}
          variant="default"
          type="button"
          // to={`?address=${data.address}&action=trade`}
        >
          Transfer
        </Button>
      </td>
    </>
  );
}
function AssetHistory({ data }) {
  const { t } = useTranslation();

  return data ? <>History</> : <Feedback />;
}

function DepositFund({ data, currencies }) {
  console.log(data);
  return (
    <>
      <Cage>
        <div className="mx-auto" style={{ maxWidth: 200, textAlign: "center" }}>
          <figure>
            {data?.address && <QRCode value={data?.address} size={100} />}
          </figure>
          <small className="d-block">
            Send only {data?.currency} to this address
          </small>
        </div>
        <StyledSection>
          <div className="">Wallet Address</div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              gap: 10,
              justifyContent: "space-between",
            }}
          >
            <span className="font-weight-bold truncate">{data?.address}</span>
            <CopyToClipboard
              text={data?.address}
              onCopy={() => notify("Copied")}
            >
              <span className="cursor-pointer fas fa-copy"></span>
            </CopyToClipboard>
          </div>
        </StyledSection>
        <StyledSection>
          <div className="">Network</div>
          <div className="network-input">
            {/*  <input
              type="text"
              onChange={() => null}
              className="form-control-plaintext text-md-right"
              value={currencies && wallet ? currencies[wallet?.currency] : ""}
            /> */}
          </div>
        </StyledSection>
        {data?.memo && (
          <StyledSection>
            <div className="">
              <div className="">Memo</div>
              <div className="font-bold">{data?.memo}</div>
            </div>
          </StyledSection>
        )}

        <StyledSection className="wd-info col-12">
          <p>
            <i className="fa fa-info-circle mr-2"></i>Deposit information
          </p>
          <ul className="mt-3">
            <li>
              <p>Minimum deposit</p>
              <span className="font-bold">0.00000001{data?.currency}</span>
            </li>
            <li>
              <p>Expected arrival</p>
              <span className="font-bold">12 connections</span>
            </li>
            <li>
              <p>Expected Unlock</p>
              <span className="font-bold">12 connections</span>
            </li>
          </ul>
        </StyledSection>
        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          <Button type="button">Share</Button>
        </div>
      </Cage>
    </>
  );
}
function TransferFund({ data }) {
  return <></>;
}
function WithdrawFund({ data }) {
  return <></>;
}
