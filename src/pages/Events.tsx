import { useState } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Calendar } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Calendar as CalendarIcon, Users, Utensils, Car, Wifi, Tv, Check } from 'lucide-react';
import { format } from 'date-fns';
import restaurantInterior from '@/assets/restaurant-interior.png';

const Events = () => {
  const [selectedDate, setSelectedDate] = useState<Date>();
  const [selectedHall, setSelectedHall] = useState('');

  const eventHalls = [
    {
      id: 1,
      name: 'Grand Ballroom',
      capacity: '200-300 guests',
      area: '500 sqm',
      price: '৳35,000/day',
      image: restaurantInterior,
      amenities: ['Stage Setup', 'Audio/Visual', 'Catering Kitchen', 'Parking for 100 cars', 'AC', 'WiFi'],
      icons: [Users, Tv, Utensils, Car, Wifi]
    },
    {
      id: 2,
      name: 'Conference Hall A',
      capacity: '50-80 guests',
      area: '150 sqm',
      price: '৳15,000/day',
      image: restaurantInterior,
      amenities: ['Projector Setup', 'Sound System', 'Coffee Service', 'Parking', 'AC', 'WiFi'],
      icons: [Users, Tv, Utensils, Car, Wifi]
    },
    {
      id: 3,
      name: 'Meeting Room B',
      capacity: '20-30 guests',
      area: '80 sqm',
      price: '৳8,000/day',
      image: restaurantInterior,
      amenities: ['LED Display', 'Conference Phone', 'Tea/Coffee', 'Parking', 'AC', 'WiFi'],
      icons: [Users, Tv, Utensils, Car, Wifi]
    },
    {
      id: 4,
      name: 'Rooftop Terrace',
      capacity: '100-150 guests',
      area: '300 sqm',
      price: '৳25,000/day',
      image: restaurantInterior,
      amenities: ['Open Air', 'Garden Setup', 'Bar Service', 'City View', 'Lighting', 'Sound System'],
      icons: [Users, Tv, Utensils, Car]
    }
  ];

  const packages = [
    {
      name: 'Corporate Package',
      price: '৳12,000',
      duration: 'Full Day',
      includes: [
        'Meeting Hall Rental',
        'Audio/Visual Equipment',
        'Welcome Coffee/Tea',
        'Lunch for 30 people',
        'Afternoon Tea Break',
        'Parking Facility',
        'WiFi Access',
        'Stationery Kit'
      ]
    },
    {
      name: 'Wedding Package',
      price: '৳45,000',
      duration: 'Full Day',
      includes: [
        'Grand Ballroom Rental',
        'Stage & Decoration',
        'Bridal Suite Access',
        'Photography Setup',
        'Catering for 200 guests',
        'Wedding Cake',
        'Parking for 100 cars',
        'Event Coordination'
      ]
    },
    {
      name: 'Birthday Celebration',
      price: '৳18,000',
      duration: 'Half Day',
      includes: [
        'Party Hall Rental',
        'Decoration Setup',
        'Birthday Cake',
        'Catering for 50 guests',
        'Entertainment System',
        'Photography Corner',
        'Parking Facility',
        'Event Staff'
      ]
    }
  ];

  const weddingGallery = [
    restaurantInterior,
    restaurantInterior,
    restaurantInterior,
    restaurantInterior,
    restaurantInterior,
    restaurantInterior
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative h-[70vh] flex items-center justify-center">
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${restaurantInterior})`
            }}
          />
          <div className="relative z-10 text-center text-white px-4">
            <h1 className="font-serif text-5xl md:text-7xl font-bold mb-6">
              Events & <span className="text-luxury">Conferences</span>
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto mb-8">
              Create unforgettable memories in our elegant event spaces designed for every occasion
            </p>
          </div>
        </section>

        {/* Event Halls */}
        <section className="py-20 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">
                Our <span className="text-luxury">Event Halls</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Choose from our versatile venues equipped with modern amenities for any occasion
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {eventHalls.map((hall, index) => (
                <Card 
                  key={hall.id}
                  className="card-elegant overflow-hidden group hover:scale-105 transition-all duration-300 animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={hall.image}
                      alt={hall.name}
                      className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute top-4 right-4 bg-primary text-primary-foreground px-3 py-2 rounded-full font-semibold">
                      {hall.price}
                    </div>
                  </div>

                  <CardContent className="p-6">
                    <h3 className="font-serif text-2xl font-bold text-foreground mb-2">
                      {hall.name}
                    </h3>
                    
                    <div className="flex items-center justify-between text-muted-foreground mb-4">
                      <span className="flex items-center">
                        <Users className="w-4 h-4 mr-1" />
                        {hall.capacity}
                      </span>
                      <span>{hall.area}</span>
                    </div>

                    {/* Amenities Icons */}
                    <div className="flex space-x-3 mb-4">
                      {hall.icons.map((Icon, idx) => (
                        <Icon key={idx} className="w-5 h-5 text-primary" />
                      ))}
                    </div>

                    {/* Amenities List */}
                    <div className="grid grid-cols-2 gap-1 mb-6 text-sm text-muted-foreground">
                      {hall.amenities.map((amenity) => (
                        <div key={amenity} className="flex items-center">
                          <Check className="w-3 h-3 text-primary mr-1" />
                          {amenity}
                        </div>
                      ))}
                    </div>

                    <Button className="w-full btn-luxury">
                      Book This Hall
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Conference Packages */}
        <section className="py-20 bg-gradient-warm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">
                Event <span className="text-luxury">Packages</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Complete packages tailored for different occasions with everything you need
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {packages.map((pkg, index) => (
                <Card 
                  key={pkg.name}
                  className="card-elegant group hover:scale-105 transition-all duration-300 animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardHeader className="text-center pb-4">
                    <CardTitle className="font-serif text-2xl text-foreground">
                      {pkg.name}
                    </CardTitle>
                    <div className="text-3xl font-bold text-primary mt-2">
                      {pkg.price}
                    </div>
                    <p className="text-muted-foreground">{pkg.duration}</p>
                  </CardHeader>

                  <CardContent className="pt-0">
                    <div className="space-y-3">
                      {pkg.includes.map((item) => (
                        <div key={item} className="flex items-center text-sm">
                          <Check className="w-4 h-4 text-primary mr-2 flex-shrink-0" />
                          {item}
                        </div>
                      ))}
                    </div>
                    
                    <Button className="w-full mt-6 btn-elegant">
                      Choose Package
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Wedding Gallery */}
        <section className="py-20 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">
                Wedding & <span className="text-luxury">Celebrations</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Celebrate your special moments in our beautiful venues with perfect arrangements
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {weddingGallery.map((image, index) => (
                <div 
                  key={index}
                  className="relative overflow-hidden rounded-lg card-elegant group animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <img
                    src={image}
                    alt={`Wedding celebration ${index + 1}`}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Booking Form */}
        <section className="py-20 bg-gradient-hero">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="font-serif text-4xl md:text-5xl font-bold text-white mb-4">
                Book Your <span className="text-luxury">Event</span>
              </h2>
              <p className="text-xl text-white/90 max-w-2xl mx-auto">
                Fill out the form below and our event planning team will get in touch with you
              </p>
            </div>

            <Card className="card-elegant">
              <CardContent className="p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="name">Full Name</Label>
                      <Input id="name" placeholder="Enter your full name" />
                    </div>
                    
                    <div>
                      <Label htmlFor="email">Email Address</Label>
                      <Input id="email" type="email" placeholder="Enter your email" />
                    </div>
                    
                    <div>
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input id="phone" placeholder="Enter your phone number" />
                    </div>
                    
                    <div>
                      <Label htmlFor="guests">Number of Guests</Label>
                      <Input id="guests" type="number" placeholder="Expected number of guests" />
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <Label>Event Hall</Label>
                      <Select value={selectedHall} onValueChange={setSelectedHall}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select event hall" />
                        </SelectTrigger>
                        <SelectContent>
                          {eventHalls.map((hall) => (
                            <SelectItem key={hall.id} value={hall.name}>
                              {hall.name} ({hall.capacity})
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div>
                      <Label>Event Date</Label>
                      <Popover>
                        <PopoverTrigger asChild>
                          <Button
                            variant="outline"
                            className="w-full justify-start text-left font-normal"
                          >
                            <CalendarIcon className="mr-2 h-4 w-4" />
                            {selectedDate ? format(selectedDate, "PPP") : "Pick a date"}
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0">
                          <Calendar
                            mode="single"
                            selected={selectedDate}
                            onSelect={setSelectedDate}
                            initialFocus
                          />
                        </PopoverContent>
                      </Popover>
                    </div>
                    
                    <div>
                      <Label htmlFor="eventType">Event Type</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select event type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="wedding">Wedding</SelectItem>
                          <SelectItem value="conference">Conference</SelectItem>
                          <SelectItem value="birthday">Birthday Party</SelectItem>
                          <SelectItem value="corporate">Corporate Event</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div>
                      <Label htmlFor="message">Special Requirements</Label>
                      <Textarea 
                        id="message" 
                        placeholder="Tell us about your special requirements..."
                        className="h-20"
                      />
                    </div>
                  </div>
                </div>

                <div className="mt-8 text-center">
                  <Button size="lg" className="btn-luxury px-12">
                    Submit Booking Request
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Events;