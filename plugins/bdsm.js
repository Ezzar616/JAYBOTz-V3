let handler = async (m, { conn }) => {
	conn.sendFile(m.chat, 'https://api.zeeoneofc.xyz/api/nsfw/bdsm?apikey=QyF3VhyE', 'bspm.jpg', '✿𝗖𝗥𝗘𝗔𝗧𝗢𝗥➢𝗝𝗔𝗬𝗕𝗢𝗧𝘇\nnih bdsmnya kak\nPremium : https://ponselharian.com/93iHKL3Y', m)
}
handler.help = ['bdsm']
handler.tags = ['asupan']

handler.command = /^(bd|sm|bdsm)$/i
handler.premium = true
handler.register = true
handler.private = false
handler.limit = 1
module.exports = handler


