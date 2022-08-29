import React from 'react';
import Card from "react-bootstrap/Card";
import moment from "moment"; 

const KelvinToFahrenheit = (k) => {
    let temperature = ((k - 273.15) * (9/5) + 32).toFixed(2);
    return Math.round(temperature);
}


const weatherIcon = this.state.weatherData.weather.map(w => {
    return <img src={`${process.env.REACT_APP_ICON_URL}/${w.icon}.png`}></img>
}); 
    // const renderWeatherIcon = this.state.data.weather.map(item => {
    //     return <img src={`http://openweathermap.org/img/w/${item.icon}.png`} />;
    //   });
    //   return <div>{renderWeatherIcon}</div>;


const CardExampleCard = ({weatherData}) => (
  <Card>
    <Card.Header className="header">{weatherData.name}</Card.Header>
    <div>{weatherIcon}</div>
    <p>{KelvinToFahrenheit(weatherData.main.temp)}&deg; F</p>
    <p>{weatherData.weather[0].main}</p>
    <p>H: {KelvinToFahrenheit(weatherData.main.temp_max)}&deg; F</p>
    <p>L: {KelvinToFahrenheit(weatherData.main.temp_min)}&deg; F</p>
  </Card>
)

export default CardExampleCard;