let handler = async (m, { conn }) => {
    conn.tebakgame = conn.tebakgame ? conn.tebakgame : {}
    let id = m.chat
    if (!(id in conn.tebakgame)) throw false
    let json = conn.tebakgame[id][1]
    let ans = json.jawaban.trim()
    conn.reply(m.chat, `yahh nyerah\nJawabannya adalah *${json.jawaban}*`, conn.tebakgame[id][0])
    delete conn.tebakgame[id]
}
handler.command = /^nyerahgame$/i
handler.limit = true

module.exports = handler