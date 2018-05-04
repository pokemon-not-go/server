const axios    = require('axios')

module.exports = {
  getWeather: (req, res) => {
    axios.get('http://api.openweathermap.org/data/2.5/weather?q=Jakarta&appid=bc8acfa8f52dbc5fee477318284b9856')
      .then((response) => {
        res.send(200).json({
          currentWeather: response.data.weather[0].main
        })
      })
      .catch((err) => {
        res.send(400).json({
          err
        })
      })
  }
}
