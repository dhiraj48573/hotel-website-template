import React from 'react';
import { propertyConfig } from '../config/property.config';
import { useLanguage } from '../context/LanguageContext';
import { Star, Quote, CheckCircle, Sparkles } from 'lucide-react';

export const TestimonialsSection = () => {
  const { lang, t, getText } = useLanguage();
  const testimonials = propertyConfig.testimonials;

  return (
    <section className="py-16 md:py-24 bg-theme-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{lang === 'hi' ? 'प्रामाणिक अतिथि समीक्षाएं' : 'Verified Guest Reviews'}</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-theme-primary tracking-tight">
            {t('testimonialsHeading')}
          </h2>
          <p className="text-theme-muted text-sm sm:text-base leading-relaxed">
            {t('testimonialsSubheading')}
          </p>
        </div>

        {/* Testimonials Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-3xl p-7 border border-theme-border shadow-soft flex flex-col justify-between relative group hover:shadow-card transition-all duration-300"
            >
              <Quote className="w-10 h-10 text-amber-200/80 absolute top-6 right-6 pointer-events-none" />

              <div>
                {/* 5 Stars */}
                <div className="flex items-center gap-1 text-amber-500 mb-4">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>

                {/* Review Text */}
                <p className="text-slate-700 text-sm leading-relaxed italic mb-6">
                  "{getText(item.review, item.reviewHi)}"
                </p>
              </div>

              {/* Guest Profile Details */}
              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <div>
                  <h4 className="font-serif text-sm font-bold text-theme-primary flex items-center gap-1.5">
                    {getText(item.name, item.nameHi)}
                    <CheckCircle className="w-3.5 h-3.5 text-emerald-600 inline" title="Verified Guest Stay" />
                  </h4>
                  <p className="text-xs text-theme-muted">
                    {getText(item.location, item.locationHi)} • {getText(item.stayType, item.stayTypeHi)}
                  </p>
                </div>
                <span className="text-[11px] text-slate-400 font-medium">
                  {item.date}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Trust disclaimer */}
        <div className="mt-10 text-center text-xs text-theme-muted">
          <p>
            {lang === 'hi' 
              ? '✨ समस्त समीक्षाएं प्रत्यक्ष रूप से ठहरे हुए वास्तविक श्रद्धालुओं एवं परिवारों द्वारा प्रमाणित हैं।'
              : '✨ All testimonials represent authentic verified feedback from guests who stayed at our property.'}
          </p>
        </div>

      </div>
    </section>
  );
};
