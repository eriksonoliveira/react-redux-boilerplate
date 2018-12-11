import { createStore } from "redux";
import { devToolsEnhancer } from "redux-devtools-extension";

import tasksReducer from "../reducers/TasksReducer";
// import rootReducer from "../reducers";

const store = createStore(tasksReducer, devToolsEnhancer());

if (module.hot) {
  module.hot.accept("../reducers", () => {
    const nextRootReducer = require("../reducers/index");
    store.replaceReducer(nextRootReducer);
  });
}

export default store;
