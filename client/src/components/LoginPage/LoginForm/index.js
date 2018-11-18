import React from "react";

const LoginForm = props => {
  return (
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
            onChange={props.onChange}
            value={props.email}
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
            onChange={props.onChange}
            value={props.password}
          />
        </div>
      </div>
      {props.register && (
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
              onChange={props.onChange}
              value={props.confirmPassword}
            />
          </div>
        </div>
      )}
      <div className="custom-control custom-control-alternative custom-checkbox">
        <input
          className="custom-control-input"
          id=" customCheckLogin"
          type="checkbox"
        />
        <label className="custom-control-label" for="customCheckLogin">
          <span>Remember me</span>
        </label>
      </div>
      <div className="text-center">
        {props.register ? (
          <button
            type="button"
            className="btn btn-primary my-4"
            onClick={props.onSubmitRegister}
            disabled={props.loading}
          >
            Sign Up
          </button>
        ) : (
          <button
            type="button"
            className="btn btn-primary my-4"
            onClick={props.onSubmitLogin}
            disabled={props.loading}
          >
            Sign in
          </button>
        )}
      </div>
    </form>
  );
};

export default LoginForm;
