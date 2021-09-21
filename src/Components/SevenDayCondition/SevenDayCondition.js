import React from 'react';
import '../Conditions/Conditions.css'


const Data = ({sevenData}) => {
    
    const {
        city: {
            name
        },
        list
    } = sevenData
    const dataArr = []
    
    
    console.log(list)
    for(let i = 0; i < 40; i+=8) {
        console.log('i is: ', i)
        console.log('array holds: ', dataArr)
        let temp = -150
        for (let j = 0; j < 8; j++) {
            console.log('temp is: ', list[i].main.temp)
            console.log(j)
            let newTemp = list[i].main.temp
            if (newTemp > temp) {
                temp = newTemp
                // if(dataArr.length === 0) {
                //     dataArr.pop()
                // }
                console.log('pushing new temp')
                dataArr.push(list[i])
            }
            //console.log('array holds: ', dataArr)

        }
        // dataArr.push(list[i])
        // console.log(list[i].weather[0].icon)
        
    }
    //

    
    return (
        <div className='forecastContainer'>
            {
                dataArr.map(day => {
                    
                    const { main, dt_txt, } = day
                    
                    const {temp_max, temp_min, temp} = main
                    return (
                        <div className='dataRow'>
                            <h4 className='forecastHeader'>{dt_txt.slice(5, 10)}</h4>
                            <div ><img className="wicon" src={`http://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`} alt="Weather icon"/></div>
                            <div className='highLow'>
                                <p className='tempHi'> {Math.round(temp_max)}° </p>
                                <p className='tempLo'> {Math.round(temp_min)}°</p>
                            </div>
                            
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
                
                <Data sevenData={sevenData} />
            </div>


        </div>
    )
}
export default SevenDayConditions;