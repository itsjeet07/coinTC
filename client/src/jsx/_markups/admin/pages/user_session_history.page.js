import { useEffect } from "react";
import Moment from "react-moment";
import moment from "moment";
// CONSTANTS
import { SERVICE } from "../../../_constants";
// COMPONENTS
import PageTitle from "../layouts/PageTitle";
import TableGenerator from "../components/tableGenerator.component";
import { useTranslation } from "react-i18next";
import useServiceContextHook from "../../../_hooks/service.context.hook";

function UserSessionHistory(props) {
  const { t } = useTranslation();
  return (
    <>
      <PageTitle activeMenu="Session History" motherMenu="User Management" />
      <div style={{ marginBottom: 60 }}>
        <header className="mb-4">
          <h3>{t("User login and logout history list")}</h3>
        </header>
        <UserSessionHistoryTable {...props} />
      </div>
    </>
  );
}
function UserSessionHistoryTable() {
  const {
    useService,
    services: { user },
  } = useServiceContextHook();
  let service = useService({
    [SERVICE?.FIND]: user.find,
  });
  const { dispatchRequest } = service;

  useEffect(() => {
    dispatchRequest({
      type: SERVICE?.FIND,
      payload: {
        sudo: true,
        // fake: true,
      },
    });
  }, []);

  return (
    <>
      <TableGenerator
        {...{ service }}
        omit="*"
        extras={["username", "duration", "last_seen", "login", "login_status"]}
        transformers={{
          username: ({ row }) => (
            <div className="d-flex align-items-center" style={{ gap: 10 }}>
              <span
                className={`fa fa-circle ${
                  row?.online ? "text-success" : "text-danger"
                }`}
                style={{ fontSize: 12 }}
              ></span>{" "}
              <div className="media d-flex align-items-center">
                <div className="media-body">
                  <div className="mb-0 fs--1">
                    {row?.profile?.pname || row?.profile?.lname || "Untitled"}
                  </div>
                </div>
              </div>
            </div>
          ),
          duration: ({ row }) => {
            let login_time = moment(row?.login_at);
            return (
              <>
                {login_time.isValid() ? (
                  <Moment
                    durationFromNow
                    date={login_time}
                    trim
                    // interval={30000}
                  ></Moment>
                ) : (
                  "--"
                )}
              </>
            );
          },
          last_seen: ({ row }) => (
            <div>
              {(row?.last_seen && (
                <Moment
                  format="MMM Do, Y hh:m A"
                  date={row?.last_seen}
                  trim
                ></Moment>
              )) ||
                "--"}
            </div>
          ),
          login: ({ row }) => {
            let login_time = moment(row?.login_at);
            console.log(row?.login_at);
            return (
              <div>
                {login_time.isValid() ? (
                  <Moment withTitle format="MMM Do, Y hh:m A" trim>
                    {login_time}
                  </Moment>
                ) : (
                  "--"
                )}
              </div>
            );
          },

          login_status: ({ row }) => {
            let now = moment();
            let login_at = moment(row?.login_at);
            let status = "--";
            if (login_at.isValid()) {
              status =
                now.minutes() - login_at.minutes() <= 30
                  ? "logged In"
                  : "not logged in";
            }
            return status;
          },
        }}
      />
    </>
  );
}

export default UserSessionHistory;
