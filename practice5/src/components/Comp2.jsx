import React, { Component } from "react";

export default class Comp2 extends Component {
  componentWillUnmount() {
    alert("Remove the component");
  }
  render() {
    return (
      <div>
        <h1>Child Component</h1>
      </div>
    );
  }
}
