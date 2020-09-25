const Discord = require("discord.js");

module.exports.run = async (bot, message, argumentos) => {
  message.delete({ timeout: 1000 });
  const escolha = argumentos[0];

  if (!message.member.hasPermission("MANAGE_CHANNELS")) {
    return message.reply("Você não tem a permissão necessária!");
  }

  if (!escolha) {
    const ajuda = new Discord.MessageEmbed()
      .setTitle("Bloqueio de canal")
      .setColor("RED")
      .addField(
        "Uso:",
        "`lzch lock` - Para bloquear um canal\n`lzch unlock` - Para desbloquear um canal"
      );
    message.channel.send(ajuda);
  }

  if (escolha === "lock") {
    try {
      message.channel.overwritePermissions([
        {
          id: message.guild.id,
          deny: ["SEND_MESSAGES"]
        }
      ]);
      const bloqueado = new Discord.MessageEmbed()
        .setTitle("Bloqueio de canal")
        .setColor("GREEN")
        .setDescription("<:yes:758340222244093992> | Chat bloqueado!")
        .addField("Staff que realizou o bloqueio:", message.author);
      message.channel.send(bloqueado);
    } catch (e) {
      message.channel.send(
        `<a:alerta:758339902386733098> | Não consegui bloquear o canal por causa de ${e}`
      );
    }
  } else if (escolha === "unlock") {
    try {
      message.channel.overwritePermissions([
        {
          id: message.guild.id,
          allow: ["SEND_MESSAGES"]
        }
      ]);
      return message.channel.send(
        "<:yes:758340222244093992> | Chat desbloqueado!"
      );
    } catch (e) {
      message.channel.send(
        `<a:alerta:758339902386733098> | Não consegui bloquear o canal por causa de ${e}`
      );
    }
  }
};
