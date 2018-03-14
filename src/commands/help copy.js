const { GIPHY_KEY } = require('../settings')

const HELP_TEXT = '```DeepOnion. \n \
Command list : \n \
  - *help* : Get help ! \n \
  - *tip* : Tip someone some onions \n \
  - *balance* : Get your balance \n \
  - *rate* : Get current value \n \
  - *address* : Show an used wallet so you can refill your wallet \n \
  - *withdraw* : Move coins to an external address \n \
  - *qrcode* : Show your qrcode  \
```'

function help(message) {
  message.channel.send(HELP_TEXT)
}

module.exports = help
