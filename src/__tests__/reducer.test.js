import tasksReducer from "../reducers";

describe("taskReducer", () => {
  const mockTasks = {
    tasks: [
      {
        id: 1,
        title: "task 1",
        status: "Unstarted"
      },
      {
        id: 2,
        title: "task 2",
        status: "In Progress"
      }
    ]
  };

  it("should return the initial state", () => {
    expect(tasksReducer(undefined, {})).toEqual(mockTasks);
  });

  it("should handle the CREATE_TASK action", () => {
    const mockCreateTaskAction = {
      type: "CREATE_TASK",
      payload: {
        id: 3,
        title: "task",
        status: "Unstarted"
      }
    };

    const expectedState = {
      tasks: mockTasks.tasks.concat(mockCreateTaskAction.payload)
    };

    expect(tasksReducer(mockTasks, mockCreateTaskAction)).toEqual(
      expectedState
    );
  });

  it("should handle EDIT_TASK action", () => {
    const mockEditTaskAction = {
      type: "EDIT_TASK",
      payload: {
        id: 2,
        params: {
          status: "Completed"
        }
      }
    };

    const expectedEditedTask = {
      id: 2,
      title: "task 2",
      status: "Completed"
    };

    expect(tasksReducer(mockTasks, mockEditTaskAction)["tasks"][1]).toEqual(
      expectedEditedTask
    );
  });
});
