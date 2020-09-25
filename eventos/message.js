module.exports = async (bot, message, Discord) => {
  if (message.author.bot || !message.guild) return;
  /*
  const user = message.mentions.users.first();
  if (user.id === "743841329334845530")
    try {
      message.channel.send(
        "> Roi! Eu me chamo luarzito e meu prefíxo é " +
          "`" +
          bot.prefixo +
          "`! \n> Que tal tentar" +
          "`" +
          bot.prefixo +
          "help`?"
      );
    } catch (e) {
      console.log(e);
    }
    */
  const user = message.mentions.users.first();
  if (!message.content.startsWith(bot.prefixo)) return;

  var arg_texto = message.content.slice(bot.prefixo.length);
  var argumentos = arg_texto.trim().split(/ +/g);
  var comando = argumentos.shift().toLowerCase();

  var chat = message.channel;
  let remover = comando.length + 1;
  arg_texto = arg_texto.slice(remover);

  switch (comando) {
    case "help":
    case "comandos":
      comando = "ajuda";
      break;
  }

  if (bot.pastas[comando] && bot.pastas[comando].includes("comandos")) {
    if (
      !message.guild &&
      !["ping", "help", "ship", "comandos", "ajuda", "info", "bater"].includes(
        comando
      )
    ) {
      return chat.send("Este comando não pode ser executado no privado!");
    }

    console.log(
      message.author.tag + "  " + bot.prefixo + comando + " " + arg_texto
    );
    bot[comando](bot, message, argumentos, arg_texto, chat); //arg_texto: argumento com o prefixo
  } else {
    if (!message.guild) {
      return;
    }
  }
};
