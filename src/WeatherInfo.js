import React from "react";
import DateFormat from "./DateFormat";
import WeatherIcon from "./WeatherIcon";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <div className="row">
        <div className="col-6">
          <h1>{props.data.city} </h1>
          <ul>
            {" "}
            <li>
              {" "}
              <DateFormat date={props.data.date} />{" "}
            </li>
            <li> {props.data.description} </li>
            <li>humidity: {props.data.humidity}% </li>
            <li>wind: {Math.round(props.data.wind)} mph</li>
          </ul>
        </div>
        <div className="col-6">
          <h1>{Math.round(props.data.temperature)}°C</h1>
          <div className="float-left">
            <WeatherIcon code={props.data.icon} alt={props.data.description} />
          </div>
        </div>
      </div>
    </div>
  );
}
