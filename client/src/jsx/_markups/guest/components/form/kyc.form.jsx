import { FormLabel, RadioGroup, Radio, FormControlLabel } from "@mui/material";
import { Formik, Form } from "formik";
import { useState, useEffect, useRef } from "react";
import { FormControl, Button } from "react-bootstrap";
import styled from "styled-components";
import { notify } from "../../../../_helpers/notify";
import useServiceContextHook from "../../../../_hooks/service.context.hook";
import PhoneNumber from "../input/PhoneNumber.component";
import FileUpload from "../input/FileUpload.component";
import UIColors from "../colors";
import { Cage, DecimalList, StyledSection } from "../styled.component";
const colors = {
  primary: "#38f",
  disabled: "#acacac",
};
const InlineInput = styled("div")`
  display: flex;
  border: 1px solid #acacac;
  &:focus,
  &:focus-within {
    box-shadow: 0 0 0px 2px ${colors.primary};
    border-color: ${colors.primary};
  }
  input {
    flex: 1 auto;
    padding: 8px;
    &:hover,
    &:focus {
      border: none;
      outline: none;
      box-shadow: none;
    }
  }
  button {
    border: none;
    color: ${colors.primary};
    font-weight: bold;
    &:disabled {
      opacity: 0.5;
      color: ${colors.disabled};
    }
    &:hover,
    &:focus {
      border: none;
      outline: none;
      box-shadow: none;
    }
    padding: 8px;
  }
`;

function ModifyProfile({ formData = {} }) {
  const {
    services: { profile },
  } = useServiceContextHook();

  const initialValues = {
    lname: formData?.lname || undefined,
    oname: formData?.oname || undefined,
    pname: formData?.pname || undefined,
    // country: formData?.country || "",
    gender: formData?.gender || undefined,
    date_of_birth: formData?.date_of_birth || undefined,
  };

  // function validate(values) {
  //   const errors = {};

  //   if (!values?.date_of_birth) {
  //     errors.dob = `Required field`;
  //   } else {
  //     if (!new Date(values?.date_of_birth)) errors.dob = `invalid date`;
  //   }

  //   if (!values?.lname) {
  //     errors.lname = `Required field`;
  //   } else {
  //     if (values?.lname.length < 2)
  //       errors.lname = `Must be at least (2) characters long`;
  //   }

  //   if (!values?.oname) {
  //     errors.oname = `Required field`;
  //   } else {
  //     if (values?.oname.length < 2)
  //       errors.oname = `Must be at least (2) characters long`;
  //   }

  //   if (!values?.pname) {
  //     errors.pname = `Required field`;
  //   } else {
  //     if (values?.pname.length < 2)
  //       errors.pname = `Must be at least (2) characters long`;
  //   }

  //   /*  if (!values?.country) {
  //     errors.country = `Required field`;
  //   } */

  //   return errors;
  // }
  async function onSubmit(values, { setSubmitting }) {
    try {
      console.log("onSubmit");
      console.log(values);
      let { data, error, message } = await profile.update(values);
      if (!data) throw new Error(error?.message || message);
      notify("Profile updated successfully!");
    } catch (err) {
      notify(err.message, "error");
    }
  }
  return (
    <Formik {...{ initialValues, onSubmit }}>
      {({
        values,
        isSubmitting,
        setFieldValue,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
      }) => (
        <form onSubmit={handleSubmit}>
          <div
            style={{
              display: "flex",
              gap: 10,
              flexDirection: "column",
              flex: "1",
            }}
          >
            {/* NICK NAME */}
            <label>Nickname</label>
            <FormControl
              placeholder="Nickname"
              onChange={handleChange}
              onBlur={handleBlur}
              defaultValue={values?.pname}
              // required
              name="pname"
              type="text"
            />

            {/* LAST NAME */}
            <label>Last name</label>
            <FormControl
              placeholder="Last name"
              onChange={handleChange}
              onBlur={handleBlur}
              defaultValue={values?.lname}
              // required
              name="lname"
              type="text"
            />
            <small className="text-danger">
              {errors && touched && errors.lname}
            </small>
            {/* Other names */}
            <label>Other names</label>
            <FormControl
              placeholder="Other names"
              onChange={handleChange}
              onBlur={handleBlur}
              defaultValue={values?.oname}
              // required
              name="oname"
              type="text"
            />
            <small className="text-danger">
              {errors && touched && errors.oname}
            </small>

            {/* DOB */}
            <label>Date of Birth (yyyy-mm-dd)</label>
            <FormControl
              placeholder="Date of Birth (yyyy-mm-dd)"
              max={new Date().toISOString().split("T")[0]}
              onChange={handleChange}
              onBlur={handleBlur}
              defaultValue={values?.date_of_birth}
              type="date"
              // required
              name="date_of_birth"
            />
            <small className="text-danger">
              {errors && touched && errors.dob}
            </small>
            {/* GENDER */}
            <FormLabel component="legend">Gender</FormLabel>
            <RadioGroup
              defaultValue={values?.gender}
              onChange={handleChange}
              row
              aria-label="gender"
              onBlur={handleBlur}
              name="gender"
              id="gender"
            >
              <FormControlLabel
                value="female"
                control={<Radio />}
                label="Female"
              />
              <FormControlLabel value="male" control={<Radio />} label="Male" />
              <FormControlLabel
                value="other"
                control={<Radio />}
                label="Other"
              />
            </RadioGroup>
            <small className="text-danger">
              {errors && touched && errors.gender}
            </small>
            {/* COUNTRY */}
            {/*  <CountrySelector
              onChange={(v) => setFieldValue("country", v)}
              attributes={{
                name: "country",
                defaultValue: values?.country,
                className: "p-2",
                onBlur: handleBlur,
              }}
            />
            <small className="text-danger">
              {errors && touched && errors.country}
            </small> */}

            {/* SUBMIT BUTTON */}
            <button
              disabled={isSubmitting || Object.keys(errors)?.length}
              type="submit"
              className="btn btn-primary mt-auto"
            >
              Save
            </button>
          </div>
        </form>
      )}
    </Formik>
  );
}

