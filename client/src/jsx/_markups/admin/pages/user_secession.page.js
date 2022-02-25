import PageTitle from "../layouts/PageTitle";
import { useEffect, useState } from "react";
import Moment from "react-moment";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import Loader from "../../_shared/component/loader.component";

// CONSTANTS
import { SERVICE } from "../../../_constants";
import { useTranslation } from "react-i18next";
// COMPONENTS
import _components from "../components";
import TableGenerator from "../components/tableGenerator.component";
// import { ModalForm } from "../components/modalForm.component.jsx";

const { IdenticonAvatar } = _components;

function UserSecessions(props) {
  const { t } = useTranslation();
  return (
    <>
      <PageTitle activeMenu="Users secession" motherMenu="User Management" />
      {/* Details of Secession Request */}
      <div style={{ marginBottom: 60 }}>
        <header className="mb-4">
          <h3>{t("Details of Secession Request")}</h3>
        </header>
        <SecessionRequestTable {...props} />
      </div>

      {/* Secession Upon Approval */}
      <div style={{ marginBottom: 60 }}>
        <header className="mb-4">
          <h3>{t("Secession Upon Approval")}</h3>
        </header>
        <ApprovedSecessionTable {...props} />
      </div>

      {/* List of Secession Members */}
      {/*  <div style={{ marginBottom: 60 }}>
        <header className="mb-4">
          <h3>List of Secession Members</h3>
        </header>
        <PastSecessionListTable
          {...props}
          {...{ notifySuccess, notifyError }}
        />
      </div> */}
    </>
  );
}
export default UserSecessions;

function SecessionRequestTable({ services, useService }) {
  const { secession } = services;
  const { t } = useTranslation();
  let secessionService = useService({
    [SERVICE?.FIND]: secession.find,
  });

  // Fetch data
  useEffect(() => {
    secessionService.dispatchRequest({
      type: [SERVICE?.FIND],
      payload: {
        "order[updatedAt]": "DESC",
        "order[createdAt]": "DESC",
        "options[paranoid]": false,
        sudo: true,
        fake: true,
        include: ["user"],
      },
      toast: { success: notifySuccess, error: notifyError },
    });

    // return secession?.abort;
  }, []);

  /**
   * @function StatusSelector
   * @param {Object} props
   * @param {Object} props.row
   * @returns
   */
  function StatusSelector({ row }) {
    const [status, setStatus] = useState(String(row?.status)?.toLowerCase());

    async function onChangeStatus(status) {
      try {
        // Change secession status
        let id = row?.id;
        let response = await secession.updateByID(id, { status });
        let { data, error, message } = response;
        // console.log(response);
        if ((data && !data?.status) || error)
          throw new Error(
            error?.message || message || t("Cannot complete operation")
          );
        else {
          setStatus(status);
          notifySuccess(t("Done"));
        }
      } catch (err) {
        console.error(err);
        notifyError(err.message);
      }
    }
    return (
      <div className="d-flex" style={{ gap: 10 }}>
        <select
          disabled={secessionService?.isFetching}
          onChange={({ target }) => onChangeStatus(target.value)}
          value={status}
        >
          <option value="PENDING">{t("Pending")}</option>
          <option value="ACCEPTED">{t("Approve")}</option>
          <option value="DENIED">{t("Deny")}</option>
        </select>

        {secessionService?.isFetching ? (
          <Loader />
        ) : status == "pending" ? (
          <small className="badge badge-default text-white">
            <i className="fa fa-circle text-white mr-2" />
            pending
          </small>
        ) : status == "accepted" ? (
          <small className="badge badge-success text-white">
            <i className="fa fa-check-circle text-white mr-2" />
            {t("Accept")}
          </small>
        ) : (
          <small className="badge badge-danger text-white">
            <i className="fa fa-exclamation-triangle text-white mr-2" />
            {t("Deny")}
          </small>
        )}
        {/*  <small className="d-flex" style={{ gap: 10, alignItems: "center" }}>
          Denied
          <Switch
            color="default"
            onChange={onChangeApproval}
            name="permission"
            value={row?.permission}
            size="small"
          />
          Approved
        </small> */}
      </div>
    );
  }

  return (
    <>
      <TableGenerator
        {...{ service: secessionService }}
        omit="*"
        extras={["username", "email", "status"]}
        transformers={{
          username: ({ row }) => {
            return (
              <div className="media d-flex align-items-center">
                <div className="avatar avatar-xl mr-4">
                  <div className="rounded-circle overflow-hidden img-fluid">
                    <IdenticonAvatar size={30} alt="" id={row.user?.id} />
                  </div>
                </div>

                <div className="media-body">
                  <div className="mb-0 fs--1">
                    <Link to="/to_user_information">
                      {row?.user?.profile?.pname ||
                        row?.user?.profile?.lname ||
                        "--"}
                    </Link>
                  </div>
                  <div
                    className="d-flex align-items-center"
                    style={{ gap: 16, fontSize: 12 }}
                  >
                    <Moment withTitle format="MMM Do, Y hh:m A" trim>
                      {row?.createdAt}
                    </Moment>
                    {/*  <span>
                      <i
                        className="fa fa-star"
                        style={{ color: "#089248" }}
                        aria-hidden="true"
                      ></i>{" "}
                      2.5
                    </span> */}
                  </div>
                </div>
              </div>
            );
          },
          email: ({ row }) => {
            return <>{row?.user?.email}</>;
          },
          status: StatusSelector,
        }}
      />
    </>
  );
}

