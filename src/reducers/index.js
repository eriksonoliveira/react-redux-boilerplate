const mockTasks = [
  {
    id: 1,
    title: "task 1"
  },
  {
    id: 2,
    title: "task 2"
  }
];

export default function tasksReducer(state = { tasks: mockTasks }, action) {
  return state;
}
