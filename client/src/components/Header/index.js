import React from "react";
import { Link } from "react-router-dom";
import Auth from "../../utils/auth";

import ProfilePhoto from "./ProfilePhoto";
import Logo from "../../assets/style/img/brand/white.png";

const Header = () => {
  let user = Auth.getUserData();
  return (
    <header className="header-global">
      <nav
        id="navbar-main"
        className="navbar navbar-main navbar-expand-lg navbar-dark bg-default headroom"
      >
        <div className="container">
          <Link to="/" className="navbar-brand mr-lg-5">
            <img src={Logo} />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbar_global"
            aria-controls="navbar_global"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="navbar-collapse collapse" id="navbar_global">
            <div className="navbar-collapse-header">
              <div className="row">
                <div className="col-6 collapse-brand">
                  <a href="../index.html">
                    <img src="../../assets/style/img/brand/blue.png" />
                  </a>
                </div>
                <div className="col-6 collapse-close">
                  <button
                    type="button"
                    className="navbar-toggler"
                    data-toggle="collapse"
                    data-target="#navbar_global"
                    aria-controls="navbar_global"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                  >
                    <span />
                    <span />
                  </button>
                </div>
              </div>
            </div>
            <ul className="navbar-nav navbar-nav-hover align-items-lg-center">
              <li className="nav-item dropdown">
                <a
                  href="#"
                  className="nav-link"
                  data-toggle="dropdown"
                  href="#"
                  role="button"
                >
                  <i className="ni ni-ui-04 d-lg-none" />
                  <span className="nav-link-inner--text">Components</span>
                </a>
                <div className="dropdown-menu dropdown-menu-xl">
                  <div className="dropdown-menu-inner">
                    <a
                      href="https://demos.creative-tim.com/argon-design-system/docs/getting-started/overview.html"
                      className="media d-flex align-items-center"
                    >
                      <div className="icon icon-shape bg-gradient-primary rounded-circle text-white">
                        <i className="ni ni-spaceship" />
                      </div>
                      <div className="media-body ml-3">
                        <h6 className="heading text-primary mb-md-1">
                          Getting started
                        </h6>
                        <p className="description d-none d-md-inline-block mb-0">
                          Learn how to use Argon compiling Scss, change brand
                          colors and more.
                        </p>
                      </div>
                    </a>
                    <a
                      href="https://demos.creative-tim.com/argon-design-system/docs/foundation/colors.html"
                      className="media d-flex align-items-center"
                    >
                      <div className="icon icon-shape bg-gradient-success rounded-circle text-white">
                        <i className="ni ni-palette" />
                      </div>
                      <div className="media-body ml-3">
                        <h6 className="heading text-primary mb-md-1">
                          Foundation
                        </h6>
                        <p className="description d-none d-md-inline-block mb-0">
                          Learn more about colors, typography, icons and the
                          grid system we used for Argon.
                        </p>
                      </div>
                    </a>
                    <a
                      href="https://demos.creative-tim.com/argon-design-system/docs/components/alerts.html"
                      className="media d-flex align-items-center"
                    >
                      <div className="icon icon-shape bg-gradient-warning rounded-circle text-white">
                        <i className="ni ni-ui-04" />
                      </div>
                      <div className="media-body ml-3">
                        <h5 className="heading text-warning mb-md-1">
                          Components
                        </h5>
                        <p className="description d-none d-md-inline-block mb-0">
                          Browse our 50 beautiful handcrafted components offered
                          in the Free version.
                        </p>
                      </div>
                    </a>
                  </div>
                </div>
              </li>
              <li className="nav-item dropdown">
                <a
                  href="#"
                  className="nav-link"
                  data-toggle="dropdown"
                  href="#"
                  role="button"
                >
                  <i className="ni ni-collection d-lg-none" />
                  <span className="nav-link-inner--text">Examples</span>
                </a>
                <div className="dropdown-menu">
                  <a href="../examples/landing.html" className="dropdown-item">
                    Landing
                  </a>
                  <a href="../examples/profile.html" className="dropdown-item">
                    Profile
                  </a>
                  <a href="../examples/login.html" className="dropdown-item">
                    Login
                  </a>
                  <a href="../examples/register.html" className="dropdown-item">
                    Register
                  </a>
                </div>
              </li>
              <li className="nav-item">
                <Link to="/dashboard" className="nav-link">
                  <i className="ni ni-collection d-lg-none" />
                  <span className="nav-link-inner--text">Dashboard</span>
                </Link>
              </li>
            </ul>
            <ul className="navbar-nav align-items-lg-center ml-lg-auto">
              <li className="nav-item">
                <a
                  className="nav-link nav-link-icon"
                  href="https://www.facebook.com/creativetim"
                  target="_blank"
                  data-toggle="tooltip"
                  title="Like us on Facebook"
                >
                  <i className="fa fa-facebook-square" />
                  <span className="nav-link-inner--text d-lg-none">
                    Facebook
                  </span>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link nav-link-icon"
                  href="https://www.instagram.com/creativetimofficial"
                  target="_blank"
                  data-toggle="tooltip"
                  title="Follow us on Instagram"
                >
                  <i className="fa fa-instagram" />
                  <span className="nav-link-inner--text d-lg-none">
                    Instagram
                  </span>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link nav-link-icon"
                  href="https://twitter.com/creativetim"
                  target="_blank"
                  data-toggle="tooltip"
                  title="Follow us on Twitter"
                >
                  <i className="fa fa-twitter-square" />
                  <span className="nav-link-inner--text d-lg-none">
                    Twitter
                  </span>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link nav-link-icon"
                  href="https://github.com/creativetimofficial/argon-design-system"
                  target="_blank"
                  data-toggle="tooltip"
                  title="Star us on Github"
                >
                  <i className="fa fa-github" />
                  <span className="nav-link-inner--text d-lg-none">Github</span>
                </a>
              </li>

              {Auth.isUserAuthenticated() ? (
                <li className="nav-item">
                  <Link to="/logout" className="nav-link">
                    <i className="ni ni-collection d-lg-none" />
                    <span className="nav-link-inner--text">Logout</span>
                  </Link>
                </li>
              ) : (
                <li className="nav-item d-none d-lg-block ml-lg-4">
                  <Link to="/login" className="btn btn-neutral btn-icon">
                    <span className="btn-inner--icon">
                      <i className="fa fa-user-circle mr-2" />
                    </span>
                    <span className="nav-link-inner--text">Login</span>
                  </Link>
                </li>
              )}
              {Auth.isUserAuthenticated() && (
                <ProfilePhoto profilePhoto={user.profilePhoto} />
              )}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
