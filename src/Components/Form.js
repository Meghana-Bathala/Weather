// Form.js to display the input field to enter the city name 

import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchWeatherData } from '../Redux/Reducer';

const Form=()=>{
  const [city,setCity]=useState('');
  const dispatch=useDispatch();

  const handleSubmit=(e)=>{
    e.preventDefault();
    dispatch(fetchWeatherData(city));
    setCity('');
  };

  return (
    <form onSubmit={handleSubmit} className='form-container'>
      <input
        type="text"
        placeholder="Enter city name"
        value={city}
        onChange={(e)=>setCity(e.target.value)}
      />
      <button type="submit">Get Weather</button>
    </form>
  );
};

export default Form;

