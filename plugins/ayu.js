let handler = async (m, { conn }) => {
	conn.sendFile(m.chat, 'https://api.zeeoneofc.xyz/api/asupan/ayu?apikey=QyF3VhyE', 'ayu.mp4', 'Nih jangan lupa https://ponselharian.com/93iHKL3Y', m)
}
handler.help = ['ayu']
handler.tags = ['asupan']

handler.command = /^(ayu)$/i
handler.register = true
handler.limit = 1
module.exports = handler