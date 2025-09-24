"use client";
import React, { useState, useEffect, use } from "react";
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
  const [error, setError] = useState("");
  const idOrSlug =  use(params)?.id;

  const fetchBlogData = async () => {
    setLoading(true);
    setError("");
    try {
       await new Promise((r) => setTimeout(r, 300)); 
      const foundBlog = blog_data.find((b) => b.slug === idOrSlug || String(b.id) === idOrSlug);
      if (!foundBlog) {
        setError("Blog not found");
        setBlogData(null);
      } else {
        setBlogData(foundBlog);
      }
    } catch (err) {
      setError("Error fetching blog data");
      setBlogData(null);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBlogData();
  }, [idOrSlug]);

  if (loading) {
    return <Loading size="large" />;
  }
  if (!blogData) {
    return <Error message={error} onRetry={fetchBlogData} />;
  }

  const displayDate = new Date(blogData.publishedAt || blogData.createdAt);
  const formatDate = (d) => d.toLocaleDateString("en-US", { day: "numeric", month: "short", year: "numeric" });

  return (
    <main className="text-[var(--text)] max-w-[var(--max-width)] mx-auto px-4 mt-20">
      
    </main>
  );
}
