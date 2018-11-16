import React from "react";
import Button from "../Button/Button";

const TaskPage = props => {
  return (
    <div>
      <p>
        {props.tasks.map(task => {
          return (
            <div className="task" key={task.id}>
              {task.title}
            </div>
          );
        })}
      </p>
      <Button label="Regular Button" />
    </div>
  );
};

export default TaskPage;
