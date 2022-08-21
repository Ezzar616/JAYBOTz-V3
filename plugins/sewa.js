const { default: makeWASocket, BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, downloadContentFromMessage, downloadHistory, proto, getMessage, generateWAMessageContent, prepareWAMessageMedia } = require('@adiwajshing/baileys')
let handler = async (m) => {
let sewa = `*────── 「 LIST SEWA 」 ──────*

*Sewa Bot Gratis selama bulan agustus ini*

Donasi? scan qr atas

Contact person Owner:
wa.me/6287853163532 (Owner)`
let message = await prepareWAMessageMedia({ image: {url: 'https://telegra.ph/file/6d9776710aa512adf8742.jpg' }}, { upload: conn.waUploadToServer })
     const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
     templateMessage: {
         hydratedTemplate: {
           imageMessage: message.imageMessage,
           hydratedContentText: sewa,
           hydratedFooterText: wm,
           hydratedButtons: [{
             urlButton: {
               displayText: '🗿',
               url: '🗿'
             }

           },
               {
             callButton: {
               displayText: 'ovo',
               phoneNumber: '+62 878-5316-3532'
             }
           },           
               {
             quickReplyButton: {
               displayText: 'Y',
               id: 'k',
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

handler.help = ['sewa']
handler.tags = ['donasi']
handler.command = /^sewa$/i

module.exports = handler