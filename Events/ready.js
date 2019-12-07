const logger = require('chalk');
const Discord = require('discord.js');
module.exports = async(client) => {

    let reboot = new Discord.RichEmbed()
        .setImage(client.displayAvatarURL)
        .setColor("#4676a3")
        .setTitle("Restarting...")
        .setFooter("Bot by ★ŦAEYN★#0001")
        .setDescription("TaeynBot ");
    //////////////////////////////////////////////////////////////
    let shard1 = new Discord.RichEmbed()
        .setImage(client.displayAvatarURL)
        .setColor("#4676a3")
        .setTitle("Sharding")
        .setFooter("Bot by ★ŦAEYN★#0001")
        .setDescription("TaeynBot shard 15/30");
    ////////////////////////////////////////////////////////
    let shard2 = new Discord.RichEmbed()
        .setImage(client.displayAvatarURL)
        .setColor("#4676a3")
        .setTitle("Sharding")
        .setFooter("Bot by ★ŦAEYN★#0001")
        .setDescription("TaeynBot shard 23/30");
    ///////////////////////////////////////////////////////
    let shard3 = new Discord.RichEmbed()
        .setImage(client.displayAvatarURL)
        .setColor("#4676a3")
        .setTitle("Sharding")
        .setFooter("Bot by ★ŦAEYN★#0001")
        .setDescription("TaeynBot shard 30/30");
    /////////////////////////////////////////////////////////
    let succesr = new Discord.RichEmbed()
        .setImage(client.displayAvatarURL)
        .setColor("#27bb52")
        .setTitle("Succes Restart")
        .setFooter("Bot by ★ŦAEYN★#0001")
        .setDescription("**Taeyn Bot**");

    client.user.setStatus('dnd');
    client.user.setActivity(`Vous regadez !`), { type: "WATCHING" };
    console.log(`Logged in as ${client.user.tag}`);
    console.log(`Stats:
    ╔═════════════════════════════════╗
    ║-->  Bot Name : ${client.user.username}
    ╟─────────────────────────────────╢
    ║-->  Prefix   :  .
    ╟─────────────────────────────────╢
    ║-->  Users    : ${client.users.filter(user => !user.client).size}
    ╟─────────────────────────────────╢
    ║-->  Bots     : ${client.users.filter(user => user.client).size}
    ╟─────────────────────────────────╢
    ║-->  Channels : ${client.channels.size}
    ╟─────────────────────────────────╢
    ║-->  Guilds   : ${client.guilds.size}
    ╚═════════════════════════════════╝`);
    const channel = client.channels.get("652777758354702357");
    channel.send(reboot);
    channel.send(shard1);
    channel.send(shard2);
    channel.send(shard3);
    channel.send(succesr);



};