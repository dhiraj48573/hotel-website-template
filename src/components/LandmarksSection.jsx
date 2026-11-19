import React from 'react';
import { propertyConfig } from '../config/property.config';
import { useLanguage } from '../context/LanguageContext';
import { 
  MapPin, 
  Navigation, 
  Clock, 
  ExternalLink, 
  Sparkles,
  Footprints,
  Car
} from 'lucide-react';

export const LandmarksSection = () => {
  const { lang, t, getText } = useLanguage();
  const landmarks = propertyConfig.landmarks;

  return (
    <section className="py-16 md:py-24 bg-white border-t border-theme-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-100 text-blue-800 text-xs font-semibold uppercase tracking-wider">
            <MapPin className="w-3.5 h-3.5" />
            <span>{lang === 'hi' ? 'स्थान लाभ' : 'Prime Location Advantages'}</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-theme-primary tracking-tight">
            {t('landmarksHeading')}
          </h2>
          <p className="text-theme-muted text-sm sm:text-base leading-relaxed">
            {t('landmarksSubheading')}
          </p>
        </div>

        {/* Landmarks Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {landmarks.map((landmark) => {
            const isWalking = landmark.time.includes('walk') || landmark.timeHi?.includes('पैदल');
            return (
              <div
                key={landmark.id}
                className="bg-slate-50/80 rounded-2xl p-6 border border-slate-200/80 hover:bg-white hover:border-amber-300 hover:shadow-card transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <span className="px-2.5 py-1 rounded-lg text-[11px] font-bold uppercase tracking-wider bg-white text-slate-700 border border-slate-200">
                      {landmark.category}
                    </span>
                    <span className="text-sm font-bold text-theme-secondary flex items-center gap-1">
                      <Navigation className="w-3.5 h-3.5" />
                      {landmark.distance}
                    </span>
                  </div>

                  <h3 className="font-serif text-lg font-bold text-theme-primary mb-1 group-hover:text-amber-700 transition-colors">
                    {getText(landmark.name, landmark.nameHi)}
                  </h3>

                  <div className="flex items-center gap-1.5 text-xs text-emerald-700 font-semibold mb-3">
                    {isWalking ? <Footprints className="w-3.5 h-3.5" /> : <Car className="w-3.5 h-3.5" />}
                    <span>{getText(landmark.time, landmark.timeHi)}</span>
                  </div>

                  <p className="text-xs text-slate-600 leading-relaxed">
                    {getText(landmark.description, landmark.descriptionHi)}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-slate-200/60 flex items-center justify-between">
                  <span className="text-[11px] text-slate-500">
                    {lang === 'hi' ? 'सत्यापित दूरी' : 'Verified Distance'}
                  </span>
                  <a
                    href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(landmark.name + ' Haridwar')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-semibold text-theme-secondary hover:text-amber-700 flex items-center gap-1"
                  >
                    <span>{t('getDirections')}</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
