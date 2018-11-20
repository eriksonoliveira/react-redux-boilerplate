import { createTask } from "../actions";

describe("CreateTask action", () => {
  const expectedAction = {
    type: "CREATE_TASK",
    payload: {
      id: 1,
      title: "task",
      status: "Unstarted"
    }
  };

  it("returns an action", () => {
    const title = {
      title: "task"
    };

    expect(createTask(title)).toEqual(expectedAction);
  });
});
