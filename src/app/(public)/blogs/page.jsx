"use client";
import { useMemo, useState } from "react";
import BlogCard from "@/components/blog/BlogCard";
import CategoriesTabs from "@/components/blog/CategoriesTabs";
import { blog_data } from "@/assets/assets";

const sortOptions = ["Newest", "Oldest", "A-Z", "Z-A"];

export default function BlogsPage() {
  
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [sortBy, setSortBy] = useState("Newest");

  const filteredBlogs = useMemo(() => {
    let filtered =
      selectedCategory === "All"
        ? [...blog_data]
        : blog_data.filter((blog) => blog.category === selectedCategory);

    switch (sortBy) {
      case "Newest":
        filtered = filtered.sort((a, b) => new Date(b.date) - new Date(a.date));
        break;
      case "Oldest":
        filtered = filtered.sort((a, b) => new Date(a.date) - new Date(b.date));
        break;
      case "A-Z":
        filtered = filtered.sort((a, b) => a.title.localeCompare(b.title));
        break;
      case "Z-A":
        filtered = filtered.sort((a, b) => b.title.localeCompare(a.title));
        break;
      default:
        break;
    }
    return filtered;
  }, [selectedCategory, sortBy]);

  const handleCategoryClick = (category) => {
    if (category !== selectedCategory) setSelectedCategory(category);
  };

  return (
    <div className="max-w-[1480px] mx-auto mt-20 mb-36 px-4">
      <h1 className="text-5xl font-bold text-center text-[var(--text)] mb-10">
        All Blog Posts
      </h1>

      {/* Category Tabs */}
      <CategoriesTabs
        selectedCategory={selectedCategory}
        onCategorySelect={handleCategoryClick}
      />

      {/* Sort Options */}
      <div className="flex justify-end mb-8">
        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          className="border border-[var(--border-blur)] rounded-lg px-4 py-2 text-[var(--text)] bg-transparent focus:outline-none"
        >
          {sortOptions.map((option) => (
            <option key={option} value={option} className="text-black">
              Sort by {option}
            </option>
          ))}
        </select>
      </div>

      {/* Blog Cards */}
      <div className="flex flex-wrap gap-6 justify-center">
        {filteredBlogs.length > 0 ? (
          filteredBlogs.map((blog) => (
            <BlogCard
              key={blog.id}
              id={blog.id}
              title={blog.title}
              date={blog.date.toLocaleDateString("en-US", {
                day: "numeric",
                month: "short",
                year: "numeric",
              })}
              description={blog.description}
              category={blog.category}
              image={blog.image}
              author={blog.author}
              author_img={blog.author_img}
            />
          ))
        ) : (
          <p className="text-3xl text-[var(--text)] capitalize">
            No blogs found in this category.
          </p>
        )}
      </div>
    </div>
  );
}
