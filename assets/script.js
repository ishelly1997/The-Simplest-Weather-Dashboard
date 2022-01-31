// API Key: 70bfb4227a0a636df084027cc1991ebc

//GIVEN a weather dashboard with form inputs
var city = "";
var cities = [];
var search = $("#search-city");
var searchBtn = $("#search-btn");
var currentCity = $("#current-city");
var name = $(".city-name")
var currentTemperature = $("#temperature");
var currentHumidty = $("#humidity");
var currentWSpeed = $("#wind-speed");
var currentUvindex = $("#UVindex");
var inputValue = document.querySelector(".inputValue")
var storage=window.localStorage;

var weatherCard = document.querySelector("#current-weather");
var forecastCard = document.querySelector("#forecastContainer");

//function getWeather(city){
searchBtn.on("click", function() {
    fetch = ("https://api.openweathermap.org/data/2.5/weather?q="+inputValue.value+"&appid=70bfb4227a0a636df084027cc1991ebc")
    .then(response => response.json())
    .then(data => console.log(data))
})

//WHEN I search for a city
//THEN I am presented with current and future conditions for that city and that city is added to the search history
function displayWeather(event){
    event.preventDefault();
    if(search.val().trim()!==""){
        city=search.val().trim();
        currentWeather(city);
    }
function currentWeather() {
    
}
//WHEN I view current weather conditions for that city
//THEN I am presented with the city name, the date, an icon representation of weather conditions, the temperature, the humidity, the wind speed, and the UV index

//WHEN I view the UV index
//THEN I am presented with a color that indicates whether the conditions are favorable, moderate, or severe

//WHEN I view future weather conditions for that city
//THEN I am presented with a 5-day forecast that displays the date, an icon representation of weather conditions, the temperature, the wind speed, and the humidity



