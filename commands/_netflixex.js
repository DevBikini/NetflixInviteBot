/*CMD
  command: /netflixex
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

//exchange
if (!params) {
  var inline = [
    [
      { text: "Confirm", callback_data: "/netflixex confirm" },
      { text: "Cancel", callback_data: "/netflixex cancel" }
    ]
  ]
  Api.editMessageText({
    message_id: request.message.message_id,
    text:
      "🎁 For Exchange Points to Netflix Account :-\n🖲Please Click on Comfirm",
    parse_mode: "markdown",
    reply_markup: { inline_keyboard: inline }
  })
}
//points
var points = Libs.ResourcesLib.userRes("points")
//cancel
if (params && params == "cancel") {
  var text =
    "*📨You Can Exchange Your Point to Many Premium Accounts.\n\n 💰 Your Balance: " +
    points.value().toFixed(1) +
    " Points.\n\n🔄 Exchange Point to ~\n👉Netflix Account [ 2 Point ].*"
  var buttons = [[{ text: "Netflix", callback_data: "/netflixex" }]]
  Api.editMessageText({
    message_id: request.message.message_id,
    text: text,
    parse_mode: "markdown",
    reply_markup: { inline_keyboard: buttons }
  })
  return
}
//confirm
if (params && params == "confirm") {
  if (2 > points.value()) {
    Api.editMessageText({
      message_id: request.message.message_id,
      text: "🚫 You Need 2 Points For Exchanging .\n👤 Refer More to Earn .",
      parse_mode: "markdown",
      reply_markup: {
        inline_keyboard: [
          [{ text: "Back", callback_data: "/netflixex cancel" }]
        ]
      }
    })
    return
  }
  //generate account
  var generate = Generate()
  if (generate == "nothing") {
    Api.editMessageText({
      message_id: request.message.message_id,
      text: "Netflix Account Sold Out.. please wait for re-stack",
      parse_mode: "markdown",
      reply_markup: {
        inline_keyboard: [
          [{ text: "Back", callback_data: "/netflixex cancel" }]
        ]
      }
    })
    return
  }
  if (generate) {
    //deduct points
    points.add(-2)
    var withdraw = Libs.ResourcesLib.anotherUserRes("Withdraw", "global")
    withdraw.add(1)
    Api.editMessageText({
      message_id: request.message.message_id,
      text:
        "Generated Account\nEmail : `" +
        generate.email +
        "`\nPassword : `" +
        generate.password +
        "`",
      parse_mode: "markdown"
    })
    return
  }
}
