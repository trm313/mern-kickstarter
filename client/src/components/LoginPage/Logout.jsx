import React, { Component } from "react";
import { Redirect } from "react-router-dom";

import Auth from "../../utils/auth";

class Logout extends Component {
  constructor(props) {
    super(props);
  }
  componentWillMount() {
    Auth.deauthenticateUser();
  }

  render() {
    return (
      <div>
        <Redirect to={{ pathname: "/" }} />
      </div>
    );
  }
}

export default Logout;
