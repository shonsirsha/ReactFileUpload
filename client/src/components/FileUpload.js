import React, { Fragment, useContext, useState, useEffect } from "react";
import FileUploadContext from "../context/fileupload/fileUploadContext";
import AlertContext from "../context/alerts/alertContext";
import ProgressBar from "./layouts/ProgressBar";

const FileUpload = () => {
  const fileUploadContext = useContext(FileUploadContext);
  const alertContext = useContext(AlertContext);

  const [localProgress, setLocalProgress] = useState(0);

  const {
    setFile,
    file,
    uploadFile,
    uploadedFile,
    uploadProgress
  } = fileUploadContext;
  const [fileName, setFileName] = useState("Choose A File");
  //   useEffect(()=>{
  //       if(file === null){
  //           setFile(e.)
  //       }
  //   },[])

  const onChange = e => {
    setFile(e);
    setFileName(e.target.files[0].name);
  };

  const onSubmit = e => {
    e.preventDefault();
    alertContext.clearAllAlerts();
    alertContext.setAlert("Please pick a file", "danger");

    if (file !== null) {
      uploadFile();
      alertContext.setAlert("File has been uploaded", "success");
    }
  };

  useEffect(() => {
    setLocalProgress(uploadProgress);
  }, [uploadProgress]);
  return (
    <Fragment>
      <form onSubmit={onSubmit}>
        <div className='custom-file mb-4'>
          <input
            type='file'
            className='custom-file-input'
            id='customFile'
            onChange={onChange}
            accept='image/*'
          />
          <label className='custom-file-label' htmlFor='customFile'>
            {fileName}
          </label>
        </div>
        {localProgress > 0 && <ProgressBar percentage={localProgress} />}
        <input
          type='submit'
          value='Upload'
          className='btn btn-primary btn-block mt-4'
        />
      </form>
      {uploadedFile !== null ? (
        <div className='row mt-5'>
          <div className='col-md-6 m-auto'>
            <h3 className='text-center'>{uploadedFile.fileName}</h3>
            <img style={{ width: "100%" }} src={uploadedFile.filePath} alt='' />
          </div>
        </div>
      ) : null}
    </Fragment>
  );
};

export default FileUpload;
