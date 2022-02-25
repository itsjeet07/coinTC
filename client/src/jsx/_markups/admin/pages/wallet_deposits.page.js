import { Card, Row, Col, Button, Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import PageTitle from "../layouts/PageTitle";
import Moment from "react-moment";

import { useEffect } from "react";
// CONSTANTS
import { SERVICE } from "../../../_constants";

import useToggler from "../../../_hooks/toggler.hook";
import TableGenerator from "../components/tableGenerator.component";

import { useTranslation } from 'react-i18next'

function Deposits({ services, useService }) {
  const { transaction } = services;
  const { t } = useTranslation()
  let service = useService({
    [SERVICE?.BULK_RETRIEVE]: transaction.find,
  });
  const { dispatchRequest } = service;

  useEffect(() => {
    dispatchRequest({
      type: SERVICE?.BULK_RETRIEVE,
      payload: {
        type: "deposits",
        fake: true,
        sudo: true,
        "filter[type]": "deposit",
      },
    });
  }, []);

  return (
    <>
      <PageTitle activeMenu="Deposits" motherMenu="Wallet management" />
      <header className="mb-4">
        <h3>{t("Deposits List")}</h3>
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

      <div style={{ marginBottom: 60 }}>
        <DepositsHistoryTable {...{ service }} />
      </div>
    </>
  );
}
function DepositsHistoryTable({ service }) {
  return (
    <>
      <TableGenerator
        {...{ service }}
        mapping={{
          id: "USER ID",
          createdAt: "joined",
        }}
        omit="*"
        extras={[
          "email",
          "username",
          "type",
          "currency",
          "value",
          "status",
          "date",
          // "action",
        ]}
        transformers={{
          email: ({ row }) => row?.user?.email,
          username: ({ row }) => row?.user?.profile?.pname,
          type: ({ row }) => (row?.user.active ? "Done" : "Pending"),
          currency: ({ row }) => row?.currency,
          value: ({ row }) =>row?.amount,
          status: ({ row }) => row?.status,
          date: ({ row }) => {
            return <Moment format="YYYY/MM/DD" date={row?.createdAt} />;
          },
        }}
      />
    </>
  );
}

export default Deposits;

/* <tr className="btn-reveal-trigger">
            <td className="user_permission_single">{check(1)}</td>
            <td className="py-2">wealwinsss</td>
            <td className="py-3 pl-5 width200">Fiat</td>
            <td className="py-3 pl-5 width200">USDT</td>
            <td className="py-3 pl-5 width200">10</td>
            <td className="py-3 pl-5 width200">Completed</td>
            <td className="py-3 pl-5">02-09-2021 11:56:28</td>
            <td>{action}</td>
          </tr> */
