import React, { useEffect, useState, useRef } from 'react'
import styles from './Affiliate.css'
import { Container, Row, Col, Form, Button, Div, Dropdown, Tabs, Tab, Nav, Toast } from 'react-bootstrap';


import affiliateTop from '../../app-assets/images/affiliateTop.png';
import icon_dashboard from '../../app-assets/images/icon/icon_dashboard.png';
import icon_friends from '../../app-assets/images/icon/icon_friends.png';
import nodata from '../../app-assets/images/icon/nodata.png';
import icon_commission from '../../app-assets/images/icon/icon_commission.png';
import { useSelector } from 'react-redux';
import { toast } from "react-toastify";

const AllaccountTabContent = function (props) {
    const [activeTab, setActiveTab] = useState("all-tab");
    const handleTab = (tab) => {
        setActiveTab(tab);
    };

    return (
        <>
            <ul className="date clear">
                <li className={(activeTab === "all-tab" ? "on" : "")}><a href={void (0)} onClick={() => handleTab("all-tab")}>All</a></li>
                <li className={(activeTab === "yesterday-tab" ? "on" : "")}><a href={void (0)} onClick={() => handleTab("yesterday-tab")}>Yesterday</a></li>
                <li className={(activeTab === "this-week-tab" ? "on" : "")}><a href={void (0)} onClick={() => handleTab("this-week-tab")}>This Week</a></li>
                <li className={(activeTab === "this-month-tab" ? "on" : "")}><a href={void (0)} onClick={() => handleTab("this-month-tab")}>This Month</a></li>
            </ul>
            <p className="date_range">Date Range:<span>Until 2021-09-15 23:59:59 (UTC+0)</span></p>
            <div className="tab-content">
                <div className={"tab-pane " + (activeTab === "all-tab" ? "active" : "")}>
                    <div className="box clear">
                        <dl className="earned">
                            <dt>You Earned</dt>
                            <dd>0</dd>
                        </dl>
                        <dl className="traded_friends">
                            <dt>Total Number of Traded Friends</dt>
                            <dd>0</dd>
                        </dl>
                        <dl className="friends">
                            <dt>Total Numbers of Friends</dt>
                            <dd>0</dd>
                        </dl>
                        <dl className="ranking">
                            <dt>Your Ranking <a href="#">Ranking List<i class="fal fa-chevron-right"></i></a></dt>
                            <dd>--</dd>
                        </dl>
                    </div>
                </div>
                <div className={"tab-pane " + (activeTab === "yesterday-tab" ? "active" : "")}>
                    <div className="box clear">
                        <dl className="earned">
                            <dt>You Earned</dt>
                            <dd>0</dd>
                        </dl>
                        <dl className="traded_friends">
                            <dt>Total Number of Traded Friends</dt>
                            <dd>0</dd>
                        </dl>
                        <dl className="friends">
                            <dt>Total Numbers of Friends</dt>
                            <dd>0</dd>
                        </dl>
                        <dl className="ranking">
                            <dt>Your Ranking <a href="#">Ranking List<i className="fal fa-chevron-right"></i></a></dt>
                            <dd>--</dd>
                        </dl>
                    </div>
                </div>
                <div className={"tab-pane " + (activeTab === "this-week-tab" ? "active" : "")}>
                    <div className="box clear">
                        <dl className="earned">
                            <dt>You Earned</dt>
                            <dd>0</dd>
                        </dl>
                        <dl className="traded_friends">
                            <dt>Total Number of Traded Friends</dt>
                            <dd>0</dd>
                        </dl>
                        <dl className="friends">
                            <dt>Total Numbers of Friends</dt>
                            <dd>0</dd>
                        </dl>
                        <dl className="ranking">
                            <dt>Your Ranking <a href="#">Ranking List<i className="fal fa-chevron-right"></i></a></dt>
                            <dd>--</dd>
                        </dl>
                    </div>
                </div>
                <div className={"tab-pane " + (activeTab === "this-month-tab" ? "active" : "")}>
                    <div className="box clear">
                        <dl className="earned">
                            <dt>You Earned</dt>
                            <dd>0</dd>
                        </dl>
                        <dl className="traded_friends">
                            <dt>Total Number of Traded Friends</dt>
                            <dd>0</dd>
                        </dl>
                        <dl className="friends">
                            <dt>Total Numbers of Friends</dt>
                            <dd>0</dd>
                        </dl>
                        <dl className="ranking">
                            <dt>Your Ranking <a href="#">Ranking List<i className="fal fa-chevron-right"></i></a></dt>
                            <dd>--</dd>
                        </dl>
                    </div>
                </div>
            </div>
        </>
    )
}
const SpotTabContent = function (props) {
    const [activeTab, setActiveTab] = useState("all-tab");
    const handleTab = (tab) => {
        setActiveTab(tab);
    };
    return (
        <>
            <ul class="date clear">
                <li className={(activeTab === "all-tab" ? "on" : "")}><a href={void (0)} onClick={() => handleTab("all-tab")}>All</a></li>
                <li className={(activeTab === "yesterday-tab" ? "on" : "")}><a href={void (0)} onClick={() => handleTab("yesterday-tab")}>Yesterday</a></li>
                <li className={(activeTab === "this-week-tab" ? "on" : "")}><a href={void (0)} onClick={() => handleTab("this-week-tab")}>This Week</a></li>
                <li className={(activeTab === "this-month-tab" ? "on" : "")}><a href={void (0)} onClick={() => handleTab("this-month-tab")}>This Month</a></li>
            </ul>
            <p className="date_range">Date Range:<span>Until 2021-09-15 23:59:59 (UTC+0)</span></p>
            <div className="tab-content">
                <div className={"tab-pane " + (activeTab === "all-tab" ? "active" : "")}>
                    <div className="box clear">
                        <dl className="earned">
                            <dt>You Earned</dt>
                            <dd>0</dd>
                        </dl>
                        <dl className="traded_friends">
                            <dt>Total Number of Traded Friends</dt>
                            <dd>0</dd>
                        </dl>
                        <dl className="friends">
                            <dt>Total Numbers of Friends</dt>
                            <dd>0</dd>
                        </dl>
                        <dl className="ranking">
                            <dt>Your Ranking <a href="#">Ranking List<i className="fal fa-chevron-right"></i></a></dt>
                            <dd>--</dd>
                        </dl>
                    </div>
                </div>
                <div className={"tab-pane " + (activeTab === "yesterday-tab" ? "active" : "")}>
                    <div className="box clear">
                        <dl className="earned">
                            <dt>You Earned</dt>
                            <dd>0</dd>
                        </dl>
                        <dl className="traded_friends">
                            <dt>Total Number of Traded Friends</dt>
                            <dd>0</dd>
                        </dl>
                        <dl className="friends">
                            <dt>Total Numbers of Friends</dt>
                            <dd>0</dd>
                        </dl>
                        <dl className="ranking">
                            <dt>Your Ranking <a href="#">Ranking List<i className="fal fa-chevron-right"></i></a></dt>
                            <dd>--</dd>
                        </dl>
                    </div>
                </div>
                <div className={"tab-pane " + (activeTab === "this-week-tab" ? "active" : "")}>
                    <div className="box clear">
                        <dl className="earned">
                            <dt>You Earned</dt>
                            <dd>0</dd>
                        </dl>
                        <dl className="traded_friends">
                            <dt>Total Number of Traded Friends</dt>
                            <dd>0</dd>
                        </dl>
                        <dl className="friends">
                            <dt>Total Numbers of Friends</dt>
                            <dd>0</dd>
                        </dl>
                        <dl className="ranking">
                            <dt>Your Ranking <a href="#">Ranking List<i className="fal fa-chevron-right"></i></a></dt>
                            <dd>--</dd>
                        </dl>
                    </div>
                </div>
                <div className={"tab-pane " + (activeTab === "this-month-tab" ? "active" : "")}>
                    <div className="box clear">
                        <dl className="earned">
                            <dt>You Earned</dt>
                            <dd>0</dd>
                        </dl>
                        <dl className="traded_friends">
                            <dt>Total Number of Traded Friends</dt>
                            <dd>0</dd>
                        </dl>
                        <dl className="friends">
                            <dt>Total Numbers of Friends</dt>
                            <dd>0</dd>
                        </dl>
                        <dl className="ranking">
                            <dt>Your Ranking <a href="#">Ranking List<i className="fal fa-chevron-right"></i></a></dt>
                            <dd>--</dd>
                        </dl>
                    </div>
                </div>
            </div>
        </>
    )
}
const FutureTabContent = function (props) {
    const [activeTab, setActiveTab] = useState("all-tab");
    const handleTab = (tab) => {
        setActiveTab(tab);
    };
    return (
        <>
            <ul class="date clear">
                <li className={(activeTab === "all-tab" ? "on" : "")}><a href={void (0)} onClick={() => handleTab("all-tab")}>All</a></li>
                <li className={(activeTab === "yesterday-tab" ? "on" : "")}><a href={void (0)} onClick={() => handleTab("yesterday-tab")}>Yesterday</a></li>
                <li className={(activeTab === "this-week-tab" ? "on" : "")}><a href={void (0)} onClick={() => handleTab("this-week-tab")}>This Week</a></li>
                <li className={(activeTab === "this-month-tab" ? "on" : "")}><a href={void (0)} onClick={() => handleTab("this-month-tab")}>This Month</a></li>
            </ul>
            <p className="date_range">Date Range:<span>Until 2021-09-15 23:59:59 (UTC+0)</span></p>
            <div className="tab-content">
                <div className={"tab-pane " + (activeTab === "all-tab" ? "active" : "")}>
                    <div className="box clear">
                        <dl className="earned">
                            <dt>You Earned</dt>
                            <dd>0</dd>
                        </dl>
                        <dl className="traded_friends">
                            <dt>Total Number of Traded Friends</dt>
                            <dd>0</dd>
                        </dl>
                        <dl className="friends">
                            <dt>Total Numbers of Friends</dt>
                            <dd>0</dd>
                        </dl>
                        <dl className="ranking">
                            <dt>Your Ranking <a href="#">Ranking List<i className="fal fa-chevron-right"></i></a></dt>
                            <dd>--</dd>
                        </dl>
                    </div>
                </div>
                <div className={"tab-pane " + (activeTab === "yesterday-tab" ? "active" : "")}>
                    <div className="box clear">
                        <dl className="earned">
                            <dt>You Earned</dt>
                            <dd>0</dd>
                        </dl>
                        <dl className="traded_friends">
                            <dt>Total Number of Traded Friends</dt>
                            <dd>0</dd>
                        </dl>
                        <dl className="friends">
                            <dt>Total Numbers of Friends</dt>
                            <dd>0</dd>
                        </dl>
                        <dl className="ranking">
                            <dt>Your Ranking <a href="#">Ranking List<i className="fal fa-chevron-right"></i></a></dt>
                            <dd>--</dd>
                        </dl>
                    </div>
                </div>
                <div className={"tab-pane " + (activeTab === "this-week-tab" ? "active" : "")}>
                    <div className="box clear">
                        <dl className="earned">
                            <dt>You Earned</dt>
                            <dd>0</dd>
                        </dl>
                        <dl className="traded_friends">
                            <dt>Total Number of Traded Friends</dt>
                            <dd>0</dd>
                        </dl>
                        <dl className="friends">
                            <dt>Total Numbers of Friends</dt>
                            <dd>0</dd>
                        </dl>
                        <dl className="ranking">
                            <dt>Your Ranking <a href="#">Ranking List<i className="fal fa-chevron-right"></i></a></dt>
                            <dd>--</dd>
                        </dl>
                    </div>
                </div>
                <div className={"tab-pane " + (activeTab === "this-month-tab" ? "active" : "")}>
                    <div className="box clear">
                        <dl className="earned">
                            <dt>You Earned</dt>
                            <dd>0</dd>
                        </dl>
                        <dl className="traded_friends">
                            <dt>Total Number of Traded Friends</dt>
                            <dd>0</dd>
                        </dl>
                        <dl className="friends">
                            <dt>Total Numbers of Friends</dt>
                            <dd>0</dd>
                        </dl>
                        <dl className="ranking">
                            <dt>Your Ranking <a href="#">Ranking List<i className="fal fa-chevron-right"></i></a></dt>
                            <dd>--</dd>
                        </dl>
                    </div>
                </div>
            </div>
        </>
    )
}
const MiningTabContent = function (props) {
    const [activeTab, setActiveTab] = useState("all-tab");
    const handleTab = (tab) => {
        setActiveTab(tab);
    };
    return (
        <>
            <ul className="date clear">
                <li className={(activeTab === "all-tab" ? "on" : "")}><a href={void (0)} onClick={() => handleTab("all-tab")}>All</a></li>
                <li className={(activeTab === "yesterday-tab" ? "on" : "")}><a href={void (0)} onClick={() => handleTab("yesterday-tab")}>Yesterday</a></li>
                <li className={(activeTab === "this-week-tab" ? "on" : "")}><a href={void (0)} onClick={() => handleTab("this-week-tab")}>This Week</a></li>
                <li className={(activeTab === "this-month-tab" ? "on" : "")}><a href={void (0)} onClick={() => handleTab("this-month-tab")}>This Month</a></li>
            </ul>
            <p className="date_range">Date Range:<span>Until 2021-09-15 23:59:59 (UTC+0)</span></p>
            <div className="tab-content">
                <div className={"tab-pane " + (activeTab === "all-tab" ? "active" : "")}>
                    <div className="box clear">
                        <dl className="earned">
                            <dt>You Earned</dt>
                            <dd>0</dd>
                        </dl>
                        <dl className="traded_friends">
                            <dt>Total Number of Traded Friends</dt>
                            <dd>0</dd>
                        </dl>
                        <dl className="friends">
                            <dt>Total Numbers of Friends</dt>
                            <dd>0</dd>
                        </dl>
                        <dl className="ranking">
                            <dt>Your Ranking <a href="#">Ranking List<i className="fal fa-chevron-right"></i></a></dt>
                            <dd>--</dd>
                        </dl>
                    </div>
                </div>
                <div className={"tab-pane " + (activeTab === "yesterday-tab" ? "active" : "")}>
                    <div className="box clear">
                        <dl className="earned">
                            <dt>You Earned</dt>
                            <dd>0</dd>
                        </dl>
                        <dl className="traded_friends">
                            <dt>Total Number of Traded Friends</dt>

                            <dd>0</dd>
                        </dl>
                        <dl className="friends">
                            <dt>Total Numbers of Friends</dt>
                            <dd>0</dd>
                        </dl>
                        <dl className="ranking">
                            <dt>Your Ranking <a href="#">Ranking List<i className="fal fa-chevron-right"></i></a></dt>
                            <dd>--</dd>
                        </dl>
                    </div>
                </div>
                <div className={"tab-pane " + (activeTab === "this-week-tab" ? "active" : "")}>
                    <div className="box clear">
                        <dl className="earned">
                            <dt>You Earned</dt>
                            <dd>0</dd>
                        </dl>
                        <dl className="traded_friends">
                            <dt>Total Number of Traded Friends</dt>
                            <dd>0</dd>
                        </dl>
                        <dl className="friends">
                            <dt>Total Numbers of Friends</dt>
                            <dd>0</dd>
                        </dl>
                        <dl className="ranking">
                            <dt>Your Ranking <a href="#">Ranking List<i className="fal fa-chevron-right"></i></a></dt>
                            <dd>--</dd>
                        </dl>
                    </div>
                </div>
                <div className={"tab-pane " + (activeTab === "this-month-tab" ? "active" : "")}>
                    <div className="box clear">
                        <dl className="earned">
                            <dt>You Earned</dt>
                            <dd>0</dd>
                        </dl>
                        <dl className="traded_friends">
                            <dt>Total Number of Traded Friends</dt>
                            <dd>0</dd>
                        </dl>
                        <dl className="friends">
                            <dt>Total Numbers of Friends</dt>
                            <dd>0</dd>
                        </dl>
                        <dl className="ranking">
                            <dt>Your Ranking <a href="#">Ranking List<i className="fal fa-chevron-right"></i></a></dt>
                            <dd>--</dd>
                        </dl>
                    </div>
                </div>
            </div>
        </>
    )
}

