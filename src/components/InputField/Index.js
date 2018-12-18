import React from "react";
import "./style.scss";
import Button from "../Button/Button";

const InputField = props => {
  return (
    <form className="task-list-form">
      <input
        type="text"
        onChange={props.onTitleChange}
        value={props.title}
        placeholder="title"
      />
      <input
        type="text"
        onChange={props.onDescriptionChange}
        value={props.description}
        placeholder="description"
      />
      <Button label="Submit" type="submit" onCreateTask={props.onCreateTask} />
    </form>
  );
};

export default InputField;
