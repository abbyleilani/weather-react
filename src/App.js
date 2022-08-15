import React from "react";
import "./App.css";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <header>
        <div className="container">
          <Weather />
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
        </div>
      </header>
    </div>
  );
}

export default App;
