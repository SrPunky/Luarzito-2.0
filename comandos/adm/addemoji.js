const Discord = require("discord.js");
const c = require("../config.json");

exports.run = (bot, message, argumentos) => {
  let erro = new Discord.MessageEmbed()

    .setTitle(`Informações de uso`)
    .setDescription(
      `\`lzaddemoji\` - Adicione um emoji quer quiser ao servidor de forma mais facil`
    )
    .addField(`**Uso**`, `\`lzem <nome> <url>\``)
    .addField(`**Permissão**`, `\`MANAGE_EMOJIS\``)
    .setColor("#8c0046");

  if (!argumentos[0]) return message.channel.send(erro);
  if (!argumentos[1]) return message.channel.send(erro);
  if (!message.member.hasPermission("MANAGE_EMOJIS"))
    return message.reply(
      `Apenas usuarios com a permissão \`MANAGE_EMOJIS\` podem utilizar este comando!`
    );
  try {
    message.guild.emojis.create(argumentos[1], argumentos[0]).then(emoji => {
      message.channel.send(`${emoji} **|** Emoji adicionado com sucesso.`);
    });
  } catch (err) {
    message.channel.send(`\`\`\`js\n${err}\`\`\``);
  }
};
