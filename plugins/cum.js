let handler = async (m, { conn }) => {
	conn.sendFile(m.chat, 'https://api.zeeoneofc.xyz/api/nsfw/cum?apikey=QyF3VhyE', 'cum.jpg', '✿𝗖𝗥𝗘𝗔𝗧𝗢𝗥➢𝗝𝗔𝗬𝗕𝗢𝗧𝘇\nnih Cumnya kak\nPremium : https://ponselharian.com/93iHKL3Y', m)
}
handler.help = ['cum']
handler.tags = ['asupan']

handler.command = /^(cum|cume)$/i
handler.premium = true
handler.register = true
handler.private = true
handler.limit = 1
module.exports = handler


