let handler = async (m, { conn }) => {
	conn.sendButtonImg(m.chat, 'https://api.zeeoneofc.xyz/api/nsfw/cuckold?apikey=QyF3VhyE', 'blowjob.jpg', 'Nih jangan lupa https://ponselharian.com/93iHKL3Y', wm, 'NEXT', '.cuckold', m)
}
handler.help = ['cuckold']
handler.tags = ['nsfw']

handler.command = /^(cuckold)$/i
handler.premium = true
handler.register = true
handler.limit = 1
module.exports = handler