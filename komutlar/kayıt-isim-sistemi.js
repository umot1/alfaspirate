const Discord = require('discord.js');
const db = require('quick.db')
exports.run = async (client, message, args) => { 
const fynx = require("../ayarlar/bot.json");
let prefix = await db.fetch(`prefix.${message.guild.id}`) || fynx.prefix   

  let mesaj = args.slice(0).join(' ');
if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(`:tools: **Bu komutu kullanabilmek için** "\`Yönetici\`" **yetkisine sahip olmalısın.**`);
  
if (mesaj.length <= 3) {
return message.channel.send(`:tools: İsim Sistemini Ayarlayabilmek İçin En Az 3 Karakter Belirtebilirsiniz.**\n**__Örnek__**: \`${prefix}isim-sistemi [-uye-]\` ya da \`${prefix}isim-sistemi [-uye-]|[-yas-]\``) 
}

db.set(`isimsistemi_${message.guild.id}`, mesaj)
  message.channel.send(`:tools:  **Kayıt Olan Kullanıcıların İsimleri** \`${mesaj}\` Olarak Ayarlanacaktır..`)
};

exports.config = {
  name: 'isim-sistemi',
  aliases: ["isimsistemi"]
};
