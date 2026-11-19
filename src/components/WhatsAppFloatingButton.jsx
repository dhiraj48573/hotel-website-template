import React, { useState } from 'react';
import { propertyConfig } from '../config/property.config';
import { useLanguage } from '../context/LanguageContext';
import { getQuickWhatsAppUrl } from '../utils/whatsapp';
import { cleanPhoneForTel } from '../utils/helpers';
import { MessageCircle, PhoneCall, HelpCircle, Users, X, Send } from 'lucide-react';

export const WhatsAppFloatingButton = ({ onOpenBookingModal }) => {
  const { lang, t, getText } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);

  const phone = propertyConfig.contact.phone;
  const propName = getText(propertyConfig.property.name, propertyConfig.property.nameHi);

  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col items-end print:hidden">
      {/* Expanded Quick Options Menu */}
      {isOpen && (
        <div className="mb-3 w-72 md:w-80 bg-white rounded-2xl shadow-floating border border-theme-border p-4 transition-all animate-fadeIn">
          <div className="flex items-center justify-between pb-3 border-b border-theme-border">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-emerald-500 text-white flex items-center justify-center">
                <MessageCircle className="w-4 h-4" />
              </div>
              <div>
                <p className="text-xs font-bold text-slate-900">{propName}</p>
                <span className="flex items-center gap-1 text-[11px] text-emerald-600 font-medium">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                  {lang === 'hi' ? 'ऑनलाइन सहायता उपलब्ध' : 'Reception Online'}
                </span>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="w-7 h-7 rounded-full hover:bg-slate-100 flex items-center justify-center text-slate-500"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <div className="py-3 space-y-2">
            <a
              href={getQuickWhatsAppUrl('reception')}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-2.5 rounded-xl hover:bg-emerald-50 text-slate-700 hover:text-emerald-800 text-xs font-medium transition-colors border border-transparent hover:border-emerald-200"
            >
              <Send className="w-4 h-4 text-emerald-600" />
              <span>{lang === 'hi' ? 'कमरे की उपलब्धता एवं दरें पूछें' : 'Check Room Availability & Rates'}</span>
            </a>

            <button
              onClick={() => {
                setIsOpen(false);
                if (onOpenBookingModal) onOpenBookingModal();
              }}
              className="w-full text-left flex items-center gap-3 p-2.5 rounded-xl hover:bg-amber-50 text-slate-700 hover:text-amber-800 text-xs font-medium transition-colors border border-transparent hover:border-amber-200"
            >
              <HelpCircle className="w-4 h-4 text-amber-600" />
              <span>{lang === 'hi' ? 'त्वरित बुकिंग पूछताछ फॉर्म भरें' : 'Fill Quick Stay Enquiry Form'}</span>
            </button>

            <a
              href={getQuickWhatsAppUrl('group')}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-2.5 rounded-xl hover:bg-blue-50 text-slate-700 hover:text-blue-800 text-xs font-medium transition-colors border border-transparent hover:border-blue-200"
            >
              <Users className="w-4 h-4 text-blue-600" />
              <span>{lang === 'hi' ? 'सामूहिक / यात्रा संघ पूछताछ' : 'Group & Yatri Sangha Enquiry'}</span>
            </a>

            <a
              href={`tel:${cleanPhoneForTel(phone)}`}
              className="flex items-center gap-3 p-2.5 rounded-xl hover:bg-slate-100 text-slate-700 text-xs font-medium transition-colors"
            >
              <PhoneCall className="w-4 h-4 text-slate-600" />
              <span>{lang === 'hi' ? 'सीधे रिसेप्शन कॉल करें' : 'Call Reception'}: {propertyConfig.contact.phoneDisplay}</span>
            </a>
          </div>
        </div>
      )}

      {/* Main Floating Trigger Button */}
      <div className="flex items-center gap-2">
        {!isOpen && (
          <span className="hidden md:inline-flex bg-slate-900 text-white text-xs font-medium py-1.5 px-3 rounded-full shadow-md">
            {lang === 'hi' ? 'व्हाट्सएप पूछताछ' : 'Instant WhatsApp Help'}
          </span>
        )}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-14 h-14 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white shadow-lg flex items-center justify-center transition-transform hover:scale-105 active:scale-95 animate-whatsapp-pulse cursor-pointer"
          aria-label="WhatsApp Reception Help"
        >
          {isOpen ? <X className="w-6 h-6" /> : <MessageCircle className="w-7 h-7" />}
        </button>
      </div>
    </div>
  );
};
