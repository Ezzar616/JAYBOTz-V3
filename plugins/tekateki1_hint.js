let handler = async (m, { conn }) => {
    conn.tekateki1 = conn.tekateki1 ? conn.tekateki1 : {}
    let id = m.chat
    if (!(id in conn.tekateki1)) throw false
    let json = conn.tekateki1[id][1]
    let ans = json.jawaban.trim()
    let clue = ans.replace(/[AIUEOaiueo]/g, '_')
    conn.reply(m.chat, '```' + clue + '```\nBalas soalnya, bukan pesan ini', conn.tekateki1[id][0])
}
handler.command = /^tekki1$/i
handler.limit = true
module.exports = handler