import React, { Component } from "react";

export default class LandingPage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <main>
        <div className="position-relative">
          <section className="section section-lg section-shaped pb-250">
            <div className="shape shape-style-1 shape-default">
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
            </div>
            <div className="container py-lg-md d-flex">
              <div className="col px-0">
                <div className="row">
                  <div className="col-lg-6">
                    <h1 className="display-3  text-white">
                      A beautiful Design System
                      <span>completed with examples</span>
                    </h1>
                    <p className="lead  text-white">
                      The design system comes with four pre-built pages to help
                      you get started faster. You can change the text and images
                      and you're good to go.
                    </p>
                    <div className="btn-wrapper">
                      <a
                        href="https://demos.creative-tim.com/argon-design-system/docs/components/alerts.html"
                        className="btn btn-info btn-icon mb-3 mb-sm-0"
                      >
                        <span className="btn-inner--icon">
                          <i className="fa fa-code" />
                        </span>
                        <span className="btn-inner--text">Components</span>
                      </a>
                      <a
                        href="https://www.creative-tim.com/product/argon-design-system"
                        className="btn btn-white btn-icon mb-3 mb-sm-0"
                      >
                        <span className="btn-inner--icon">
                          <i className="ni ni-cloud-download-95" />
                        </span>
                        <span className="btn-inner--text">Download HTML</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="separator separator-bottom separator-skew">
              <svg
                x="0"
                y="0"
                viewBox="0 0 2560 100"
                preserveAspectRatio="none"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
              >
                <polygon
                  className="fill-white"
                  points="2560 0 2560 100 0 100"
                />
              </svg>
            </div>
          </section>
        </div>
        <section className="section section-lg pt-lg-0 mt--200">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-12">
                <div className="row row-grid">
                  <div className="col-lg-4">
                    <div className="card card-lift--hover shadow border-0">
                      <div className="card-body py-5">
                        <div className="icon icon-shape icon-shape-primary rounded-circle mb-4">
                          <i className="ni ni-check-bold" />
                        </div>
                        <h6 className="text-primary text-uppercase">
                          Download Argon
                        </h6>
                        <p className="description mt-3">
                          Argon is a great free UI package based on Bootstrap 4
                          that includes the most important components and
                          features.
                        </p>
                        <div>
                          <span className="badge badge-pill badge-primary">
                            design
                          </span>
                          <span className="badge badge-pill badge-primary">
                            system
                          </span>
                          <span className="badge badge-pill badge-primary">
                            creative
                          </span>
                        </div>
                        <a href="#" className="btn btn-primary mt-4">
                          Learn more
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div className="card card-lift--hover shadow border-0">
                      <div className="card-body py-5">
                        <div className="icon icon-shape icon-shape-success rounded-circle mb-4">
                          <i className="ni ni-istanbul" />
                        </div>
                        <h6 className="text-success text-uppercase">
                          Build Something
                        </h6>
                        <p className="description mt-3">
                          Argon is a great free UI package based on Bootstrap 4
                          that includes the most important components and
                          features.
                        </p>
                        <div>
                          <span className="badge badge-pill badge-success">
                            business
                          </span>
                          <span className="badge badge-pill badge-success">
                            vision
                          </span>
                          <span className="badge badge-pill badge-success">
                            success
                          </span>
                        </div>
                        <a href="#" className="btn btn-success mt-4">
                          Learn more
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div className="card card-lift--hover shadow border-0">
                      <div className="card-body py-5">
                        <div className="icon icon-shape icon-shape-warning rounded-circle mb-4">
                          <i className="ni ni-planet" />
                        </div>
                        <h6 className="text-warning text-uppercase">
                          Prepare Launch
                        </h6>
                        <p className="description mt-3">
                          Argon is a great free UI package based on Bootstrap 4
                          that includes the most important components and
                          features.
                        </p>
                        <div>
                          <span className="badge badge-pill badge-warning">
                            marketing
                          </span>
                          <span className="badge badge-pill badge-warning">
                            product
                          </span>
                          <span className="badge badge-pill badge-warning">
                            launch
                          </span>
                        </div>
                        <a href="#" className="btn btn-warning mt-4">
                          Learn more
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="section section-lg">
          <div className="container">
            <div className="row row-grid align-items-center">
              <div className="col-md-6 order-md-2">
                <img
                  src="../assets/img/theme/promo-1.png"
                  className="img-fluid floating"
                />
              </div>
              <div className="col-md-6 order-md-1">
                <div className="pr-md-5">
                  <div className="icon icon-lg icon-shape icon-shape-success shadow rounded-circle mb-5">
                    <i className="ni ni-settings-gear-65" />
                  </div>
                  <h3>Awesome features</h3>
                  <p>
                    The kit comes with three pre-built pages to help you get
                    started faster. You can change the text and images and
                    you're good to go.
                  </p>
                  <ul className="list-unstyled mt-5">
                    <li className="py-2">
                      <div className="d-flex align-items-center">
                        <div>
                          <div className="badge badge-circle badge-success mr-3">
                            <i className="ni ni-settings-gear-65" />
                          </div>
                        </div>
                        <div>
                          <h6 className="mb-0">Carefully crafted components</h6>
                        </div>
                      </div>
                    </li>
                    <li className="py-2">
                      <div className="d-flex align-items-center">
                        <div>
                          <div className="badge badge-circle badge-success mr-3">
                            <i className="ni ni-html5" />
                          </div>
                        </div>
                        <div>
                          <h6 className="mb-0">Amazing page examples</h6>
                        </div>
                      </div>
                    </li>
                    <li className="py-2">
                      <div className="d-flex align-items-center">
                        <div>
                          <div className="badge badge-circle badge-success mr-3">
                            <i className="ni ni-satisfied" />
                          </div>
                        </div>
                        <div>
                          <h6 className="mb-0">Super friendly support team</h6>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="section bg-secondary">
          <div className="container">
            <div className="row row-grid align-items-center">
              <div className="col-md-6">
                <div className="card bg-default shadow border-0">
                  <img
                    src="../assets/img/theme/img-1-1200x1000.jpg"
                    className="card-img-top"
                  />
                  <blockquote className="card-blockquote">
                    <svg
                      preserveAspectRatio="none"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 583 95"
                      className="svg-bg"
                    >
                      <polygon
                        points="0,52 583,95 0,95"
                        className="fill-default"
                      />
                      <polygon
                        points="0,42 583,95 683,0 0,95"
                        opacity=".2"
                        className="fill-default"
                      />
                    </svg>
                    <h4 className="display-3 font-weight-bold text-white">
                      Design System
                    </h4>
                    <p className="lead text-italic text-white">
                      The Arctic Ocean freezes every winter and much of the
                      sea-ice then thaws every summer, and that process will
                      continue whatever happens.
                    </p>
                  </blockquote>
                </div>
              </div>
              <div className="col-md-6">
                <div className="pl-md-5">
                  <div className="icon icon-lg icon-shape icon-shape-warning shadow rounded-circle mb-5">
                    <i className="ni ni-settings" />
                  </div>
                  <h3>Our customers</h3>
                  <p className="lead">
                    Don't let your uses guess by attaching tooltips and popoves
                    to any element. Just make sure you enable them first via
                    JavaScript.
                  </p>
                  <p>
                    The kit comes with three pre-built pages to help you get
                    started faster. You can change the text and images and
                    you're good to go.
                  </p>
                  <p>
                    The kit comes with three pre-built pages to help you get
                    started faster. You can change the text and images and
                    you're good to go.
                  </p>
                  <a href="#" className="font-weight-bold text-warning mt-5">
                    A beautiful UI Kit for impactful websites
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="section pb-0 bg-gradient-warning">
          <div className="container">
            <div className="row row-grid align-items-center">
              <div className="col-md-6 order-lg-2 ml-lg-auto">
                <div className="position-relative pl-md-5">
                  <img
                    src="../assets/img/ill/ill-2.svg"
                    className="img-center img-fluid"
                  />
                </div>
              </div>
              <div className="col-lg-6 order-lg-1">
                <div className="d-flex px-3">
                  <div>
                    <div className="icon icon-lg icon-shape bg-gradient-white shadow rounded-circle text-primary">
                      <i className="ni ni-building text-primary" />
                    </div>
                  </div>
                  <div className="pl-4">
                    <h4 className="display-3 text-white">Modern Interface</h4>
                    <p className="text-white">
                      The Arctic Ocean freezes every winter and much of the
                      sea-ice then thaws every summer, and that process will
                      continue whatever.
                    </p>
                  </div>
                </div>
                <div className="card shadow shadow-lg--hover mt-5">
                  <div className="card-body">
                    <div className="d-flex px-3">
                      <div>
                        <div className="icon icon-shape bg-gradient-success rounded-circle text-white">
                          <i className="ni ni-satisfied" />
                        </div>
                      </div>
                      <div className="pl-4">
                        <h5 className="title text-success">Awesome Support</h5>
                        <p>
                          The Arctic Ocean freezes every winter and much of the
                          sea-ice then thaws every summer, and that process will
                          continue whatever.
                        </p>
                        <a href="#" className="text-success">
                          Learn more
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card shadow shadow-lg--hover mt-5">
                  <div className="card-body">
                    <div className="d-flex px-3">
                      <div>
                        <div className="icon icon-shape bg-gradient-warning rounded-circle text-white">
                          <i className="ni ni-active-40" />
                        </div>
                      </div>
                      <div className="pl-4">
                        <h5 className="title text-warning">
                          Modular Components
                        </h5>
                        <p>
                          The Arctic Ocean freezes every winter and much of the
                          sea-ice then thaws every summer, and that process will
                          continue whatever.
                        </p>
                        <a href="#" className="text-warning">
                          Learn more
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="separator separator-bottom separator-skew zindex-100">
            <svg
              x="0"
              y="0"
              viewBox="0 0 2560 100"
              preserveAspectRatio="none"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
            >
              <polygon className="fill-white" points="2560 0 2560 100 0 100" />
            </svg>
          </div>
        </section>
        <section className="section section-lg bg-gradient-default">
          <div className="container pt-lg pb-300">
            <div className="row text-center justify-content-center">
              <div className="col-lg-10">
                <h2 className="display-3 text-white">Build something</h2>
                <p className="lead text-white">
                  According to the National Oceanic and Atmospheric
                  Administration, Ted, Scambos, NSIDClead scentist, puts the
                  potentially record low maximum sea ice extent tihs year down
                  to low ice.
                </p>
              </div>
            </div>
            <div className="row row-grid mt-5">
              <div className="col-lg-4">
                <div className="icon icon-lg icon-shape bg-gradient-white shadow rounded-circle text-primary">
                  <i className="ni ni-settings text-primary" />
                </div>
                <h5 className="text-white mt-3">Building tools</h5>
                <p className="text-white mt-3">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
              <div className="col-lg-4">
                <div className="icon icon-lg icon-shape bg-gradient-white shadow rounded-circle text-primary">
                  <i className="ni ni-ruler-pencil text-primary" />
                </div>
                <h5 className="text-white mt-3">Grow your market</h5>
                <p className="text-white mt-3">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
              <div className="col-lg-4">
                <div className="icon icon-lg icon-shape bg-gradient-white shadow rounded-circle text-primary">
                  <i className="ni ni-atom text-primary" />
                </div>
                <h5 className="text-white mt-3">Launch time</h5>
                <p className="text-white mt-3">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
            </div>
          </div>
          <div className="separator separator-bottom separator-skew zindex-100">
            <svg
              x="0"
              y="0"
              viewBox="0 0 2560 100"
              preserveAspectRatio="none"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
            >
              <polygon className="fill-white" points="2560 0 2560 100 0 100" />
            </svg>
          </div>
        </section>
        <section className="section section-lg pt-lg-0 section-contact-us">
          <div className="container">
            <div className="row justify-content-center mt--300">
              <div className="col-lg-8">
                <div className="card bg-gradient-secondary shadow">
                  <div className="card-body p-lg-5">
                    <h4 className="mb-1">Want to work with us?</h4>
                    <p className="mt-0">
                      Your project is very important to us.
                    </p>
                    <div className="form-group mt-5">
                      <div className="input-group input-group-alternative">
                        <div className="input-group-prepend">
                          <span className="input-group-text">
                            <i className="ni ni-user-run" />
                          </span>
                        </div>
                        <input
                          className="form-control"
                          placeholder="Your name"
                          type="text"
                        />
                      </div>
                    </div>
                    <div className="form-group">
                      <div className="input-group input-group-alternative">
                        <div className="input-group-prepend">
                          <span className="input-group-text">
                            <i className="ni ni-email-83" />
                          </span>
                        </div>
                        <input
                          className="form-control"
                          placeholder="Email address"
                          type="email"
                        />
                        >
                      </div>
                    </div>
                    <div className="form-group mb-4">
                      <textarea
                        className="form-control form-control-alternative"
                        name="name"
                        rows="4"
                        cols="80"
                        placeholder="Type a message..."
                      />
                    </div>
                    <div>
                      <button
                        type="button"
                        className="btn btn-default btn-round btn-block btn-lg"
                      >
                        Send Message
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="section section-lg">
          <div className="container">
            <div className="row row-grid justify-content-center">
              <div className="col-lg-8 text-center">
                <h2 className="display-3">
                  Do you love this awesome
                  <span className="text-success">
                    Design System for Bootstrap 4?
                  </span>
                </h2>
                <p className="lead">
                  Cause if you do, it can be yours for FREE. Hit the button
                  below to navigate to Creative Tim where you can find the
                  Design System in HTML. Start a new project or give an old
                  Bootstrap project a new look!
                </p>
                <div className="btn-wrapper">
                  <a
                    href="https://www.creative-tim.com/product/argon-design-system"
                    className="btn btn-primary mb-3 mb-sm-0"
                  >
                    Download HTML
                  </a>
                </div>
                <div className="text-center">
                  <h4 className="display-4 mb-5 mt-5">
                    Available on these technologies
                  </h4>
                  <div className="row justify-content-center">
                    <div className="col-lg-2 col-4">
                      <a
                        href="https://www.creative-tim.com/product/argon-design-system"
                        target="_blank"
                        data-toggle="tooltip"
                        data-original-title="Bootstrap 4 - Most popular front-end component library"
                      >
                        <img
                          src="https://s3.amazonaws.com/creativetim_bucket/tim_static_images/presentation-page/bootstrap.jpg"
                          className="img-fluid"
                        />
                      </a>
                    </div>
                    <div className="col-lg-2 col-4">
                      <a
                        href=" https://www.creative-tim.com/product/vue-argon-design-system"
                        target="_blank"
                        data-toggle="tooltip"
                        data-original-title="Vue.js - The progressive javascript framework"
                      >
                        <img
                          src="https://s3.amazonaws.com/creativetim_bucket/tim_static_images/presentation-page/vue.jpg"
                          className="img-fluid"
                        />
                      </a>
                    </div>
                    <div className="col-lg-2 col-4">
                      <a
                        href=" https://www.sketchapp.com/"
                        target="_blank"
                        data-toggle="tooltip"
                        data-original-title="[Coming Soon] Sketch - Digital design toolkit"
                      >
                        <img
                          src="https://s3.amazonaws.com/creativetim_bucket/tim_static_images/presentation-page/sketch.jpg"
                          className="img-fluid opacity-3"
                        />
                      </a>
                    </div>
                    <div className="col-lg-2 col-4">
                      <a
                        href=" https://www.adobe.com/products/photoshop.html"
                        target="_blank"
                        data-toggle="tooltip"
                        data-original-title="[Coming Soon] Adobe Photoshop - Software for digital images manipulation"
                      >
                        <img
                          src="https://s3.amazonaws.com/creativetim_bucket/tim_static_images/presentation-page/ps.jpg"
                          className="img-fluid opacity-3"
                        />
                      </a>
                    </div>
                    <div className="col-lg-2 col-4">
                      <a
                        href=" https://angularjs.org/"
                        target="_blank"
                        data-toggle="tooltip"
                        data-original-title="[Coming Soon] Angular - One framework. Mobile &amp; desktop"
                      >
                        <img
                          src="https://s3.amazonaws.com/creativetim_bucket/tim_static_images/presentation-page/angular.jpg"
                          className="img-fluid opacity-3"
                        />
                      </a>
                    </div>
                    <div className="col-lg-2 col-4">
                      <a
                        href=" https://angularjs.org/"
                        target="_blank"
                        data-toggle="tooltip"
                        data-original-title="[Coming Soon] React - A JavaScript library for building user interfaces"
                      >
                        <img
                          src="https://s3.amazonaws.com/creativetim_bucket/tim_static_images/presentation-page/react.jpg"
                          className="img-fluid opacity-3"
                        />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    );
  }
}
