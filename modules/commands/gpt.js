const axios = require('axios');

module.exports.config = {
    name: "gpt",
    version: "4.3.7",
    hasPermssion: 0,
    credits: "ProcodeMew",
    description: "Chat with the best AI Chat - Chat GPT by OpenAI",
    commandCategory: "Ai - chatbot",
    usages: "[args]",
    cooldowns: 5,
    dependencies: {
        axios: ""
    }
};

async function chatGPT(message) {
  try {
    const response = await axios.post(
      'https://api.openai.com/v1/engines/davinci-codex/completions',
      {
        prompt: message,
        max_tokens: 50,
        temperature: 0.7,
        n: 1,
        stop: '\n',
      },
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: 'Bearer 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',
        },
      }
    );

    if (response.status !== 200 || !response.data || !response.data.choices || response.data.choices.length === 0) {
      console.error('Invalid response from Chat GPT API:', response.data);
      throw new Error('Invalid response from Chat GPT API');
    }

    const { choices } = response.data;
    const reply = choices[0].text.trim();
    return reply;
  } catch (error) {
    console.error('Chat GPT API Error:', error);
    throw new Error('An error occurred while processing the request.');
  }
}

module.exports.handleEvent = async function ({ api, event }) {
    const { threadID, messageID, senderID, body } = event;

    if (senderID === api.getCurrentUserID() || messageID === global.prevMessageID) return;

    if (body.startsWith('.gpt')) {
        const message = body.slice(4).trim();
        try {
            const reply = await chatGPT(message);
            api.sendMessage(reply, threadID);
        } catch (error) {
            api.sendMessage("⚠️ An error occurred while processing the request.", threadID);
            console.error("Chat GPT Error:", error);
        }
    }

    global.prevMessageID = messageID;
};

module.exports.run = async function ({ api, event, args }) {
    const { threadID, messageID } = event;

    if (args.length === 0) {
        api.sendMessage("⚠️ You have not entered a message.", threadID, messageID);
        return;
    }

    const message = args.join(' ');
    try {
        const reply = await chatGPT(message);
        api.sendMessage(reply, threadID, messageID);
    } catch (error) {
        api.sendMessage("⚠️ An error occurred while processing the request.", threadID, messageID);
        console.error("Chat GPT Error:", error);
    }
};