const { BlazeClient } = require("mixin-node-sdk");
const config = require("./config.json");

const client = new BlazeClient(config, { parse: true, syncAck: true });

client.loopBlaze({
  onMessage(msg) {
    console.log(msg);
    if (msg.data === "?" || msg.data === "？") {
      client.sendMessageText(msg.user_id, "帮助信息");
    } else if (msg.data === "/") {
      client.sendMessageText(msg.user_id, "命令信息");
    } else {
      client.sendMessageText(
        msg.user_id,
        "请发送“?”获得帮助，或者“/”获得命令列表"
      );
    }
  },
  onAckReceipt() {},
});
