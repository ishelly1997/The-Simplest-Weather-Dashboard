// API Key: 70bfb4227a0a636df084027cc1991ebc
var city = "";
var inputValue = $("#search-city");
var searchBtn = $("#search-btn");
var currentCity = $("#current-city");
var name = $(".city-name")
var currentTemperature = $("#temperature");
var currentHumidty = $("#humidity");
var currentWSpeed = $("#wind-speed");
var currentUvindex = $("#uvindex");
var storage = window.localStorage;

//var url = `https://api.openweathermap.org/data/2.5/weather?q={inputValue}&appid={apiKey}`;
var weatherCard = document.querySelector("#current-weather");
var forecastCard = document.querySelector(".forecast");

$(document).ready(function(){
    var cities = [];
//call weather api 
    function displayCurrentWeather(city) {
        var apiKey = "70bfb4227a0a636df084027cc1991ebc";
        var url = 'https://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=' + apiKey;

        $.ajax({
            url: url,
            method: "GET"
        }).then(function(response){
            var forecastIcon = response.weather[0].symbol;
            var date = $("<h2>").text(moment().format('l'));
            var symbol = $("<img>").attr("src", "https://openweathermap.org/img/wn/" + forecastIcon + "@2x.png"); 
            var temperature = (response.main.temp - 273.15) * 1.80 + 32;
            //display current weather conditions
            $("#current-city").append(response.name);
            $("#current-date").append(date);
            $("#forecastIcon").append(symbol);
            $("#temperature").apend(temperature, " \u00B0F");
            $("#humidity").append(response.main.humidity + "%");
            $("#wind-speed").append(response.wind.speed + "MPH");
            //UV index one-call
            var lat = response.coord.lat
            var long = response.coord.long
            url = "https://api.openweathermap.org/data/2.5/onecall?lat=" lat + "&lon=" + long + "&exclude=" + part + "&appid=" + apiKey; 
            $.ajax({
                url: queryURL,
                method: "GET"
            }).then(function(response){
            var uvIndex = response.value;
            $("#uvindex").append(response.value);
        });
    });

//event listeners
$("#searchBtn").click(function() {
    var searches = 

        }
        localStorage.setItem(text);
    }
)}})
//local storage 
$(".input-group #search-city").val(localStorage.getItem("#search-city"));
//call the function
