const Discord = require("discord.js");

module.exports.run = async(client, message, args) => {
    if (args[0] == "help") {
        let helpembxd = new Discord.RichEmbed()
            .setColor("#00ff00")
            .addField("clear Command", "Utilisation: !clear <nombre de message>")

        message.channel.send(helpembxd);
        return;
    }

    message.delete()

    if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("Tu na pas les persmissions pout utiliser cette commande!").then(msg => msg.delete(2000));;
    if (!args[0]) return message.channel.send("Please enter a number of messages to clear! `Usage: !clear <amount>`").then(msg => msg.delete(2000));
    message.channel.bulkDelete(args[0]).then(() => {
        message.channel.send(`**__Cleared ${args[0]} messages.__**`).then(msg => msg.delete(2000));
    });
    let loggingEmbed = new Discord.RichEmbed()
        .setTitle("Clear Commande effectué !")
        .setColor("RANDOM")
        .setThumbnail(message.author.avatarURL)
        .addField("Effectué par :", message.author.tag)
        .addField("Effectué dans :", message.channel)
        .addField("Effectué a :", message.createdAt)
        .setTimestamp()
        .setFooter('Clear Commande effectué !', 'https://cdn.discordapp.com/avatars/595363188074086402/a_9d62317f122e24020d3718fb9832a6c4.gif');

    let logChannel = message.guild.channels.find(c => c.name === "cmd_logs")
    if (!logChannel) return;

    logChannel.send(loggingEmbed);
}

module.exports.help = {
    name: "clear"
}