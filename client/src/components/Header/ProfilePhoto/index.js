import React, { Component } from "react";

import userCircle from "../../../assets/img/user-circle.svg";

export default class ProfilePhoto extends Component {
  render() {
    return (
      <img
        height="50"
        width="50"
        src={this.props.profilePhoto || userCircle}
        className="rounded-circle"
      />
    );
  }
}
