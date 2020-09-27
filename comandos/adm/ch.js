const Discord = require("discord.js");

module.exports.run = async (bot, message, argumentos) => {
  const prefixo = bot.prefixo;
  const escolha = argumentos[0];

  if (!message.member.hasPermission("MANAGE_CHANNELS")) {
    return message.reply("Você não tem a permissão necessária!");
  }

  if (!escolha) {
    const ajuda = new Discord.MessageEmbed()
      .setTitle("Gerenciador de canais")
      .setColor("GREEN")
      .addField(
        "Uso:",
        "`" +
          prefixo +
          "ch lock` - Para bloquear um canal\n" +
          "`" +
          prefixo +
          "ch unlock` - Para desbloquear um canal \n" +
          "`" +
          prefixo +
          "ch topic <tópico>` - Para definir um novo tópico! \n" +
          "`" +
          prefixo +
          "ch slowmode <tempo>` - Coloque limite de tempo!"
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
      message.channel.send(bloqueado).then(message.delete());
    } catch (e) {
      message.channel.send(
        `<a:alerta:758339902386733098> | Não consegui bloquear o canal por causa de ${e}`
      );
    }
  }
  if (escolha === "unlock") {
    try {
      message.channel.overwritePermissions([
        {
          id: message.guild.id,
          allow: ["SEND_MESSAGES"]
        }
      ]);
      return message.channel
        .send("<:yes:758340222244093992> | Chat desbloqueado!")
        .then(message.delete());
    } catch (e) {
      message.channel.send(
        `<a:alerta:758339902386733098> | Não consegui bloquear o canal por causa de ${e}`
      );
    }
  }
  if (escolha === "topic") {
    try {
      message.channel
        .setTopic(argumentos.slice(1).join(" "))
        .then(updated =>
          message.channel
            .send(
              `<:yes:758340222244093992> | O tópico do canal foi setado para ${updated.topic}`
            )
            .then(message.delete())
        );
    } catch (e) {
      message.channel.send(
        `Não foi possível mudar o tópico do canal, erro: ${e}`
      );
    }
  }
  if (escolha === "slowmode") {
    if (!argumentos[1]) {
      const ajudaSM = new Discord.MessageEmbed()
        .setTitle("Ajuda slowmode")
        .addField("Uso:", "`" + prefixo + " slowmode 10` - Para 10 segundos");
      message.channel.send(ajudaSM);
    }
    if (argumentos[1] === "off") {
      try {
        message.channel.setRateLimitPerUser(0);
        const setSM = new Discord.MessageEmbed()
          .setTitle("Slow Mode desligado")
          .setColor("GREEN")
          .setDescription(
            "<:yes:758340222244093992> | Chat com limite desligado"
          )
          .addField("Staff que retirou o slowmode:", message.author);
        message.channel.send(setSM).then(message.delete());
      } catch (e) {
        message.channel.send(`Não consegui retirar o limite, erro: ${e}`);
      }
    } else {
      try {
        message.channel.setRateLimitPerUser(argumentos[1]);
        const setSM = new Discord.MessageEmbed()
          .setTitle("Slow Mode")
          .setColor("GREEN")
          .setDescription(
            "<:yes:758340222244093992> | Chat em slowmode de " +
              argumentos[1] +
              " segundos!"
          )
          .addField("Staff que realizou o slowmode:", message.author);
        message.channel.send(setSM).then(message.delete());
      } catch (e) {
        message.channel.send(`Não consegui colocar um limite, erro: ${e}`);
      }
    }
  }
};
