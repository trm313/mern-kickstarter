import React, { Component } from "react";
import axios from "axios";
import { connect } from "react-redux";
import { Redirect, Link } from "react-router-dom";
import qs from "query-string";
import io from "socket.io-client";
import OAuth from "./OAuth";

import LoginForm from "./LoginForm";
import ErrorAlert from "../UI/ErrorAlert";
import LoadingSuccessFailure from "../UI/LoadingSuccessFailure";

import { logInUser } from "./operations";
const socket = io("http://localhost:3001");
const providers = ["twitter", "google"];

const resetStatusState = {
  loading: false,
  error: null,
  errorMsg: null,
  reqStatus: "pending"
};
const setLoadingState = {
  loading: true,
  error: null,
  errorMsg: null,
  reqStatus: "loading"
};

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
      register: qs.parse(this.props.location.search).register ? true : false,
      reqStatus: "pending", // pending || loading || success || failed,
      returnedUser: null
    };
  }

  successCallback = () => {
    // Called from LoadingSuccessFailure
    let user = {
      _id: this.state.returnedUser._id,
      email: this.state.returnedUser.email,
      photo: this.state.returnedUser.profilePhoto
    };
    this.props.logInUser(user._id, user.email, user.photo);
  };

  failureCallback = () => {
    // Called from LoadingSuccessFailure
    this.setState({
      loading: false,
      reqStatus: "pending"
    });
  };

  toggleForm = () => {
    this.setState({ register: !this.state.register });
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
      this.setState({
        error: true,
        errorMsg: "Please fill out all fields",
        reqStatus: "pending"
      });
    } else {
      // Set loading
      this.setState(setLoadingState, () => {
        // Post to server route /login
        var data = {
          email: this.state.email,
          password: this.state.password
        };

        axios
          .post("/v1/auth/login", data)
          .then(response => {
            this.setState({
              error: null,
              errorMsg: null,
              reqStatus: "success",
              returnedUser: response.data
            });
            // this.props.logInUser(response.data._id, response.data.email);
          })
          .catch(error => {
            console.log("response.data", error.response.data);
            this.setState({
              error: true,
              errorMsg: error.response.data.message || "Login failed",
              loading: false,
              reqStatus: "failed"
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
            this.setState({
              error: null,
              errorMsg: null
            });
            this.props.logInUser(response.data._id, response.data.email);
          })
          .catch(error => {
            this.setState({
              error: true,
              errorMsg: error.response.data.message || "Signup failed",
              loading: false
            });
          });
      });
    }
  };

  setLoading = bool => {
    if (bool) {
      this.setState({ loading: bool, reqStatus: "loading" });
    } else {
      this.setState({ loading: bool });
    }
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
          loading={this.state.loading}
          returnOAuthData={this.returnOAuthData}
        />
      );
    });
  };

  returnOAuthData = user => {
    this.setState({ returnedUser: user, reqStatus: "success" });
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
                      <LoadingSuccessFailure
                        status={this.state.reqStatus}
                        successCallback={this.successCallback}
                        failureCallback={this.failureCallback}
                        completionDelay={1500}
                      />
                      <LoginForm
                        email={this.state.email}
                        password={this.state.password}
                        confirmPassword={this.state.confirmPassword}
                        register={this.state.register}
                        onChange={this.onChange}
                        loading={this.state.loading}
                        onSubmitLogin={this.onSubmitLogin}
                        onSubmitRegister={this.onSubmitRegister}
                      />
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
