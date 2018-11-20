let _id = 1;
export function uniqueId() {
  return _id++;
}

// Handle new task creation. The new action will always
// have a status of 'Unstarted'.
export function createTask({ title }) {
  return {
    type: "CREATE_TASK",
    payload: {
      id: uniqueId(),
      title,
      status: "Unstarted"
    }
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
