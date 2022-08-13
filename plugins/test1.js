let handler = async (m, { conn, text }) => {
  let monsters = [
    { area: 1, name: "Bandar Ganja" },
    { area: 1, name: "Bandar Sabu" },
    { area: 1, name: "Bandar ekstasi" },
    { area: 2, name: "Jaga Tokoh" },
    { area: 2, name: "Jualan Sepatu" },
    { area: 2, name: "Jualan Ginjal" },
    { area: 3, name: "Jualan Bayi" },
    { area: 3, name: "Jual Istri" },
    { area: 3, name: "Jual Bokin" },
    { area: 4, name: "Jual Pacar" },
    { area: 4, name: "Pemadam Kebakaran" },
    { area: 4, name: "Polisi" },
    { area: 5, name: "Pembunuh Bayaran" },
    { area: 5, name: "Polisi Lalu lintas" },
    { area: 5, name: "Developer" },
    { area: 6, name: "IT" },
    { area: 6, name: "Ngemis" },
    { area: 6, name: "Pencoli" },
    { area: 7, name: "Bandar bokep" },
    { area: 7, name: "Pilot" },
    { area: 7, name: "Mata Mata" },
    { area: 8, name: "Detektiv" },
    { area: 8, name: "Bandar Narkoba" },
    { area: 8, name: "Mafia Kriminal" },
    { area: 9, name: "Satpam" },
    { area: 9, name: "Pemain Bola" },
    { area: 9, name: "Pengangguran" },
    { area: 10, name: "Pembunuh berantai" },
    { area: 10, name: "Presiden" },
    { area: 10, name: "Bandar Nuclear" },
    { area: 11, name: "Pencuri" },
    { area: 11, name: "Penculik Anak" },
    { area: 11, name: "Tentara" },
    { area: 12, name: "Penjual Gorengan" },
    { area: 12, name: "Penjual Anak Kecil" },
    { area: 12, name: "Peternak" },
    { area: 13, name: "Petani" },
    { area: 13, name: "Penjual Sarung" },
    { area: 13, name: "Penjual Bakso Keliling" },
    { area: 14, name: "Nahkoda" },
    { area: 14, name: "Masinis" },
    { area: 14, name: "Penjual Tuak" },
    { area: 15, name: "Penjaga Bar" },
    { area: 15, name: "Coder" },
    { area: 15, name: "Artis" },
    { area: 16, name: "Selbriti" },
    { area: 16, name: "Wartawan" },
    { area: 16, name: "Pemain Esport" },
    { area: 17, name: "Youtuber" },
    { area: 17, name: "Vlogger" },
    { area: 17, name: "Chef" },
    { area: 18, name: "Aktor Film" },
    { area: 18, name: "Kameramen Film" },
    { area: 18, name: "Atlet Profesional" },
    { area: 19, name: "Penyanyi" },
    { area: 19, name: "Desainer" },
    { area: 19, name: "Pelukis" },
    { area: 20, name: "Kuli Bangunan" },
    { area: 20, name: "Bandar Bisnis" },
    { area: 20, name: "Ceo Perusahaan besar" },
    { area: 21, name: "Boss Besar" },
    { area: 21, name: "Dokter" },
    { area: 21, name: "Astronot" },
    { area: 22, name: "Manager Perusahaan" },
    { area: 22, name: "progammer" },
    { area: 22, name: "Guru" },
    { area: 23, name: "Pengacara" },
    { area: 23, name: "Pemburu" },
    { area: 23, name: "Boss Hunter" },
  ]
  let player = global.db.data.users[m.sender]
  let pengirim = m.sender.split("@")[0]

//  let cdm = `${MeNit(new Date - player.lastkerja)}`
//  let cds = `${DeTik(new Date - player.lastkerja)}`
 // let cd1 = Math.ceil(01 - cdm)
  // let cd2 = Math.ceil(60 - cds)
 let __timers = (new Date - global.db.data.users[m.sender].lastkerja)
 let _timers = (1200000 - __timers) 
 let timers = clockString(_timers)

  let area_monsters = monsters[Math.floor(Math.random() * monsters.length)]
  let monster = area_monsters.name
  area_monsters = area_monsters.area
  let monsterName = monster.toUpperCase()

  if (new Date - global.db.data.users[m.sender].lastkerja > 1200000) {
  // if (global.db.data.users[m.sender].health > 99) {
    let coins = parseInt(Math.floor(Math.random() * 1000000))
    let exp = parseInt(Math.floor(Math.random() * 100000))
    let _healing = `${Math.floor(Math.random() * 100)}`.trim()
    let healing = (_healing * 1)
    
    /*let sum = 82 * player.area - 59
   let dmg = (player.exp  * 1 + player.health * 1 - sum)
    dmg = dmg < 0 ? Math.abs(dmg) : 0*/

    player.health -= healing
    player.lasthunt = new Date * 1 // waktu hunt 2menit

    if (player.health < 0) {
      let msg = `*@${pengirim}* Anda Pingsan Saat Kerja ${monsterName}`
      if (player.level > 0) {
      if (player.exp > 0) {
        player.level -= 1
        player.exp -= exp * 1
        msg += `\nLevel Anda Turun 1 Karena Pingsan Saat kerja!\nSilakan Kerja Lagi Nanti!`
      }
      }
      player.health = 100
      m.reply(msg)
      return
    }

    player.money += coins * 1
    player.exp += exp * 1
    global.db.data.users[m.sender].tiketcoin += 1
    
    let pesan = `Berhasil bekerja sebagai *${monsterName}*
*@${pengirim}* Kamu Sudah Selesai Kerja
Mendapatkan:
${new Intl.NumberFormat('en-US').format(coins)} Money
${new Intl.NumberFormat('en-US').format(exp)} XP
Berkurang -${healing} Health, Tersisa ${player.health} Health

+1 Tiketcoin`
    m.reply(pesan)
//     } else m.reply(`Minimal health mu 100 untuk bisa Bekerja monster`)
  } else throw `Tunggu *${timers}* Untuk Bekerja Lagi`
}

handler.help = ['test1']
handler.tags = ['game']
handler.command = /^test1/i
handler.limit = true
handler.group = true
handler.fail = null

module.exports = handler

/*function MeNit(ms) {
  let m = isNaN(ms) ? '02' : Math.floor(ms / 1000) % 60
  return [m].map(v => v.toString().padStart(2, 0)).join(':')
}

function MeNit(ms) {
  let s = isNaN(ms) ? '01' : Math.floor(ms / 1000) % 60
  return [s].map(v => v.toString().padStart(2, 0)).join(':')
}*/

function clockString(ms) {
  let h = Math.floor(ms / 3600000)
  let m = Math.floor(ms / 60000) % 60
  let s = Math.floor(ms / 1000) % 60
  console.log({ms,h,m,s})
  return [h, m, s].map(v => v.toString().padStart(2, 0) ).join(':')
}
