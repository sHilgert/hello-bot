const TelegramBot = require('node-telegram-bot-api');

// Put your bot token here, go to BOT Father in telegram and generate one
const TOKEN = "your-bot-token";

const PORT = process.env.PORT || 5000;

// get your project url from heroku, for example: https://blooming-brook-75813.herokuapp.com
const URL = "http://your-project-url"

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


// Echo command
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