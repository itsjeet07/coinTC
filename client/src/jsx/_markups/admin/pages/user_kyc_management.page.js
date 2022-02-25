import { Table } from "react-bootstrap";
import { useEffect, useState } from "react";
import TableGenerator from "../components/tableGenerator.component";
import { Switch } from "@mui/material";
import Moment from "react-moment";
import { useTranslation } from "react-i18next";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
// COMPONENTS
import PageTitle from "../layouts/PageTitle";

// CONSTANTS
import { SERVICE } from "../../../_constants";

// HOOKS
import useServiceContextHook from "../../../_hooks/service.context.hook";

function ToggleStatus({ row, type }) {
  const key = String(type)?.toLowerCase();
  const { t } = useTranslation();
  const {
    services: { kyc: kycService },
  } = useServiceContextHook();
  const [status, setStatus] = useState(row?.kyc[key]?.status);

  const KYCStatus = () =>
    String(status)?.toLowerCase() === "accepted" ? true : false;

  async function handleChange({ target }) {
    try {
      const newStatus = target?.checked ? "ACCEPTED" : "PENDING";

      let { data, error, message } = await kycService?.updateByUserAndType(row?.user_id, type, {
        status: newStatus,
      });
      if (!data) throw new Error(error?.message || message || `Error updating KYC Type`);

      notifySuccess("Changes saved");
      setStatus(newStatus);
    } catch (err) {
      console.log(err);
      notifyError(err.message);
    }
  }

  return (
    <>
      <small className="d-flex" style={{ gap: 10, alignItems: "center" }}>
        <Switch
          color={"default"}
          name={row?.id}
          onChange={handleChange}
          inputProps={{ "aria-label": "controlled" }}
          checked={KYCStatus()}
        />
        {KYCStatus() ? (
          <small className="badge badge-success text-white">
            <i className="fa fa-check-circle text-white mr-2" />
            {t("completed")}
          </small>
        ) : (
          <small className="badge badge-warning text-white">
            <i className="fa fa-circle text-white mr-2" />
            {t("pending")}
          </small>
        )}
      </small>
      {/* {row?.kyc && row?.kyc[key]?.status === "ACCEPTED" ? "Done" : "Pending"} */}
    </>
  );
}

function UserKYCMgmt() {
  const {
    services: { kyc },
    useService,
  } = useServiceContextHook();
  const { t } = useTranslation();

  let service = useService({
    [SERVICE?.FINDBYID]: kyc.findByID,
    [SERVICE?.UPDATEBYID]: kyc.updateByID,
    [SERVICE?.REMOVEBYID]: kyc.removeByID,
    [SERVICE?.FIND]: kyc.find,
  });

  const { dispatchRequest, retryDispatch } = service;

  useEffect(() => {
    dispatchRequest({
      type: SERVICE?.FIND,
      payload: {
        sudo: true,
        // fake: true,
      },
      toast: { success: notifySuccess, error: notifyError },
    });
  }, []);

  return (
    <>
      <PageTitle activeMenu="KYC" motherMenu="User management" />
      <header
        className="mb-4 d-flex justify-content-between"
        style={{ flexWrap: "wrap" }}
      >
        <h3>{t("KYC List")}</h3>
        <button className="btn" onClick={() => retryDispatch(SERVICE.FIND)}>
          {/* <i className="fa fa-arrow mr-2" /> */}
          {t("Refresh")}
        </button>
      </header>

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
            "security_password",
            "email_verification",
            "sms_verification",
            "google_auth",
            "id_verification",
            "security_level",
            "media",
          ]}
          transformers={{
            email: ({ row }) => row?.user?.email,
            security_level: ({ row }) => {
              let googleAuth =
                row?.kyc?.google_auth &&
                row?.kyc?.google_auth.status == "ACCEPTED" &&
                4;
              let sms =
                row?.kyc?.sms && row?.kyc?.sms.status == "ACCEPTED" && 3;
              let email =
                row?.kyc?.email && row?.kyc?.email.status == "ACCEPTED" && 2;
              let all = googleAuth && sms && email && 5;
              let result = all || googleAuth || sms || email || 1;

              return result > 1 ? (
                <small className="badge badge-success text-white">
                  {result}
                </small>
              ) : (
                <small className="badge badge-danger text-white">
                  {result}
                </small>
              );
            },
            security_password: ({ row }) =>
              row?.user.active ? "Done" : "Pending",
            email_verification: ({ row }) => {
              return "email" in row?.kyc ? (
                <ToggleStatus type="EMAIL" row={row} />
              ) : (
                "--"
              );
            },
            sms_verification: ({ row }) =>
              "sms" in row?.kyc ? <ToggleStatus type="SMS" row={row} /> : "--",
            google_auth: ({ row }) =>
              "google_auth" in row?.kyc ? (
                <ToggleStatus type="GOOGLE_AUTH" row={row} />
              ) : (
                "--"
              ),
            id_verification: ({ row }) =>
              "id" in row?.kyc ? <ToggleStatus type="ID" row={row} /> : "--",
            date: ({ row }) => {
              return <Moment format="YYYY/MM/DD" date={row?.createdAt} />;
            },
            media: ({ row }) => {
              console.log(row)
            }
          }}
        />
      </>
    </>
  );
}

