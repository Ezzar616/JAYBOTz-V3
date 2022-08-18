let handler = async (m, { conn }) => {
	conn.sendFile(m.chat, 'https://api.zeeoneofc.xyz/api/asupan/ukhty?apikey=QyF3VhyE', 'ukhty.mp4', 'Nih jangan lupa https://ponselharian.com/93iHKL3Y', m)
}
handler.help = ['ukhty']
handler.tags = ['asupan']

handler.command = /^(ukhty)$/i

handler.limit = 1
module.exports = handler