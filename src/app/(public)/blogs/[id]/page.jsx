import {useState, useEffect} from 'react';
import Loading from '@/components/ui/Loading';
import Error from '@/components/ui/Error';
import Image from 'next/image';
import { blog_data } from '@/assets/assets';

export default function BlogPostPage({ params }) {
    const [blogData, setBlogData] = useState(null);
    const [loading, setLoading] = useState(true);
    const { id } = params;

    const fetchBlogData = async () => {

    }
    useEffect(() => {

        fetchBlogData();
    }, [id]);

    if (loading) {
        return  <Loading />;
    }

    if (!blogData) {
        return <Error />;
    }

    return (
        <main className="text-[var(--text)]">
            <article className="container mx-auto px-4 py-20">
    
            </article>
        </main>
    );
} 