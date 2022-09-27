import React from "react";
import "./App.css";
import "./images/WeatherLogo.png";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <img src="./images/WeatherLogo.png" alt="logo" className="logo"/>
      <header>
        <div className="container">
          <Weather defaultCity="New York" />
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
