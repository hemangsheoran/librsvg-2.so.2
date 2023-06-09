const axios = require('axios');

module.exports.config = {
  name: "ai",
  version: "2.0.8",
  hasPermission: 0,
  credits: "ᴢɪᴀʀᴇɪɴ",
  description: "AI",
  commandCategory: "utilities",
  usages: "cmdname [question]",
  cooldowns: 5,
};

module.exports.run = async function({ api, event, args }) {
  const apiKey = "YOUR_OPENAI_API_KEY";
  const prompt = args.join(" ");

  if (prompt.length < 1) {
    api.sendMessage("Wrong use of command. Missing content!\n/ai (question)", event.threadID);
  } else {
    try {
      const response = await axios.post('https://api.openai.com/v1/engines/davinci/completions', {
        prompt: prompt,
        max_tokens: 200,
        temperature: 0.7,
        n: 1,
        stop: null,
      }, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${apiKey}`,
        },
      });

      const completion = response.data.choices[0].text;
      api.sendMessage(completion, event.threadID, event.messageID);
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