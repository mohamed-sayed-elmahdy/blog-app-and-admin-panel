"use client";
import React from 'react'
import { useParams } from 'next/navigation'
import { useBlogById } from '@/hooks/useBlogById'
import { useLocale } from 'next-intl';
function Page() {
    const { id } = useParams();
    const locale = useLocale();
    const { data: blog, isLoading, error } = useBlogById(id);
    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error: {error.message}</div>;
  return (
    <div>
        <h1>{blog.title[locale]}</h1> 
        <p>{blog.content[locale]}</p>
    </div>
  )
}

export default Page;