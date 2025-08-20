import { Bed, Wifi, Car, Coffee, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import luxuryRoom from '@/assets/luxury-room.png';

const FeaturedRooms = () => {
  const rooms = [
    {
      id: 1,
      name: 'Luxury Suite',
      image: luxuryRoom,
      price: '৳12,000',
      rating: 4.9,
      reviews: 128,
      features: ['King Bed', 'City View', 'Mini Bar', 'Balcony'],
      amenities: [
        { icon: Wifi, label: 'Free WiFi' },
        { icon: Car, label: 'Free Parking' },
        { icon: Coffee, label: 'Mini Bar' },
        { icon: Bed, label: 'King Bed' },
      ],
    },
    {
      id: 2,
      name: 'Deluxe Room',
      image: luxuryRoom,
      price: '৳8,500',
      rating: 4.7,
      reviews: 95,
      features: ['Queen Bed', 'Garden View', 'Work Desk', 'AC'],
      amenities: [
        { icon: Wifi, label: 'Free WiFi' },
        { icon: Car, label: 'Free Parking' },
        { icon: Coffee, label: 'Coffee Maker' },
        { icon: Bed, label: 'Queen Bed' },
      ],
    },
    {
      id: 3,
      name: 'Executive Room',
      image: luxuryRoom,
      price: '৳10,200',
      rating: 4.8,
      reviews: 87,
      features: ['King Bed', 'River View', 'Living Area', 'Premium'],
      amenities: [
        { icon: Wifi, label: 'Free WiFi' },
        { icon: Car, label: 'Free Parking' },
        { icon: Coffee, label: 'Premium Bar' },
        { icon: Bed, label: 'King Bed' },
      ],
    },
  ];

  return (
    <section className="py-20 bg-gradient-warm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">
            Featured <span className="text-luxury">Accommodations</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover our carefully curated selection of rooms and suites, each designed for your ultimate comfort and relaxation.
          </p>
        </div>

        {/* Rooms Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {rooms.map((room, index) => (
            <Card 
              key={room.id} 
              className="card-elegant overflow-hidden group hover:scale-105 transition-transform duration-300"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Room Image */}
              <div className="relative overflow-hidden">
                <img
                  src={room.image}
                  alt={room.name}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                
                {/* Price Badge */}
                <div className="absolute top-4 right-4 bg-primary text-primary-foreground px-3 py-1 rounded-full font-semibold">
                  {room.price}/night
                </div>

                {/* Rating */}
                <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full flex items-center space-x-1">
                  <Star className="w-4 h-4 text-accent fill-current" />
                  <span className="font-semibold text-sm">{room.rating}</span>
                  <span className="text-muted-foreground text-sm">({room.reviews})</span>
                </div>
              </div>

              <CardContent className="p-6">
                {/* Room Name */}
                <h3 className="font-serif text-2xl font-bold text-foreground mb-3">
                  {room.name}
                </h3>

                {/* Features */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {room.features.map((feature) => (
                    <span
                      key={feature}
                      className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm font-medium"
                    >
                      {feature}
                    </span>
                  ))}
                </div>

                {/* Amenities */}
                <div className="grid grid-cols-2 gap-3 mb-6">
                  {room.amenities.map((amenity, idx) => (
                    <div key={idx} className="flex items-center space-x-2 text-muted-foreground">
                      <amenity.icon className="w-4 h-4 text-primary" />
                      <span className="text-sm">{amenity.label}</span>
                    </div>
                  ))}
                </div>

                {/* Actions */}
                <div className="flex space-x-3">
                  <Button variant="outline" className="flex-1 btn-elegant">
                    View Details
                  </Button>
                  <Button className="flex-1 btn-luxury">
                    Book Now
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* View All Rooms */}
        <div className="text-center mt-12">
          <Button variant="outline" size="lg" className="btn-elegant">
            View All Accommodations
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedRooms;