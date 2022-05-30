class MessageHandler {
  constructor(ctx) {
    this._authorsId = ctx.from.id
    this._author = ctx.from.firts_name
    this._message = ctx.message.text
  }

  get text() {
    return this._message
  }
}
