export type Difficulty = keyof typeof Challenge.design;
export const Challenge = {
  design: {
    easy: [
      "a to-do list",
      "a detail view",
      "a user profile page",
      "a real-time chat interface",
      "an event registration form",
      "a photo gallery",
      "an activity feed",
      "a calculator interface",
      "a video streaming interface",
      "a voting interface",
      "a progress tracker",
    ],
    medium: [
      "an email marketing template",
      "a search results page",
      "an event calendar",
      "a saas subscription page",
      "a donation page",
      "a feedback collection tool",
      "a personal finance tracker",
      "a task management board",
      "a settings view",
      "a checkout process",
      "an onboarding experience",
      "a landing page",
      "a list view",
      "a commenting interface",
    ],
    hard: [
      "a customer support flow",
      "a project collaboration tool",
      "a travel itinerary planner",
      "an e-commerce product customization tool",
      "a product personalization questionnaire",
      "a gamified learning experience",
      "an environmental footprint calculator",
      "a digital wallet interface",
      "an interactive dashboard",
      "a data visualization interface",
      "an account setup wizard",
    ],
  },

  for: {
    easy: [
      "a restaurant reservation app",
      "a recipe sharing platform",
      "a music streaming app",
      "a weather app",
      "a nonprofit organization",
      "a fitness tracker",
      "a boutique online store",
      "a wellness advice app",
      "a personal finance management app",
      "a travel booking platform",
      "a home plant care app",
      "a virtual event hosting platform",
      "a children's educational app",
      "a mental health support app",
      "a vintage clothing and accessories shop",
      "a monthly wine subscription service",
      "a DIY craft marketplace",
      "a mobile game development company",
      "an interior design consultancy",
    ],
    medium: [
      "a subscription-based book club service",
      "a local farm-to-table delivery service",
      "a language learning application",
      "a virtual book reading app",
      "a community-driven news platform",
      "a road-trip planning app",
      "a DIY home renovation guide",
      "a meal planning service",
      "a pet adoption and care service",
      "an environmental advocacy group platform",
      "an office lunch catering service",
      "a crowdfunding site for social causes",
      "a luxury travel concierge app",
      "a fitness class marketplace",
      "a local cultural events guide",
      "a co-living space finder",
      "a homemade cosmetics marketplace",
      "a digital art gallery",
      "an online education platform",
      "a chore tracking app",
      "a package delivery tracker",
    ],
    hard: [
      "a competitive esports platform",
      "a community garden management platform",
      "a sports team management platform",
      "an uban planning simulation tool",
      "a supply chain management system",
      "a decentralized social networking platform",
      "an AI-driven personal health assistant",
      "a VR travel experience platform",
      "a freelance job marketplace",
      "a legal consultation service for startups",
      "a platform for trading collectibles",
      "a remote work productivity tool",
      "a blockchain-based digital identity verification service",
      "an app for financial planners",
      "a corporate budgeting app",
    ],
  },

  inOrderTo: {
    easy: [
      "maximize usability",
      "increase completion rate",
      "encourage community interaction",
      "boost content discoverability",
      "facilitate seamless navigation",
      "promote longer session durations",
      "improve conversion rates",
      "reduce user churn rate",
      "create a viral sharing effect",
      "increase subscription sign-ups",
      "encourage user-generated content",
      "improve customer service satisfaction",
      "increase social shares",
    ],
    medium: [
      "enhance accessibility for all users",
      "amplify brand loyalty",
      "incentivize healthy habits",
      "improve retention",
      "streamline information retrieval",
      "increase revenue through upselling",
      "foster a sense of belonging",
      "enhance user engagement",
      "decrease error rate",
      "increase moments of delight",
    ],
    hard: [
      "minimize harm to users' mental health",
      "create the most streamlined experience",
      "expand the user base globally",
      "facilitate peer-to-peer support",
      "reduce environmental impact",
      "increase daily active users",
      "increase conversion to a paid account",
      "increase referrals",
    ],
  },

  device: {
    easy: ["desktop", "tablet"],
    medium: ["mobile", "tablet", "desktop"],
    hard: [
      "smart TV",
      "smart watch",
      "mobile",
      "tablet",
      "desktop",
      "AR/VR headset",
    ],
  },
};
