import React, {useState, useEffect} from 'react';
import Axios from 'axios';
import './style.css';


const Climate = ()=>{
  const api ={
  key: "7672df073f63b43754a9cba24a8eaa48",
  base: "https://api.openweathermap.org/data/2.5/"
}
	const [query, setQuery] = useState('');
  const [weather, setWeather] = useState({});
  useEffect(()=>{
  	search();
  },[])
   
   const search = async (e)=>{
   	  if(e.key === 'Enter')
        {
   	 	const res = await Axios.get(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
        setWeather(res.data);
     	 	setQuery('');
     	 	console.log(res.data);
     	 	console.log("${api.base}weather?q=${query}&units=metric&APPID=${api.key}")
     
   	 }
   };

	return (
    <div className="w-25 mx-auto shadow">
    <div className={(typeof weather.main != "undefined") ? ((weather.main.temp > 16) ? 'wbox warm' : 'wbox') : 'wbox'}>
      <main>
        <div className="search-box">
          <input 
            type="text"
            className="search-bar"
            placeholder="Search..."
            onChange={e => setQuery(e.target.value)}
            value={query}
            onKeyPress={search}
          />
        </div>
        {(typeof weather.main != "undefined") ? (
        <div>
          <div className="location-box">
            <div className="location">{weather.name}, {weather.sys.country}</div>
            {/* <div className="date">{dateBuilder(new Date())}</div> */}
          </div>
          <div className="weather-box">
            <div className="temp">
              {Math.round(weather.main.temp)}°c
            </div>
            <div className="weather">{weather.weather[0].main}</div>
          </div>
        </div>
        ) : ('')}
      </main>
    </div>
    </div>
  );

};
export default Climate;