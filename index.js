require('dotenv').config();
const Discord = require('discord.js');
const bot = new Discord.Client();
const TOKEN = process.env.TOKEN;

bot.login("NzQxMTU0MDk1NzQ1ODU5NTg1.Xyzbig.LzuaAaPmt2KCIIK12hXT5ywglmk");

bot.on('ready', () => {
  console.info(`Logged in as ${bot.user.tag}!`);
});

bot.on('message', msg => {
  if (msg.content === 'aaay') {
    msg.channel.send('aaaay');

  } else if (msg.content.startsWith('!kick')) {
    if (msg.mentions.users.size) {
      const taggedUser = msg.mentions.users.first();
      msg.channel.send(`You wanted to kick: ${taggedUser.username}`);
    } else {
      msg.reply('Please tag a valid user!');
    }
  }
});

bot.on('guildMemberAdd', member => {
   member.send("Aaaayyy! Welcome to the server bro!");
});
