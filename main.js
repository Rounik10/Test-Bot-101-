const Discord = require('discord.js');

const client = new Discord.Client();

client.once('ready', () => {
    console.log('ready!');
});

const pref = ':-'

client.on('message', message => {
     
    if(!message.content.startsWith(pref) || message.author.bot) return;

    const args = message.content.slice(pref.length).split(/ +/);
    const command = args.toString().toLowerCase().substr(1);
    
    console.log(command);
    
    if(command === "greet") {
        message.channel.send("Hello there");
    } else if(command == "roast"){
        getInsult(message)
    } else if(command == "meme") {
        message.channel.send("On it please wait!");
        getMeme(message);
    } else {
        message.channel.send("Please enter some valid command!");
    }

});

client.login('Nzg2ODM3NjgyNTA4MjY3NTIx.X9MNsg.Hn2WaI6p28RlPTVaYPixIhXKLNc');// Token

function getInsult(message) {
    var json = JSON.parse(GetJson("https://insult.mattbas.org/api/en/insult.json"));
    const insult = json.insult.toString()
    console.log(insult)
    message.channel.send(insult)
}

function getMeme(message) {  
    var json = JSON.parse(GetJson("https://meme-api.herokuapp.com/gimme"));
    message.channel.send("There you go: ", {files: [json.url.toString()]});
}

function GetJson(yourUrl) {
    var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
    var Httpreq = new XMLHttpRequest(); // a new request
    Httpreq.open("GET",yourUrl,false);
    Httpreq.send(null);
    return Httpreq.responseText;          
} 