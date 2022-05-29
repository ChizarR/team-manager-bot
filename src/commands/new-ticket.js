import { Ticket } from '../entities/Ticket.js'

const addNewTicket = (ctx) => {
  const ticket = new Ticket(ctx)
  ctx.reply(`Added ${ticket.task} to tickets list.`)
}

export { addNewTicket }
