import React from 'react';
import { Link } from 'react-router-dom';
import { propertyConfig } from '../config/property.config';
import { useLanguage } from '../context/LanguageContext';
import { useTheme } from '../context/ThemeContext';
import { cleanPhoneForTel } from '../utils/helpers';
import { getQuickWhatsAppUrl } from '../utils/whatsapp';
import { 
  Phone, 
  MessageCircle, 
  Mail, 
  MapPin, 
  Clock, 
  ShieldCheck, 
  Sparkles, 
  Heart,
  ChevronRight,
  ExternalLink
} from 'lucide-react';

export const Footer = () => {
  const { lang, t, getText } = useLanguage();
  const { mode } = useTheme();

  const prop = propertyConfig.property;
  const contact = propertyConfig.contact;
  const policies = propertyConfig.policies;
  const rooms = propertyConfig.rooms.filter(r => r.active !== false);

  return (
    <footer className="bg-theme-primary text-slate-300 pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-slate-800">
          
          {/* Column 1: Property Identity */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-500 to-amber-700 text-slate-950 flex items-center justify-center font-serif font-black text-xl shadow-md">
                G
              </div>
              <div>
                <h4 className="font-serif text-xl font-bold text-white tracking-tight">
                  {getText(prop.name, prop.nameHi)}
                </h4>
                <p className="text-xs text-amber-400 font-medium">
                  {getText(prop.category, prop.categoryHi)}
                </p>
              </div>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed">
              {getText(prop.shortIntro, prop.shortIntroHi)}
            </p>

            {/* Mode Specific Highlight Badge */}
            <div className="pt-2">
              {mode === 'dharamshala' || mode === 'hybrid' ? (
                <div className="p-3 rounded-xl bg-slate-900/80 border border-amber-500/30 text-xs">
                  <span className="font-semibold text-amber-400 flex items-center gap-1 mb-1">
                    <Sparkles className="w-3.5 h-3.5" />
                    {lang === 'hi' ? 'तीर्थयात्री एवं पारिवारिक सेवा' : 'Pilgrim & Family Atmosphere'}
                  </span>
                  <p className="text-[11px] text-slate-400">
                    {lang === 'hi' 
                      ? 'शुद्ध शाकाहारी सात्विक भोजनालय, 24 घंटे गर्म पानी एवं बुजुर्गों हेतु लिफ्ट सुविधा।' 
                      : 'Satvik meals, 24-hr hot water & elevator access for senior devotees.'}
                  </p>
                </div>
              ) : (
                <div className="p-3 rounded-xl bg-slate-900/80 border border-blue-500/30 text-xs">
                  <span className="font-semibold text-blue-400 flex items-center gap-1 mb-1">
                    <Sparkles className="w-3.5 h-3.5" />
                    {lang === 'hi' ? 'प्रीमियम आतिथ्य सेवा' : 'Premium Hospitality'}
                  </span>
                  <p className="text-[11px] text-slate-400">
                    {lang === 'hi'
                      ? 'डीलक्स वातानुकूलित कमरे, आधुनिक स्वच्छता एवं उत्कृष्ट सेवा।'
                      : 'Deluxe AC accommodation with modern amenities and scenic river proximity.'}
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-4">
            <h5 className="font-serif text-sm font-bold uppercase tracking-wider text-white">
              {t('footerQuickLinks')}
            </h5>
            <ul className="space-y-2 text-xs">
              <li>
                <Link to="/" className="hover:text-amber-400 transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-amber-400" />
                  {t('navHome')}
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-amber-400 transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-amber-400" />
                  {t('navAbout')}
                </Link>
              </li>
              <li>
                <Link to="/rooms" className="hover:text-amber-400 transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-amber-400" />
                  {t('navRooms')}
                </Link>
              </li>
              <li>
                <Link to="/facilities" className="hover:text-amber-400 transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-amber-400" />
                  {t('navFacilities')}
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-amber-400 transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-amber-400" />
                  {t('navContact')}
                </Link>
              </li>
            </ul>

            {/* Check-in / Check-out timing info */}
            <div className="pt-2 text-xs text-slate-400 space-y-1">
              <div className="flex items-center gap-2 text-slate-300 font-semibold">
                <Clock className="w-3.5 h-3.5 text-amber-400" />
                <span>{t('footerTimings')}</span>
              </div>
              <p>Check-in: <strong className="text-white">{policies.checkInTime}</strong></p>
              <p>Check-out: <strong className="text-white">{policies.checkOutTime}</strong></p>
            </div>
          </div>

          {/* Column 3: Featured Room Types */}
          <div className="space-y-4">
            <h5 className="font-serif text-sm font-bold uppercase tracking-wider text-white">
              {lang === 'hi' ? 'कमरों के प्रकार' : 'Accommodation Options'}
            </h5>
            <ul className="space-y-2 text-xs">
              {rooms.slice(0, 5).map(room => (
                <li key={room.id}>
                  <Link 
                    to="/rooms" 
                    className="hover:text-amber-400 transition-colors flex items-center justify-between group"
                  >
                    <span className="group-hover:translate-x-1 transition-transform">
                      {getText(room.name, room.nameHi)}
                    </span>
                    <span className="text-[11px] text-amber-400 font-medium">
                      {room.pricingMode === 'fixed' ? `₹${room.price}` : 'Tariff'}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>

            {/* ID Proof Security Note */}
            <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800 text-[11px] text-slate-400 leading-relaxed">
              <span className="font-semibold text-slate-300 flex items-center gap-1.5 mb-1">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                {lang === 'hi' ? 'मान्य पहचान पत्र निर्देश' : 'Mandatory ID Proof'}
              </span>
              <p>{getText(policies.idProofRequirement, policies.idProofRequirementHi)}</p>
            </div>
          </div>

          {/* Column 4: Contact & Location */}
          <div className="space-y-4">
            <h5 className="font-serif text-sm font-bold uppercase tracking-wider text-white">
              {t('footerContactInfo')}
            </h5>

            <div className="space-y-3 text-xs">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-white">
                    {getText(contact.address.street, contact.address.streetHi)},
                  </p>
                  <p>
                    {getText(contact.address.city, contact.address.cityHi)}, {getText(contact.address.state, contact.address.stateHi)} - {contact.address.pincode}
                  </p>
                  <p className="text-amber-400 text-[11px] mt-0.5 font-medium">
                    ({getText(contact.address.landmarkHint, contact.address.landmarkHintHi)})
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-amber-400 flex-shrink-0" />
                <a 
                  href={`tel:${cleanPhoneForTel(contact.phone)}`}
                  className="hover:text-amber-400 text-white font-medium transition-colors"
                >
                  {contact.phoneDisplay}
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <MessageCircle className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <a 
                  href={getQuickWhatsAppUrl('reception')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-emerald-400 text-white font-medium transition-colors"
                >
                  {contact.whatsappDisplay} (WhatsApp)
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-amber-400 flex-shrink-0" />
                <a 
                  href={`mailto:${contact.email}`}
                  className="hover:text-amber-400 transition-colors"
                >
                  {contact.email}
                </a>
              </div>

              <div className="pt-1">
                <a
                  href={contact.googleMapsDirectionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-amber-400 hover:text-amber-300 underline underline-offset-4"
                >
                  <span>{t('getDirections')}</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Demo Disclaimer */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            <p>
              © {new Date().getFullYear()} {getText(prop.name, prop.nameHi)}. All rights reserved.
            </p>
            <p className="text-[11px] text-amber-400/80 mt-1">
              {t('footerDisclaimer')}
            </p>
          </div>

          <div className="text-right">
            <span className="inline-block bg-slate-900 border border-slate-800 rounded-lg px-3 py-1 text-[11px] text-slate-400">
              Demo Property Template for Hotels & Dharamshalas • Ready to Customize in 30 Mins
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};
