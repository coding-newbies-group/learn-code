const { BlazeClient } = require("mixin-node-sdk");
const config = require("./config.json");

const client = new BlazeClient(config, { parse: true, syncAck: true });

client.loopBlaze({
  onMessage(msg) {
    if (!(msg.data === "你好")) {
    // if (msg.data === "你好" && msg.user_id === "cbb20923-9020-490a-b8f6-e816883c9c99") {
    // if (msg.data === "你好" && msg.user_id !== "cbb20923-9020-490a-b8f6-e816883c9c99") {
    // if (msg.data === "你好！" || msg.data === "你好!") {
      client.sendMessageText(msg.user_id, "你也好！");
    } else if (msg.data === "你是谁") {
      client.sendMessageText(msg.user_id, "我是编程学习小助手");
    } else {
      client.sendMessageText(msg.user_id, "我不知道你在说什么");
    }
  },
  onAckReceipt() {},
});

//把37351541替换成你的Mixin ID
client.readUser("37351541").then(console.log);

