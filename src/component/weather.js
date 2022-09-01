import React from 'react';
import moment from "moment";
import './weather.css';

const KelvinToFahrenheit = (k) => {
    let temperature = ((k - 273.15) * (9/5) + 32).toFixed(2);
    return Math.round(temperature);
}

const CardExampleCard = ({weatherData}) => (
    <div className='card'>
        <div className='header-container'>
            <div>
                <h1 className="header">
                    
                    <span className='city-name-color'>{weatherData.name}</span>
                </h1>
                <p className='time'>{moment().format('MMMM D, hh:mm A')}</p>
            </div>
            <div className='container'>
                <div className='icon-image'>
                    <img src={`http://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`}></img>
                </div>
                <div className='current-temp'>
                    {KelvinToFahrenheit(weatherData.main.temp)}&deg;F
                </div>
            </div>
        </div>
        <div className='descriptions'>  
            <p className='high-low-p'><strong>{weatherData.weather[0].main}</strong></p>
            <div className='high-low'>
                <p className='high-low-p'><strong>H:</strong> {KelvinToFahrenheit(weatherData.main.temp_max)}&deg;</p>
                <p className='high-low-p'><strong>L:</strong> {KelvinToFahrenheit(weatherData.main.temp_min)}&deg;</p>
            </div>
        </div>
    </div>
)

export default CardExampleCard;