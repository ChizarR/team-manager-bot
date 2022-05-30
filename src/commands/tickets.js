import { Ticket } from '../entities/Ticket.js'

let tickets = []

const addTicket = async (ctx) => {
  const ticket = new Ticket(ctx)
  tickets.push({
    'executor': ticket.executor,
    'task': ticket.task
  })
  await ctx.reply(`Added ${ticket.task} to tickets list. Author is ${ticket.author}. Executor ${ticket.executor}`)
}

const getTickets = async (ctx) => {
  console.log(tickets)
  await ctx.reply('See in terminal)))')
}

export { addTicket, getTickets }
