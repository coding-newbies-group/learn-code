const { BlazeClient } = require("mixin-node-sdk");
const config = require("./config.json");

const client = new BlazeClient(config, { parse: true, syncAck: true });

client.loopBlaze({
  onMessage(msg) {
    if (msg.data === "你好") {
      client.sendmessagetext(msg.user_id, "你也好！");
    } else if (msg.data === "你是谁") {
      client.sendmessagetext(msg.user_id, "我是编程学习小助手");
    } else {
      client.sendmessagetext(msg.user_id, "我不知道你在说什么");
    }
  },
  onAckReceipt() {},
});
