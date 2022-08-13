let handler = async (m, { conn }) => {
	conn.sendFile(m.chat, 'https://api.zeeoneofc.xyz/api/asupan/syifa?apikey=QyF3VhyE', 'syifa.mp4', 'Nih jangan lupa https://ponselharian.com/93iHKL3Y', m)
}
handler.help = ['syifa']
handler.tags = ['asupan']

handler.command = /^(syifa)$/i
handler.register = true
handler.limit = 1
module.exports = handler