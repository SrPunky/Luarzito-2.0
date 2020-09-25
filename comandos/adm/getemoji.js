const Discord = require("discord.js");

module.exports.run = async (bot, message, argumentos, chat, args_texto) => {
  if (message.author.bot) return;
  if (!argumentos[0]) {
    message.reply(
      "Digite qual emoji você deseja! Caso não saiba, entre aqui: https://luarzito-page.glitch.me/#emojis"
    );
  }
  if (argumentos[0] === "loli_brava") {
    try {
      message.guild.emojis
        .create(
          "https://cdn.glitch.com/09f156c9-3789-498a-a799-b09fb11abc28%2Floli_brava.gif?v=1598644317727",
          "loli_brava"
        )
        .then(emoji =>
          message.channel.send(
            `<:yes:758340222244093992> | Novo emoji importado: ${emoji} !`
          )
        );
    } catch (e) {
      message.channel.send(
        `<a:alerta:758339902386733098> | Ocorreu um erro: ${e}`
      );
    }
  } else if (argumentos[0] === "hehe") {
    try {
      message.guild.emojis
        .create(
          "https://cdn.glitch.com/09f156c9-3789-498a-a799-b09fb11abc28%2Femojipng.com-68553.png?v=1598640882202",
          "hehe"
        )
        .then(emoji =>
          message.channel.send(`Novo emoji importado: ${emoji.name}!`)
        );
    } catch (e) {
      message.channel.send(
        `<a:alerta:758339902386733098> | Ocorreu um erro: ${e}`
      );
    }
  } else if (argumentos[0] === "sapo") {
    try {
      message.guild.emojis
        .create(
          "https://cdn.glitch.com/09f156c9-3789-498a-a799-b09fb11abc28%2FPngJoy_monkas-pepegamer-pepe-emoji-discord-transparent-png_106986.png?v=1598644328573",
          "sapo"
        )
        .then(emoji =>
          message.channel.send(`Novo emoji importado: ${emoji.name}!`)
        );
    } catch (e) {
      message.channel.send(
        `<a:alerta:758339902386733098> | Ocorreu um erro: ${e}`
      );
    }
  } else if (argumentos[0] === "moeba") {
    try {
      message.guild.emojis
        .create(
          "https://cdn.glitch.com/09f156c9-3789-498a-a799-b09fb11abc28%2Fmoeba.gif?v=1598644331437",
          "moeba"
        )
        .then(emoji =>
          message.channel.send(`Novo emoji importado: ${emoji.name}!`)
        );
    } catch (e) {
      message.channel.send(
        `<a:alerta:758339902386733098> | Ocorreu um erro: ${e}`
      );
    }
  } else if (argumentos[0] === "pikachu") {
    try {
      message.guild.emojis
        .create(
          "https://cdn.glitch.com/09f156c9-3789-498a-a799-b09fb11abc28%2F371e683f-fa62-4330-9d0d-15f0507b08c1.png?v=1598644335926",
          "pikachu"
        )
        .then(emoji =>
          message.channel.send(`Novo emoji importado: ${emoji.name}!`)
        );
    } catch (e) {
      message.channel.send(
        `<a:alerta:758339902386733098> | Ocorreu um erro: ${e}`
      );
    }
  } else if (argumentos[0] === "ue") {
    try {
      message.guild.emojis
        .create(
          "https://cdn.glitch.com/09f156c9-3789-498a-a799-b09fb11abc28%2Fd85ba34e563b57ed49a0e258839137df.png?v=1598644336280",
          "ue"
        )
        .then(emoji =>
          message.channel.send(`Novo emoji importado: ${emoji.name}!`)
        );
    } catch (e) {
      message.channel.send(
        `<a:alerta:758339902386733098> | Ocorreu um erro: ${e}`
      );
    }
  } else if (argumentos[0] === "piscada") {
    try {
      message.guild.emojis
        .create(
          "https://cdn.glitch.com/09f156c9-3789-498a-a799-b09fb11abc28%2Fb50e32624ab513812d97d6dea7b478ec_5872006441185134428.gif?v=1598644374535",
          "piscada"
        )
        .then(emoji =>
          message.channel.send(`Novo emoji importado: ${emoji.name}!`)
        );
    } catch (e) {
      message.channel.send(
        `<a:alerta:758339902386733098> | Ocorreu um erro: ${e}`
      );
    }
  } else if (argumentos[0] === "hihi") {
    try {
      message.guild.emojis
        .create(
          "https://cdn.glitch.com/09f156c9-3789-498a-a799-b09fb11abc28%2Fkindpng_6809432.png?v=1598644485993",
          "hihi"
        )
        .then(emoji =>
          message.channel.send(`Novo emoji importado: ${emoji.name}!`)
        );
    } catch (e) {
      message.channel.send(
        `<a:alerta:758339902386733098> | Ocorreu um erro: ${e}`
      );
    }
  } else if (argumentos[0] === "yare") {
    try {
      message.guild.emojis
        .create(
          "https://cdn.glitch.com/09f156c9-3789-498a-a799-b09fb11abc28%2FYareyare.png?v=1598716272141",
          "yare"
        )
        .then(emoji =>
          message.channel.send(`Novo emoji importado: ${emoji.name}!`)
        );
    } catch (e) {
      message.channel.send(
        `<a:alerta:758339902386733098> | Ocorreu um erro: ${e}`
      );
    }
  } else if (argumentos[0] === "genius") {
    try {
      message.guild.emojis
        .create(
          "https://cdn.glitch.com/09f156c9-3789-498a-a799-b09fb11abc28%2Fgenius.png?v=1598716488088",
          "genius"
        )
        .then(emoji =>
          message.channel.send(`Novo emoji importado: ${emoji.name}!`)
        );
    } catch (e) {
      message.channel.send(
        `<a:alerta:758339902386733098> | Ocorreu um erro: ${e}`
      );
    }
  } else if (argumentos[0] === "ohh") {
    try {
      message.guild.emojis
        .create(
          "https://cdn.glitch.com/09f156c9-3789-498a-a799-b09fb11abc28%2F4778_kobe_surprised.png?v=1598719431324",
          "ohh"
        )
        .then(emoji =>
          message.channel.send(`Novo emoji importado: ${emoji.name}!`)
        );
    } catch (e) {
      message.channel.send(
        `<a:alerta:758339902386733098> | Ocorreu um erro: ${e}`
      );
    }
  } else if (argumentos[0] === "dancing_loli") {
    try {
      message.guild.emojis
        .create(
          "https://cdn.glitch.com/09f156c9-3789-498a-a799-b09fb11abc28%2F674344399064399895.gif?v=1598719433958",
          "dancing_loli"
        )
        .then(emoji =>
          message.channel.send(`Novo emoji importado: ${emoji.name}!`)
        );
    } catch (e) {
      message.channel.send(
        `<a:alerta:758339902386733098> | Ocorreu um erro: ${e}`
      );
    }
  } else if (argumentos[0] === "uiui") {
    try {
      message.guild.emojis
        .create(
          "https://cdn.glitch.com/09f156c9-3789-498a-a799-b09fb11abc28%2Fafo.png?v=1598719448493",
          "uiui"
        )
        .then(emoji =>
          message.channel.send(`Novo emoji importado: ${emoji.name}!`)
        );
    } catch (e) {
      message.channel.send(
        `<a:alerta:758339902386733098> | Ocorreu um erro: ${e}`
      );
    }
  } else if (argumentos[0] === "esperto") {
    try {
      message.guild.emojis
        .create(
          "https://cdn.glitch.com/09f156c9-3789-498a-a799-b09fb11abc28%2Fiagnuign.png?v=1598719452029",
          "esperto"
        )
        .then(emoji =>
          message.channel.send(`Novo emoji importado: ${emoji.name}!`)
        );
    } catch (e) {
      message.channel.send(
        `<a:alerta:758339902386733098> | Ocorreu um erro: ${e}`
      );
    }
  } else if (argumentos[0] === "si") {
    try {
      message.guild.emojis
        .create(
          "https://cdn.glitch.com/09f156c9-3789-498a-a799-b09fb11abc28%2Fkniqgn.png?v=1598719456737",
          "si"
        )
        .then(emoji =>
          message.channel.send(`Novo emoji importado: ${emoji.name}!`)
        );
    } catch (e) {
      message.channel.send(
        `<a:alerta:758339902386733098> | Ocorreu um erro: ${e}`
      );
    }
  } else if (argumentos[0] === "gatin") {
    try {
      message.guild.emojis
        .create(
          "https://cdn.glitch.com/09f156c9-3789-498a-a799-b09fb11abc28%2Fgatin.gif?v=1599141335812",
          "gatin"
        )
        .then(emoji =>
          message.channel.send(`Novo emoji importado: ${emoji.name}!`)
        );
    } catch (e) {
      message.channel.send(
        `<a:alerta:758339902386733098> | Ocorreu um erro: ${e}`
      );
    }
  }
};
