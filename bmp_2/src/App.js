import './App.css';

function App() {
  return (
    <div className="App">
      <a href="https://docs.google.com/forms/d/e/1FAIpQLScCrdrGQ1fx_fDxqrXEo34cLNtq6KjcZB2WTv4O_yJDKEzgKg/viewform"  target="_blank">
        <img src={process.env.PUBLIC_URL+ "/bmp.jpg"} className="bmp-image" alt="bmp"  />
      </a>
    </div>
  );
}

export default App;
