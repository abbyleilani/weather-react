import React from "react";
import DateFormat from "./DateFormat";
import WeatherIcon from "./WeatherIcon";
import "./WeatherInfo.css";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <div className="row">
        <div className="col-5">
          <h1>{props.data.city} </h1>
          <ul className="text-capitalize">
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
        <div className="col-2">
          <WeatherIcon code={props.data.icon} alt={props.data.description} />
        </div>
        <div className="col-5">
          {" "}
          <h2> {Math.round(props.data.temperature)}°C</h2>
        </div>
      </div>
    </div>
  );
}
