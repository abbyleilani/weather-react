import React from "react";
import axios from "axios";
import { ThreeDots } from "react-loader-spinner";

export default function Weather(props) {
  function handleResponse(response) {
    alert(`The weather in ${props.city} is ${response.data.main.temp}`);
  }

  let apiKey = "f14ebee905d769055360762f5ca6cd29";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${apiKey}&units=metric`;

  axios.get(apiUrl).then(handleResponse);
  return (
    <div>
      Hello from weather
      <ThreeDots color="#00BFFF" height={80} width={80} />
    </div>
  );
}
