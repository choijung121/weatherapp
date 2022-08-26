import React,{useState, useEffect } from 'react';

import './App.css';

function App() {
  const [apiData, setApiData] = useState({});
  const [getState, setGetState] = useState('');
  const [state, setState] = useState('');

  const API_KEY = process.env.REACT_APP_API_KEY; 
  const API_URL = `https://api.openweathermap.org/data/2.5/weather?q=q=${state}&appid=${API_KEY}`;

  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => setApiData(data));
  }, [API_URL]);

  function inputHandler(event) {
    setGetState(event.target.value); 
  }

  function submitHandler(){
    setState(getState); 
  }

  return (
    <div className="App">
        <div className="project-title-div">
            <h1 className="project-title">Weather Search</h1>   
        </div>
        <div className="nav-area">
            <input 
              type="text" 
              className="text-box" 
              placeholder="Search City" 
              onChange={inputHandler}
              value={getState}>
            </input>
            <button className="btn btn-primary" onClick={submitHandler}>
                Search
            </button>
        </div>
        
        <div className="card">
            <div class="container">
              <div class='row'>
                <div class='weather-icon col-sm-6'>
                  <img
                    src={`http://openweathermap.org/img/w/${apiData.weather[0].icon}.png`}
                    alt="weather status icon"
                    className="weather-icon"
                  />
                </div>
              </div>
              <div class='row'>
                <div class='weather-info col-sm-6'>
                  <strong>{apiData.name}</strong>
                </div>
              </div>
            </div>
        </div>
    </div>
  );
}

export default App;
