import * as types from "../constants";
import * as api from "../api";

export function createTaskSucceeded(task) {
  return {
    type: types.CREATE_TASK,
    payload: {
      task
    }
  };
}

// Handle new task creation. The new action will always
// have a initial status of 'Unstarted'.
export function createTask({ title, description, status = "Unstarted" }) {
  return dispatch => {
    api.createTask({ title, description, status }).then(resp => {
      dispatch(createTaskSucceeded(resp.data));
    });
  };
}

export function editTask(id, params = {}) {
  return {
    type: "EDIT_TASK",
    payload: {
      id,
      params
    }
  };
}

export function fetchTasksSucceeded(tasks) {
  return {
    type: types.FETCH_TASKS_SUCCEEDED,
    payload: {
      tasks
    }
  };
}

export function fetchTasks() {
  return dispatch => {
    api.fetchTasks().then(resp => dispatch(fetchTasksSucceeded(resp.data)));
  };
}
