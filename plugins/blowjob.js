let handler = async (m, { conn }) => {
	conn.sendButtonImg(m.chat, 'https://api.zeeoneofc.xyz/api/nsfw/blowjob?apikey=QyF3VhyE', 'Nih jangan lupa https://ponselharian.com/93iHKL3Y', wm, 'NEXT', '.blowjob', m)
}
handler.help = ['blowjob']
handler.tags = ['nsfw']

handler.command = /^(blowjob|blow|job)$/i
handler.premium = true
handler.register = true
handler.limit = 1
module.exports = handler