import { createStore } from "redux";
import { devToolsEnhancer } from "redux-devtools-extension";
import taskReducer from "../reducers";

const store = createStore(taskReducer, devToolsEnhancer());

if (module.hot) {
  module.hot.accept("../reducers", () => {
    const nextRootReducer = require("../reducers/index");
    store.replaceReducer(nextRootReducer);
  });
}

export default store;