function ApprovedSecessionTable({ services, useService }) {
  const { secession } = services;

  let service = useService({
    [SERVICE?.FIND]: secession.find,
  });
  const { dispatchRequest } = service;

  useEffect(() => {
    dispatchRequest({
      type: [SERVICE?.FIND],
      payload: {
        "order[updatedAt]": "DESC",
        "order[createdAt]": "DESC",
        "options[paranoid]": false,
        "filter[status]": "ACCEPTED",
        sudo: true,
        fake: true,
      },
      toast: { success: notifySuccess, error: notifyError },
    });
    // return secession?.abort;
  }, []);
  /* 
  const action = (
    <div className="d-flex " style={{ gap: 20 }}>
      <Link to="#" className="themify-glyph-306"></Link>
      <Link to="#" className="themify-glyph-165"></Link>
    </div>
  ); */

  return (
    <>
      <TableGenerator
        {...{ service }}
        mapping={{
          id: "User ID",
        }}
        omit="*"
        extras={[
          "id",
          "description",
          "due_date",
          "approval_status",
          "approval_date",
        ]}
        transformers={{
          id: ({ row }) => row?.id,
          description: ({ row }) => row?.description,
          due_date: ({ row }) => (
            <Moment durationFromNow date={row?.due_date} trim></Moment>
          ),
          approval_status: ({ row }) => row?.status,
          approval_date: ({ row }) => (
            <Moment withTitle format="MMM Do, Y hh:m A" trim>
              {row?.approval_date}
            </Moment>
          ),
        }}
      />
    </>
  );
}

function PastSecessionListTable({ services, useService }) {
  const { secession } = services;

  let service = useService({
    [SERVICE?.BULK_RETRIEVE]: secession.find,
  });
  const { dispatchRequest } = service;

  useEffect(() => {
    dispatchRequest({
      type: [SERVICE?.BULK_RETRIEVE],
      payload: {
        "order[updatedAt]": "DESC",
        "order[createdAt]": "DESC",
        "options[paranoid]": false,
        "filter[status]": "accepted",
        sudo: true,
        fake: true,
      },
      toast: { success: notifySuccess, error: notifyError },
    });
  }, []);
  return (
    <>
      <TableGenerator
        {...{ service }}
        mapping={{
          id: "User ID",
        }}
        omit="*"
        extras={["user", "email", "last_invite_sent", "role"]}
        transformers={{
          user: ({ row }) => (
            <Link to="/to_user_information">
              <div className="media d-flex align-items-center">
                <div className="avatar avatar-xl mr-4">
                  <div className="">
                    <IdenticonAvatar size={30} alt="" id={row.id} />
                  </div>
                </div>
                <div className="media-body">
                  <h5 className="mb-0 fs--1">{row?.user?.pname}</h5>
                </div>
              </div>
            </Link>
          ),
          email: ({ row }) => row?.user?.email,
          last_invite_sent: ({ row }) => row?.user?.email,
          role: ({ row }) => (row?.user?.isAdmin ? "Administrator" : "Regular"),
        }}
      />
    </>
  );
}

function notifySuccess(message = "Success !") {
  toast.success(message, {
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
