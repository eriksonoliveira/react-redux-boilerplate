import React, { Component } from "react";
import styles from "./Fancy-button.scss";

class FancyButton extends Component {
  render() {
    return <button className={styles.button}>{this.props.label}</button>;
  }
}

export default FancyButton;
