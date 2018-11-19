import React from "react";
import "./Button.scss";

const Button = props => {
  return (
    <button
      className="button"
      type={props.buttonType}
      onClick={props.onCreateTask}
    >
      {props.label}
    </button>
  );
};

export default Button;
