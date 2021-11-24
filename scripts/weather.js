const express = require("express");
const https = require('https');
const app = express();
const bodyParser = require('body-parser');
const { urlencoded } = require('body-parser');


app.use(express.urlencoded({ extended: true }))
app.use(express.urlencoded({ extended: true }))

app.get("/", function(req, res) {

    res.sendFile(__dirname + "/weather.html");

})


app.post("/", function(req, res) {
    const units = 'metric'

    const query = req.body.cityName;
    const apikey = "f81e869ce68e56cb2fe9ed64be0a74b1"
    const url = "https://api.openweathermap.org/data/2.5/weather?q=" + query + "&appid=f81e869ce68e56cb2fe9ed64be0a74b1&units=" + units

    https.get(url, function(response) {

        response.on("data", function(data) {

            console.log(data);
            const weatherData = JSON.parse(data)
            const query = req.body.cityName;
            const temp = weatherData.main.temp
            const weatherDescription = weatherData.weather[0].description
            const icon = weatherData.weather[0].icon
            const imageURL = "http://openweathermap.org/img/wn/" + icon + "@2x.png"
            console.log(weatherData)
            res.write("<p>Current weather: " + weatherDescription + "</p>");
            res.write("Current temp: " + temp + " degrees")
            res.write("<img src = " + imageURL + ">")

            res.send()

        })

    })

});



let port = 5500;
app.listen(port, function() {
    console.log('Prince application is on port ' + port + '!')
});