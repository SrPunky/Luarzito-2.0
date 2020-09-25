const Discord = require("discord.js");

module.exports.run = async (bot, message, argumentos) => {
  const author = message.author.id;
  if (message.author.bot) return;
  if (message.author.id === "701953428510736396") {
    const sayMessage = argumentos.join(" ");
    message.channel.send(sayMessage);
    setTimeout(() => {
      message.delete().catch(O_o => {});
    }, 1000);
  } else if (
    message.guild.member(message.author).hasPermission("ADMINISTRATOR")
  ) {
    const sayMessage = argumentos.join(" ");
    message.channel.send(sayMessage);
    setTimeout(() => {
      message.delete().catch(O_o => {});
    }, 1000);
  } else {
    const embed = new Discord.MessageEmbed()
      .setColor("RED")
      .setDescription("<a:alerta:758339902386733098> | Ih rapaiz, sem permissão.");
    message.channel.send(embed);
  }
};
