import mongoose from "mongoose";
const { Schema, model, models } = mongoose;

const blogSchema = new Schema(
  {
    title: {
      en: { type: String, required: true },
      ar: { type: String, required: true },
    },
    category: {
      en: { type: String, required: true },
      ar: { type: String, required: true },
    },
    content: {
      en: { type: String, required: true },
      ar: { type: String, required: true },
    },
    author: { type: Schema.Types.ObjectId, ref: "User", required: true },
    authorName: {
      en: { type: String, required: true },
      ar: { type: String, required: true },
    },
    authorImage: { type: String },
    image: { type: String },
    likes: { type: Number, default: 0 },
    likedBy: [{ type: Schema.Types.ObjectId, ref: "User" }],
    views: { type: Number, default: 0 },
    readBy: [{ type: Schema.Types.ObjectId, ref: "User" }],
    tags: [
      {
        en: String,
        ar: String,
      },
    ],
    readLater: [{ type: Schema.Types.ObjectId, ref: "User" }],
    saved: [{ type: Schema.Types.ObjectId, ref: "User" }],
    pinned: { type: Boolean, default: false },
    status: {
      type: String,
      enum: ["draft", "published"],
      default: "draft",
    },
    publishedAt: { type: Date },
    slug: { type: String, unique: true, required: true },
    readingTime: { type: Number, default: 0 },
    comments: [
      {
        userId: { type: Schema.Types.ObjectId, ref: "User" },
        text: {
          en: { type: String, required: true },
          ar: { type: String, required: true },
        },
        createdAt: { type: Date, default: Date.now },
      },
    ],
  },
  { timestamps: true }
);

blogSchema.index({ slug: 1 });
blogSchema.index({ "tags.en": 1, "tags.ar": 1 });
blogSchema.index({ "category.en": 1, "category.ar": 1 });

// Middleware to calculate reading time before saving (English version used here)
blogSchema.pre("save", function (next) {
  const wordsPerMinute = 200;
  const words = this.content.en.split(/\s+/).length;
  this.readingTime = Math.ceil(words / wordsPerMinute);
  next();
});

const Blog = models.Blog || model("Blog", blogSchema);
export default Blog;
