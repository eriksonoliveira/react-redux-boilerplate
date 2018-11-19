import React, { Component } from "react";
import "../styles/main.scss";
import { connect } from "react-redux";
import { createTask, editTask } from "../actions";

import TaskPage from "./TaskPage";

class App extends Component {
  onCreateTask = ({ title }) => {
    this.props.dispatch(createTask({ title }));
  };

  onStatusChange = (id, status) => {
    console.log("new status:", status);
    this.props.dispatch(editTask(id, { status }));
  };

  render() {
    return (
      <div>
        <TaskPage
          tasks={this.props.tasks}
          onCreateTask={this.onCreateTask}
          onStatusChange={this.onStatusChange}
        />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    tasks: state.tasks
  };
}

export default connect(mapStateToProps)(App);
