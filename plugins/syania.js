let handler = async (m, { conn }) => {
	conn.sendFile(m.chat, 'https://api.zeeoneofc.xyz/api/asupan/syania?apikey=QyF3VhyE', 'syania.mp4', 'Nih jangan lupa https://ponselharian.com/93iHKL3Y', m)
}
handler.help = ['syania']
handler.tags = ['asupan']

handler.command = /^(syania)$/i
handler.register = true
handler.limit = 1
module.exports = handler