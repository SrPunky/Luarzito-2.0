const Discord = require("discord.js");
const bot = new Discord.Client();
exports.run = async (bot, message, argumentos) => {
  if (message.author.id == "701953428510736396") {
    const escolha = argumentos.join(" ");
    const argumento = argumentos[1];

    if (!escolha) {
      const embed = new Discord.MessageEmbed()
      .setTitle('<:fer:758348055446945802> | Olá, caro dev')
      .setDescription(`m - manutenção \n n - normal`)
      message.channel.send(embed)
    }
    
    if(escolha === 'n') {
      
      let activities = [
          `lzinfo para obter ajuda 📖`, 
          `${bot.guilds.cache.size} servidores! 🌐`, 
          `${bot.channels.cache.size} canais! 🥵`,
          `Meu prefíxo é lz (LZ)! 🤖`, 
          `${bot.users.cache.size} usuários! 😎`,
          `#nofap`
        ],
        i = 0;
      setInterval(
        () =>
          bot.user.setActivity(`${activities[i++ % activities.length]}`, {
            type: "PLAYING"
          }),
        5000
      );
      const embed = new Discord.MessageEmbed()
      .setTitle('Olá, caro dev')
      .setDescription(`O modo normal foi ativado!`)
      message.channel.send(embed)
    }
    
    if (escolha === "m") {
      let activities = [
          `Em manutenção`, //${config.prefix}info para obter ajuda 📖
          `Em manutenção`, //${client.guilds.cache.size} servidores! 🌐
          `Em manutenção`, //${client.channels.cache.size} canais! 🥵
          `Em manutenção`, //Meu prefíxo é lz (LZ)! 🤖
          `Em manutenção` //${client.users.cache.size} usuários! 😎
        ],
        i = 0;
      setInterval(
        () =>
          bot.user.setActivity(`${activities[i++ % activities.length]}`, {
            type: "PLAYING"
          }),
        5000
      );
      const embed = new Discord.MessageEmbed()
      .setTitle('<:fer:758348055446945802> | Olá, caro dev')
      .setDescription(`O modo manutenção foi ativado!`)
      message.channel.send(embed)
    }
  } else {
    message.reply("<a:alerta:758339902386733098> | Id não reconhecida...");
  }
};
