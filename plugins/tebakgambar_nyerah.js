let handler = async (m, { conn }) => {
    conn.tebakgambar = conn.tebakgambar ? conn.tebakgambar : {}
    let id = m.chat
    if (!(id in conn.tebakgambar)) throw false
    let json = conn.tebakgambar[id][1]
    let jawaban = json.jawaban.trim()
    conn.reply(m.chat, `yahh nyerah\nJawabannya adalah *${json.jawaban}*`, conn.tebakgambar[id][0])
    delete conn.tebakgambar[id]
}
handler.command = /^nyerahgambar$/i
handler.limit = true

module.exports = handler