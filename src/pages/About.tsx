import React from 'react';
import { Award, Users, Globe, Target } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { useLanguage } from '@/contexts/LanguageContext';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import founder1 from '@/assets/founder.jpg';
import director from '@/assets/director.jpg';

const About: React.FC = () => {
  const { t } = useLanguage();

  const founders = [
    {
      name: t('founder.name'),
      role: 'Founder',
      image: founder1,
      // description: "The primary goal of Hertz Dynamics is to develop cutting-edge drone technology in aeronautical and nautical surveillance using satellite communications. Its allied interests are aligned towards agricultural surveying, supplying the electromechanical needs to household, industrial machinery and its ancillary services.We are committed to quality craftsmanship, and it is reflected through our industry-wide recognitions, patented technologies, advanced business model, global alliances and customer testimonials. We are extremely proud of our successful project implementations across different industries and digital technologies that has helped us deliver quality digital products at pace and on-demand",
      description: t('founder.info'),
      achievements: [''],
    },
    {
      name: t('director.name'),
      role: 'Director',
      image: director,
      // description: 'At Hertz Dynamics, we have established a philosophy of collaborating with our customers and partners in their quest for creating a competitive edge. We have a collaborative and transformative approach for establishing a successful partnership with our clients. Our commitment to quality, passion for technology and ensuring that our clients success is our success has helped us establish long-term relationships with our stakeholders.We thank your interest in Hertz Dynamics and look forward to work with you in future to build products and craft your sustainable journey.',
      description: t('director.info'),
      achievements: [''],
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
      {/* <section className="pt-24 pb-16 bg-gradient-accent relative"> */}
      {/* <div className="absolute inset-0 hex-pattern opacity-10"></div> */}
      {/* <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> */}
      {/* <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-primary mb-6">
              {t('about.title')}
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              {t('about.description')}
            </p>
          </div> */}

      {/* Stats */}
      {/* <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map(({ icon: Icon, value, label }) => (
              <div key={label} className="text-center">
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-primary mb-2">{value}</div>
                <div className="text-muted-foreground">{label}</div>
              </div>
            ))}
          </div> */}
      {/* </div> */}
      {/* </section> */}

      {/* Founders Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">{t('about.meet')}</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              {t('about.belowmeet')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {founders.map((founder) => (
              <Card key={founder.name} className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-0">
                  <div className="flex flex-col items-center ">
                    <div className="w-full bg-blue-300">
                      <img
                        src={founder.image}
                        alt={founder.name}
                        className="w-40 h-60 object-cover mx-auto p-2"
                      />
                    </div>
                    <div className="p-8">
                      <h3 className="text-2xl font-bold text-primary mb-2">{founder.name}</h3>
                      <p className="text-primary-light font-medium mb-4">{founder.role}</p>
                      <p className="text-muted-foreground mb-6 leading-relaxed">
                        {founder.description}
                        {/* {t('founder.info')} */}
                      </p>
                      <div>
                        {/* <h4 className="font-semibold text-foreground mb-3">Key Achievements:</h4> */}
                        {/* <ul className="space-y-2">
                          {founder.achievements.map((achievement, index) => (
                            <li key={index} className="flex items-start text-sm text-muted-foreground">
                              <div className="w-2 h-2 bg-primary rounded-full mr-3 mt-2 flex-shrink-0"></div>
                              {achievement}
                            </li>
                          ))}
                        </ul> */}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
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