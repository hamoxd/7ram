const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'ping') {
        message.reply('pong');
      }
});


client.on('message', message => {
 if (message.content === x_x) {
  client.user.setGame(`LINKS IS HERO`, 'https://www.twitch.tv/hix')

 }
});


// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
