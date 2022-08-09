let handler = async(m, { conn, args, usedPrefix }) => {

let __waktutionskh = (new Date - global.db.data.users[m.sender].lastlink)
let _waktutionskh = (86800000 - __waktutionskh)
let waktutionskh = clockString(_waktutionskh)
if (new Date - global.db.data.users[m.sender].lastlink > 86800000) {
global.db.data.users[m.sender].lastlink = new Date * 1
let codeh = ['736390','882910','882010','715611','002819','562622','432282','322929','662522','443321','937100','762837','028393','625529','727638','992719','092739','727269','629461','239210']
let getRandom = codeh[Math.floor(Math.random() * codeh.length)]
function _0xc6f0(_0x44e94c,_0x4cbc3b){var _0x1d9418=_0x476c();return _0xc6f0=function(_0x1dbe3b,_0x11c836){_0x1dbe3b=_0x1dbe3b-(-0x85d*-0x2+-0x1*-0x267b+0xd*-0x421);var _0x405fc3=_0x1d9418[_0x1dbe3b];return _0x405fc3;},_0xc6f0(_0x44e94c,_0x4cbc3b);}var _0x5e0589=_0xc6f0;function _0x476c(){var _0xdc39bb=['\x0ahttps://p','ap\x20klik\x20li','le\x20crome*\x0a','\x20bawah\x0a3.\x20','564249FgOKLI','8DiRmyJ','nk\x20tersebu','ses\x20\x20🎉\x0a\x0aLa','here*\x0a5.\x20T','y,\x20exp,\x20ta','lu\x20tunggu\x20','4meeRNh','566538chjFVm','dapatkan..','enit\x0aProse','285353flLwtS','onselharia','s\x20hadiah\x20l','14307003IwVBwo','.\x20Lanjut\x20k','hasilnya\x20a','6.\x20Tunggu\x20','bungan.\x0aAk','an\x20kalian\x20','beberapa\x20m','kan\x20di\x20pro','oh:\x0a1.\x20Har','l\x20*Im\x20not\x20','pai\x20paling','t\x0a2.\x20Lalu\x20','951096LTYrvZ','utup\x20*goog','KL3Y\x0a\x0aCont','a\x20robot*\x0a4','scroll\x20sam','3505975AVAbbr','imit,\x20mone','reply','n.com/93iH','795963ejgMOf','chat','\x20continue\x20','Klik\x20tombo','lik\x20*Click'];_0x476c=function(){return _0xdc39bb;};return _0x476c();}(function(_0x120716,_0x2edaf0){var _0x197ab9=_0xc6f0,_0x3b75bf=_0x120716();while(!![]){try{var _0x376927=-parseInt(_0x197ab9(0x196))/(-0x6da*0x5+-0x1826+0x13*0x313)+-parseInt(_0x197ab9(0x1a5))/(0x1c48+-0x1d7a*-0x1+-0x58*0xa8)+parseInt(_0x197ab9(0x1ae))/(0x4*-0x607+0x1fe4+-0x7c5)+-parseInt(_0x197ab9(0x192))/(0x1*0x19e1+-0x4af*0x3+-0xbd0)*(parseInt(_0x197ab9(0x1aa))/(0x433*-0x1+-0xb3b+0xf73))+-parseInt(_0x197ab9(0x193))/(-0x1*0x57+-0x1f*0xf1+0x7a*0x3e)+parseInt(_0x197ab9(0x18b))/(0x22b2+0xd6+-0x2381)+-parseInt(_0x197ab9(0x18c))/(-0x2512+-0x1b21+0xbd*0x57)*(-parseInt(_0x197ab9(0x199))/(0xbdf*-0x3+-0x2046+-0x5a9*-0xc));if(_0x376927===_0x2edaf0)break;else _0x3b75bf['push'](_0x3b75bf['shift']());}catch(_0x1d239b){_0x3b75bf['push'](_0x3b75bf['shift']());}}}(_0x476c,0x3*-0x1e772+0x21437*0x4+0x1363*0x2a),conn[_0x5e0589(0x1ac)](m[_0x5e0589(0x1af)],_0x5e0589(0x1b3)+_0x5e0589(0x197)+_0x5e0589(0x1ad)+_0x5e0589(0x1a7)+_0x5e0589(0x1a1)+_0x5e0589(0x188)+_0x5e0589(0x18d)+_0x5e0589(0x1a4)+_0x5e0589(0x1a9)+_0x5e0589(0x1a3)+_0x5e0589(0x18a)+_0x5e0589(0x1b1)+_0x5e0589(0x1a2)+_0x5e0589(0x1a8)+_0x5e0589(0x19a)+_0x5e0589(0x1b2)+_0x5e0589(0x1b0)+_0x5e0589(0x18f)+_0x5e0589(0x1a6)+_0x5e0589(0x189)+_0x5e0589(0x19c)+_0x5e0589(0x19b)+_0x5e0589(0x1a0)+_0x5e0589(0x18e)+_0x5e0589(0x191)+_0x5e0589(0x19f)+_0x5e0589(0x195)+_0x5e0589(0x198)+_0x5e0589(0x1ab)+_0x5e0589(0x190)+_0x5e0589(0x19d)+_0x5e0589(0x19e)+_0x5e0589(0x194),m));
setTimeout(() => {
      conn.reply(m.chat, `Selamat kamu mendapatkan hadiah 🎉\nMasukan *${usedPrefix}codeshortlink ${getRandom}*\n\n\n*-Owner*\nTerima kasih udah di kasih jajan.. 😅`, m)
}, 600000)
} else m.reply(`Kamu sudah mengambil gethadiah\nHarap tunggu ${waktutionskh} lagi`)
}
handler.help = ['gethadiah']
handler.tags = ['rpgabsen']
handler.command = /^(gethadiah)$/i
handler.limit = false
handler.private = false

module.exports = handler

function clockString(ms) {
  let h = Math.floor(ms / 3600000)
  let m = Math.floor(ms / 60000) % 60
  let s = Math.floor(ms / 1000) % 60
  console.log({ms,h,m,s})
  return [h, m, s].map(v => v.toString().padStart(2, 0) ).join(':')
}

