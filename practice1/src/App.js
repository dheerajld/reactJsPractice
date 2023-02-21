import "./App.css";
import Header from "./component/Header";
import Footer from "./component/Footer";
import "./css/Footer.css";
import "./css/Header.css";
import { Movies } from "./component/Movies/Movies";
import MoviesJson from "./MoviesJson/Movies.json";

function App() {
  let objectDate = new Date();

  let year = objectDate.getFullYear();

  let format = "-" + year;
  return (
    <div className="App">
      <Header />
      {MoviesJson.map((movie) => {
        // console.log(movie.Title);
        return (
          <Movies title={movie.Title} year={movie.Year} image={movie.Poster} />
        );
      })}

      <Footer content="Powered by Movies" date={format} />
    </div>
  );
}

export default App;
