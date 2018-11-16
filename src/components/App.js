import React, { Component } from "react";
import styles from "../styles/main.scss";
import { connect } from "react-redux";

import TaskPage from "./TaskPage";

class App extends Component {
  render() {
    return (
      <div>
        <TaskPage tasks={this.props.tasks} />
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
