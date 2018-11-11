// LOGIN_USER
const returnUserData = user => ({
  type: "LOGIN_USER",
  payload: user
});

const logoutUser = () => ({
  type: "LOGOUT_USER"
});

// LOGOUT_USER

export default {
  returnUserData,
  logoutUser
};
