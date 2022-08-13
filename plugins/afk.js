let handler = async (m, { text }) => {
  let user = global.db.data.users[m.sender]
  user.afk = + new Date
  user.afkReason = text
  m.reply(`➤ _*Sedang AFK*_ \n➤ _*Nama: ${conn.getName(m.sender)}*_ \n➤ _*Alasan: ${text ? ': ' + text : 'tanpa alasan'}*_
`)
}
handler.help = ['afk [alasan]']
handler.tags = ['main']
handler.command = /^afk$/i
handler.limit = true

module.exports = handler
