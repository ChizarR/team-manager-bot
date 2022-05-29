class Ticket {
  constructor(ctx) {
    this._task = this._parseMessage(ctx)
  }

  get task() {
    return this._task
  }

  get author() {
    return this._author
  }

  _parseMessage(ctx) {
    const ticket = ctx.message.text.split(' ')
    ticket.splice(0, 1)
    return ticket.join(' ')
  }
}

export { Ticket }
