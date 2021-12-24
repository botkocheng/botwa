let fs = require('fs')
let handler = async (m) => {
let stc = fs.readFileSync('./sticker/tag.webp')
conn.fakeReply(m.chat, stc, '6281264038909@s.whatsapp.net', '*Kenapa Tag Owner Saya*')
}
handler.customPrefix = /^(@6281264038909)$/i
handler.command = new RegExp

module.exports = handler
