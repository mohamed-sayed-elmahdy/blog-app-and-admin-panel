"use client";
import { useState } from "react";
import BlogCard from "@/components/blog/BlogCard";
import ButtonLink from "@/components/ui/ButtonLink";
import CategoriesTabs from "@/components/blog/CategoriesTabs";
import { useFetchCategories } from "@/hooks/useFetchCategories";
import { useFetchBlogs } from "@/hooks/useFetchBlogs";
import CategorySkeleton from "@/components/skeleton/blogsSkeleton/CategorySkeleton";
function LatestBlogSection() {

  const [selectedCategory, setSelectedCategory] = useState("All");
  const { data: categories, isLoading: categoriesLoading, error: categoriesError } = useFetchCategories();
  // function to filter blogs by category
  const { data: blogs, isLoading: blogsLoading, error: blogsError } = useFetchBlogs();
  const filteredBlogs = selectedCategory !== "All" ? blogs?.filter(blog => blog.category["en"] === selectedCategory) : blogs;

  const handleCategoryClick = (category) => {
    if (category !== selectedCategory) setSelectedCategory(category);
  };

  return (
    <div className=" max-w-[1480px] sm:max-w-[1480px] mx-auto mt-20 mb-36 md:mb-32  px-2">
      <h2 className="text-5xl font-bold text-center text-[var(--text)] mb-6">
        Latest Blogs
      </h2>
      <CategoriesTabs
        categories={categories}
        selectedCategory={selectedCategory}
        onCategorySelect={handleCategoryClick}
      />
      <div className="flex items-center justify-center flex-wrap gap-4">
        {blogsLoading ? <CategorySkeleton /> : blogsError ? (
          <p className="text-[var(--text)] text-3xl my-10 capitalize">
            No blogs found in this category.
          </p>
        ) : filteredBlogs.length > 0 ? (
          filteredBlogs.map((blog) => (
            <BlogCard
              key={blog.id}
              id={blog.id}
              title={blog.title}
              date={blog.publishedAt || blog.createdAt} 
              description={blog.content.slice(0, 95) + "..."} 
              category={blog.category}
              image={blog.image}
              author={blog.authorName}
              author_img={blog.author_img}
              likes={blog.likes}
              pinned={blog.pinned}
              path={`/blogs/${blog.id}`}
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
