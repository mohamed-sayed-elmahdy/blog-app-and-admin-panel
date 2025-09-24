import blog_pic_1 from "./blog_pic_1.png";
import blog_pic_2 from "./blog_pic_2.png";
import blog_pic_3 from "./blog_pic_3.png";
import blog_pic_4 from "./blog_pic_4.png";
import blog_pic_5 from "./blog_pic_5.png";
import blog_pic_6 from "./blog_pic_6.png";
import blog_pic_7 from "./blog_pic_7.png";
import blog_pic_8 from "./blog_pic_8.png";
import blog_pic_9 from "./blog_pic_9.png";
import blog_pic_10 from "./blog_pic_10.png";
import blog_pic_11 from "./blog_pic_11.png";
import blog_pic_12 from "./blog_pic_12.png";
import blog_pic_13 from "./blog_pic_13.png";
import blog_pic_14 from "./blog_pic_14.png";
import blog_pic_15 from "./blog_pic_15.png";
import blog_pic_16 from "./blog_pic_16.png";
import facebook_icon from "./facebook_icon.png";
import googleplus_icon from "./googleplus_icon.png";
import twitter_icon from "./twitter_icon.png";
import profile_icon from "./profile_icon.png";
import logo from "./logo.png";
import arrow from "./arrow.png";
import logo_light from "./logo_light.png";
import blog_icon from "./blog_icon.png";
import add_icon from "./add_icon.png";
import email_icon from "./email_icon.png";
import upload_area from "./upload_area.png";

export const assets = {
  facebook_icon,
  googleplus_icon,
  twitter_icon,
  profile_icon,
  logo,
  arrow,
  logo_light,
  blog_icon,
  add_icon,
  email_icon,
  upload_area,
};

function getFormattedDate(daysOffset = 0) {
  const date = new Date();
  date.setDate(date.getDate() + daysOffset);
  return date;
}
const fakeUserIds = [
  "64f1a9d2e3a1a4b5c6d7e8f1",
  "64f1a9d2e3a1a4b5c6d7e8f2",
  "64f1a9d2e3a1a4b5c6d7e8f3",
];

