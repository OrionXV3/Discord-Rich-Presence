const express = require('express') 

const app = express();

const port = 3000

app.get('/', (req, res) => res.send('Its Work!!!'))


const chalk = require('chalk')
console.log("Wait...")
const discord = require("discord.js-selfbot-v11")
const stevedore = require("fs")

const client = new discord.Client()




app.listen(port, () =>
console.log(`Listening To http://localhost:${port}`)
);


const prefix = "!?"

const config = require("./config.json")

const traits = stevedore.readdirSync("./traits/")
traits.forEach(file => {
  const traitname = file.split(".")[0]
  const event = require(`./traits/${file}`);
  client.on(traitname, event.bind(null,  client));
})
client.on("ready", () => {
  console.log(chalk.hex("#800080")(`${client.user.tag} has started, with 
  ${client.users.size} users, in 
  ${client.channels.size} channels of 
  ${client.guilds.size} servers.`));
});



client.on("message", (message) => {

  
  
if(message.content == "!up time?") {
let totalSeconds = (client.uptime / 1000);
let days = Math.floor(totalSeconds / 86400);
totalSeconds %= 86400;
let hours = Math.floor(totalSeconds / 3600);
totalSeconds %= 3600;
let minutes = Math.floor(totalSeconds / 60);
let seconds = Math.floor(totalSeconds % 60);
  let uptime = `**${client.user.tag} has online for ${days} days, ${hours} hours, ${minutes} minutes and ${seconds} seconds**`;
  


  message.channel.send(uptime)
}
})



client.login(process.env.Token);
             //put your token in env