const Discord = require("discord.js");
const firebase = require("firebase");

if (!firebase.apps.length) {
  firebase.initializeApp(firebase);
}

module.exports.run = async (bot, message, argumentos) => {
  const firebase = require("firebase");
  const database = firebase.database();

  let user = message.mentions.users.first() || message.author;
  let bref = database.ref(`Carteira/Reais/${message.author.id}`);
  database
    .ref(`Carteira/Reais/${user.id}`)
    .once("value")
    .then(async function(db) {
      if (db.val() == null) {
        database.ref(`Carteira/Reais/${user.id}`);
        bref.set({
          Reais: 0 
        });
        const embed2 = new Discord.MessageEmbed()
          .setColor("GREEN")
          .setAuthor(
            `Saldo bancário de ${user.username}:`
          )
          //.setTitle("**Banco**")
          .addField(`**Reais:**`, `R$ 0`)
          .setThumbnail(
            "https://cdn.discordapp.com/attachments/757308101182357518/759625647441182741/pngwing.com_2.png"
          );
        message.channel.send(embed2);
      } else {
        const embed = new Discord.MessageEmbed()
          .setColor("GREEN")
          .setAuthor(
            `Saldo bancário de ${user.username}:`
          )
          .addField(`**Reais:**`, `R$ ${db.val().Reais}`)
          .setThumbnail(
            "https://cdn.discordapp.com/attachments/757308101182357518/759625647441182741/pngwing.com_2.png"
          );
        message.channel.send(embed);
      }
    });
};
