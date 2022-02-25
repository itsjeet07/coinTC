import { Row, Col, Button } from "react-bootstrap";
import { useEffect, useState, Suspense, lazy } from "react";
import Moment from "react-moment";
import moment from "moment";
import { toast } from "react-toastify";

// COMPONENTS
import TableGenerator from "../components/tableGenerator.component";
import useServiceContextHook from "../../../_hooks/service.context.hook";
import IdenticonAvatar from "../components/identiconAvatar.component";

// CONSTANTS
import { SERVICE } from "../../../_constants";

function UserBalance() {
  const {
    services: { wallet },
    useService,
  } = useServiceContextHook();

  let service = useService({
    [SERVICE?.FIND]: wallet.find,
  });

  const { dispatchRequest } = service;

  useEffect(() => {
    dispatchRequest({
      type: SERVICE?.FIND,
      payload: {
        "order[updatedAt]": "DESC",
        "order[createdAt]": "DESC",
        fake: true,
        sudo: true,
        paranoid: false,
      },
      toast: { success: notifySuccess, error: notifyError },
    });

    // return wallet?.abort;
  }, []);

  return (
    <>
      {
        <Row>
          <Col>
            <TableGenerator
              {...{ service }}
              omit="*"
              extras={[
                "user",
                "currency",
                "account_balance",
                "available_balance",
              ]}
              transformers={{
                user: ({ row }) => (
                  <>
                    <div className="media d-flex align-items-center">
                      <div className="avatar avatar-xl mr-4">
                        <div className="rounded-circle overflow-hidden img-fluid">
                          <IdenticonAvatar size={30} alt="" id={row.user?.id} />
                        </div>
                      </div>

                      <div className="media-body">
                        <div className="mb-0 fs--1">
                          <span>{row?.user?.email || "--"}</span>
                        </div>
                        <div
                          className="d-flex align-items-center"
                          style={{ gap: 10, fontSize: 12 }}
                        >
                          Last updated:
                          <Moment withTitle format="MMM Do, Y hh:m A" trim>
                            {row?.updatedAt}
                          </Moment>
                        </div>
                      </div>
                    </div>
                  </>
                ),
                currency: ({ row }) => row?.currency || " Not specified",
                account_balance: ({ row }) =>
                  row?.account?.balance?.accountBalance || "",
                available_balance: ({ row }) =>
                  row?.account?.balance?.availableBalance || "",
              }}
            />
          </Col>
        </Row>
      }
    </>
  );
}

export default UserBalance;
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
