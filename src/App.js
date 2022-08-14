import React from "react";
import "./App.css";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Weather city="Tokyo" />
        <p className="source">
          <a
            href="https://github.com/abbyleilani/weather-react"
            target="_blank"
            rel="noreferrer"
          >
            Open source code
          </a>
          {""} by Abbygayle Baker
        </p>
      </header>
    </div>
  );
}

export default App;
