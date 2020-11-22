const db = require("quick.db");
const Discord = require('discord.js');
const fynx = require("../ayarlar/bot.json");
exports.run = async (client, message, args) => { 
let prefix = await db.fetch(`prefix.${message.guild.id}`) || fynx.prefix 
let eklenti = new Discord.MessageEmbed()  
.setColor('#ffd100') 
.setAuthor(`Clarisa Oto Rol Komutları`, client.user.avatarURL())
.setDescription(`:tools: Clarisa botumuzu eklemek için \`${prefix}davet\` yazabilirsiniz.`)
.addField(`__Oto Rol Ayarla__`,`<a:setting:750076062716788807> \`${prefix}otorol-ayarla\` Sunucunuzda Otorol Ayarlar.`,true)
.addField(`__Oto Rol Kapat__`,`<a:setting:750076062716788807> \`${prefix}otorol-kapat\` Sunucunuzdaki Otorol'ü Kapatır.`,true)
.addField(`__Oto Rol Mesaj__`,`<a:setting:750076062716788807> \`${prefix}otorol-mesaj\` Sunucunuzdaki Otorol'ün Mesajını Ayarlar.`,true)
.addField(`__Oto Rol Mesaj Sıfırla__`,`<a:setting:750076062716788807> \`${prefix}otorol-mesaj-sıfırla\` Sunucunuzdaki Otorol'ün Mesajını Ayarlar.`,true)
.addField(`__Bilgilendirme__`,`:tools: \`${prefix}davet\` | Clarisa'yi Sunucunuza Davet Edersiniz\n:tools: \`${prefix}botbilgi\` | Botun İstatistiklerini Gösterir \n :tools: \`${prefix}ayarlar\` | Sunucunuzdaki Açık veya Kapalı Komutları Gösterir`)
.setImage(`link`)
.setThumbnail(client.user.avatarURL)
 message.channel.send(eklenti) 
  };
exports.config = {
name: "otorol",
  aliases: []
}
