/* Weather Predictor Application */

import axios from 'axios';
import Icons from './Icons';

import React, {useEffect, useState, useRef} from 'react';

function App() {


      const city = useRef();

      const [City , setCity] = useState("");

      let Response = "";

      const [WeatherResponse ,setWeatherResponse ] = useState({

      currWeather : null,
      currWeatherIcon : null,
      currCity : null,
      currTempCel : null,
      currTempFar : null,
      });


      useEffect(()=>{
            axios
            .get(`http://api.weatherapi.com/v1/current.json?key=a7d6a51940d8471ba0573626241409&q=${City ? City : null}`)
            .then (response => {
                  Response = response.data;
            
                  setWeatherResponse({
                        currWeather : Response.current.condition.text,
                        currWeatherIcon : Response.current.condition.icon,
                        currCity : City,
                        currTempCel : Response.current.temp_c + " C",
                        currTempFar : Response.current.temp_f + " F",
                  });      
                  console.log(Response);
                  console.log(WeatherResponse);
            })
            .catch(error => {
                  console.log(error);
            })
            
      },[City])

      const handleClick = () => {

            setCity(city.current.value);

      }

      return (
            <>
                  <Icons />
                  <div>
                              <input type="text" ref={city} placeholder='Enter City Name' />
                              <button onClick={handleClick}>Submit</button>
                              <p>{WeatherResponse.currWeather}</p> 
                              <p>{WeatherResponse.currCity}</p> 
                              <p>{WeatherResponse.currTempCel}</p> 
                              <p>{WeatherResponse.currTempFar}</p> 
                              <img src={WeatherResponse.currWeatherIcon} alt="Current Weather"/>
                  </div>
            </>);
}

export default App;
