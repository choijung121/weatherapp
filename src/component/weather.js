import React from 'react';
import './weather.css';

const KelvinToFahrenheit = (k) => {
    let temperature = ((k - 273.15) * (9/5) + 32).toFixed(2);
    return Math.round(temperature);
}

const CardExampleCard = ({weatherData}) => (
    <div className='card'>
        <div>
            <div>
                <h1 className="header">Weather in {weatherData.name}</h1>
            </div>
            <div className='container'>
                <div className='icon-image'>
                    <img src={`http://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`}></img>
                </div>
                <div className='current-temp'>
                    <p>{KelvinToFahrenheit(weatherData.main.temp)}&deg; F</p>
                </div>
            </div>
            <div className='descriptions'>  
                <p>{weatherData.weather[0].main}</p>
                <p>H: {KelvinToFahrenheit(weatherData.main.temp_max)}&deg; F</p>
                <p>L: {KelvinToFahrenheit(weatherData.main.temp_min)}&deg; F</p>
            </div>
        </div>
    </div>
)

export default CardExampleCard;