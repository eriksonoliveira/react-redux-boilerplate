import { uniqueId } from "../actions";
import { CREATE_TASK, EDIT_TASK } from "../constants";
const mockTasks = [
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
];

export default function tasksReducer(state = { tasks: mockTasks }, action) {
  switch (action.type) {
    case CREATE_TASK:
      return { tasks: state.tasks.concat(action.payload) };
    case EDIT_TASK:
      console.log("edit task action: ", action);
      return {
        tasks: state.tasks.map(task => {
          if (task.id === action.payload.id) {
            return Object.assign({}, task, action.payload.params);
          }
          return task;
        })
      };
    default:
      return state;
  }
}
