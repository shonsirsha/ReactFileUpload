import { SET_ALERT, REMOVE_ALERT } from "../types";
import AlertUploadReducer from "./alertReducer";
import AlertContext from "./alertContext";

import React, { useReducer } from "react";

const AlertState = props => {
  const initialState = null;
  const [state, dispatch] = useReducer(AlertUploadReducer, initialState);

  const setAlert = (msg, type) => {
    dispatch({ type: SET_ALERT, payload: { msg: msg, type: type } });
  };

  const clearAllAlerts = () => {
    dispatch({ type: REMOVE_ALERT });
  };

  return (
    <AlertContext.Provider
      value={{
        alert: state,
        setAlert,
        clearAllAlerts
      }}
    >
      {props.children}
    </AlertContext.Provider>
  );
};

export default AlertState;
