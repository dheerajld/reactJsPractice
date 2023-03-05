import "./App.css";
// import { useFetch } from "./components/customHook/useFetch";
import Header from "./components/Header";
import { ShowData } from "./components/loaderToastify/ShowData";
// import { MemoHook } from "./components/useMemoHook/MemoHook";

function App() {
  // const [data] = useFetch("https://hub.dummyapis.com/employee?noofRecords=50");

  return (
    <div className="App">
      <Header />

      {/**{data.map((e, i) => {
        return (
          <div key={i}>
            <h2 className="App-text">{e.email}</h2>
          </div>
        );
      })} 
    
      <MemoHook />
    
    */}
      <ShowData />
    </div>
  );
}

export default App;
