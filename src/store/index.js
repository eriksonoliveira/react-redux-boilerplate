import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import tasksReducer from "../reducers/TasksReducer";
// import rootReducer from "../reducers";

const store = createStore(
  tasksReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

if (module.hot) {
  module.hot.accept("../reducers", () => {
    const nextRootReducer = require("../reducers/index");
    store.replaceReducer(nextRootReducer);
  });
}

export default store;