// ...existing code...
export const blog_data = [
  {
    id: 1,
    title: "A detailed step by step guide to manage your lifestyle",
    content:
      "Full blog content goes here... Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    author: fakeUserIds[0],
    authorName: "Alex Bennett", 
    author_img: profile_icon,
    image: blog_pic_1,
    likes: 12,
    likedBy: [fakeUserIds[1], fakeUserIds[2]],
    views: 50,
    readBy: [fakeUserIds[1]],
    comments: [
      {
        userId: fakeUserIds[1],
        text: "Great article, very helpful!",
        createdAt: getFormattedDate(-1),
      },
      {
        userId: fakeUserIds[2],
        text: "I loved the tips about daily routine.",
        createdAt: getFormattedDate(-1),
      },
    ],
    tags: ["health", "routine", "wellness"],
    category: "Lifestyle",
    readLater: [],
    saved: [],
    pinned: false,
    status: "published",
    publishedAt: getFormattedDate(-8),
    slug: "lifestyle-guide",
    readingTime: 6,
    createdAt: getFormattedDate(-4),
    updatedAt: getFormattedDate(1),
  },
  {
    id: 2,
    title: "Exploring the future of Artificial Intelligence",
    content:
      "Full blog content goes here... AI is transforming industries across the world...",
    author: fakeUserIds[1],
    authorName: "Sophia Carter",
    author_img: profile_icon,
    image: blog_pic_2,
    likes: 25,
    likedBy: [fakeUserIds[0], fakeUserIds[2]],
    views: 120,
    readBy: [fakeUserIds[0]],
    comments: [
      {
        userId: fakeUserIds[0],
        text: "AI is going to change everything!",
        createdAt: getFormattedDate(-3),
      },
    ],
    tags: ["AI", "future", "innovation"],
    category: "Technology",
    readLater: [fakeUserIds[2]],
    saved: [fakeUserIds[2]],
    pinned: true,
    status: "published",
    publishedAt: getFormattedDate(-3),
    slug: "future-of-ai",
    readingTime: 8,
    createdAt: getFormattedDate(-4),
    updatedAt: getFormattedDate(-3),
  },
  {
    id: 3,
    title: "Top 10 travel destinations for 2025",
    content:
      "Full blog content goes here... Traveling opens up new horizons and experiences...",
    author: fakeUserIds[2],
    authorName: "Michael Adams",
    author_img: profile_icon,
    image: blog_pic_3,
    likes: 40,
    likedBy: [fakeUserIds[0], fakeUserIds[1]],
    views: 200,
    readBy: [fakeUserIds[0], fakeUserIds[1]],
    comments: [],
    tags: ["travel", "destinations", "tips"],
    category: "Travel",
    readLater: [],
    saved: [fakeUserIds[1]],
    pinned: false,
    status: "draft",
    publishedAt: null,
    slug: "travel-destinations-2025",
    readingTime: 5,
    createdAt: getFormattedDate(-5),
    updatedAt: getFormattedDate(-4),
  },
  {
    id: 4,
    title: "Mastering the art of cooking at home",
    content:
      "Full blog content goes here... Cooking at home can be both fun and healthy...",
    author: fakeUserIds[0],
    authorName: "Emma Watson",
    author_img: profile_icon,
    image: blog_pic_4,
    likes: 18,
    likedBy: [],
    views: 90,
    readBy: [],
    comments: [
      {
        userId: fakeUserIds[1],
        text: "This inspired me to try new recipes!",
        createdAt: getFormattedDate(-6),
      },
    ],
    tags: ["cooking", "recipes", "home"],
    category: "Food",
    readLater: [],
    saved: [],
    pinned: false,
    status: "published",
    publishedAt: getFormattedDate(-7),
    slug: "cooking-at-home",
    readingTime: 7,
    createdAt: getFormattedDate(-7),
    updatedAt: getFormattedDate(-6),
  },
  {
    id: 5,
    title: "The ultimate workout plan for beginners",
    content:
      "Full blog content goes here... Fitness is a journey and every step counts...",
    author: fakeUserIds[1],
    authorName: "Liam Johnson",
    author_img: profile_icon,
    image: blog_pic_5,
    likes: 30,
    likedBy: [fakeUserIds[2]],
    views: 150,
    readBy: [fakeUserIds[0]],
    comments: [
      {
        userId: fakeUserIds[0],
        text: "Exactly what I needed to start working out.",
        createdAt: getFormattedDate(-9),
      },
    ],
    tags: ["fitness", "workout", "health"],
    category: "Fitness",
    readLater: [fakeUserIds[0]],
    saved: [],
    pinned: true,
    status: "published",
    publishedAt: getFormattedDate(-10),
    slug: "beginner-workout-plan",
    readingTime: 4,
    createdAt: getFormattedDate(-10),
    updatedAt: getFormattedDate(-8),
  },

  // ...existing code...
  // new posts added below
  {
    id: 6,
    title: "React performance optimization: practical tips",
    content:
      "Full blog content goes here... Techniques to optimize rendering, memoization, and bundle size in React apps.",
    author: fakeUserIds[0],
    authorName: "Alex Bennett",
    author_img: profile_icon,
    image: blog_pic_6,
    likes: 22,
    likedBy: [fakeUserIds[1]],
    views: 320,
    readBy: [fakeUserIds[1]],
    comments: [
      {
        userId: fakeUserIds[1],
        text: "The profiling tips were super helpful.",
        createdAt: getFormattedDate(-11),
      },
    ],
    tags: ["react", "performance", "frontend"],
    category: "Frontend",
    readLater: [],
    saved: [fakeUserIds[2]],
    pinned: false,
    status: "published",
    publishedAt: getFormattedDate(-11),
    slug: "react-performance-tips",
    readingTime: 9,
    createdAt: getFormattedDate(-13),
    updatedAt: getFormattedDate(-11),
  },
  {
    id: 7,
    title: "Scaling Node.js APIs: patterns and pitfalls",
    content:
      "Full blog content goes here... Load balancing, clustering, caching strategies, and observability for Node.js backends.",
    author: fakeUserIds[1],
    authorName: "Sophia Carter",
    author_img: profile_icon,
    image: blog_pic_7,
    likes: 14,
    likedBy: [],
    views: 210,
    readBy: [],
    comments: [
      {
        userId: fakeUserIds[2],
        text: "Good explanation of event loop considerations.",
        createdAt: getFormattedDate(-15),
      },
    ],
    tags: ["nodejs", "scaling", "backend"],
    category: "Backend",
    readLater: [fakeUserIds[0]],
    saved: [],
    pinned: false,
    status: "published",
    publishedAt: getFormattedDate(-14),
    slug: "scaling-nodejs-apis",
    readingTime: 10,
    createdAt: getFormattedDate(-16),
    updatedAt: getFormattedDate(-14),
  },
  {
    id: 8,
    title: "Building real-time fullstack apps with WebSockets",
    content:
      "Full blog content goes here... Design considerations for real-time features, reconnection, and backpressure handling.",
    author: fakeUserIds[2],
    authorName: "Michael Adams",
    author_img: profile_icon,
    image: blog_pic_8,
    likes: 9,
    likedBy: [],
    views: 95,
    readBy: [],
    comments: [],
    tags: ["websockets", "realtime", "fullstack"],
    category: "Fullstack",
    readLater: [],
    saved: [],
    pinned: false,
    status: "draft",
    publishedAt: null,
    slug: "realtime-websockets",
    readingTime: 7,
    createdAt: getFormattedDate(-7),
    updatedAt: getFormattedDate(-3),
  },
  {
    id: 9,
    title: "Understanding Big O notation with examples",
    content:
      "Full blog content goes here... Clear walkthrough of time and space complexity with common algorithms.",
    author: fakeUserIds[0],
    authorName: "Alex Bennett",
    author_img: profile_icon,
    image: blog_pic_9,
    likes: 31,
    likedBy: [fakeUserIds[1], fakeUserIds[2]],
    views: 480,
    readBy: [fakeUserIds[1]],
    comments: [
      {
        userId: fakeUserIds[2],
        text: "Now I finally get O(n log n).",
        createdAt: getFormattedDate(-20),
      },
    ],
    tags: ["algorithms", "complexity", "cs-fundamentals"],
    category: "Computer Science",
    readLater: [fakeUserIds[1]],
    saved: [fakeUserIds[1]],
    pinned: true,
    status: "published",
    publishedAt: getFormattedDate(-20),
    slug: "big-o-notation",
    readingTime: 12,
    createdAt: getFormattedDate(-22),
    updatedAt: getFormattedDate(-20),
  },
  {
    id: 10,
    title: "System design basics for interviews",
    content:
      "Full blog content goes here... A primer on load balancers, databases, caching, and partitioning for interview prep.",
    author: fakeUserIds[1],
    authorName: "Sophia Carter",
    author_img: profile_icon,
    image: blog_pic_10,
    likes: 27,
    likedBy: [fakeUserIds[0]],
    views: 350,
    readBy: [fakeUserIds[0]],
    comments: [
      {
        userId: fakeUserIds[0],
        text: "Helpful checklist for system design interviews.",
        createdAt: getFormattedDate(-18),
      },
    ],
    tags: ["system-design", "interview", "scalability"],
    category: "Interview Preparation",
    readLater: [],
    saved: [fakeUserIds[2]],
    pinned: false,
    status: "published",
    publishedAt: getFormattedDate(-18),
    slug: "system-design-basics",
    readingTime: 15,
    createdAt: getFormattedDate(-19),
    updatedAt: getFormattedDate(-18),
  },
  {
    id: 11,
    title: "Coding challenge: Two-sum with variations",
    content:
      "Full blog content goes here... Problem statement, multiple approaches, complexity analysis, and code samples.",
    author: fakeUserIds[2],
    authorName: "Michael Adams",
    author_img: profile_icon,
    image: blog_pic_11,
    likes: 45,
    likedBy: [fakeUserIds[0], fakeUserIds[1]],
    views: 900,
    readBy: [fakeUserIds[0], fakeUserIds[1]],
    comments: [
      {
        userId: fakeUserIds[0],
        text: "Great walkthrough and edge cases covered.",
        createdAt: getFormattedDate(-30),
      },
    ],
    tags: ["coding-challenge", "algorithms", "arrays"],
    category: "Computer Science",
    readLater: [fakeUserIds[1]],
    saved: [fakeUserIds[0], fakeUserIds[1]],
    pinned: true,
    status: "published",
    publishedAt: getFormattedDate(-30),
    slug: "two-sum-variations",
    readingTime: 8,
    createdAt: getFormattedDate(-31),
    updatedAt: getFormattedDate(-30),
  },
  {
    id: 12,
    title: "Docker and CI/CD: a practical guide to deploy apps",
    content:
      "Full blog content goes here... Containerizing apps, writing Dockerfiles, and integrating with CI/CD pipelines.",
    author: fakeUserIds[0],
    authorName: "Alex Bennett",
    author_img: profile_icon,
    image: blog_pic_12,
    likes: 16,
    likedBy: [],
    views: 175,
    readBy: [],
    comments: [],
    tags: ["docker", "ci-cd", "devops"],
    category: "DevOps",
    readLater: [],
    saved: [],
    pinned: false,
    status: "published",
    publishedAt: getFormattedDate(-6),
    slug: "docker-ci-cd-guide",
    readingTime: 11,
    createdAt: getFormattedDate(-9),
    updatedAt: getFormattedDate(-6),
  }
];