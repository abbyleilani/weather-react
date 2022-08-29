import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";
import axios from "axios";

export default function WeatherForecast(props) {
  function handleResponse(response) {
    console.log(response.data);
  }

  const apiKey = "f14ebee905d769055360762f5ca6cd29&";
  let latitude = props.coordinates.lat;
  let longtitude = props.coordinates.lon;
  let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longtitude}&exclude=hourly,daily&appid=${apiKey}&units=metric`;

  axios.get(apiUrl).then(handleResponse);

  return (
    <div className="WeatherForecast">
      <div className="row">
        <div className="col">
          <div className="WeatherForecast-day"> Thur</div>
          <WeatherIcon code="01d" size={36} />
          <div className="WeatherForecast-temperatures">
            {" "}
            <span className="WeatherForecast-temperatures-max"> 19°</span>{" "}
            <span className="WeatherForecast-temperatures-min"> 10°</span>
          </div>
        </div>
      </div>
    </div>
  );
}
