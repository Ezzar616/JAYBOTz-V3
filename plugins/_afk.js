module.exports = {
  before(m) {
    let user = global.db.data.users[m.sender]
    if (user.afk > -1) {
      m.reply(`
_*Kamu berhenti AFK*_ \n➤ _*Nama: ${conn.getName(m.sender)}*_ \n➤ _*Alasan: ${user.afkReason ? '' + user.afkReason : 'tanpa alasan'}*_
➤ _*Sejak: ${clockString(new Date - user.afk)}*_
`.trim())
      user.afk = -1
      user.afkReason = ''
    }
    let jids = [...new Set([...(m.mentionedJid || []), ...(m.quoted ? [m.quoted.sender] : [])])]
    for (let jid of jids) {
      let user = global.db.data.users[jid]
      if (!user) continue
      let afkTime = user.afk
      if (!afkTime || afkTime < 0) continue
      let reason = user.afkReason || ''
      m.reply(`
_*Jangan Tag, Dia sedang AFK*_ \n➤ _*Sejak: ${clockString(new Date - afkTime)}*_
➤ _*Alasan: ${reason ? 'dengan alasan ' + reason : 'tanpa alasan'}*_
`.trim())
    }
    return true
  }
}

function clockString(ms) {
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')
}