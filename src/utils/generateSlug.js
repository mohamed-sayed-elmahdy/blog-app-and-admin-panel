import Blog from "@/lib/models/BlogModel";

/**
 * Generate a unique slug for a blog post
 * @async
 * @param {string} titleEn - English title of the blog post
 * @returns {Promise<string>} unique slug for the blog post
 */

export async function generateUniqueSlug(titleEn) {
  const baseSlug = titleEn
    .toLowerCase()
    .replace(/[^a-z0-9]/g, "-")
    .replace(/-{2,}/g, "-")
    .replace(/^-+|-+$/g, "");

  let uniqueSlug = `${baseSlug}-${Date.now().toString(36)}`;

  // Check if slug exists
  const existingBlog = await Blog.findOne({ slug: uniqueSlug });
  if (existingBlog) uniqueSlug += `-${Math.floor(Math.random() * 1000)}`;

  return uniqueSlug;
}