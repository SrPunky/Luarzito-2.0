const Discord = require("discord.js");

module.exports.run = async (bot, message, argumentos) => {
  if (message.guild.member(message.author).hasPermission("ADMINISTRATOR")) {
    if (!argumentos.slice(0).join(" ")) {
      message.channel.send("Tente lzsetservericon <URL>");
    } else {
      message.guild
        .setIcon(argumentos.slice(0).join(" "))
        .then(updated => message.channel.send("<:yes:758340222244093992> | Icone do servidor atualizado!"))
        .catch(console.error);
    }
  } else {
    message.channel.send("Sem permissão.");
  }
};
