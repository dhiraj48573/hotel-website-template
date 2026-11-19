import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { propertyConfig } from '../config/property.config';
import { useLanguage } from '../context/LanguageContext';
import { useTheme } from '../context/ThemeContext';
import { SEOHead } from '../components/SEOHead';
import { HeroSection } from '../components/HeroSection';
import { ModeBanner } from '../components/ModeBanner';
import { RoomCard } from '../components/RoomCard';
import { FacilitiesSection } from '../components/FacilitiesSection';
import { LandmarksSection } from '../components/LandmarksSection';
import { TestimonialsSection } from '../components/TestimonialsSection';
import { GallerySection } from '../components/GallerySection';
import { LocationSection } from '../components/LocationSection';
import { BookingModal } from '../components/BookingModal';
import { getQuickWhatsAppUrl } from '../utils/whatsapp';
import { 
  Sparkles, 
  CheckCircle, 
  ChevronRight, 
  MessageCircle, 
  PhoneCall, 
  ShieldCheck, 
  Heart,
  ArrowRight
} from 'lucide-react';

export const Home = () => {
  const { lang, t, getText } = useLanguage();
  const { mode } = useTheme();
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedRoomForModal, setSelectedRoomForModal] = useState('');

  const prop = propertyConfig.property;
  const whyChooseUs = propertyConfig.whyChooseUs;
  const activeRooms = propertyConfig.rooms.filter(r => r.active !== false);

  const handleOpenModal = (roomName = '') => {
    setSelectedRoomForModal(roomName);
    setModalOpen(true);
  };

  return (
    <div>
      <SEOHead 
        title={lang === 'hi' ? 'मुख्य पृष्ठ - पवित्र गंगा तट पर शांतिपूर्ण प्रवास' : 'Home - Peaceful Stay Near Har Ki Pauri'}
      />

      {/* Mode & Peak Season Banner */}
      <ModeBanner />

      {/* Hero Section */}
      <HeroSection onOpenBookingModal={() => handleOpenModal('')} />

      {/* 1. SHORT PROPERTY INTRODUCTION */}
      <section className="py-16 bg-white border-b border-theme-border">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-amber-100 text-amber-800 text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{getText(prop.category, prop.categoryHi)}</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-theme-primary tracking-tight">
            {lang === 'hi' ? `${getText(prop.name, prop.nameHi)} में आपका हार्दिक स्वागत है` : `Welcome to ${prop.name}`}
          </h2>

          <p className="text-theme-muted text-sm sm:text-base leading-relaxed max-w-3xl mx-auto">
            {getText(prop.fullAbout, prop.fullAboutHi)}
          </p>

          <div className="pt-2">
            <Link
              to="/about"
              className="inline-flex items-center gap-2 text-theme-secondary hover:text-theme-secondary-hover font-semibold text-sm transition-colors"
            >
              <span>{lang === 'hi' ? 'हमारे और हमारे आतिथ्य के बारे में और जानें' : 'Read Our History & Hospitality Philosophy'}</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* 2. ROOM CATEGORY PREVIEW */}
      <section className="py-16 md:py-24 bg-theme-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100 text-amber-800 text-xs font-semibold uppercase tracking-wider mb-2">
                <Sparkles className="w-3.5 h-3.5" />
                <span>{lang === 'hi' ? 'कमरे एवं दरें' : 'Stay Options'}</span>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-theme-primary tracking-tight">
                {t('roomsHeading')}
              </h2>
              <p className="text-theme-muted text-sm sm:text-base max-w-2xl mt-1">
                {t('roomsSubheading')}
              </p>
            </div>

            <Link
              to="/rooms"
              className="inline-flex items-center gap-2 bg-theme-primary hover:bg-theme-primary-hover text-white text-xs sm:text-sm font-semibold px-5 py-2.5 rounded-xl transition-all shadow-sm self-start md:self-auto"
            >
              <span>{t('viewAllRooms')}</span>
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Featured Room Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {activeRooms.slice(0, 3).map((room) => (
              <RoomCard
                key={room.id}
                room={room}
                onSelectRoom={(rName) => handleOpenModal(rName)}
              />
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              to="/rooms"
              className="inline-flex items-center gap-2 bg-white hover:bg-slate-50 border border-theme-border text-theme-primary font-bold px-6 py-3 rounded-xl shadow-soft transition-all text-sm"
            >
              <span>{lang === 'hi' ? 'सभी 6+ कमरे, डॉर्मिटरी एवं दरें देखें' : 'Explore All Room Categories, Dormitory & Tariffs'}</span>
              <ArrowRight className="w-4 h-4 text-theme-secondary" />
            </Link>
          </div>
        </div>
      </section>

      {/* 3. FACILITIES & AMENITIES */}
      <FacilitiesSection showAll={false} />

      {/* 4. WHY CHOOSE US */}
      <section className="py-16 md:py-24 bg-white border-t border-theme-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-semibold uppercase tracking-wider">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>{lang === 'hi' ? 'हमारा संकल्प' : 'Our Promise'}</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-theme-primary tracking-tight">
              {t('whyChooseUsHeading')}
            </h2>
            <p className="text-theme-muted text-sm sm:text-base leading-relaxed">
              {lang === 'hi'
                ? 'हरिद्वार में श्रद्धालुओं और परिवारों के लिए सर्वोत्तम, सुरक्षित और स्वच्छ आवास अनुभव।'
                : 'Experience traditional Indian warmth with modern standards of hygiene, honesty and peace.'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyChooseUs.map((reason, idx) => (
              <div
                key={idx}
                className="bg-slate-50/70 rounded-2xl p-6 border border-slate-200/80 hover:bg-amber-50/30 hover:border-amber-300 transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-xl bg-amber-500 text-slate-950 font-serif font-black flex items-center justify-center mb-4 text-base shadow-sm">
                  0{idx + 1}
                </div>
                <h3 className="font-serif text-base font-bold text-theme-primary mb-2">
                  {getText(reason.title, reason.titleHi)}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {getText(reason.description, reason.descriptionHi)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. NEARBY ATTRACTIONS & LANDMARKS */}
      <LandmarksSection />

      {/* 6. GENUINE TESTIMONIALS */}
      <TestimonialsSection />

      {/* 7. GALLERY PREVIEW */}
      <GallerySection isPreview={true} />

      {/* 8. LOCATION & DIRECTIONS */}
      <LocationSection />

      {/* 9. WHATSAPP BOOKING CTA BANNER */}
      <section className="py-14 bg-gradient-to-r from-emerald-700 via-emerald-800 to-teal-900 text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center space-y-6">
          <div className="w-14 h-14 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center mx-auto text-emerald-300">
            <MessageCircle className="w-8 h-8" />
          </div>

          <div className="space-y-2">
            <h2 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight">
              {lang === 'hi' ? 'हरिद्वार यात्रा की योजना बना रहे हैं?' : 'Planning Your Sacred Trip to Haridwar?'}
            </h2>
            <p className="text-emerald-100 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
              {lang === 'hi'
                ? 'सीधे हमारे स्वागत कक्ष से संपर्क करें। उपलब्धता, उचित दरें और तत्काल बुकिंग सहायता प्राप्त करें।'
                : 'Connect directly with our reception desk on WhatsApp for instant room availability, family package rates and assistance.'}
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <a
              href={getQuickWhatsAppUrl('availability')}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-emerald-900 hover:bg-emerald-50 font-bold px-7 py-3.5 rounded-xl shadow-lg transition-all flex items-center gap-2 text-sm sm:text-base"
            >
              <MessageCircle className="w-5 h-5 text-emerald-700" />
              <span>{t('whatsappUs')}</span>
            </a>

            <button
              onClick={() => handleOpenModal('')}
              className="bg-emerald-600 hover:bg-emerald-500 text-white font-bold px-7 py-3.5 rounded-xl border border-white/20 shadow-lg transition-all flex items-center gap-2 text-sm sm:text-base cursor-pointer"
            >
              <span>{t('checkAvailability')}</span>
            </button>
          </div>
        </div>
      </section>

      {/* Booking Enquiry Modal */}
      <BookingModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        preselectedRoom={selectedRoomForModal}
      />
    </div>
  );
};
