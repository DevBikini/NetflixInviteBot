/*CMD
  command: 💲 Withdraw
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

var points = Libs.ResourcesLib.userRes("points")
var text =
  "*📨You Can Exchange Your Point to Many Premium Accounts.\n\n 💰 Your Balance: " +
  points.value() +
  " Points.\n\n🔄 Exchange Point to ~\n👉Netflix Account [ 2 Point ].*"
var buttons = [[{ title: "Netflix", command: "/netflixex" }]]

Bot.sendInlineKeyboard(buttons, text)

