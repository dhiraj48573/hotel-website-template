import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { propertyConfig } from '../config/property.config';
import { useLanguage } from '../context/LanguageContext';
import { useTheme } from '../context/ThemeContext';
import { cleanPhoneForTel } from '../utils/helpers';
import { getQuickWhatsAppUrl } from '../utils/whatsapp';
import { 
  Phone, 
  MessageCircle, 
  Clock, 
  Menu, 
  X, 
  Globe, 
  Palette, 
  Sparkles,
  ChevronDown
} from 'lucide-react';

export const Navbar = ({ onOpenBookingModal }) => {
  const { lang, setLang, t, getText } = useLanguage();
  const { theme, setTheme, mode, setMode } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showThemePicker, setShowThemePicker] = useState(false);
  const location = useLocation();

  const prop = propertyConfig.property;
  const contact = propertyConfig.contact;

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { path: '/', label: t('navHome') },
    { path: '/about', label: t('navAbout') },
    { path: '/rooms', label: t('navRooms') },
    { path: '/facilities', label: t('navFacilities') },
    { path: '/contact', label: t('navContact') },
  ];

  const themes = [
    { id: 'theme-a', name: 'Navy & Gold (Hotel)', nameHi: 'नेवी व गोल्ड (होटल)' },
    { id: 'theme-b', name: 'Terracotta & Ivory (Dharamshala)', nameHi: 'गेरुआ व आइवरी (धर्मशाला)' },
    { id: 'theme-c', name: 'Charcoal & Blue (Modern)', nameHi: 'चारकोल व ब्लू (आधुनिक)' },
  ];

  return (
    <header className="sticky top-0 z-40 w-full transition-all">
      {/* 1. TOP CONTACT STRIP */}
      <div className="bg-theme-primary text-slate-200 text-xs py-2 px-4 border-b border-white/10">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          {/* Left info: Phone & WhatsApp */}
          <div className="flex items-center gap-4">
            <a
              href={`tel:${cleanPhoneForTel(contact.phone)}`}
              className="flex items-center gap-1.5 hover:text-amber-400 transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-amber-400" />
              <span>{contact.phoneDisplay}</span>
            </a>

            <a
              href={getQuickWhatsAppUrl('reception')}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:flex items-center gap-1.5 hover:text-emerald-400 transition-colors"
            >
              <MessageCircle className="w-3.5 h-3.5 text-emerald-400" />
              <span>{contact.whatsappDisplay}</span>
            </a>

            <div className="hidden md:flex items-center gap-1.5 text-slate-300">
              <Clock className="w-3.5 h-3.5 text-amber-400" />
              <span>
                {lang === 'hi' ? 'चेक-इन: दोपहर 12 बजे' : `Check-in: ${propertyConfig.policies.checkInTime}`}
              </span>
            </div>
          </div>

          {/* Right controls: Theme Switcher & Language Switcher */}
          <div className="flex items-center gap-3 ml-auto">
            {/* Live Theme / Mode Preview Switcher Pill */}
            <div className="relative">
              <button
                onClick={() => setShowThemePicker(!showThemePicker)}
                className="flex items-center gap-1 px-2.5 py-1 rounded bg-white/10 hover:bg-white/20 text-[11px] font-medium transition-colors"
                title="Switch Theme / Mode Demo"
              >
                <Palette className="w-3 h-3 text-amber-400" />
                <span className="hidden sm:inline">Theme:</span>
                <span className="capitalize font-semibold">{theme.replace('theme-', 'Theme ')}</span>
                <ChevronDown className="w-2.5 h-2.5 opacity-70" />
              </button>

              {showThemePicker && (
                <div 
                  className="absolute right-0 mt-1 w-56 bg-white text-slate-800 rounded-xl shadow-floating border border-slate-200 py-2 z-50 text-xs"
                  onClick={() => setShowThemePicker(false)}
                >
                  <div className="px-3 py-1 font-semibold text-slate-400 uppercase text-[10px] tracking-wider border-b border-slate-100">
                    Select Visual Theme
                  </div>
                  {themes.map(tOption => (
                    <button
                      key={tOption.id}
                      onClick={() => setTheme(tOption.id)}
                      className={`w-full text-left px-3 py-2 flex items-center justify-between hover:bg-slate-50 transition-colors ${
                        theme === tOption.id ? 'bg-amber-50 font-bold text-amber-900' : ''
                      }`}
                    >
                      <span>{tOption.name}</span>
                      {theme === tOption.id && <span className="w-2 h-2 rounded-full bg-amber-500"></span>}
                    </button>
                  ))}

                  <div className="px-3 pt-2 pb-1 font-semibold text-slate-400 uppercase text-[10px] tracking-wider border-t border-slate-100 mt-1">
                    Accommodation Mode
                  </div>
                  {['hybrid', 'hotel', 'dharamshala'].map(m => (
                    <button
                      key={m}
                      onClick={() => setMode(m)}
                      className={`w-full text-left px-3 py-1.5 flex items-center justify-between capitalize hover:bg-slate-50 ${
                        mode === m ? 'bg-amber-50 font-bold text-amber-900' : ''
                      }`}
                    >
                      <span>{m} Mode</span>
                      {mode === m && <span className="w-2 h-2 rounded-full bg-emerald-500"></span>}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Language Switcher */}
            <div className="flex items-center bg-white/10 rounded-lg p-0.5 border border-white/10">
              <button
                onClick={() => setLang('en')}
                className={`px-2 py-0.5 rounded text-[11px] font-semibold transition-all ${
                  lang === 'en' ? 'bg-amber-500 text-slate-950 shadow-sm' : 'text-slate-300 hover:text-white'
                }`}
              >
                EN
              </button>
              <button
                onClick={() => setLang('hi')}
                className={`px-2 py-0.5 rounded text-[11px] font-semibold transition-all ${
                  lang === 'hi' ? 'bg-amber-500 text-slate-950 shadow-sm' : 'text-slate-300 hover:text-white'
                }`}
              >
                हिन्दी
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* 2. MAIN NAVIGATION BAR */}
      <nav 
        className={`w-full transition-all duration-300 ${
          isScrolled 
            ? 'bg-white/95 backdrop-blur-md shadow-md py-3 text-slate-900 border-b border-slate-200' 
            : 'bg-white py-4 text-slate-900 border-b border-theme-border'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
          {/* Logo & Property Brand */}
          <Link to="/" className="flex items-center gap-3 group">
            {/* Custom Monogram / Logo Badge */}
            <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-theme-primary to-slate-900 text-amber-400 flex flex-col items-center justify-center shadow-md font-serif font-black text-xl border border-amber-400/30">
              <span>G</span>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-serif text-xl sm:text-2xl font-bold tracking-tight text-theme-primary group-hover:text-amber-600 transition-colors">
                  {getText(prop.name, prop.nameHi)}
                </span>
                <span className="hidden lg:inline-block text-[10px] font-semibold uppercase tracking-wider bg-amber-100 text-amber-800 px-2 py-0.5 rounded-full border border-amber-200">
                  {getText(prop.category, prop.categoryHi)}
                </span>
              </div>
              <p className="text-[11px] text-theme-muted font-medium tracking-wide">
                {getText(prop.tagline, prop.taglineHi)}
              </p>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-6 lg:gap-8">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-sm font-semibold tracking-wide transition-colors relative py-1 ${
                    isActive 
                      ? 'text-theme-secondary font-bold' 
                      : 'text-slate-700 hover:text-theme-secondary'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-theme-secondary rounded-full" />
                  )}
                </Link>
              );
            })}
          </div>

          {/* Desktop Action CTA */}
          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={onOpenBookingModal}
              className="bg-theme-secondary hover:bg-theme-secondary-hover text-white text-sm font-semibold px-5 py-2.5 rounded-xl shadow-soft hover:shadow-card transition-all transform active:scale-95 cursor-pointer flex items-center gap-2"
            >
              <Sparkles className="w-4 h-4 text-amber-200" />
              <span>{t('checkAvailability')}</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={onOpenBookingModal}
              className="bg-theme-secondary text-white text-xs font-semibold px-3 py-2 rounded-lg"
            >
              {t('checkAvailability')}
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-700 hover:bg-slate-100 focus:outline-none"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-b border-theme-border px-4 pt-3 pb-6 space-y-3 animate-fadeIn">
            <div className="space-y-1">
              {navLinks.map((link) => {
                const isActive = location.pathname === link.path;
                return (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={`block px-3 py-2.5 rounded-lg text-base font-semibold ${
                      isActive 
                        ? 'bg-amber-50 text-theme-secondary' 
                        : 'text-slate-700 hover:bg-slate-50'
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </div>

            <div className="pt-3 border-t border-slate-100 space-y-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBookingModal();
                }}
                className="w-full bg-theme-secondary text-white font-semibold py-3 px-4 rounded-xl flex items-center justify-center gap-2 shadow-sm"
              >
                <Sparkles className="w-4 h-4 text-amber-200" />
                <span>{t('checkAvailability')}</span>
              </button>

              <div className="grid grid-cols-2 gap-2 pt-1">
                <a
                  href={`tel:${cleanPhoneForTel(contact.phone)}`}
                  className="bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-semibold py-2.5 px-3 rounded-lg flex items-center justify-center gap-1.5"
                >
                  <Phone className="w-3.5 h-3.5 text-slate-600" />
                  <span>{t('callUs')}</span>
                </a>

                <a
                  href={getQuickWhatsAppUrl('reception')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-emerald-500 hover:bg-emerald-600 text-white text-xs font-semibold py-2.5 px-3 rounded-lg flex items-center justify-center gap-1.5"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>{t('whatsappUs')}</span>
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};
