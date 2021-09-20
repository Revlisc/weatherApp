import React from 'react';

//<p>It is currently {Math.round(props.sevenData.list[0].main.feels_like)}.</p>
// list[i].main.map(day => {
//     const {main} = day
//     const {feels_like, temp_max, temp_min} = main
//     return (
//         <p>It is currently {Math.round(feels_like)}, with a high of {temp_max} and low of {temp_min}</p>
//     )
// })
const Data = ({sevenData}) => {
    
    const {
        city: {
            name
        },
        list
    } = sevenData
    const dataArr = []
    const dateArr = []
    console.log(list)
    for(let i = 3; i < 40; i+=8) {
        console.log('i is: ', i)
        
        dataArr.push(list[i])
        console.log(list[i].weather[0].icon)
        
    }
    return (
        <div>
            {
                dataArr.map(day => {
                    
                    const { main, weather, dt_txt} = day
                    
                    const {feels_like, temp_max, temp_min} = main
                    return (
                        <div>
                            <h4>{dt_txt}</h4>
                            <div ><img className="wicon" src={`http://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`} alt="Weather icon"/></div>
                            <p>It is currently {Math.round(feels_like)}, with a high of {temp_max} and low of {temp_min}. The weather is {day.weather[0].description}</p>
                        </div>
                        
                    )
                })
            }
            
        </div>
    )
}

const SevenDayConditions = ({ sevenData }) => {
    const {
        city: {
            name
        },
        list   
    } = sevenData

    
    return (
        <div className='wrap'>

            <div>
                <p><strong>{name}</strong></p>
                <Data sevenData={sevenData} />
            </div>


        </div>
    )
}
export default SevenDayConditions;