import React from "react";
import FormattedDate from "./FormattedDate";

export default function WeatherInfo(props) {
  return (
    <div className="weatherinfo">
      {" "}
      <h1> {props.data.city} </h1>
      <ul>
        <li>
          <FormattedDate date={props.data.date} />
        </li>
        <li className="text-capitalize">{props.data.description}</li>
      </ul>
      <div className="row mt-3">
        <div className="col-6">
          <div className="clearfix">
            <img
              src="https://www.gstatic.com/weather/conditions/v1/svg/mostly_cloudy_day_light.svg"
              alt="sun icon"
              className="float-left"
            />{" "}
            <span className="float-left">
              <span className="temperature">
                {Math.round(props.data.temperature)}
              </span>
              <span className="unit">*F</span>
            </span>
          </div>
        </div>
        <div className="col-6">
          <ul>
            <li>precipation:15%</li>
            <li>Humidity:{props.data.humidity}%</li>
            <li>Wind: {props.data.wind} km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
