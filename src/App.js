import { useEffect, useState } from "react";
import "./App.css";
import { getMovielist, searchMovie } from "./api";

const App = () => {
  const [popularMovies, setPopularMovies] = useState ([])

  useEffect(() => {
    getMovielist().then((result)=>{
      setPopularMovies(result)
    })
  }, []);

  const popularMovieList = ()=>{
    return popularMovies.map((movie,i) =>{
      return(
      <div className="Movie-wrapper" key={i}>
      <div className="Movie-title">{movie.title}</div>
      <img  alt="" className="Movie-img" src={movie.poster_path} />
      <div className="Movie-date">{movie.release_date}</div>
      <div className="Movie-rate">{movie.vote_average}</div>
    </div>
      )
    }
    ) };
  

  const search = (q) => {
    console.log({ q });
  };
  console.log({popularMovies:popularMovies})


  return (
    <div className="App">
      <header className="App-header">
        <h1>Movie App</h1>
        <input className="Movie-search" placeholder="Cari film kesayangan anda..." onChange={({ target }) => search(target.value)} />
        <div className="Movie-container">
          <popularMovieList/>
        </div>
      </header>
    </div>
  );
};

export default App;
