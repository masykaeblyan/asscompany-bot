const Discord = require('discord.js')  
const client = new Discord.Client()  

client.on('ready', () =>{ 
    client.generateInvite("ADMINISTRATOR").then(invite => console.log(`Ссылка на добавление ${invite}`))
    console.log(`Привет! ${client.user.tag} запустился!`) 
})

client.on('message', message =>{ 
    if (message.author.bot) return;  
    if (message.content == '!профиль') { 
    let embed = new Discord.MessageEmbed() 
    .setTitle(message.author.username) 
    let status = ''
    switch (message.author.presence.status) { 
        case 'online':
            status = 'онлайн'; break; 
            case 'idle':
                status = ':orange_circle:нет на месте'; break;
                case 'offline':
                    status = 'нет в сети'; break;
                    case 'dnd':
                        status = ':red_circle:не беспокоить'; break;
    }
    embed.setDescription(`**Ваш дискорд айди: ${message.author.id}
    Ваш статус: ${status}
    Дата создания аккаунта: ${message.author.createdAt.toLocaleDateString()}
    Дата входа на сервер: ${message.member.joinedAt.toLocaleDateString()}
    **`) 
    .setColor('RANDOM') 
    .setThumbnail(message.author.avatarURL()) 
    message.channel.send(embed)   
    }
})

client.on('messageDelete', message =>{ 
    let embed = new Discord.MessageEmbed()
    .setTitle('Было удалено сообщение!')
    .setColor('RANDOM')
    .addField(`Удалённое сообщение:`, message.content, true)
    .addField("Автор:",`${message.author.tag} (${message.author})`,true)
    .addField("Канал:", `${message.channel}`, false)
    .setFooter(' - ',`${message.author.avatarURL()}`)
    .setTimestamp(message.createdAt);
  client.channels.cache.get("898957928453779487").send(embed); 
})

client.on('guildMemberAdd', member =>{ 
    .setThumbnail(member.user.avatarURL())
    .setTitle(`Привет, ${member.user.username}!`)
    .setDescription(`**Ты попал на мой сервер!
    Ты наш \`${client.guilds.get("АЙДИ СЕРВЕРА").memberCount}\` участник! **`) 
    .setFooter('Будь всегда на позитиве :3')
    
  
    .setColor('RANDOM')
    member.send(embed); 

    let embed2 = new Discord.MessageEmbed()
    .setThumbnail(member.user.avatarURL())
    .setTitle(`Пользователь вошел на сервер`)
    .addField('Пользователь:', member.user)
    .setColor('RANDOM')
    member.send(embed);
    client.channels.cache.get('898957928453779487').send(embed2) 
})

client.on('guildMemberRemove', member => { 
    let embed = new Discord.MessageEmbed()
    .setThumbnail(member.user.avatarURL())
    .setTitle(`Пользователь покинул сервер`)
    .addField('Пользователь:', member.user)
    .setColor('RANDOM')
    member.send(embed);
    client.channels.cache.get('898957928453779487').send(embed) 
  })

async function change() {
    let members = client.guilds.cache.get("898951516998758404").memberCount 
    client.channels.cache.get("898951516998758400").setName(`На сервере: ${members}`); 

var interval = setInterval(function () { change(); }, 10000  ); 
client.login(process.env.BOT_TOKEN);

