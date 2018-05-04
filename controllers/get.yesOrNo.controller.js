const axios    = require('axios')

module.exports = {
  getYesOrNo: (req, res) => {
    axios.get('https://yesno.wtf/api')
      .then(response => {
        let answer = response.data.answer
        if(answer === 'yes'){

        }else{

        }
        axios.get(/*Pokemon link*/)
        .then()
        .catch()
      })
      .catch((err) => {
        res.status(400).json({
          err
        })
      })
  }
}
