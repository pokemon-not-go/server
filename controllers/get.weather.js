const axios = require('axios')

axios.get('http://api.openweathermap.org/data/2.5/weather?q=Jakarta&appid=bc8acfa8f52dbc5fee477318284b9856')
   .then(function(response) {
     let currentWeather = response.data.weather[0].main
      console.log(currentWeather)
   })
   .catch(function(err) {
      console.log(err)
   })