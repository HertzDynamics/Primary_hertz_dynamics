import React, { createContext, useContext, useState, ReactNode } from 'react';

export interface Language {
  code: string;
  name: string;
  nativeName: string;
}

export const languages: Language[] = [
  { code: 'en', name: 'English', nativeName: 'English' },
  { code: 'hi', name: 'Hindi', nativeName: 'हिन्दी' },
  { code: 'te', name: 'Telugu', nativeName: 'తెలుగు' },
  { code: 'ta', name: 'Tamil', nativeName: 'தமிழ்' },
  { code: 'fr', name: 'French', nativeName: 'Français' },
  { code: 'no', name: 'Norwegian', nativeName: 'Norsk' },
];

interface LanguageContextType {
  currentLanguage: Language;
  setLanguage: (language: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

// Translation data - simplified for demo, in production would use proper i18n
const translations: Record<string, Record<string, string>> = {
  en: {
    'nav.home': 'Home',
    'nav.products': 'Products',
    'nav.about': 'About',
    'nav.enquiry': 'Enquiry',
    'nav.language': 'Language',
    'hero.title': 'Revolutionizing the Future with Drone Technology',
    'hero.subtitle': 'Advanced aerial solutions for modern industries',
    'hero.cta': 'Explore Products',
    'products.title': 'Our Products',
    'products.subtitle': 'Cutting-edge drone technology for every application',
    'about.title': 'About Hertz Dynamics',
    'about.description': 'Leading innovation in drone technology since our founding. We specialize in creating advanced aerial solutions that transform industries and enhance human capabilities.',
    'enquiry.title': 'Get in Touch',
    'enquiry.subtitle': 'Ready to discuss your drone technology needs?',
    'form.name': 'Full Name',
    'form.email': 'Email Address',
    'form.phone': 'Phone Number',
    'form.requirements': 'Requirements',
    'form.submit': 'Send Enquiry',
    'footer.address': 'Hertz Dynamics Headquarters',
    'footer.contact': 'Contact Information'
  },
  hi: {
    'nav.home': 'होम',
    'nav.products': 'उत्पाद',
    'nav.about': 'हमारे बारे में',
    'nav.enquiry': 'पूछताछ',
    'nav.language': 'भाषा',
    'hero.title': 'ड्रोन तकनीक के साथ भविष्य में क्रांति',
    'hero.subtitle': 'आधुनिक उद्योगों के लिए उन्नत हवाई समाधान',
    'hero.cta': 'उत्पाद देखें'
  },
  te: {
    'nav.home': 'హోమ్',
    'nav.products': 'ఉత్పత్తులు',
    'nav.about': 'మా గురించి',
    'nav.enquiry': 'విచారణ',
    'nav.language': 'భాష',
    'hero.title': 'డ్రోన్ టెక్నాలజీతో భవిష్యత్తును విప్లవాత్మకంగా మార్చడం',
    'hero.subtitle': 'ఆధునిక పరిశ్రమలకు అధునాతన వైమానిక పరిష్కారాలు',
    'hero.cta': 'ఉత్పత్తులను అన్వేషించండి'
  }
  // Add more translations as needed
};

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [currentLanguage, setCurrentLanguage] = useState<Language>(languages[0]);

  const setLanguage = (language: Language) => {
    setCurrentLanguage(language);
  };

  const t = (key: string): string => {
    return translations[currentLanguage.code]?.[key] || translations.en[key] || key;
  };

  return (
    <LanguageContext.Provider value={{ currentLanguage, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};