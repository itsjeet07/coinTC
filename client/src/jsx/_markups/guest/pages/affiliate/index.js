import React, { useEffect, useState, useRef } from "react";
import { useLocation } from "react-router-dom";
import { CSVLink } from "react-csv";

import "./affiliate.style.css";

import affiliateTop from "../../app-assets/images/affiliateTop.png";
import icon_dashboard from "../../app-assets/images/icon/icon_dashboard.png";
import icon_friends from "../../app-assets/images/icon/icon_friends.png";
import nodata from "../../app-assets/images/icon/nodata.png";
import icon_commission from "../../app-assets/images/icon/icon_commission.png";

// HOOKS
import useServiceContextHook from "../../../../_hooks/service.context.hook";
import { toast } from "react-toastify";
import Moment from "react-moment";
import { useTranslation } from "react-i18next";
import usePaginatorHook from "../../../../_hooks/paginator.hook.js";
const data = {};

const AllaccountTabContent = function (props) {
  const { services, session } = useServiceContextHook();

  const [activeTab, setActiveTab] = useState("all-tab");
  const handleTab = (tab) => {
    setActiveTab(tab);
  };
  return (
    <>
      <ul className="date clear">
        <li className={activeTab === "all-tab" ? "on" : ""}>
          <a href={void 0} onClick={() => handleTab("all-tab")}>
            All
          </a>
        </li>
        <li className={activeTab === "yesterday-tab" ? "on" : ""}>
          <a href={void 0} onClick={() => handleTab("yesterday-tab")}>
            Yesterday
          </a>
        </li>
        <li className={activeTab === "this-week-tab" ? "on" : ""}>
          <a href={void 0} onClick={() => handleTab("this-week-tab")}>
            This Week
          </a>
        </li>
        <li className={activeTab === "this-month-tab" ? "on" : ""}>
          <a href={void 0} onClick={() => handleTab("this-month-tab")}>
            This Month
          </a>
        </li>
      </ul>
      <p className="date_range">
        Date Range:<span>Until 2021-09-15 23:59:59 (UTC+0)</span>
      </p>
      <div className="tab-content">
        <div
          className={"tab-pane " + (activeTab === "all-tab" ? "active" : "")}
        >
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
              <dd>{data.totalFriend}</dd>
            </dl>
            <dl className="ranking">
              <dt>
                Your Ranking{" "}
                <a href="#">
                  Ranking List<i className="fal fa-chevron-right"></i>
                </a>
              </dt>
              <dd>--</dd>
            </dl>
          </div>
        </div>
        <div
          className={
            "tab-pane " + (activeTab === "yesterday-tab" ? "active" : "")
          }
        >
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
              <dt>
                Your Ranking{" "}
                <a href="#">
                  Ranking List<i className="fal fa-chevron-right"></i>
                </a>
              </dt>
              <dd>--</dd>
            </dl>
          </div>
        </div>
        <div
          className={
            "tab-pane " + (activeTab === "this-week-tab" ? "active" : "")
          }
        >
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
              <dt>
                Your Ranking{" "}
                <a href="#">
                  Ranking List<i className="fal fa-chevron-right"></i>
                </a>
              </dt>
              <dd>--</dd>
            </dl>
          </div>
        </div>
        <div
          className={
            "tab-pane " + (activeTab === "this-month-tab" ? "active" : "")
          }
        >
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
              <dt>
                Your Ranking{" "}
                <a href="#">
                  Ranking List<i className="fal fa-chevron-right"></i>
                </a>
              </dt>
              <dd>--</dd>
            </dl>
          </div>
        </div>
      </div>
    </>
  );
};
const SpotTabContent = function (props) {
  const [activeTab, setActiveTab] = useState("all-tab");
  const handleTab = (tab) => {
    setActiveTab(tab);
  };
  return (
    <>
      <ul className="date clear">
        <li className={activeTab === "all-tab" ? "on" : ""}>
          <a href={void 0} onClick={() => handleTab("all-tab")}>
            All
          </a>
        </li>
        <li className={activeTab === "yesterday-tab" ? "on" : ""}>
          <a href={void 0} onClick={() => handleTab("yesterday-tab")}>
            Yesterday
          </a>
        </li>
        <li className={activeTab === "this-week-tab" ? "on" : ""}>
          <a href={void 0} onClick={() => handleTab("this-week-tab")}>
            This Week
          </a>
        </li>
        <li className={activeTab === "this-month-tab" ? "on" : ""}>
          <a href={void 0} onClick={() => handleTab("this-month-tab")}>
            This Month
          </a>
        </li>
      </ul>
      <p className="date_range">
        Date Range:<span>Until 2021-09-15 23:59:59 (UTC+0)</span>
      </p>
      <div className="tab-content">
        <div
          className={"tab-pane " + (activeTab === "all-tab" ? "active" : "")}
        >
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
              <dt>
                Your Ranking{" "}
                <a href="#">
                  Ranking List<i className="fal fa-chevron-right"></i>
                </a>
              </dt>
              <dd>--</dd>
            </dl>
          </div>
        </div>
        <div
          className={
            "tab-pane " + (activeTab === "yesterday-tab" ? "active" : "")
          }
        >
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
              <dt>
                Your Ranking{" "}
                <a href="#">
                  Ranking List<i className="fal fa-chevron-right"></i>
                </a>
              </dt>
              <dd>--</dd>
            </dl>
          </div>
        </div>
        <div
          className={
            "tab-pane " + (activeTab === "this-week-tab" ? "active" : "")
          }
        >
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
              <dt>
                Your Ranking{" "}
                <a href="#">
                  Ranking List<i className="fal fa-chevron-right"></i>
                </a>
              </dt>
              <dd>--</dd>
            </dl>
          </div>
        </div>
        <div
          className={
            "tab-pane " + (activeTab === "this-month-tab" ? "active" : "")
          }
        >
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
              <dt>
                Your Ranking{" "}
                <a href="#">
                  Ranking List<i className="fal fa-chevron-right"></i>
                </a>
              </dt>
              <dd>--</dd>
            </dl>
          </div>
        </div>
      </div>
    </>
  );
};

