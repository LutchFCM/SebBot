const Discord = require ('discord.js')

var bot = new Discord.Client();

bot.on('ready', () => {
    console.log('Bot Ready !');
});

bot.login('process.env.TOKEN');

bot.on('message', message => {

    if (message.content === ":phrase"){
        message.reply("DEPUIS JE NE FAIS QUE DES MOULEUH LEUH LEUH LEUH LEUH LEUH ! fdp");
        console.log('phrase');
    }

    if (message.content === "Quoi ?"){
        message.channel.send("feur ! Ptn wlh jsuis drole");
        console.log('feur');
    }

    if (message.content === "quoi ?"){
        message.channel.send("feur ! Ptn wlh jsuis drole");
        console.log('feur');
    }

    if (message.content === "Quoi"){
        message.channel.send("feur ! Ptn wlh jsuis drole");
        console.log('feur');
    }

    if (message.content === "quoi"){
        message.channel.send("feur ! Ptn wlh jsuis drole");
        console.log('feur');
    }

    if (message.content === "koi ?"){
        message.channel.send("feur ! Ptn wlh jsuis drole");
        console.log('feur');
    }

    if (message.content === "koi"){
        message.channel.send("feur ! Ptn wlh jsuis drole");
        console.log('feur');
    }

    if (message.content === "Koi"){
        message.channel.send("feur ! Ptn wlh jsuis drole");
        console.log('feur');
    }

    if (message.content === "ntm"){
        message.channel.send("On avait dis pas les mamans :/");
        console.log('feur');
    }

    if (message.content === ":gay_pride_flag:"){
        message.channel.send("Gabriel ne te sens pas visé ! C'est qu'un drapeau");
        console.log('gay');
    }

    if (message.content === ":gay_pride_flag: "){
        message.channel.send("Gabriel ne te sens pas visé ! C'est qu'un drapeau");
        console.log('gay');
    }

    if (message.content === "https://discordapp.com/assets/9c252d28ca4980d65054a0258052983b.svg"){
        message.channel.send("Gabriel ne te sens pas visé ! C'est qu'un drapeau");
        console.log('gay');
    }

    if (message.content === ":chant"){
		if (!voiceChannel || voiceChannel.type !== 'voice') return msg.reply('Je te baise');
		voiceChannel.join()
    }

});
