const Telegraf = require('telegraf')

const bot = new Telegraf(process.env.882738691:AAGt6A6hcTyZWeMQFmdF42BdXLmEq_sHI50)
bot.start((ctx) => ctx.reply('Welcome!'))
bot.help((ctx) => ctx.reply('Send me a sticker'))
bot.on('sticker', (ctx) => ctx.reply(''))
bot.hears('hi', (ctx) => ctx.reply('Hey there'))
bot.launch()
