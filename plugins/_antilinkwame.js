let handler = m => m

let linkRegex = /wa.me\/([0-9A-Za-z]{20,24})/i
handler.before = async function (m, { user, isBotAdmin, isAdmin }) {
  if ((m.isBaileys && m.fromMe) || m.fromMe || !m.isGroup) return true
  let chat = global.db.data.chats[m.chat]
  let isGroupLink = linkRegex.exec(m.text)

  if (chat.antiLinkwame && isGroupLink) {
    await m.reply(`*「 ANTI LINK WA.ME 」*\n\nDetected *${await conn.getName(m.sender)}* you have sent the WA.ME link!\n\nSorry you will be kicked from this group byee!`)
    if (isAdmin) return m.reply('*wah anjir , situ admin gabisa dikik 😢. hehe..*')
    if (!isBotAdmin) return m.reply('*Bot nya bukan admin, mana bisa ngekik 😐*')
    let linkGC = ('https://wa.me/' + await conn.antilinkwame(m.chat))
    let isLinkconnGc = new RegExp(linkGC, 'i')
    let isgclink = isLinkconnGc.test(m.text)
    if (isgclink) return m.reply('*「 ANTI LINK WA.ME 」*\n\nItu Dilarang❗, Maaf kamu akan saya kik.\nKarena kirim Link👍')
    await conn.groupParticipantsUpdate(m.chat, [m.sender], "remove")
  }
  return true
}

module.exports = handler


