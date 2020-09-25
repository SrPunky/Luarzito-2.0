module.exports = async bot => {
  console.log(
    "Estou pronto para ser usado \n  Ativo em " +
      bot.channels.cache.size +
      " canais (geral) e " +
      bot.guilds.cache.size +
      " servidores"
  );

  const avatares = [
    "https://images-ext-2.discordapp.net/external/8KUgDxwQQU6V3J6OQMJPAeY3nOGbHcnoJ44W8IkoUGA/%3Fsize%3D1024/https/cdn.discordapp.com/icons/742068003583295619/38b8da7ae2bac109e0cd9521916cf79c.png?width=475&height=475"
  ];

  const status = [
    "online"
    // "dnd",
    // "idle"
  ];

  const atividades = [
    ["vocês <3", "LISTENING"],
    ["Avatar feito no PitzMaker❤", "WATCHING"],
    [bot.users.cache.size + " usuários", "LISTENING"],
    ["meu prefixo é lz (LZ)", "PLAYING"],
    [bot.channels.cache.size + " canais!", "WATCHING"],
    [bot.guilds.cache.size + " servidores!", "WATCHING"]
  ];
  setInterval(async () => {
    // controlar o intervalo
    let i = Math.floor(Math.random() * atividades.length + 1) - 1;
    await bot.user.setActivity(atividades[i][0], { type: atividades[i][1] });
  }, 10000); // intervalo

  setInterval(async () => {
    let b = Math.floor(Math.random() * status.length + 1) - 1;
    await bot.user.setStatus(status[b]);
  }, 20000);

  setInterval(async () => {
    let c = Math.floor(Math.random() * avatares.length + 1) - 1;
    await bot.user.setAvatar(avatares[c]);
  }, 400000);
};
