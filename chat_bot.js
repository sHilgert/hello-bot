const TelegramBot = require('node-telegram-bot-api');

const TOKEN = "335662340:AAECBj8izyXCIkdJFGgRRixbNelTvr2w0lA";
const PORT = process.env.PORT || 5000;
const URL = "https://blooming-brook-75813.herokuapp.com"

// Bot
const botOptions = {
  webHook: {
    port: PORT
  }
};
const bot = new TelegramBot(TOKEN, botOptions);
bot.setWebHook(`${URL}/bot${TOKEN}`);

//Error Handlers
bot.on('polling_error', (error) => console.log(error.code));
bot.on('webhook_error', (error) => console.log(error.code));

bot.onText(/\/echo (.+)/, (msg, match) => {
  const chatId = msg.chat.id;
  const resp = match[1]; 
  bot.sendMessage(chatId, resp);
});


bot.on('message', (msg) => {
  const chatId = msg.chat.id;

  // send a message to the chat acknowledging receipt of their message
  bot.sendMessage(chatId, 'hello');
});