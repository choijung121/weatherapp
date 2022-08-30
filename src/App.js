import React, { useEffect, useState } from "react";
import Weather from './component/weather';
import moment from "moment";
import './App.css';
// import 'semantic-ui-css/semantic.min.css'

function App() {
  const [lat, setLat] = useState([]); /* setting latitude */
  const [long, setLong] = useState([]); /* setting longitude */
  const [data, setData] = useState([]);
  const [getInputData, setInputData] = useState(""); 
  const [cityName, setSubmitData] = useState("")

  useEffect(() => {
    const fetchData = async () => {
      // navigator.geolocation.getCurrentPosition(function(position){
      //   setLat(position.coords.latitude); 
      //   setLong(position.coords.longitude); 
      // }); 
  
      await fetch(`${process.env.REACT_APP_API_URL}/weather/?q=${cityName}&lat=${lat}&lon=${long}&APPID=${process.env.REACT_APP_API_KEY}`)
        .then(response => response.json())
        .then(result => {
          setData(result)
          console.log(result); 
      })
      console.log("Latitude: ", lat); 
      console.log("Longitude: ", long); 
      console.log("City Name:", cityName); 
    }
    fetchData(); 
  }, [lat, long, cityName]); 

  const inputHandler = (event) => {
    setInputData(event.target.value); 
  }

  const submitHandler = () => {
    setSubmitData(getInputData); 
  }


  return (
    <div className="App">
      <p>Day: {moment().format('dddd')}</p>
      <p>Date: {moment().format('LL')}</p>
      <p>Time: {moment().format("h:mm a")}</p>
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
      <button className="btn btn-primary mt-2" onClick={submitHandler}>
        Search
      </button>
      {(typeof data.main != 'undefined') ? (
        <Weather weatherData={data}/>
      ): (
        <div></div>
      )}
    </div>
  );
}

export default App;
