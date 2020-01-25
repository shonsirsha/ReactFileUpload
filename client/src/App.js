import React from "react";
import FileUpload from "./components/FileUpload";
import FileUploadState from "./context/fileupload/FileUploadState";

import "./App.css";

const App = () => {
  return (
    <div className='container mt-4'>
      <h4 className='display-4 text-center mb-4'>
        <i className='fab fa-react'></i> React File Upload
      </h4>
      <FileUploadState>
        <FileUpload />
      </FileUploadState>
    </div>
  );
};

export default App;
