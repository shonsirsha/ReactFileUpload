import React from "react";
import FileUpload from "./components/FileUpload";
import Alert from "./components/layouts/Alerts";
import FileUploadState from "./context/fileupload/FileUploadState";
import AlertState from "./context/alerts/AlertState";

import "./App.css";

const App = () => {
  return (
    <div className='container mt-4'>
      <h4 className='display-4 text-center mb-4'>
        <i className='fab fa-react'></i> React File Upload
      </h4>
      <FileUploadState>
        <AlertState>
          <Alert />
          <FileUpload />
        </AlertState>
      </FileUploadState>
    </div>
  );
};

export default App;
