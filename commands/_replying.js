/*CMD
  command: /replying
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

Api.sendMessage({
  chat_id: options.user,
  text:
    "Reply By Administration\n<b>__________________________</b>\n\n<b>Question</b> : " +
    options.question +
    "\n<b>Answer</b> : " +
    message,
  parse_mode: "html"
})
Api.deleteMessage({ message_id: options.del })