function VerifyID() {
  const {
    services: { kyc, upload },
  } = useServiceContextHook();

  const initialValues = {
    front: null,
    rear: null,
  };

  /*  async function fetchData() {
    try {
      let { data, error, message } = await kyc.find({
        "filter[type]": "ID",
      });
      if (!data)
        throw new Error(error?.message || message || "Error fetching kyc data");
      let kycData = data?.result[0];
      if (kycData) setData(kycData?.kyc?.id);
    } catch (err) {
      notify(err?.message, "error");
    }
  } */

  function validate(values) {
    const errors = {};
    return errors;
  }

  async function onSubmit(values, { setSubmitting }) {
    try {
      setSubmitting(true);
      let uploads = await Promise.all(
        Object.entries(values)?.map(async ([key, value]) => {
          let formData = new FormData();
          formData.append("file", value);
          let { data, error, message } = await upload.create(formData);
          if (!data) notify(`${key} upload unsuccessful! Try again`, "error");

          notify(`${key} upload Succeeded!`);

          return { upload_type: key, ...data };
        })
      );

      if (uploads) {
        let kycResponse = await kyc.create({
          type: "ID",
          uploads,
        });
        if (!kycResponse.data)
          throw new Error(
            kycResponse.error?.message ||
              kycResponse.message ||
              "Error creating ID KYC"
          );
        notify("ID KYC created successfully!");
      }
    } catch (err) {
      notify(err?.message, "error");
    } finally {
      setSubmitting(false);
    }
  }

  /* useEffect(() => {
    fetchData();
  }, []); */
  return (
    <Formik {...{ initialValues, validate, onSubmit }}>
      {({
        values,
        isSubmitting,
        setFieldValue,
        handleSubmit,
        errors,
        touched,
        handleChange,
        handleBlur,
      }) => (
        <form onSubmit={handleSubmit} enctype="multipart/form-data">
          <div
            style={{
              display: "flex",
              gap: 10,
              flexDirection: "column",
              flex: "1",
            }}
          >
            <p>Front side</p>
            <FileUpload
              altText="ID front photo (Click to select file)"
              onChange={([v]) => setFieldValue("front", v)}
              inputProps={{
                files: values?.front,
                id: "file-upload",
                name: "front",
              }}
            />
            {/*  <FileUpload
              altText="ID surface photo (Click to select file)"
              onChange={([v]) => setFieldValue("surface", v)}
              inputProps={{
                files: values?.surface,
                id: "file-upload",
                name: "surface",
              }}
            /> */}
            <p>Rear side</p>
            <FileUpload
              altText="Rear ID photo (Click to select file)"
              onChange={([v]) => setFieldValue("rear", v)}
              inputProps={{
                files: values?.rear,
                id: "file-upload",
                name: "rear",
              }}
            />
            {/* <label>Name</label>
            <FormControl
              placeholder="name"
              onChange={handleChange}
              onBlur={handleBlur}
              defaultValue={values?.name}
              // required
              name="name"
              type="text"
            /> */}

            {/* DOB */}
            {/*  <label>Date of Birth (yyyy-mm-dd)</label>
            <FormControl
              placeholder="Date of Birth (yyyy-mm-dd)"
              max={new Date().toISOString().split("T")[0]}
              onChange={handleChange}
              onBlur={handleBlur}
              defaultValue={values?.date_of_birth}
              type="date"
              // required
              name="date_of_birth"
            />
            <small className="text-danger">
              {errors && touched && errors.dob}
            </small>

            <textarea variant="outlined" placeholder="Address" /> */}

            {/* SUBMIT BUTTON */}
            {/* <InlineInput>
              <input placeholder="Address" type="text" name="address" />
            </InlineInput>
            <p>Birth Date</p>
            <InlineInput>
              <input type="date" />
            </InlineInput>*/}
            <button
              disabled={isSubmitting}
              type="submit"
              className="btn btn-primary mt-auto"
            >
              Submit
            </button>
          </div>
        </form>
      )}
    </Formik>
  );
}

