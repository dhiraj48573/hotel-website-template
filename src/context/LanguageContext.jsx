import React, { createContext, useContext, useState, useEffect } from 'react';

const LanguageContext = createContext();

export const translations = {
  en: {
    navHome: "Home",
    navAbout: "About Us",
    navRooms: "Rooms & Pricing",
    navFacilities: "Facilities & Gallery",
    navContact: "Contact & Booking",
    bookNow: "Enquire on WhatsApp",
    checkAvailability: "Check Availability",
    callUs: "Call Reception",
    whatsappUs: "Chat on WhatsApp",
    quickEnquiry: "Quick Stay Enquiry",
    roomsHeading: "Available Room Categories",
    roomsSubheading: "Clean, hygienic, and well-maintained rooms for families, pilgrims, and tourists.",
    facilitiesHeading: "Property Facilities & Amenities",
    facilitiesSubheading: "Thoughtfully provided to make your holy stay comfortable and peaceful.",
    whyChooseUsHeading: "Why Choose Us",
    testimonialsHeading: "Guest Experiences & Reviews",
    testimonialsSubheading: "Genuine feedback from devotees and families who stayed with us.",
    landmarksHeading: "Nearby Sacred Sites & Distances",
    landmarksSubheading: "Conveniently located with easy walking and transport access.",
    galleryHeading: "Photo Gallery",
    gallerySubheading: "A visual tour of our rooms, reception, dining, and holy surroundings.",
    locationHeading: "Location & Directions",
    locationSubheading: "Find us easily in Haridwar with direct Google Maps navigation.",
    getDirections: "Get Directions",
    viewAllRooms: "View All Rooms & Tariffs",
    viewAllPhotos: "View Full Gallery",
    footerQuickLinks: "Quick Navigation",
    footerContactInfo: "Contact Information",
    footerTimings: "Check-in / Check-out",
    footerDisclaimer: "Enquiry System: Bookings are confirmed upon phone or WhatsApp verification by property management.",
    perNight: "/ night",
    perPerson: "/ person",
    startingAt: "Starts from",
    fixedTariff: "Fixed Tariff",
    extraPerson: "Extra guest: ₹",
    maxGuests: "Max Guests",
    beds: "Beds",
    bathroom: "Bathroom",
    size: "Size",
    amenities: "Amenities",
    enquireRoom: "Enquire for this Room",
    viewDetails: "View Details",
    formTitle: "Instant Booking Enquiry",
    formSubtitle: "Fill in your travel dates to generate an instant WhatsApp enquiry for our reception.",
    fullName: "Full Name",
    mobileNumber: "Mobile / WhatsApp Number",
    checkInDate: "Check-in Date",
    checkOutDate: "Check-out Date",
    selectRoomType: "Select Room Type",
    numberOfAdults: "Adults (12+ yrs)",
    numberOfChildren: "Children (below 12 yrs)",
    specialRequests: "Special Notes / Pilgrimage Group Details",
    sendWhatsappBtn: "Send Enquiry via WhatsApp",
    callDirectBtn: "Call Reception Directly",
    disclaimerTitle: "Important Booking Note:",
    disclaimerBody: "This is a direct booking enquiry. Official reservation confirmation and advance payment details will be provided by our reception staff via WhatsApp/Phone after checking live room availability.",
    festivalNoticeBadge: "Important Notice",
    modeDharamshalaBadge: "Pilgrim & Bhakt Niwas Friendly",
    modeHotelBadge: "Premium Hotel Stay",
    bhojanalayaTitle: "Satvik Bhojanalaya",
    mealTimings: "Meal Timings",
    rulesTitle: "Property Guidelines & ID Rules",
    allPhotos: "All Photos",
    filterRooms: "Filter Rooms",
    allCategories: "All Rooms",
    acOnly: "AC Rooms Only",
    nonAcOnly: "Non-AC / Budget",
    dormitoryOnly: "Dormitory / Bed Sharing",
    familyOnly: "Family Rooms",
  },
  hi: {
    navHome: "मुख्य पृष्ठ",
    navAbout: "हमारे बारे में",
    navRooms: "कमरे एवं दरें",
    navFacilities: "सुविधाएं एवं गैलरी",
    navContact: "संपर्क एवं बुकिंग",
    bookNow: "व्हाट्सएप पर पूछताछ करें",
    checkAvailability: "उपलब्धता जांचें",
    callUs: "रिसेप्शन पर कॉल करें",
    whatsappUs: "व्हाट्सएप चैट",
    quickEnquiry: "त्वरित आवास पूछताछ",
    roomsHeading: "उपलब्ध कमरों की श्रेणियां",
    roomsSubheading: "श्रद्धालुओं, पर्यटकों और परिवारों के लिए स्वच्छ, सुरक्षित और सुव्यवस्थित कमरे।",
    facilitiesHeading: "आवास की सुविधाएं",
    facilitiesSubheading: "आपकी पावन यात्रा को सुखद व तनावमुक्त बनाने हेतु सभी आवश्यक सुविधाएं।",
    whyChooseUsHeading: "हमारी विशेषताएं",
    testimonialsHeading: "अतिथियों के अनुभव व विचार",
    testimonialsSubheading: "हमारे यहां पधारे श्रद्धालुओं और परिवारों द्वारा दी गई प्रामाणिक समीक्षाएं।",
    landmarksHeading: "निकटवर्ती तीर्थ स्थल एवं दूरियां",
    landmarksSubheading: "हर की पौड़ी और प्रमुख मंदिरों के अत्यंत निकट, आवागमन में सुगम।",
    galleryHeading: "छायाचित्र गैलरी",
    gallerySubheading: "हमारे कमरों, रिसेप्शन, भोजनालय और पावन वातावरण की वास्तविक झलक।",
    locationHeading: "स्थान एवं पहुंचने का मार्ग",
    locationSubheading: "गूगल मैप्स नेविगेशन की सहायता से आसानी से हमारे पते पर पहुंचें।",
    getDirections: "दिशा निर्देश प्राप्त करें",
    viewAllRooms: "सभी कमरे एवं दरें देखें",
    viewAllPhotos: "पूरी गैलरी देखें",
    footerQuickLinks: "महत्वपूर्ण लिंक",
    footerContactInfo: "संपर्क सूत्र",
    footerTimings: "चेक-इन / चेक-आउट समय",
    footerDisclaimer: "पूछताछ व्यवस्था: आरक्षण की अंतिम पुष्टि रिसेप्शन द्वारा उपलब्धता जांचने के पश्चात ही की जाती है।",
    perNight: "/ रात",
    perPerson: "/ व्यक्ति",
    startingAt: "प्रारंभिक दर",
    fixedTariff: "निश्चित दर",
    extraPerson: "अतिरिक्त व्यक्ति: ₹",
    maxGuests: "अधिकतम अतिथि",
    beds: "बिस्तर",
    bathroom: "स्नानघर",
    size: "क्षेत्रफल",
    amenities: "सुविधाएं",
    enquireRoom: "इस कमरे की पूछताछ करें",
    viewDetails: "विस्तृत विवरण",
    formTitle: "आरक्षण पूछताछ फॉर्म",
    formSubtitle: "अपनी यात्रा तिथियां दर्ज करें और सीधे व्हाट्सएप पर पूछताछ संदेश भेजें।",
    fullName: "आपका पूरा नाम",
    mobileNumber: "मोबाइल / व्हाट्सएप नंबर",
    checkInDate: "आगमन तिथि (Check-in)",
    checkOutDate: "प्रस्थान तिथि (Check-out)",
    selectRoomType: "कमरे का प्रकार चुनें",
    numberOfAdults: "वयस्क (12 वर्ष से अधिक)",
    numberOfChildren: "बच्चे (12 वर्ष से कम)",
    specialRequests: "विशेष आवश्यकताएं / समूह विवरण",
    sendWhatsappBtn: "व्हाट्सएप पर संदेश भेजें",
    callDirectBtn: "सीधे रिसेप्शन पर कॉल करें",
    disclaimerTitle: "महत्वपूर्ण आरक्षण सूचना:",
    disclaimerBody: "यह एक पूछताछ प्रणाली है। कमरे की उपलब्धता और अग्रिम भुगतान की पुष्टि के पश्चात ही आरक्षण मान्य माना जाएगा।",
    festivalNoticeBadge: "विशेष पर्व सूचना",
    modeDharamshalaBadge: "तीर्थयात्री एवं भक्त निवास सुविधा",
    modeHotelBadge: "प्रीमियम होटल व्यवस्था",
    bhojanalayaTitle: "सात्विक भोजनालय",
    mealTimings: "भोजन का समय",
    rulesTitle: "नियम एवं पहचान पत्र निर्देश",
    allPhotos: "सभी तस्वीरें",
    filterRooms: "कमरे छांटें",
    allCategories: "सभी कमरे",
    acOnly: "केवल एसी कमरे",
    nonAcOnly: "नॉन-एसी / बजट",
    dormitoryOnly: "डॉर्मिटरी / साझा बिस्तर",
    familyOnly: "पारिवारिक कमरे",
  }
};

export const LanguageProvider = ({ children }) => {
  const [lang, setLang] = useState(() => {
    return localStorage.getItem('site_lang') || 'en';
  });

  useEffect(() => {
    localStorage.setItem('site_lang', lang);
    document.documentElement.lang = lang;
  }, [lang]);

  // Translate a dictionary key
  const t = (key, fallback = '') => {
    if (translations[lang] && translations[lang][key]) {
      return translations[lang][key];
    }
    if (translations.en[key]) {
      return translations.en[key];
    }
    return fallback || key;
  };

  // Helper to pick between English text and Hindi text or object {en, hi}
  const getText = (enValue, hiValue) => {
    if (typeof enValue === 'object' && enValue !== null) {
      if (lang === 'hi' && enValue.hi) return enValue.hi;
      return enValue.en || '';
    }
    if (lang === 'hi' && hiValue) {
      return hiValue;
    }
    return enValue || '';
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, t, getText }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
