import React, { Fragment, useContext, useState } from "react";
import FileUploadContext from "../context/fileupload/fileUploadContext";

const FileUpload = () => {
  const fileUploadContext = useContext(FileUploadContext);
  const { setFile, file, uploadFile, uploadedFile } = fileUploadContext;
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

    if (file !== null) {
      uploadFile();
    }
  };
  return (
    <Fragment>
      <form onSubmit={onSubmit}>
        <div className='custom-file mb-4'>
          <input
            type='file'
            className='custom-file-input'
            id='customFile'
            onChange={onChange}
          />
          <label className='custom-file-label' htmlFor='customFile'>
            {fileName}
          </label>
        </div>

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
            <img
              style={{ width: "100%" }}
              src={`..` + uploadedFile.filePath}
              alt=''
            />
          </div>
        </div>
      ) : null}
    </Fragment>
  );
};

export default FileUpload;