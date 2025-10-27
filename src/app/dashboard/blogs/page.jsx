"use client";
import CategoriesTabs from "@/components/blog/CategoriesTabs";
import BlogCard from "@/components/blog/BlogCard";
import CategorySkeleton from "@/components/skeleton/blogsSkeleton/CategorySkeleton";
import { useFetchCategories } from "@/hooks/useFetchCategories";
import { useFetchBlogs } from "@/hooks/useFetchBlogs";
import { useState, useCallback } from "react";

function Blogs() {
    const { data: categories, isLoading: categoriesLoading, error: categoriesError } = useFetchCategories();
    const { data: blogs, isLoading: blogsLoading, error: blogsError } = useFetchBlogs();
    const [selectedCategory, setSelectedCategory] = useState("All");
    const filteredBlogs = selectedCategory !== "All" ? blogs?.filter(blog => blog.category["en"] === selectedCategory) : blogs;
    const handleCategoryClick = useCallback((category) => {
        if (category !== selectedCategory) setSelectedCategory(category);
    }, [selectedCategory]);

    if (!categoriesLoading && (!categories || categories.length === 0)) {
        return <p>No categories found</p>;
    }
    if (categoriesError) return <p>Can&#39;t load categories</p>;
    if (!blogsLoading && (!blogs || blogs.length === 0)) {
        return <p>No blogs found</p>;
    }
    if (blogsError) return <p>Can&#39;t load blogs</p>;
    console.log(categories, blogs, filteredBlogs);
    return (
        <div>
            {categoriesLoading ? <CategorySkeleton /> : <CategoriesTabs categories={categories} selectedCategory={selectedCategory} onCategorySelect={handleCategoryClick} />}
            <div className="mt-6">
                {selectedCategory !== "All" ? (
                    <p className="text-[var(--text)] text-2xl my-4 capitalize font-bold">Showing blogs for category: {selectedCategory}</p>
                ) : (
                    <p className="text-[var(--text)] text-2xl my-4 capitalize font-bold">Showing all blogs</p>
                )}
            </div>
            <div className="flex flex-wrap gap-4">
            {blogsLoading ? <CategorySkeleton /> : filteredBlogs?.length > 0 ? (
                filteredBlogs.map((blog, index) => (
                    <BlogCard 
                        key={index} 
                        id={blog._id}
                        title={blog.title}
                        content={blog.content}
                        createdAt={blog.createdAt}
                        description={blog.description}
                        category={blog.category}
                        image={blog.image}
                        authorName={blog.authorName}
                        authorImage={blog.authorImage}
                        likes={blog.likes}
                        pinned={blog.pinned} 
                        path={`/dashboard/blogs/${blog._id}`}
                        />
                ))
            ) : (
                <p>No blogs found</p>
            )}
            </div>
        </div>
    )
}

export default Blogs;