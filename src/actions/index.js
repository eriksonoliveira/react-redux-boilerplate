let _id = 1;
export function uniqueId() {
  return _id++;
}

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
