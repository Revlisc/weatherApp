import React from 'react';

import './Conditions.css'

const Conditions = (props) => {
   return (
       <div className='wrap'>
           {props.error && <small className='smallText'>Please enter a valid city.</small>}

           {props.loading && <div className='loading' />}

           {props.responseObj.cod === 200 ?
               <div className='currentContainer'>
                   <h2 className='cityHeader'><strong>{props.responseObj.name}</strong></h2>
                   <div className='currentInfo'>
                        <div ><img className="wicon" src={`http://openweathermap.org/img/wn/${props.responseObj.weather[0].icon}@4x.png`} alt="Weather icon"/></div>
                        <h1 className='currentWeather'> {Math.round(props.responseObj.main.temp)}° </h1>
                        <div className='extraInfo'>
                            <p >Conditions: {props.responseObj.weather[0].description}</p>
                            <p >Humidity: {props.responseObj.main.humidity}%</p>
                            <p >Feels like: {Math.round(props.responseObj.main.feels_like)}°</p>
                        </div>
                    </div>
               </div>
           : null
           }
       </div>
   )
}
export default Conditions;