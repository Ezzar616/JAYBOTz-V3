let handler = async (m, { conn }) => {
    conn.tebakanime = conn.tebakanime ? conn.tebakanime : {}
    let id = m.chat
    if (!(id in conn.tebakanime)) throw false
    let json = conn.tebakanime[id][1]
    let ans = json.jawaban.trim()
    conn.reply(m.chat, `yahh nyerah\nJawabannya adalah *${json.jawaban}*`, conn.tebakanime[id][0])
    delete conn.tebakanime[id]
}
handler.command = /^nyerahanime$/i
handler.limit = true

module.exports = handler