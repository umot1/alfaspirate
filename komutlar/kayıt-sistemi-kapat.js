const Discord = require('discord.js');
const db = require('quick.db')
exports.run = (client, message, args) => { 

if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(`:tools:  **Bu komutu kullanabilmek için "\`Yönetici\`" yetkisine sahip olmalısın.**`);
 const rol = db.fetch(`kayitKanal_${message.guild.id}`)  
 if(!rol) return message.channel.send(`:tools:  **Bu özellik zaten kapalı! :wink: **`)
 
 
  message.channel.send(`:tools:  **Kayıt Sistemi başarılı bir şekilde kapatıldı.**`)

 
  db.delete(`kayitAR_${message.guild.id}`)  
  db.delete(`kayitVR_${message.guild.id}`) 
  db.delete(`kayitLog_${message.guild.id}`)  
  db.delete(`kayitKanal_${message.guild.id}`)  
  db.delete(`isimtemizleyiciK_${message.guild.id}`)  
};
exports.config = {
  name: 'kayıt-sistemi-kapat',
  aliases: []
};
