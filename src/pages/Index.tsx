import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import FeaturedRooms from '@/components/FeaturedRooms';
import RestaurantSection from '@/components/RestaurantSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <FeaturedRooms />
      <RestaurantSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
