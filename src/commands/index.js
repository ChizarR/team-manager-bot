import { bot } from '../bot.js'
import { start } from './start.js'
import { help } from './help.js'
import { addNewTicket } from './new-ticket.js'

bot.start(start)
bot.help(help)

bot.command('add_ticket', addNewTicket)

bot.catch(e => console.log(e))
