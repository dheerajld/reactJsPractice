import "./App.css";
import Header from "./component/Header";
import { Student } from "./component/Student";
import "./css/Footer.css";
import "./css/Header.css";

function App() {
  return (
    <div className="App">
      React Full Course
      <Header />
      <Student name="Mark" age="25" />
    </div>
  );
}

export default App;
