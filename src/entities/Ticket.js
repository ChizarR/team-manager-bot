class Ticket {
  constructor(ctx) {
    this._task = this._parseMessage(ctx)
  }

  get task() {
    return this._task
  }

  _parseMessage(ctx) {
    const ticket = ctx.message.text.split(' ')
    ticket.splice(0, 1)
    return ticket.join(' ')
  }
}

export { Ticket }
