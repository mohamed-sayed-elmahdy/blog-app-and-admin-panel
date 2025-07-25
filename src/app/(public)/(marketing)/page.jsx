import HeroSection from '@/components/marketing/HeroSection';
import NewsLetterSection from '@/components/marketing/NewsLetterSection';
import LatestBlogSection from '@/components/blog/LatestBlogSection';
export default function MarketingHomePage() {
    return (
        <div>
            <HeroSection />
            <LatestBlogSection />
            <NewsLetterSection />
        </div>
    );
} 
