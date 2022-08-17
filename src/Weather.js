import React, { useState } from "react";
import "./Weather.css";
import axios from "axios";
import "./DateFormat";
import DateFormat from "./DateFormat";

export default function Weather(props) {
  const [ready, setReady] = useState(false);
  const [weatherData, setWeatherData] = useState({});
  function handleResponse(response) {
    setWeatherData({
      city: response.data.name,
      date: Date(response.data.dt * 1000),
      temperature: response.data.main.temp,
      description: response.data.weather[0].description,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
    });
    setReady(true);
  }

  if (ready) {
    return (
      <div className="container">
        <form>
          <input type="search" placeholder="enter a city" />
          <input type="submit" value="search" />
        </form>
        <div className="row">
          <div className="col-6">
            <h1>New York</h1>
            <ul>
              {" "}
              <li>
                {" "}
                <DateFormat date={weatherData.date} />{" "}
              </li>
              <li> {weatherData.description} </li>
              <li>humidity:{weatherData.humidity} </li>
              <li>wind: {weatherData.wind} </li>
            </ul>
          </div>
          <div className="col-6">
            <h1>{Math.round(weatherData.temperature)}°C</h1>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "f14ebee905d769055360762f5ca6cd29&";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}units=metric`;
    axios.get(apiUrl).then(handleResponse);

    return "Loading...";
  }
}
