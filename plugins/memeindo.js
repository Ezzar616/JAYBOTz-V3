let handler = async (m, { conn }) => {
    conn.sendButtonImg(m.chat, ('https://zenzapis.xyz/randomimage/memeindo?apikey=1786a002f3'), 'Nih Meme Indonya jangan lupa https://ponselharian.com/93iHKL3Y', wm, 'NEXT', '/memeindo', m)
}

handler.help = ['memeindo']
handler.tags = ['fun']
handler.command = /^(memeindo)$/i
handler.limit = 3
module.exports = handler

