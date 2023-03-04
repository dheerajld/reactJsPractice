import "./App.css";
import { useFetch } from "./components/customHook/useFetch";
import Header from "./components/Header";

function App() {
  const [data] = useFetch("https://hub.dummyapis.com/employee?noofRecords=50");

  return (
    <div className="App">
      <Header />
      {data.map((e, i) => {
        return (
          <div key={i}>
            <h2 className="App-text">{e.email}</h2>
          </div>
        );
      })}
    </div>
  );
}

export default App;
