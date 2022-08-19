// import React,{useState, useEffect } from 'react';
import Page from "./component/page"

import './App.css';

function App() {
  // const API_KEY = process.env.REACT_APP_API_KEY; 
  // const API_URL = `https://api.openweathermap.org/data/2.5/weather?q=&appid=${API_KEY}`;

  // const [apiData, setApiData] = useState({});
  // const [getState, setGetState] = useState('');
  // const [state, setState] = useState('');

  // useEffect(() => {
  //   fetch(API_URL)
  //     .then((res) => res.json())
  //     .then((data) => setApiData(data));
  // }, [API_URL]);

  // function inputHandler(event) {
  //   setGetState(event.target.value); 
  // }

  // function submitHanlder(){
  //   setState(getState); 
  // }

  return (
    <div className="App">
      <Page></Page>
    </div>
  );
}

export default App;
