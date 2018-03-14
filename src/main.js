const Discord = require('discord.js')
const deeponion = require('node-deeponion')()

const settings = require('./settings')
const Commands = require('./commands')

// Init the Discord client
const client = new Discord.Client()

const giphyApiKey = settings.GIPHY_KEY

// Set our deeponion node IP and port
deeponion.set('host', settings.RPC_HOST)
deeponion.set('port', settings.RPC_PORT)

// Register auth value
deeponion.auth(settings.RPC_USER, settings.RPC_PASSWORD)

client.on('ready', () => {
  console.log('I am ready!')
})

client.on('message', message => {
  // If message has been emitted by a bot do nothing
  if (message.author.bot) return

  if (message.content.startsWith('$')) {
    var args = message.content.substring(1).split(' ')
    var command = args[1]

    switch (command) {
      case 'help':
        Commands.help(message)
        break
      case 'tip':
        Commands.tip(message, deeponion, args[2])
        break
      case 'balance':
        Commands.balance(message, deeponion)
        break
      case 'rate':
        Commands.rate(message)
        break
      case 'address':
        Commands.address(message, deeponion)
        break
      case 'withdraw':
        Commands.withdraw(message, deeponion, args[2], args[3])
        break
      case 'qrcode':
        Commands.qrcode(message, deeponion, Discord)
        break
      case 'voucher':
        Commands.voucher(message, deeponion, args[2])
        break
      default:
        message.reply('try again..')
    }
  } else {
    // Special maxslayer44
    if (message.content.indexOf('deeper') >= 0) {
      message.reply('When Lambo?')
    }
  }
})

client.login(settings.DISCORD_TOKEN)
