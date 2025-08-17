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
    'company.name': 'Hertz Dynamics',
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
    // 'about.description': 'Leading innovation in drone technology since our founding. We specialize in creating advanced aerial solutions that transform industries and enhance human capabilities.',
    'about.description': 'Hertz Dynamics is committed to manufacture and supply motors, transformers, test & measuring equipment/instruments, drones with its essentials & allied accessories which include control platform, batteries, encoders, cables, insulators, support structures and satellite communication services. We are passionate about providing the high-quality products since our incorporation in 2025 with headquarters in Warangal, India.We focus on producing top-quality machineries and equipment that meet the industry standards and offer extended durability, reliability with affordable cost. We take pride in ourselves on supplying high-precision electrical, electronic, telecommunication components, and surveying strictly adhering to ISO 9001 standards. Our products are widely used in industrial machinery, electric vehicles, agriculture, household appliances, toys, aeronautical, nautical and electronic equipment.',
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
    'company.name': 'हर्ट्ज़ डायनामिक्स',
    'nav.home': 'होम',
    'nav.products': 'उत्पाद',
    'nav.about': 'हमारे बारे में',
    'nav.enquiry': 'पूछताछ',
    'nav.language': 'भाषा',
    'hero.title': 'ड्रोन तकनीक के साथ भविष्य में क्रांति',
    'hero.subtitle': 'आधुनिक उद्योगों के लिए उन्नत हवाई समाधान',
    'hero.cta': 'उत्पाद देखें',
    'products.title': 'हमारे उत्पाद',
    'products.subtitle': 'हर अनुप्रयोग के लिए अत्याधुनिक ड्रोन तकनीक',
    'about.title': 'हर्ट्ज़ डायनामिक्स के बारे में',
    'about.description': 'हमारी स्थापना के बाद से ड्रोन तकनीक में नवाचार का नेतृत्व करना। हम उन्नत हवाई समाधान बनाने में विशेषज्ञता रखते हैं जो उद्योगों को बदलते हैं और मानवीय क्षमताओं को बढ़ाते हैं।',
    'enquiry.title': 'संपर्क करें',
    'enquiry.subtitle': 'अपनी ड्रोन तकनीक आवश्यकताओं पर चर्चा करने के लिए तैयार हैं?',
    'form.name': 'पूरा नाम',
    'form.email': 'ईमेल पता',
    'form.phone': 'फोन नंबर',
    'form.requirements': 'आवश्यकताएं',
    'form.submit': 'पूछताछ भेजें',
    'footer.address': 'हर्ट्ज़ डायनामिक्स मुख्यालय',
    'footer.contact': 'संपर्क जानकारी'
  },
  te: {
    'company.name': 'హెర్ట్జ్ డైనమిక్స్ ప్రధాన ',
    'nav.home': 'హోమ్',
    'nav.products': 'ఉత్పత్తులు',
    'nav.about': 'మా గురించి',
    'nav.enquiry': 'విచారణ',
    'nav.language': 'భాష',
    'hero.title': 'డ్రోన్ టెక్నాలజీతో భవిష్యత్తును విప్లవాత్మకంగా మార్చడం',
    'hero.subtitle': 'ఆధునిక పరిశ్రమలకు అధునాతన వైమానిక పరిష్కారాలు',
    'hero.cta': 'ఉత్పత్తులను అన్వేషించండి',
    'products.title': 'మా ఉత్పత్తులు',
    'products.subtitle': 'ప్రతి అప్లికేషన్ కోసం అధునాతన డ్రోన్ టెక్నాలజీ',
    'about.title': 'హెర్ట్జ్ డైనమిక్స్ గురించి',
    'about.description': 'మా స్థాపన నుండి డ్రోన్ టెక్నాలజీలో ఇనోవేషన్‌కు నాయకత్వం వహిస్తున్నాము. మేము పరిశ్రమలను మార్చే మరియు మానవ సామర్థ్యాలను పెంచే అధునాతన వైమానిక పరిష్కారాలను సృష్టించడంలో నిపుణులం.',
    'enquiry.title': 'సంప్రదించండి',
    'enquiry.subtitle': 'మీ డ్రోన్ టెక్నాలజీ అవసరాల గురించి చర్చించడానికి సిద్ధంగా ఉన్నారా?',
    'form.name': 'పూర్తి పేరు',
    'form.email': 'ఇమెయిల్ చిరునామా',
    'form.phone': 'ఫోన్ నంబర్',
    'form.requirements': 'అవసరాలు',
    'form.submit': 'విచారణ పంపండి',
    'footer.address': 'హెర్ట్జ్ డైనమిక్స్ ప్రధాన కార్యాలయం',
    'footer.contact': 'సంప్రదింపు సమాచారం'
  },
  ta: {
    'company.name': 'ஹெர்ட்ஸ் டைனமிக்ஸ் ',
    'nav.home': 'வீடு',
    'nav.products': 'தயாரிப்புகள்',
    'nav.about': 'எங்களைப் பற்றி',
    'nav.enquiry': 'விசாரணை',
    'nav.language': 'மொழி',
    'hero.title': 'ட்ரோன் தொழில்நுட்பத்துடன் எதிர்காலத்தை புரட்சிகரமாக மாற்றுதல்',
    'hero.subtitle': 'நவீன தொழில்களுக்கான மேம்பட்ட வான்வழி தீர்வுகள்',
    'hero.cta': 'தயாரிப்புகளை ஆராயுங்கள்',
    'products.title': 'எங்கள் தயாரிப்புகள்',
    'products.subtitle': 'ஒவ்வொரு பயன்பாட்டிற்கும் அதிநவீன ட்ரோன் தொழில்நுட்பம்',
    'about.title': 'ஹெர்ட்ஸ் டைனமிக்ஸ் பற்றி',
    'about.description': 'எங்கள் நிறுவனம் தொடங்கியதிலிருந்து ட்ரோன் தொழில்நுட்பத்தில் புதுமைக்கு முன்னணியில் உள்ளோம். தொழில்களை மாற்றும் மற்றும் மனித திறன்களை மேம்படுத்தும் மேம்பட்ட வான்வழி தீர்வுகளை உருவாக்குவதில் நாங்கள் நிபுணத்துவம் பெற்றுள்ளோம்.',
    'enquiry.title': 'தொடர்பு கொள்ளுங்கள்',
    'enquiry.subtitle': 'உங்கள் ட்ரோன் தொழில்நுட்ப தேவைகளைப் பற்றி விவாதிக்க தயாரா?',
    'form.name': 'முழு பெயர்',
    'form.email': 'மின்னஞ்சல் முகவரி',
    'form.phone': 'தொலைபேசி எண்',
    'form.requirements': 'தேவைகள்',
    'form.submit': 'விசாரணை அனுப்பு',
    'footer.address': 'ஹெர்ட்ஸ் டைனமிக்ஸ் தலைமையகம்',
    'footer.contact': 'தொடர்பு தகவல்'
  },
  fr: {
    'company.name': 'Hertz Dynamics',
    'nav.home': 'Accueil',
    'nav.products': 'Produits',
    'nav.about': 'À propos',
    'nav.enquiry': 'Demande',
    'nav.language': 'Langue',
    'hero.title': 'Révolutionner l\'avenir avec la technologie des drones',
    'hero.subtitle': 'Solutions aériennes avancées pour les industries modernes',
    'hero.cta': 'Explorez les produits',
    'products.title': 'Nos produits',
    'products.subtitle': 'Technologie de drone de pointe pour chaque application',
    'about.title': 'À propos de Hertz Dynamics',
    'about.description': 'Leader de l\'innovation en technologie de drones depuis notre fondation. Nous nous spécialisons dans la création de solutions aériennes avancées qui transforment les industries et améliorent les capacités humaines.',
    'enquiry.title': 'Contactez-nous',
    'enquiry.subtitle': 'Prêt à discuter de vos besoins en technologie de drones?',
    'form.name': 'Nom complet',
    'form.email': 'Adresse e-mail',
    'form.phone': 'Numéro de téléphone',
    'form.requirements': 'Exigences',
    'form.submit': 'Envoyer la demande',
    'footer.address': 'Siège social de Hertz Dynamics',
    'footer.contact': 'Informations de contact'
  },
  no: {
    'company.name': 'Hertz Dynamics',
    'nav.home': 'Hjem',
    'nav.products': 'Produkter',
    'nav.about': 'Om oss',
    'nav.enquiry': 'Forespørsel',
    'nav.language': 'Språk',
    'hero.title': 'Revolusjonere fremtiden med droneteknologi',
    'hero.subtitle': 'Avanserte luftløsninger for moderne industrier',
    'hero.cta': 'Utforsk produkter',
    'products.title': 'Våre produkter',
    'products.subtitle': 'Banebrytende droneteknologi for alle applikasjoner',
    'about.title': 'Om Hertz Dynamics',
    'about.description': 'Ledende innovasjon innen droneteknologi siden vår grunnleggelse. Vi spesialiserer oss på å skape avanserte luftløsninger som transformerer industrier og forbedrer menneskelige evner.',
    'enquiry.title': 'Ta kontakt',
    'enquiry.subtitle': 'Klar til å diskutere dine droneteknologi behov?',
    'form.name': 'Fullt navn',
    'form.email': 'E-postadresse',
    'form.phone': 'Telefonnummer',
    'form.requirements': 'Krav',
    'form.submit': 'Send forespørsel',
    'footer.address': 'Hertz Dynamics hovedkontor',
    'footer.contact': 'Kontaktinformasjon'
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