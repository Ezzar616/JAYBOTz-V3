let handler = async (m, { conn }) => {
    conn.tebakbendera = conn.tebakbendera ? conn.tebakbendera : {}
    let id = m.chat
    if (!(id in conn.tebakbendera)) throw false
    let json = conn.tebakbendera[id][1]
    conn.reply(m.chat, `yahh nyerah\nJawabannya adalah *${json.name}*`, conn.tebakbendera[id][0])
    delete conn.tebakbendera[id]
}
handler.command = /^nyerahbendera$/i
handler.limit = true

module.exports = handler