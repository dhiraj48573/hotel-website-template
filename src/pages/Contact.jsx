import React, { useState } from 'react';
import { propertyConfig } from '../config/property.config';
import { useLanguage } from '../context/LanguageContext';
import { SEOHead } from '../components/SEOHead';
import { BookingEnquiryForm } from '../components/BookingEnquiryForm';
import { LocationSection } from '../components/LocationSection';
import { ModeBanner } from '../components/ModeBanner';
import { cleanPhoneForTel } from '../utils/helpers';
import { getQuickWhatsAppUrl } from '../utils/whatsapp';
import { 
  Phone, 
  MessageCircle, 
  Mail, 
  MapPin, 
  Clock, 
  HelpCircle, 
  ChevronDown, 
  Sparkles,
  ExternalLink,
  ShieldCheck
} from 'lucide-react';

export const Contact = () => {
  const { lang, t, getText } = useLanguage();
  const contact = propertyConfig.contact;
  const policies = propertyConfig.policies;
  const prop = propertyConfig.property;

  const [activeFaq, setActiveFaq] = useState(null);

  const faqs = [
    {
      q: "How far is Ganga Niwas from Har Ki Pauri?",
      qHi: "गंगा निवास हर की पौड़ी से कितनी दूरी पर है?",
      a: "Ganga Niwas is situated just 450 meters from Har Ki Pauri and Brahma Kund. It takes only 5 to 6 minutes of comfortable walking through the Upper Road bazar.",
      aHi: "गंगा निवास हर की पौड़ी और ब्रह्मकुंड से मात्र 450 मीटर की दूरी पर स्थित है। अपर रोड बाजार से केवल 5-6 मिनट की सुगम पैदल दूरी है।"
    },
    {
      q: "Is elevator (lift) facility available for elderly parents?",
      qHi: "क्या बुजुर्ग माता-पिता के लिए लिफ्ट की सुविधा उपलब्ध है?",
      a: "Yes, we have a modern passenger elevator operating 24 hours that connects to all guest room floors, making it very comfortable for senior devotees.",
      aHi: "जी हां, हमारे यहां 24 घंटे संचालित आधुनिक पैसेंजर लिफ्ट उपलब्ध है जो सभी मंजिलों तक जाती है।"
    },
    {
      q: "What are the check-in and check-out timings?",
      qHi: "चेक-इन और चेक-आउट का समय क्या है?",
      a: `Standard check-in time is ${policies.checkInTime} and check-out is ${policies.checkOutTime}. Early check-in depends on room availability upon arrival.`,
      aHi: `चेक-इन का समय ${policies.checkInTimeHi || policies.checkInTime} और चेक-आउट का समय ${policies.checkOutTimeHi || policies.checkOutTime} है। जल्दी चेक-इन कमरे की उपलब्धता पर निर्भर करता है।`
    },
    {
      q: "Is pure vegetarian and satvik food available?",
      qHi: "क्या शुद्ध शाकाहारी और सात्विक भोजन उपलब्ध है?",
      a: "Yes! Shri Ganga Satvik Bhojanalaya serves pure vegetarian, home-style food cooked in pure ghee. We also prepare onion-and-garlic-free meals on request.",
      aHi: "जी हां! हमारे सात्विक भोजनालय में शुद्ध शाकाहारी, घर जैसा भोजन मिलता है। मांग पर बिना प्याज-लहसुन का भोजन भी बनाया जाता है।"
    },
    {
      q: "How is my booking confirmed?",
      qHi: "मेरी बुकिंग की पुष्टि कैसे होगी?",
      a: "After you submit this enquiry form, a WhatsApp message is sent to our front desk. Our team checks real-time room availability, confirms the final tariff and shares advance payment details to confirm your reservation.",
      aHi: "फॉर्म जमा करने के बाद सीधे व्हाट्सएप संदेश हमारे रिसेप्शन पर पहुंचता है। उपलब्धता जांचने के बाद रिसेप्शन द्वारा आरक्षण की पुष्टि की जाती है।"
    }
  ];

  return (
    <div>
      <SEOHead 
        title={lang === 'hi' ? 'संपर्क एवं कमरा पूछताछ' : 'Contact & Booking Enquiry'}
        description={lang === 'hi'
          ? 'गंगा निवास हरिद्वार से सीधे संपर्क करें। फोन, व्हाट्सएप और ऑनलाइन पूछताछ द्वारा कमरा बुक करें।'
          : 'Contact reception at Ganga Niwas Haridwar. Direct phone, WhatsApp enquiry and location assistance.'}
      />

      <ModeBanner />

      {/* Header */}
      <div className="relative py-16 md:py-20 bg-slate-900 text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1600&q=80"
            alt="Contact Banner"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/80 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 text-center space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/20 border border-amber-400/30 text-amber-300 text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{lang === 'hi' ? 'सीधा संपर्क एवं सहायता' : 'Direct Reception Help'}</span>
          </div>
          <h1 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight">
            {t('navContact')}
          </h1>
          <p className="text-slate-300 text-xs sm:text-base max-w-2xl mx-auto leading-relaxed">
            {lang === 'hi'
              ? 'आगमन से पूर्व कमरे की उपलब्धता एवं दरों की जानकारी हेतु फॉर्म भरें अथवा सीधे कॉल करें।'
              : 'Connect with our front desk team for advance bookings, pilgrimage group queries and travel guidance.'}
          </p>
        </div>
      </div>

      {/* Main Grid: Form (7 cols) + Quick Contact Info Cards (5 cols) */}
      <section className="py-12 md:py-20 bg-theme-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            
            {/* Left Enquiry Form (7 cols) */}
            <div className="lg:col-span-7">
              <BookingEnquiryForm />
            </div>

            {/* Right Contact Quick Cards (5 cols) */}
            <div className="lg:col-span-5 space-y-6">
              
              {/* Card 1: Reception Numbers */}
              <div className="bg-white rounded-2xl p-6 border border-theme-border shadow-soft space-y-4">
                <h3 className="font-serif text-lg font-bold text-theme-primary flex items-center gap-2">
                  <Phone className="w-5 h-5 text-amber-600" />
                  <span>{lang === 'hi' ? 'सीधे फोन एवं व्हाट्सएप' : 'Front Desk Direct Contacts'}</span>
                </h3>

                <div className="space-y-3">
                  <a
                    href={`tel:${cleanPhoneForTel(contact.phone)}`}
                    className="p-3.5 rounded-xl bg-slate-50 hover:bg-slate-100 border border-slate-200 flex items-center justify-between transition-colors"
                  >
                    <div>
                      <span className="block text-[11px] text-slate-500 uppercase">{lang === 'hi' ? 'प्राथमिक संपर्क' : 'Primary Phone'}</span>
                      <strong className="text-sm text-slate-900">{contact.phoneDisplay}</strong>
                    </div>
                    <span className="text-xs font-semibold text-theme-secondary flex items-center gap-1">
                      {t('callUs')} →
                    </span>
                  </a>

                  <a
                    href={getQuickWhatsAppUrl('reception')}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3.5 rounded-xl bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 flex items-center justify-between transition-colors"
                  >
                    <div>
                      <span className="block text-[11px] text-emerald-700 uppercase font-semibold">WhatsApp Desk</span>
                      <strong className="text-sm text-emerald-950">{contact.whatsappDisplay}</strong>
                    </div>
                    <span className="text-xs font-semibold text-emerald-700 flex items-center gap-1">
                      {t('whatsappUs')} →
                    </span>
                  </a>

                  <a
                    href={`mailto:${contact.email}`}
                    className="p-3.5 rounded-xl bg-slate-50 hover:bg-slate-100 border border-slate-200 flex items-center justify-between transition-colors"
                  >
                    <div>
                      <span className="block text-[11px] text-slate-500 uppercase">Email</span>
                      <strong className="text-xs sm:text-sm text-slate-900">{contact.email}</strong>
                    </div>
                    <Mail className="w-4 h-4 text-slate-500" />
                  </a>
                </div>
              </div>

              {/* Card 2: Property Address & Distance */}
              <div className="bg-white rounded-2xl p-6 border border-theme-border shadow-soft space-y-3">
                <h3 className="font-serif text-lg font-bold text-theme-primary flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-amber-600" />
                  <span>{lang === 'hi' ? 'पता एवं मुख्य पड़ाव' : 'Address & Proximity'}</span>
                </h3>

                <div className="text-xs text-slate-700 space-y-1.5 leading-relaxed">
                  <p className="font-semibold text-slate-900 text-sm">
                    {getText(contact.address.street, contact.address.streetHi)}
                  </p>
                  <p>
                    {getText(contact.address.city, contact.address.cityHi)}, {getText(contact.address.state, contact.address.stateHi)} - {contact.address.pincode}
                  </p>
                  <p className="text-amber-800 font-medium bg-amber-50 p-2 rounded-lg">
                    ★ {getText(contact.address.landmarkHint, contact.address.landmarkHintHi)}
                  </p>
                </div>

                <div className="pt-2">
                  <a
                    href={contact.googleMapsDirectionsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-slate-900 hover:bg-slate-800 text-white font-semibold py-2.5 px-4 rounded-xl flex items-center justify-center gap-2 text-xs transition-colors"
                  >
                    <span>{t('getDirections')} (Google Maps)</span>
                    <ExternalLink className="w-3.5 h-3.5 text-amber-400" />
                  </a>
                </div>
              </div>

              {/* Card 3: Check-in / ID notice */}
              <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200/80 text-xs text-amber-950 space-y-2">
                <p className="font-bold flex items-center gap-1.5 text-amber-900">
                  <ShieldCheck className="w-4 h-4 text-amber-700" />
                  <span>{lang === 'hi' ? 'महत्वपूर्ण सूचना' : 'Important Check-in Advisory'}</span>
                </p>
                <p>{getText(policies.idProofRequirement, policies.idProofRequirementHi)}</p>
                <p className="text-slate-600 pt-1">
                  Check-in: <strong>{policies.checkInTime}</strong> | Check-out: <strong>{policies.checkOutTime}</strong>
                </p>
              </div>

            </div>

          </div>

          {/* Frequently Asked Questions (FAQ) */}
          <div className="mt-20 max-w-4xl mx-auto">
            <div className="text-center mb-10 space-y-2">
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-theme-primary">
                {lang === 'hi' ? 'अक्सर पूछे जाने वाले प्रश्न (FAQ)' : 'Frequently Asked Questions'}
              </h3>
              <p className="text-xs sm:text-sm text-theme-muted">
                {lang === 'hi'
                  ? 'हरिद्वार यात्रा और हमारे आवास से जुड़े सामान्य प्रश्नों के उत्तर।'
                  : 'Quick answers about distances, lift facilities, food, and booking.'}
              </p>
            </div>

            <div className="space-y-3">
              {faqs.map((faq, idx) => {
                const isOpen = activeFaq === idx;
                return (
                  <div
                    key={idx}
                    className="bg-white rounded-2xl border border-theme-border shadow-soft overflow-hidden"
                  >
                    <button
                      onClick={() => setActiveFaq(isOpen ? null : idx)}
                      className="w-full text-left p-5 flex items-center justify-between gap-4 font-semibold text-sm text-theme-primary hover:text-amber-700 transition-colors cursor-pointer"
                    >
                      <span>{getText(faq.q, faq.qHi)}</span>
                      <ChevronDown className={`w-4 h-4 text-slate-400 flex-shrink-0 transition-transform ${
                        isOpen ? 'rotate-180 text-amber-600' : ''
                      }`} />
                    </button>

                    {isOpen && (
                      <div className="px-5 pb-5 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-3">
                        <p>{getText(faq.a, faq.aHi)}</p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </section>

      {/* Map Section */}
      <LocationSection />
    </div>
  );
};
