import React, { Component } from "react";
import styles from "../styles/main.scss";
import Button from "./Button/Button";

class App extends Component {
  render() {
    return (
      <div>
        <Button label="Regular Button" />
      </div>
    );
  }
}

export default App;
