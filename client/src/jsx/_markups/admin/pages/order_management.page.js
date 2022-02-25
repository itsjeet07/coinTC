import { Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import PageTitle from "../layouts/PageTitle";
// CONSTANTS
import { SERVICE } from "../../../_constants";
import useToggler from "../../../_hooks/toggler.hook";
import { useEffect } from "react";
import TableGenerator from "../components/tableGenerator.component";
import { toast } from "react-toastify";
import Moment from "react-moment";
import { useTranslation } from 'react-i18next'
function OrdersManagement({ services, useService }) {
  const { user, order } = services;
  const { t } = useTranslation()
  let service = useService({
    [SERVICE?.RETRIEVE]: order.findByID,
    [SERVICE?.UPDATE]: order.updateByID,
    [SERVICE?.DROP]: order.removeByID,
    [SERVICE?.BULK_RETRIEVE]: order.find,
  });

  const { dispatchRequest } = service;

  const {
    isOpen: isModalOpen,
    onOpen: onOpenModal,
    onClose: onModalClose,
    toggledPayload: modalPayload,
  } = useToggler();

  useEffect(() => {
    dispatchRequest({
      type: SERVICE?.BULK_RETRIEVE,
      payload: {
        fake: true,
        sudo: true,
        "filter[type]": "sell",
      },
      toast: { success: notifySuccess, error: notifyError },
    });
  }, []);

  return (
    <>
      <PageTitle activeMenu="" motherMenu="Advert management" />
      <header className="mb-4">
        <h3>{t("Orders")}</h3>
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
        <TableGenerator
          {...{ service }}
          omit="*"
          extras={[
            "id",
            "username",
            "payment",
            "time_remaining (mins)",
            "type",
            "status",
            "total",
            "date",
          ]}
          transformers={{
            id: ({ row }) => row?.id,
            username: ({ row }) => (row?.user ? row?.user?.profile?.pname : ""),
            type: ({ row }) => row?.type || "",
            payment: ({ row }) =>
              row?.advert?.payment_methods &&
              row?.advert?.payment_methods?.join(", "),
            "time_remaining (mins)": ({ row }) =>
              row?.advert.payment_ttl_mins || "",
            status: ({ row }) => row?.status || "",
            date: ({ row }) => (
              <Moment format="YYYY/MM/DD" date={row?.archivedAt} />
            ),
          }}
        />
      </div>
    </>
  );
}

export default OrdersManagement;

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
