let handler = async (m, { conn }) => {
    conn.tebakkata = conn.tebakkata ? conn.tebakkata : {}
    let id = m.chat
    if (!(id in conn.tebakkata)) throw false
    let json = conn.tebakkata[id][1]
    let jawaban = json.jawaban.trim()
    conn.reply(m.chat, `yahh nyerah\nJawabannya adalah *${json.jawaban}*`, conn.tebakkata[id][0])
    delete conn.tebakkata[id]
}
handler.command = /^nyerahkata$/i
handler.limit = true
module.exports = handler
