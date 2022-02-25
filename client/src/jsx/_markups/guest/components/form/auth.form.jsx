import { useEffect, useState } from "react";
import { Form, Formik } from "formik";
import { GoogleLogin } from "react-google-login";
import { Link } from "react-router-dom";
import { FormControl, Alert } from "react-bootstrap";

// HELPERS
import { routeMap } from "../../routes";

// HOOKS
import { useDispatch } from "react-redux";
import { useTranslation } from "react-i18next";
import useServiceContextHook from "../../../../_hooks/service.context.hook";

// CONSTANTS
import _constants from "../../../../_constants";
// ASSETS
import logo_black from "../../app-assets/images/logo/logo-black.png";
import { objectToQuery } from "../../../../_helpers/utils.helper";
import { notify } from "../../../../_helpers/notify";
import { log } from "../../../../_helpers/log";
import { toast } from "react-toastify";
const { NOTICE, SESSION } = _constants;

// RESET---------------------------------------------------------
function ChangePassword({ token, old_password = false }) {
  const {
    services: { auth },
    history,
    location,
  } = useServiceContextHook();

  return (
    <Formik
      initialValues={{
        new_password: "",
        repeat_password: "",
        ...(old_password && { old_password: "" }),
      }}
      validate={(values) => {
        const errors = {};

        if (!token) {
          errors.token = "Token is missing or invalid";
        }

        if (old_password && !values.old_password) {
          errors.old_password = "Old password is required";
        }
        if (!values.new_password) {
          errors.new_password = "New password field is required";
        }
        if (!values.repeat_password) {
          errors.repeat_password = "Verify password field is required";
        }
        if (values.repeat_password !== values?.new_password) {
          errors.repeat_password = "Password mismatch";
        }
        return errors;
      }}
      onSubmit={async (values, { setSubmitting }) => {
        try {
          setSubmitting(true);
          let { new_password, old_password } = values;
          let response = await auth.changePassword({
            new_password,
            old_password,
            token,
          });
          const { data, error, message } = response;
          if (!data)
            throw new Error(
              error?.message || message || "Could not complete request"
            );

          if (data.status === true) {
            notify("Password has been changed");
            history.push(
              location?.state && location?.state?.from
                ? location?.state?.from
                : routeMap.home
            );
          }
        } catch (error) {
          notify(error.message, "error");
          // console.error(error);
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
        <div className="">
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

          <section>
            <div className="container" style={{ paddingTop: 60 }}>
              <div className="row p-5" data-wow-delay="0.2s">
                <div className="col-12 col-md-6 mx-auto wow animate__animated fadeInDown">
                  <div className="h3 text-center">Set your Password</div>
                  <div>
                    {errors?.token && touched?.token && (
                      <Alert variant="danger"> {errors?.token}</Alert>
                    )}
                  </div>

                  <form onSubmit={handleSubmit}>
                    {old_password ? (
                      <div className="mb-3">
                        <label className="form-label" htmlFor="old_password">
                          Old Password
                        </label>
                        <input
                          className="form-control"
                          id="old_password"
                          name="old_password"
                          type="password"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          defaultValue={values.old_password}
                        />
                        <small className="text-danger">
                          {errors.old_password &&
                            touched.old_password &&
                            errors.old_password}
                        </small>
                      </div>
                    ) : null}
                    <div className="mb-3">
                      <label className="form-label" htmlFor="new_password">
                        Password
                      </label>
                      <input
                        className="form-control"
                        id="new_password"
                        name="new_password"
                        type="password"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        defaultValue={values.new_password}
                      />
                      <small className="text-danger">
                        {errors.new_password &&
                          touched.new_password &&
                          errors.new_password}
                      </small>
                    </div>

                    <div className="mb-4">
                      <label className="form-label" htmlFor="repeat_password">
                        Verify password
                      </label>
                      <input
                        className="form-control"
                        id="repeat_password"
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

                    <div className="mb-3">
                      <button
                        type="submit"
                        className="btn btn-primary d-block w-100"
                        disabled={isSubmitting || Object.keys(errors)?.length}
                      >
                        {" "}
                        {!isSubmitting ? "Change Password" : "Working..."}
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
}

// LOGIN---------------------------------------------------------
function Login() {
  const {
    services: { auth },
    history,
  } = useServiceContextHook();

  const { t } = useTranslation();
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState();

  
  /**
   * @description login user using Google OAuth
   * @param {Object} payload
   * @returns
   */
  async function loginWithGoogle(payload) {
    try {
      setIsLoading(true);
      let response = await auth.loginWithGoogle(payload);

      const { data, message } = response;

      if (data) {
        if (data?.token) {
          // login
          notify("Login Successfully", "success");
          dispatch(log({ type: SESSION.LOGIN, data }));
        } else {
          if (data?.reason) {
            switch (data?.reason) {
              case "unverified": {
                const query = objectToQuery({
                    email: data?.email,
                    from: window.location.href,
                  }),
                  pathname = `${routeMap?.register}${query}`;
                return (window.location.href = pathname);
              }
              default: {
                // Move to the sendOTP page
                const query = objectToQuery({
                    user_d: data?.user_id,
                    from: window.location.href,
                  }),
                  pathname = `${routeMap?.verifyOTP}${query}`;
                return (window.location.href = pathname);
              }
            }
          }
        }
      } else throw new Error(message || "Unknown error");
    } catch (err) {
      console.error({ err });
      notify(err?.message, "error");
    } finally {
      setIsLoading(false);
    }
  }

  return (
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

          const { data, message } = response;

          if (data) {
            if (data?.token) {
              // login
              notify("Login Successfully", "success");
              dispatch(log({ type: SESSION.LOGIN, data }));
            } else {
              if (data?.reason) {
                switch (data?.reason) {
                  case "unverified": {
                    const query = objectToQuery({
                        email: values?.email,
                        from: window.location.href,
                      }),
                      pathname = `${routeMap?.register}${query}`;
                    return (window.location.href = pathname);
                    // history.push({
                    //   pathname,
                    //   // state: { from: window.location.href },
                    // });
                  }
                  default: {
                    // Move to the sendOTP page
                    const query = objectToQuery({
                        user_d: data?.user_id,
                        from: window.location.href,
                      }),
                      pathname = `${routeMap?.verifyOTP}${query}`;
                    return (window.location.href = pathname);
                    // history.push({
                    //   pathname: `${routeMap?.verifyOTP}?user_id=${data?.user_id}`,
                    //   state: {
                    //     from: window.location.href,
                    //   },
                    // });
                  }
                }
              }
            }
          } else throw new Error(message || "Unknown error");
        } catch (e) {
          console.error({ e });
          notify(e?.message, "error");
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
                    <img
                      src={logo_black}
                      alt=""
                      className="mx-auto w-50 d-flex"
                    />
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
                          <Link className="fp--1" to={routeMap.forgot}>
                            {t("Forgot Password")}
                          </Link>
                        </div>
                      </div>

                      <div className="mb-3">
                        <button
                          type="submit"
                          disabled={isSubmitting || isLoading}
                          className="btn btn_signup d-block w-100"
                        >
                          {!isSubmitting ? t("Login") : t("Submitting...")}
                        </button>
                      </div>
                      <div className="mb-3">
                        <GoogleLogin
                          disabled={isLoading}
                          clientId="861789995176-i4kkc6sjivam84fbn5ki9d9ollrcou0g.apps.googleusercontent.com"
                          buttonText={t("Sign in With Google")}
                          cookiePolicy={"single_host_origin"}
                          onSuccess={(data) => {
                            loginWithGoogle(data);
                          }}
                          onFailure={(data) => {
                            console.log(data);
                            notify(
                              `Cannot reach google service right now! Try again later.`,
                              "error"
                            );
                          }}
                        />
                      </div>

                      <div className="mb-4 text-center">
                        <Link className="login_link" to={routeMap?.register}>
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
  );
}

function ForgotPassword() {
  const {
    services: { auth },
  } = useServiceContextHook();

  const { t } = useTranslation();

  return (
    <Formik
      initialValues={{ email: "" }}
      validate={(values) => {
        const errors = {};

        if (!values.email) {
          errors.email = t("Email is required");
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        ) {
          errors.email = t("Invalid email address");
        }
        return errors;
      }}
      onSubmit={async (values, { setSubmitting }) => {
        setSubmitting(true);
        try {
          const payload = {
            email: values?.email,
          };

          let response = await auth.requestPasswordChange(payload);

          const { data, message } = response;

          if (data) {
            toast.success(data.message);
          } else throw new Error(message || "Unknown error");
        } catch (e) {
          console.error({ e });
          notify(e?.message, "error");
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
      }) => (
        // <Form>
        <div className="content">
          <section id="mainTop">
            <div className="container">
              <div className="row">
                <div className="col-12">
                  <h3
                    className="wow animate__animated fadeInDown"
                    data-wow-delay="0.3s"
                  >
                    {t("Forgot password")}
                  </h3>
                </div>
              </div>
            </div>
          </section>
          <section id="join">
            <div className="container">
              <div className="row  wow fadeInUp" data-wow-delay="0.2s">
                <div className="col-12 col-md-6 mx-auto join-row wow animate__animated fadeInDown">
                  <img
                    src={logo_black}
                    alt=""
                    className="mx-auto w-50 d-flex"
                  />
                  {/* <div className="login_p">
                      <p>{t("Please enter your login details")}</p>
                    </div> */}
                  <Form id="signUp" onSubmit={handleSubmit}>
                    <hr className="join-hr" />
                    <div className="mb-4">
                      <label className="form-label" htmlFor="coin-Username">
                        {t("Email")}
                      </label>
                      <FormControl
                        type="email"
                        id="coin-Username"
                        defaultValue={values?.password}
                        name="email"
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                      <small className="text-danger">
                        {errors.email && touched.email && errors.email}
                      </small>
                    </div>
                    <div className="row justify-content-between mb-3"></div>

                    <div className="mb-3">
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="btn btn_signup d-block w-100"
                      >
                        {" "}
                        {!isSubmitting ? t("Reset") : t("Submitting...")}
                      </button>
                    </div>
                  </Form>
                </div>
              </div>
            </div>
          </section>
        </div>
      )}
    </Formik>
  );
}

function Register() {
  const {
    services: { auth },
    history,
    appURL,
    UIColors,
  } = useServiceContextHook();
  const dispatch = useDispatch();

  const { t } = useTranslation();
  // const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState();

  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const invite_code = urlParams.get("invite_code");

  async function registerWithGoogle(payload) {
    try {
      setIsLoading(true);
      let response = await auth.registerWithGoogle(payload);

      const { error, data, message } = response;
      if (!data)
        throw new Error(
          error.message || message || "Error creating user account"
        );

      notify("Login Successfully", "success");
      dispatch(log({ type: SESSION.LOGIN, data }));
    } catch (err) {
      console.error({ err });
      notify(err?.message, "error");
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
        repeat_password: "",
        invite_code: invite_code,
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
          errors.termCondition = t(
            "You need to accept our Corris Terms and Conditions"
          );
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
          const { error, data, message } = response;

          if (error || !data) throw new Error(error.message || message);
          let query = objectToQuery({
            email: values?.email,
          });
          history?.push(`${routeMap?.register}${query}`);
        } catch (e) {
          notify(e?.message, "error");
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
                      {t("Register")}
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
                      {t(
                        "Please make sure the address of the site you visited matches the one below."
                      )}
                    </small>
                    <span
                      style={{
                        display: "block",
                        textAlign: "center",
                        padding: 15,
                        borderRadius: 8,
                        fontSize: 12,
                        color: UIColors.primary,
                        background: "#f6f6f6",
                        fontWeight: "bold",
                      }}
                    >
                      {appURL}
                    </span>

                    <form
                      id="signUp"
                      onSubmit={handleSubmit}
                      style={{ marginTop: 20 }}
                    >
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
                          <li>
                            {" "}
                            {t("Including lowercase English (Confirm)")}{" "}
                          </li>
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
                          defaultValue={values.invite_code}
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
                              {t(
                                "I have read and accepted the Terms of Service."
                              )}
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
                          disabled={isSubmitting || isLoading}
                        >
                          {" "}
                          {!isSubmitting
                            ? t("Create an account")
                            : t("Creating account...")}
                        </button>
                      </div>

                      <div className="mb-3">
                        <GoogleLogin
                          clientId="861789995176-i4kkc6sjivam84fbn5ki9d9ollrcou0g.apps.googleusercontent.com"
                          buttonText={t("Sign up With Google")}
                          cookiePolicy={"single_host_origin"}
                          disabled={isLoading}
                          onSuccess={(data) => {
                            registerWithGoogle(data);
                          }}
                          onFailure={(err) => {
                            console.error(err);
                            notify(
                              "Cannot reach google login right now! Try again later",
                              "error"
                            );
                          }}
                        />
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

const AuthForm = Object.assign(Login, {
  ChangePassword,
  Register,
  ForgotPassword,
});
export default AuthForm;
