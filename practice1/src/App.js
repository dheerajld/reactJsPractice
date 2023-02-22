import "./App.css";
import Header from "./component/Header";
import Footer from "./component/Footer";
import "./css/Footer.css";
import "./css/Header.css";
import React, { useState } from "react";

function App() {
  const [num, setNum] = useState(0);

  // const inc = () => {
  //   setNum(num + 1);
  // };

  // const dec = () => {
  //   setNum(num - 1);
  // };

  let objectDate = new Date();

  let year = objectDate.getFullYear();

  let format = "-" + year;

  return (
    <div className="App">
      <Header />
      <div>
        <h1>useState Hook</h1>
      </div>
      <div>
        <h1>{num}</h1>
      </div>
      <div>
        <button className="btn" onClick={() => setNum(num + 1)}>
          Increment
        </button>
        <button className="btn" onClick={() => setNum(num - 1)}>
          Deccrement
        </button>
      </div>

      <Footer content="Powered by Hooks" date={format} />
    </div>
  );
}

export default App;
