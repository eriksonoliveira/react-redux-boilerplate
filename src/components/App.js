import React, { Component } from "react";
import styles from "../styles/main.scss";
import Button from "./Button/Button";
import FancyButton from "./Fancy-button/Fancy-button";

class App extends Component {
  render() {
    return (
      <div>
        <Button label="Regular Button" />
        <FancyButton label="Fancy Button" />
      </div>
    );
  }
}

export default App;
