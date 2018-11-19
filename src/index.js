import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import tasksReducer from "./reducers";
import { Provider } from "react-redux";
import App from "./components/App";

const store = createStore(tasksReducer);

if (module.hot) {
  module.hot.accept("./reducers", () => {
    const nextRootReducer = require("./reducers/index");
    store.replaceReducer(nextRootReducer);
  });
}

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
