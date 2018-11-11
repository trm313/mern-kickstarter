import store from "../rootReducer";
import axios from "axios";

class Auth {
  /**
   * Authenticate a user. Save a token string in LocalStorage
   * @param {string} token
   */
  static authenticateUser() {
    axios
      .get("/v1/user")
      .then(response => {
        console.log(response.data);
        store.dispatch(returnUserData(response.data));
      })
      .catch(error => {});

    const returnUserData = user => ({
      type: "LOGIN_USER",
      payload: { loggedIn: true, _id: user._id, email: user.email }
    });
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
