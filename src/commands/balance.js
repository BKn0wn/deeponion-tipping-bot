const { OOPS_TEXT } = require('../messages')
const { rateDogeEur } = require('../requests')

const BALANCE_TEXT = 'Balance : '

function balance (message, deeponionNode) {
  var account = message.author.tag.replace('#', '')

  deeponionNode.getBalance(account, function (err, balance) {
    if (err) {
      console.log(err)
      message.channel.send(OOPS_TEXT)
      return
    }

    rateDogeEur().then((rate) => {
      message.channel.send(BALANCE_TEXT + (balance).toFixed(2) + ' ONION ( ' + (balance * rate).toFixed(2) + ' USD )')
    }).catch((error) => {
      message.channel.send(error)
    })
  })
}

module.exports = balance
