import React, { Component } from "react";
import { TASK_STATUSES } from "../../constants";

import TaskList from "../TaskList";
import InputField from "../InputField";
import Button from "../Button/Button";
import styles from "./style.scss";

class TaskPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showNewCardForm: false,
      title: "",
      description: ""
    };
  }

  onTitleChange = e => {
    this.setState({
      title: e.target.value
    });
  };

  onDescriptionChange = e => {
    this.setState({
      description: e.target.value
    });
  };

  resetForm = () => {
    this.setState({
      title: "",
      description: ""
    });
  };

  renderTaskList() {
    const { tasks } = this.props;
    return TASK_STATUSES.map(status => {
      const statusTasks = tasks.filter(task => task.status === status);
      return (
        <TaskList
          key={status}
          status={status}
          tasks={statusTasks}
          onStatusChange={this.props.onStatusChange}
        />
      );
    });
  }

  onCreateTask = e => {
    e.preventDefault();
    if (this.state.title.length > 0) {
      this.props.onCreateTask({
        title: this.state.title,
        description: this.state.description
      });
      this.resetForm();
    }
  };

  toggleForm = () => {
    this.setState({ showNewCardForm: !this.state.showNewCardForm });
  };

  render() {
    const buttonLabel = this.state.showNewCardForm ? "Cancel" : "+ New task";
    return (
      <div className="tasks">
        <Button
          label={buttonLabel}
          type="button"
          onCreateTask={this.toggleForm}
        />
        {this.state.showNewCardForm && (
          <InputField
            onTitleChange={this.onTitleChange}
            onDescriptionChange={this.onDescriptionChange}
            onCreateTask={this.onCreateTask}
            {...this.state}
          />
        )}
        <div className="task-list-container">{this.renderTaskList()}</div>
      </div>
    );
  }
}

export default TaskPage;
