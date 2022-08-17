/*let fetch = require('node-fetch')

let timeout = 180000
let poin = 50000
let handler = async (m, { conn, usedPrefix }) => {
  conn.tebakanime = conn.tebakanime ? conn.tebakanime : {}
  let id = m.chat
  if (id in conn.tebakanime) {
    conn.reply(m.chat, 'Masih ada soal belum terjawab di chat ini', conn.tebakanime[id][0])
    throw false
  }
  let src = await (await fetch('https://raw.githubusercontent.com/EkaBotWhatsapp/Data-Base-story-wa/main/DB-Tebak-Anime.json')).json()
    let json = src[Math.floor(Math.random() * src.length)]
  // if (!json.status) throw json
  let caption = `
Timeout *${(timeout / 1000).toFixed(2)} detik*
Ketik ${usedPrefix}teme untuk hint
Ketik ${usedPrefix}nyerahanime untuk menyerah
Bonus: ${poin} Money
    `.trim()
  conn.tebakanime[id] = [
    await conn.sendFile(m.chat, json.img, 'tebakgame.jpg', caption, m, false, { thumbnail: Buffer.alloc(0) }),
    json, poin,
    setTimeout(() => {
      if (conn.tebakanime[id]) conn.reply(m.chat, `Waktu habis!\nJawabannya adalah *${json.jawaban}*`, conn.tebakanime[id][0])
      delete conn.tebakanime[id]
    }, timeout)
  ]
}
handler.help = ['tebakanime (error)']
handler.tags = ['game']
handler.command = /^tebakanime/i
handler.limit = true
handler.group = true

module.exports = handler*/


let fetch = require('node-fetch')

let timeout = 120000
let poin = 1000
let tiketcoin = 1
let src
let handler = async (m, { conn, usedPrefix }) => {
  conn.tebakanime = conn.tebakanime ? conn.tebakanime : {}
  let id = m.chat
  if (id in conn.tebakanime) {
    conn.reply(m.chat, 'Masih ada soal belum terjawab di chat ini', conn.tebakanime[id][0])
    throw false
  }
    if (!src) src = await (await fetch(global.API('https://raw.githubusercontent.com', '/EkaBotWhatsapp/Data-Base-story-wa/main/DB-Tebak-Anime.json'))).json()
    let json = src[Math.floor(Math.random() * src.length)]
    if (!json) throw json
    let caption = `
Timeout *${(timeout / 1000).toFixed(2)} detik*
Ketik ${usedPrefix}teme untuk bantuan
Ketik ${usedPrefix}nyerahanime untuk menyerah
Bonus: ${poin} XP
Tiketcoin: ${tiketcoin} TiketCoin
`.trim()
  conn.tebakanime[id] = [
    await conn.sendFile(m.chat, json.img, 'tebakanime.jpg', caption, m, false, { thumbnail: Buffer.alloc(0) }),
    json, poin,
    setTimeout(() => {
      if (conn.tebakanime[id]) conn.reply(m.chat, `Waktu habis!\nJawabannya adalah *${json.jawaban}*`, conn.tebakanime[id][0])
      delete conn.tebakanime[id]
    }, timeout)
  ]
}
handler.help = ['tebakanime']
handler.tags = ['game']
handler.command = /^tebakanime/i
handler.limit = true
handler.group = true

module.exports = handler