let handler = async (m, { conn }) => {
    conn.sendButtonImg(m.chat, ('https://zenzapis.xyz/randomimage/onecak?apikey=1786a002f3'), 'Nih Meme Onecaknya jangan lupa https://ponselharian.com/93iHKL3Y', wm, 'NEXT', '/memeonecak', m)
}

handler.help = ['memeonecak']
handler.tags = ['fun']
handler.command = /^(memeonecak)$/i
handler.limit = 3
module.exports = handler

