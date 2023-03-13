const { BlazeClient } = require("mixin-node-sdk");
const { Base64 } = require("js-base64");
const config = require("./config.json");

const client = new BlazeClient(config, { parse: true, syncAck: true });

client.loopBlaze({
  async onMessage(msg) {
    console.log(msg);
    const user = (await client.readUser(msg.user_id)).full_name;
    if (
      (msg.category === "PLAIN_POST" || msg.category === "PLAIN_TEXT") &&
      msg.conversation_id !== config.learn &&
      msg.user_id !== "cbb20923-9020-490a-b8f6-e816883c9c99"
    ) {
      console.log(user + " 提交了作业");
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
