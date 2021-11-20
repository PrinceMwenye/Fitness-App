const { createSecretKey } = require('crypto');
const express = require('express')
const https = require('https');
const app = express();
app.listen(5500)
const bodyParser = require('body-parser');
const { urlencoded } = require('body-parser');


app.use(bodyParser, urlencoded({ extended: true }))



app.get('/', function(request, response) {
    res.sendFile(__dirname + "/weather.html")


});

app.post("/", function(req, res) {
    const url = "https://api.openweathermap.org/data/2.5/weather?q=" + query + "&appid=" + "appid=f81e869ce68e56cb2fe9ed64be0a74b1&units=metric"
    const weatherData = JSON.parse(data)
    const temp = weatherData.main.temp
    const weatherDescription = weatherData.weather[0].description
    const query = req.body.cityName;



    https.get(url, function(response) {
        // console.log(response);

        response.on("data", function(data) {
            const weatherData = JSON.parse(data)
            const temp = weatherData.main.temp
            const weatherDescription = weatherData.weather[0].description
            const query = "Vancouver"

            res.write("The weather is currently " + weatherDescription);
            res.write("")
        })
    })

})


let port = 5500;
app.listen(port, function() {
    console.log('Prince application is on port ' + port + '!');
})