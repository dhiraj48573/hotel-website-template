import React from 'react';
import { propertyConfig } from '../config/property.config';
import { useLanguage } from '../context/LanguageContext';
import { useTheme } from '../context/ThemeContext';
import { SEOHead } from '../components/SEOHead';
import { FacilitiesSection } from '../components/FacilitiesSection';
import { GallerySection } from '../components/GallerySection';
import { ModeBanner } from '../components/ModeBanner';
import { 
  Sparkles, 
  UtensilsCrossed, 
  ShieldCheck, 
  ChevronsUp, 
  Flame, 
  Wifi, 
  Accessibility,
  Heart
} from 'lucide-react';

export const Facilities = () => {
  const { lang, t, getText } = useLanguage();
  const prop = propertyConfig.property;
  const dharamshala = propertyConfig.dharamshalaFeatures;

  return (
    <div>
      <SEOHead 
        title={lang === 'hi' ? 'सुविधाएं एवं छायाचित्र गैलरी' : 'Facilities & Photo Gallery'}
        description={lang === 'hi'
          ? 'गंगा निवास हरिद्वार की सुविधाएं: लिफ्ट, 24 घंटे गर्म पानी, शुद्ध सात्विक भोजनालय, वाई-फाई एवं छायाचित्र।'
          : 'Verified amenities at Ganga Niwas Haridwar: Elevator/lift, pure vegetarian satvik food, 24h hot water, Wi-Fi and high-resolution photo gallery.'}
      />

      <ModeBanner />

      {/* Header */}
      <div className="relative py-16 md:py-20 bg-slate-900 text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1600&q=80"
            alt="Facilities Banner"
            className="w-full h-full object-cover opacity-25"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/80 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 text-center space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/20 border border-amber-400/30 text-amber-300 text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{lang === 'hi' ? 'आतिथ्य, स्वच्छता व सुख-सुविधा' : 'Cleanliness, Comfort & Peace'}</span>
          </div>
          <h1 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight">
            {t('navFacilities')}
          </h1>
          <p className="text-slate-300 text-xs sm:text-base max-w-2xl mx-auto leading-relaxed">
            {t('facilitiesSubheading')}
          </p>
        </div>
      </div>

      {/* Complete Facilities Grid */}
      <FacilitiesSection showAll={true} />

      {/* Bhojanalaya & Satvik Dining Deep-dive */}
      <section className="py-16 bg-white border-t border-theme-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            <div className="lg:col-span-6 space-y-5">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100 text-amber-800 text-xs font-semibold uppercase tracking-wider">
                <UtensilsCrossed className="w-3.5 h-3.5" />
                <span>{lang === 'hi' ? 'शुद्ध सात्विक खानपान' : 'Satvik Dining Philosophy'}</span>
              </div>

              <h2 className="font-serif text-3xl font-bold text-theme-primary">
                {getText(dharamshala.bhojanalayaTitle, dharamshala.bhojanalayaTitleHi)}
              </h2>

              <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
                {getText(dharamshala.bhojanalayaDetails, dharamshala.bhojanalayaDetailsHi)}
              </p>

              <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200/80 space-y-2 text-xs text-amber-950">
                <p><strong>✓ {lang === 'hi' ? 'दोपहर भोजन समय:' : 'Lunch Hours:'}</strong> {dharamshala.mealTimings.lunch}</p>
                <p><strong>✓ {lang === 'hi' ? 'रात्रि भोजन समय:' : 'Dinner Hours:'}</strong> {dharamshala.mealTimings.dinner}</p>
                <p><strong>✓ {lang === 'hi' ? 'थली दर:' : 'Thali Charges:'}</strong> {dharamshala.mealPrice}</p>
                <p className="text-amber-800 italic pt-1">
                  * {lang === 'hi' ? 'एकादशी व व्रत के दिनों में फलाहारी भोजन उपलब्ध।' : 'Special fasting (Falahari) meals prepared on Ekadashi & sacred festival days.'}
                </p>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="rounded-3xl overflow-hidden shadow-card border border-theme-border">
                <img
                  src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1000&q=80"
                  alt="Satvik Bhojanalaya Hall"
                  className="w-full h-80 object-cover"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Full Photo Gallery with Lightbox */}
      <GallerySection isPreview={false} />

    </div>
  );
};
