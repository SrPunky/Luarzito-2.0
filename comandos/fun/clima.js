const weather = require('weather-js');
const Discord = require('discord.js');
const prefixo = require('../bot.js');


exports.run = (bot, message, argumentos) => {
    weather.find({
        search: argumentos,
        degreeType: 'C'
    }, function (err, result) {
        if (err) console.log(err);
        //console.log(JSON.stringify(result, null, 2));
        if (!result) return message.channel.send(`Forneça uma cidade.`)
        if (!result[0]) return message.channel.send(`Essa cidade não existe.`)
        const embed = new Discord.MessageEmbed()
            .setTitle(`**Tempo em ${result[0].location.name}**`)
            .addField(`**Temperatura:**`, `${result[0].current.temperature}°C`)
            .addField(`**Sensação Térmica:**`, `${result[0].current.feelslike}°C`)
            .addField(`**Umidade:**`, `${result[0].current.humidity}%`)
            .addField(`**Vento:**`, `${result[0].current.windspeed}`)
            .setColor("RANDOM")
            .setThumbnail(result[0].current.imageUrl)
            .setTimestamp()
        message.channel.send(embed)

    });
};

exports.help = {
    name: `tempo`,
    description: `Verifica o clima/tempo de uma cidade.`,
    usage: prefixo + `clima <cidade>`,
    aliases: [
        'clima'
    ]
};
