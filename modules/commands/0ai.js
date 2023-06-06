const { Configuration, OpenAIApi } = require("openai");

module.exports.config = {
  name: "ai",
  version: "2.0.8",
  hasPermission: 0,
  credits: "ᴢɪᴀʀᴇɪɴ",
  description: "AI",
  commandCategory: "utilities",
  usages: "cmdname [question]",
  cooldowns: 5,
  dependencies: {
    "openai": ""
  }
};

module.exports.run = async function({ api, event, args }) {
  const configuration = new Configuration({
    apiKey: "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"
  });

  const openai = new OpenAIApi(configuration);

  let data = args.join(" ");
  if (data.length < 1) {
    api.sendMessage("Wrong use of command. Missing content!\n /ai (question)", event.threadID);
  } else {
    try {
      const completion = await openai.createCompletion({
        model: "text-davinci-002",
        prompt: args.join(" "),
        temperature: 0.5,
        max_tokens: 2000,
        top_p: 0.3,
        frequency_penalty: 0.5,
        presence_penalty: 0.0,
      });
      api.sendMessage(completion.data.choices[0].text, event.threadID, event.messageID);
    } catch (error) {
      if (error.response) {
        console.log(error.response.status);
        console.log(error.response.data);
      } else {
        console.log(error.message);
        api.sendMessage(error.message, event.threadID);
      }
    }
  }
};