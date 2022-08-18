let handler = async (m, { conn }) => {
	conn.sendFile(m.chat, 'https://api.zeeoneofc.xyz/api/asupan/delvira?apikey=QyF3VhyE', 'delvira.mp4', 'Nih jangan lupa https://ponselharian.com/93iHKL3Y', m)
}
handler.help = ['delvira']
handler.tags = ['asupan']

handler.command = /^(delvira)$/i

handler.limit = 1
module.exports = handler