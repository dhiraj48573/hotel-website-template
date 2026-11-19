import React, { useState } from 'react';
import { propertyConfig } from '../config/property.config';
import { useLanguage } from '../context/LanguageContext';
import { useTheme } from '../context/ThemeContext';
import { buildWhatsAppUrl } from '../utils/whatsapp';
import { 
  Sparkles, 
  MapPin, 
  CheckCircle2, 
  Calendar, 
  Users, 
  MessageCircle, 
  PhoneCall, 
  ChevronRight,
  ShieldCheck,
  UtensilsCrossed,
  Droplets
} from 'lucide-react';

export const HeroSection = ({ onOpenBookingModal }) => {
  const { lang, t, getText } = useLanguage();
  const { mode } = useTheme();

  const prop = propertyConfig.property;
  const contact = propertyConfig.contact;
  const rooms = propertyConfig.rooms.filter(r => r.active !== false);

  // Quick form state
  const today = new Date().toISOString().split('T')[0];
  const tomorrow = new Date(Date.now() + 86400000).toISOString().split('T')[0];

  const [quickDates, setQuickDates] = useState({
    checkIn: today,
    checkOut: tomorrow,
    adults: '2',
    roomType: rooms.length > 0 ? rooms[0].name : ''
  });

  const handleQuickSubmit = (e) => {
    e.preventDefault();
    const url = buildWhatsAppUrl({
      checkIn: quickDates.checkIn,
      checkOut: quickDates.checkOut,
      adults: quickDates.adults,
      roomType: quickDates.roomType
    });
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="relative min-h-[90vh] lg:min-h-[92vh] flex items-center justify-center overflow-hidden bg-slate-950 text-white">
      {/* Background Image with Curated Indian Hospitality / Haridwar Ganga Backdrop */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=2000&q=85"
          alt={getText(prop.name, prop.nameHi)}
          className="w-full h-full object-cover object-center transform scale-105 transition-transform duration-10000"
        />
        {/* Multi-layered dark and warm gradient overlays for readability and luxury */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-950/80 to-slate-900/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-slate-950/40" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-16 lg:py-24 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Hero Content (7 Cols) */}
          <div className="lg:col-span-7 space-y-6 text-left">
            {/* Category & Location Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-amber-400/30 text-amber-300 text-xs font-semibold tracking-wide uppercase">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              <span>{getText(prop.category, prop.categoryHi)}</span>
              <span>•</span>
              <span className="flex items-center gap-1 text-slate-200">
                <MapPin className="w-3 h-3 text-amber-400" />
                {getText(contact.address.city, contact.address.cityHi)}
              </span>
            </div>

            {/* Property Name & Headline */}
            <div className="space-y-2">
              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.15]">
                {getText(prop.name, prop.nameHi)}
              </h1>
              
              <p className="text-amber-400 font-serif italic text-lg sm:text-xl font-medium tracking-wide">
                "{getText(prop.tagline, prop.taglineHi)}"
              </p>

              <div className="pt-2">
                <h2 className="text-xl sm:text-2xl font-bold tracking-wider text-slate-200 uppercase font-sans border-l-4 border-amber-500 pl-3">
                  {getText(prop.headline, prop.headlineHi)}
                </h2>
              </div>
            </div>

            {/* Short Property Introduction */}
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-2xl">
              {getText(prop.shortIntro, prop.shortIntroHi)}
            </p>

            {/* Key Trust Highlights Pills */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
              <div className="flex items-center gap-2 p-2 rounded-xl bg-white/5 border border-white/10 text-xs text-slate-200 backdrop-blur-sm">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span>{getText(contact.address.landmarkHint, contact.address.landmarkHintHi)}</span>
              </div>

              <div className="flex items-center gap-2 p-2 rounded-xl bg-white/5 border border-white/10 text-xs text-slate-200 backdrop-blur-sm">
                <UtensilsCrossed className="w-4 h-4 text-amber-400 flex-shrink-0" />
                <span>{lang === 'hi' ? 'शुद्ध सात्विक भोजनालय' : 'Pure Veg Satvik Food'}</span>
              </div>

              <div className="flex items-center gap-2 p-2 rounded-xl bg-white/5 border border-white/10 text-xs text-slate-200 backdrop-blur-sm col-span-2 sm:col-span-1">
                <Droplets className="w-4 h-4 text-blue-400 flex-shrink-0" />
                <span>{lang === 'hi' ? '24 घंटे गर्म पानी व लिफ्ट' : '24h Hot Water & Lift'}</span>
              </div>
            </div>

            {/* Primary Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <button
                onClick={onOpenBookingModal}
                className="bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold px-7 py-3.5 rounded-xl shadow-lg hover:shadow-amber-500/20 transition-all transform hover:-translate-y-0.5 active:scale-95 flex items-center gap-2 text-sm sm:text-base cursor-pointer"
              >
                <span>{t('checkAvailability')}</span>
                <ChevronRight className="w-4 h-4" />
              </button>

              <button
                onClick={handleQuickSubmit}
                className="bg-emerald-600 hover:bg-emerald-700 text-white font-semibold px-6 py-3.5 rounded-xl shadow-lg hover:shadow-emerald-600/20 transition-all flex items-center gap-2 text-sm sm:text-base cursor-pointer"
              >
                <MessageCircle className="w-5 h-5" />
                <span>{lang === 'hi' ? 'व्हाट्सएप पूछताछ' : 'WhatsApp Enquiry'}</span>
              </button>
            </div>
          </div>

          {/* Right Quick Stay Check Widget (5 Cols) */}
          <div className="lg:col-span-5">
            <div className="bg-white/95 text-slate-900 rounded-3xl shadow-floating p-6 sm:p-8 border border-white/20 backdrop-blur-md">
              <div className="flex items-center justify-between pb-4 mb-5 border-b border-slate-100">
                <div>
                  <h3 className="font-serif text-lg sm:text-xl font-bold text-slate-900">
                    {t('quickEnquiry')}
                  </h3>
                  <p className="text-xs text-slate-500">
                    {lang === 'hi' ? 'सीधे व्हाट्सएप पर दरें व उपलब्धता जानें' : 'Instant WhatsApp availability check'}
                  </p>
                </div>
                <div className="w-9 h-9 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center">
                  <MessageCircle className="w-5 h-5" />
                </div>
              </div>

              <form onSubmit={handleQuickSubmit} className="space-y-4 text-xs">
                {/* Dates */}
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block font-semibold uppercase text-slate-500 mb-1">
                      {t('checkInDate')}
                    </label>
                    <input
                      type="date"
                      min={today}
                      value={quickDates.checkIn}
                      onChange={(e) => setQuickDates({ ...quickDates, checkIn: e.target.value })}
                      className="w-full px-3 py-2.5 rounded-lg border border-slate-200 bg-slate-50 text-slate-800 focus:bg-white focus:outline-none focus:ring-2 focus:ring-amber-500/20 text-xs font-medium"
                    />
                  </div>

                  <div>
                    <label className="block font-semibold uppercase text-slate-500 mb-1">
                      {t('checkOutDate')}
                    </label>
                    <input
                      type="date"
                      min={quickDates.checkIn || today}
                      value={quickDates.checkOut}
                      onChange={(e) => setQuickDates({ ...quickDates, checkOut: e.target.value })}
                      className="w-full px-3 py-2.5 rounded-lg border border-slate-200 bg-slate-50 text-slate-800 focus:bg-white focus:outline-none focus:ring-2 focus:ring-amber-500/20 text-xs font-medium"
                    />
                  </div>
                </div>

                {/* Room Type */}
                <div>
                  <label className="block font-semibold uppercase text-slate-500 mb-1">
                    {t('selectRoomType')}
                  </label>
                  <select
                    value={quickDates.roomType}
                    onChange={(e) => setQuickDates({ ...quickDates, roomType: e.target.value })}
                    className="w-full px-3 py-2.5 rounded-lg border border-slate-200 bg-slate-50 text-slate-800 focus:bg-white focus:outline-none focus:ring-2 focus:ring-amber-500/20 text-xs font-medium"
                  >
                    {rooms.map(room => (
                      <option key={room.id} value={room.name}>
                        {getText(room.name, room.nameHi)} {room.pricingMode === 'fixed' ? `(₹${room.price})` : ''}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Adults */}
                <div>
                  <label className="block font-semibold uppercase text-slate-500 mb-1">
                    {t('numberOfAdults')}
                  </label>
                  <select
                    value={quickDates.adults}
                    onChange={(e) => setQuickDates({ ...quickDates, adults: e.target.value })}
                    className="w-full px-3 py-2.5 rounded-lg border border-slate-200 bg-slate-50 text-slate-800 focus:bg-white focus:outline-none focus:ring-2 focus:ring-amber-500/20 text-xs font-medium"
                  >
                    {[1, 2, 3, 4, 5, 6, 8, '10+ Group'].map(n => (
                      <option key={n} value={n}>
                        {n} {lang === 'hi' ? 'अतिथि / वयस्क' : 'Adult Guests'}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Submit to WhatsApp */}
                <button
                  type="submit"
                  className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-3 px-4 rounded-xl flex items-center justify-center gap-2 shadow-md transition-all cursor-pointer text-sm"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>{lang === 'hi' ? 'व्हाट्सएप पर दर व उपलब्धता पूछें' : 'Check Availability on WhatsApp'}</span>
                </button>
              </form>

              <p className="text-[11px] text-slate-500 text-center mt-3">
                {lang === 'hi'
                  ? '⚡ 10 मिनट के भीतर त्वरित जवाब • कोई अग्रिम बुकिंग शुल्क नहीं'
                  : '⚡ Direct Reception Response • Safe & Verified Reservation'}
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};
