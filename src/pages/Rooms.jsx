import React, { useState } from 'react';
import { propertyConfig } from '../config/property.config';
import { useLanguage } from '../context/LanguageContext';
import { useTheme } from '../context/ThemeContext';
import { SEOHead } from '../components/SEOHead';
import { RoomCard } from '../components/RoomCard';
import { BookingModal } from '../components/BookingModal';
import { ModeBanner } from '../components/ModeBanner';
import { getQuickWhatsAppUrl } from '../utils/whatsapp';
import { 
  Sparkles, 
  Filter, 
  CalendarDays, 
  Info, 
  MessageCircle, 
  PhoneCall, 
  CheckCircle2,
  Users
} from 'lucide-react';

export const Rooms = () => {
  const { lang, t, getText } = useLanguage();
  const [filter, setFilter] = useState('all');
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedRoom, setSelectedRoom] = useState('');

  const activeRooms = propertyConfig.rooms.filter(r => r.active !== false);

  const filteredRooms = activeRooms.filter(room => {
    if (filter === 'ac') return room.isAC === true;
    if (filter === 'non-ac') return room.isAC === false && room.category !== 'Dormitory';
    if (filter === 'family') return room.category === 'Family' || room.capacity.maxGuests >= 4;
    if (filter === 'dormitory') return room.category === 'Dormitory' || room.priceUnit === 'per_person';
    return true;
  });

  const handleOpenBooking = (roomName) => {
    setSelectedRoom(roomName);
    setModalOpen(true);
  };

  return (
    <div>
      <SEOHead 
        title={lang === 'hi' ? 'कमरे एवं दरें - वातानुकूलित व नॉन-एसी' : 'Rooms & Pricing - Deluxe, Family & Dormitory'}
        description={lang === 'hi' 
          ? 'हरिद्वार में स्वच्छ और किफायती कमरों की दरें: एसी डीलक्स, नॉन-एसी, फैमिली सुइट और तीर्थयात्री डॉर्मिटरी।' 
          : 'Explore transparent room tariffs for AC Deluxe, Family Suites, Triple Sharing and Pilgrim Dormitory at Ganga Niwas Haridwar.'}
      />

      <ModeBanner />

      {/* Hero Header */}
      <div className="relative py-16 md:py-20 bg-slate-900 text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1600&q=80"
            alt="Rooms Banner"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/80 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 text-center space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/20 border border-amber-400/30 text-amber-300 text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{lang === 'hi' ? 'पारदर्शी एवं सुलभ दरें' : 'Transparent & Clean Accommodation'}</span>
          </div>
          <h1 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight">
            {t('navRooms')}
          </h1>
          <p className="text-slate-300 text-xs sm:text-base max-w-2xl mx-auto leading-relaxed">
            {t('roomsSubheading')}
          </p>
        </div>
      </div>

      {/* Main Section */}
      <section className="py-12 md:py-20 bg-theme-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          
          {/* Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
            <button
              onClick={() => setFilter('all')}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                filter === 'all'
                  ? 'bg-theme-secondary text-white shadow-sm'
                  : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              {t('allCategories')} ({activeRooms.length})
            </button>

            <button
              onClick={() => setFilter('ac')}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                filter === 'ac'
                  ? 'bg-theme-secondary text-white shadow-sm'
                  : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              {t('acOnly')}
            </button>

            <button
              onClick={() => setFilter('non-ac')}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                filter === 'non-ac'
                  ? 'bg-theme-secondary text-white shadow-sm'
                  : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              {t('nonAcOnly')}
            </button>

            <button
              onClick={() => setFilter('family')}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                filter === 'family'
                  ? 'bg-theme-secondary text-white shadow-sm'
                  : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              {t('familyOnly')}
            </button>

            <button
              onClick={() => setFilter('dormitory')}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                filter === 'dormitory'
                  ? 'bg-theme-secondary text-white shadow-sm'
                  : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              {t('dormitoryOnly')}
            </button>
          </div>

          {/* Rooms Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredRooms.map((room) => (
              <RoomCard
                key={room.id}
                room={room}
                onSelectRoom={(rName) => handleOpenBooking(rName)}
              />
            ))}
          </div>

          {/* Tariff Notes & Guidelines */}
          <div className="mt-16 bg-white rounded-2xl p-6 sm:p-8 border border-theme-border shadow-soft max-w-4xl mx-auto space-y-4">
            <h3 className="font-serif text-lg font-bold text-theme-primary flex items-center gap-2">
              <Info className="w-5 h-5 text-amber-600" />
              <span>{lang === 'hi' ? 'कमरा बुकिंग एवं दर संबंधी महत्वपूर्ण नियम' : 'Room Tariff & Reservation Inclusions'}</span>
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs text-slate-600 pt-2">
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                <span>
                  <strong>{lang === 'hi' ? 'चेक-इन / चेक-आउट:' : 'Timings:'}</strong> {propertyConfig.policies.checkInTime} Check-in, {propertyConfig.policies.checkOutTime} Check-out.
                </span>
              </div>

              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                <span>
                  <strong>{lang === 'hi' ? 'गर्म पानी सुविधा:' : 'Hot Water:'}</strong> 24-hr geyser hot water in all rooms.
                </span>
              </div>

              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                <span>
                  <strong>{lang === 'hi' ? 'पहचान पत्र:' : 'Mandatory ID:'}</strong> Aadhaar/Voter ID mandatory for every adult guest.
                </span>
              </div>

              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                <span>
                  <strong>{lang === 'hi' ? 'अतिरिक्त व्यक्ति:' : 'Extra Guests:'}</strong> Available on chargeable basis with extra mattress.
                </span>
              </div>
            </div>

            {/* Disclaimer regarding live pricing */}
            <div className="p-3 rounded-xl bg-amber-50/70 border border-amber-200/60 text-xs text-amber-900 mt-2">
              <p>
                <strong>{lang === 'hi' ? 'सूचना:' : 'Note:'}</strong> {lang === 'hi'
                  ? 'सभी दरें सामान्य दिनों के लिए हैं। महाकुंभ, कांवड़ यात्रा, अमावस्या एवं प्रमुख स्नान तिथियों पर दरें भिन्न हो सकती हैं। कृपया व्हाट्सएप पर पुष्टि करें।'
                  : 'All tariffs quoted are standard non-peak rates. Festival dates and special snan melas may carry seasonal variations. Confirm with reception.'}
              </p>
            </div>
          </div>

          {/* Group Booking Callout */}
          <div className="mt-12 rounded-2xl bg-gradient-to-r from-theme-primary to-slate-900 text-white p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-card">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-amber-500 text-slate-950 flex items-center justify-center font-bold flex-shrink-0">
                <Users className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-serif text-lg font-bold text-white">
                  {lang === 'hi' ? 'यात्री संघ एवं सामूहिक बुकिंग' : 'Group & Pilgrim Sangha Bookings'}
                </h4>
                <p className="text-xs text-slate-300 mt-1 max-w-xl">
                  {getText(propertyConfig.dharamshalaFeatures.groupYatriBooking, propertyConfig.dharamshalaFeatures.groupYatriBookingHi)}
                </p>
              </div>
            </div>

            <a
              href={getQuickWhatsAppUrl('group')}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-emerald-600 hover:bg-emerald-500 text-white font-bold px-6 py-3 rounded-xl text-xs sm:text-sm flex items-center gap-2 flex-shrink-0 shadow-md"
            >
              <MessageCircle className="w-4 h-4" />
              <span>{lang === 'hi' ? 'सामूहिक पूछताछ करें' : 'Enquire for Group Stay'}</span>
            </a>
          </div>

        </div>
      </section>

      {/* Modal */}
      <BookingModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        preselectedRoom={selectedRoom}
      />
    </div>
  );
};
