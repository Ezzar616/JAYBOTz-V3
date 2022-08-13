let handler = async m => m.reply(`
            𝒃𝒐𝒕 𝒊𝒏𝒊 𝒎𝒆𝒏𝒈𝒈𝒖𝒏𝒂𝒌𝒂𝒏 𝑺𝑪 𝒅𝒊𝒔𝒊𝒏𝒊 https://linkr.bio/JAYBOTz
`.trim()) //

handler.customPrefix = /^(.sc|.script|sc|script)$/i
handler.command = new RegExp

handler.limit = false
handler.mods = false 
module.exports = handler