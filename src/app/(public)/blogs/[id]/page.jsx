"use client";
import { use, useState, useEffect } from "react";
import Image from "next/image";
import Loading from "@/components/ui/Loading";
import Error from "@/components/ui/Error";
import { blog_data } from "@/assets/assets";
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";

export default function BlogPostPage({ params }) {
  const [blogData, setBlogData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("Blog not found");
  const { id } = use(params);

  const fetchBlogData = () => {
    const blog = blog_data.find((item) => item.id === Number(id));
    if (blog) {
      setBlogData(blog);
      setLoading(false);
    }
    else {
      setError("Blog not found");
      setLoading(false);
    }
  };


  useEffect(() => {
    fetchBlogData();
  }, []);

  if (loading) {
    return <Loading size="large" />;
  }
  if (!blogData) {
    return <Error message={error} onRetry={fetchBlogData} />;
  }

  return (
    <main className="text-[var(--text)] max-w-[var(--max-width)] mx-auto px-4 mt-20">
      <article className="text-center">
        <h1 className="text-2xl sm:text-4xl font-bold mb-6 max-w-[var(--blog-max-width)] mx-auto capitalize">{blogData.title}</h1>
        <p className="text-[var(--text-gray-400)] mb-4">By
          <Image src={blogData.author_img} alt="Author" width={20} height={20} className="inline-block rounded-full mx-1" />
          <span className="font-semibold capitalize"> {blogData.author}</span> on {blogData.date.toLocaleDateString("en-US", {
            day: "numeric",
            month: "short",
            year: "numeric",
          })}</p>
        <div className="mb-6 max-w-[var(--blog-max-width)] mx-auto rounded-2xl">
          <Image
            className="rounded-2xl w-full object-contain border-2 border-[var(--white-border)]"
            src={blogData.image}
            alt={`Image for ${blogData.title}`}
            width={100}
            height={50}
          />
        </div>
        <div className="flex items-start justify-between max-w-[var(--blog-max-width)] mx-auto mb-6">
          <p className="text-[var(--text-gray-400)] mb-4">Category: {blogData.category}</p>
          <p className="text-[var(--text-gray-400)] mb-4">Reading Time:  min</p>
        </div>

        <div className="content text-start mb-6 w-full max-w-[var(--blog-max-width)] mx-auto">
          <div className="mb-6">
            <h2 className="text-2xl font-semibold mb-1">Introduction</h2>
            <p>{blogData.description}</p>
          </div>
          <p>{blogData.content}</p>
          <h3 className="text-xl font-semibold mb-1">Step 1: Self-Reflection and Goal Setting</h3>
          <p>before you start, take a moment to reflect on your current situation and goals.</p>
          <h3 className="text-xl font-semibold mb-1">Step 2: Research and Planning</h3>
          <p>Research the skills and knowledge you need to acquire to achieve your goals.</p>
          <h3 className="text-xl font-semibold mb-1">Step 3: Create a Learning Plan</h3>
          <p>Based on your research, create a structured learning plan that outlines the topics you need to cover, the resources you'll use, and a timeline for your learning journey.</p>
          <h3 className="text-xl font-semibold mb-1">Step 4: Find Resources</h3>
          <p>Look for online courses, tutorials, books, and other resources that align with your learning plan. Websites like Coursera, Udemy, and Khan Academy offer a wide range of courses on various topics.</p>
          <h3 className="text-xl font-semibold mb-1">Step 5: Engage in Active Learning</h3>
          <p>As you go through your learning materials, engage in active learning techniques. Take notes, ask questions, and apply what you learn through hands-on projects or discussions.</p>
          <h3 className="text-xl font-semibold mb-1 mt-6">Conclusion</h3>
          <p>In conclusion, effective learning requires a proactive approach. By following these steps, you can create a personalized learning journey that aligns with your goals and helps you acquire the skills you need.</p>
        </div>
        <div className="flex flex-col items-start justify-center max-w-[var(--blog-max-width)] mx-auto my-10">
          <h3 className="text-xl font-semibold mb-2 capitalize">Share this post on social media</h3>
          <div className="flex gap-6 ">
            <button className="text-xl text-[var(--text)] bg px-4 py-4 rounded-full shadow-[0_3px_6px_var(--white)]"><FaFacebook /></button>
            <button className="text-xl text-[var(--text)] bg px-4 py-4 rounded-full shadow-[0_3px_6px_var(--white)]"><FaXTwitter /></button>
            <button className="text-xl text-[var(--text)] bg px-4 py-4 rounded-full shadow-[0_3px_6px_var(--white)]"><FaLinkedin /></button>
          </div>
        </div>
        <div className="mt-8">
          <h2 className="text-xl font-semibold">Comments</h2>

        </div>
      </article>
      <div className="mt-12 text-center">
        <h3 className="text-xl font-semibold">Related Posts</h3>
        <ul className="list-disc pl-5">

        </ul>
      </div>
    </main>
  );
}
