const URL = "http://api.weatherapi.com/v1/current.json?key=e552b655872740a0b6041800251406&aqi=no";

const searchbtn = document.querySelector(".search button");
const searchbox = document.querySelector(".search input");
const weathericon = document.querySelector(".weather-icon");
// Fetch the weather data for a default city on page load
fetchWeather("arifwala");

async function fetchWeather(city) {
    const response = await fetch(URL  + `&q=${city}`);
    const data = await response.json();
   //  if (!response.ok) {
   //      alert("City not found! Please enter a valid city name.");
   //      return;
   //  }
   if (response.status === 400) {
      alert("City not found! Please enter a valid city name.");
      return;
   }

   console.log(data);
   const cityname = document.querySelector(".city");
   const temp = document.querySelector(".temp");
   const humidity = document.querySelector("#humidity1");
   const wind = document.querySelector("#wind1");
   cityname.innerHTML = data.location.name;
   temp.innerHTML = Math.floor(data.current.temp_c) + "°C";
   humidity.innerHTML = data.current.humidity + "%";
   wind.innerHTML = data.current.wind_kph + "km/h"
   
   if (data.current.condition.text === "Sunny"){
      weathericon.src = "images/clear.png";
   }
   else if (data.current.condition.text === "Partly Cloudy" || data.current.condition.text === "Cloudy"){
      weathericon.src = "images/clouds.png";
   }
   else if (data.current.condition.text === "Rain" || data.current.condition.text === "Heavy Rain" || data.current.condition.text === "Light rain"){
      weathericon.src = "images/rain.png";
   }
   else if (data.current.condition.text === "Drizzle"){
      weathericon.src = "images/drizzle.png";
   }
   else if (data.current.condition.text === "Snow"){
      weathericon.src = "images/snow.png";
   }
   else if (data.current.condition.text === "Mist"){
      weathericon.src = "images/mist.png";
   }}

searchbtn.addEventListener("click", ()=>{
   
   fetchWeather(searchbox.value);
});
