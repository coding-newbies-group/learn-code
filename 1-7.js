const { BlazeClient } = require("mixin-node-sdk");
const config = require("./config.json");

const client = new BlazeClient(config, { parse: true, syncAck: true });

client.loopBlaze({
  onMessage(msg) {
    console.log(msg);
    // if (msg.data === "你好") {
    //   client.sendMessageText(msg.user_id, "你也好！");
    // } else if (msg.data === "你是谁") {
    //   client.sendMessageText(msg.user_id, "我是编程学习小助手");
    // } else {
    //   client.sendMessageText(msg.user_id, "我不知道你在说什么");
    // }
    if (msg.data === "你好") {
      client.sendMessageText(msg.user_id, "你好！");
    }
    
    if (msg.data === "你好") {
      client.sendMessageText(msg.user_id, "你也好！");
    }
  },
  onAckReceipt() {},
});
