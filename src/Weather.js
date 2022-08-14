import React from "react";
import "./Weather.css";

export default function Weather() {
  let weatherData = {
    city: "San Francisco",
    date: "Thursday, 5:00pm",
    description: "Partly cloudy",
    fahrenheit: "72",
    celsisus: "22",
    imgUrl: "/",
    humidity: "10",
    windSpeed: "5",
  };

  return (
    <div className="App">
      <div className="Weather">
        <form>
          <div className="row search-form">
            <div className="col-9">
              <input
                type="search"
                placeholder="Type a city"
                autoComplete="off"
                autoFocus="off"
                className="form-control"
              />
            </div>
            <div className="col-3">
              <input
                type="submit"
                value="Search"
                className="form-control search-btn"
              />
            </div>
          </div>
        </form>

        <h1> {weatherData.city} </h1>
        <h2 className="temperature">
          <span></span>
          <span className="units">
            <a href="/" className="active">
              {weatherData.fahrenheit}
              °F
            </a>{" "}
            |
            <a href="/" className="inactive">
              {weatherData.celsisus}
              °C
            </a>
          </span>
          <img alt="..." src={weatherData.imgUrl} />
        </h2>
        <h3>Last updated: {weatherData.date} </h3>
        <ul>
          <li className="weatherConditions"> {weatherData.description} </li>
          <li>
            Humidity: <span className="weatherConditions"></span>{" "}
            {weatherData.humidity} %
          </li>
          <li>
            Wind: <span className="weatherConditions"></span>{" "}
            {weatherData.windSpeed} mph
          </li>
        </ul>
        <p className="source">
          <a href="https://github.com/abbyleilani/weather-react">
            Open source code
          </a>
          {""} by Abbygayle Baker
        </p>
      </div>
    </div>
  );
}
