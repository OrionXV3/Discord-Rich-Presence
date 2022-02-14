
const chalk = require('chalk');
const rpc = require("discordrpcgenerator");
const config = require(".././config.json")
module.exports = (client) => {

rpc.getRpcImage(config.applicationid, config.imagename).then(large => {

      
          let presence = new rpc.Rpc()
             .setName(config.name)
              .setUrl('https://www.twitch.tv/qQcOw')
              .setType("PLAYING")
              .setApplicationId(config.applicationid)
            
              
             .setState(config.state)
             .setDetails(config.details)
              .setAssetsLargeImage(large.id)
       
         
              .setStartTimestamp(Date.now())
              
       
                  client.user.setPresence(presence.toDiscord()).catch(console.error);
    
})

console.log(chalk.hex("#800080")("Rpc Has Been Activated"))
}




