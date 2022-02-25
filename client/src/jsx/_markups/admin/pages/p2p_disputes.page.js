import { Card, Row, Col, Button, Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import PageTitle from "../layouts/PageTitle";
// CONSTANTS
import { SERVICE } from "../../../_constants";
import { useEffect } from "react";
import TableGenerator from "../components/tableGenerator.component";
import Moment from "react-moment";
import { toast } from "react-toastify";
import { useTranslation } from 'react-i18next'
function P2PTrades({ services, useService }) {
  const { order } = services;
  const { t } = useTranslation()

  let service = useService({
    [SERVICE?.RETRIEVE]: order.findByID,
    [SERVICE?.UPDATE]: order.updateByID,
    [SERVICE?.DROP]: order.removveByID,
    [SERVICE?.BULK_RETRIEVE]: order.find,
  });

  const { dispatchRequest } = service;

  useEffect(() => {
    dispatchRequest({
      type: SERVICE?.BULK_RETRIEVE,
      payload: {
        fake: true,
        sudo: true,
        "filter[status]": 'disputed'
      },
      toast: { success: notifySuccess, error: notifyError },
    });
  }, []);

  return (
    <>
      <PageTitle activeMenu="Disputes" motherMenu="P2P Trade management" />
      <header className="mb-4">
        <h3>{t("Disputes")}</h3>
      </header>
      <Row style={{ marginBottom: 20, width: "100%" }}>
        <Col>
          <div className="input-group search-area right d-lg-inline-flex d-none">
            <input
              type="text"
              className="form-control"
              placeholder={t("Filter in record")}
            />
            <div className="input-group-append">
              <span className="input-group-text">
                <Link to={"#"}>
                  <i className="themify-glyph-162"></i>
                </Link>
              </span>
            </div>
          </div>
        </Col>
        <Col sm="auto" style={{ padding: 0 }}></Col>
      </Row>

      <Row style={{ marginBottom: 60 }}>
        <Col>
          <Card
            style={{
              padding: 10,
            }}
          >
            <TableGenerator
              {...{ service }}
              omit="*"
              extras={[
                "creation_date",
                "id",
                "email",
                "trade_type",
                "currency_pair",
              ]}
              transformers={{
                id: ({ row }) => row?.id,
                email: ({ row }) => row?.advert?.user?.email,
                trade_type: ({ row }) => row?.advert?.type || "",
                creation_date: ({ row }) => (
                  <Moment format="YYYY/MM/DD" date={row?.advert?.createdAt} />
                ),
                currency_pair: ({ row }) =>
                  `${row?.advert?.crypto}/${row?.advert?.fiat || ""}`,
              }}
            />
          </Card>
        </Col>
      </Row>
    </>
  );
}

export default P2PTrades;
function notifySuccess() {
  toast.success("Success !", {
    position: "top-right",
    autoClose: 3000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
  });
}

function notifyError(error) {
  toast.error(error || "Request Error!", {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
  });
}
