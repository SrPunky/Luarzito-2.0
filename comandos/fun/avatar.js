const Discord = require("discord.js");

exports.run = async (bot, message, argumentos) => {
  let user =
    message.mentions.users.first() ||
    bot.users.cache.get(argumentos[0]) ||
    message.author;

  let avatar = user.avatarURL({ dynamic: true, format: "png", size: 1024 });

  let embed = new Discord.MessageEmbed()
    .setColor("RANDOM")
    .setImage(avatar)
    .setFooter(
      `Pedido de: ${message.author.tag}`,
      message.author.displayAvatarURL({ format: "png" })
    );
  await message.channel.send("Avatar de <@" + user.id + `> 😎👌🏻 \n`, embed);
};
