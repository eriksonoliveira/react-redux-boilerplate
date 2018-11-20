import { uniqueId } from "../actions";
import { CREATE_TASK, EDIT_TASK } from "../constants";

// Initial data
const mockTasks = {
  tasks: [
    {
      id: uniqueId(),
      title: "task 1",
      status: "Unstarted"
    },
    {
      id: uniqueId(),
      title: "task 2",
      status: "In Progress"
    }
  ]
};

// Updates the store in response to actions
export default function tasksReducer(state = mockTasks, action) {
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
    default:
      return state;
  }
}
