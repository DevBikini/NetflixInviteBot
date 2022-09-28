/*CMD
  command: 📈 Statistics
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

var User = Libs.ResourcesLib.anotherUserRes("user", "global")
var withdraw = Libs.ResourcesLib.anotherUserRes("Withdraw", "global")
Bot.sendMessage(
  "*📊 Total  : " +
    User.value() +
    " Users\n\n➕ Total Withdraw : " +
    withdraw.value() +
    " Points*\n\n 🌟[Dev Bikini](https://t.me/DevBikini)",
  { disable_web_page_preview: true }
)
