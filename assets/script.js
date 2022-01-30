//GIVEN a weather dashboard with form inputs
var city ="";
var search=$("#search-city");
var searchbtn=$("#search-btn");
var currentCity = $("#current-city");
var currentTemperature = $("#temperature");
var currentHumidty= $("#humidity");
var currentWSpeed=$("#wind-speed");
var currentUvindex= $("#UVindex");

var storage=window.localStorage;

var apiUrl="https://api.openweathermap.org/data/2.5/onecall?lat=33.44&lon=-94.04&exclude=hourly,daily&appid={API key}"

var btn = document.querySelector("#search-btn");
var weatherCard = document.querySelector("#current-weather");
var forecastCard = document.querySelector("#forecastContainer");


//WHEN I search for a city
//THEN I am presented with current and future conditions for that city and that city is added to the search history


//WHEN I view current weather conditions for that city
//THEN I am presented with the city name, the date, an icon representation of weather conditions, the temperature, the humidity, the wind speed, and the UV index

//WHEN I view the UV index
//THEN I am presented with a color that indicates whether the conditions are favorable, moderate, or severe

//WHEN I view future weather conditions for that city
//THEN I am presented with a 5-day forecast that displays the date, an icon representation of weather conditions, the temperature, the wind speed, and the humidity

//WHEN I click on a city in the search history
//THEN I am again presented with current and future conditions for that city*/

*$(document).ready(function() {
    var cities = [];
    $(".search-btn").on("click", function() {
      var eventDetails =
      $("input").append(eventDetails);
      //console.log(eventDetails)
      var text = $(this).siblings(".form-control").val();
      localStorage.setItem(text);
//function identifyCity()
//function currentWeather
//function displayWeather
//Local Storage Items
//$("#search-city .form-control").val(localStorage.getItem("search-city"))});*/
