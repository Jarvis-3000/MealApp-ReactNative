import * as actionTypes from "./actionTypes.js";

const initialState = {
  user: {
    id: "",
    name: "",
  },
  isUserLoggedIn: false,
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_USER:
      return {
        ...state,
        user: {
          id: action.payload.id,
          name: action.payload.name,
        },
        isUserLoggedIn: true,
      };

    case actionTypes.REMOVE_USER:
      return {
        ...state,
        user: {},
        isUserLoggedIn: false,
      };

    default:
      return state;
  }
};
