import React from "react";
import "./style.scss";
import Button from "../Button/Button";

const InputField = props => {
  return (
    <form className="task-list-form">
      <input type="text" onChange={props.onInputChange} value={props.value} />
      <Button label="Submit" type="submit" onCreateTask={props.onCreateTask} />
    </form>
  );
};

export default InputField;
