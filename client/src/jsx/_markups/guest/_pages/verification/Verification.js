import React, { useEffect } from "react";
import { toast } from "react-toastify";
import { Formik } from "formik";
import { useSelector } from "react-redux";

import _actions from "../../../../_actions";
import _constants from "../../../../_constants";
import _services from "../../../../_services";
import useQuery from "../../../../_hooks/query.hook";
const { NOTICE } = _constants;

export const Verification = ({ services }) => {
  const session = useSelector((state) => state?.session);
  const { id, next } = useQuery();
  const { auth } = services;

  useEffect(() => {
    if (session) window.location = "/";
  }, [session]);

  return (
    <Formik
      initialValues={{ otp: "" }}
      validate={(values) => {
        const errors = {};

        if (!values.otp) {
          errors.otp = "OTP is required";
        }
        return errors;
      }}
      onSubmit={(values, actions) => {
        if (!id) {
          actions.setErrors({ otp: "<id> is required" });
          actions.setSubmitting(false);
          return;
        }
        auth
          .verify_otp({ ...values, id })
          .then(({ data }) => {
            next && (window.location.href = next);
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
                    Confirm
                  </h3>
                </div>
              </div>
            </div>
          </section>

          <section id="join">
            <div className="container">
              <div className="row" data-wow-delay="0.2s">
                <div className="col-12 col-md-6 mx-auto join-row wow animate__animated fadeInDown">
                  <h4>Confirm OTP</h4>
                  <p className="mb-5">
                    A verification code has been sent to your email you entered.
                    enter the code to proceed
                  </p>

                  <form id="signUp" onSubmit={handleSubmit}>
                    <hr className="join-hr" />
                    <div className="mb-4 mt-4">
                      <label className="form-label" htmlFor="coin-email">
                        Enter OTP
                      </label>
                      {/* <input className="form-control" id="coin-email" type="email" name="email" onChange={handleChange}
                                                onBlur={handleBlur} value={values.email} /> */}
                      <input
                        className="form-control"
                        id="coin-otp"
                        name="otp"
                        type="text"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.otp}
                      />
                      <small className="text-danger">
                        {errors.otp && touched.otp && errors.otp}
                      </small>
                    </div>

                    <div className="mb-4">
                      <ul className="valid-time my-5">
                        <li>Valid time</li>
                        <li>03:00</li>
                      </ul>
                    </div>

                    <div className="mb-3">
                      <button
                        className="btn btn_signup d-block w-100"
                        disabled={isSubmitting}
                      >
                        {" "}
                        {!isSubmitting ? "Submit" : "Submitting..."}
                      </button>
                    </div>

                    <div className="mb-4 text-center">
                      <a className="login_link" href="#">
                        Already have an account? go to log in
                      </a>
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