export default function Affiliate() {
  const paginator = usePaginatorHook();

  const { count, page, setCount, limit, Skeleton } = paginator;

  const { services, session } = useServiceContextHook();

  const { affiliate } = services;

  const user_id = session?.user?.id;

  // hooks for invite_code and link
  const [inv_code, setInv_code] = useState("");
  const [inv_link, setInv_link] = useState("");

  // FriendList
  const [friendList, setFriendList] = useState([]);
  const [totalFriend, setTotalfriend] = useState(0);

  const [commisionList, setcommisionList] = useState([]);

  // get invite_code from session
  useEffect(async () => {
    // const invite_code = session?.user?.dataValues?.profile?.invite_code;
    const invite_code = session?.user?.profile?.invite_code;
    setInv_code(invite_code);
    const currentURL = window.location.href;
    const urls = currentURL.split("/affiliate");
    setInv_link(`${urls[0]}/auth/register?invite_code=${invite_code}`);

    try {
      const params = { /* fake: false */ };

      const [firstResponse, secondResponse] = await Promise.all([
        affiliate.find(params),
        affiliate.commision({
          [`filter[type]`]: "COMMISSION",
          /* fake: false, */
        }),
      ]);

      let {
        data: { result = [], count, total_affiliate_friends },
      } = firstResponse;

      setFriendList(result);
      setTotalfriend(total_affiliate_friends);

      let { data } = secondResponse;

      setcommisionList(data.result);
    } catch (e) {
      console.log(e);
    }
  }, []);

  data.totalFriend = totalFriend;

  const friendListData = friendList.map((item) => {
    return {
      Friends_User_ID: item?.user?.createdAt,
      Registration_Time: item?.user?.user_id,
    };
  });

  const commisionListData = commisionList.map((item) => {
    return {
      order_type: item?.metadata?.order_type,
      friends_user_id: item?.metadata?.friends_user_id,
      commission_earned: item?.metadata?.commission_earned,
      distribution_status: item?.metadata?.distribution_status,
      friend_trade_datetime: item?.metadata?.friend_trade_datetime,
    };
  });

  const copy_InviteCode = async () => {
    await navigator.clipboard.writeText(inv_code);
    toast.info("Invite code copied!", { hideProgressBar: true });
  };

  const copy_link = async () => {
    await navigator.clipboard.writeText(inv_link);
    toast.info("Link copied!", { hideProgressBar: true });
  };

  const [activeTab, setActiveTab] = useState("all-accounts-tab");
  const handleTab = (tab) => {
    setActiveTab(tab);
  };

  const [activeTabFriend, setActiveFriendTab] = useState(
    "all-accounts-friend-tab"
  );
  const handleTabFriend = (tab) => {
    setActiveFriendTab(tab);
  };

  const [activeTabCommission, setActiveCommissionTab] = useState(
    "all-accounts-commission-tab"
  );
  const handleTabCommission = (tab) => {
    setActiveCommissionTab(tab);
  };

  /* 
    Filter By Yesterday
     */
  const filterYesterDay = () => {
    var d = new Date();
    d.setDate(d.getDate() - 1);
    const result = friendList.filter((user) => {
      var date1 = new Date(user?.createdAt);
      if (d == date1) {
        return user;
      }
    });
    console.log(result);
  };
  /* 
    End Filter By Yesterday
     */

  /* 
  Filter By This week
   */
  function isDateInThisWeek(date) {
    const todayObj = new Date();
    const todayDate = todayObj.getDate();
    const todayDay = todayObj.getDay();

    // get first date of week
    const firstDayOfWeek = new Date(todayObj.setDate(todayDate - todayDay));

    // get last date of week
    const lastDayOfWeek = new Date(firstDayOfWeek);
    lastDayOfWeek.setDate(lastDayOfWeek.getDate() + 6);

    // if date is equal or within the first and last dates of the week
    return date >= firstDayOfWeek && date <= lastDayOfWeek;
  }

  const date = new Date(
    "Wed Dec 01 2021 15:30:33 GMT+0530 (India Standard Time)"
  );
  // console.log(date)
  const isInWeek = isDateInThisWeek(date);
  // console.log(isInWeek)
  /* 
  End Filter by this week
 */

  /* Filter By this Month */
  const filterByThismonth = () => {
    const dateTime = "2018-11-01 18:51:41";
    const parts = dateTime.split(/[- :]/);
    var month = parts[1];
    var year = parts[0];
    var currentdate = new Date();
    var cur_month = currentdate.getMonth() + 1;
    var cur_year = currentdate.getFullYear();

    if (cur_month == month && year == cur_year) {
      alert("in this month");
    } else {
      alert("not in this month");
    }
  };
  /*End Filter By this Month */

  return (
    <div className="content">
      <section id="affiliateTop">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-12 col-sm-12  clear">
              <h3 className="wow  fadeInLeft" data-wow-delay="0.2s">
                Invite your friends
                <br />
                and make a profit.
              </h3>
              <p className="wow fadeInLeft" data-wow-delay="0.4s">
                We will pay 20% of your friend's trade transaction fee.
              </p>
              <div className="box wow fadeInLeft" data-wow-delay="0.6s">
                {/*  <a
                  href="#"
                  className="btn_link"
                  onClick={() => {
                    copy_link();
                  }}
                >
                  + Generate your link
                </a> */}
                <dl className="referral_id">
                  <dt>Default Referral ID</dt>
                  <dd>
                    {inv_code}
                    <span className="icon_copy">
                      <i
                        className="fal fa-copy"
                        onClick={() => {
                          copy_InviteCode();
                        }}
                      ></i>
                    </span>
                  </dd>
                </dl>
                <dl className="link">
                  <dt>Default Link</dt>
                  <dd>
                    http://...{inv_code}
                    <span className="icon_copy">
                      <i
                        className="fal fa-copy"
                        onClick={() => {
                          copy_link();
                        }}
                      ></i>
                    </span>
                  </dd>
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
            <div
              className="col-lg-6 col-md-12 col-sm-12 wow fadeInRight"
              data-wow-delay="0.8s"
            >
              <img
                src={affiliateTop}
                alt="Invite your friends and make a profit."
              />
            </div>
          </div>
        </div>
      </section>

      <section id="dashboard">
        <div className="container">
          <div className="row wow fadeInUp" data-wow-delay="0.2s">
            <div className="col-12 clear">
              <h4>
                <img src={icon_dashboard} alt="Dashboard" />
                Dashboard
              </h4>

              <ul className="dash_menu clear">
                <li className={activeTab === "all-accounts-tab" ? "on" : ""}>
                  <a
                    href={void 0}
                    onClick={() => handleTab("all-accounts-tab")}
                  >
                    All Accounts
                  </a>
                </li>
              </ul>
              <div className="tab-content">
                <div
                  className={
                    "tab-pane " +
                    (activeTab === "all-accounts-tab" ? "active" : "")
                  }
                >
                  <AllaccountTabContent />
                </div>
                <div
                  className={
                    "tab-pane " + (activeTab === "spot-tab" ? "active" : "")
                  }
                >
                  <SpotTabContent />
                </div>
              </div>

              <ul className="notice">
                <li>
                  * Data update time refers to UTC + 0 time zone. The data
                  maintenance time is 3am - 5am (UTC+0) every day. During this
                  period, the calculation of today's data is based on the assets
                  of previous day.
                  <br />
                  After maintenance, all data will be displayed properly
                </li>
                <li>
                  * Statement: due to the complexity of financial data, there
                  might be nuances and delay. Data displayed above is for
                  reference only. We sincerely apologize for any inconvenience.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <RenderFriendsData friendListData={friendListData} paginator={paginator} />

      <RenderCommisionData
        commisionListData={commisionListData}
        paginator={paginator}
      />
    </div>
  );
}

