import React from "react";
import { TASK_STATUSES } from "../../constants";

const Task = props => {
  return (
    <div className="task" key={props.task.id}>
      <div>{props.task.title}</div>
      <select value={props.task.status} onChange={onStatusChange}>
        {TASK_STATUSES.map(status => (
          <option key={status} value={status}>
            {status}
          </option>
        ))}
      </select>
      <br />
      <br />
      <div>{props.task.description}</div>
    </div>
  );
  function onStatusChange(e) {
    props.onStatusChange(props.task.id, e.target.value);
  }
};

export default Task;
