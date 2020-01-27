import React, { Fragment, useContext } from "react";
import AlertContext from "../../context/alerts/alertContext";
const Alerts = () => {
  const alertContext = useContext(AlertContext);
  const { alert } = alertContext;
  if (alert !== null) {
    return (
      <Fragment>
        <div
          className={`alert alert-${alert.type} alert-dismissable`}
          role='alert'
        >
          {alert.msg}
          <button
            type='button'
            className='close'
            data-dismiss='alert'
            aria-label='Close'
          >
            <span aria-hidden='true'>&times;</span>
          </button>
        </div>
      </Fragment>
    );
  } else {
    return <Fragment></Fragment>;
  }
};

export default Alerts;
