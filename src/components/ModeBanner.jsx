import React from 'react';
import { propertyConfig } from '../config/property.config';
import { useLanguage } from '../context/LanguageContext';
import { useTheme } from '../context/ThemeContext';
import { 
  AlertTriangle, 
  Sparkles, 
  HeartHandshake, 
  ShieldCheck, 
  Utensils, 
  Building2,
  CalendarDays
} from 'lucide-react';

export const ModeBanner = () => {
  const { lang, t, getText } = useLanguage();
  const { mode } = useTheme();
  const policies = propertyConfig.policies;
  const dharamshala = propertyConfig.dharamshalaFeatures;
  const hotel = propertyConfig.hotelFeatures;

  return (
    <div className="w-full">
      {/* 1. Peak Season / Festival Tariff Notice (if enabled) */}
      {policies.showPeakSeasonNotice && (
        <div className="bg-gradient-to-r from-amber-600 to-amber-700 text-white text-xs py-2.5 px-4 shadow-inner">
          <div className="max-w-7xl mx-auto flex items-center justify-between gap-3">
            <div className="flex items-center gap-2">
              <CalendarDays className="w-4 h-4 flex-shrink-0 text-amber-200" />
              <p className="font-medium">
                <span className="font-bold underline mr-1">{t('festivalNoticeBadge')}:</span>
                {getText(policies.peakSeasonNotice, policies.peakSeasonNoticeHi)}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* 2. Dharamshala Mode Advisory Banner (when dharamshala or hybrid mode is active) */}
      {(mode === 'dharamshala' || mode === 'hybrid') && (
        <div className="bg-amber-50/90 border-b border-amber-200 text-amber-950 py-3 px-4 text-xs">
          <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-2">
              <HeartHandshake className="w-4 h-4 text-amber-700 flex-shrink-0" />
              <span>
                <strong>{t('modeDharamshalaBadge')}:</strong> {getText(dharamshala.isDonationOrFixed, dharamshala.isDonationOrFixedHi)} • {lang === 'hi' ? 'परिवार एवं यात्री संघों का पावन स्वागत' : 'Devotees & Pilgrim Groups Welcome'}
              </span>
            </div>
            <div className="flex items-center gap-4 text-[11px] font-semibold text-amber-900">
              <span>✓ {lang === 'hi' ? '100% शुद्ध शाकाहारी परिसर' : '100% Pure Veg Premise'}</span>
              <span>✓ {lang === 'hi' ? 'बुजुर्गों हेतु लिफ्ट' : 'Senior Lift Facility'}</span>
            </div>
          </div>
        </div>
      )}

      {/* 3. Hotel Mode Advisory Banner (when hotel mode is active) */}
      {mode === 'hotel' && (
        <div className="bg-blue-50/90 border-b border-blue-200 text-blue-950 py-3 px-4 text-xs">
          <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-2">
              <Building2 className="w-4 h-4 text-blue-700 flex-shrink-0" />
              <span>
                <strong>{t('modeHotelBadge')}:</strong> {getText(hotel.powerBackup, hotel.powerBackup)}
              </span>
            </div>
            <div className="flex items-center gap-4 text-[11px] font-semibold text-blue-900">
              <span>✓ {hotel.roomService}</span>
              <span>✓ {lang === 'hi' ? 'टैक्सी एवं यात्रा परामर्श' : 'Travel Desk Support'}</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
