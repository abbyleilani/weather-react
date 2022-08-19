import React, { useState } from "react";
import "./WeatherTemperature.css";

export default function WeatherTemperature(props) {
  const [unit, setUnit] = useState("celsius");

  function convertoFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  if (unit === `celsius`) {
    return (
      <div className="weatherTemperature">
        <h2>
          <span className="temperature">{Math.round(props.celsius)} </span>
          <span className="unit">
            °C|{" "}
            <a href="/" onClick={convertoFahrenheit}>
              °F
            </a>{" "}
          </span>
        </h2>
      </div>
    );
  } else {
    return (
      <div className="weatherTemperature">
        <h2>
          <span className="temperature">{Math.round(props.celsius)} </span>
          <span className="unit">
            <a href="/" onClick={convertoFahrenheit}>
              °C
            </a>
            | °F{" "}
          </span>
        </h2>
      </div>
    );
  }
}
