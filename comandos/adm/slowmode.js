const Discord = require("discord.js");

exports.run = async (bot, message, argumentos) => {
  if (!message.member.hasPermission("BAN_MEMBERS"))
    return message.channel.send(
      `Você não tem permissão para usar este comando`
    );
  const tempo = argumentos[0];
  message.channel.setRateLimitPerUser(tempo);
  message.reply(
    `<:yes:758340222244093992> | o tempo do Slowmode alterado com sucesso para ${tempo} segundos!`
  );
};
