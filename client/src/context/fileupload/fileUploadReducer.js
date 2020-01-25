import { SET_FILE, SET_LOADING, SET_UPLOADED_FILE, SET_ERROR } from "../types";
export default (state, action) => {
  switch (action.type) {
    case SET_FILE:
      return {
        ...state,
        file: action.payload,
        error: null,
        loading: false
      };
    case SET_UPLOADED_FILE:
      return {
        ...state,
        uploadedFile: {
          fileName: action.payload.fileName,
          filePath: action.payload.filePath
        },
        error: null,
        loading: false
      };
    case SET_ERROR:
      return {
        ...state,
        uploadedFile: null,
        error: action.payload,
        loading: false
      };

    case SET_LOADING:
      return {
        ...state,
        loading: true
      };

    default:
      return state;
  }
};
