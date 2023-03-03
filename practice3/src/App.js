// import { createContext, useState } from "react";
import { useEffect, useRef, useState } from "react";
import "./App.css";
// import { CompontA } from "./components/CompontA";
import Header from "./components/Header";
import { Stopwatch } from "./components/Stopwatch";

// const UserContext = createContext();

function App() {
  // const [data, setData] = useState({ name: "mike", marks: 90 });

  // const [input, setInput] = useState("");

  const count = useRef("");

  // function inputField(e) {
  //   setInput(e.target.value);
  // }

  // useEffect(() => {
  //   count.current = input;
  // }, [input]);

  function focusInput() {
    count.current.value = "Dhiraj";
  }

  return (
    <div className="App">
      <Header />

      {/*<UserContext.Provider value={data}>
        <CompontA />
      </UserContext.Provider>*/}

      <input type="text" ref={count}></input>
      {/* <h1>Current Value: {input}</h1>
      <h1>Previous Value :{count.current}</h1> */}
      <button onClick={focusInput}>Submit</button>
      <Stopwatch />
    </div>
  );
}

export default App;

// export { UserContext };
