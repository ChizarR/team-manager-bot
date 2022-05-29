import { Ticket } from '../entities/Ticket.js'

const addNewTicket = async (ctx) => {
  const ticket = new Ticket(ctx)
  await ctx.reply(`Added ${ticket.task} to tickets list. Author is ${ticket.author}. Executor ${ticket.executor}`)
}

export { addNewTicket }
