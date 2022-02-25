import { Link } from "react-router-dom";
import { useEffect, lazy, Suspense, useState } from "react";
import { Row, Col, Card } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import pMinDelay from "p-min-delay";
// CONSTANTS
import { SERVICE } from "../../../_constants";

import { useTranslation } from 'react-i18next'
const ApexLine = lazy(() =>
  pMinDelay(import("../components/depositsAnalysis.component"), 5000)
);

export default function Home({ services, useService }) {

  const { t } = useTranslation()

  const { analytics } = services;
  const [stats, setStats] = useState({
    user: null,
    kyc: null,
    security: null,
  });
  let userStat = useService({
    [SERVICE?.FIND]: analytics?.user,
  });
  let kycStat = useService({
    [SERVICE?.FIND]: analytics?.kyc,
  });
  let securityStat = useService({
    [SERVICE?.FIND]: analytics?.security,
  });

  useEffect(() => {
    // get all statistics
    userStat
      .dispatchRequest({
        type: SERVICE?.FIND,
        payload: {
          sudo: true,
        },
      })
      .then(({ error, data }) => {
        if (!error) {
          let result = data;
          setStats((state) => {
            console.log(state);
            return { ...state, ["user"]: result };
          });
        }
      });
    securityStat
      .dispatchRequest({
        type: SERVICE?.FIND,
        payload: {
          sudo: true,
        },
      })
      .then(({ error, data }) => {
        if (!error) {
          let result = data;
          setStats((state) => ({ ...state, ["security"]: result }));
        }
      });
    kycStat
      .dispatchRequest({
        type: SERVICE?.FIND,
        payload: {
          sudo: true,
        },
      })
      .then(({ error, data }) => {
        if (!error) {
          let result = data;
          setStats((state) => ({ ...state, ["kyc"]: result }));
        }
      });
  }, []);

  return (
    <>
      <div className="form-head mb-sm-5 mb-3 d-flex flex-wrap align-items-center">
        <h2 className="font-w600 mb-2 mr-auto ">{t("Dashboard")}</h2>
        {/* <div className="weather-btn mb-2">
      <span className="mr-3 fs-22 font-w600 text-black">
      <i className="fa fa-cloud mr-2"></i>21
    </span>
  </div> */}
        {/* <Link to={"#"} className="btn btn-secondary text-white mb-2">
  <i className="las la-calendar scale5 mr-3"></i>Filter Periode
</Link> */}
      </div>

      <div className="row">
        {Object.entries(stats).map(([key, value], index) => {
          return (
            <div key={index} className="col-xl-4 col-xxl-4 col-lg-6 col-sm-6">
              <div className="widget-stat card">
                <div className="card-body p-4">
                  <div className="media ai-icon">
                    <div className="media-body ">
                      <div className="row justify-content-between mb-4">
                        <div className="col">
                          <h5 className="text-capitalize">
                            {t(key).replace("_", " ")}
                          </h5>
                        </div>
                        <div className="col-auto">
                          <Link to={"#"} className="">
                            {t("View all")}
                          </Link>
                        </div>
                      </div>
                      <div
                        className="d-flex"
                        style={{ flexWrap: "wrap", gap: 15 }}
                      >
                        {value &&
                          Object.entries(value).map(([title, data], index) => {
                            return (
                              <div
                                key={index}
                                className="rounded"
                                style={{
                                  flex: "1",
                                  padding: "8px 16px",
                                  boxShadow: "0 5px 20px -10px #aaa",
                                }}
                              >
                                <div className="">
                                  <h4 className="mb-0">{data}</h4>
                                  <p className="mb-1 truncate">
                                    {title.replace("_", " ")}
                                  </p>
                                </div>
                              </div>
                            );
                          })}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <Row>
        <Col xl={6} lg={6}>
          <Card>
            <Card.Header>
              <h4 className="card-title">{t("Deposits")} &amp; {t("Withdrawals")}</h4>
            </Card.Header>
            <Card.Body>
              <Suspense fallback={<div>{t("Loading...")}</div>}>
                <ApexLine />
              </Suspense>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </>
  );
}
