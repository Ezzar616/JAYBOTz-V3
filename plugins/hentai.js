let handler = async (m, { conn }) => {
	conn.sendFile(m.chat, 'https://zenzapis.xyz/api/morensfw/hentai?apikey=1786a002f3', 'hentai.jpg', '✿𝗖𝗥𝗘𝗔𝗧𝗢𝗥➢𝗝𝗔𝗬𝗕𝗢𝗧𝘇\nnih Hentainya kak\nPremium : https://ponselharian.com/93iHKL3Y', m)
}
handler.help = ['hentai']
handler.tags = ['asupan']

handler.command = /^(hentai)$/i

handler.premium = true
handler.private = true
handler.limit = 1
module.exports = handler