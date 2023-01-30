const { App } = require("@slack/bolt");
const questions = require("./questions");
require('dotenv').config()

const app = new App({
  token: process.env.SLACK_BOT_TOKEN,
  signingSecret: process.env.SLACK_SIGNING_SECRET,
  socketMode: true,
  appToken: process.env.SLACK_APP_TOKEN,
  port: process.env.PORT || 3000
})

app.message("MVP", async ({ say }) => {
  await say({
    blocks: [
      {
        type: "header",
        text: {
          type: "plain_text",
          text: `Hello Team, it's standup time! :wave:`,
          emoji: true,
        },
      },
      {
        type: "divider",
      },
      {
        type: "section",
        text: {
          type: "mrkdwn",
          text: "Let's pick our Master of Ceremonies.",
        },
        accessory: {
          type: "button",
          text: {
            type: "plain_text",
            text: "Let's go!",
            emoji: true,
          },
          value: "click_me_123",
          action_id: "shuffle_user",
        },
      },
    ],
    text: "Welcome to the Standup Assistant",
  });
});

app.action("shuffle_user", async ({ body, ack, say, client }) => {
  // Acknowledge the action
  await ack();
  const botId = "U04LV0LAXUG";

  const { members } = await client.conversations.members({
    token: process.env.SLACK_BOT_TOKEN,
    channel: body.channel.id,
  });
  const [luckyId] = members
    .filter((id) => id !== botId)
    .sort(() => Math.random() - 0.5);
  const user = await client.users.profile.get({
    token: process.env.SLACK_BOT_TOKEN,
    user: luckyId,
  });

  await say({
    blocks: [
      {
        type: "divider",
      },
      {
        type: "section",
        text: {
          type: "mrkdwn",
          text: `*Our Lucky Master of Ceremonies is :tada:*\n \n ${user?.profile?.first_name} ${user?.profile?.last_name}\n`,
        },
        accessory: {
          type: "image",
          image_url: user?.profile?.image_512,
          alt_text: "profile image",
        },
      },
      {
        type: "actions",
        elements: [
          {
            type: "button",
            text: {
              type: "plain_text",
              emoji: true,
              text: "Challenge Accepted! :party_blob:",
            },
            style: "primary",
            value: "accept",
            action_id: "accept",
          },
          {
            type: "button",
            text: {
              type: "plain_text",
              emoji: true,
              text: "No way! Pick someone else :blob-no:",
            },
            style: "danger",
            value: "decline",
            action_id: "shuffle_user",
          },
        ],
      },
    ],
    text: "Lucky Friend",
  });
});

app.action("accept", async ({ body, ack, say, client }) => {
  // Acknowledge the action
  await ack();
  await say({
    blocks: [
      {
        type: "divider",
      },
      {
        type: "section",
        text: {
          type: "mrkdwn",
          text: "Alright! Now the question of the day..",
        },
        accessory: {
          type: "static_select",
          placeholder: {
            type: "plain_text",
            text: "Select a category",
            emoji: true,
          },
          options: [
            {
              text: {
                type: "plain_text",
                text: "Funny Icebreaker",
                emoji: true,
              },
              value: "funny",
            },
            {
              text: {
                type: "plain_text",
                text: "Virtual Icebreaker",
                emoji: true,
              },
              value: "virtual",
            },
            {
              text: {
                type: "plain_text",
                text: "Great Icebreaker",
                emoji: true,
              },
              value: "great",
            },
            {
              text: {
                type: "plain_text",
                text: "Best Icebreaker",
                emoji: true,
              },
              value: "best",
            },
            {
              text: {
                type: "plain_text",
                text: "Awkward/Weird Icebreaker",
                emoji: true,
              },
              value: "weird",
            },
            {
              text: {
                type: "plain_text",
                text: "If You Could Icebreaker",
                emoji: true,
              },
              value: "if",
            },
            {
              text: {
                type: "plain_text",
                text: "Would You Rather Icebreaker",
                emoji: true,
              },
              value: "would",
            },
          ],
          action_id: "question",
        },
      },
    ],
    text: "Question of the day",
  });
});

app.action("question", async ({ body, ack, say, client }) => {
  // Acknowledge the action
  await ack();
  const [question] = questions[body?.actions[0]?.selected_option?.value].sort(
    () => Math.random() - 0.5
  );

  await say({
    blocks: [
      {
        type: "divider",
      },
      {
        type: "context",
        elements: [
          {
            type: "mrkdwn",
            text: question,
          },
        ],
      },
    ],
    text: "Final question",
  });
});

(async () => {
  // Start your app
  await app.start();
  console.log("⚡️ Bolt app is running!");
})();
