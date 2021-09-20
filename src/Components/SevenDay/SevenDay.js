import React, { useState } from 'react';
import SevenDayConditions from '../SevenDayCondition/SevenDayCondition';

const SevenDay = () => {
    
    let [sevenData, setSevenData] = useState(null)

    function getSevenDay() {
        fetch("https://community-open-weather-map.p.rapidapi.com/forecast?q=san%20francisco", {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "community-open-weather-map.p.rapidapi.com",
                "x-rapidapi-key": "754ff53bddmshf6707473573a10bp14282cjsn75119d32c627"
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

    return (
        <div>
           <h2>Find Current Weather Conditions</h2>
           
           <button onClick={getSevenDay}>Get Forecast</button>

           {sevenData && <SevenDayConditions sevenData={sevenData} />  }
       </div>
    )
}

export default SevenDay;