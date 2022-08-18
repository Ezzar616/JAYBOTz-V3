let handler = async (m, { conn }) => {
	conn.sendFile(m.chat, 'https://api.zeeoneofc.xyz/api/asupan/rikagusriani?apikey=QyF3VhyE', 'rikagusriani.mp4', 'Nih jangan lupa https://ponselharian.com/93iHKL3Y', m)
}
handler.help = ['rikagusriani']
handler.tags = ['asupan']

handler.command = /^(rikagusriani)$/i

handler.limit = 1
module.exports = handler