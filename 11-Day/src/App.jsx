/* Weather Predictor Application */

import axios from 'axios';

import React, {useEffect, useState, useRef} from 'react';

function App() {


      const city = useRef();

      const [City , setCity] = useState("");

      let Response = "";

      const [WeatherResponse ,setWeatherResponse ] = useState({

      currWeather : '',
      currWeatherIcon : "",
      currCity : "",
      currTempCel : "",
      currTempFar : "",
      });


      useEffect(()=>{
            axios
            .get(`http://api.weatherapi.com/v1/current.json?key=a7d6a51940d8471ba0573626241409&q=${City ? City : "Chennai"}`)
            .then (response => {
                  Response = response.data;
            })
            .catch(error => {
                  console.log(error);
            })
            
      },[])

      const handleClick = () => {

            console.log(Response);

            setWeatherResponse({
                  currWeather : Response.current.condition.text,
                  currWeatherIcon : Response.current.condition.icon,
                  currCity : city.current.value,
                  currTempCel : Response.current.temp_c,
                  currTempFar : Response.current.temp_f,
            });
            console.log("City",city.current.value);

            setCity(city.current.value);
      }



      try {
            currWeather = WeatherResponse.current.condition.text;
            currWeatherIcon = WeatherResponse.current.condition.icon;
            currCity = WeatherResponse.location.name;
            currTempCel = WeatherResponse.current.temp_c+"C";
            currTempFar = WeatherResponse.current.temp_f+"F";
      }
      catch (e)  {
            console.log(e);
      }

      return (
            <div>
                        <input type="text" ref={city} placeholder='Enter City Name' />
                        <button onClick={handleClick}>Submit</button>
                        <p>{WeatherResponse.currWeather}</p> 
                        <p>{WeatherResponse.currCity}</p> 
                        <p>{WeatherResponse.currTempCel}</p> 
                        <p>{WeatherResponse.currTempFar}</p> 
                        <img src={WeatherResponse.currWeatherIcon} alt="Current Weather"/>
            </div>
      )
}

export default App;
