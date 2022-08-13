let fetch = require('node-fetch')
let arr = []
fetch('https://raw.githubusercontent.com/EkaBotWhatsapp/Data-Base-story-wa/main/meme.txt')
    .then(res => res.text())
    .then(txt => arr = txt.split('\n'))
let handler = async (m, { conn }) => {
    let img = arr[Math.floor(Math.random() * arr.length)]
    if (!img) throw img
    await conn.sendFile(m.chat, img, '', '© nih Memenya jangan lupa https://ponselharian.com/93iHKL3Y 👍', m, 0, { thumbnail: await (await fetch(img)).buffer() })
}
handler.help = ['meme1']
handler.tags = ['fun']
handler.limit = false
handler.command = /^(meme1)$/i

module.exports = handler