function KYCHistoryTable() {
  const chackbox = document.querySelectorAll(".user_permission_single input");
  const motherChackBox = document.querySelector(".user_permission input");
  // console.log(document.querySelectorAll(".publish_review input")[0].checked);
  const checkboxFun = (type) => {
    for (let i = 0; i < chackbox.length; i++) {
      const element = chackbox[i];
      if (type === "all") {
        if (motherChackBox.checked) {
          element.checked = true;
        } else {
          element.checked = false;
        }
      } else {
        if (!element.checked) {
          motherChackBox.checked = false;
          break;
        } else {
          motherChackBox.checked = true;
        }
      }
    }
  };

  const check = (i) => (
    <div className={`custom-control custom-checkbox ml-2`}>
      <input
        type="checkbox"
        className="custom-control-input "
        id={`checkAll_user_permission_${i}`}
        required=""
        onClick={() => checkboxFun()}
      />
      <label
        className="custom-control-label"
        htmlFor={`checkAll_user_permission_${i}`}
      ></label>
    </div>
  );

  const action = (
    <div className="d-flex" style={{ gap: 20 }}>
      <Link to="">
        <span className="themify-glyph-29"></span> Edit
      </Link>
      <Link to="">
        <span className="themify-glyph-165"></span> Delete
      </Link>
    </div>
  );
  return (
    <>
      <Table responsive hover size="sm">
        <thead>
          <tr>
            <th className="user_permission">
              <div className="custom-control custom-checkbox mx-2">
                <input
                  type="checkbox"
                  className="custom-control-input"
                  id="checkAll_user_permission_all"
                  onClick={() => checkboxFun("all")}
                />
                <label
                  className="custom-control-label"
                  htmlFor="checkAll_user_permission_all"
                ></label>
              </div>
            </th>
            <th>Category</th>
            <th className="pl-5 width200">Email</th>
            <th className="pl-5 width200">Phone number</th>
            <th className="pl-5 width200">Status</th>
            <th className="pl-5 ">Date</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody id="customers">
          <tr className="btn-reveal-trigger">
            <td className="user_permission_single">{check(1)}</td>
            <td className="py-2">preethiPC</td>
            <td className="py-3 pl-5 width200">preethipc@yopmail.com</td>
            <td className="py-3 pl-5 width200"> (+123) 190 456789</td>
            <td className="py-3 pl-5 width200">Approved</td>
            <td className="py-3 pl-5">02-09-2021 11:56:28</td>

            <td>{action}</td>
          </tr>
        </tbody>
      </Table>
    </>
  );
}

export default UserKYCMgmt;
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
