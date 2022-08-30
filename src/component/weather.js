import React from 'react';
import Card from "react-bootstrap/Card";

const KelvinToFahrenheit = (k) => {
    let temperature = ((k - 273.15) * (9/5) + 32).toFixed(2);
    return Math.round(temperature);
}

const CardExampleCard = ({weatherData}) => (
  <Card>
    <Card.Header className="header">{weatherData.name}</Card.Header>
    <img src={`http://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`}></img>
    <p>{KelvinToFahrenheit(weatherData.main.temp)}&deg; F</p>
    <p>{weatherData.weather[0].main}</p>
    <p>H: {KelvinToFahrenheit(weatherData.main.temp_max)}&deg; F</p>
    <p>L: {KelvinToFahrenheit(weatherData.main.temp_min)}&deg; F</p>
  </Card>
)

export default CardExampleCard;