const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  let ex = new Discord.MessageEmbed()
    .setColor("RANDOM")
    .setTitle("Comando de Kick")
    .addField("Descrição:", `Chute um membro`, true)
    .addField("Uso:", `${bot.prefixo}kick [usuário] [motivo]`, true)
    .addField(
      "Example:",
      `${bot.prefixo}kick @Luar Rekcah por algo bem doido :)`
    );

  if (message.member.permissions.has("KICK_MEMBERS")) {
    if (!message.guild.me.permissions.has(["KICK_MEMBERS"]))
      return message.channel.send("<a:alerta:758339902386733098> |Eu naõ tenho permissão para fazer isto.");

    let member = message.mentions.members.first();
    if (!member) return message.channel.send(ex);
    if (!member.bannable)
      return message.channel.send("<a:alerta:758339902386733098> | Eu não consigo kikar este usuário!");
    if (member.user.id === "701953428510736396")
      return message.channel.send("<a:alerta:758339902386733098> | Eu não consigo kikar o dono/dev!");

    if (member.id === message.author.id)
      return message.channel.send("<a:alerta:758339902386733098> | Você não pode kikar a si mesmo!");

    let reason = args.slice(1).join(" ");
    if (!reason) {
      return message.channel.send("<a:alerta:758339902386733098> | Não especificou uma razão!");
    } else {
      var res = reason;
    }

    await member
      .kick({ reason: reason })
      .catch(error =>
        message.channel.send(`<a:alerta:758339902386733098> | Desculpe eu não consegui por causa de: ${error}`)
      );

    let staff = new Discord.MessageEmbed()
      .setColor("#00FFFF")
      .setTitle(":warning: | Ban")
      .setDescription(
        "O usuário: <@" +
          member.id +
          "> foi kikado por <@" +
          message.author.id +
          "> Motivo\n``" +
          res +
          "``"
      )
      .setAuthor(
        `${message.author.tag}`,
        message.author.displayAvatarURL({ Size: 32 })
      )
      .setTimestamp()
      .setFooter("ID do usuário: " + message.author.id);

    message.channel.send("<:yes:758340222244093992> | O Usuário <@" + member.id + "> foi Kikado!");

    message.delete();
  } else {
    return message.channel.send("Você não tem permissões para fazer isso!");
  }
};
