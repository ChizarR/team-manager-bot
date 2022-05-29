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
    const ticket = ctx.message.text.split(' ')
    ticket.splice(0, 1)
    const executor = this._findExecutor(ticket, ctx)
    return [ticket.join(' '), executor]
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
