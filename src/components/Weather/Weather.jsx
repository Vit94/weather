import React from 'react'

const Weather = props => (
            <div>
                {props.data.city &&
                    <ul>
                        <li>Город: {props.data.city}, {props.data.country}</li>
                        <li>Температура: {props.data.temperature}</li>
                        <li>Давление: {props.data.pressure}</li>
                        <li>Закат: {props.data.sunset}</li>
                    </ul>
                }
                <p>{props.data.error}</p>
            </div>
        )


export default Weather