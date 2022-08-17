let handler = async (m) => {
    let who
    if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.sender
    else who = m.sender
    if (typeof db.data.users[who] == 'undefined') throw 'Pengguna tidak ada didalam data base'
    m.reply(`${global.db.data.users[who].level} Your Level\n${global.db.data.users[who].money} Your Money\n${global.db.data.users[who].bank} Your Bank\n${global.db.data.users[who].limit} Your Limit\n${global.db.data.users[who].exp} Your Exp`)
}
handler.help = ['dompet [@user]']
handler.tags = ['xp']
handler.command = /^(dompet|duit)$/i
module.exports = handler