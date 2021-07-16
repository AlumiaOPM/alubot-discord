const Discord = require("discord.js");
require('dotenv').config();

const client = new Discord.Client();

const prefix = "!";

client.on("message", function (message) {
  // Prevent BOT messages
  if (message.author.bot) return;

  // If isn't a command
  if (!message.content.startsWith(prefix)) return;

  const commandBody = message.content.slice(prefix.length);
  const args = commandBody.split(' ');
  const command = args.shift().toLowerCase();

  if (command === "ping") {
    const timeTaken = Date.now() - message.createdTimestamp;
    message.reply(`Pong! This message had a latency of ${timeTaken}ms.`);
  }

  else if (command === "sum") {
    const numArgs = args.map(x => parseFloat(x));
    const sum = numArgs.reduce((counter, x) => counter += x);
    message.reply(`The sum of all the arguments you provided is ${sum}!`);
  }

  else if (command === "teste") {
    console.log(message);
    message.reply("teste")
  }

});

client.login(process.env.BOT_TOKEN);

let channel;

client.on("ready", async () => {
  const channelId = "864555279823011847"
  channel = await client.channels.cache.get(channelId);

  console.log("Bot ready!");
})

async function sendMessagesToChannel(req, res) {
  // Get body from request
  const requestBody = req.body;

  const message = `
    Chegou um quentíssimo!!

    Nome: ${requestBody.name},
    Telefone: ${requestBody.phone},
    E-mail: ${requestBody.email}

  `

  // Send message to channel
  channel.send(String(message));

  return res.send("Successfull sent to channel");
};

module.exports = { sendMessagesToChannel };
