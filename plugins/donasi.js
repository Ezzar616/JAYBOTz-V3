const { default: makeWASocket, BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, downloadContentFromMessage, downloadHistory, proto, getMessage, generateWAMessageContent, prepareWAMessageMedia } = require('@adiwajshing/baileys')
let handler = async (m) => {
let sewa = `*────── 「 LIST SEWA 」 ──────*

Hai 👋 𝘆𝘂𝗸 𝗯𝗮𝗻𝘁𝘂 𝗯𝗼𝘁 𝗱𝗲𝗻𝗴𝗮𝗻 𝗱𝗼𝗻𝗮𝘀𝗶
┏━━━•❅•°•❈〔 𝗱𝗼𝗻𝗮𝘀𝗶 〕
┣➲ Scan Barcod Qrisnya diatas🤗
┗━━━•❅•°•❈
Contact person Owner:
wa.me/6285162778904 (Owner)`
let message = await prepareWAMessageMedia({ image: {url: 'https://f.top4top.io/p_2410vt78j1.jpg' }}, { upload: conn.waUploadToServer })
     const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
     templateMessage: {
         hydratedTemplate: {
           imageMessage: message.imageMessage,
           hydratedContentText: sewa,
           hydratedFooterText: wm,
           hydratedButtons: [{
             urlButton: {
               displayText: '🏧 Group Bot',
               url: 'https://chat.whatsapp.com/GRigRq6LkoMDR7HOwkQAIO'
             }

           },
               {
             callButton: {
               displayText: 'Dana',
               phoneNumber: '+62 851-6277-8904'
             }
           },           
               {
             quickReplyButton: {
               displayText: '🧒 Owner',
               id: '.owner',
             }

           }]
         }
       }
     }), { userJid: m.sender, quoted: m });
    return await conn.relayMessage(
         m.chat,
         template.message,
         { messageId: template.key.id }
     )
}

handler.help = ['donasi']
handler.tags = ['donasi']
handler.command = /^donasi$/i

module.exports = handler