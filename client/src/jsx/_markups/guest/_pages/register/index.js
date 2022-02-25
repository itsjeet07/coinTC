import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { Formik } from "formik";
import { useSelector } from "react-redux";

import _constants from "../../../../_constants";
import { objectToQuery } from "../../../../_helpers/utils.helper";
import useQuery from "../../../../_hooks/query.hook";
import { useTranslation } from 'react-i18next'
import { notify } from "../../../../_helpers/notify";
export default function ({ services }) {
  const { t } = useTranslation()

  const session = useSelector((state) => state?.session);
  const { auth } = services;
  const query = useQuery();

  //   const dispatch = useDispatch();
  useEffect(() => {
    if (session?.user) window.location = "/";
  }, [session]);
  
  useEffect(() => {
    if (query && query?.email) setShowFeedback(true);
  }, [query]);

  const [showFeedback, setShowFeedback] = useState(false);

  return showFeedback ? (
    <Feedback services={services} />
  ) : (
    <Formik
      initialValues={{
        email: "",
        password: "",
        repeat_password: "",
        invite_code: "",
        termCondition: false,
      }}
      validate={(values) => {
        const errors = {};

        if (!values.email) {
          errors.email = t("Email is required");
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        ) {
          errors.email = t("Invalid email address");
        }

        if (!values.repeat_password) {
          errors.repeat_password = t("Verify password is required");
        }
        if (!values.password) {
          errors.password = t("Password is required");
        }

        if (values.repeat_password !== values?.password) {
          errors.repeat_password = t("Password mismatch");
        }
        if (!values.termCondition) {
          errors.termCondition = t("You need to accept our Corris Terms and Conditions")
        }

        return errors;
      }}
      onSubmit={async (values, { setSubmitting }) => {
        const payload = {
          email: values?.email,
          password: values?.password,
          repeat_password: values?.repeat_password,
          invite_code: values?.invite_code,
        };
        setSubmitting(true);

        try {
          let response = await auth.register(payload);
          console.log(response);
          // const {
          //   error,
          //   message,
          // } = response;

          // if (error) throw new Error(message);
          // let query = objectToQuery({
          //   email: values?.email
          // });
          // window.location.href += query;
          // if (data) {
          //   // redirect to feedback page
          //   setShowFeedback(true);
          // }
        } catch (e) {
          console.error({ e });
          notify(e?.message, 'error');
        } finally {
          setSubmitting(false);
        }
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
        <>
          <div className="content">
            <section id="mainTop">
              <div className="container">
                <div className="row">
                  <div className="col-12">
                    <h3
                      className="wow animate__animated fadeInDown"
                      data-wow-delay="0.3s"
                    >
                      {t("Join")}
                    </h3>
                  </div>
                </div>
              </div>
            </section>

            <section id="join">
              <div className="container">
                <div className="row" data-wow-delay="0.2s">
                  <div className="col-12 col-md-6 mx-auto join-row wow animate__animated fadeInDown">
                    <h4>{t("Join the membership")}</h4>
                    <small>
                      {t("Please make sure the address of the site you visited matches the one below.")}
                    </small>
                    <span>{"{}"}</span>
                    <form id="signUp" onSubmit={handleSubmit}>
                      <hr className="join-hr" />
                      <div className="mb-4">
                        <label className="form-label" htmlFor="coin-email">
                          {t("Email address")}
                        </label>
                        <input
                          className="form-control"
                          id="coin-email"
                          type="email"
                          name="email"
                          // placeholder="Email address"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          defaultValue={values?.email}
                        />
                        <small className="text-danger">
                          {errors.email && touched.email && errors.email}
                        </small>
                      </div>

                      <div className="mb-3">
                        <label className="form-label" htmlFor="coin-password">
                          {t("Password")}
                        </label>
                        <input
                          className="form-control"
                          id="coin-password"
                          name="password"
                          type="password"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          defaultValue={values.password}
                        />
                        <small className="text-danger">
                          {errors.password &&
                            touched.password &&
                            errors.password}
                        </small>
                      </div>

                      <div className="coin-password-required mb-3">
                        <ul>
                          <li> {t("Including lowercase English (Confirm)")} </li>
                          <li> {t("English capital letters included")} </li>
                          <li> {t("with numbers")} </li>
                          <li> {t("8 characters or more")} </li>
                        </ul>
                      </div>

                      <div className="mb-4">
                        <label
                          className="form-label"
                          htmlFor="coin-veri-password"
                        >
                          {t("Verify password")}
                        </label>
                        <input
                          className="form-control"
                          id="coin-veripassword"
                          name="repeat_password"
                          type="password"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          defaultValue={values.repeat_password}
                        />
                        <small className="text-danger">
                          {errors.repeat_password &&
                            touched.repeat_password &&
                            errors.repeat_password}
                        </small>
                      </div>

                      <div className="mb-4">
                        <label
                          className="form-label"
                          htmlFor="coin-invitation-code"
                        >
                          {t("Invitation code (Optional)")}
                        </label>
                        <input
                          className="form-control"
                          id="coin-invitation"
                          type="text"
                          name="invite_code"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.invite_code}
                        />
                      </div>

                      <div className="row justify-content-between mb-3">
                        <div className="col-auto">
                          <div className="form-check mb-0">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              id="coin-checked"
                              name="termCondition"
                              onChange={handleChange}
                              onBlur={handleBlur}
                              value={values.termCondition}
                            />

                            <label
                              className="form-check-label mb-0 read--1"
                              htmlFor="coin-checked"
                            >
                              {t("I have read and accepted the Terms of Service.")}
                            </label>
                            <br />
                            <small className="text-danger">
                              {errors.termCondition &&
                                touched.termCondition &&
                                errors.termCondition}
                            </small>
                          </div>
                        </div>
                        <div className="col-auto">
                          <a className="ct--1" href="#">
                            {t("Corris Terms and Conditions")}
                          </a>
                        </div>
                      </div>

                      <div className="mb-3">
                        <button
                          type="submit"
                          className="btn btn_signup d-block w-100"
                          disabled={isSubmitting}
                        >
                          {" "}
                          {!isSubmitting
                            ? t("Create an account")
                            : t("Creating account...")}
                        </button>
                      </div>

                      <div className="mb-4 text-center">
                        <Link className="login_link" to="/auth/login">
                          {" "}
                          {t("Already have an account? go to log in")}
                        </Link>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </>
      )}
    </Formik>
  );
}

function Feedback({ services }) {

  const { t } = useTranslation()

  const { auth } = services;
  const query = useQuery();

  async function resendConfirmationMail() {
    return await auth.resendConfirmationMail({
      email: query?.email,
    });
  }

  return (
    <div
      style={{
        minHeight: "50vh",
        padding: 10,
        marginTop: 100,
        display: "flex",
        justifyContent: "center",
      }}
    >
      <header className="text-center" style={{ position: "relative" }}>
        <h2 className="h3 font-weight-bold">{t("Confirm Account")}</h2>
        <p>
          {t("Confirm your account using the confirmation link sent to your registered email")}
        </p>
        <button onClick={() => resendConfirmationMail(query?.email)}>
          {t("Resend email")}
        </button>
      </header>
    </div>
  );
}