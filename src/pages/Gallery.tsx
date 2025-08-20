import { useState } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { Badge } from '@/components/ui/badge';
import { X, Instagram, Camera } from 'lucide-react';
import luxuryRoom from '@/assets/luxury-room.jpg';
import restaurantInterior from '@/assets/restaurant-interior.jpg';
import heroHotel from '@/assets/hero-hotel.jpg';

const Gallery = () => {
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const filters = [
    { id: 'all', label: 'All Photos', count: 24 },
    { id: 'rooms', label: 'Rooms', count: 8 },
    { id: 'events', label: 'Events', count: 6 },
    { id: 'restaurant', label: 'Restaurant', count: 7 },
    { id: 'nature', label: 'Nature', count: 3 }
  ];

  const galleryImages = [
    {
      id: 1,
      src: heroHotel,
      category: 'nature',
      title: 'Hotel Exterior',
      description: 'Beautiful view of Red Roof Inn Hotel'
    },
    {
      id: 2,
      src: luxuryRoom,
      category: 'rooms',
      title: 'Luxury Suite',
      description: 'Spacious luxury suite with modern amenities'
    },
    {
      id: 3,
      src: restaurantInterior,
      category: 'restaurant',
      title: 'Main Restaurant',
      description: 'Elegant dining space with beautiful ambiance'
    },
    {
      id: 4,
      src: luxuryRoom,
      category: 'rooms',
      title: 'Deluxe Room',
      description: 'Comfortable deluxe room with garden view'
    },
    {
      id: 5,
      src: restaurantInterior,
      category: 'events',
      title: 'Wedding Setup',
      description: 'Beautiful wedding arrangement in our banquet hall'
    },
    {
      id: 6,
      src: heroHotel,
      category: 'nature',
      title: 'Hotel Garden',
      description: 'Serene garden area for relaxation'
    },
    {
      id: 7,
      src: luxuryRoom,
      category: 'rooms',
      title: 'Executive Room',
      description: 'Premium executive room with river view'
    },
    {
      id: 8,
      src: restaurantInterior,
      category: 'restaurant',
      title: 'Juice Bar',
      description: 'Fresh juice bar with tropical atmosphere'
    },
    {
      id: 9,
      src: restaurantInterior,
      category: 'events',
      title: 'Conference Hall',
      description: 'Modern conference facility for business events'
    },
    {
      id: 10,
      src: luxuryRoom,
      category: 'rooms',
      title: 'Standard Room',
      description: 'Comfortable standard room with city view'
    },
    {
      id: 11,
      src: restaurantInterior,
      category: 'restaurant',
      title: 'Fine Dining',
      description: 'Exquisite fine dining experience'
    },
    {
      id: 12,
      src: heroHotel,
      category: 'nature',
      title: 'Poolside View',
      description: 'Relaxing poolside area with lounge chairs'
    },
    {
      id: 13,
      src: restaurantInterior,
      category: 'events',
      title: 'Birthday Celebration',
      description: 'Joyful birthday party setup'
    },
    {
      id: 14,
      src: luxuryRoom,
      category: 'rooms',
      title: 'Family Suite',
      description: 'Spacious family suite for comfortable stay'
    },
    {
      id: 15,
      src: restaurantInterior,
      category: 'restaurant',
      title: 'Buffet Setup',
      description: 'Lavish buffet arrangement for special occasions'
    },
    {
      id: 16,
      src: restaurantInterior,
      category: 'events',
      title: 'Corporate Event',
      description: 'Professional corporate event setup'
    },
    {
      id: 17,
      src: luxuryRoom,
      category: 'rooms',
      title: 'Honeymoon Suite',
      description: 'Romantic honeymoon suite with special amenities'
    },
    {
      id: 18,
      src: restaurantInterior,
      category: 'restaurant',
      title: 'Rooftop Dining',
      description: 'Open-air rooftop dining experience'
    },
    {
      id: 19,
      src: restaurantInterior,
      category: 'events',
      title: 'Anniversary Party',
      description: 'Elegant anniversary celebration'
    },
    {
      id: 20,
      src: luxuryRoom,
      category: 'rooms',
      title: 'Presidential Suite',
      description: 'Luxurious presidential suite with premium facilities'
    },
    {
      id: 21,
      src: restaurantInterior,
      category: 'restaurant',
      title: 'Private Dining',
      description: 'Intimate private dining room'
    },
    {
      id: 22,
      src: restaurantInterior,
      category: 'events',
      title: 'Graduation Party',
      description: 'Special graduation celebration setup'
    },
    {
      id: 23,
      src: luxuryRoom,
      category: 'rooms',
      title: 'Business Room',
      description: 'Modern business room with work facilities'
    },
    {
      id: 24,
      src: restaurantInterior,
      category: 'restaurant',
      title: 'Chef\'s Table',
      description: 'Exclusive chef\'s table dining experience'
    }
  ];

  const instagramPosts = [
    { id: 1, image: luxuryRoom, likes: '2.3k', caption: 'Luxury at its finest! ✨ #RedRoofInn #LuxuryStay' },
    { id: 2, image: restaurantInterior, likes: '1.8k', caption: 'Dining with elegance 🍽️ #FineDining #Restaurant' },
    { id: 3, image: heroHotel, likes: '3.1k', caption: 'Welcome to paradise 🏨 #Hotel #Malaysia' },
    { id: 4, image: luxuryRoom, likes: '1.5k', caption: 'Sweet dreams in our cozy rooms 😴 #ComfortStay' },
    { id: 5, image: restaurantInterior, likes: '2.7k', caption: 'Cheers to good times! 🥂 #JuiceBar #Fresh' },
    { id: 6, image: heroHotel, likes: '1.9k', caption: 'Sunset views from our terrace 🌅 #Views' }
  ];

  const filteredImages = selectedFilter === 'all' 
    ? galleryImages 
    : galleryImages.filter(image => image.category === selectedFilter);

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-hero py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="font-serif text-4xl md:text-6xl font-bold text-foreground mb-6">
              Photo <span className="text-luxury">Gallery</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Explore our stunning collection of images showcasing the beauty, elegance, 
              and luxury that awaits you at Red Roof Inn Hotel & Restaurants.
            </p>
          </div>
        </section>

        {/* Filter Tabs */}
        <section className="py-12 bg-background sticky top-20 z-40 border-b">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap justify-center gap-4">
              {filters.map((filter) => (
                <Button
                  key={filter.id}
                  variant={selectedFilter === filter.id ? "default" : "outline"}
                  onClick={() => setSelectedFilter(filter.id)}
                  className="btn-elegant"
                >
                  {filter.label}
                  <Badge variant="secondary" className="ml-2">
                    {filter.count}
                  </Badge>
                </Button>
              ))}
            </div>
          </div>
        </section>

        {/* Gallery Grid */}
        <section className="py-20 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredImages.map((image, index) => (
                <Dialog key={image.id}>
                  <DialogTrigger asChild>
                    <div 
                      className="relative group cursor-pointer overflow-hidden rounded-lg card-elegant animate-fade-in"
                      style={{ animationDelay: `${index * 0.05}s` }}
                    >
                      <img
                        src={image.src}
                        alt={image.title}
                        className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      
                      {/* Hover Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="absolute bottom-4 left-4 right-4 text-white">
                          <h3 className="font-semibold text-lg mb-1">{image.title}</h3>
                          <p className="text-sm opacity-90">{image.description}</p>
                        </div>
                        
                        <div className="absolute top-4 right-4">
                          <Camera className="w-6 h-6 text-white" />
                        </div>
                      </div>
                    </div>
                  </DialogTrigger>
                  
                  <DialogContent className="max-w-4xl p-0">
                    <div className="relative">
                      <img
                        src={image.src}
                        alt={image.title}
                        className="w-full h-auto max-h-[80vh] object-contain"
                      />
                      <div className="p-6">
                        <h3 className="font-serif text-2xl font-bold text-foreground mb-2">
                          {image.title}
                        </h3>
                        <p className="text-muted-foreground">
                          {image.description}
                        </p>
                      </div>
                    </div>
                  </DialogContent>
                </Dialog>
              ))}
            </div>
          </div>
        </section>

        {/* Instagram Feed */}
        <section className="py-20 bg-gradient-warm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <div className="flex items-center justify-center mb-4">
                <Instagram className="w-8 h-8 text-luxury mr-3" />
                <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground">
                  Follow Us on <span className="text-luxury">Instagram</span>
                </h2>
              </div>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Stay connected with our latest updates, special moments, and behind-the-scenes content
              </p>
              <p className="text-primary font-semibold mt-2">@redroofinnMalaysia</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {instagramPosts.map((post, index) => (
                <div 
                  key={post.id}
                  className="relative group cursor-pointer overflow-hidden rounded-lg card-elegant animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <img
                    src={post.image}
                    alt={`Instagram post ${post.id}`}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  
                  {/* Instagram Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4 right-4 text-white">
                      <div className="flex items-center mb-2">
                        <Instagram className="w-4 h-4 mr-2" />
                        <span className="text-sm font-semibold">{post.likes} likes</span>
                      </div>
                      <p className="text-sm opacity-90 line-clamp-2">{post.caption}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <Button variant="outline" size="lg" className="btn-elegant">
                <Instagram className="w-5 h-5 mr-2" />
                Follow @redroofinnMalaysia
              </Button>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20 bg-gradient-hero text-white">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6">
              Experience the <span className="text-luxury">Magic</span> Yourself
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Book your stay today and create your own memorable moments at Red Roof Inn
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="outline" className="btn-elegant text-lg px-8 py-3 border-white text-white hover:bg-white hover:text-primary">
                View Rooms
              </Button>
              <Button size="lg" className="btn-luxury text-lg px-8 py-3">
                Book Now
              </Button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Gallery;