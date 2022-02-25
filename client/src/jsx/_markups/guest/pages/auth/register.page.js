import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { Formik } from "formik";

import _constants from "../../../../_constants";
import useQuery from "../../../../_hooks/query.hook";
import { useTranslation } from "react-i18next";
import { routeMap } from "../../routes";

// HOOKS
import useServiceContextHook from "../../../../_hooks/service.context.hook";
import AuthForm from "../../components/form/auth.form";
import { notify } from "../../../../_helpers/notify";

export default function () {
  const { session, history } = useServiceContextHook();

  const query = useQuery();

  useEffect(() => {
    if (session?.user) history.push(routeMap?.home);
  }, [session]);

  useEffect(() => {
    if (query && query?.email) setShowFeedback(true);
  }, [query]);

  const [showFeedback, setShowFeedback] = useState(false);

  return showFeedback ? <Feedback /> : <AuthForm.Register />;
}

function Feedback() {
  const {
    services: { auth },
  } = useServiceContextHook();
  const { t } = useTranslation();
  const [isLoading, setIsLoading] = useState(false);
  const query = useQuery();

  async function resendConfirmationMail() {
    try {
      setIsLoading(true);
      const response = await auth.resendConfirmationMail({
        email: query?.email,
      });
      console.log(response);

      const { data, error, message } = response;
      if (!data) throw new Error(error.message || message);
      else if (!data.status) throw new Error(`Could not send mail. Try again`);
      notify(data?.message || `Mail sent to ${query?.email}`);
    } catch (err) {
      notify(err.message, "error");
    } finally {
      setIsLoading(!true);
    }
  }

  return (
    <div
      style={{
        minHeight: "70vh",
        maxWidth: "50vh",
        margin: "auto",
        padding: 10,
        display: "flex",
        justifyContent: "center",
        gap: 10,
        flexDirection: "column",
      }}
    >
      <header className="text-center">
        <h2 className="h3 font-weight-bold">{t("Confirm Account")}</h2>
      </header>
      <p className="text-muted text-center">
        {t(`An account confirmation mail has been sent to`)}{" "}
        <strong className="font-weight-bold">{query?.email}</strong>.{" "}
        {t(`Click on the confirmation link to complete your registration`)}
      </p>
      <button
        disabled={isLoading}
        type="button"
        className="btn btn-primary"
        onClick={() => resendConfirmationMail(query?.email)}
      >
        {t(isLoading ? "Sending..." : "Resend email")}
      </button>
    </div>
  );
}
