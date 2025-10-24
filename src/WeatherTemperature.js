import React, { useState } from "react";

export default function WeatherTemperature(props) {
  function fahrenheit() {
    return (props.celsius * 9) / 5 + 32;
  }
  function handleFahrenheitClick(event) {
    event.preventDefault();
    props.onUnitChange("fahrenheit");
  }
  function handleCelsiusClick(event) {
    event.preventDefault();
    props.onUnitChange("celsius");
  }

  if (props.unit === "celsius") {
    return (
      <div className="WeatherTemperature">
        {" "}
        <span className="temperature">{Math.round(props.celsius)}</span>
        <span className="unit">
          °C |{" "}
          <a href="/" onClick={handleFahrenheitClick}>
            °F
          </a>
        </span>
      </div>
    );
  } else {
    return (
      <div className="WeatherTemperature">
        {" "}
        <span className="temperature">{Math.round(fahrenheit())}</span>
        <span className="unit">
          <a href="/" onClick={handleCelsiusClick}>
            °C
          </a>
          | °F
        </span>
      </div>
    );
  }
}