function VerifyMail({ formData = { data: {}, onChange: () => null } }) {
  const {
    services: { auth },
    session,
  } = useServiceContextHook();

  const emailBox = useRef();
  const [isSending, setSending] = useState(false);
  const initialValues = {
    email: "",
    code: "",
  };

  useEffect(() => {
    if (emailBox.current) emailBox.current.focus();
  }, []);

  async function sendOTP(email) {
    try {
      setSending(true);
      let { data, error, message } = await auth.sendOTP(
        JSON.stringify({ id: session?.user?.id, email })
      );
      if (!data) throw new Error(error?.message || message);

      if (data?.status) {
        notify(`An OTP has been sent to your email address: ${email}`);
      } else notify(`Could not contact mail server`);
    } catch (err) {
      notify(err.message, "error");
    } finally {
      setSending(false);
    }
  }

  function validate(values) {
    const errors = {};
    if (!values?.code) errors.code = "Code is required";
    if (initialValues?.email === values?.email)
      errors.email = `${values?.email} is already in use!`;
    if (!values?.email) errors.email = "Email is required";
    return errors;
  }

  async function onVerify(values, { setSubmitting }) {
    try {
      setSubmitting(true);
      let { data, error, message } = await auth.verify_email(
        JSON.stringify(values)
      );
      if (!data)
        throw new Error(
          error?.message || message || "Operation not completed!"
        );

      if (data && data?.status) {
        formData.onChange(values);
        notify("Email confirmed successfully!");
      } else notify("Invalid code", "error");
    } catch (err) {
      notify(err.message, "error");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <Formik {...{ initialValues, onSubmit: onVerify, validate }}>
      {({
        values,
        isSubmitting,
        touched,
        errors,
        handleChange,
        handleBlur,
        isValid,
      }) => (
        <Form
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 10,
          }}
        >
          {formData?.data?.email && (
            <div style={{ display: "flex", gap: 5 }}>
              <strong style={{ fontWeight: "bold" }}>Current:</strong>
              <span>{formData?.data?.email}</span>
            </div>
          )}
          <InlineInput>
            <input
              ref={emailBox}
              placeholder="Email address"
              type="email"
              name="email"
              onChange={handleChange}
              defaultValue={values?.email}
              onBlur={handleBlur}
              disabled={isSending}
            />
            <button
              onClick={() => sendOTP(values?.email, formData?.onChange)}
              type="button"
              disabled={isSending || errors?.email || !values?.email}
            >
              {isSending ? "Sending..." : "Send code"}
            </button>
          </InlineInput>
          <small className="text-danger">{errors && errors?.email}</small>

          <InlineInput>
            <input
              placeholder="OTP code"
              type="text"
              name="code"
              maxLength={6}
              onBlur={handleBlur}
              onChange={handleChange}
              defaultValue={values?.code}
            />

            <button type="submit" disabled={isSubmitting || !isValid}>
              {isSubmitting ? "Checking..." : "Confirm code"}
            </button>
          </InlineInput>
          <small className="text-danger">
            {errors && touched && errors?.code}
          </small>
        </Form>
      )}
    </Formik>
  );
}

