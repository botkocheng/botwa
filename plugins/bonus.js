let handler = async (m, { conn }) => {
  if (new Date - global.DATABASE._data.users[m.sender].lastclaim > 86400000) {
    conn.reply(m.chat, 'Nih Gw Kasih Modal Buat Jadi Bot 100.000 Rupiah', m)  
    global.DATABASE._data.users[m.sender].exp += 100000
    global.DATABASE._data.users[m.sender].lastclaim = new Date * 1
  } else conn.reply(m.chat, 'Usaha Ngab Kalo Mau Dapat Uang Tambahan:v � arybotz', m)
}
handler.help = ['bonus', 'hadiah']
handler.tags = ['hadiah']
handler.command = /^(bonus|hadiah)$/i
handler.owner = true
handler.mods = false
handler.premium = false
handler.group = false
handler.private = true

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.exp = 0

module.exports = handler

