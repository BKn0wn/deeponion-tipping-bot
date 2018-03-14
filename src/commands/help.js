const { GIPHY_KEY } = require('../settings')

const HELP_TEXT = '```DeepOnion. \n \
Command list : \n \
  - *help* : Get help ! \n \
  - *rate* : Get current value \n \
  - More coming soon..  \
```'

function help(message) {
  message.channel.send(HELP_TEXT)
}

module.exports = help
