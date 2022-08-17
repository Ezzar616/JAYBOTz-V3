let handler = async (m, { conn }) => {
    conn.sendButtonImg(m.chat, ('https://zenzapis.xyz/randomimage/meme?apikey=1786a002f3'), 'Nih Meme Worldnya jangan lupa https://ponselharian.com/93iHKL3Y', wm, 'NEXT', '/memeworld', m)
}

handler.help = ['memeworld']
handler.tags = ['fun']
handler.command = /^(memeworld)$/i
handler.limit = 3
module.exports = handler

