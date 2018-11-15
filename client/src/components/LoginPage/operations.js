import actions from "./actions";
import axios from "axios";

export const getUserInfo = () => dispatch => {
  // Check Cookies, see if jwt exists
  // Send axios post for user info
  // Return userInfo to 'LOGIN_USER'
};

export const logInUser = (_id, email, profilePhoto) => dispatch => {
  let data = {
    loggedIn: true,
    _id: _id,
    email: email,
    profilePhoto: profilePhoto || null
  };
  console.log(data);
  dispatch(actions.returnUserData(data));
};

export const logoutUser = () => dispatch => {
  dispatch(actions.logoutUser());
};
