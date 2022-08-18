let handler = async (m, { conn }) => {
	conn.sendFile(m.chat, 'https://yog-apikey.herokuapp.com/api/bokep?apikey=YogGanz', 'asupan.mp4', 'awas klo sampe coli dikutuk jadi batu kau', m)
}
handler.help = ['bokep']
handler.tags = ['asupan']

handler.command = /^(bokep)$/i

handler.premium = true
handler.private = true
handler.limit = 1
module.exports = handler


