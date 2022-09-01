import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecastDay(props) {
  function maxTemperature() {
    let temperature = Math.round(props.forecastData.temp.max);
    return `${temperature}°`;
  }

  function minTemperature() {
    let temperature = Math.round(props.forecastData.temp.min);
    return `${temperature}°`;
  }

  function day() {
    let date = new Date(props.forecastData.dt * 1000);
    let day = date.getDay();

    let days = ["Sun", "Mon", "Tues", "Wed", "Thurs", "Fri", "Sat"];

    return days[day];
  }

  return (
    <div>
      <div className="WeatherForecastDay"> {day()} </div>
      <WeatherIcon code={props.forecastData.weather[0].icon} size={36} />
      <div className="WeatherForecast-temperatures">
        {" "}
        <span className="WeatherForecast-temperatures-max">
          {" "}
          {maxTemperature()}
        </span>{" "}
        <span className="WeatherForecast-temperatures-min">
          {" "}
          {minTemperature()}
        </span>
      </div>
    </div>
  );
}
