/*CMD
  command: 📞 Support
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

var buttons = [
  [{ title: "✏️ Write a message", command: "/write_me" }],
  [{ title: "Chat With Developer", url: "t.me/Dev_Bikini" }]
]
var last_m = User.getProperty("last_message")
if (last_m) {
  Bot.sendInlineKeyboard(buttons, "📫 *Last Question* = " + last_m)
  return
}
var text = "Admin & Developer"
Bot.sendInlineKeyboard(buttons, text)
