  
const db = require("quick.db");
const Discord = require('discord.js');
const fynx = require("../ayarlar/bot.json");
exports.run = async (client, message, args) => { 
let prefix = await db.fetch(`prefix.${message.guild.id}`) || fynx.prefix 
let eklenti = new Discord.MessageEmbed()  
.setColor('#ffd100') 
.setAuthor(`Clarisa Genel Komutlar`, client.user.avatarURL())
.setDescription(`:tools: Clarisa botumuzu eklemek için \`${prefix}davet\` yazabilirsiniz.`)
.addField(`__Komut Sayısı__`,`:tools: \`${prefix}komutlar\` Botun Komut Sayısını Gösterir`,true)
.addField(`__Davet Et__`,`:tools: \`${prefix}davet\` Botumuzu Davet Edersiniz`,true)
.addField(`__Bot Bilgi__`,`:tools: \`${prefix}botbilgi\` Botumuzun İstatistikleri`,true)
.addField(`__Bot Shard__`,`:tools: \`${prefix}shard\` Shard Bilgilerini Gösterir`,true)
.addField(`__Profil__`,`:tools: \`${prefix}profil\` Kullanıcı Profilinizi Gösterir`,true)
.addField(`__Oylama__`,`:tools: \`${prefix}oylama\` Sunucuda Oylama Başlatır`,true)
.addField(`__Duyuru__`,`:tools: \`${prefix}duyuru\` Sunucuda Duyuru Yapar`,true)
.addField(`__Bilgilendirme__`,`:tools: \`${prefix}davet\` | Clarisa'yi Sunucunuza Davet Edersiniz\n:tools: \`${prefix}botbilgi\` | Botun İstatistiklerini Gösterir \n :tools: \`${prefix}ayarlar\` | Sunucunuzdaki Açık veya Kapalı Komutları Gösterir`)
.setImage(`link`)
.setThumbnail(client.user.avatarURL)
 message.channel.send(eklenti) 
  };
exports.config = {
name: "genel",
  aliases: []
}
