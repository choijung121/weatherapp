import React, { useEffect, useState } from "react";
import Weather from './component/weather';
import './App.css';

function App() {
  const [lat, setLat] = useState([]); /* setting latitude */
  const [long, setLong] = useState([]); /* setting longitude */
  const [data, setData] = useState([]);
  const [getInputData, setInputData] = useState(""); 
  const [state, setSubmitData] = useState("Los Angeles"); 

  useEffect(() => {
    //fetch data for city, lat, and long
    const fetchData = async () => {
      navigator.geolocation.getCurrentPosition(function(position){
        setLat(position.coords.latitude); 
        setLong(position.coords.longitude); 
      }); 
  
      await fetch(`${process.env.REACT_APP_API_URL}/weather/?q=${state}&lat=${lat}&lon=${long}&APPID=${process.env.REACT_APP_API_KEY2}`)
        .then(response => response.json())
        .then(result => {
          setData(result)
          console.log(result); 
      })
      console.log("Latitude: ", lat); 
      console.log("Longitude: ", long); 
      console.log("City Name:", state);
    }
    fetchData(); 
  }, [lat, long, state]); 

  // useEffect(() => {
  //   //fetch data for 5 day 3 hour forecast data
  //   const fetchDaily = async () => {
  //     await fetch(`${process.env.REACT_APP_API_URL}/forecast?lat=${lat}&lon=${long}&APPID=${process.env.REACT_APP_API_KEY}`)
  //       .then(response => response.json())
  //       .then(result => {
  //         setData(result)
  //         console.log(result); 
  //   }, [lat, long])
  //  }
  //  fetchDaily(); 
  // })

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
            className="form-control"
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
