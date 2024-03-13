const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "681e386a43mshb9ccebae0a0bfc4p1a25e3jsn93808ef8536c",
    "X-RapidAPI-Host": "weather-by-api-ninjas.p.rapidapi.com",
  },
};

const getWeather = (city, ids) => {
  cityName.innerHTML = city;
  const url = `https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=${city}`;
  try {
    fetch(url, options)
      .then(response => response.json())
      .then(response => {
        console.log(response);
        temp.innerHTML = response.temp;
        temp2.innerHTML = response.temp;
        feels_like.innerHTML = response.feels_like;
        humidity.innerHTML = response.humidity;
        humidity2.innerHTML = response.humidity;
        min_temp.innerHTML = response.min_temp;
        max_temp.innerHTML = response.max_temp;
        wind_speed.innerHTML = response.wind_speed;
        wind_speed2.innerHTML = response.wind_speed;
        wind_degrees.innerHTML = response.wind_degrees;
        sunrise.innerHTML = response.sunrise;
        sunset.innerHTML = response.sunset;
      });
  } catch (error) {
    console.error(error);
  }
};

const submit = document.getElementById("submit");
const city = document.getElementById("city");
const cityName = document.getElementById("cityName");
const temp = document.getElementById("temp");
const temp2 = document.getElementById("temp2");
const feels_like = document.getElementById("feels_like");
const humidity = document.getElementById("humidity");
const humidity2 = document.getElementById("humidity2");
const min_temp = document.getElementById("min_temp");
const max_temp = document.getElementById("max_temp");
const wind_speed = document.getElementById("wind_speed");
const wind_speed2 = document.getElementById("wind_speed2");
const wind_degrees = document.getElementById("wind_degrees");
const sunrise = document.getElementById("sunrise");
const sunset = document.getElementById("sunset");

submit.addEventListener("click", (e) => {
  e.preventDefault();
  getWeather(city.value);
});


 


getWeather("Delhi", {});
