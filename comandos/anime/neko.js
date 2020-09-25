const Discord = require("discord.js");
const superagent = require("superagent");
exports.run = async (bot, message, argumentos) => {
  message.channel.startTyping();
  const { body } = await superagent.get("https://nekos.life/api/neko");
  const embed = new Discord.MessageEmbed()
    .setColor(0x00a2e8)
    .setImage(body.neko);
  message.channel.send(embed);
  message.channel.stopTyping();
};
