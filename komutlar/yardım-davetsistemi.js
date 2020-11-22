
const db = require("quick.db");
const Discord = require('discord.js');
const fynx = require("../ayarlar/bot.json");
exports.run = async (client, message, args) => { 
let prefix = await db.fetch(`prefix.${message.guild.id}`) || fynx.prefix 
let eklenti = new Discord.MessageEmbed()  
.setColor('#ffd100') 
.setAuthor(`Clarisa Davet Sistemi`, client.user.avatarURL())
.setDescription(`:tools: Clarisa botumuzu eklemek için \`${prefix}davet\` yazabilirsiniz.`)
.addField(`__Davet Kanal__`,`<a:setting:750076062716788807> \`${prefix}davet-kanal\` Sunucunuzda Kaç Kişinin Ne Kadar Daveti Olduğunu Gösteren Kanalı Ayarlar`,true)
.addField(`__Kanal Sıfırla__`,`<a:setting:750076062716788807> \`${prefix}davet-kanal-sıfırla\` Sunucunuzda Kaç Kişinin Ne Kadar Daveti Olduğunu Gösteren Kanalı Sıfırlar`,true)
.addField(`__Davet Ekle__`,`<a:setting:750076062716788807> \`${prefix}davet-ekle\` Etiketlediğiniz Kişinin Davet Sayısını Arttırır`,true)
.addField(`__Davetlerim__`,`<a:setting:750076062716788807> \`${prefix}davetlerim\` Sunucuda Kaç Davetiniz Olduğunu Gösterir`,true)
.addField(`__Davet Rütbe Ekle__`,`<a:setting:750076062716788807> \`${prefix}rütbe-ekle\` Sunucunuzda Davet Sayısına Göre Rol Verme Sistemine Rol Ekler`,true)
.addField(`__Rütbe Sil__`,`<a:setting:750076062716788807> \`${prefix}rütbe-sil\` Sunucunuzda Davet Sayısına Göre Rol Verme Sisteminden Rol Siler`,true)
.addField(`__Bilgilendirme__`,`:tools: \`${prefix}davet\` | Clarisa'yi Sunucunuza Davet Edersiniz\n:tools: \`${prefix}botbilgi\` | Botun İstatistiklerini Gösterir \n :tools: \`${prefix}ayarlar\` | Sunucunuzdaki Açık veya Kapalı Komutları Gösterir`)
.setImage(`link`)
.setThumbnail(client.user.avatarURL)
 message.channel.send(eklenti) 
  };
exports.config = {
name: "davetsistemi",
  aliases: []
}
