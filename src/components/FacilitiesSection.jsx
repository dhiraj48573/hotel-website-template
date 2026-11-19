import React from 'react';
import { propertyConfig } from '../config/property.config';
import { useLanguage } from '../context/LanguageContext';
import { 
  Wifi, 
  Flame, 
  UtensilsCrossed, 
  ChevronsUp, 
  Car, 
  ShieldCheck, 
  Zap, 
  Droplets, 
  Clock, 
  Accessibility,
  CheckCircle2,
  Sparkles
} from 'lucide-react';

const iconMap = {
  Wifi: Wifi,
  Flame: Flame,
  UtensilsCrossed: UtensilsCrossed,
  ChevronsUp: ChevronsUp,
  Car: Car,
  ShieldCheck: ShieldCheck,
  Zap: Zap,
  Droplets: Droplets,
  Clock: Clock,
  Accessibility: Accessibility
};

export const FacilitiesSection = ({ showAll = false }) => {
  const { lang, t, getText } = useLanguage();
  const allFacilities = propertyConfig.facilities;
  const facilities = showAll ? allFacilities : allFacilities.slice(0, 8);

  return (
    <section className="py-16 md:py-24 bg-theme-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100 text-amber-800 text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{lang === 'hi' ? 'आतिथ्य एवं सुविधाएं' : 'Comfort & Convenience'}</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-theme-primary tracking-tight">
            {t('facilitiesHeading')}
          </h2>
          <p className="text-theme-muted text-sm sm:text-base leading-relaxed">
            {t('facilitiesSubheading')}
          </p>
        </div>

        {/* Facilities Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {facilities.map((facility) => {
            const IconComponent = iconMap[facility.icon] || CheckCircle2;
            return (
              <div
                key={facility.id}
                className="bg-white rounded-2xl p-6 border border-theme-border shadow-soft hover:shadow-card hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-amber-50 text-amber-700 flex items-center justify-center mb-4 group-hover:bg-amber-500 group-hover:text-white transition-colors duration-300">
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <h3 className="font-serif text-base font-bold text-theme-primary mb-2">
                    {getText(facility.name, facility.nameHi)}
                  </h3>
                  <p className="text-xs text-theme-muted leading-relaxed">
                    {getText(facility.description, facility.descriptionHi)}
                  </p>
                </div>

                {facility.isHighlight && (
                  <div className="mt-4 pt-3 border-t border-slate-100 flex items-center gap-1 text-[11px] font-semibold text-emerald-600">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>{lang === 'hi' ? 'विशेष सुविधा' : 'Verified Amenity'}</span>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Special Food / Bhojanalaya Highlight Banner */}
        {propertyConfig.dharamshalaFeatures.bhojanalayaAvailable && (
          <div className="mt-12 rounded-3xl bg-gradient-to-r from-amber-50 via-amber-100/60 to-orange-50 border border-amber-200/80 p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-soft">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-amber-600 text-white flex items-center justify-center shadow-md flex-shrink-0">
                <UtensilsCrossed className="w-7 h-7" />
              </div>
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-amber-800">
                  {lang === 'hi' ? 'सात्विक आहार' : 'Satvik Dining Facility'}
                </span>
                <h3 className="font-serif text-xl font-bold text-amber-950">
                  {getText(propertyConfig.dharamshalaFeatures.bhojanalayaTitle, propertyConfig.dharamshalaFeatures.bhojanalayaTitleHi)}
                </h3>
                <p className="text-xs text-amber-900/80 mt-1 max-w-xl">
                  {getText(propertyConfig.dharamshalaFeatures.bhojanalayaDetails, propertyConfig.dharamshalaFeatures.bhojanalayaDetailsHi)}
                </p>
              </div>
            </div>

            <div className="text-left md:text-right flex-shrink-0 border-t md:border-t-0 md:border-l border-amber-200 pt-4 md:pt-0 md:pl-6">
              <p className="text-xs font-semibold text-amber-900">
                {lang === 'hi' ? 'भोजन समय:' : 'Meal Timings:'}
              </p>
              <p className="text-xs text-amber-800">
                {lang === 'hi' ? 'दोपहर:' : 'Lunch:'} {propertyConfig.dharamshalaFeatures.mealTimings.lunch}
              </p>
              <p className="text-xs text-amber-800">
                {lang === 'hi' ? 'रात्रि:' : 'Dinner:'} {propertyConfig.dharamshalaFeatures.mealTimings.dinner}
              </p>
              <p className="text-xs font-bold text-amber-950 mt-1">
                {propertyConfig.dharamshalaFeatures.mealPrice}
              </p>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
