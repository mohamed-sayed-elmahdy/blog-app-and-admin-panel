"use client";
import { useState, useMemo } from "react";
import BlogCard from "@/components/blog/BlogCard";
import { blog_data } from "@/assets/assets";
import ButtonLink from "@/components/ui/ButtonLink";
import  CategoriesTabs  from "@/components/blog/CategoriesTabs"; 

function LatestBlogSection() {
  
  const [selectedCategory, setSelectedCategory] = useState("All");
  // function to filter blogs by category
  const filteredBlogs = useMemo(
    () =>
      selectedCategory === "All"
        ? [...blog_data]
        : blog_data.filter((blog) => blog.category === selectedCategory),
    [selectedCategory]
  );

  const handleCategoryClick = (category) => {
    if (category !== selectedCategory) setSelectedCategory(category);
  };

  return (
    <div className=" max-w-[1480px] sm:max-w-[1480px] mx-auto mt-20 mb-36 md:mb-32  px-2">
      <h2 className="text-5xl font-bold text-center text-[var(--text)] mb-10">
        Latest Blogs
      </h2>
      <CategoriesTabs
        selectedCategory={selectedCategory}
        onCategorySelect={handleCategoryClick}
      />
      <div className="flex items-center justify-center flex-wrap gap-4">
        {filteredBlogs.length > 0 ? (
          filteredBlogs.map((blog) => (
            <BlogCard
              key={blog.id}
              id={blog.id}
              title={blog.title}
               date={blog.date}
              description={blog.description}
              category={blog.category}
              image={blog.image}
              author={blog.author}
              author_img={blog.author_img}
            />
          ))
        ) : (
          <p className="text-[var(--text)] text-3xl my-10 capitalize">
            No blogs found in this category.
          </p>
        )}
      </div>
      <div className="flex items-center justify-center mt-10">
        <ButtonLink href="/blogs" className="px-6 py-2 bg-[var(--bg-white)] text-[var(--black-text)] rounded-lg hover:bg-[var(--bg-black)] hover:text-[var(--white-text)] border border-[var(--white-border)] transition-all duration-300">
          View All Blogs
        </ButtonLink>
      </div>
    </div>
  );
}

export default LatestBlogSection;
