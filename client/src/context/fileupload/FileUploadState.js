import { SET_FILE, SET_ERROR, SET_UPLOADED_FILE } from "../types";
import FileUploadReducer from "./fileUploadReducer";
import FileUploadContext from "./fileUploadContext";

import axios from "axios";

import React, { useReducer, useState } from "react";

const FileUploadState = props => {
  const initialState = {
    file: null,
    loading: true,
    error: null,
    uploadedFile: null,
    uploadProgress: 0
  };
  const [state, dispatch] = useReducer(FileUploadReducer, initialState);

  const setFile = e => {
    console.log(e.target.files[0]);
    dispatch({ type: SET_FILE, payload: e.target.files[0] });
  };

  const uploadFile = async () => {
    state.uploadProgress = 0;
    const formData = new FormData();
    formData.append("file", state.file); // check backend (req.files.X) where X is "file"
    try {
      const res = await axios.post("/api/uploads", formData, {
        headers: {
          "Content-Type": "multipart/form-data"
        },
        onUploadProgress: progressEvent => {
          state.uploadProgress = parseInt(
            Math.round((progressEvent.loaded * 100) / progressEvent.total)
          );
        }
      });
      dispatch({ type: SET_UPLOADED_FILE, payload: res.data });
    } catch (err) {
      dispatch({ type: SET_ERROR, payload: err.response.data.msg });
    }
  };

  return (
    <FileUploadContext.Provider
      value={{
        file: state.file,
        loading: state.loading,
        error: state.error,
        uploadedFile: state.uploadedFile,
        uploadProgress: state.uploadProgress,
        setFile,
        uploadFile
      }}
    >
      {props.children}
    </FileUploadContext.Provider>
  );
};

export default FileUploadState;
