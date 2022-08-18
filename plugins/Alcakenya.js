let handler = async (m, { conn }) => {
	conn.sendFile(m.chat, 'https://api.zeeoneofc.xyz/api/asupan/alcakenya?apikey=QyF3VhyE', 'alcakenya.mp4', 'Nih jangan lupa https://ponselharian.com/93iHKL3Y', m)
}
handler.help = ['alcakenya']
handler.tags = ['asupan']

handler.command = /^(alcakenya)$/i

handler.limit = 1
module.exports = handler