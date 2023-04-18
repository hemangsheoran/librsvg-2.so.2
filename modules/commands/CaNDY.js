module.exports.config = {
    name: "owner",
    version: "1.0.0",
    hasPermssion: 0,
    credits: "... - Long LTD",
    description: "War In Chatbox",
    commandCategory: "Noprefix",
    usages: "noprefix",
    cooldowns: 5,
    dependencies: {
        "fs-extra": "",
        "axios": ""
    }
}

module.exports.run = async function({ api, args, Users, event}) {
 var mention = Object.keys(event.mentions)[0];
    
 let name =  event.mentions[mention];
    var arraytag = [];
        arraytag.push({id: mention});
    var a = function (a) { api.sendMessage(a, event.threadID); }
a("🔰𝙊𝙒𝙉𝙀𝙍 𝙄𝙉𝙁𝙊🔰\n\n\(人◕‿◕) 𝙃𝙀𝙈𝘼𝙉𝙂 𝙎𝙃𝙀𝙊𝙍𝘼𝙉 (•◡•)\n\n𝐀𝐠𝐞 : 21\n\n𝐑𝐞𝐥𝐚𝐭𝐢𝐨𝐧𝐬𝐡𝐢𝐩 𝐖𝐢𝐭𝐡 : 𝕂𝕆𝕀 ℕ𝕀\n\n𝐅𝐫𝐨𝐦 : 𝕌𝕋𝕋𝔸ℝ ℙℝ𝔸𝔻𝔼𝕊ℍ\n\n𝐒𝐭𝐮𝐝𝐲 : 𝗕 𝗧𝗲𝗰𝗵 IN THE FIELD OF 𝐂𝐨𝐦𝐩𝐮𝐭𝐞𝐫 𝐏𝐫𝐨𝐠𝐫𝐚𝐦𝐦𝐢𝐧𝐠\n\n𝐅𝐚𝐜𝐞𝐛𝐨𝐨𝐤 𝐋𝐢𝐧𝐤 : https://www.facebook.com/hemang.sheoran.16\n\n𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐂𝐨𝐧𝐭𝐚𝐜𝐭 : SECRET H BOSS \n\n нαм внι нση gαү вεωαғα кαнεη кιsι кι zιη∂αgι мα!❤🙂♣️");


}