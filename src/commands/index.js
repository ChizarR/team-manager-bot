import { bot } from '../bot.js'
import { start } from './start.js'
import { help } from './help.js'
import { addTicket, getTickets } from './tickets.js'

bot.start(start)
bot.help(help)

bot.command('add_ticket', addTicket)
bot.command('get_tickets', getTickets)

bot.catch(e => console.log(e))
