const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === 'ping') {
    msg.reply('pong');
  }
});

client.login("NzU3OTk1MDQyMjkwNzk0NjY2.X2of5A.BVFCLsnLsVf_jnszrIN5DThfJx0");