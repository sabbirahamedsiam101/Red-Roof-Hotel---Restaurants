import { useState } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Wifi, Car, Coffee, Bed, Users, Gamepad2, Utensils, Bath, Tv, Wind } from 'lucide-react';
import luxuryRoom from '@/assets/luxury-room.png';

const Accommodations = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const rooms = [
    {
      id: 1,
      name: 'Luxury Suite',
      category: 'suites',
      image: luxuryRoom,
      price: '৳12,000',
      amenities: ['King Bed', 'City View', 'Mini Bar', 'Balcony', 'Free WiFi', 'AC'],
      icons: [Bed, Wifi, Coffee, Wind, Tv, Bath],
      description: 'Spacious luxury suite with panoramic city views, premium amenities, and elegant furnishings for the ultimate comfort experience.',
      features: ['50 sqm', 'King Size Bed', 'Living Area', 'Work Desk', 'Premium Bathroom', 'Mini Bar']
    },
    {
      id: 2,
      name: 'Deluxe Room',
      category: 'deluxe',
      image: luxuryRoom,
      price: '৳8,500',
      amenities: ['Queen Bed', 'Garden View', 'Work Desk', 'AC', 'Free WiFi'],
      icons: [Bed, Wifi, Wind, Tv, Bath],
      description: 'Comfortable deluxe room with modern amenities and beautiful garden views, perfect for business and leisure travelers.',
      features: ['35 sqm', 'Queen Size Bed', 'Garden View', 'Work Station', 'Modern Bathroom', 'Coffee Maker']
    },
    {
      id: 3,
      name: 'Standard Room',
      category: 'standard',
      image: luxuryRoom,
      price: '৳5,500',
      amenities: ['Double Bed', 'City View', 'AC', 'Free WiFi'],
      icons: [Bed, Wifi, Wind, Tv],
      description: 'Well-appointed standard room with essential amenities and comfortable furnishings for a pleasant stay.',
      features: ['25 sqm', 'Double Bed', 'City View', 'Modern Bathroom', 'Work Desk', 'Cable TV']
    },
    {
      id: 4,
      name: 'Conference Hall A',
      category: 'halls',
      image: luxuryRoom,
      price: '৳15,000',
      amenities: ['50 Capacity', 'Projector', 'AC', 'Catering', 'WiFi'],
      icons: [Users, Tv, Wind, Wifi, Coffee],
      description: 'Modern conference hall equipped with latest technology and professional setup for successful business meetings.',
      features: ['100 sqm', '50 Person Capacity', 'Audio/Visual Equipment', 'Catering Service', 'Parking Available']
    },
    {
      id: 5,
      name: 'Kids Play Zone',
      category: 'kids',
      image: luxuryRoom,
      price: '৳2,000',
      amenities: ['Safe Play Area', 'Supervised', 'Games', 'Snacks'],
      icons: [Gamepad2, Users, Utensils, Car],
      description: 'Safe and fun play area for children with supervised activities, games, and snack services.',
      features: ['Supervised Activities', 'Indoor Games', 'Safe Environment', 'Snack Bar', 'Age-Appropriate Toys']
    },
    {
      id: 6,
      name: 'Banquet Hall',
      category: 'halls',
      image: luxuryRoom,
      price: '৳25,000',
      amenities: ['200 Capacity', 'Stage', 'Catering', 'Decoration', 'Parking'],
      icons: [Users, Utensils, Car, Wind, Tv],
      description: 'Grand banquet hall perfect for weddings, celebrations, and large events with full-service catering.',
      features: ['300 sqm', '200 Person Capacity', 'Professional Stage', 'Full Catering', 'Event Planning']
    }
  ];

  const categories = [
    { id: 'all', label: 'All Rooms' },
    { id: 'standard', label: 'Standard' },
    { id: 'deluxe', label: 'Deluxe' },
    { id: 'suites', label: 'Suites' },
    { id: 'halls', label: 'Hall Rooms' },
    { id: 'kids', label: 'Kids Zone' }
  ];

  const filteredRooms = selectedCategory === 'all' 
    ? rooms 
    : rooms.filter(room => room.category === selectedCategory);

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-hero py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="font-serif text-4xl md:text-6xl font-bold text-foreground mb-6">
              Our <span className="text-luxury">Accommodations</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Discover our range of luxurious rooms, suites, and facilities designed to provide 
              the perfect blend of comfort, elegance, and modern amenities.
            </p>
          </div>
        </section>

        {/* Category Filters */}
        <section className="py-12 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {categories.map((category) => (
                <Button
                  key={category.id}
                  variant={selectedCategory === category.id ? "default" : "outline"}
                  onClick={() => setSelectedCategory(category.id)}
                  className="btn-elegant"
                >
                  {category.label}
                </Button>
              ))}
            </div>

            {/* Rooms Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredRooms.map((room, index) => (
                <Card 
                  key={room.id}
                  className="card-elegant overflow-hidden group hover:scale-105 transition-all duration-300 animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {/* Room Image */}
                  <div className="relative overflow-hidden">
                    <img
                      src={room.image}
                      alt={room.name}
                      className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute top-4 right-4 bg-primary text-primary-foreground px-3 py-1 rounded-full font-semibold">
                      {room.price}/night
                    </div>
                  </div>

                  <CardContent className="p-6">
                    <h3 className="font-serif text-2xl font-bold text-foreground mb-3">
                      {room.name}
                    </h3>

                    {/* Amenities Icons */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {room.icons.map((Icon, idx) => (
                        <div key={idx} className="flex items-center space-x-1 text-muted-foreground">
                          <Icon className="w-4 h-4 text-primary" />
                        </div>
                      ))}
                    </div>

                    {/* Amenities Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {room.amenities.slice(0, 3).map((amenity) => (
                        <Badge key={amenity} variant="secondary" className="text-xs">
                          {amenity}
                        </Badge>
                      ))}
                    </div>

                    {/* Actions */}
                    <div className="flex space-x-3">
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button variant="outline" className="flex-1 btn-elegant">
                            View Details
                          </Button>
                        </DialogTrigger>
                        <DialogContent className="max-w-2xl">
                          <DialogHeader>
                            <DialogTitle className="font-serif text-2xl">{room.name}</DialogTitle>
                          </DialogHeader>
                          <div className="space-y-6">
                            <img
                              src={room.image}
                              alt={room.name}
                              className="w-full h-64 object-cover rounded-lg"
                            />
                            <p className="text-muted-foreground">{room.description}</p>
                            <div>
                              <h4 className="font-semibold mb-2">Features</h4>
                              <div className="grid grid-cols-2 gap-2">
                                {room.features.map((feature) => (
                                  <div key={feature} className="flex items-center space-x-2">
                                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                                    <span className="text-sm">{feature}</span>
                                  </div>
                                ))}
                              </div>
                            </div>
                            <div className="flex justify-between items-center pt-4 border-t">
                              <span className="text-2xl font-bold text-primary">{room.price}/night</span>
                              <Button className="btn-luxury">Book Now</Button>
                            </div>
                          </div>
                        </DialogContent>
                      </Dialog>
                      <Button className="flex-1 btn-luxury">
                        Book Now
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Accommodations;