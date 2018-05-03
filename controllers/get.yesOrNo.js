const axios = require('axios')

module.exports = {
  getYesOrNo: (req, res) => {
    axios.get('https://yesno.wtf/api')
      .then(response => {
        res.send(200).json({
          data: response.data.answer
        })
      })
      .catch((err) => {
        res.send(400).json({
          err
        })

      })
  }
}
