let fetch = require('node-fetch')
let arr = []
fetch('https://raw.githubusercontent.com/EkaBotWhatsapp/Data-Base-story-wa/main/Story-Anime.txt')
    .then(res => res.text())
    .then(txt => arr = txt.split('\n'))
let handler = async (m, { conn }) => {
    let img = arr[Math.floor(Math.random() * arr.length)]
    if (!img) throw img
    await conn.sendFile(m.chat, img, '', '© nih Storynya jangan lupa https://ponselharian.com/93iHKL3Y 👍', m, 0, { thumbnail: await (await fetch(img)).buffer() })
}
handler.help = ['storyanime']
handler.tags = ['asupan']
handler.limit = 0
handler.command = /^(storyanime)$/i

module.exports = handler