export const Affiliate = ({ services }) => {

    const session = useSelector((state) => state?.session);

    const { affiliate } = services;

    const [invite_Code, setInvite_code] = useState()

    const [data, setData] = useState([])

    const Copy_Invitecode = async () => {
        await navigator.clipboard.writeText(invite_Code);
        toast.warn("Copy To Clipboard!")
    }


    useEffect(async () => {
        setInvite_code(session?.user?.profile?.invite_code)
        const response = await affiliate.find({ sudo: true, fake: true })
        setData(response)
    }, [])

    console.log(data);

    const [activeTab, setActiveTab] = useState("all-accounts-tab");
    const handleTab = (tab) => {
        setActiveTab(tab);
    };

    const [activeTabFriend, setActiveFriendTab] = useState("all-accounts-friend-tab");
    const handleTabFriend = (tab) => {
        setActiveFriendTab(tab);
    };

    const [activeTabCommission, setActiveCommissionTab] = useState("all-accounts-commission-tab");
    const handleTabCommission = (tab) => {
        setActiveCommissionTab(tab);
    };


    return (
        <div className="content">
            <section id="affiliateTop">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-md-12 col-sm-12  clear">
                            <h3 className="wow  fadeInLeft" data-wow-delay="0.2s">Invite your friends<br />and make a profit.</h3>
                            <p className="wow fadeInLeft" data-wow-delay="0.4s">We will pay 20% of your friend's trade transaction fee.</p>
                            <div className="box wow fadeInLeft" data-wow-delay="0.6s">
                                <a href="#" className="btn_link">+ Generate your link</a>
                                <dl className="referral_id">
                                    <dt>Default Referral ID</dt>

                                    <dd>{invite_Code}<a href="#" className="icon_copy">
                                        <i className="fal fa-copy" onClick={() => { Copy_Invitecode() }}></i></a></dd>
                                </dl>
                                <dl className="link">
                                    <dt>Default Link</dt>
                                    <dd>https://...12345689<a href="#" className="icon_copy"><i className="fal fa-copy"></i></a></dd>
                                </dl>
                                <dl className="note clear">
                                    <dt>Note</dt>
                                    <dd>ABC<a href="#" className="icon_write"><i className="fal fa-pencil"></i></a></dd>
                                </dl>
                                <div className="bottom clear">
                                    <dl>
                                        <dt>You Receive</dt>
                                        <dd>0%</dd>
                                    </dl>
                                    <dl>
                                        <dt>Friends Receive</dt>
                                        <dd>0%</dd>
                                    </dl>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12 col-sm-12 wow fadeInRight" data-wow-delay="0.8s">
                            <img src={affiliateTop} alt="Invite your friends and make a profit." />
                        </div>
                    </div>
                </div>
            </section>

            <section id="dashboard">
                <div className="container">
                    <div className="row wow fadeInUp" data-wow-delay="0.2s">
                        <div className="col-12 clear">
                            <h4><img src={icon_dashboard} alt="Dashboard" />Dashboard</h4>

                            <ul className="dash_menu clear">
                                <li className={(activeTab === "all-accounts-tab" ? "on" : "")}><a href={void (0)} onClick={() => handleTab("all-accounts-tab")}>All Accounts</a></li>
                                <li className={(activeTab === "spot-tab" ? "on" : "")}><a href={void (0)} onClick={() => handleTab("spot-tab")}>Spot</a></li>
                                <li className={(activeTab === "futures-tab" ? "on" : "")}><a href={void (0)} onClick={() => handleTab("futures-tab")}>Futures</a></li>
                                <li className={(activeTab === "mining-tab" ? "on" : "")}><a href={void (0)} onClick={() => handleTab("mining-tab")}>Mining</a></li>
                            </ul>

                            <div className="tab-content">
                                <div className={"tab-pane " + (activeTab === "all-accounts-tab" ? "active" : "")}>
                                    <AllaccountTabContent />
                                </div>
                                <div className={"tab-pane " + (activeTab === "spot-tab" ? "active" : "")}>
                                    <SpotTabContent />
                                </div>
                                <div className={"tab-pane " + (activeTab === "futures-tab" ? "active" : "")}>
                                    <FutureTabContent />
                                </div>
                                <div className={"tab-pane " + (activeTab === "mining-tab" ? "active" : "")}>
                                    <MiningTabContent />
                                </div>
                            </div>

                            <ul className="notice">
                                <li>* Data update time refers to UTC + 0 time zone. The data maintenance time is 3am - 5am (UTC+0) every day. During this period, the calculation of today's data is based on the assets of previous day.<br />After maintenance, all data will be displayed properly</li>
                                <li>* Statement: due to the complexity of financial data, there might be nuances and delay. Data displayed above is for reference only. We sincerely apologize for any inconvenience.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <section id="friendsList">
                <div className="container">
                    <div className="row wow fadeInUp" data-wow-delay="0.4s">
                        <div className="col-12">
                            <h4><img src={icon_friends} alt="Friends List" />Friends List</h4>
                            <a href="#" className="btn_chart"><i className="far fa-chart-line"></i>View Chart</a>
                            <ul className="friends_menu clear">
                                <li className={(activeTabFriend === "all-accounts-friend-tab" ? "on" : "")}><a href={void (0)} onClick={() => handleTabFriend("all-accounts-friend-tab")}>All Accounts</a></li>
                                <li className={(activeTabFriend === "spot-friend-tab" ? "on" : "")}><a href={void (0)} onClick={() => handleTabFriend("spot-friend-tab")}>Spot</a></li>
                                <li className={(activeTabFriend === "futures-friend-tab" ? "on" : "")}><a href={void (0)} onClick={() => handleTabFriend("futures-friend-tab")}>Futures</a></li>
                                <li className={(activeTabFriend === "mining-friend-tab" ? "on" : "")}><a href={void (0)} onClick={() => handleTabFriend("mining-friend-tab")}>Mining</a></li>
                            </ul>
                            <div className="tab-content">
                                <div className={"tab-pane " + (activeTabFriend === "all-accounts-friend-tab" ? "active" : "")}>
                                    <p>All friends data as of 0:00 UTC today is displayed, and will be updated between 3:00 - 5:00 (UTC+0) today, excluding Mining Pool. All records can be exported directly from desktop downloads.</p>
                                    <a href="#" className="btn_history"><i className="far fa-chart-line"></i>Export complete history</a>
                                    <div className="table_container">
                                        <table>
                                            <thead>
                                                <tr>
                                                    <th>Account Type</th>
                                                    <th>Friend's User ID</th>
                                                    <th>Referral Bonus Earned (BTC)</th>
                                                    <th>Traded</th>
                                                    <th>Registration Time</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td colspan="5">
                                                        <img src={nodata} alt="No Data." />
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                    <div className="indicator">
                                        <button type="button" className="btn_prev" disabled><i className="fal fa-chevron-left"></i></button>
                                        <span className="on">1</span>
                                        <button type="button" className="btn_next"><i className="fal fa-chevron-right"></i></button>
                                    </div>
                                </div>
                                <div className={"tab-pane " + (activeTabFriend === "spot-friend-tab" ? "active" : "")}>
                                    <p>All friends data as of 0:00 UTC today is displayed, and will be updated between 3:00 - 5:00 (UTC+0) today, excluding Mining Pool. All records can be exported directly from desktop downloads.</p>
                                    <a href="#" className="btn_history"><i className="far fa-chart-line"></i>Export complete history</a>
                                    <div className="table_container">
                                        <table>
                                            <thead>
                                                <tr>
                                                    <th>Account Type</th>
                                                    <th>Friend's User ID</th>
                                                    <th>Referral Bonus Earned (BTC)</th>
                                                    <th>Traded</th>
                                                    <th>Registration Time</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td colspan="5">
                                                        <img src={nodata} alt="No Data." />
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                    <div className="indicator">
                                        <button type="button" className="btn_prev" disabled><i className="fal fa-chevron-left"></i></button>
                                        <span className="on">1</span>
                                        <button type="button" className="btn_next"><i className="fal fa-chevron-right"></i></button>
                                    </div>
                                </div>
                                <div className={"tab-pane " + (activeTabFriend === "futures-friend-tab" ? "active" : "")}>
                                    <p>All friends data as of 0:00 UTC today is displayed, and will be updated between 3:00 - 5:00 (UTC+0) today, excluding Mining Pool. All records can be exported directly from desktop downloads.</p>
                                    <a href="#" className="btn_history"><i className="far fa-chart-line"></i>Export complete history</a>
                                    <div className="table_container">
                                        <table>
                                            <thead>
                                                <tr>
                                                    <th>Account Type</th>
                                                    <th>Friend's User ID</th>
                                                    <th>Referral Bonus Earned (BTC)</th>
                                                    <th>Traded</th>
                                                    <th>Registration Time</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td colspan="5">
                                                        <img src={nodata} alt="No Data." />
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                    <div className="indicator">
                                        <button type="button" className="btn_prev" disabled><i className="fal fa-chevron-left"></i></button>
                                        <span className="on">1</span>
                                        <button type="button" className="btn_next"><i className="fal fa-chevron-right"></i></button>
                                    </div>
                                </div>
                                <div className={"tab-pane " + (activeTabFriend === "mining-friend-tab" ? "active" : "")}>
                                    <p>All friends data as of 0:00 UTC today is displayed, and will be updated between 3:00 - 5:00 (UTC+0) today, excluding Mining Pool. All records can be exported directly from desktop downloads.</p>
                                    <a href="#" className="btn_history"><i className="far fa-chart-line"></i>Export complete history</a>
                                    <div className="table_container">
                                        <table>
                                            <thead>
                                                <tr>
                                                    <th>Account Type</th>
                                                    <th>Friend's User ID</th>
                                                    <th>Referral Bonus Earned (BTC)</th>
                                                    <th>Traded</th>
                                                    <th>Registration Time</th>
                                                </tr>
                                            </thead>

                                            <tbody>
                                                <tr>
                                                    <td colspan="5">
                                                        <img src={nodata} alt="No Data." />
                                                    </td>
                                                </tr>
                                            </tbody>

                                        </table>
                                    </div>
                                    <div className="indicator">
                                        <button type="button" className="btn_prev" disabled><i className="fal fa-chevron-left"></i></button>
                                        <span className="on">1</span>
                                        <button type="button" className="btn_next"><i className="fal fa-chevron-right"></i></button>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>

            <section id="commission">
                <div className="container">
                    <div className="row wow fadeInUp" data-wow-delay="0.6s">
                        <div className="col-12">
                            <h4><img src={icon_commission} alt="Commission" />Commission History</h4>
                            <a href="#" className="btn_chart"><i className="far fa-chart-line"></i>View Chart</a>
                            <div className="box clear">
                                <i className="fal fa-megaphone"></i>
                                <p>Your referral commission will be credited to your wallet balance within the next 72 hours. If you do not receive your commission within 72 hours, please contact our online support center for further assistance. </p>
                            </div>
                            <ul className="commission_menu clear">
                                <li className={(activeTabCommission === "all-accounts-commission-tab" ? "on" : "")}><a href={void (0)} onClick={() => handleTabCommission("all-accounts-commission-tab")}>All Accounts</a></li>
                                <li className={(activeTabCommission === "spot-commission-tab" ? "on" : "")}><a href={void (0)} onClick={() => handleTabCommission("spot-commission-tab")}>Spot (Margin Included)</a></li>
                                <li className={(activeTabCommission === "futures-commission-tab" ? "on" : "")}><a href={void (0)} onClick={() => handleTabCommission("futures-commission-tab")}>Futures</a></li>
                                <li className={(activeTabCommission === "mining-commission-tab" ? "on" : "")}><a href={void (0)} onClick={() => handleTabCommission("mining-commission-tab")}>Mining</a></li>
                            </ul>
                            <p>Only show the records of the last 7 days. All records can be exported directly from desktop downloads.</p>
                            <div className="tab-content">
                                <div className={"tab-pane " + (activeTabCommission === "all-accounts-commission-tab" ? "active" : "")}>

                                    <a href="#" className="btn_history"><i className="far fa-chart-line"></i>Export complete history</a>
                                    <div className="table_container">
                                        <table>
                                            <thead>
                                                <tr>
                                                    <th>Order Type</th>
                                                    <th>Friend's User ID</th>
                                                    <th>Commission Earned</th>
                                                    <th>Friend's Trade Date</th>
                                                    <th>Commission Time</th>
                                                    <th>Distribution Status</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td colspan="6">
                                                        <img src={nodata} alt="No Data." />
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                    <div className="indicator">
                                        <button type="button" className="btn_prev" disabled><i className="fal fa-chevron-left"></i></button>
                                        <span className="on">1</span>
                                        <button type="button" className="btn_next"><i className="fal fa-chevron-right"></i></button>
                                    </div>
                                </div>
                                <div className={"tab-pane " + (activeTabCommission === "spot-commission-tab" ? "active" : "")}>
                                    <a href="#" className="btn_history"><i className="far fa-chart-line"></i>Export complete history</a>
                                    <div className="table_container">
                                        <table>
                                            <thead>
                                                <tr>
                                                    <th>Order Type</th>
                                                    <th>Friend's User ID</th>
                                                    <th>Commission Earned</th>
                                                    <th>Friend's Trade Date</th>
                                                    <th>Commission Time</th>
                                                    <th>Distribution Status</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td colspan="6">
                                                        <img src={nodata} alt="No Data." />
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                    <div className="indicator">
                                        <button type="button" className="btn_prev" disabled><i className="fal fa-chevron-left"></i></button>
                                        <span className="on">1</span>
                                        <button type="button" className="btn_next"><i className="fal fa-chevron-right"></i></button>
                                    </div>
                                </div>
                                <div className={"tab-pane " + (activeTabCommission === "futures-commission-tab" ? "active" : "")}>
                                    <a href="#" className="btn_history"><i className="far fa-chart-line"></i>Export complete history</a>
                                    <div className="table_container">
                                        <table>
                                            <thead>
                                                <tr>
                                                    <th>Order Type</th>
                                                    <th>Friend's User ID</th>
                                                    <th>Commission Earned</th>
                                                    <th>Friend's Trade Date</th>
                                                    <th>Commission Time</th>
                                                    <th>Distribution Status</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td colspan="6">
                                                        <img src={nodata} alt="No Data." />
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                    <div className="indicator">
                                        <button type="button" className="btn_prev" disabled><i className="fal fa-chevron-left"></i></button>
                                        <span className="on">1</span>
                                        <button type="button" className="btn_next"><i className="fal fa-chevron-right"></i></button>
                                    </div>
                                </div>
                                <div className={"tab-pane " + (activeTabCommission === "mining-commission-tab" ? "active" : "")}>
                                    <a href="#" className="btn_history"><i className="far fa-chart-line"></i>Export complete history</a>
                                    <div className="table_container">
                                        <table>
                                            <thead>
                                                <tr>
                                                    <th>Order Type</th>
                                                    <th>Friend's User ID</th>
                                                    <th>Commission Earned</th>
                                                    <th>Friend's Trade Date</th>
                                                    <th>Commission Time</th>
                                                    <th>Distribution Status</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td colspan="6">
                                                        <img src={nodata} alt="No Data." />
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                    <div className="indicator">
                                        <button type="button" className="btn_prev" disabled><i className="fal fa-chevron-left"></i></button>
                                        <span className="on">1</span>
                                        <button type="button" className="btn_next"><i className="fal fa-chevron-right"></i></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
export default Affiliate;