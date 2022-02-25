import { Card, Row, Col, Button, Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import PageTitle from "../layouts/PageTitle";
import { toast } from "react-toastify";
// CONSTANTS
import { SERVICE } from "../../../_constants";
import { useEffect } from "react";
import TableGenerator from "../components/tableGenerator.component";
import Moment from "react-moment";
import useToggler from "../../../_hooks/toggler.hook";
import { Popper } from "@mui/core";
import { useTranslation } from 'react-i18next'
function AdvertsManagement({ services, useService }) {
  const { t } = useTranslation()
  const { user, advert } = services;

  let service = useService({
    [SERVICE?.RETRIEVE]: advert.findByID,
    [SERVICE?.BULK_RETRIEVE]: advert.find,
    [SERVICE?.UPDATE]: advert.updateByID,
    [SERVICE?.DROP]: advert.removeByID,
    [SERVICE?.CREATE]: advert.create,
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
        <h3>{t("Advertisements")}</h3>
      </header>
      <div style={{ marginBottom: 20, width: "100%" }}>
        <div className="input-group search-area right d-lg-inline-flex d-none">
          <input
            type="text"
            className="form-control"
            placeholder={t("Filter in record")}
          />
          {/* <div className="input-group-append">
              <span className="input-group-text">
                <Link to={"#"}>
                  <i className="themify-glyph-162"></i>
                </Link>
              </span>
            </div> */}
        </div>
      </div>

      <div style={{ marginBottom: 60 }}>
        <TableGenerator
          {...{ service }}
          omit="*"
          extras={[
            "creation_date",
            "id",
            "username",
            "trade_type",
            "currency_pair",
            "price_set",
            "order_limit",
            /*  "action", */
          ]}
          transformers={{
            creation_date: ({ row }) => {
              return row?.createdAt ? (
                <Moment format="YYYY/MM/DD" date={row?.createdAt} />
              ) : (
                ""
              );
            },
            id: ({ row }) => row?.id,
            username: ({ row }) =>
              row?.user ? row?.user?.profile?.pname : "Unknown",
            trade_type: ({ row }) => row?.type,
            currency_pair: ({ row }) => {
              return `${row?.crypto}/${row?.fiat}`;
            },
            price_set: ({ row }) => `${row?.price} - ${row?.fiat}`,
            order_limit: ({ row }) =>
              `${row?.min_order_qty} - ${row?.max_order_qty}`,
            action: function Action({ row }) {
              const {
                isOpen,
                onOpen: onPopoverOpen,
                onClose: onPopoverClose,
                toggledPayload: popOverTarget,
              } = useToggler();
              const handleClick = (event) => {
                alert("Gomand");
                // onPopoverOpen(popOverTarget ? null : event.currentTarget);
                // onPopoverOpen(popOverTarget ? null : event.target);
              };

              /* const handleClose = () => {
                        onPopoverClose(null);
                      }; */

              const open = Boolean(popOverTarget);
              const id = open ? row?.id : undefined;

              return (
                <div
                  style={{
                    display: "flex",
                    gap: 10,
                  }}
                >
                  <button
                    style={{
                      appearance: "none",
                      border: "none",
                      background: "none",
                      fontSize: 12,
                    }}
                    onClick={() =>
                      onOpenModal({ method: SERVICE?.UPDATE, payload: row })
                    }
                  >
                    <span className="themify-glyph-29"></span> Edit
                  </button>
                  {/* TODO: Delete user */}
                  <button
                    style={{
                      appearance: "none",
                      border: "none",
                      background: "none",
                      position: "relative",
                      fontSize: 12,
                    }}
                    aria-describedby={id}
                    variant="contained"
                    onClick={handleClick}
                  >
                    <span className="themify-glyph-165"></span> Delete
                  </button>

                  {id && (
                    <Popper id={id} open={isOpen} anchorEl={popOverTarget}>
                      <ul
                        className="bg-white shadow"
                        style={{
                          padding: 10,
                        }}
                      >
                        <li>
                          <a
                            href="#"
                            onClick={() =>
                              onOpenModal({
                                method: SERVICE?.REMOVE,
                                payload: { ...row, force: false },
                              })
                            }
                          >
                            <small>Delete</small>
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            onClick={() =>
                              onOpenModal({
                                method: SERVICE?.REMOVE,
                                payload: { ...row, force: true },
                              })
                            }
                          >
                            <small>Permanently delete</small>
                          </a>
                        </li>
                      </ul>
                    </Popper>
                  )}
                </div>
              );
            },
          }}
        />
      </div>
    </>
  );
}

export default AdvertsManagement;

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
