import React from "react";
import "./Weather.css";

export default function Weather() {
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
            <li>Saturday 10:50 </li>
            <li>broken clouds</li>
            <li>humidity</li>
            <li>wind</li>
          </ul>
        </div>
        <div className="col-6">
          <h1>21°C</h1>
        </div>
      </div>
    </div>
  );
}
