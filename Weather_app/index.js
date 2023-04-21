const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "59a6e6f2d1msha2308031d22c51fp19443bjsn2fabb0edbb98",
    "X-RapidAPI-Host": "weather-by-api-ninjas.p.rapidapi.com",
  },
};

getWeather = (city) => {
  cityName.innerHTML = city;

  fetch(
    "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=" + city,
    options
  )
    .then((response) => response.json())
    .then((response) => {
      feels_like.innerHTML = response.feels_like;
      humidity.innerHTML = response.humidity;
      humidity2.innerHTML = response.humidity;
      max_temp.innerHTML = response.max_temp;
      min_temp.innerHTML = response.min_temp;
      sunrise.innerHTML = response.sunrise;
      sunset.innerHTML = response.sunset;
      temp.innerHTML = response.temp;
      temp2.innerHTML = response.temp;
      wind_degrees.innerHTML = response.wind_degrees;
      wind_speed.innerHTML = response.wind_speed;
      wind_speed2.innerHTML = response.wind_speed;

      console.log(response);
    })
    .catch((err) => console.error(err));
};
// const search = document.querySelector(".submit");
submit.addEventListener("click", (e) => {
  // document.getElementById('demo').style.display ='none';
  e.preventDefault();
  getWeather(city.value);
});
