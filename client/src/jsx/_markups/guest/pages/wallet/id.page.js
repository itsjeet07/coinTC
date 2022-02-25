import React, { useEffect, useState } from "react";
import usePaginator from "../../../../_hooks/paginator.hook.js";
import { useTranslation } from "react-i18next";

export default function WalletByID() {
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
                                {t("Wallet")}
                            </h3>
                        </div>
                    </div>
                </div>
            </section>

            <section id="progress">
                <div className="container">
                    <div className="row wow fadeInUp" data-wow-delay="0.5s">
                        <div className="col-lg-6 col-md-6 col-sm-12">
                            {/* <dl> */}
                            <h4 style={{
                                fontSize: '25px',
                                fontWeight: "bold",
                                color: "#212833",
                                lineHight: "34px"
                            }}>{t("My Wallet")} </h4>
                            <dd>
                                <h4 style={{
                                    fontSize: '20px',
                                    fontWeight: "bold",
                                    color: "#212833",
                                    lineHight: "34px"
                                }}>
                                    {t("Total Balance")} &nbsp;<span style={{ color: "#0059ff" }}>$167.71</span>&nbsp;USD  <span>≈ $0.000000</span></h4>

                            </dd>
                            {/* </dl> */}
                            <dd>
                                <dl>
                                    {/* <dt>{t("Balance in process")}</dt> */}
                                    <dd>
                                        {/* <span>0.00000000</span>BTC */}
                                    </dd>
                                    <dd>
                                        <ul style={{listStyle:"disc", marginTop: "10px", marginLeft: "20px"}}>
                                                <li> {t("wallet_description1")} </li>
                                               <li>{t("wallet_description2")} </li>
                                        </ul>
                                    </dd>
                                </dl>
                            </dd>
                        </div>

                        {/* <div className="col-lg-4 col-md-4 col-sm-12">
                <dl>
                  <dt>{t("Balance in process")}</dt>
                  <dd>
                    <span>0.00000000</span>BTC
                  </dd>
                  <dd>≈ $0.000000</dd>
                </dl>
              </div> */}
                    </div>
                </div>
            </section>

            <section id="asset">
                <div className="container">
                    <div className="row wow fadeInUp" data-wow-delay="0.7s">
                        <div className="col-12 clear">
                            <h4>{t("Transaction History")}</h4>
                            <ul className="clear">
                                <li className="on">
                                    <a href="/wallet">{t("Asset")}</a>
                                </li>
                                <li>
                                    <a href="/wallet/history">{t("History")}</a>
                                </li>
                            </ul>
                            <div className="table_container">
                                <table>
                                    <thead>
                                        <tr>
                                            <th>{t("Time")}</th>
                                            <th>{t("Type")}</th>
                                            <th>{t("Asset")}</th>
                                            <th>{t("Amount")}</th>
                                            <th>{t("TxID")}</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td colSpan={4}>Nothing found</td>
                                        </tr>
                                    </tbody>
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
                                </table>
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
    )
}
