import * as actionTypes from "./actionTypes";

export const setUser = (payload) => {
  return async (dispatch) => {
    dispatch({ type: actionTypes.SET_USER, payload: payload });
  };
};

export const removeUser = () => {
  return async (dispatch) => {
    dispatch({ type: actionTypes.REMOVE_USER });
  };
};
