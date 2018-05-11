const Discord = require ('discord.js')

var bot = new Discord.Client();

bot.on('ready', () => {
    console.log('Bot Ready !');
});

bot.login('process.env.BOT_TOKEN');

bot.on('message', message => {

    if (message.content === ":phrase"){
        message.reply("DEPUIS JE NE FAIS QUE DES MOULEUH LEUH LEUH LEUH LEUH LEUH ! fdp");
        console.log('phrase');
    }
	
    if (message.content === "ntm"){
        message.channel.send("On avait dis pas les mamans :/");
        console.log('feur');
    }

    if (message.content === "Quoi ?"){
        message.channel.send("feur ! wlh jsuis drole");
        console.log('feur');
    }

    if (message.content === "quoi ?"){
        message.channel.send("feur ! wlh jsuis drole");
        console.log('feur');
    }

    if (message.content === "Quoi"){
        message.channel.send("feur ! wlh jsuis drole");
        console.log('feur');
    }

    if (message.content === "quoi"){
        message.channel.send("feur ! wlh jsuis drole");
        console.log('feur');
    }

    if (message.content === "koi ?"){
        message.channel.send("feur ! wlh jsuis drole");
        console.log('feur');
    }

    if (message.content === "koi"){
        message.channel.send("feur ! wlh jsuis drole");
        console.log('feur');
    }

    if (message.content === "Koi"){
        message.channel.send("feur ! wlh jsuis drole");
        console.log('feur');
    }
	
    if (message.content === ":help")
	message.channel.send(Utilité du plugin: Aucune à part humilier Veltdog"
	console.log('help')
    }

});
