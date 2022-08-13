let fetch = require('node-fetch')

let timeout = 180000
let poin = 500
let handler = async (m, { conn, usedPrefix }) => {
    conn.tekateki1 = conn.tekateki1 ? conn.tekateki1 : {}
    let id = m.chat
    if (id in conn.tekateki1) {
        conn.reply(m.chat, 'Masih ada soal belum terjawab di chat ini', conn.tekateki1[id][0])
        throw false
    }
    let src = await (await fetch('https://raw.githubusercontent.com/EkaBotWhatsapp/Data-Base-story-wa/main/tekateki.json')).json()
    let json = src[Math.floor(Math.random() * src.length)]
    let caption = `${json.pertanyaan}

Timeout *${(timeout / 1000).toFixed(2)} detik*
Ketik ${usedPrefix}tekki1 untuk bantuan
Bonus: ${poin} XP
Tiketcoin: 1 Tiketcoin
`.trim()
    conn.tekateki1[id] = [
        await conn.reply(m.chat, caption, m),
        json, poin,
        setTimeout(() => {
            if (conn.tekateki1[id]) conn.reply(m.chat, `Waktu habis!\nJawabannya adalah *${json.jawaban}*`, conn.tekateki1[id][0])
            delete conn.tekateki1[id]
        }, timeout)
    ]
}
handler.help = ['tekateki1']
handler.tags = ['game']
handler.command = /^tekateki1/i
handler.limit = true
handler.group = true

module.exports = handler