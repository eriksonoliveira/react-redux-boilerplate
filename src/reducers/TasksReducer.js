import { CREATE_TASK, EDIT_TASK, FETCH_TASKS_SUCCEEDED } from "../constants";

// Updates the store in response to actions
export default function tasksReducer(state = { tasks: [] }, action) {
  switch (action.type) {
    case CREATE_TASK: {
      return { tasks: state.tasks.concat(action.payload) };
    }
    case EDIT_TASK: {
      return {
        tasks: state.tasks.map(task => {
          if (task.id === action.payload.id) {
            return Object.assign({}, task, action.payload.params);
          }
          return task;
        })
      };
    }
    case FETCH_TASKS_SUCCEEDED: {
      return {
        tasks: action.payload.tasks
      };
    }
    default:
      return state;
  }
}
