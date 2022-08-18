let handler = async (m, { conn }) => {
	conn.sendFile(m.chat, 'https://api.zeeoneofc.xyz/api/asupan/viona?apikey=QyF3VhyE', 'viona.mp4', 'Nih jangan lupa https://ponselharian.com/93iHKL3Y', m)
}
handler.help = ['viona']
handler.tags = ['asupan']

handler.command = /^(viona)$/i

handler.limit = 1
module.exports = handler