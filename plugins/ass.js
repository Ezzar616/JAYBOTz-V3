let handler = async (m, { conn }) => {
	conn.sendFile(m.chat, 'https://zenzapis.xyz/api/morensfw/ass?apikey=1786a002f3', 'ass.jpg', '✿𝗖𝗥𝗘𝗔𝗧𝗢𝗥➢𝗝𝗔𝗬𝗕𝗢𝗧𝘇\nnih assnya kak\nPremium : https://ponselharian.com/93iHKL3Y', m)
}
handler.help = ['ass']
handler.tags = ['nsfw']

handler.command = /^(ass)$/i

handler.premium = true
handler.limit = 1
module.exports = handler


