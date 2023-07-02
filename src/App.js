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

  const PopularMovieList = () => {
    return popularMovies.map((movie,i) =>{
      return(
      <div className="Movie-wrapper" key={i}>
      <div className="Movie-title">{movie.title}</div>
      <img  alt="" className="Movie-img" src={`${process.env.REACT_APP_BASEIMGURL}/${movie.poster_path}`} />
      <div className="Movie-date">{movie.release_date}</div>
      <div className="Movie-rate">{movie.vote_average}</div>
    </div>
      )
    }
    ) };
  

  const search = (q) => {
    console.log({ q });
  };


  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-name">Movie App</h1>
        <input className="Movie-search" placeholder="Cari film kesayangan anda..." onChange={({ target }) => search(target.value)} />
        <div className="Movie-container">
          <PopularMovieList/>
        </div>
      </header>
    </div>
  );
};

export default App;
