const { BlazeClient } = require("mixin-node-sdk");
const { Base64 } = require("js-base64");
const config = require("./config.json");

const client = new BlazeClient(config, { parse: true, syncAck: true });

client.loopBlaze({
  async onMessage(msg) {
    console.log(msg);
    const user = (await client.readUser(msg.user_id)).full_name;
    if (msg.category === "PLAIN_POST" && msg.conversation_id !== config.learn) {
      await client.sendMessage({
        conversation_id: config.operation,
        message_id: client.newUUID(),
        category: "PLAIN_POST",
        data_base64: Base64.encode(`## ${user}提交作业：\n${msg.data}`),
      });
    }
  },
  onAckReceipt() {},
});
