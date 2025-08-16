import React from 'react';
import { Award, Users, Globe, Target } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { useLanguage } from '@/contexts/LanguageContext';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import founder1 from '@/assets/founder-1.jpg';
import founder2 from '@/assets/founder-2.jpg';

const About: React.FC = () => {
  const { t } = useLanguage();

  const founders = [
    {
      name: 'Dr. Michael Chen',
      role: 'CEO & Co-Founder',
      image: founder1,
      description: 'Former aerospace engineer with 15+ years at NASA. PhD in Aeronautical Engineering from MIT. Led the development of autonomous flight systems for Mars exploration drones.',
      achievements: ['NASA Distinguished Service Medal', 'MIT Technology Review Innovator', '20+ Patents in Drone Technology'],
    },
    {
      name: 'Sarah Williams',
      role: 'CTO & Co-Founder',
      image: founder2,
      description: 'AI and robotics expert with background in autonomous systems. Former Principal Engineer at Google X. Specialized in computer vision and machine learning for aerial vehicles.',
      achievements: ['Forbes 30 Under 30', 'IEEE Robotics Pioneer Award', 'Stanford AI Research Fellow'],
    },
  ];

  const stats = [
    { icon: Award, value: '50+', label: 'Awards Won' },
    { icon: Users, value: '200+', label: 'Team Members' },
    { icon: Globe, value: '25+', label: 'Countries Served' },
    { icon: Target, value: '99.9%', label: 'Mission Success Rate' },
  ];

  const timeline = [
    { year: '2018', event: 'Company Founded', description: 'Started with a vision to revolutionize drone technology' },
    { year: '2019', event: 'First Product Launch', description: 'Launched our inaugural AeroMax series' },
    { year: '2020', event: 'Series A Funding', description: 'Raised $15M to expand R&D capabilities' },
    { year: '2021', event: 'International Expansion', description: 'Entered European and Asian markets' },
    { year: '2022', event: 'AI Integration', description: 'Introduced autonomous flight AI systems' },
    { year: '2024', event: 'Industry Leadership', description: 'Became market leader in professional drones' },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-accent relative">
        <div className="absolute inset-0 hex-pattern opacity-10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-primary mb-6">
              {t('about.title')}
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              {t('about.description')}
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map(({ icon: Icon, value, label }) => (
              <div key={label} className="text-center">
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-primary mb-2">{value}</div>
                <div className="text-muted-foreground">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Founders Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">Meet Our Founders</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              The visionary leaders behind Hertz Dynamics' innovative drone technology.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {founders.map((founder) => (
              <Card key={founder.name} className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-0">
                  <div className="md:flex">
                    <div className="md:w-1/2">
                      <img 
                        src={founder.image} 
                        alt={founder.name}
                        className="w-full h-64 md:h-full object-cover"
                      />
                    </div>
                    <div className="md:w-1/2 p-8">
                      <h3 className="text-2xl font-bold text-primary mb-2">{founder.name}</h3>
                      <p className="text-primary-light font-medium mb-4">{founder.role}</p>
                      <p className="text-muted-foreground mb-6 leading-relaxed">
                        {founder.description}
                      </p>
                      <div>
                        <h4 className="font-semibold text-foreground mb-3">Key Achievements:</h4>
                        <ul className="space-y-2">
                          {founder.achievements.map((achievement, index) => (
                            <li key={index} className="flex items-start text-sm text-muted-foreground">
                              <div className="w-2 h-2 bg-primary rounded-full mr-3 mt-2 flex-shrink-0"></div>
                              {achievement}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-gradient-accent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">Our Journey</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              From startup to industry leader - the milestones that shaped our company.
            </p>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-primary hidden md:block"></div>

            <div className="space-y-12 md:space-y-8">
              {timeline.map((item, index) => (
                <div key={item.year} className={`flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:text-right md:pr-8' : 'md:pl-8'}`}>
                    <Card className="p-6 shadow-md hover:shadow-lg transition-shadow">
                      <div className="flex items-center mb-3">
                        <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center text-white font-bold mr-4 md:hidden">
                          {item.year.slice(-2)}
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-primary">{item.event}</h3>
                          <p className="text-primary-light font-medium">{item.year}</p>
                        </div>
                      </div>
                      <p className="text-muted-foreground">{item.description}</p>
                    </Card>
                  </div>

                  {/* Timeline Node */}
                  <div className="hidden md:flex w-2/12 justify-center">
                    <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center text-white font-bold shadow-lg">
                      {item.year.slice(-2)}
                    </div>
                  </div>

                  <div className="hidden md:block w-5/12"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <Card className="text-center p-8 shadow-md hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-6">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-primary mb-4">Our Mission</h3>
              <p className="text-muted-foreground leading-relaxed">
                To democratize aerial technology and empower industries with innovative drone solutions that enhance human capabilities and create new possibilities.
              </p>
            </Card>

            <Card className="text-center p-8 shadow-md hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-6">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-primary mb-4">Our Vision</h3>
              <p className="text-muted-foreground leading-relaxed">
                To be the global leader in autonomous aerial systems, driving innovation that transforms how the world works, explores, and connects.
              </p>
            </Card>

            <Card className="text-center p-8 shadow-md hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-primary mb-4">Our Values</h3>
              <p className="text-muted-foreground leading-relaxed">
                Innovation, reliability, and safety guide everything we do. We believe in creating technology that serves humanity and protects our planet.
              </p>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;