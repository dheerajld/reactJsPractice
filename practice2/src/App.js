import "./App.css";
import { Employee } from "./component/Employee";
import UserDetials from "./component/UserDetials";
import Header from "./component/Header";
import { Routes, Route } from "react-router-dom";
import { About } from "./component/About";
import Error from "./component/Error";
import Courses from "./component/courses";
import Search from './component/Search';
import List from './component/List';
import UserDetailPage from "./component/UserDetailPage";

function App() {
  return (
    <div className="App">
      <Header />

      <Routes>
        <Route exact path="/" element={<Employee />} />
            
        <Route path="/user" element={<UserDetials />} />
        <Route path="/about" element={<About />}>
        <Route path="userDetail" element={<UserDetailPage />} />
          </Route>
        <Route path="/courses" element={<Courses />}>
            <Route path="search" element={<Search />} />
            <Route path="list" element={<List/>}/>
          </Route>
       
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
}

export default App;
