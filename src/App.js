import React, { useEffect, useState } from "react";
import Weather from './component/weather';
import moment from "moment";
import './App.css';
// import 'semantic-ui-css/semantic.min.css'

function App() {
  const [lat, setLat] = useState([]); /* setting latitude */
  const [long, setLong] = useState([]); /* setting longitude */
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      navigator.geolocation.getCurrentPosition(function(position){
        setLat(position.coords.latitude); 
        setLong(position.coords.longitude); 
      }); 
  
      await fetch(`${process.env.REACT_APP_API_URL}/weather/?lat=${lat}&lon=${long}&APPID=${process.env.REACT_APP_API_KEY}`)
      /* https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key} */
        .then(response => response.json())
        .then(result => {
          setData(result)
          console.log(result); 
      })
      console.log("Latitude: ", lat); 
      console.log("Longitude: ", long); 
    }
    fetchData(); 
  }, [lat, long]); 


  return (
    <div className="App">
      <p>Day: {moment().format('dddd')}</p>
      <p>Date: {moment().format('LL')}</p>
      <p>Time: {moment().format("h:mm a")}</p>
      {(typeof data.main != 'undefined') ? (
        <Weather weatherData={data}/>
      ): (
        <div></div>
      )}
    </div>
  );
}

export default App;
