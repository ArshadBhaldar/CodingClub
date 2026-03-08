import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import DomainsSection from '../components/DomainsSection';
import TimelineSection from '../components/TimelineSection';
import PrizesSection from '../components/PrizesSection';
import SponsorsSection from '../components/SponsorsSection';
import FAQSection from '../components/FAQSection';
import Footer from '../components/Footer';

export default function Home() {
    return (
        <main className="bg-background min-h-screen">
            <Navbar />
            <HeroSection />
            <DomainsSection />
            <TimelineSection />
            <PrizesSection />
            <SponsorsSection />
            <FAQSection />
            <Footer />
        </main>
    );
}
