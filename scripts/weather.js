var button = document.querySelector('.button');
var inputValue = document.querySelector('.inputValue');
var name = document.querySelector('.name');
var desc = document.querySelector('.desc');
var temp = document.querySelector('.temp');
var extra = document.querySelector(".extra-information")
var weatherpicture = document.querySelector(".weatherpicture")
let units = "metric"


button.addEventListener('click', function() {


    fetch("https://api.openweathermap.org/data/2.5/weather?q=" + inputValue.value + "&appid=f81e869ce68e56cb2fe9ed64be0a74b1&units=" + units)

    .then(response => response.json())
        .then(data => {
            var nameValue = data['name'];
            var tempValue = data['main']['temp'];
            var descValue = data['weather'][0]['description'];

            name.innerHTML = nameValue;
            desc.innerHTML = descValue;

            temp.innerHTML = "<b>Current Temp: <b/>" + tempValue + " <i>Degrees Celcius<i/>";

            if (tempValue < 10) {
                extra.innerHTML = "Seems too cold 🥶 in " + nameValue + " Stay warm"
                extra.style.color = "blue"
                weatherpicture.innerHTML = "<img src = 'images/coldweather.jpg'/>"


            } else if (tempValue > 10 && tempValue < 30) {
                extra.innerHTML = "Could be warm enough in " + nameValue + ", just drink enough water!"
                extra.style.color = "orange"

                weatherpicture.innerHTML = "<img src = 'images/hotweather.jpg'/>"


            } else {
                extra.innerHTML = "Too hot for the outdoors!"
                weatherpicture.innerHTML = "<img src = 'images/hotweatherwarning.jpeg'/>"


            }

        })



    // .catch(err => alert("Couldn't find that one, check your spelling or use a main city name"))


})

































// const express = require("express");
// const https = require('https');
// const app = express();
// const bodyParser = require('body-parser');
// const { urlencoded } = require('body-parser');


// app.use(express.urlencoded({ extended: true }))
// app.use(express.urlencoded({ extended: true }))
// app.use(express.static(__dirname + '/public'));
// app.get("/", function(req, res) {

//     res.sendFile(__dirname + "/weather.html");

// })


// app.post("/", function(req, res) {
//     const units = 'metric'

//     const query = req.body.cityName;
//     const apikey = "f81e869ce68e56cb2fe9ed64be0a74b1"
//     const url = "https://api.openweathermap.org/data/2.5/weather?q=" + query + "&appid=f81e869ce68e56cb2fe9ed64be0a74b1&units=" + units

//     https.get(url, function(response) {

//         response.on("data", function(data) {

//             console.log(data);
//             const weatherData = JSON.parse(data)
//             const temp = weatherData.main.temp
//             const weatherDescription = weatherData.weather[0].description
//             const icon = weatherData.weather[0].icon
//             const imageURL = "http://openweathermap.org/img/wn/" + icon + "@2x.png"
//             console.log(weatherData)
//             res.write("<p>Current weather: " + weatherDescription + "</p>");
//             res.write("Current temp: " + temp + " degrees")
//             res.write("<img src = " + imageURL + ">")

//             res.send()

//         })

//     })

// });



// let port = 5500;
// app.listen(port, function() {
//     console.log('Prince application is on port ' + port + '!')
// });