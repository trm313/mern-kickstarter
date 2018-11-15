import { combineReducers } from "redux";

let authInitialState = {
  loggedIn: false,
  _id: null,
  email: null,
  profilePhoto: null
};

const authReducer = (state = authInitialState, action) => {
  switch (action.type) {
    case "LOGIN_USER":
      return action.payload;
    case "LOGOUT_USER":
      return authInitialState;
    default:
      return state;
  }
};

export default authReducer;
