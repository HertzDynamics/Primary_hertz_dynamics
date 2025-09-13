import React from 'react';
import { Award, Users, Globe, Target } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { useLanguage } from '@/contexts/LanguageContext';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import founder1 from '@/assets/founder.jpg';
import director from '@/assets/director.jpg';
import member1 from '@/assets/member1.jpg';
import member2 from '@/assets/member2.jpg';
import member3 from '@/assets/member3.jpg';
import { useContext } from "react";
import { ThemeContext } from "@/components/ui/themeContext";

const About: React.FC = () => {
  const { t } = useLanguage();
    const { theme, toggleTheme } = useContext(ThemeContext);
  

  const founders = [
    {
      name: t('founder.name'),
      role: t('foun'),
      image: founder1,
      // description: "The primary goal of Hertz Dynamics is to develop cutting-edge drone'Webnology in aeronautical and nautical surveillance using satellite communications. Its allied interests are aligned towards agricultural surveying, supplying the electromechanical needs to household, industrial machinery and its ancillary services.We are committed to quality craftsmanship, and it is reflected through our industry-wide recognitions, patented'Webnologies, advanced business model, global alliances and customer testimonials. We are extremely proud of our successful project implementations across different industries and digital'Webnologies that has helped us deliver quality digital products at pace and on-demand",
      description: t('founder.info'),
      achievements: [''],
    },
    {
      name: t('director.name'),
      role: t('direct'),
      image: director,
      // description: 'At Hertz Dynamics, we have established a philosophy of collaborating with our customers and partners in their quest for creating a competitive edge. We have a collaborative and transformative approach for establishing a successful partnership with our clients. Our commitment to quality, passion for'Webnology and ensuring that our clients success is our success has helped us establish long-term relationships with our stakeholders.We thank your interest in Hertz Dynamics and look forward to work with you in future to build products and craft your sustainable journey.',
      description: t('director.info'),
      achievements: [''],
    },
  ];

  const team = [
    {
      name: t('member1.name'),
      role: t('memb'),
      image: member1,
      description: t('member1.info'),
      // achievements: [''],
    },
    {
      name: t('member2.name'),
      role: t('memb'),
      image: member2,
      description: t('member2.info'),
      // achievements: [''],
    },
    {
      name: t('member3.name'),
      role: t('memb'),
      image: member3,
      description: t('member3.info'),
      // achievements: [''],
    },
  ];

  return (
    <div
      className={`min-h-screen transition ease duration-1000 pt-1 ${
        theme === "sunny"
          ? "bg-[var(--background-color)]"
          : "bg-[var(--darkbackground-color)]"
      }`}
    >
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
      <section className="py-20 ">
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
                <CardContent className="p-2">
                  <div className="flex flex-col items-center ">
                    <div className="rounded-lg w-full bg-[rgba(17,111,234,0.12)] ">
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

            {team.map((member) => (
              <Card key={member.name} className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-2">
                  <div className="flex flex-col items-center">
                    <div className="rounded-lg w-full bg-[rgba(17,111,234,0.12)] ">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-40 h-60 object-cover mx-auto p-2"
                      />
                    </div>
                    <div className="flex flex-row justify-start items-start mt-2 w-full pl-5">
                      <div className="">
                        <h3 className="text-2xl font-bold text-primary mb-2 text-justify">{member.name}</h3>
                        <p className="text-primary-light font-medium mb-1 text-start">{member.role}</p>
                        <p className="text-muted-foreground mb-6 leading-relaxed">
                          {member.description}
                          {/* {t('founder.info')} */}
                        </p>
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
              <h3 className="text-xl font-bold text-primary mb-4">{t('ourmission')}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {t('mission')}
              </p>
            </Card>

            <Card className="text-center p-8 shadow-md hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-6">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-primary mb-4">{t('ourvision')}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {t('vision')}
              </p>
            </Card>

            <Card className="text-center p-8 shadow-md hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-primary mb-4">{t('ourvalues')}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {t('values')}
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