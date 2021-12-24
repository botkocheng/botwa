let { MessageType } = require('@adiwajshing/baileys')
let fetch = require('node-fetch')
let handler  = async (m, { conn, text }) => {
let nani = 'https://i.ibb.co/fnz3rr2/d5546dc38c92.jpg' 
  let chats = conn.chats.all().filter(v => !v.read_only && v.message && !v.archive).map(v => v.jid)
let content = conn.send2ButtonLoc(m.chat, await (await fetch(nani)).buffer(), `Halo *${conn.getName(m.sender)}* \nSaya arybotz, Bot WhatsApp Yang Membantu Kamu Untuk Mempermudah Sesuatu Seperti Membuat Stiker Dan Lainnya, Ada Butuh Info Dariku?`, 'Note : Jika Button Tidak Muncul, Kamu Bisa Ketik #allmenu', 'COMMAND', '.allmenu', `RULES`, `.rules`, m)
  for (let id of chats) conn.copyNForward(id, content, true)
}

handler.command = /^(menu|help)$/i

module.exports = handler

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)