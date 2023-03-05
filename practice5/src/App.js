import "./App.css";
import React from "react";
import Comp from "./components/Comp";

class App extends React.Component {
  render() {
    return (
      <>
        <div className="App-header">
          <h1>Class Component</h1>
        </div>
        <Comp header="Component Example" />
      </>
    );
  }
}

export default App;