function RenderFriendsData({ friendListData, paginator }) {
  const { t } = useTranslation();

  const {
    count,
    page,
    limit,
    onRowsPerPageChange,
    onPageChange,
    StyledPagination,
    Skeleton,
  } = paginator;

  /* Making Csv File */
  const headers = [
    { label: "Friend's User ID", key: "Friends_User_ID" },
    { label: "Registration Time", key: "Registration_Time" },
  ];

  const csvReport = {
    filename: "Friends_list.csv",
    headers: headers,
    data: friendListData,
  };

  return (
    <>
      <section id="commission">
        <div className="container">
          <div className="row wow fadeInUp" data-wow-delay="0.6s">
            <div className="col-12">
              <h4>
                <img src={icon_friends} alt="Friends List" />
                Friends List
              </h4>
              <div className="box clear">
                <i className="fal fa-megaphone"></i>
                <p>
                  All friends data as of 0:00 UTC today is displayed, and will
                  be updated between 3:00 - 5:00 (UTC+0) today, excluding Mining
                  Pool. All records can be exported directly from desktop
                  downloads.
                </p>
              </div>
              <ul className="commission_menu clear">
                <li></li>

                <li></li>
              </ul>
              <p>
                Only show the records of the last 7 days. All records can be
                exported directly from desktop downloads.
              </p>
              <div className="tab-content">
                <div>
                  <CSVLink {...csvReport} className="btn_history">
                    <i className="far fa-chart-line"></i>Export complete history
                  </CSVLink>

                  <div className="table_container">
                    <table>
                      <thead>
                        <tr>
                          <th style={{ textAlign: "left" }}>
                            Friend's User ID
                          </th>
                          <th style={{ textAlign: "left" }}>
                            Registration Time
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {friendListData && friendListData.length ? (
                          friendListData.map((item, key) => (
                            <tr key={key}>
                              <td style={{ textAlign: "left" }}>
                                {item?.Registration_Time}
                              </td>
                              <td style={{ textAlign: "left" }}>
                                <Moment>{item?.Friends_User_ID}</Moment>
                              </td>
                            </tr>
                          ))
                        ) : (
                          <tr>
                            <td colSpan="6">
                              <img src={nodata} alt="No Data." />
                            </td>
                          </tr>
                        )}
                      </tbody>
                    </table>
                  </div>
                  <StyledPagination
                    style={{ alignItems: "center" }}
                    component="div"
                    count={count}
                    page={page}
                    onPageChange={onPageChange}
                    rowsPerPage={limit || 10}
                    onRowsPerPageChange={onRowsPerPageChange}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function RenderCommisionData({ commisionListData, data, paginator }) {
  const { t } = useTranslation();

  const {
    count,
    page,
    limit,
    onRowsPerPageChange,
    onPageChange,
    StyledPagination,
    Skeleton,
  } = paginator;

  const headerCommision = [
    { label: "order_type", key: "order_type" },
    { label: "friends_user_id", key: "friends_user_id" },
    { label: "commission_earned", key: "commission_earned" },
    { label: "distribution_status", key: "distribution_status" },
    { label: "friend_trade_datetime", key: "friend_trade_datetime" },
  ];

  const csvReportCommision = {
    filename: "Commision_History.csv",
    headers: headerCommision,
    data: commisionListData,
  };

  return (
    <section id="commission">
      <div className="container">
        <div className="row wow fadeInUp" data-wow-delay="0.6s">
          <div className="col-12">
            <h4>
              <img src={icon_commission} alt="Commission" />
              Commission History
            </h4>
            <div className="box clear">
              <i className="fal fa-megaphone"></i>
              <p>
                Your referral commission will be credited to your wallet balance
                within the next 72 hours. If you do not receive your commission
                within 72 hours, please contact our online support center for
                further assistance.{" "}
              </p>
            </div>
            <ul className="commission_menu clear">
              <li></li>

              <li></li>
            </ul>
            <p>
              Only show the records of the last 7 days. All records can be
              exported directly from desktop downloads.
            </p>
            <div className="tab-content">
              <div>
                <CSVLink {...csvReportCommision} className="btn_history">
                  <i className="far fa-chart-line"></i>Export complete history
                </CSVLink>
                <div className="table_container">
                  <table>
                    <thead>
                      <tr>
                        <th>Order Type</th>
                        <th>Friends</th>
                        <th>Commission Earned</th>
                        <th>Friend trade datetime </th>
                        <th>Distribution status</th>
                      </tr>
                    </thead>
                    <tbody>
                      {commisionListData && commisionListData.length ? (
                        commisionListData.map((item, key) => (
                          <tr key={key}>
                            <td>{item?.order_type}</td>
                            <td>{item?.friends_user_id}</td>
                            <td>{item?.commission_earned}</td>
                            <td>{item?.friend_trade_datetime}</td>
                            <td>
                              {item?.distribution_status
                                ? "Active"
                                : "Inactive"}
                            </td>
                          </tr>
                        ))
                      ) : (
                        <tr>
                          <td colSpan="6">
                            <img src={nodata} alt="No Data." />
                          </td>
                        </tr>
                      )}
                    </tbody>
                  </table>
                </div>
                <StyledPagination
                  style={{ alignItems: "center" }}
                  component="div"
                  count={count}
                  page={page}
                  onPageChange={onPageChange}
                  rowsPerPage={limit || 10}
                  onRowsPerPageChange={onRowsPerPageChange}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function CommissionHistory() {
  const { t } = useTranslation();
  const {
    services: { logger },
  } = useServiceContextHook();
  // const { count, page, setCount, limit, Skeleton } = paginator;

  async function fetchCommission() {
    try {
    } catch (err) {}
  }
  return <></>;
}
