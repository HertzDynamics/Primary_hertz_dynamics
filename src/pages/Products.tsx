import React from 'react';
import { ArrowRight, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { useLanguage } from '@/contexts/LanguageContext';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import drone1 from '@/assets/drone-1.jpg';
import drone2 from '@/assets/drone-2.jpg';
import drone3 from '@/assets/drone-3.jpg';

const Products: React.FC = () => {
  const { t } = useLanguage();

  const products = [
    {
      id: 1,
      name: 'AeroMax Pro',
      image: drone1,
      price: '$2,999',
      rating: 4.9,
      description: 'Professional 4K aerial photography drone with 30-minute flight time and advanced stabilization.',
      features: ['4K Ultra HD Camera', '30min Flight Time', 'Obstacle Avoidance', 'GPS Tracking'],
    },
    {
      id: 2,
      name: 'InspectBot Industrial',
      image: drone2,
      price: '$4,599',
      rating: 4.8,
      description: 'Heavy-duty industrial inspection drone with thermal imaging and weatherproof design.',
      features: ['Thermal Imaging', 'Weatherproof IP67', '45min Flight Time', 'Live Streaming'],
    },
    {
      id: 3,
      name: 'SpeedRacer X1',
      image: drone3,
      price: '$1,299',
      rating: 4.7,
      description: 'Ultra-fast racing drone with carbon fiber frame and precision controls.',
      features: ['Carbon Fiber Frame', 'High-Speed Motors', 'FPV Camera', 'Aerodynamic Design'],
    },
    {
      id: 4,
      name: 'AgroSky Mapper',
      image: drone1,
      price: '$3,799',
      rating: 4.9,
      description: 'Agricultural mapping drone with multispectral sensors for crop monitoring.',
      features: ['Multispectral Imaging', 'Crop Analytics', '60min Flight Time', 'Automated Mapping'],
    },
    {
      id: 5,
      name: 'Rescue Wing Pro',
      image: drone2,
      price: '$5,999',
      rating: 4.8,
      description: 'Search and rescue drone with thermal vision and emergency communications.',
      features: ['Thermal Vision', 'Night Flight', 'Emergency Beacon', 'Long Range'],
    },
    {
      id: 6,
      name: 'Delivery Express',
      image: drone3,
      price: '$2,199',
      rating: 4.6,
      description: 'Commercial delivery drone with cargo capacity and autonomous navigation.',
      features: ['10kg Payload', 'Autonomous Flight', 'GPS Navigation', 'Return to Base'],
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Header Section */}
      <section className="pt-24 pb-16 bg-gradient-accent relative">
        <div className="absolute inset-0 hex-pattern opacity-10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-primary mb-6">
            {t('products.title')}
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {t('products.subtitle')}
          </p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <div key={product.id} className="flip-card group">
                <Card className="flip-card-inner h-96 cursor-pointer shadow-md hover:shadow-lg transition-shadow">
                  {/* Front Side */}
                  <div className="flip-card-front">
                    <CardContent className="p-0 h-full">
                      <div className="relative h-64 overflow-hidden rounded-t-lg">
                        <img 
                          src={product.image} 
                          alt={product.name}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        <div className="absolute top-4 right-4 bg-white/90 rounded-full px-3 py-1 flex items-center space-x-1">
                          <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                          <span className="text-sm font-medium">{product.rating}</span>
                        </div>
                      </div>
                      <div className="p-6">
                        <h3 className="text-xl font-bold text-primary mb-2">{product.name}</h3>
                        <p className="text-2xl font-bold text-foreground mb-4">{product.price}</p>
                        <Button className="w-full bg-gradient-primary hover:opacity-90">
                          View Details <ArrowRight className="ml-2 w-4 h-4" />
                        </Button>
                      </div>
                    </CardContent>
                  </div>

                  {/* Back Side */}
                  <div className="flip-card-back bg-gradient-hero text-white">
                    <CardContent className="p-6 h-full flex flex-col justify-center">
                      <h3 className="text-xl font-bold mb-4">{product.name}</h3>
                      <p className="text-sm mb-6 flex-grow">{product.description}</p>
                      <div className="space-y-2 mb-6">
                        {product.features.map((feature, index) => (
                          <div key={index} className="flex items-center text-sm">
                            <div className="w-2 h-2 bg-primary-light rounded-full mr-3"></div>
                            {feature}
                          </div>
                        ))}
                      </div>
                      <Button variant="outline" className="w-full border-white text-white hover:bg-white hover:text-primary">
                        Learn More
                      </Button>
                    </CardContent>
                  </div>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-primary text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Take Flight?
          </h2>
          <p className="text-xl mb-8 text-primary-light">
            Contact our team to find the perfect drone solution for your needs.
          </p>
          <Button asChild size="lg" className="bg-white text-primary hover:bg-primary-light hover:text-white">
            <a href="/enquiry">
              Get Custom Quote <ArrowRight className="ml-2 w-5 h-5" />
            </a>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Products;