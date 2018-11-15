import React, { Component } from "react";
import axios from "axios";
import { connect } from "react-redux";
import { Redirect, Link } from "react-router-dom";
import qs from "query-string";
import io from "socket.io-client";
import OAuth from "./OAuth";

import ErrorAlert from "../UI/ErrorAlert";
import LoadingSuccessFail from "../UI/LoadingSuccessFail";

import { logInUser } from "./operations";

const googleImg = require("../../assets/style/img/icons/common/google.svg");
const githubImg = require("../../assets/style/img/icons/common/github.svg");

const socket = io("http://localhost:3001");

const providers = ["twitter", "google"];

class LoginPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      confirmPassword: "",
      error: null,
      errorMsg: null,
      loading: false,
      success: false,
      fail: false,
      register: qs.parse(this.props.location.search).register ? true : false
    };
  }

  toggleForm = () => {
    this.setState({ register: !this.state.register });
  };

  successCallback = () => {
    // Log User In
  };

  failCallback = () => {
    this.setState({ success: false, fail: false, loading: false });
  };

  onChange = event => {
    const field = event.target.name;
    var info = this.state;
    info[field] = event.target.value;
    this.setState({
      email: info.email,
      password: info.password,
      error: null,
      errorMsg: null,
      loading: false
    });
  };

  onSubmitLogin = () => {
    if (!this.state.email || !this.state.password) {
      this.setState({ error: true, errorMsg: "Please fill out all fields" });
    } else {
      // Set loading
      this.setState({ loading: true, error: null, errorMsg: null }, () => {
        // Post to server route /login
        var data = {
          email: this.state.email,
          password: this.state.password
        };

        axios
          .post("/v1/auth/login", data)
          .then(response => {
            if (!response.data.success) {
              console.log(response.data);
              this.setState({
                error: true,
                errorMsg: response.data.message,
                loading: false
              });
            } else {
              this.setState({
                error: null,
                errorMsg: null
              });
              this.props.logInUser(response.data._id, response.data.email);
            }
          })
          .catch(error => {
            console.log("loginError", error);
            this.setState({
              error: true,
              errorMsg: "Login failed",
              loading: false
            });
          });
      });
    }
  };

  onSubmitRegister = () => {
    if (
      !this.state.email ||
      !this.state.password ||
      !this.state.confirmPassword
    ) {
      this.setState({
        error: true,
        errorMsg: "Please fill in all fields",
        loading: false
      });
    } else if (this.state.password !== this.state.confirmPassword) {
      this.setState({
        error: true,
        errorMsg: "Passwords don't match",
        loading: false
      });
    } else {
      console.log("onSubmitRegister", this.state);
      // Set loading
      this.setState({ loading: true, error: null, errorMsg: null }, () => {
        // Post to server route /login
        var data = {
          email: this.state.email,
          password: this.state.password
        };

        axios
          .post("/v1/auth/register", data)
          .then(response => {
            if (!response.data.success) {
              this.setState({
                loading: false,
                error: true,
                errorMsg: response.data.message
              });
            } else {
              this.setState({
                error: null,
                errorMsg: null
              });
              this.props.logInUser(response.data._id, response.data.email);
            }
          })
          .catch(error => {
            this.setState({
              error: true,
              errorMsg: "Signup failed",
              loading: false
            });
          });
      });
    }
  };

  setLoading = bool => {
    this.setState({ loading: bool });
  };

  renderOAuthButtons = () => {
    return providers.map(provider => {
      return (
        <OAuth
          provider={provider}
          socket={socket}
          key={provider}
          logInUser={this.props.logInUser}
          setLoading={this.setLoading}
        />
      );
    });
  };

  render() {
    const { from } = this.props.location.state || {
      from: { pathname: "/dashboard" }
    };

    return (
      <div>
        {this.props.authenticated && <Redirect to={from} />}
        <main>
          <section
            className="section section-shaped section-lg"
            style={{ paddingTop: "0px" }}
          >
            <div className="shape shape-style-1 bg-gradient-default">
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
            </div>
            <div className="container pt-lg-md">
              <div className="row justify-content-center">
                <div className="col-lg-5">
                  <div className="card bg-secondary shadow border-0">
                    <div className="card-header bg-white pb-5">
                      <div className="text-muted text-center mb-3">
                        <small>
                          Sign {this.state.register ? "up" : "in"} with
                        </small>
                      </div>
                      <div className="btn-wrapper text-center">
                        {this.renderOAuthButtons()}
                      </div>
                    </div>
                    <div className="card-body px-lg-5 py-lg-5">
                      <div className="text-center text-muted mb-4">
                        <small>
                          {this.state.register
                            ? "Or register via email"
                            : "Or sign in with credentials"}
                        </small>
                      </div>
                      {this.state.error && (
                        <ErrorAlert text={this.state.errorMsg} />
                      )}
                      <form role="form">
                        <div className="form-group mb-3">
                          <div className="input-group input-group-alternative">
                            <div className="input-group-prepend">
                              <span className="input-group-text">
                                <i className="ni ni-email-83" />
                              </span>
                            </div>
                            <input
                              className="form-control"
                              placeholder="Email"
                              type="email"
                              name="email"
                              onChange={this.onChange}
                              value={this.state.email}
                            />
                          </div>
                        </div>
                        <div className="form-group">
                          <div className="input-group input-group-alternative">
                            <div className="input-group-prepend">
                              <span className="input-group-text">
                                <i className="ni ni-lock-circle-open" />
                              </span>
                            </div>
                            <input
                              className="form-control"
                              placeholder="Password"
                              type="password"
                              name="password"
                              onChange={this.onChange}
                              value={this.state.password}
                            />
                          </div>
                        </div>
                        {this.state.register && (
                          <div className="form-group">
                            <div className="input-group input-group-alternative">
                              <div className="input-group-prepend">
                                <span className="input-group-text">
                                  <i className="ni ni-lock-circle-open" />
                                </span>
                              </div>
                              <input
                                className="form-control"
                                placeholder="Confirm Password"
                                type="password"
                                name="confirmPassword"
                                onChange={this.onChange}
                                value={this.state.confirmPassword}
                              />
                            </div>
                          </div>
                        )}
                        {this.state.loading && <div>Loading...</div>}
                        <LoadingSuccessFail
                          loading={this.state.loading}
                          success={this.state.success}
                          fail={this.state.fail}
                          successCallback={this.successCallback}
                          failCallback={this.failCallback}
                        />
                        <div className="custom-control custom-control-alternative custom-checkbox">
                          <input
                            className="custom-control-input"
                            id=" customCheckLogin"
                            type="checkbox"
                          />
                          <label
                            className="custom-control-label"
                            for="customCheckLogin"
                          >
                            <span>Remember me</span>
                          </label>
                        </div>
                        <div className="text-center">
                          {this.state.register ? (
                            <button
                              type="button"
                              className="btn btn-primary my-4"
                              onClick={this.onSubmitRegister}
                            >
                              Sign Up
                            </button>
                          ) : (
                            <button
                              type="button"
                              className="btn btn-primary my-4"
                              onClick={this.onSubmitLogin}
                            >
                              Sign in
                            </button>
                          )}
                        </div>
                      </form>
                    </div>
                  </div>
                  <div className="row mt-3">
                    <div className="col-6">
                      <a href="#" className="text-light">
                        <small>Forgot password?</small>
                      </a>
                    </div>
                    <div className="col-6 text-right">
                      {this.state.register ? (
                        <small
                          onClick={this.toggleForm}
                          className="text-light"
                          style={{ cursor: "pointer" }}
                        >
                          Login with existing account
                        </small>
                      ) : (
                        <small
                          onClick={this.toggleForm}
                          className="text-light"
                          style={{ cursor: "pointer" }}
                        >
                          Create new account
                        </small>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    );
  }
}

function mapStateToProps({ auth }) {
  return {
    authenticated: auth.loggedIn
  };
}

const mapDispatchToProps = dispatch => {
  return {
    logInUser: (_id, email, profilePhoto) =>
      dispatch(logInUser(_id, email, profilePhoto))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginPage);
