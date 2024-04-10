// WeatherApp.js

import React from 'react';
import { useSelector } from 'react-redux';
import Form from './Form';

const WeatherApp=()=>{
  const {data,loading,error}=useSelector((state)=>state.weather);

  return (
    
    <div className="weather-app">
      <h1>Weather App</h1>
      <Form/>

      {loading && <div style={{color:'blue'}}><b>Loading...</b></div>}

      {error && <div className='error-message'><b>Error</b> : {error}</div>}
      
      {data&& !error && (
        <div className="weather-card">
          <h2>{data.name}</h2>
          <p>Temperature : {data.main.temp}°C</p>
          <p>Weather : {data.weather[0].main}</p>
          <p>Humidity : {data.main.humidity}%</p>

        </div>
      )}
    </div>
    
  );
};

export default WeatherApp;

