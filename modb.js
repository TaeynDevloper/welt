const Discord = require('discord.js');
const client = new Discord.Client();
client.commands = new Discord.Collection();
const fs = require('fs');
const Canvas = require('canvas');

fs.readdir('./Commandes/', (error, f) => {
    if (error) { return console.error(error); }
    let commandes = f.filter(f => f.split('.').pop() === 'js');
    if (commandes.length <= 0) { return console.log('Aucune commande trouvée !'); }

    commandes.forEach((f) => {
        let commande = require(`./Commandes/${f}`);
        console.log(`${f} commande chargée !`);
        client.commands.set(commande.help.name, commande);
    });
});

fs.readdir('./Events/', (error, f) => {
    if (error) { return console.error(error); }
    console.log(`${f.length} events chargés`);

    f.forEach((f) => {
        let events = require(`./Events/${f}`);
        let event = f.split('.')[0];
        client.on(event, events.bind(null, client));
    });
});

// M.COUNT
client.on('ready', () => {

    let myGuild = client.guilds.get('652539238591758347');
    let memberCount = myGuild.memberCount;
    console.log(memberCount);
    let memberCountChannel = myGuild.channels.get('652539239115915277');
    memberCountChannel.setName('Members: ' + memberCount)
        .then(result => console.log(result))
        .catch(error => console.log(error))
});
client.on('guildMemberAdd', () => {

    let myGuild = client.guilds.get('652539238591758347');
    let memberCount = myGuild.memberCount;
    console.log(memberCount);
    let memberCountChannel = myGuild.channels.get('652539239115915277');
    memberCountChannel.setName('Members: ' + memberCount)
        .then(result => console.log(result))
        .catch(error => console.log(error))
});
client.on('guildMemberRemove', () => {

    let myGuild = client.guilds.get('652539238591758347');
    let memberCount = myGuild.memberCount;
    console.log(memberCount);
    let memberCountChannel = myGuild.channels.get('652539239115915277');
    memberCountChannel.setName('Members: ' + memberCount)
        .then(result => console.log(result))
        .catch(error => console.log(error))
});
///////// logs supp msg
client.on('messageDelete', async message => {
        let loggingEmbed = new Discord.RichEmbed()
            .setTitle("A New Delete Message !")
            .setColor("RANDOM")
            .setThumbnail(message.author.avatarURL)
            .addField("Delete by:", message.author.tag)
            .addField("Delete in:", message.channel)
            .addField("Deket at:", message.createdAt)
            .setTimestamp()
            .setFooter('Delete Message', 'https://cdn.discordapp.com/avatars/595363188074086402/a_9d62317f122e24020d3718fb9832a6c4.gif');

        let logChannel = message.guild.channels.find(c => c.name === "logs")
        if (!logChannel) return;

        logChannel.send(loggingEmbed);

    })
    ///// logs modif msg
client.on('guildMemberAdd', async member => {
    const channel = member.guild.channels.find(ch => ch.name === 'logs');
    if (!channel) return;


    const canvas = Canvas.createCanvas(700, 250);
    const ctx = canvas.getContext('2d');

    const background = await Canvas.loadImage('./wallpaper.jpg');
    ctx.drawImage(background, 0, 0, canvas.width, canvas.height);

    ctx.strokeStyle = '#74037b';
    ctx.strokeRect(0, 0, canvas.width, canvas.height);

    // Slightly smaller text placed above the member's display name
    ctx.font = '28px sans-serif';
    ctx.fillStyle = '#ffffff';
    ctx.fillText('Welcome to the server,', canvas.width / 2.5, canvas.height / 3.5);

    // Add an exclamation point here and below
    ctx.font = applyText(canvas, `${member.displayName}!`);
    ctx.fillStyle = '#ffffff';
    ctx.fillText(`${member.displayName}!`, canvas.width / 2.5, canvas.height / 1.8);

    ctx.beginPath();
    ctx.arc(125, 125, 100, 0, Math.PI * 2, true);
    ctx.closePath();
    ctx.clip();

    const { body: buffer } = await snekfetch.get(member.user.displayAvatarURL);
    const avatar = await Canvas.loadImage(buffer);
    ctx.drawImage(avatar, 25, 25, 200, 200);

    const attachment = new Discord.MessageAttachment(canvas.toBuffer(), 'welcome-image.png');

    channel.send(`Welcome to the server, ${member}!`, attachment);
});





client.login(process.env.TOKEN);