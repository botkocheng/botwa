let handler = async (m, { conn }) =>
conn.relayWAMessage(conn.prepareMessageFromContent(m.chat, {
                    "listMessage":  {
                        "title": `Hai Kak ${conn.getName(m.sender)}\nSaya arybotz\nPilih Menu Dibawah Ya`,
                        "description": " [❗] *INI MENU ARYBOTZ*",
                        "buttonText": "MENU DISINI",
                        "listType": "SINGLE_SELECT",
                        "sections": [
                            {
                                "rows": [
                                    {
                                    	"title": "ALL MENU BOT",
                                        "description": "I Want To Use All Menu bye ©ary Bot",
                                        "rowId": "#menuall"
                                        },{
                                    	"title": "Donasi Bot",
                                        "description": "I Want To Use Donasi Bot",
                                        "rowId": "#donasi"
                                        },{
                                    	"title": "Youtube Bot",
                                        "description": "I Want To Use Youtube Bot",
                                        "rowId": "#ytbot"
                                        },{
                                    	"title": "Instagram Bot",
                                        "description": "I Want To Use Instagram Bot",
                                        "rowId": "#igbot"
                                        },{
                                        "title": "Sewa Bot",
                                        "description": "I Want To Use Sewa Menu",
                                        "rowId": "#hmpo"
                                        },{
                                        "title": "Report Bug",
                                        "description": "I Want To Use Report Bug",
                                        "rowId": "#report *Bang Botnya Ngebug*"
                                        },{
                                    	"title": "SUBSCRIBE YT : ARY JUANDA",
                                        "description": ``,
                                        "rowId": "#say Jangan Lupa Subscribe Yt aryjuanda Ya Atau Klik Link Di Bawah Ini 😁:\nhttps://bit.ly/30WRP0K"
                                    }
                                ]
                            }
                        ], "contextInfo": { "stanzaId": m.key.id,
"participant": m.sender,
"quotedMessage": m.message
}
                    }
                 }, {}), {waitForAck: true})

handler.command = /^(mnusementara|allmenu)$/i

module.exports = handler