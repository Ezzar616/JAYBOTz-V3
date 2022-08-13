let handler = async (m, { conn }) => {
	conn.sendFile(m.chat, 'https://zenzapis.xyz/api/morensfw/ero?apikey=1786a002f3', 'ero.jpg', '✿𝗖𝗥𝗘𝗔𝗧𝗢𝗥➢𝗝𝗔𝗬𝗕𝗢𝗧𝘇\nnih Eronya kak\nPremium : https://ponselharian.com/93iHKL3Y', m)
}
handler.help = ['ero']
handler.tags = ['nsfw']

handler.command = /^(ero)$/i
handler.premium = true
handler.register = true
handler.limit = 1
module.exports = handler