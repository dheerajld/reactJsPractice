import "./App.css";
import { Employee } from "./component/Employee";
import UserDetials from "./component/UserDetials";
import Header from "./component/Header";
import { Routes, Route } from "react-router-dom";
import { About } from "./component/About";

function App() {
  return (
    <div className="App">
      <Header />

      <Routes>
        <Route exact path="/" element={<Employee />} />
        <Route path="/user" element={<UserDetials />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
