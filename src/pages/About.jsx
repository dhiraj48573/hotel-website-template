import React, { useState } from 'react';
import { propertyConfig } from '../config/property.config';
import { useLanguage } from '../context/LanguageContext';
import { useTheme } from '../context/ThemeContext';
import { SEOHead } from '../components/SEOHead';
import { BookingModal } from '../components/BookingModal';
import { LandmarksSection } from '../components/LandmarksSection';
import { 
  Sparkles, 
  Heart, 
  History, 
  ShieldCheck, 
  Users, 
  CheckCircle2, 
  Clock, 
  MapPin, 
  PhoneCall, 
  MessageCircle,
  FileText
} from 'lucide-react';

export const About = () => {
  const { lang, t, getText } = useLanguage();
  const { mode } = useTheme();
  const [modalOpen, setModalOpen] = useState(false);

  const prop = propertyConfig.property;
  const policies = propertyConfig.policies;
  const dharamshala = propertyConfig.dharamshalaFeatures;

  return (
    <div>
      <SEOHead 
        title={lang === 'hi' ? 'हमारे बारे में' : 'About Us - Heritage & Hospitality'}
        description={getText(prop.fullAbout, prop.fullAboutHi)}
      />

      {/* Hero Banner */}
      <div className="relative py-20 bg-slate-900 text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1600&q=80"
            alt="About Ganga Niwas"
            className="w-full h-full object-cover opacity-25"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/80 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 text-center space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/20 border border-amber-400/30 text-amber-300 text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{getText(prop.category, prop.categoryHi)}</span>
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold tracking-tight">
            {t('navAbout')}
          </h1>
          <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto font-serif italic">
            "{getText(prop.tagline, prop.taglineHi)}"
          </p>
        </div>
      </div>

      {/* Main Story & Philosophy */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Story Text (7 cols) */}
            <div className="lg:col-span-7 space-y-6">
              <div className="space-y-2">
                <span className="text-xs font-bold uppercase tracking-wider text-theme-secondary">
                  {lang === 'hi' ? 'हमारी पृष्ठभूमि एवं इतिहास' : 'Our Legacy & Roots'}
                </span>
                <h2 className="font-serif text-3xl sm:text-4xl font-bold text-theme-primary">
                  {lang === 'hi' ? 'हरिद्वार में आपका आत्मीय एवं पावन आश्रय' : 'Your Serene Sanctuary in the Heart of Haridwar'}
                </h2>
              </div>

              <div className="text-slate-700 text-sm sm:text-base leading-relaxed space-y-4">
                <p>{getText(prop.fullAbout, prop.fullAboutHi)}</p>
                <p>
                  {lang === 'hi'
                    ? 'वर्ष ' + prop.establishedYear + ' में स्थापित, हमारा प्राथमिक ध्येय तीर्थयात्रियों को सात्विक, स्वच्छ और सुरक्षित वातावरण प्रदान करना रहा है ताकि वे बिना किसी चिंता के गंगा दर्शन और पूजा-अर्चना संपन्न कर सकें।'
                    : `Established in ${prop.establishedYear}, our cornerstone has always been providing honest, hygienic, and affordable hospitality so that pilgrims and vacationers can experience Haridwar's divine spiritual energy with total peace of mind.`}
                </p>
              </div>

              {/* Hospitality Philosophy Box */}
              <div className="p-6 rounded-2xl bg-amber-50/80 border border-amber-200/80 space-y-2">
                <div className="flex items-center gap-2 text-amber-900 font-serif font-bold text-lg">
                  <Heart className="w-5 h-5 text-amber-700" />
                  <span>{lang === 'hi' ? 'हमारी सेवा भावना' : 'Hospitality Philosophy'}</span>
                </div>
                <p className="text-amber-950 font-medium italic text-sm">
                  "{getText(prop.hospitalityPhilosophy, prop.hospitalityPhilosophyHi)}"
                </p>
              </div>

              {/* Highlights List */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div className="flex items-center gap-2 text-xs font-semibold text-slate-800">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                  <span>{lang === 'hi' ? 'हर की पौड़ी से मात्र 450 मीटर' : 'Only 450m from Har Ki Pauri'}</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-semibold text-slate-800">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                  <span>{lang === 'hi' ? 'वरिष्ठ नागरिकों हेतु लिफ्ट' : 'Passenger Elevator for Seniors'}</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-semibold text-slate-800">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                  <span>{lang === 'hi' ? 'शुद्ध सात्विक भोजनालय' : 'Pure Veg Satvik Dining'}</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-semibold text-slate-800">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                  <span>{lang === 'hi' ? '24 घंटे गर्म पानी व सुरक्षा' : '24h Hot Water & CCTV Security'}</span>
                </div>
              </div>
            </div>

            {/* Images Grid (5 cols) */}
            <div className="lg:col-span-5 grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <img
                  src="https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=600&q=80"
                  alt="Deluxe Room"
                  className="rounded-2xl shadow-soft aspect-[3/4] object-cover"
                />
                <img
                  src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=600&q=80"
                  alt="Dining Hall"
                  className="rounded-2xl shadow-soft aspect-[4/3] object-cover"
                />
              </div>
              <div className="space-y-4 pt-6">
                <img
                  src="https://images.unsplash.com/photo-1626014303757-6466336e3f4e?auto=format&fit=crop&w=600&q=80"
                  alt="Holy Haridwar Ganga Ghat"
                  className="rounded-2xl shadow-soft aspect-[4/3] object-cover"
                />
                <img
                  src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=600&q=80"
                  alt="Reception"
                  className="rounded-2xl shadow-soft aspect-[3/4] object-cover"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Pilgrim & Family Accommodations Section */}
      <section className="py-16 bg-theme-bg border-t border-theme-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="max-w-3xl mb-12 space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-theme-secondary">
              {lang === 'hi' ? 'पारिवारिक एवं तीर्थयात्री व्यवस्था' : 'Pilgrim & Family Stay Features'}
            </span>
            <h2 className="font-serif text-3xl font-bold text-theme-primary">
              {lang === 'hi' ? 'श्रद्धालुओं और वृद्ध जनों के लिए विशेष ध्यान' : 'Tailored Care for Devotees, Families & Seniors'}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-2xl border border-theme-border shadow-soft">
              <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center mb-4">
                <Users className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-lg font-bold text-theme-primary mb-2">
                {lang === 'hi' ? 'विशाल पारिवारिक कमरे एवं डॉर्मिटरी' : 'Family Suites & Shared Dormitory'}
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                {lang === 'hi'
                  ? '4-बेड और 6-बेड वाले विशाल कमरे ताकि पूरा परिवार एक साथ रह सके, साथ ही एकल यात्रियों हेतु किफायती डॉर्मिटरी बिस्तर उपलब्ध हैं।'
                  : 'Spacious 4-bedded and interconnected suites allow extended families to stay together comfortably, along with clean dormitory beds for solo yatris.'}
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-theme-border shadow-soft">
              <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center mb-4">
                <Sparkles className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-lg font-bold text-theme-primary mb-2">
                {lang === 'hi' ? 'सात्विक भोजनालय' : 'Shri Ganga Satvik Bhojanalaya'}
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                {lang === 'hi'
                  ? 'शुद्ध शाकाहारी, ताजा और घर जैसा भोजन। व्रत एवं अनुष्ठान के दौरान बिना लहसुन-प्याज के विशेष फलाहारी/सात्विक भोजन की व्यवस्था।'
                  : 'Fresh, pure vegetarian and satvik food cooked with utmost hygiene. Customized onion-garlic-free meals available upon request.'}
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-theme-border shadow-soft">
              <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-800 flex items-center justify-center mb-4">
                <Clock className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-lg font-bold text-theme-primary mb-2">
                {lang === 'hi' ? 'आरती एवं स्नान समय सहायता' : 'Aarti & Temple Guidance'}
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                {lang === 'hi'
                  ? 'हमारे स्वागत कक्ष से प्रातःकालीन ब्रह्ममुहूर्त स्नान, सांध्य गंगा आरती और मनसा देवी/चंडी देवी रोपवे का सटीक समय व परामर्श प्राप्त करें।'
                  : 'Our 24-hr front desk provides accurate guidance on morning Ganga Snan timings, evening Aarti seats, and temple ropeway tickets.'}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Property Guidelines & Policies */}
      <section className="py-16 bg-white border-t border-theme-border">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-theme-primary">
              {t('rulesTitle')}
            </h2>
            <p className="text-xs sm:text-sm text-theme-muted">
              {lang === 'hi'
                ? 'सभी अतिथियों के शांतिपूर्ण और मर्यादित प्रवास हेतु कृपया निम्न निर्देशों का पालन करें।'
                : 'To maintain a peaceful, holy, and safe atmosphere, all guests are requested to observe these guidelines.'}
            </p>
          </div>

          <div className="bg-slate-50 rounded-2xl p-6 sm:p-8 border border-slate-200 space-y-4">
            <div className="flex items-start gap-3 p-3 rounded-xl bg-amber-50 border border-amber-200 text-xs text-amber-900 font-medium">
              <ShieldCheck className="w-4 h-4 text-amber-700 flex-shrink-0 mt-0.5" />
              <p>
                <strong>{lang === 'hi' ? 'पहचान पत्र नियम:' : 'Mandatory ID:'} </strong>
                {getText(policies.idProofRequirement, policies.idProofRequirementHi)}
              </p>
            </div>

            <ul className="space-y-3 text-xs sm:text-sm text-slate-700">
              {(lang === 'hi' ? policies.rulesHi : policies.rules).map((rule, idx) => (
                <li key={idx} className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span>{rule}</span>
                </li>
              ))}
            </ul>

            <div className="pt-4 border-t border-slate-200 text-xs text-slate-500">
              <p>
                <strong>{lang === 'hi' ? 'रद्दीकरण नीति:' : 'Cancellation Policy:'} </strong>
                {getText(policies.cancellationPolicy, policies.cancellationPolicyHi)}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Landmarks Component */}
      <LandmarksSection />

      {/* Booking Modal */}
      <BookingModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
      />
    </div>
  );
};
