import React, { useEffect } from "react";

// HOOKS
import useServiceContextHook from "../../../../_hooks/service.context.hook";

// CONSTANTS
import _constants from "../../../../_constants";

// HELPERS
import { routeMap } from "../../routes";

// COMPONENTS
import AuthForm from "../../components/form/auth.form";

export default function Login() {
  const { session, history } = useServiceContextHook();
  function redirectTo() {
    let state = history.location?.state?.pathname;
    console.log(state);
    return state || routeMap.me;
  }
  useEffect(() => {
    if (session?.user) history.push(redirectTo());
  }, [session]);

  return (
    <>
      <AuthForm />
    </>
  );
}
