import React from "react";

// Stateless component


const API_WEATHER = "http://localhost:8888/weather-service/weathers?cityName="


class Weather extends React.Component{
   
    state = {
        weather: {
            "weather": [
                "main",
                "description"
            ],
            "main": {
                "temp": 0,
            }
        },
    };
    
    componentDidMount(){
        const {cityName} = this.props.match.params;
        const city = cityName;
        const api = `${API_WEATHER}${city}`;

        const weather = fetch(api)
        .then((res)=>res.json())
        .then((data)=>{
            this.setState({
                weather: data,
            });
        })
        .catch(err => console.warn(`Error occurs : ${err.message}`));
    }
    render(){
        const {weather} = this.state;
        const {cityName} = this.props.match.params;

        const weatherMain = weather.weather[0].main;
        const weatherDescription = weather.weather[0].description;
        const weatherTemp = (weather.main.temp-273.15).toFixed(2);

        return(
            <div>
                <h1>Weather</h1>
                <p>도시이름 : {cityName}</p>
                <p>날씨 : {weatherMain}</p>
                <p>날씨 상세 : {weatherDescription}</p>
                <p>온도 : {weatherTemp}°</p>
            </div>
        );
    }
}
/*const Weather = (props) => {
    //1.
    //class 형태로 변경 후 fetch 선택 도시의 날씨
    
    //2.
    //좀더 공부 : react Hook<<검색
    //state, setState
    const {cityName} = props.match.params;
    console.log(cityName);
  return (
    <div>
        <h1>Weather : {cityName}</h1>
        <p>Here is front page.!</p>
    </div>
  );
};*/
export default Weather;
//export default withRouter(Weather);