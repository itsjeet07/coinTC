import React, { useEffect } from "react";
import { Form, FormControl } from "react-bootstrap";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import logo_black from "../../app-assets/images/logo/logo-black.png";
import { Formik } from "formik";
import { useDispatch, useSelector } from "react-redux";

import _constants from "../../../../_constants";

import { GoogleLogin } from "react-google-login";


import { useTranslation } from 'react-i18next'

const { NOTICE, SESSION } = _constants;

export default function Login({ history, services }) {

  const { t } = useTranslation()

  const session = useSelector((state) => state?.session);
  const { auth } = services;
  const dispatch = useDispatch();

  useEffect(() => {
    if (session?.user) window.location = "/";
  }, [session]);

  return (

    <>

      <Formik
        initialValues={{ email: "", password: "" }}
        validate={(values) => {
          const errors = {};

          if (!values.email) {
            errors.email = t("Email is required");
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          ) {
            errors.email = t("Invalid email address");
          }

          if (!values.password) {
            errors.password = t("Password is required");
          }
          return errors;
        }}


        onSubmit={async (values, { setSubmitting }) => {
          setSubmitting(true);
          try {
            const payload = {
              email: values?.email,
              password: values?.password,
              access_level: 1,
            };
            let response = await auth.login(payload);

            const { error, data, message } = response;
            if (error) throw new Error(message);

            if (data && data?.token) {
              // login
              toast.success("Login Successfully");
              dispatch(log({ type: SESSION.LOGIN, data }));
              history.push("/");
            } else {
              // Move to the sendOTP page
              window.location.href = `/verification/?id=${data?.id}`;
            }
          } catch (e) {
            console.error({ e });
            notifyError(e?.message);
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
                        {t("Login")}
                      </h3>
                    </div>
                  </div>
                </div>
              </section>

              <section id="join">
                <div className="container">
                  <div className="row  wow fadeInUp" data-wow-delay="0.2s">
                    <div className="col-12 col-md-6 mx-auto join-row wow animate__animated fadeInDown">
                      <img src={logo_black} alt="" className="mx-auto w-50 d-flex" />
                      <div className="login_p">
                        <p>{t("Please enter your login details")}</p>
                      </div>
                      <Form id="signUp" onSubmit={handleSubmit}>
                        <hr className="join-hr" />
                        <div className="mb-4">
                          <label className="form-label" htmlFor="coin-Username">
                            {t("Username")}
                          </label>
                          <FormControl
                            type="email"
                            id="coin-Username"
                            defaultValue={values?.email}
                            name="email"
                            onChange={handleChange}
                            onBlur={handleBlur}
                          />
                          <small className="text-danger">
                            {errors.email && touched.email && errors.email}
                          </small>
                        </div>

                        <div className="mb-3">
                          <label className="form-label" htmlFor="coin-password">
                            {t("Password")}
                          </label>
                          <FormControl
                            className="form-control"
                            id="coin-password"
                            type="password"
                            defaultValue={values?.password}
                            name="password"
                            onChange={handleChange}
                            onBlur={handleBlur}
                          />
                          <small className="text-danger">
                            {errors.password &&
                              touched.password &&
                              errors.password}
                          </small>
                        </div>

                        <div className="row justify-content-between mb-3">
                          <div className="col-auto">
                            <div className="form-check mb-0">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                id="coin-checked"
                              />
                              <label
                                className="form-check-label mb-0 rm--1"
                                htmlFor="coin-checked"
                              >
                                {t("Remember")}
                              </label>
                            </div>
                          </div>
                          <div className="col-auto">
                            <Link className="fp--1" to="/">
                              {" "}
                              {t("Forgot Password")} ?{" "}
                            </Link>
                          </div>
                        </div>

                        <div className="mb-3">
                          <button
                            type="submit"
                            disabled={isSubmitting}
                            className="btn btn_signup d-block w-100"
                          >
                            {" "}
                            {!isSubmitting ? t("Login") : t("Submitting...")}
                          </button>
                        </div>
                        <div className="mb-3">
                          <GoogleLogin
                            clientId="861789995176-i4kkc6sjivam84fbn5ki9d9ollrcou0g.apps.googleusercontent.com"
                            buttonText={t("Sign in With Google")}
                            cookiePolicy={'single_host_origin'}
                            onSuccess={(data) => { console.log(data) }}
                            onFailure={(data) => { console.log(data) }}
                          />
                        </div>

                        <div className="mb-4 text-center">
                          <Link className="login_link" to="/auth/registeregister">
                            {" "}
                            {t("Not registered yet? Create an Account")}
                          </Link>
                        </div>
                      </Form>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </>
        )}
      </Formik>
    </>
  );
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

function log({ type = NOTICE.INFO, data = null }) {
  return { type, data };
}
