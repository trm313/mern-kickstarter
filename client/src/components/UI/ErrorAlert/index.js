import React from "react";

const ErrorAlert = props => {
  return (
    <div className="alert alert-danger" role="alert">
      <strong>{props.bold || "Error:"}</strong>{" "}
      {props.text || "An issue occurred, please try again"}
    </div>
  );
};

export default ErrorAlert;
