import React from 'react';
import {ReactComponent as ReactAir} from '../icons/air_FILL0_wght400_GRAD0_opsz24.svg';
import {ReactComponent as ReactPressure} from '../icons/compress_FILL0_wght400_GRAD0_opsz24.svg'; 
import {ReactComponent as ReactWater} from '../icons/water_drop_FILL0_wght400_GRAD0_opsz24.svg'; 
import {ReactComponent as ReactCloud} from '../icons/filter_drama_FILL0_wght400_GRAD0_opsz24.svg'; 
import './weather.css';

const KelvinToFahrenheit = (k) => {
    let temperature = ((k - 273.15) * (9/5) + 32).toFixed(2);
    return Math.round(temperature);
}

const meterToMiles = (u) => {
    let unit = (u * 2.237); 
    return Math.round(unit); 
}

const currentDate = (data) => {
    const {timezone} = data; 
    const {dt} = data; 
    const dateTime = new Date(dt * 1000); 
    const toUTC = dateTime.getTime() + dateTime.getTimezoneOffset() * 60000; 
    const currentLocalTime = toUTC + 1000 * timezone; 
    const selectedDate = new Date(currentLocalTime); 

    const date = selectedDate.toLocaleString([], {
        month: 'long', 
        day: 'numeric'
    }); 
    return date; 
}

const currentTime = (data) => {
    const {timezone} = data; 
    const {dt} = data; 
    const dateTime = new Date(dt * 1000); 
    const toUTC = dateTime.getTime() + dateTime.getTimezoneOffset() * 60000; 
    const currentLocalTime = toUTC + 1000 * timezone; 
    const selectedDate = new Date(currentLocalTime); 

    const time = selectedDate.toLocaleString([], {
        hour: 'numeric', 
        minute: '2-digit', 
        hour12: true, 
    });
    return time; 
}


const Card = ({weatherData}) => (
    <div className='card'>
        <div className='header-container'>
            <div>
                <h1 className="header">
                    <span className='city-name-color'>{weatherData.name}, {weatherData.sys.country}</span>
                </h1>
                <p className='time'>
                    <strong><span className='weather-date'>{currentDate(weatherData)}, </span><span className='weather-time'>{currentTime(weatherData)}</span></strong>
                </p>
            </div>
            <div className='container'>
                <div className='icon-image'>
                    <img src={`http://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`}></img>
                </div>
                <div className='current-temp'>
                    <strong>{KelvinToFahrenheit(weatherData.main.temp)}&deg;F</strong>
                </div>
            </div>
            <div className='feels-like'>
                <p className='feels-like-p'><strong>{weatherData.weather[0].main}</strong></p>
                <p className='feels-like-p'><strong>. Feels like {KelvinToFahrenheit(weatherData.main.feels_like)}&deg;F</strong></p>
            </div>
        </div>
        <div className='descriptions'> 
            <div className='extra-info'>
                <ul className='ul-extra-info'>
                    <li className='il-extra-info'>
                        <div className='il-icon-info'>
                            <ReactWater/>&nbsp;
                            <p className='il-info'><strong>Humidity</strong> 
                                <span className='il-info-data'>{weatherData.main.humidity}%</span>
                            </p>
                        </div>
                    </li>
                    <li className='il-extra-info'>
                        <div className='il-icon-info'>
                            <ReactPressure/>&nbsp;
                            <li className='il-info'><strong>Pressure</strong> 
                                <span className='il-info-data'>{weatherData.main.pressure} hPa</span>
                            </li>
                        </div>
                    </li>
                    <li className='il-extra-info'>
                        <div className='il-icon-info'>
                            <ReactAir/>&nbsp;
                            <li className='il-info'><strong>Wind Speed</strong>
                                <span className='il-info-data'>{meterToMiles(weatherData.wind.speed)} mph</span>
                            </li>
                        </div>
                    </li>
                    <li className='il-extra-info'>
                        <div className='il-icon-info'>
                            <ReactCloud/>&nbsp;
                            <li className='il-info'><strong>Cloudiness</strong>
                                <span className='il-info-data'>{weatherData.clouds.all}%</span>
                            </li>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
)

export default Card;