let fs = require('fs')
const { MessageType } = require('@adiwajshing/baileys')
let handler = async (m, { conn }) => {
let kasaran = fs.readFileSync('./mp3/kaga-jelas.opus') 
conn.sendFile(m.chat, kasaran, '', '', m, true)

}

handler.customPrefix = /^(jav|kontol|puki|tolol|fuck)$/i
handler.command = new RegExp

handler.limit = 10
handler.mods = false 
handler.premium = false
handler.group = false
handler.private = false

module.exports = handler
