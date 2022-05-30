class Ticket {
  constructor(ctx) {
    [this._task, this._executor] = this._parseMessage(ctx)
    this._author = ctx.from.first_name
  }

  get task() {
    return this._task
  }

  get executor() {
    return this._executor
  }

  get author() {
    return this._author
  }

  _parseMessage(ctx) {
    const rawTicket = ctx.message.text.split(' ')
    rawTicket.splice(0, 1)
    const executor = this._findExecutor(rawTicket, ctx)
    const ticket = rawTicket.join(' ')
    return [ticket, executor]
  }

  _findExecutor(ticket, ctx) {
    const author = ctx.from.first_name
    const executor = ticket.find((element) => element[0] === '@')
    if (typeof executor === 'undefined') {
      return author
    } else {
      ticket.pop(executor)
      return executor
    }
  }
}

export { Ticket }
