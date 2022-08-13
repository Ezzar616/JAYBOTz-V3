let handler = async (m, { conn }) => {
	conn.sendFile(m.chat, 'https://api.zeeoneofc.xyz/api/asupan/chika?apikey=QyF3VhyE', 'chika.mp4', 'Nih jangan lupa https://ponselharian.com/93iHKL3Y', m)
}
handler.help = ['chika']
handler.tags = ['asupan']

handler.command = /^(chika)$/i
handler.register = true
handler.limit = 1
module.exports = handler