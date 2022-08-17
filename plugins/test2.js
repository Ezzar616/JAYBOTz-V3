
let handler = async(m, { conn, text, usedPrefix }) => {
let [number, pesan] = text.split `|`

    if (!number) return conn.reply(m.chat, 'Silahkan masukan nomor yang akan dikirim', m)
    if (!pesan) return conn.reply(m.chat, 'Silahkan masukan pesannya/Bugnya', m)
    if (text > 99999999999999) return conn.reply(m.chat, 'Teks Kepanjangan!', m)

    let korban = `${number}`
    let spam1 = `*「 SUKSES 」*\n\nKepada : wa.me/${korban}\nPesan : ${pesan}\n\n*${global.wm}*`

    conn.reply(korban + '@s.whatsapp.net', spam1, m)

    let logs = `[!] Berhasil mengirim pesan wa ke nomor ${korban}`
    conn.reply(m.chat, logs, m)
}
handler.command = /^(test2)$/i
handler.rowner = false
handler.limit = true
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.limit = false

module.exports = handler
