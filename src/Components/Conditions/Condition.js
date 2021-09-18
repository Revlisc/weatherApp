import React from 'react';

import './Conditions.css'

const Conditions = (props) => {
   return (
       <div className='wrap'>
           {props.error && <small className='smallText'>Please enter a valid city.</small>}

           {props.loading && <div className='loading' />}

           {props.responseObj.cod === 200 ?
               <div>
                   <p><strong>{props.responseObj.name}</strong></p>
                   <p>It is currently {Math.round(props.responseObj.main.temp)} degrees out with {props.responseObj.weather[0].description}.</p>
               </div>
           : null
           }
       </div>
   )
}
export default Conditions;