import { SET_ALERT, REMOVE_ALERT } from "../types";
export default (state, action) => {
  switch (action.type) {
    case SET_ALERT:
      return action.payload;

    case REMOVE_ALERT:
      state = null;
      return state;

    default:
      return state;
  }
};
