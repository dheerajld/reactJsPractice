import React, { Component } from "react";
import Comp2 from "./Comp2";

export default class Comp extends Component {
  state = {
    name: "",
    count: 0,
    prvName: "",
    show: true,
  };

  inc = () => {
    this.setState({ count: this.state.count + 1 });
  };

  componentDidMount() {
    this.setState({ count: (this.state.count = 10) });
  }

  componentDidUpdate(prvProps, prvState) {
    // if (this.state.count < 50) {
    //   this.setState({ count: this.state.count + 2 });
    // }
    if (prvState.name != this.state.name) {
      this.setState({ prvName: prvState.name });
    }
  }

  render() {
    let child;
    if (this.state.show) {
      child = <Comp2 />;
    }
    return (
      <div className="comp">
        <div>
          <input onChange={(e) => this.setState({ name: e.target.value })} />
        </div>
        <div>
          <h1>{this.props.header}</h1>
          <h3>{this.state.name}</h3>
          <h3>{this.state.prvName}</h3>
          <h1>{this.state.count}</h1>
          <button onClick={this.inc}>Counter</button>
        </div>
        <diV>
          <h1>{child}</h1>
          <button onClick={() => this.setState({ show: false })}>
            Delete Component
          </button>
        </diV>
      </div>
    );
  }
}
