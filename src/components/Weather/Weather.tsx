import React from "react";
import { IWeatherComponent } from "../../interfaces";

const Weather = (props: IWeatherComponent) => {
  return (
    <div className="city">
      <h2 className="city-name">
        <span>{props.name}</span>
        <sup>{props.country}</sup>
      </h2>
      <div className="city-temp">
        {Math.round(props.temp)}
        <sup>&deg;C</sup>
      </div>
      <div className="info">
        <img
          className="city-icon"
          src={`https://openweathermap.org/img/wn/${props.icon}@2x.png`}
          alt={props.description}
        />
        <p>{props.description}</p>
      </div>
    </div>
  );
};

export default Weather;
