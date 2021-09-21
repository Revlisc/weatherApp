import React, { useState } from 'react';
import SevenDayConditions from '../SevenDayCondition/SevenDayCondition';
import '../Forecast/Forecast.css'

const SevenDay = ({city, unit}) => {
    
    let [sevenData, setSevenData] = useState(null)

    // let [city, setCity] = useState('');
    // let [unit, setUnit] = useState('imperial');

    let [error, setError] = useState(false)
    let [loading, setLoading] = useState(false)

    const codedCity = encodeURIComponent(city)

    function getSevenDay(e) {
        
        //e.preventDefault()

        

        fetch(`https://community-open-weather-map.p.rapidapi.com/forecast?units=${unit}&q=${codedCity}`, {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "community-open-weather-map.p.rapidapi.com",
                "x-rapidapi-key": process.env.REACT_APP_API_KEY
	    }
        })
        .then(response => response.json())
        .then(response => {
            setSevenData(response);
        })
        .catch(err => {
            console.error(err);
        });
    }
    //<SevenDayConditions sevenData={sevenData} />
    //<button onClick={getSevenDay}>Get Forecast</button>
    /*
    <form onSubmit={getSevenDay}>
                <input
                    className='form' 
                    type="text"
                    placeholder="Enter City"
                    maxLength="50"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    />
                <label>
                    <input
                        className='selector' 
                        type="radio"
                        name="units"
                        checked={unit === "imperial"}
                        value="imperial"
                        onChange={(e) => setUnit(e.target.value)}
                        />
                    Fahrenheit
                </label>
                <label>
                    <input
                        className='selector' 
                        type="radio"
                        name="units"
                        checked={unit === "metric"}
                        value="metric"
                        onChange={(e) => setUnit(e.target.value)}
                        />
                    Celcius
                </label>
                <button className='button' type="submit">Get Forecast</button>
            </form>
    */

    return (
        <div>
           
            <button onClick={() => getSevenDay()} > click me</button>
           {sevenData && <SevenDayConditions sevenData={sevenData} />  }
       </div>
    )
}

export default SevenDay;