const mongoose = require("mongoose");

const QuestionSchema = new mongoose.Schema({
  id: { type: String },
  type: {
    en: { type: String, default: "" },
    ar: { type: String, default: "" }
  },
  language: {
    en: { type: String, default: "" },
    ar: { type: String, default: "" }
  },
  difficulty: {
    en: { type: String, default: "" },
    ar: { type: String, default: "" }
  },
  categories: [
    {
      en: { type: String, default: "" },
      ar: { type: String, default: "" }
    }
  ],
  tags: [
    {
      en: { type: String, default: "" },
      ar: { type: String, default: "" }
    }
  ],
  question: {
    en: { type: String, required: true },
    ar: { type: String, required: true }
  },
  codeSnippet: { type: String, default: "" },
  examples: [{ type: String }],
  media: {
    image: { type: String, default: "" },
    video: { type: String, default: "" },
    audio: { type: String, default: "" }
  },
  options: [
    {
      id: { type: String },
      text: {
        en: { type: String, default: "" },
        ar: { type: String, default: "" }
      },
      isCorrect: { type: Boolean, default: false },
      feedback: {
        en: { type: String, default: "" },
        ar: { type: String, default: "" }
      }
    }
  ],
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Question", QuestionSchema);