let handler = async (m) => {
    let who
    if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.sender
    else who = m.sender
    if (typeof db.data.users[who] == 'undefined') throw 'Pengguna tidak ada didalam data base'
    m.reply(`Potion kamu Tersisa : ${global.db.data.users[who].potion}`)
}
handler.help = ['cekpotion [@user]']
handler.tags = ['xp']
handler.command = /^(cekpotion)$/i
module.exports = handler