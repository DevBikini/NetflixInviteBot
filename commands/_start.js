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
var points = Libs.ResourcesLib.userRes("points")
var button =
  "🤑 Balance : " +
  points.value().toFixed(1) +
  " Points,🎁 Daily Check-in\n 💲 Withdraw\n👤 Ref and Earn,📈 Statistics\n📞 Support"
var welcome_msg = "welcome"
var amount = 1
var joinRef = "🎁 Congrats, your referral join all channel you earned 1 Points"
var newRef =
  "*👥 New Refferal\n\nYou Get Your Points When Your Referral Join all Channels*"
function doAtractedByUser(refer) {
  Bot.sendMessageToChatWithId(refer.id, newRef)
}
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
    referrerRes.add(+amount)
    Bot.sendMessageToChatWithId(referrer.telegramid, joinRef)
  }
  Bot.sendKeyboard(button, welcome_msg)
  return
}
Bot.sendKeyboard(button, welcome_msg)

