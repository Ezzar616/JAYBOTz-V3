let handler = async (m, { conn }) => {
	conn.sendFile(m.chat, 'https://api.zeeoneofc.xyz/api/asupan/asupan?apikey=QyF3VhyE', 'asupan.mp4', 'nih asupannya kak jangan lupa https://ponselharian.com/93iHKL3Y', m)
}
handler.help = ['asupan']
handler.tags = ['asupan']

handler.command = /^(asupan)$/i
handler.premium = false
handler.limit = 5
module.exports = handler