function VerifyPhoneNumber(formData = { phone: "", onChange: () => null }) {
  const {
    services: { auth },
    session,
  } = useServiceContextHook();
  const phoneBox = useRef();
  const [isSending, setSending] = useState(false);
  const [isOTPSent, setIsOTPSent] = useState(false);
  const initialValues = {
    phone: "",
    code: "",
    errors: {},
  };
  const [timer, setTimer] = useState(0);

  useEffect(() => {
    let timeout = null;

    if (timer) {
      timeout = setTimeout(() => {
        setTimer(timer - 1);
      }, 1000);
    }

    return () => {
      clearTimeout(timeout);
    };
  }, [timer]);

  useEffect(() => {
    if (phoneBox.current) phoneBox.current.focus();
  }, []);

  async function sendOTP(phone) {
    try {
      setSending(true);
      let { data, error, message } = await auth.sendOTP(
        JSON.stringify({ id: session?.user?.id, phone, type: "phone" })
      );

      if (!data) throw new Error(error?.message || message);

      if (data?.errors.timeout) {
        notify(data?.errors?.timeout?.message);
        setTimer(data?.time_left || 60);
        return;
      }
      if (data?.errors.sms) {
        notify(data?.errors?.sms?.message || `Could not contact SMS server`);
        return;
      }
      setTimer(data?.time_left || 60);
      notify(`An OTP has been sent to ${phone}`);
      setIsOTPSent(true);
    } catch (err) {
      notify(err.message, "error");
    } finally {
      setSending(false);
    }
  }

  async function onVerify(values, { setSubmitting }) {
    try {
      const { errors, ...rest } = values;
      setSubmitting(true);
      let { data, error, message } = await auth.verifySMSOTP(
        JSON.stringify(rest)
      );
      if (!data)
        throw new Error(
          error?.message || message || "Operation not completed!"
        );

      if (data && data?.status) {
        notify("Phone confirmed successfully!");
      } else notify("Invalid code", "error");
    } catch (err) {
      notify(err.message, "error");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <Formik
      {...{
        initialValues,
        onSubmit: onVerify,
        validate(values) {
          return values?.errors;
        },
      }}
    >
      {({
        values,
        isSubmitting,
        touched,
        handleChange,
        handleBlur,
        setFieldValue,
        handleSubmit,
        errors,
        setErrors,
        isValid,
      }) => (
        <Form
          style={{ display: "flex", flexDirection: "column", gap: 10 }}
          onSubmit={handleSubmit}
        >
          {isOTPSent ? (
            <>
              <FormControl
                placeholder="OTP code"
                type="text"
                name="code"
                maxLength={6}
                onBlur={handleBlur}
                onChange={handleChange}
                defaultValue={values?.code}
              />

              <Button type="submit" disabled={isSubmitting || !isValid}>
                {isSubmitting ? "Checking..." : "Confirm code"}
              </Button>
              <small className="text-danger">
                {errors && touched && errors?.code}
              </small>
            </>
          ) : (
            <>
              <PhoneNumber
                {...{ defaultValue: values?.phone, name: "phone" }}
                ref={phoneBox}
                onChange={(v) => setFieldValue("phone", v)}
                onError={(v) => setFieldValue("errors", v)}
              />
              <Button
                onClick={() => sendOTP(values?.phone, errors)}
                type="button"
                disabled={isSending || timer || Object.keys(errors).length}
              >
                {timer ? `Retry in ${timer}s` : "Send code"}
              </Button>
            </>
          )}

          {/* <Button variant="contained">Save</Button> */}
        </Form>
      )}
    </Formik>
  );
}

function VerifyGoogleAuth() {
  const steps = [
    {
      label: "Get Authenticator app",
      content: (
        <StyledSection>
          <DecimalList>
            <li>
              <h3 className="h6">Install a verification app on your phone</h3>
              <p>
                You will need to use a verification app such as Google
                Authenticator, Authy or Duo. Install from your app store.
                <a href="#" className="d-block">
                  <span className="fas fa-exclamation-circle"></span>&nbsp;Don't
                  have a smart phone?
                </a>
              </p>
            </li>
            <li>
              <h3 className="h6">Open app?</h3>
              <button onClick={nextStep} className="btn btn-primary">
                Yes I am ready to scan code
              </button>
            </li>
          </DecimalList>
        </StyledSection>
      ),
    },
    {
      label: "Connect phone",
      content: (
        <StyledSection>
          <Cage>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam quo
              expedita ratione voluptates facilis dolorum eos at cum quaerat,
              aspernatur numquam. Alias amet est quam earum, sed esse tempora
              quisquam?
            </p>
            <button onClick={nextStep} className="btn btn-primary">
              Save recovery code
            </button>
            <button onClick={prevStep} className="btn">
              Go back to instructions
            </button>
          </Cage>
        </StyledSection>
      ),
    },
    {
      label: "Save recovery key",
      content: (
        <StyledSection>
          <div>
            <button onClick={prevStep} className="btn btn-primary">
              Finish
            </button>
          </div>
        </StyledSection>
      ),
    },
  ];

  function prevStep() {
    if (activeStep > 0) setActiveStep(activeStep - 1);
  }

  function nextStep() {
    if (activeStep < steps.length) setActiveStep(activeStep + 1);
  }
  const [activeStep, setActiveStep] = useState(0);
  return (
    <div>
      <ul
        style={{
          display: "flex",
          gap: 15,
          padding: "15px 0",
          justifyContent: "space-evenly",
          width: "100%",
        }}
      >
        {steps.map((step, idx) => (
          <li
            key={idx}
            style={{
              ...(activeStep === idx && { color: UIColors.primary }),
              displat: "flex",
              flex: "1",
              justifyContent: "center",
              textAlign: "center",
            }}
          >
            <span className="fas fa-circle"></span>
            <small className="d-block">{step.label}</small>
          </li>
        ))}
      </ul>

      <div>{steps[activeStep].content}</div>
    </div>
  );
}

const KycForm = Object.assign(VerifyID, {
  VerifyMail,
  VerifyGoogleAuth,
  ModifyProfile,
  VerifyPhone: VerifyPhoneNumber,
});

export default KycForm;
