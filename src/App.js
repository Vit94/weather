import React from 'react';
import Info from './components/Info/Info'
import Weather from './components/Weather/Weather';
import Form from './components/Form/Form';

const APIKey = '5f8c1ee4d4msh5062832608099d6p1a7788jsn2e169597c138'

class App extends React.Component {
  state = {
    temperature: undefined,
    city: undefined,
    country: undefined,
    pressure: undefined,
    sunset: undefined,
    error: undefined
  }

  getWeather = async (e) => {
    e.preventDefault()
    const city = e.target.elements.city.value
    if (city) {
      const apiUrl = await fetch(`https://community-open-weather-map.p.rapidapi.com/weather?q=${city}&units=metric&lang=ru`, {headers: {"x-rapidapi-host": "community-open-weather-map.p.rapidapi.com", "x-rapidapi-key": APIKey}})
      const data = await apiUrl.json()
      const sunset = data.sys.sunset
      const date = new Date()
      date.setTime(sunset)
      const sunsetDate = date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds()
      
      this.setState({
        temperature: data.main.temp,
        city: data.name,
        country: data.sys.country,
        pressure: data.main.pressure,
        sunset: sunsetDate,
        error: undefined
      })
    } else {
      this.setState({
        temperature: undefined,
        city: undefined,
        country: undefined,
        pressure: undefined,
        sunset: undefined,
        error: 'Введите город'
      })
    }
  }

  
  render() {
    return (
      <div className="wrapper">
        <div className="main">
          <div className="container">
            <div className="row">
              <div className="col-sm-5 info">
                <Info />
              </div>
              <div className="col-sm-7 form">
                <Form getWeather={this.getWeather}/>
                <Weather data={{...this.state}}/>
              </div>
            </div>
          </div>
        </div>  
      </div>
    )
  }
}

export default App;
