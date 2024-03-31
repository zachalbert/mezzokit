export type Difficulty = keyof typeof Challenge.design;
export const Challenge = {
  design: {
    easy: ["a settings view", "a primary view"],
    medium: ["a landing page", "a list view"],
    hard: ["search results view", "a dashboard"],
  },

  for: {
    easy: ["a music streaming app", "a weather app"],
    medium: ["a chore tracking app", "an app to track package deliveries"],
    hard: ["an app for financial planners", "a budgeting app"],
  },

  inOrderTo: {
    easy: ["maximize usability", "increase completion rate"],
    medium: ["decrease error rate", "increase moments of delight"],
    hard: ["increase conversion to a paid account", "increase referrals"],
  },

  device: {
    easy: ["desktop", "tablet"],
    medium: ["mobile", "tablet", "desktop"],
    hard: ["smart TV", "smart watch", "mobile", "tablet", "desktop"],
  },
};
