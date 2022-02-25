import React from "react";
import { Form, Button } from "react-bootstrap";
import { Formik } from "formik";
import { TextField } from "@mui/material";
import FiatCurrencySelector from "../../components/input/FiatCurrency.component";

export function BankTransferForm({ data = {}, onUpdate = () => null }) {
  const { bank_transfer = {} } = data || {};

  const initialValues = {
    bank_name: bank_transfer?.bank_name || "",
    bank_code: bank_transfer?.bank_code || "",
    account_name: bank_transfer?.account_name || "",
    account_number: bank_transfer?.account_number || "",
    currency: bank_transfer?.currency || "USD",
  };

  return (
    <Formik
      {...{ initialValues }}
      // validate={(values) => {}}
      onSubmit={async (values, { setSubmitting }) => {
        try {
          onUpdate({ bank_transfer: values });
        } catch (error) {
          console.error(error);
        } finally {
          setSubmitting(false);
        }
      }}
    >
      {({
        values, errors, isSubmitting, handleSubmit, handleChange, setFieldValue, handleBlur, touched,
      }) => (
        <Form
          onSubmit={handleSubmit}
          style={{
            display: "flex",
            flexWrap: "wrap",
            flexDirection: "column",
            padding: "10px 20px",
            gap: 20,
            justifyContent: "center",
          }}
        >
          <TextField
            size="small"
            variant="outlined"
            id="bank_name"
            label="Bank name"
            onChange={handleChange}
            defaultValue={values?.bank_name} />

          {/* Account number */}
          <TextField
            label="Bank Code"
            id="bank_code"
            size="small"
            variant="outlined"
            onChange={handleChange}
            defaultValue={values?.bank_code}
            inputProps={{
              pattern: "^[A-Za-z0-9]{8,11}$",
              minLength: 8,
              maxLength: 11,
            }} />

          {/* Account name */}
          <TextField
            id="account_name"
            label="Account name"
            variant="outlined"
            size="small"
            onChange={handleChange}
            defaultValue={values?.account_name} />

          {/* Account number */}
          <TextField
            size="small"
            variant="outlined"
            id="account_number"
            label="Account number / IBAN"
            onChange={handleChange}
            defaultValue={values?.account_number}
            inputProps={{ pattern: "^[A-Za-z0-9-]{1,17}$", maxLength: 15 }} />
          <FiatCurrencySelector
            all={false}
            attributes={{
              value: values?.currency,
              style: {
                padding: 10,
                backgroundColor: "white",
                boxShadow: "rgba(78, 77, 77, 50%) 0px 0px 0px 1px",
                borderRadius: 4,
              },
            }}
            onChange={(val) => setFieldValue("currency", val)} />
          <Button disabled={isSubmitting} type="submit">
            {isSubmitting ? "Saving" : "Save"}
          </Button>
        </Form>
      )}
    </Formik>
  );
}
