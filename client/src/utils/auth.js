import store from "../rootReducer";
import axios from "axios";

class Auth {
  /**
   * Attempt to return user data
   */
  static authenticateUser() {
    const returnUserData = user => ({
      type: "LOGIN_USER",
      payload: {
        loggedIn: true,
        _id: user._id,
        email: user.email,
        profilePhoto: user.profilePhoto
      }
    });

    axios
      .get("/v1/user")
      .then(response => {
        store.dispatch(returnUserData(response.data.user));
      })
      .catch(error => {});
  }

  /**
   * Check if a user is authenticated
   * @returns {boolean}
   */
  static isUserAuthenticated() {
    let state = store.getState();
    return state.auth.loggedIn;
  }

  /**
   * Get User Data
   */
  static getUserData() {
    let state = store.getState();
    return state.auth;
  }

  /**
   * Deauthenciate a user
   */
  static deauthenticateUser() {
    const logoutUser = () => ({
      type: "LOGOUT_USER"
    });

    axios.post("/v1/auth/logout").then(response => {
      store.dispatch(logoutUser());
    });
  }
}

export default Auth;
