const axios = require('axios')

module.exports = {
  getYesOrNo: function () {
    axios.get('https://yesno.wtf/api')
      .then(function (response) {
        console.log(response.data.answer)
      })
      .catch(function (err) {
        console.log(err)
      })
  }
}
