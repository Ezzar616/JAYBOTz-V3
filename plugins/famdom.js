let handler = async (m, { conn }) => {
	conn.sendButtonImg(m.chat, 'https://zenzapis.xyz/api/morensfw/femdom?apikey=1786a002f3', 'Nih jangan lupa https://ponselharian.com/93iHKL3Y', wm, 'NEXT', '.femdom', m)
}
handler.help = ['femdom']
handler.tags = ['nsfw']

handler.command = /^(femdom)$/i
handler.premium = true
handler.register = true
handler.limit = 1
module.exports = handler