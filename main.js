
const API_KEY="5a488be1a15e4c69b4a100540231805"

let searchCity="Baku"

function getWeather(searchCity){

    const notFoundImage = document.createElement("img");
    notFoundImage.src = "./images/not found.png";

    fetch(`https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${searchCity}&aqi=no`)
    .then((response) => {
        if (response.status === 400) {
          throw new Error("Not Found");
        }
        return response.json();
      })
      .then((weatherData) => {
        renderWeather(weatherData);
      })
      .catch((error) => {
        container.innerHTML = "";
        const errorMessage = document.createElement("span");
        errorMessage.classList.add("error-msg");
        errorMessage.innerText = "   Oops! Invalid location://";
        
        errorMessage.className="errorimg"
     
        const notFoundImage = document.createElement("img");
        notFoundImage.src = "./images/not found.png";
    
        errorMessage.appendChild(notFoundImage);
        container.appendChild(errorMessage);
    });
  }

const container =document.querySelector(".container")
const searchBar=document.querySelector(".search-bar")
const search=document.querySelector(".search-btn")
console.log(searchBar);
searchBar.addEventListener("keyup",(e)=>{
    searchCity=e.target.value.trim()
})

search.addEventListener("click",()=>{
   getWeather(searchCity)


})

function renderWeather(weather){
    const name=weather.location.name
    const country=weather.location.country
    const time=weather.location.localtime
    const temperature=weather.current.temp_c
    const icon=weather.current.condition.icon
    const windSpeed=weather.current.wind_kph
    const humidity=weather.current.humidity
    const feelsLike=weather.current.feelslike_c
    const uvIndex=weather.current.uv

    container.innerHTML=""

    const nameSpan=document.createElement("span")
    nameSpan.innerText=`~ City: ${name}`

    const countrySpan=document.createElement("span")
    countrySpan.innerText=`~ Country: ${country}`

    const _icon=document.createElement("img")
    _icon.className="myIcon"
    _icon.src="https:"+icon 

    const timeSpan = document.createElement('span');
    timeSpan.innerText = `${time.slice(10)}`;
    timeSpan.id = "time"
    timeSpan.className = "time"

    const temperatureSpan=document.createElement("span")
    temperatureSpan.innerText=`~ Temp_c: ${temperature} °C`

    const windspeedSpan=document.createElement("span")
    windspeedSpan.innerText=`~ Wind_kph: ${windSpeed} km/h`

    const humiditySpan=document.createElement("span")
    humiditySpan.innerText=`~ Humidity: ${humidity} %`

    const feelslikeSpan=document.createElement("span")
    feelslikeSpan.innerText=`~ Feelslike: ${feelsLike} °C`

    const uvindexSpan=document.createElement("span")
    uvindexSpan.innerText=`~ Uv: ${uvIndex}`


    container.appendChild(nameSpan)
    container.appendChild(countrySpan)
    container.appendChild(_icon)
    container.appendChild(timeSpan)
    container.appendChild(temperatureSpan)
    container.appendChild(windspeedSpan)
    container.appendChild(humiditySpan)
    container.appendChild(feelslikeSpan)
    container.appendChild(uvindexSpan)

}

getWeather(searchCity)

