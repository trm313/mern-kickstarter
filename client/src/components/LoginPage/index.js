import React, { Component } from "react";
import axios from "axios";
import { connect } from "react-redux";
import { Redirect, Link } from "react-router-dom";

import { logInUser } from "./operations";

class LoginPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      error: null,
      errorMsg: null,
      loading: false
    };
  }

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
    }

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
          this.setState({
            error: null,
            errorMsg: null
          });
          this.props.logInUser(response.data._id, response.data.email);
        })
        .catch(error => {
          this.setState({ error: true, errorMsg: error });
        });
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
          <section className="section section-shaped section-lg">
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
                        <small>Sign in with</small>
                      </div>
                      <div className="btn-wrapper text-center">
                        <a href="#" className="btn btn-neutral btn-icon">
                          <span className="btn-inner--icon">
                            <img src="../assets/img/icons/common/github.svg" />
                          </span>
                          <span className="btn-inner--text">Github</span>
                        </a>
                        <a href="#" className="btn btn-neutral btn-icon">
                          <span className="btn-inner--icon">
                            <img src="../assets/img/icons/common/google.svg" />
                          </span>
                          <span className="btn-inner--text">Google</span>
                        </a>
                      </div>
                    </div>
                    <div className="card-body px-lg-5 py-lg-5">
                      <div className="text-center text-muted mb-4">
                        <small>Or sign in with credentials</small>
                      </div>
                      {this.state.error && <div>Error loging in</div>}
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
                        {this.state.loading && <div>Loading...</div>}
                        <div className="custom-control custom-control-alternative custom-checkbox">
                          <input
                            className="custom-control-input"
                            id=" customCheckLogin"
                            type="checkbox"
                          />
                          <label
                            className="custom-control-label"
                            for=" customCheckLogin"
                          >
                            <span>Remember me</span>
                          </label>
                        </div>
                        <div className="text-center">
                          <button
                            type="button"
                            className="btn btn-primary my-4"
                            onClick={this.onSubmitLogin}
                          >
                            Sign in
                          </button>
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
                      <a href="#" className="text-light">
                        <small>Create new account</small>
                      </a>
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
    logInUser: (_id, email) => dispatch(logInUser(_id, email))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginPage);
