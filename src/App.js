import "./App.css";

const App = ()=>  {
const search = (q) =>{
  console.log({q})
}

  return (
    <div className="App">
      <header className="App-header">
      <h1>Movie App</h1>
      <input className="Movie-search" placeholder="Cari film kesayangan anda..." onChange={({target}) => search(target.value)} />
    <div className="Movie-container">     
      <div className="Movie-wrapper">
        <div className="Movie-title">Test</div>
        <img src="" alt="" className="Movie-img" />
        <div className="Movie-date">12-03-2001</div>
        <div className="Movie-rate">9.9</div>
      </div>
      <div className="Movie-wrapper">
        <div className="Movie-title">Test</div>
        <img src="" alt="" className="Movie-img" />
        <div className="Movie-date">29-03-2003</div>
        <div className="Movie-rate">9.8</div>
      </div>
    </div>
    </header>
    </div>
  );
}

export default App;
