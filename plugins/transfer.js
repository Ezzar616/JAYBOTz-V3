
let handler = async (m, { conn, args, usedPrefix, owner }) => {
    if (args.length < 3) {
        return conn.reply(m.chat, `Gunakan format ${usedPrefix}transfer <type> <jumlah> <@tag>\ncontoh penggunaan: *${usedPrefix}transfer money 100 @tag*`.trim(), m)
    } else try {
        let type = (args[0] || '').toLowerCase()
        let count = args[1] && args[1].length > 0 ? Math.min(9999999999999999, Math.max(parseInt(args[1]), 1)) : Math.min(1)
        let who = m.mentionedJid ? m.mentionedJid[0] : (args[2].replace(/[@ .+-]/g, '').replace(' ', '') + '@s.whatsapp.net')
        if(!m.mentionedJid || !args[2]) throw 'Tag salah satu, atau ketik Nomernya!!'
        let users = global.db.data.users
        switch (type) {
            case 'money':
                if (global.db.data.users[m.sender].money >= count * 1) {
                    try {
                        global.db.data.users[m.sender].money -= count * 1
                        global.db.data.users[who].money += count * 1
                        conn.reply(m.chat, `Berhasil mentransfer money sebesar ${count}`.trim(), m)
                    } catch (e) {
                        global.db.data.users[m.sender].money += count * 1
                        m.reply('Gagal Menstransfer')
                        console.log(e)
                        if (owner) {
                            for (let jid of global.owner.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').filter(v => v != conn.user.jid)) {
                                conn.reply(jid, 'Transfer.js error\nNo: *' + m.sender.split`@`[0] + '*\nCommand: *' + m.text + '*\n\n*' + e + '*', m)
                            }
                        }
                    }
                } else conn.reply(m.chat, `Uang kamu tidak mencukupi untuk mentransfer Money sebesar ${count}`.trim(), m)
                break
             case 'pet':
                if (global.db.data.users[m.sender].pet >= count * 1) {
                    try {
                        global.db.data.users[m.sender].pet -= count * 1
                        global.db.data.users[who].pet += count * 1
                        conn.reply(m.chat, `Berhasil mentransfer pet sebesar ${count}`.trim(), m)
                    } catch (e) {
                        global.db.data.users[m.sender].pet += count * 1
                        m.reply('Gagal Menstransfer')
                        console.log(e)
                        if (owner) {
                            for (let jid of global.owner.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').filter(v => v != conn.user.jid)) {
                                conn.reply(jid, 'Transfer.js error\nNo: *' + m.sender.split`@`[0] + '*\nCommand: *' + m.text + '*\n\n*' + e + '*', m)
                             }
                        }
                    }
                } else conn.reply(m.chat, `Pet kamu tidak mencukupi untuk mentransfer Pet sebesar ${count}`.trim(), m)
                break
             case 'potion':
                if (global.db.data.users[m.sender].potion >= count * 1) {
                    try {
                        global.db.data.users[m.sender].potion -= count * 1
                        global.db.data.users[who].potion += count * 1
                        conn.reply(m.chat, `Berhasil mentransfer Potion sebesar ${count}`.trim(), m)
                    } catch (e) {
                        global.db.data.users[m.sender].pet += count * 1
                        m.reply('Gagal Menstransfer')
                        console.log(e)
                        if (owner) {
                            for (let jid of global.owner.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').filter(v => v != conn.user.jid)) {
                                conn.reply(jid, 'Transfer.js error\nNo: *' + m.sender.split`@`[0] + '*\nCommand: *' + m.text + '*\n\n*' + e + '*', m)
                             }
                        }
                    }
                } else conn.reply(m.chat, `Potion kamu tidak mencukupi untuk mentransfer Potion sebesar ${count}`.trim(), m)
                break
             case 'exp':
                if (global.db.data.users[m.sender].exp >= count * 1) {
                    try {
                        global.db.data.users[m.sender].exp -= count * 1
                        global.db.data.users[who].exp += count * 1
                        conn.reply(m.chat, `Berhasil mentransfer exp sebesar ${count}`.trim(), m)
                    } catch (e) {
                        global.db.data.users[m.sender].exp += count * 1
                        m.reply('Gagal Menstransfer')
                        console.log(e)
                        if (owner) {
                            for (let jid of global.owner.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').filter(v => v != conn.user.jid)) {
                                conn.reply(jid, 'Transfer.js error\nNo: *' + m.sender.split`@`[0] + '*\nCommand: *' + m.text + '*\n\n*' + e + '*', m)
                            }
                        }
                    }
                } else conn.reply(m.chat, `Exp kamu tidak mencukupi untuk mentransfer Exp sebesar ${count}`.trim(), m)
                break
             case 'armor':
                if (global.db.data.users[m.sender].armor >= count * 1) {
                    try {
                        global.db.data.users[m.sender].armor -= count * 1
                        global.db.data.users[who].armor += count * 1
                        conn.reply(m.chat, `Berhasil mentransfer armor sebesar ${count}`.trim(), m)
                    } catch (e) {
                        global.db.data.users[m.sender].armor += count * 1
                        m.reply('Gagal Menstransfer')
                        console.log(e)
                        if (owner) {
                            for (let jid of global.owner.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').filter(v => v != conn.user.jid)) {
                                conn.reply(jid, 'Transfer.js error\nNo: *' + m.sender.split`@`[0] + '*\nCommand: *' + m.text + '*\n\n*' + e + '*', m)
                             }
                        }
                    }
                } else conn.reply(m.chat, `Armor kamu tidak mencukupi untuk mentransfer Armor sebesar ${count}`.trim(), m)
                break
             case 'sword':
                if (global.db.data.users[m.sender].sword >= count * 1) {
                    try {
                        global.db.data.users[m.sender].sword -= count * 1
                        global.db.data.users[who].sword += count * 1
                        conn.reply(m.chat, `Berhasil mentransfer sword sebesar ${count}`.trim(), m)
                    } catch (e) {
                        global.db.data.users[m.sender].sword += count * 1
                        m.reply('Gagal Menstransfer')
                        console.log(e)
                        if (owner) {
                            for (let jid of global.owner.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').filter(v => v != conn.user.jid)) {
                                conn.reply(jid, 'Transfer.js error\nNo: *' + m.sender.split`@`[0] + '*\nCommand: *' + m.text + '*\n\n*' + e + '*', m)
                             }
                        }
                    }
                } else conn.reply(m.chat, `Sword kamu tidak mencukupi untuk mentransfer Sword sebesar ${count}`.trim(), m)
                break
             case 'fishingrod':
                if (global.db.data.users[m.sender].fishingrod >= count * 1) {
                    try {
                        global.db.data.users[m.sender].fishingrod -= count * 1
                        global.db.data.users[who].fishingrod += count * 1
                        conn.reply(m.chat, `Berhasil mentransfer fishingrod sebesar ${count}`.trim(), m)
                    } catch (e) {
                        global.db.data.users[m.sender].pet += count * 1
                        m.reply('Gagal Menstransfer')
                        console.log(e)
                        if (owner) {
                            for (let jid of global.owner.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').filter(v => v != conn.user.jid)) {
                                conn.reply(jid, 'Transfer.js error\nNo: *' + m.sender.split`@`[0] + '*\nCommand: *' + m.text + '*\n\n*' + e + '*', m)
                             }
                        }
                    }
                } else conn.reply(m.chat, `Fishingrod kamu tidak mencukupi untuk mentransfer Fishingrod sebesar ${count}`.trim(), m)
                break
             case 'diamond':

                if (global.db.data.users[m.sender].diamond >= count * 1) {

                    try {

                        global.db.data.users[m.sender].diamond -= count * 1

                        global.db.data.users[who].diamond += count * 1

                        conn.reply(m.chat, `Berhasil mentransfer diamond sebesar ${count}`.trim(), m)

                    } catch (e) {

                        global.db.data.users[m.sender].diamond += count * 1

                        m.reply('Gagal Menstransfer diamond')

                        console.log(e)

                        if (owner) {

                            for (let jid of global.owner.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').filter(v => v != conn.user.jid)) {

                                conn.reply(jid, 'Transfer.js error\nNo: *' + m.sender.split`@`[0] + '*\nCommand: *' + m.text + '*\n\n*' + e + '*', m)

                            }

                        }

                    }

                } else conn.reply(m.chat, `diamond kamu tidak mencukupi untuk mentransfer Diamond sebesar ${count}`.trim(), m)

                break
             case 'pickaxe':

                if (global.db.data.users[m.sender].pickaxe >= count * 1) {

                    try {

                        global.db.data.users[m.sender].pickaxe -= count * 1

                        global.db.data.users[who].pickaxe += count * 1

                        conn.reply(m.chat, `Berhasil mentransfer pickaxe sebesar ${count}`.trim(), m)

                    } catch (e) {

                        global.db.data.users[m.sender].pickaxe += count * 1

                        m.reply('Gagal Menstransfer diamond')

                        console.log(e)

                        if (owner) {

                            for (let jid of global.owner.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').filter(v => v != conn.user.jid)) {

                                conn.reply(jid, 'Transfer.js error\nNo: *' + m.sender.split`@`[0] + '*\nCommand: *' + m.text + '*\n\n*' + e + '*', m)

                            }

                        }

                    }

                } else conn.reply(m.chat, `Pickaxe kamu tidak mencukupi untuk mentransfer Pickaxe sebesar ${count}`.trim(), m)

                break
             case 'limit':
                if (global.db.data.users[m.sender].limit >= count * 1) {
                    try {
                        global.db.data.users[m.sender].limit -= count * 1
                        global.db.data.users[who].limit += count * 1
                        conn.reply(m.chat, `Berhasil mentransfer limit sebesar ${count}`.trim(), m)
                       // conn.reply(who, `Selamat mendapatkan limit sebesar ${count}\nFrom: *Owner*`.trim(), m)
                    } catch (e) {
                        global.db.data.users[m.sender].limit += count * 1
                        m.reply('Gagal Menstransfer')
                        console.log(e)
                        if (owner) {
                            for (let jid of global.owner.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').filter(v => v != conn.user.jid)) {
                                conn.reply(jid, 'Transfer.js error\nNo: *' + m.sender.split`@`[0] + '*\nCommand: *' + m.text + '*\n\n*' + e + '*', m)
                            }
                        }
                    }
                } else conn.reply(m.chat, `Limit kamu tidak mencukupi untuk mentransfer Limit sebesar ${count}`.trim(), m)
                break
            default:
                return conn.reply(m.chat, `Gunakan format ${usedPrefix}transfer <type> <jumlah> <@tag>\ncontoh penggunaan: *${usedPrefix}transfer money 100 @tag*\n\n*List yang bisa di transfer*\nmoney\npet\npotion\nexp\narmor\nsword\nlimit`.trim(), m)
        }
    } catch (e) {
        conn.reply(m.chat, `Format yang anda gunakan salah\n\nGunakan format ${usedPrefix}transfer <type> <jumlah> <@tag>\ncontoh penggunaan: *${usedPrefix}transfer money 100 @tag*`.trim(), m)
        console.log(e)
        if (owner) {
            for (let jid of global.owner.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').filter(v => v != conn.user.jid)) {
                conn.reply(jid, 'Transfer.js error\nNo: *' + m.sender.split`@`[0] + '*\nCommand: *' + m.text + '*\n\n*' + e + '*', m)
            }
        }
    }
}
    
handler.help = ['transfer']
handler.tags = ['rpg']
handler.command = /^(transfer)$/i
handler.owner = false
handler.mods = false
handler.limit = true
handler.group = true
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.money = 0

module.exports = handler