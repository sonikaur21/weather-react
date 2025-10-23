import React, { useState } from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";
import axios from "axios";

export default function WeatherForecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);
  function handleResponse(response) {
    console.log(response.data);
    setForecast(response.data.daily);
    setLoaded(true);
  }
  if (loaded) {
    return (
      <div className="WeatherForecast">
        {" "}
        <div className="row">
          <div className="col">
            {" "}
            <div>Thu</div> <WeatherIcon code="01d" size={36} />
            <div className="weatherForecast-temperatures">
              {" "}
              <span className="weatherForecast-temperature-max">
                {" "}
                {forecast[0].temp.max}
              </span>
              <span className="weatherForecast-temperature-min">
                {" "}
                {forecast[0].temp.min}
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "73a00877081bd43422bdee0f3022beb5";
    let longitude = props.coordinates.lon;
    let latitude = props.coordinates.lat;
    let apiUrl = `https://api.shecodes.io/weather/v1/forecast?lon=${longitude}&lat=${latitude}&key=${apiKey}&units=metric`;

    axios.get(apiUrl).then(handleResponse);
    return null;
  }
}
