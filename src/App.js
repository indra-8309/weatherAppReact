import React, { useState } from 'react';
import data from "./weather_data/cities.json"
import image from "./weather_data/pic.jpg"
import './App.css';
function WeatherApp() {
  const [city, setCity] = useState('');
  const [weatherData, setWeatherData] = useState(null);
  
  const updateWeather =async () => {
    if (!city) {
      alert('Please enter a city name.');
      return;
    }
    const cityData = data.find(object=>object.name.toLowerCase()===city.toLowerCase())
    setWeatherData(cityData)

  }

  return (<>
  <div className='main-container'>
  <div className="container" >
      <h1>Offline Weather App</h1>
      <div className='container-1'>
      <input
        type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder="Enter City"
      />
      <button onClick={updateWeather}>Update Weather</button>
      </div>

      {weatherData && (
        <div className="weather-info">
          <p><strong>City:</strong> {weatherData.name}</p>
          <p><strong>Last Updated:</strong> {new Date().toLocaleString()}</p>
          <p><strong>Temperature:</strong> {Math.round((weatherData.main.temp -273)*100)/100 } °C</p>
          <p><strong>Humidity:</strong> {weatherData.main.humidity}%</p>
          <p><strong>Wind Speed:</strong> {weatherData.wind.speed} m/s</p>
        </div>
      )}
    </div>    
  </div>
 
  </>
   
  );
}

export default WeatherApp;
