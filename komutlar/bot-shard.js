const Discord = require('discord.js');
const db = require('quick.db');
const chalk = require('chalk')
const moment = require('moment');
require('moment-duration-format');
const ayarlar = require('../ayarlar/bot.json');
const fetch = require('node-fetch');

exports.run = async (client, message, args) => {

  const duration = moment.duration(client.uptime).format('D [gün], H [saat], m [dakika], s [saniye]');
      
let shardinfo = {
        ping: await client.shard.fetchClientValues('ping'),
        server_count: await client.shard.fetchClientValues('guilds.size'),
        user_count: await client.shard.fetchClientValues('users.size'),
        uptime: await client.shard.fetchClientValues("uptime")
    }
let i = client.shard.id
    let shardembed = new Discord.MessageEmbed()
    .setTitle('Shard İstatistik')
    .setColor("#ffd100")
    .setImage(`link`)
    
    for(i=0;i<client.shard.count;i++) {
        shardembed.addField(`:tools: **Shard ${i}**`, `:tools:  **Ping:** ${Math.round(shardinfo.ping[i])}ms\n:tools:  **Sunucu:** ${shardinfo.server_count[i]}\n :tools: **Kullanıcı:** ${shardinfo.user_count[i]}\n :tools: **Uptime:** ${moment.duration(shardinfo.uptime[i]).format(`D [Gün] , H [Saat], m [Dakika], s [Saniye]`)} \n :tools: **Bu Sunucunun Shardı Id'si**: ${client.shard.id}`, true)
    }
    message.channel.send(shardembed)
}
exports.config = {
  name: "shard",
  aliases: []
};
