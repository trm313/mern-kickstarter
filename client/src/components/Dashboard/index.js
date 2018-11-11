import React, { Component } from "react";

export default class Dashboard extends Component {
  render() {
    console.log("render Dashboard");
    return (
      <div>
        <h1>Dashboard</h1>
        <p>You must be logged in to view this page</p>
      </div>
    );
  }
}
