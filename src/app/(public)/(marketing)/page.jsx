import HeroSection from '@/components/marketing/HeroSection';
import NewsLetterSection from '@/components/marketing/NewsLetterSection';
import LatestBlogSection from '@/components/blog/LatestBlogSection';
import LatestIntervQSection from '@/components/interviews/LatestIntervQSection';


export default function MarketingHomePage() {
    return (
        <>
            <HeroSection />
      
            <LatestBlogSection />
            <LatestIntervQSection />
            <NewsLetterSection />

        </>
    );
} 
