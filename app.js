const { App } = require("@slack/bolt");

//  All Questions
const questions = {
  virtual: [
    "Do you love working from home or would you rather be in the office? Is there a balance of both that you like best?",
    "What’s the hardest part about working virtually for you? The easiest?",
    "Do you have a dedicated office space at home?",
    "Show us your office space!",
    "Where do you work most frequently from at home? Your office? Your kitchen table? The backyard? Your bed?",
    "Be honest, how often do you work from bed?",
    "What did you eat for breakfast?",
    "What does your morning routine look like when working from home?",
    "What’s your number one tip for combating distractions when working from home?",
    "How do you stay productive and motivated working virtually?",
    "What does your typical work from home uniform look like?",
    "How many cups of coffee, tea, or beverage-of-choice do you have each morning?",
    "Are you an early bird or night owl?",
    "What about showers? Do you prefer morning or night?",
    "What’s one thing we could do to improve our virtual meetings?",
    "What’s your favorite flower or plant?",
    "What’s your caffeinated beverage of choice? Coffee? Cola? Tea?",
    "What’s your favorite scent?",
    "What’s the last great TV show or movie you wanted?",
    "Best book you’ve ever read?",
    "Best professional development book you’ve ever read?",
    "If you could learn one new professional skill, what would it be?",
    "If you could learn one new personal skill, what would it be?",
    "What’s your favorite way to get in some exercise?",
    "If you could write a book, what genre would you write it in? Mystery? Thriller? Romance? Historical fiction? Non-fiction?",
  ],
  funny: [
    "What is one article of clothing that someone could wear that would make you walk out on a date with them?",
    "The zombie apocalypse is coming, who are 3 people you want on your team?",
    "What is your most used emoji?",
    "What was the worst style choice you ever made?",
    "What was the worst haircut you ever had?",
    "Who was your childhood actor/actress crush?",
    "If you were a wrestler what would be your entrance theme song?",
    "Have you ever been told you look like someone famous, who was it?",
    "If you could bring back any fashion trend what would it be?",
    "What’s the most embarrassing fashion trend you used to rock?",
    "What did you name your first car?",
    "Does your current car have a name? What is it?",
    "You have your own late night talk show, who do you invite as your first guest?",
    "If a movie was made of your life what genre would it be, who would play you?",
    "If you were famous, what would you be famous for?",
    "You have to sing karaoke, what song do you pick?",
    "What was your least favorite food as a child? Do you still hate it or do you love it now?",
    "If you had to eat one meal everyday for the rest of your life what would it be?",
    "If you were left on a deserted island with either your worst enemy or no one, which would you choose? Why?",
    "If aliens landed on earth tomorrow and offered to take you home with them, would you go?",
    "60s, 70s, 80s, 90s: Which decade do you love the most and why?",
    "What’s your favorite sandwich and why?",
  ],
  great: [
    "What’s the best piece of advice you’ve ever been given?",
    "When you die, what do you want to be remembered for?",
    "What is your favorite item you’ve bought this year?",
    "What would be the most surprising scientific discovery imaginable?",
    "What is your absolute dream job?",
    "What would your talent be if you were Miss or Mister World?",
    "What would the title of your autobiography be?",
    "Say you’re independently wealthy and don’t have to work, what would you do with your time?",
    "If you had to delete all but 3 apps from your smartphone, which ones would you keep?",
    "What is your favorite magical or mythological animal?",
    "What does your favorite shirt look like?",
    "Who is your favorite Disney hero or heroine? Would you trade places with them?",
    "What would your dream house be like?",
    "If you could add anyone to Mount Rushmore who would it be; why?",
    "You’re going sail around the world, what’s the name of your boat?",
    "What fictional family would you be a member of?",
    "What is your favorite television network?",
  ],
  best: [
    "What sport would you compete in if you were in the Olympics?",
    "Who is the better businessman or business woman and why? (Example: Justin Timberlake or Justin Bieber?)",
    "What was the worst job you ever had?",
    "You can have anyone fictional as your imaginary friend, who do you choose and why?",
    "What would your superpower be and why?",
    "Which band / artist – dead or alive would play at your funeral?",
    "As a child, what did you want to be when you grew up?",
    "What’s your favorite tradition or holiday?",
    "What fictional world or place would you like to visit?",
    "What is your favorite breakfast food?",
    "What is your favorite time of the day and why?",
    "Coffee or tea?",
    "Teleportation or flying?",
    "What is your favorite TV show?",
    "What book, movie read/seen recently you would recommend and why?",
    "What breed of dog would you be?",
    "If you had a time machine, would go back in time or into the future?",
    "Do you think you could live without your smartphone (or other technology item) for 24 hours?",
    "What is your favorite dessert?",
    "What was your favorite game to play as a child?",
    "Are you a traveler or a homebody?",
    "What’s one career you wish you could have?",
    "What fictional world or place would you like to visit?",
    "What’s your favorite place of all the places you’ve travelled?",
    "Have you ever met your idol or someone you revere greatly?",
    "Have you ever completed anything on your “bucket list”?",
    "Do you have a favorite plant?",
    "What did you have for breakfast this morning?",
    "What was the country you last visited outside of United States?",
    "What’s is one thing we don’t know about you?",
    "What is your favorite meal to cook and why?",
    "Are you a morning person or a night person?",
    "What is your favorite musical instrument and why?",
    "Are you a cat person or a dog person?",
    "What languages do you know how to speak?",
    "Popcorn or M&Ms?",
  ],
  weird: [
    "What’s the weirdest food you’ve ever eaten?",
    "What’s the most out-of-character thing you’ve ever done?",
    "What is your cellphone wallpaper?",
    "You can have an unlimited supply of one thing for the rest of your life, what is it? Sushi? Scotch Tape?",
    "What’s your best scar story?",
    "Would you go with aliens if they beamed down to Earth?",
    "Are you sunrise, daylight, twilight, or nighttime? Why?",
    "What season would you be?",
    "Are you a good dancer?",
    "What fruit or vegetable would you most want to be?",
  ],
  if: [
    "If you could hang out with any cartoon character, who would you choose and why?",
    "If you could live anywhere in the world for a year, where would it be?",
    "If you could commit any crime and get away with it what would you choose and why?",
    "If you could choose any person from history to be your imaginary friend, who would it be and why?",
    "If you could see one movie again for the first time, what would it be and why?",
    "If you could bring back any fashion trend what would it be?",
    "If you could live in any country, where would you live?",
    "If you could choose any two famous people to have dinner with who would they be?",
    "If you could be any animal in the world, what animal would you choose to be?",
    "If you could do anything in the world as your career, what would you do?",
    "If you could be any supernatural creature, what would you be and why?",
    "If you could change places with anyone in the world, who would it be and why?",
    "If you could rename yourself, what name would you pick?",
    "If you could have someone follow you around all the time, like a personal assistant, what would you have them do?",
    "If you could instantly become an expert in something, what would it be?",
    "If you could be guaranteed one thing in life (besides money), what would it be?",
    "If you had to teach a class on one thing, what would you teach?",
    "If you could magically become fluent in any language, what would it be?",
    "If you could be immortal, what age would you choose to stop aging at and why?",
    "If you could be on a reality TV show, which one would you choose and why?",
    "If you could choose any person from history to be your imaginary friend, who would it be and why?",
    "If you could eliminate one thing from your daily routine, what would it be and why?",
    "If you could go to Mars, would you? Why or why not?",
    "If you could have the power of teleportation right now, where would you go and why?",
    "If you could write a book that was guaranteed to be a best seller, what would you write?",
  ],
  would: [
    "Would you rather live in the ocean or on the moon?",
    "Would you rather meet your travel back in time to meet your ancestors or to the future to meet your descendants?",
    "Would you rather lose all of your money or all of your pictures?",
    "Would you rather have invisibility or flight?",
    "Would you rather live where it only snows or the temperature never falls below 100 degrees?",
    "Would you rather always be slightly late or super early?",
    "Would you rather give up your smartphone or your computer?",
    "Would you rather live without heat and AC or live without social media?",
    "Would you rather be the funniest or smartest person in the room?",
    "Would you rather be able to run at 100 miles per hour or fly at 10 miles per hour?",
    "Would you rather be a superhero or the world’s best chef?",
    "Would you rather be an Olympic gold medallist or an astronaut?",
  ],
};

const app = new App({
  token: process.env.SLACK_BOT_TOKEN,
  signingSecret: process.env.SLACK_SIGNING_SECRET,
  socketMode: true,
  appToken: process.env.SLACK_APP_TOKEN,
  // Socket Mode doesn't listen on a port, but in case you want your app to respond to OAuth,
  // you still need to listen on some port!
  port: process.env.PORT || 3000,
});

app.message(async ({ message, say }) => {
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
  console.log(body?.actions[0]?.selected_option?.value, question);
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
