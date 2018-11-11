import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect
} from "react-router-dom";
import logo from "./logo.svg";
import "./App.scss";

import { connect } from "react-redux";

import Header from "./components/Header";
import LandingPage from "./components/LandingPage";
import LoginPage from "./components/LoginPage";
import Logout from "./components/LoginPage/Logout";
import RegisterPage from "./components/RegisterPage";
import Dashboard from "./components/Dashboard";

import Auth from "./utils/auth";

const renderMergedProps = (component, ...rest) => {
  const finalProps = Object.assign({}, ...rest);
  return React.createElement(component, finalProps);
};

const PrivateRoute = ({ component, redirectTo, ...rest }) => (
  <Route
    {...rest}
    render={routeProps => {
      return Auth.isUserAuthenticated() ? (
        renderMergedProps(component, routeProps, rest)
      ) : (
        <Redirect
          to={{
            pathname: redirectTo,
            state: { from: routeProps.location }
          }}
        />
      );
    }}
  />
);

class App extends Component {
  componentWillMount() {
    Auth.authenticateUser();
  }

  render() {
    console.log("isUserAuthenticated", Auth.isUserAuthenticated());
    return (
      <Router>
        <div className="App">
          <Header />
          <section>
            <Switch>
              <Route exact path="/" component={LandingPage} />
              <Route exact path="/login" component={LoginPage} />
              <Route exact path="/register" component={RegisterPage} />
              <PrivateRoute
                path="/dashboard"
                component={Dashboard}
                redirectTo="/login"
              />
              <Route exact path="/logout" component={Logout} />
            </Switch>
          </section>
        </div>
      </Router>
    );
  }
}

function mapStateToProps(state) {
  return { authenticated: state.auth.loggedIn };
}

export default connect(mapStateToProps)(App);
