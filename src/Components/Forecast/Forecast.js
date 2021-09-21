import React, { useState } from 'react';
import Conditions from '../Conditions/Condition'
import SevenDayConditions from '../SevenDayCondition/SevenDayCondition';
import SevenDay from '../SevenDay/SevenDay';

import './Forecast.css';

const Forecast = () => {
    
    let [responseObj, setResponseObj] = useState({})
    let [city, setCity] = useState('')
    let [unit, setUnit] = useState('imperial')

    let [error, setError] = useState(false)
    let [loading, setLoading] = useState(false)

    let [clicked, setClicked] = useState(false)

    //new additions
    
    
    function getForecast(e) {
        e.preventDefault()
        if (city.length === 0) {
            return setError(true)
        }

        setError(false)
        setResponseObj({})

        setLoading(true)

        const uriEncodedCity = encodeURIComponent(city)

        fetch(`https://community-open-weather-map.p.rapidapi.com/weather?units=${unit}&q=${uriEncodedCity}`, { //had %2Cus, {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "community-open-weather-map.p.rapidapi.com",
                "x-rapidapi-key": process.env.REACT_APP_API_KEY
	        }
        })
        .then(response => response.json())
        .then(response => {
            if (response.cod !== 200) {
                throw new Error()
            }

            setResponseObj(response)
            setLoading(false)
        })
        // .then(response => {
        //     console.log(response);
        // })
        .catch(err => {
            setError(true)
            setLoading(false)
            console.log(err.message);
        });

        //<div>
        //{JSON.stringify(responseObj)}
        //</div>
    }
    //<button className='button' type='button' onClick={() => <SevenDay city={city} unit={unit} />}>See full forecast</button>
    

    return (
        <div>
            
            <form onSubmit={getForecast} className='searchbar'>
                <input className='form' type='text' placeHolder='Enter City' maxLength='50' value={city} onChange={(e) => setCity(e.target.value)} />
                <label>
                    <input className='selector' type='radio' name='units' checked={unit === 'imperial'} value='imperial' onChange={(e) => setUnit(e.target.value)} />
                    °F
                </label>
                <label>
                    <input className='selector' type='radio' name='units' checked={unit === 'metric'} value='metric' onChange={(e) => setUnit(e.target.value)} />
                    °C
                </label>
                <button className='button' type='submit' onClick={() => setClicked(true)}>Get Forecast</button>
            </form>

            <Conditions responseObj={responseObj} error={error} loading={loading} />
            {clicked ? <SevenDay city={city} unit={unit} /> : null }
        </div>
    )

    
}



export default Forecast;