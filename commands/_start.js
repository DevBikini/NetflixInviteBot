/*CMD
  command: /start
  help: 
  need_reply: false
  auto_retry_time: 
  folder: 
  answer: 

  <<KEYBOARD

  KEYBOARD
  aliases: back
CMD*/

if (chat.chat_type != "private") {
  return
}
function doAtractedByUser() {}
var trackOptions = {
  onAtractedByUser: doAtractedByUser
}
Libs.ReferralLib.currentUser.track(trackOptions)
var add_user = Libs.ResourcesLib.anotherUserRes("user", "global")
var ont = User.getProperty("ont")
if (!ont) {
  //new user
  add_user.add(+1)
  User.setProperty("ont", { ont: "yes" }, "json")
  var referrer = Libs.ReferralLib.getAttractedBy()
  if (referrer) {
    var referrerRes = Libs.ResourcesLib.anotherUserRes(
      "points",
      referrer.telegramid
    )
    var amount = 1
    referrerRes.add(+amount)
  }
}
var points = Libs.ResourcesLib.userRes("points")
var button =
  "🤑 Balance : " +
  points.value() +
  " Points,🎁 Daily Check-in\n 💲 Withdraw\n👤 Ref and Earn,📈 Statistics\n📞 Support"
var msg = "welcome"
Bot.sendKeyboard(button, msg)
