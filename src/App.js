import React, { useEffect, useState } from "react";
import Weather from './component/weather';
import './App.css';
// import 'semantic-ui-css/semantic.min.css'

function App() {
  const [lat, setLat] = useState([]); /* setting latitude */
  const [long, setLong] = useState([]); /* setting longitude */
  const [data, setData] = useState([]);
  // const [zip, setZip] = useState([]); /* trying set zip &zip=${zip}*/
  const [getInputData, setInputData] = useState(""); 
  const [state, setSubmitData] = useState(""); 

  useEffect(() => {
    const fetchData = async () => {
      navigator.geolocation.getCurrentPosition(function(position){
        setLat(position.coords.latitude); 
        setLong(position.coords.longitude); 
      }); 
  
      await fetch(`${process.env.REACT_APP_API_URL}/weather/?q=${state}&lat=${lat}&lon=${long}&APPID=${process.env.REACT_APP_API_KEY}`)
        .then(response => response.json())
        .then(result => {
          setData(result)
          console.log(result); 
      })
      console.log("Latitude: ", lat); 
      console.log("Longitude: ", long); 
      console.log("City Name:", state); 
      // console.log("Zip Code: ", state.zip);

      // await fetch(`${process.env.REACT_APP_API_URL_GEO_CODE}q=${state}&APPID=${process.env.REACT_APP_API_KEY}`)
      // try use this to qet city name, state, and country
    }
    fetchData(); 
  }, [lat, long, state]); 

  const inputHandler = (event) => {
    setInputData(event.target.value); 
  }

  const submitHandler = () => {
    setSubmitData(getInputData); 
  }


  return (
    <div className="App">
      <div>
        <h1 className="app-title">Weather App</h1>
      </div>
      <div className="search-box">
        <div className="input">
          <input 
            type="text"
            id="location-name"
            class="form-control"
            placeholder="Enter City Name"
            onChange={inputHandler}
            value={getInputData}>
          </input>
        </div>
        <div className="button">
          <button className="btn btn-primary mt-2" onClick={submitHandler}>
            Search
          </button>
        </div>
      </div>
      
      {(typeof data.main != 'undefined') ? (
        <Weather weatherData={data}/>
      ): (
        <div></div>
      )}
    </div>
  );
}

export default App;
