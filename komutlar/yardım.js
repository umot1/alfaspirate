 const db = require("quick.db");
const Discord = require('discord.js');
const fynx = require("../ayarlar/bot.json");
exports.run = async (client, message, args) => { 
let prefix = await db.fetch(`prefix.${message.guild.id}`) || fynx.prefix 
let eklenti = new Discord.MessageEmbed()  
.setAuthor(`Clarisa Yardım Menüsü`, client.user.avatarURL())
.setColor('#ffd100')
.setDescription(`:tools: Clarisa botumuzu eklemek için \`${prefix}davet\` yazabilirsiniz.`)  
.addField(`__Genel Komutlar__`,`<a:partner:750076057679429656> \`${prefix}genel\``,true)
.addField(`__Mod Komutları__`,`<a:setting:750076062716788807> \`${prefix}moderasyon\` `,true)
.addField(`__Guard Komutları__`,`:tools: \`${prefix}guard\`  `,true)
.addField(`__Müzik Komutları__`,`<a:partner:750076057679429656> \`${prefix}müzik\` `,true)
.addField(`__Eklenti Komutları__`,`<a:setting:750076062716788807> \`${prefix}eklenti\`  `,true)
.addField(`__Prefix Değiştir__`,`:tools: \`${prefix}prefix\` `,true)
.addField(`__Bilgilendirme__`,`:tools: \`${prefix}davet\` | Clarisa'yi Sunucunuza Davet Edersiniz\n:tools: \`${prefix}botbilgi\` | Botun İstatistiklerini Gösterir \n :tools: \`${prefix}ayarlar\` | Sunucunuzdaki Açık veya Kapalı Komutları Gösterir`)
  .setImage(`link`)
.setThumbnail(client.user.avatarURL)
 message.channel.send(eklenti) 
  };
exports.config = {
name: "yardım",
  aliases: []
}