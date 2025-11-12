import React, { useState } from "react";
import "./Weather.css";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import WeatherInfo from "./WeatherInfo.js";
import WeatherForecast from "./WeatherForecast";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);
  const [unit, setUnit] = useState("celsius");
  function handleUnitChange(newUnit) {
    setUnit(newUnit);
  }
  function handleResponse(response) {
    setWeatherData({
      ready: true,
      temperature: response.data.temperature.current,
      humidity: response.data.temperature.humidity,
      description: response.data.condition.description,
      wind: response.data.wind.speed,
      city: response.data.city,
      date: new Date(response.data.time * 1000),
      icon: response.data.condition.icon,
      coordinates: response.data.coordinates,
    });
  }
  function search() {
    const apiKey = "79e2b848de54da3deo0aafeff8t7fa08";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }
  function handleSubmit(event) {
    event.preventDefault();
    search();
  }
  function handleCityChange(event) {
    setCity(event.target.value);
  }
  if (weatherData.ready) {
    return (
      <div className="Weather">
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-8">
              <input
                type="search"
                placeholder="Enter a city..."
                className="form-control"
                autoFocus="on"
                onChange={handleCityChange}
              />
            </div>
            <div className="col-4">
              <input
                type="submit"
                value="Search"
                className="btn btn-primary w-100"
                style={{
                  backgroundColor: "#247291",
                  color: "white",
                  borderColor: "#247291",
                }}
              />
            </div>
          </div>
        </form>
        <WeatherInfo
          data={weatherData}
          unit={unit}
          onUnitChange={handleUnitChange}
        />
        <WeatherForecast coordinates={weatherData.coordinates} unit={unit} />
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}
