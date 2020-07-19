import React from "react";
import { IWeatherComponent } from "../../interfaces";
import { Row, Col, Typography } from "antd";
const { Title, Text } = Typography;

const Weather = (props: IWeatherComponent) => {
  return (
    <Row className="city">
      <Title level={2} className="city-name">
        <span>{props.name}</span>
        <sup>{props.country}</sup>
      </Title>
      <Col className="city-temp">
        {Math.round(props.temp)}
        <sup>&deg;C</sup>
      </Col>
      <Col className="info">
        <img
          className="city-icon"
          src={`https://openweathermap.org/img/wn/${props.icon}@2x.png`}
          alt={props.description}
        />
        <Text className="city-description">{props.description}</Text>
      </Col>
    </Row>
  );
};

export default Weather;
