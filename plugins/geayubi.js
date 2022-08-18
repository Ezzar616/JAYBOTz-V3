let handler = async (m, { conn }) => {
	conn.sendFile(m.chat, 'https://api.zeeoneofc.xyz/api/asupan/geayubi?apikey=QyF3VhyE', 'geayubi.mp4', 'Nih jangan lupa https://ponselharian.com/93iHKL3Y', m)
}
handler.help = ['geayubi']
handler.tags = ['asupan']

handler.command = /^(geayubi)$/i

handler.limit = 1
module.exports = handler