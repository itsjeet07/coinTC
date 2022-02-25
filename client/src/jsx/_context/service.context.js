import React, { createContext, useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Services from "../_services";
import actions from "../_actions";
import helpers from "../_helpers";
import useService from "../_hooks/service.hook";
// import { createBrowserHistory } from "history";
import { useHistory, useLocation } from "react-router-dom";
import UIColors from "../_markups/guest/components/colors";

export const ServiceContext = createContext();

export default function ServiceContextProvider(props) {
  const session = useSelector((state) => state?.session);
  const dispatch = useDispatch();
  const history = useHistory();
  const location = useLocation();

  history.listen((payload) => {
    // console.log(payload, history);
    // switch (String(action)?.toLowerCase()) {
    //   case "push": {
    //     // history.push(
    //     //   `${location?.pathname}${location.search}${location.hash}`,
    //     //   location?.state
    //     // );
    //   }
    // }
  });
  const [services, setServices] = useState(null);
  const { user: userAction } = actions;

  useEffect(() => {
    let newService = new Services(
      {
        token: session?.user?.token || "",
        baseURL: "/api",
        timeout: 15000,
      },
      () => dispatch(userAction.logout())
    );
    setServices(newService);
    // dispatch(service.save(newService));
  }, [session]);

  return (
    <ServiceContext.Provider
      value={{
        services,
        session,
        location,
        history,
        actions,
        helpers,
        useService,
        appName: "Cointc",
        appURL: "http://www.cointc.xyz",
        UIColors,
      }}
    >
      {props.children}
    </ServiceContext.Provider>
  );
}
