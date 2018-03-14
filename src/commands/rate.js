const { rateOnionUsd } = require('../requests')

function rate (message) {
  rateOnionUsd().then((rate) => {
    message.channel.send('1 ONION = ' + rate + ' USD')
  }).catch((error) => {
    message.channel.send(error)
  })
}

module.exports = rate
