let handler = async (m, { conn }) => {
	conn.sendFile(m.chat, 'https://api.zeeoneofc.xyz/api/asupan/mama_gina?apikey=QyF3VhyE', 'mama_gina.mp4', 'Nih jangan lupa https://ponselharian.com/93iHKL3Y', m)
}
handler.help = ['mamagina']
handler.tags = ['asupan']

handler.command = /^(mamagina)$/i

handler.limit = 1
module.exports = handler