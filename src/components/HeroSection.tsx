import { useState } from 'react';
import { Calendar, Users, MapPin, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import heroImage from '@/assets/hero-hotel.png';

const HeroSection = () => {
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const [guests, setGuests] = useState('');

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 hero-overlay" />
      
      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Text */}
        <div className="mb-12 animate-fade-in">
          <h1 className="font-serif text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Welcome to
            <span className="block text-luxury bg-gradient-to-r from-accent to-white bg-clip-text text-transparent">
              Red Roof Inn
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-white/90 font-light mb-2">
            Hotel & Restaurants, Malaysia
          </p>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            Experience luxury and comfort in the heart of Malaysia. Where elegance meets hospitality.
          </p>
        </div>

        {/* Booking Form */}
        <div className="card-elegant p-8 max-w-4xl mx-auto animate-slide-up">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-end">
            {/* Check-in */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground flex items-center">
                <Calendar className="w-4 h-4 mr-2 text-primary" />
                Check-in
              </label>
              <Input
                type="date"
                value={checkIn}
                onChange={(e) => setCheckIn(e.target.value)}
                className="bg-background border-border"
              />
            </div>

            {/* Check-out */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground flex items-center">
                <Calendar className="w-4 h-4 mr-2 text-primary" />
                Check-out
              </label>
              <Input
                type="date"
                value={checkOut}
                onChange={(e) => setCheckOut(e.target.value)}
                className="bg-background border-border"
              />
            </div>

            {/* Guests */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground flex items-center">
                <Users className="w-4 h-4 mr-2 text-primary" />
                Guests
              </label>
              <Select value={guests} onValueChange={setGuests}>
                <SelectTrigger className="bg-background border-border">
                  <SelectValue placeholder="Select guests" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1">1 Guest</SelectItem>
                  <SelectItem value="2">2 Guests</SelectItem>
                  <SelectItem value="3">3 Guests</SelectItem>
                  <SelectItem value="4">4 Guests</SelectItem>
                  <SelectItem value="5">5+ Guests</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Search Button */}
            <Button className="btn-luxury h-12">
              <Search className="w-5 h-5 mr-2" />
              Search Rooms
            </Button>
          </div>
        </div>

        {/* Location */}
        <div className="mt-8 flex items-center justify-center text-white/80 animate-fade-in">
          <MapPin className="w-5 h-5 mr-2" />
          <span>Located in the heart of Malaysia, Bangladesh</span>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-1 h-16 bg-white/30 rounded-full">
          <div className="w-1 h-8 bg-white rounded-full animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;