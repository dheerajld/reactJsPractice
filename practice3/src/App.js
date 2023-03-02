import { createContext, useState } from "react";
import "./App.css";
import { CompontA } from "./components/CompontA";
import Header from "./components/Header";

const UserContext = createContext();

function App() {
  const [data, setData] = useState({ name: "mike", marks: 90 });

  return (
    <div className="App">
      <Header />
      <UserContext.Provider value={data}>
        <CompontA />
      </UserContext.Provider>
    </div>
  );
}

export default App;

export { UserContext };
