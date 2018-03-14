const request = require('request')
const { RATE_URL } = require('./constants')
const { OOPS_TEXT } = require('./messages')

/**
 * Give the rate of one onion in usd.
 * @return rate
 **/
function rateOnionUsd () {
  return new Promise((resolve, reject) => {
    request.get(RATE_URL, function (error, response, body) {
      if (error) {
        reject(OOPS_TEXT)
        return
      }

      var result = JSON.parse(body)
      resolve(result[0].price_usd)
    })
  })
}

module.exports = { rateOnionUsd }
