//this runs last: it reads the web server's directory with the latest shirts, builds a hyperlink to the images, then posts a message with all the hyperlinks to a set of hardcoded channels
const Discord = require('discord.js');
const client = new Discord.Client();
const config = require("./config.json");
client.login(config.token).then(() => {
  var today=new Date();
  console.log("date:");
  var monthString=today.getMonth() + 1;
  if(monthString < 10)
  {
    monthString = '0' + monthString;
  }
  var dayString=today.getDate();
  if(dayString < 10)
  {
    dayString = '0' + dayString;
  }
  var dirString=today.getFullYear() + "-" + monthString + "-" + dayString;
  const fs=require('fs');
  var message="";
  fs.readdirSync("/var/www/streamercabin.net/shirts/" + dirString).forEach(file => {
    console.log(file);
    message+="https://streamercabin.net/shirts/"+dirString+"/"+file+"\n";
  });
  //hardcode channel IDs here
  client.channels.get("YOUR_CHANNEL_ID").send(message);
  console.log(client.channels);
  console.log(message);
  client.destroy();
});
