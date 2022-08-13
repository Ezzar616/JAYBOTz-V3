let handler = async (m, { conn }) => {
	conn.sendFile(m.chat, 'https://api.zeeoneofc.xyz/api/asupan/bunga?apikey=QyF3VhyE', 'bunga.mp4', 'Nih jangan lupa https://ponselharian.com/93iHKL3Y', m)
}
handler.help = ['bunga']
handler.tags = ['asupan']

handler.command = /^(bunga)$/i
handler.register = true
handler.limit = 1
module.exports = handler