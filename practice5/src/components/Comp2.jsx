import React, { Component } from "react";

export default class Comp2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };

    this.inc = this.inc.bind(this);
  }

  inc() {
    this.setState({ count: this.state.count + 2 });
  }

  componentWillUnmount() {
    alert("Remove the component");
  }
  render() {
    return (
      <div>
        <h1>{this.state.count}</h1>
        <button onClick={this.inc}>Count constructor</button>
      </div>
    );
  }
}
