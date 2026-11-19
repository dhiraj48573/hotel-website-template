import React, { useState } from 'react';
import { propertyConfig } from '../config/property.config';
import { useLanguage } from '../context/LanguageContext';
import { Sparkles, X, ChevronLeft, ChevronRight, Eye } from 'lucide-react';

export const GallerySection = ({ isPreview = false }) => {
  const { lang, t, getText } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const categories = propertyConfig.galleryCategories;
  const allImages = propertyConfig.gallery;

  const filteredImages = selectedCategory === 'all'
    ? allImages
    : allImages.filter(img => img.category === selectedCategory);

  const displayImages = isPreview ? filteredImages.slice(0, 6) : filteredImages;

  const openLightbox = (index) => {
    setLightboxIndex(index);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
    document.body.style.overflow = 'unset';
  };

  const nextLightbox = (e) => {
    e.stopPropagation();
    setLightboxIndex((prev) => (prev + 1) % displayImages.length);
  };

  const prevLightbox = (e) => {
    e.stopPropagation();
    setLightboxIndex((prev) => (prev - 1 + displayImages.length) % displayImages.length);
  };

  return (
    <section className="py-16 md:py-24 bg-white border-t border-theme-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100 text-amber-800 text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{lang === 'hi' ? 'वास्तविक छायाचित्र' : 'Visual Tour'}</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-theme-primary tracking-tight">
            {t('galleryHeading')}
          </h2>
          <p className="text-theme-muted text-sm sm:text-base leading-relaxed">
            {t('gallerySubheading')}
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                selectedCategory === cat.id
                  ? 'bg-theme-secondary text-white shadow-sm'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              {getText(cat.label, cat.labelHi)}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayImages.map((img, idx) => (
            <div
              key={img.id}
              onClick={() => openLightbox(idx)}
              className="group relative aspect-[4/3] rounded-2xl overflow-hidden bg-slate-900 shadow-soft hover:shadow-floating transition-all duration-300 cursor-pointer"
            >
              <img
                src={img.url}
                alt={getText(img.title, img.titleHi)}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              
              {/* Overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5">
                <span className="w-9 h-9 rounded-full bg-white/20 backdrop-blur-md text-white flex items-center justify-center mb-2 self-end">
                  <Eye className="w-4 h-4" />
                </span>
                <h4 className="font-serif text-white font-bold text-base">
                  {getText(img.title, img.titleHi)}
                </h4>
              </div>
            </div>
          ))}
        </div>

        {/* Fullscreen Lightbox Modal */}
        {lightboxIndex !== null && displayImages[lightboxIndex] && (
          <div 
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4"
            onClick={closeLightbox}
          >
            <button
              onClick={closeLightbox}
              className="absolute top-5 right-5 z-50 w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
              aria-label="Close lightbox"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Navigation buttons */}
            <button
              onClick={prevLightbox}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-50 w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <button
              onClick={nextLightbox}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-50 w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
              aria-label="Next image"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Lightbox Image & Caption */}
            <div 
              className="max-w-4xl max-h-[85vh] flex flex-col items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={displayImages[lightboxIndex].url}
                alt={getText(displayImages[lightboxIndex].title, displayImages[lightboxIndex].titleHi)}
                className="max-w-full max-h-[75vh] object-contain rounded-xl shadow-2xl"
              />
              <div className="mt-4 text-center">
                <p className="text-white font-serif text-lg font-semibold">
                  {getText(displayImages[lightboxIndex].title, displayImages[lightboxIndex].titleHi)}
                </p>
                <span className="text-xs text-slate-400 mt-1 block">
                  {lightboxIndex + 1} of {displayImages.length}
                </span>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
