import React from "react";
import {
  Container,
  Row,
  Col,
  Form,
  Button,
  Div,
  Dropdown,
  Tabs,
  Tab,
  Sonnet,
  FormCheck,
} from "react-bootstrap";
import BootstrapSwitchButton from "bootstrap-switch-button-react";
import { toast } from "react-toastify";
import { Formik } from "formik";

import _actions from "../../../../_actions";
import _constants from "../../../../_constants";
import _services from "../../../../_services";
import useQuery from "../../../../_hooks/query.hook";
import { useSelector } from "react-redux";
import {} from "react-router";
import { createBrowserHistory } from "history";

const { NOTICE, REQUEST, SESSION } = _constants;

export const Resetpassword = ({ services, useService }) => {
  const { id, next } = useQuery();
  const session = useSelector((state) => state.session);
  const token = session.user.token;

  const history = createBrowserHistory();
  //   history.listen((location, action) => {
  //     // this is called whenever new locations come in
  //     // the action is POP, PUSH, or REPLACE
  //   });

  const { auth } = services;

  console.log("id", id);
  console.log("next", next);

  return (
    <Formik
      initialValues={{
        password: "",
        repeat_password: "",
      }}
      validate={(values) => {
        const errors = {};

        if (!values.password) {
          errors.password = "Password is required";
        }
        if (!values.repeat_password) {
          errors.repeat_password = "Verify password is required";
        }
        if (values.repeat_password !== values?.password) {
          errors.repeat_password = "Password mismatch";
        }
        return errors;
      }}
      onSubmit={async (values, actions) => {
        if (!token) {
          actions.setErrors({ repeat_password: "<id> is required" });
          actions.setSubmitting(false);
          return;
        }
        const payload = {
          password: values?.password,
        };

        auth
          .reset({ ...payload, token })
          .then(({ data }) => {
            if (data.status === true) {
              toast.success("Password has been changed");
              history.push("/");
            }
          })
          .catch(console.error)
          .finally(() => {
            actions.setSubmitting(false);
          });
      }}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
        /* and other goodies */
      }) => (
        <div className="content">
          <section id="mainTop">
            <div className="container">
              <div className="row">
                <div className="col-12">
                  <h3
                    className="wow animate__animated fadeInDown"
                    data-wow-delay="0.3s"
                  >
                    Reset Password
                  </h3>
                </div>
              </div>
            </div>
          </section>

          <section id="join">
            <div className="container">
              <div className="row" data-wow-delay="0.2s">
                <div className="col-12 col-md-6 mx-auto join-row wow animate__animated fadeInDown">
                  <h4>Reset your Password</h4>
                  {/* <p className="mb-5">
                                        A verification code has been sent to your email you entered.
                                        enter the code to proceed
                                    </p> */}

                  <form id="signUp" onSubmit={handleSubmit}>
                    <hr className="join-hr" />

                    <div className="mb-3">
                      <label className="form-label" for="coin-password">
                        Password
                      </label>
                      <input
                        className="form-control"
                        id="coin-password"
                        name="password"
                        type="password"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.password}
                      />
                      <small className="text-danger">
                        {errors.password && touched.password && errors.password}
                      </small>
                    </div>

                    <div className="mb-4">
                      <label className="form-label" for="coin-veri-password">
                        Verify password
                      </label>
                      <input
                        className="form-control"
                        id="coin-veripassword"
                        name="repeat_password"
                        type="password"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.repeat_password}
                      />
                      <small className="text-danger">
                        {errors.repeat_password &&
                          touched.repeat_password &&
                          errors.repeat_password}
                      </small>
                    </div>

                    <div className="mb-3">
                      <button
                        className="btn btn_signup d-block w-100"
                        disabled={isSubmitting}
                      >
                        {" "}
                        {!isSubmitting ? "Reset My Password" : "Submitting..."}
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </section>
        </div>
      )}
    </Formik>
  );
};

function log({ type = NOTICE.INFO, data = null }) {
  return { type, data };
}

function notifyError(error) {
  toast.error(error || "Request Error!", {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
  });
}
