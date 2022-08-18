let handler = async (m, { conn }) => {
	conn.sendFile(m.chat, 'https://api.zeeoneofc.xyz/api/asupan/yana?apikey=QyF3VhyE', 'yana.mp4', 'Nih jangan lupa https://ponselharian.com/93iHKL3Y', m)
}
handler.help = ['yana']
handler.tags = ['asupan']

handler.command = /^(yana)$/i
handler.limit = 1
module.exports = handler