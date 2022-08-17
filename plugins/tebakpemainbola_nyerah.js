let handler = async (m, { conn }) => {
    conn.tebakpemainbola = conn.tebakpemainbola ? conn.tebakpemainbola : {}
    let id = m.chat
    if (!(id in conn.tebakpemainbola)) throw false
    let json = conn.tebakpemainbola[id][1]
    let ans = json.jawaban.trim()
    conn.reply(m.chat, `yahh nyerah\nJawabannya adalah *${json.jawaban}*`, conn.tebakpemainbola[id][0])
    delete conn.tebakpemainbola[id]
}
handler.command = /^nyerahbola$/i
handler.limit = true

module.exports = handler