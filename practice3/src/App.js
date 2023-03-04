// import { createContext, useState } from "react";
import { useEffect, useReducer, useRef, useState } from "react";
import "./App.css";
// import { CompontA } from "./components/CompontA";
import Header from "./components/Header";
// import { Stopwatch } from "./components/Stopwatch";

// const UserContext = createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case "inc":
      return state + 1;
      break;
    case "dec":
      return state - 1;
      break;
    case "mul":
      return state * 2;
      break;
    case "div":
      return state / 2;
      break;
    default:
      return "useReducer";
      break;
  }
};

function App() {
  // const [data, setData] = useState({ name: "mike", marks: 90 });

  // const [input, setInput] = useState("");

  // const count = useRef("");

  // function inputField(e) {
  //   setInput(e.target.value);
  // }

  // useEffect(() => {
  //   count.current = input;
  // }, [input]);

  // function focusInput() {
  //   count.current.value = "Dhiraj";
  // }

  const [state, dispatch] = useReducer(reducer, 0);

  return (
    <div className="App">
      <Header />

      {/*<UserContext.Provider value={data}>
        <CompontA />
      </UserContext.Provider>

      <input type="text" ref={count}></input>
     <h1>Current Value: {input}</h1>
      <h1>Previous Value :{count.current}</h1> 
      <button onClick={focusInput}>Submit</button>
      <Stopwatch />*/}
      <h1>{state}</h1>
      <button onClick={() => dispatch({ type: "inc" })}>Increment</button>
      <button
        onClick={() =>
          dispatch({
            type: "dec",
          })
        }
      >
        Decrement
      </button>
      <button onClick={() => dispatch({ type: "mul" })}>Multiplaction</button>
      <button onClick={() => dispatch({ type: "div" })}>Division</button>
    </div>
  );
}

export default App;

// export { UserContext };
