import { ChefHat, Clock, Award, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import restaurantImage from '@/assets/restaurant-interior.jpg';

const RestaurantSection = () => {
  const highlights = [
    {
      icon: ChefHat,
      title: 'Expert Chefs',
      description: 'World-class culinary team with international experience',
    },
    {
      icon: Clock,
      title: 'Open 24/7',
      description: 'Round-the-clock dining service for your convenience',
    },
    {
      icon: Award,
      title: 'Award Winning',
      description: 'Recognized for excellence in hospitality and cuisine',
    },
  ];

  const menuItems = [
    { category: 'Bengali Cuisine', items: ['Hilsa Fish Curry', 'Mutton Biryani', 'Prawn Malai Curry'] },
    { category: 'International', items: ['Grilled Salmon', 'Beef Tenderloin', 'Pasta Carbonara'] },
    { category: 'Beverages', items: ['Fresh Juice Bar', 'Premium Coffee', 'Signature Cocktails'] },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="animate-fade-in">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6">
              Fine Dining & 
              <span className="text-luxury block">Juice Bar</span>
            </h2>
            
            <p className="text-lg text-muted-foreground mb-8">
              Indulge in a culinary journey at our award-winning restaurant and refreshing juice bar. 
              From authentic Bengali delicacies to international cuisine, we cater to every palate with 
              the finest ingredients and expert preparation.
            </p>

            {/* Highlights */}
            <div className="space-y-4 mb-8">
              {highlights.map((highlight, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <highlight.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">{highlight.title}</h3>
                    <p className="text-muted-foreground">{highlight.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Menu Categories */}
            <div className="space-y-6 mb-8">
              <h3 className="font-serif text-2xl font-bold text-foreground">Menu Highlights</h3>
              {menuItems.map((menu, index) => (
                <Card key={index} className="card-elegant">
                  <CardContent className="p-4">
                    <h4 className="font-semibold text-primary mb-2">{menu.category}</h4>
                    <div className="flex flex-wrap gap-2">
                      {menu.items.map((item) => (
                        <span
                          key={item}
                          className="px-3 py-1 bg-muted text-muted-foreground rounded-full text-sm"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="btn-luxury">
                <ChefHat className="w-5 h-5 mr-2" />
                View Full Menu
              </Button>
              <Button variant="outline" className="btn-elegant">
                <Phone className="w-5 h-5 mr-2" />
                Reserve Table
              </Button>
            </div>
          </div>

          {/* Image */}
          <div className="relative animate-scale-in">
            <div className="relative overflow-hidden rounded-2xl shadow-luxury">
              <img
                src={restaurantImage}
                alt="Restaurant Interior"
                className="w-full h-[600px] object-cover"
              />
              
              {/* Overlay Info */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-8">
                <div className="text-white">
                  <h3 className="font-serif text-2xl font-bold mb-2">Elegant Dining Experience</h3>
                  <p className="text-white/80 mb-4">Sophisticated ambiance with panoramic views</p>
                  
                  {/* Opening Hours */}
                  <div className="flex items-center space-x-4 text-sm">
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      <span>24/7 Service</span>
                    </div>
                    <div className="flex items-center">
                      <Phone className="w-4 h-4 mr-1" />
                      <span>+880-123-456789</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Stats */}
            <div className="absolute -top-6 -right-6 bg-white rounded-xl shadow-elegant p-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-1">4.9</div>
                <div className="text-sm text-muted-foreground">Food Rating</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RestaurantSection;