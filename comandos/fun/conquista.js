const Discord = require("discord.js");
exports.run = async (bot, message, argumentos) => {
message.delete()
    try {
       const text = argumentos.join(" ");
        if (text === null) return message.channel.send("Você precisa colocar um texto para a conquista");
            if (text.length > 25) return message.reply('Texto precisa ter menos de 25 carácteres');
        const superagent = require('superagent')
        const { body } = await superagent
            .get('https://www.minecraftskinstealer.com/achievement/a.php')
            .query({
                i: 1,
                h: 'Achievement Get!',
                t: text
            });
        message.channel.send({ files: [{ attachment: body, name: 'achievement.png' }] 
      });
    } catch (err) {
            console.log(err)
    }
}
