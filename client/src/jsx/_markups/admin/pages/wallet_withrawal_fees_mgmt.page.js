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
function WithdrawalFees({ services, useService }) {
  const { t } = useTranslation()
  const {
    isOpen: isModalOpen,
    onOpen: onOpenModal,
    onClose: onModalClose,
  } = useToggler();

  return (
    <>
      <PageTitle activeMenu="Fees" motherMenu="Wallet management" />
      <header className="mb-4">
        <h3>{t("Fees management")}</h3>
      </header>

      <div style={{ marginBottom: 60 }}>
        <WithdrawalFeesSetting {...{ services, useService }} />
      </div>
    </>
  );
}
function WithdrawalFeesSetting({ services, useService }) {
  const { t } = useTranslation()
  return (
    <>
      <div
        style={{
          marginBottom: 60,
          display: "flex",
          flexDirection: "column",
          gap: 30,
        }}
      >
        <section className="d-flex justify-content-between" style={{ gap: 30 }}>
          <div className="">
            <h4 className="h5">{t("Withdrawal fee")}</h4>
            <small>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga
              modi consequuntur dolore eius fugiat velit. Odio voluptatem nobis
              eveniet dolorem deserunt odit corporis quibusdam doloremque
              quisquam, facilis beatae, suscipit neque.
            </small>
          </div>
          <div>
            <input
              type="text"
              placeholder="Amount"
              defaultValue={0}
              pattern="\d+"
              className="form-control form-control-sm"
            />
          </div>
        </section>
        <section className="d-flex justify-content-between" style={{ gap: 30 }}>
          <div className="">
            <h4 className="h5">{t("Transaction fee")}</h4>
            <small>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga
              modi consequuntur dolore eius fugiat velit. Odio voluptatem nobis
              eveniet dolorem deserunt odit corporis quibusdam doloremque
              quisquam, facilis beatae, suscipit neque.
            </small>
          </div>
          <div>
            <input
              type="text"
              placeholder="amount"
              defaultValue={0}
              pattern="\d+"
              className="form-control form-control-sm"
            />
          </div>
        </section>
        <section className="d-flex justify-content-between" style={{ gap: 30 }}>
          <div className="">
            <h4 className="h5">{t("Affiliate commission fee")}</h4>
            <small>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga
              modi consequuntur dolore eius fugiat velit. Odio voluptatem nobis
              eveniet dolorem deserunt odit corporis quibusdam doloremque
              quisquam, facilis beatae, suscipit neque.
            </small>
          </div>{" "}
          <div>
            <input
              type="text"
              placeholder="amount"
              defaultValue={0}
              pattern="\d+"
              className="form-control form-control-sm"
            />
          </div>
        </section>
      </div>
    </>
  );
}

export default WithdrawalFees;
