//discord.jsを使用
const { Client, Intents, MessageEmbed } = require('discord.js');
//クライアントを作成
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });  
//コマンドのPREFIXを指定
const prefix = '!'
//次回の常時稼働に必要
const http = require('http');
http.createServer(function (req, res) {
  res.write("online");
  res.end();
}).listen(8080);

//起動時に実行
client.on('ready', () => {
  console.log('起動完了！');  
});

//メッセージ送信時に実行
client.on('messageCreate', message => {
  if (message.content == 'こんにちは') {
    message.channel.send('こんにちは～')
  } else if (message.content == `${prefix}help`) {
    const embed = new MessageEmbed()
     .setTitle('help')
     .setDescription('コマンド一覧を書くといいです')
    message.channel.send({embeds: [embed]})
  }
});

//Botにログイン
client.login(process.env.token);
