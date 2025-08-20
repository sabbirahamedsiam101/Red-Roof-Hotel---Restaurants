import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Clock, Users, Star } from 'lucide-react';
import restaurantInterior from '@/assets/restaurant-interior.jpg';

const Restaurants = () => {
  const featuredDishes = [
    {
      id: 1,
      name: 'Hilsa Fish Curry',
      description: 'Traditional Bengali hilsa curry with mustard and coconut',
      price: '৳850',
      image: restaurantInterior,
      rating: 4.8,
      time: '25 min'
    },
    {
      id: 2,
      name: 'Beef Biryani',
      description: 'Aromatic basmati rice with tender beef and special spices',
      price: '৳650',
      image: restaurantInterior,
      rating: 4.9,
      time: '35 min'
    },
    {
      id: 3,
      name: 'Grilled Chicken',
      description: 'Perfectly grilled chicken with herbs and vegetables',
      price: '৳750',
      image: restaurantInterior,
      rating: 4.7,
      time: '20 min'
    },
    {
      id: 4,
      name: 'Thai Fish Curry',
      description: 'Spicy Thai-style fish curry with coconut milk',
      price: '৳680',
      image: restaurantInterior,
      rating: 4.6,
      time: '30 min'
    }
  ];

  const juiceBarMenu = [
    {
      id: 1,
      name: 'Fresh Orange Juice',
      description: 'Freshly squeezed orange juice',
      price: '৳180',
      color: 'from-orange-400 to-orange-600'
    },
    {
      id: 2,
      name: 'Mango Smoothie',
      description: 'Creamy mango smoothie with yogurt',
      price: '৳220',
      color: 'from-yellow-400 to-orange-500'
    },
    {
      id: 3,
      name: 'Green Detox',
      description: 'Spinach, apple, and cucumber blend',
      price: '৳250',
      color: 'from-green-400 to-green-600'
    },
    {
      id: 4,
      name: 'Berry Blast',
      description: 'Mixed berries with banana and honey',
      price: '৳280',
      color: 'from-purple-400 to-pink-600'
    }
  ];

  const galleryImages = [
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
              backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url(${restaurantInterior})`
            }}
          />
          <div className="relative z-10 text-center text-white px-4">
            <h1 className="font-serif text-5xl md:text-7xl font-bold mb-6">
              Restaurants & <span className="text-luxury">Juice Bar</span>
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto mb-8">
              Experience authentic flavors and refreshing beverages in our elegant dining spaces
            </p>
            <Button size="lg" className="btn-luxury text-lg px-8 py-3">
              Reserve a Table
            </Button>
          </div>
        </section>

        {/* Featured Dishes */}
        <section className="py-20 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">
                Featured <span className="text-luxury">Dishes</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Savor our signature dishes crafted by expert chefs using the finest ingredients
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {featuredDishes.map((dish, index) => (
                <Card 
                  key={dish.id}
                  className="card-elegant overflow-hidden group hover:scale-105 transition-all duration-300 animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={dish.image}
                      alt={dish.name}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute top-4 right-4 bg-primary text-primary-foreground px-2 py-1 rounded-full text-sm font-semibold">
                      {dish.price}
                    </div>
                  </div>

                  <CardContent className="p-6">
                    <h3 className="font-serif text-xl font-bold text-foreground mb-2">
                      {dish.name}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-4">
                      {dish.description}
                    </p>

                    <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                      <div className="flex items-center space-x-1">
                        <Star className="w-4 h-4 text-accent fill-current" />
                        <span>{dish.rating}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock className="w-4 h-4" />
                        <span>{dish.time}</span>
                      </div>
                    </div>

                    <Button className="w-full btn-elegant">
                      Order Now
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Juice Bar Menu */}
        <section className="py-20 bg-gradient-warm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">
                Fresh <span className="text-luxury">Juice Bar</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Refresh yourself with our selection of fresh juices and healthy smoothies
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {juiceBarMenu.map((juice, index) => (
                <Card 
                  key={juice.id}
                  className="card-elegant group hover:scale-105 transition-all duration-300 animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardContent className="p-6">
                    <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${juice.color} mb-4 mx-auto`}></div>
                    <h3 className="font-serif text-lg font-bold text-foreground text-center mb-2">
                      {juice.name}
                    </h3>
                    <p className="text-muted-foreground text-sm text-center mb-4">
                      {juice.description}
                    </p>
                    <div className="text-center">
                      <span className="text-lg font-bold text-primary">{juice.price}</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Restaurant Gallery */}
        <section className="py-20 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">
                Restaurant <span className="text-luxury">Gallery</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Take a glimpse into our elegant dining spaces and culinary presentations
              </p>
            </div>

            <Carousel className="w-full max-w-5xl mx-auto">
              <CarouselContent>
                {galleryImages.map((image, index) => (
                  <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                    <Card className="card-elegant overflow-hidden">
                      <img
                        src={image}
                        alt={`Restaurant gallery ${index + 1}`}
                        className="w-full h-64 object-cover hover:scale-110 transition-transform duration-500"
                      />
                    </Card>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20 bg-gradient-hero text-white">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6">
              Ready to <span className="text-luxury">Dine</span> with Us?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Reserve your table today and experience exceptional cuisine in our elegant restaurant
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="outline" className="btn-elegant text-lg px-8 py-3 border-white text-white hover:bg-white hover:text-primary">
                View Full Menu
              </Button>
              <Button size="lg" className="btn-luxury text-lg px-8 py-3">
                Reserve a Table
              </Button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Restaurants;