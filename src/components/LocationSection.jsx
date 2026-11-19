import React from 'react';
import { propertyConfig } from '../config/property.config';
import { useLanguage } from '../context/LanguageContext';
import { cleanPhoneForTel } from '../utils/helpers';
import { getQuickWhatsAppUrl } from '../utils/whatsapp';
import { 
  MapPin, 
  Phone, 
  MessageCircle, 
  Mail, 
  Clock, 
  ExternalLink, 
  Sparkles,
  ShieldAlert,
  Navigation
} from 'lucide-react';

export const LocationSection = () => {
  const { lang, t, getText } = useLanguage();
  const contact = propertyConfig.contact;
  const policies = propertyConfig.policies;
  const prop = propertyConfig.property;

  return (
    <section className="py-16 md:py-24 bg-theme-bg border-t border-theme-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100 text-amber-800 text-xs font-semibold uppercase tracking-wider">
            <Navigation className="w-3.5 h-3.5" />
            <span>{lang === 'hi' ? 'आवागमन एवं स्थिति' : 'Reach Us Easily'}</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-theme-primary tracking-tight">
            {t('locationHeading')}
          </h2>
          <p className="text-theme-muted text-sm sm:text-base leading-relaxed">
            {t('locationSubheading')}
          </p>
        </div>

        {/* Content Grid: Contact Details Card + Google Maps Embed */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Details Card (5 cols) */}
          <div className="lg:col-span-5 bg-white rounded-3xl p-6 sm:p-8 border border-theme-border shadow-soft flex flex-col justify-between">
            <div className="space-y-6">
              
              <div>
                <h3 className="font-serif text-2xl font-bold text-theme-primary">
                  {getText(prop.name, prop.nameHi)}
                </h3>
                <p className="text-xs text-theme-secondary font-semibold uppercase tracking-wider mt-0.5">
                  {getText(prop.category, prop.categoryHi)}
                </p>
              </div>

              {/* Address */}
              <div className="flex items-start gap-3.5">
                <div className="w-9 h-9 rounded-xl bg-amber-50 text-amber-700 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <MapPin className="w-4 h-4" />
                </div>
                <div className="text-xs text-slate-700 space-y-1">
                  <p className="font-bold text-slate-900 text-sm">
                    {getText(contact.address.street, contact.address.streetHi)}
                  </p>
                  <p>
                    {getText(contact.address.city, contact.address.cityHi)}, {getText(contact.address.state, contact.address.stateHi)} - {contact.address.pincode}
                  </p>
                  <p className="text-amber-700 font-semibold bg-amber-50 inline-block px-2 py-0.5 rounded">
                    ★ {getText(contact.address.landmarkHint, contact.address.landmarkHintHi)}
                  </p>
                </div>
              </div>

              {/* Direct Calls & WhatsApp */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <a
                  href={`tel:${cleanPhoneForTel(contact.phone)}`}
                  className="p-3 rounded-xl bg-slate-50 hover:bg-slate-100 border border-slate-200 flex items-center gap-3 transition-colors"
                >
                  <Phone className="w-4 h-4 text-theme-secondary" />
                  <div className="text-left">
                    <span className="block text-[10px] text-slate-500 uppercase">{t('callUs')}</span>
                    <span className="text-xs font-bold text-slate-900">{contact.phoneDisplay}</span>
                  </div>
                </a>

                <a
                  href={getQuickWhatsAppUrl('reception')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-emerald-50 hover:bg-emerald-100/80 border border-emerald-200 flex items-center gap-3 transition-colors"
                >
                  <MessageCircle className="w-4 h-4 text-emerald-600" />
                  <div className="text-left">
                    <span className="block text-[10px] text-emerald-700 uppercase">WhatsApp</span>
                    <span className="text-xs font-bold text-emerald-950">{contact.whatsappDisplay}</span>
                  </div>
                </a>
              </div>

              {/* Timings */}
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 text-xs space-y-2">
                <div className="flex items-center gap-2 font-bold text-slate-800">
                  <Clock className="w-4 h-4 text-amber-600" />
                  <span>{lang === 'hi' ? 'आगमन व प्रस्थान समय' : 'Check-in & Check-out Timings'}</span>
                </div>
                <div className="grid grid-cols-2 gap-2 text-slate-600 pt-1">
                  <div>
                    <span className="text-slate-400 block text-[11px]">{t('checkInDate')}</span>
                    <strong className="text-slate-900 font-semibold">{policies.checkInTime}</strong>
                  </div>
                  <div>
                    <span className="text-slate-400 block text-[11px]">{t('checkOutDate')}</span>
                    <strong className="text-slate-900 font-semibold">{policies.checkOutTime}</strong>
                  </div>
                </div>
              </div>
            </div>

            {/* Direct Directions Button */}
            <div className="pt-6 border-t border-slate-100 mt-6">
              <a
                href={contact.googleMapsDirectionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-theme-primary hover:bg-theme-primary-hover text-white font-semibold py-3 px-6 rounded-xl flex items-center justify-center gap-2 transition-all shadow-md text-sm"
              >
                <Navigation className="w-4 h-4 text-amber-400" />
                <span>{t('getDirections')} (Google Maps)</span>
                <ExternalLink className="w-3.5 h-3.5 ml-1 opacity-70" />
              </a>
            </div>
          </div>

          {/* Right Map (7 cols) */}
          <div className="lg:col-span-7 bg-white rounded-3xl overflow-hidden border border-theme-border shadow-soft min-h-[380px] lg:min-h-full flex flex-col">
            <iframe
              src={contact.googleMapsEmbedUrl}
              title={`${prop.name} Location Map`}
              className="w-full h-full min-h-[400px] border-0"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

        </div>

      </div>
    </section>
  );
};
