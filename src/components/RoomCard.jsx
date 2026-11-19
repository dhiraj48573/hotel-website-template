import React, { useState } from 'react';
import { propertyConfig } from '../config/property.config';
import { useLanguage } from '../context/LanguageContext';
import { formatCurrency } from '../utils/helpers';
import { buildWhatsAppUrl } from '../utils/whatsapp';
import { 
  Users, 
  Bed, 
  Maximize2, 
  Wind, 
  Bath, 
  Check, 
  MessageCircle, 
  Calendar, 
  Sparkles,
  ChevronLeft,
  ChevronRight,
  Info
} from 'lucide-react';

export const RoomCard = ({ room, onSelectRoom }) => {
  const { lang, t, getText } = useLanguage();
  const [activeImgIndex, setActiveImgIndex] = useState(0);

  const images = room.images && room.images.length > 0 
    ? room.images 
    : ["https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=800&q=80"];

  const nextImage = (e) => {
    e.stopPropagation();
    setActiveImgIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = (e) => {
    e.stopPropagation();
    setActiveImgIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const handleWhatsAppEnquiry = (e) => {
    e.stopPropagation();
    const url = buildWhatsAppUrl({
      roomType: room.name
    });
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const priceUnitText = room.priceUnit === 'per_person' 
    ? t('perPerson') 
    : t('perNight');

  return (
    <div className="bg-white rounded-2xl shadow-card border border-theme-border overflow-hidden flex flex-col group hover:shadow-floating transition-all duration-300">
      
      {/* Image Carousel / Banner */}
      <div className="relative aspect-[16/10] overflow-hidden bg-slate-900">
        <img
          src={images[activeImgIndex]}
          alt={getText(room.name, room.nameHi)}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        
        {/* Dark Gradient Overlay for Badges */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20 pointer-events-none" />

        {/* Top Badges */}
        <div className="absolute top-3 left-3 right-3 flex items-center justify-between pointer-events-none">
          <span className={`px-2.5 py-1 rounded-full text-xs font-bold tracking-wide uppercase shadow-sm ${
            room.isAC 
              ? 'bg-blue-600 text-white' 
              : 'bg-emerald-700 text-white'
          }`}>
            {room.isAC ? (lang === 'hi' ? 'वातानुकूलित (AC)' : 'AC Room') : (lang === 'hi' ? 'नॉन-एसी / सादा' : 'Non-AC')}
          </span>

          {room.featured && (
            <span className="bg-amber-500 text-slate-950 px-2.5 py-1 rounded-full text-xs font-bold flex items-center gap-1 shadow-sm">
              <Sparkles className="w-3 h-3" />
              {lang === 'hi' ? 'लोकप्रिय' : 'Popular'}
            </span>
          )}
        </div>

        {/* Slider Navigation Arrows if multiple photos */}
        {images.length > 1 && (
          <div className="absolute inset-y-0 inset-x-2 flex items-center justify-between pointer-events-none">
            <button
              onClick={prevImage}
              className="pointer-events-auto w-8 h-8 rounded-full bg-black/40 hover:bg-black/70 text-white flex items-center justify-center transition-all opacity-0 group-hover:opacity-100"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={nextImage}
              className="pointer-events-auto w-8 h-8 rounded-full bg-black/40 hover:bg-black/70 text-white flex items-center justify-center transition-all opacity-0 group-hover:opacity-100"
              aria-label="Next image"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        )}

        {/* Photo Index Indicator */}
        {images.length > 1 && (
          <div className="absolute bottom-3 right-3 bg-black/60 backdrop-blur-sm text-white text-[11px] font-medium px-2 py-0.5 rounded-full pointer-events-none">
            {activeImgIndex + 1} / {images.length}
          </div>
        )}
      </div>

      {/* Room Details Content */}
      <div className="p-5 flex-1 flex flex-col justify-between">
        <div>
          {/* Room Title & Category */}
          <div className="flex items-start justify-between gap-2 mb-2">
            <div>
              <h3 className="font-serif text-lg font-bold text-theme-primary tracking-tight">
                {getText(room.name, room.nameHi)}
              </h3>
              <p className="text-xs text-theme-muted font-medium">
                {getText(room.beds, room.bedsHi)}
              </p>
            </div>
            
            {/* Price Box */}
            <div className="text-right flex-shrink-0">
              {room.pricingMode === 'fixed' && (
                <div>
                  <div className="flex items-baseline justify-end gap-1">
                    <span className="text-lg font-bold text-theme-primary">
                      {formatCurrency(room.price)}
                    </span>
                    <span className="text-xs text-theme-muted font-medium">
                      {priceUnitText}
                    </span>
                  </div>
                  {room.taxIncluded && (
                    <span className="text-[10px] text-emerald-600 block">
                      {lang === 'hi' ? 'कर (टैक्स) सहित' : 'Taxes included'}
                    </span>
                  )}
                </div>
              )}

              {room.pricingMode === 'starting_at' && (
                <div>
                  <span className="text-[10px] text-theme-muted block uppercase">
                    {t('startingAt')}
                  </span>
                  <div className="flex items-baseline justify-end gap-1">
                    <span className="text-lg font-bold text-theme-primary">
                      {formatCurrency(room.price)}
                    </span>
                    <span className="text-xs text-theme-muted font-medium">
                      {priceUnitText}
                    </span>
                  </div>
                </div>
              )}

              {room.pricingMode === 'enquire' && (
                <div className="bg-amber-100 text-amber-900 px-2 py-1 rounded text-xs font-semibold">
                  {lang === 'hi' ? 'दर हेतु संपर्क करें' : 'Contact for Tariff'}
                </div>
              )}
            </div>
          </div>

          {/* Description */}
          <p className="text-xs text-slate-600 line-clamp-2 mb-4 leading-relaxed">
            {getText(room.description, room.descriptionHi)}
          </p>

          {/* Key Specs Pills Grid */}
          <div className="grid grid-cols-2 gap-2 pb-4 mb-4 border-b border-slate-100 text-xs text-slate-700">
            <div className="flex items-center gap-1.5">
              <Users className="w-3.5 h-3.5 text-amber-600 flex-shrink-0" />
              <span>
                {room.capacity.adults} {lang === 'hi' ? 'वयस्क' : 'Adults'}
                {room.capacity.children > 0 && ` + ${room.capacity.children} ${lang === 'hi' ? 'बच्चे' : 'Kids'}`}
              </span>
            </div>

            <div className="flex items-center gap-1.5">
              <Bed className="w-3.5 h-3.5 text-amber-600 flex-shrink-0" />
              <span className="truncate">{getText(room.beds, room.bedsHi)}</span>
            </div>

            <div className="flex items-center gap-1.5">
              <Bath className="w-3.5 h-3.5 text-amber-600 flex-shrink-0" />
              <span className="truncate">{getText(room.bathroom, room.bathroomHi)}</span>
            </div>

            {room.roomSize && (
              <div className="flex items-center gap-1.5">
                <Maximize2 className="w-3.5 h-3.5 text-amber-600 flex-shrink-0" />
                <span>{room.roomSize}</span>
              </div>
            )}
          </div>

          {/* Amenities Pills */}
          <div className="flex flex-wrap gap-1.5 mb-5">
            {room.amenities.slice(0, 4).map((amenity, idx) => (
              <span
                key={idx}
                className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-slate-100 text-slate-700 text-[11px]"
              >
                <Check className="w-3 h-3 text-emerald-600" />
                <span>{amenity}</span>
              </span>
            ))}
            {room.amenities.length > 4 && (
              <span className="text-[11px] text-theme-muted font-medium self-center">
                +{room.amenities.length - 4} {lang === 'hi' ? 'अन्य' : 'more'}
              </span>
            )}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="pt-2 border-t border-slate-100 space-y-2">
          {/* Extra Guest note if configured */}
          {room.extraGuestCharge > 0 && (
            <p className="text-[11px] text-slate-500 text-center">
              {t('extraPerson')}{room.extraGuestCharge} {lang === 'hi' ? 'अतिरिक्त बिस्तर' : 'extra bed charge'}
            </p>
          )}

          <div className="grid grid-cols-2 gap-2">
            <button
              onClick={() => onSelectRoom(room.name)}
              className="w-full bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-semibold py-2.5 px-3 rounded-xl flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
            >
              <Calendar className="w-3.5 h-3.5 text-slate-600" />
              <span>{t('checkAvailability')}</span>
            </button>

            <button
              onClick={handleWhatsAppEnquiry}
              className="w-full bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold py-2.5 px-3 rounded-xl flex items-center justify-center gap-1.5 transition-colors shadow-sm cursor-pointer"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>{lang === 'hi' ? 'व्हाट्सएप पूछताछ' : 'Enquire on WhatsApp'}</span>
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
