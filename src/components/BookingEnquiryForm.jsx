import React, { useState } from 'react';
import { propertyConfig } from '../config/property.config';
import { useLanguage } from '../context/LanguageContext';
import { buildWhatsAppUrl } from '../utils/whatsapp';
import { cleanPhoneForTel } from '../utils/helpers';
import { Send, PhoneCall, Calendar, Users, Home, AlertCircle, CheckCircle2 } from 'lucide-react';

export const BookingEnquiryForm = ({ preselectedRoom = '', onSuccess }) => {
  const { lang, t, getText } = useLanguage();
  const rooms = propertyConfig.rooms.filter(r => r.active !== false);

  // Today's date in YYYY-MM-DD
  const today = new Date().toISOString().split('T')[0];
  
  // Tomorrow's date default
  const tomorrow = new Date(Date.now() + 86400000).toISOString().split('T')[0];

  const [formData, setFormData] = useState({
    guestName: '',
    mobileNumber: '',
    checkIn: today,
    checkOut: tomorrow,
    adults: '2',
    children: '0',
    roomType: preselectedRoom || (rooms.length > 0 ? rooms[0].name : ''),
    specialRequests: ''
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const errs = {};
    if (!formData.guestName.trim()) {
      errs.guestName = lang === 'hi' ? 'कृपया अपना नाम दर्ज करें' : 'Please enter your name';
    }
    if (!formData.mobileNumber.trim()) {
      errs.mobileNumber = lang === 'hi' ? 'कृपया मोबाइल नंबर दर्ज करें' : 'Please enter your mobile number';
    } else if (formData.mobileNumber.replace(/\D/g, '').length < 10) {
      errs.mobileNumber = lang === 'hi' ? 'मान्य 10 अंकों का मोबाइल नंबर दर्ज करें' : 'Enter a valid 10-digit mobile number';
    }

    if (!formData.checkIn) {
      errs.checkIn = lang === 'hi' ? 'आगमन तिथि चुनें' : 'Select check-in date';
    }
    if (!formData.checkOut) {
      errs.checkOut = lang === 'hi' ? 'प्रस्थान तिथि चुनें' : 'Select check-out date';
    } else if (formData.checkOut <= formData.checkIn) {
      errs.checkOut = lang === 'hi' ? 'प्रस्थान तिथि आगमन तिथि के बाद होनी चाहिए' : 'Check-out date must be after check-in';
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    // Build WhatsApp URL
    const url = buildWhatsAppUrl({
      senderName: formData.guestName,
      checkIn: formData.checkIn,
      checkOut: formData.checkOut,
      adults: formData.adults,
      children: formData.children,
      roomType: formData.roomType,
      specialRequests: formData.specialRequests
    });

    setSubmitted(true);
    if (onSuccess) onSuccess();

    // Open WhatsApp in new tab
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="bg-white rounded-2xl shadow-card border border-theme-border p-6 md:p-8">
      <div className="flex items-center gap-3 mb-6 pb-4 border-b border-theme-border">
        <div className="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center text-amber-700">
          <Calendar className="w-5 h-5" />
        </div>
        <div>
          <h3 className="text-xl font-serif font-bold text-theme-primary">
            {t('formTitle')}
          </h3>
          <p className="text-xs md:text-sm text-theme-muted">
            {t('formSubtitle')}
          </p>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Name & Phone */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-theme-muted mb-1.5">
              {t('fullName')} <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="guestName"
              value={formData.guestName}
              onChange={handleChange}
              placeholder={lang === 'hi' ? 'उदा. राहुल शर्मा' : 'e.g. Ramesh Sharma'}
              className={`w-full px-4 py-2.5 rounded-lg border text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-amber-500/20 ${
                errors.guestName ? 'border-red-400 bg-red-50/30' : 'border-theme-border bg-slate-50/50 focus:bg-white'
              }`}
            />
            {errors.guestName && (
              <p className="text-xs text-red-500 mt-1 flex items-center gap-1">
                <AlertCircle className="w-3 h-3" /> {errors.guestName}
              </p>
            )}
          </div>

          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-theme-muted mb-1.5">
              {t('mobileNumber')} <span className="text-red-500">*</span>
            </label>
            <input
              type="tel"
              name="mobileNumber"
              value={formData.mobileNumber}
              onChange={handleChange}
              placeholder={lang === 'hi' ? 'उदा. 9876543210' : 'e.g. 9876543210'}
              className={`w-full px-4 py-2.5 rounded-lg border text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-amber-500/20 ${
                errors.mobileNumber ? 'border-red-400 bg-red-50/30' : 'border-theme-border bg-slate-50/50 focus:bg-white'
              }`}
            />
            {errors.mobileNumber && (
              <p className="text-xs text-red-500 mt-1 flex items-center gap-1">
                <AlertCircle className="w-3 h-3" /> {errors.mobileNumber}
              </p>
            )}
          </div>
        </div>

        {/* Check-in & Check-out */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-theme-muted mb-1.5">
              {t('checkInDate')} <span className="text-red-500">*</span>
            </label>
            <input
              type="date"
              name="checkIn"
              min={today}
              value={formData.checkIn}
              onChange={handleChange}
              className={`w-full px-4 py-2.5 rounded-lg border text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-amber-500/20 ${
                errors.checkIn ? 'border-red-400 bg-red-50/30' : 'border-theme-border bg-slate-50/50 focus:bg-white'
              }`}
            />
            {errors.checkIn && (
              <p className="text-xs text-red-500 mt-1 flex items-center gap-1">
                <AlertCircle className="w-3 h-3" /> {errors.checkIn}
              </p>
            )}
          </div>

          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-theme-muted mb-1.5">
              {t('checkOutDate')} <span className="text-red-500">*</span>
            </label>
            <input
              type="date"
              name="checkOut"
              min={formData.checkIn || today}
              value={formData.checkOut}
              onChange={handleChange}
              className={`w-full px-4 py-2.5 rounded-lg border text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-amber-500/20 ${
                errors.checkOut ? 'border-red-400 bg-red-50/30' : 'border-theme-border bg-slate-50/50 focus:bg-white'
              }`}
            />
            {errors.checkOut && (
              <p className="text-xs text-red-500 mt-1 flex items-center gap-1">
                <AlertCircle className="w-3 h-3" /> {errors.checkOut}
              </p>
            )}
          </div>
        </div>

        {/* Room Type & Occupancy */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="md:col-span-1">
            <label className="block text-xs font-semibold uppercase tracking-wider text-theme-muted mb-1.5">
              {t('selectRoomType')}
            </label>
            <select
              name="roomType"
              value={formData.roomType}
              onChange={handleChange}
              className="w-full px-3 py-2.5 rounded-lg border border-theme-border bg-slate-50/50 focus:bg-white text-sm focus:outline-none focus:ring-2 focus:ring-amber-500/20"
            >
              {rooms.map(room => (
                <option key={room.id} value={room.name}>
                  {getText(room.name, room.nameHi)}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-theme-muted mb-1.5">
              {t('numberOfAdults')}
            </label>
            <select
              name="adults"
              value={formData.adults}
              onChange={handleChange}
              className="w-full px-3 py-2.5 rounded-lg border border-theme-border bg-slate-50/50 focus:bg-white text-sm focus:outline-none focus:ring-2 focus:ring-amber-500/20"
            >
              {[1, 2, 3, 4, 5, 6, 8, 10, '10+ (Group)'].map(num => (
                <option key={num} value={num}>
                  {num} {lang === 'hi' ? 'वयस्क' : 'Adult(s)'}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-theme-muted mb-1.5">
              {t('numberOfChildren')}
            </label>
            <select
              name="children"
              value={formData.children}
              onChange={handleChange}
              className="w-full px-3 py-2.5 rounded-lg border border-theme-border bg-slate-50/50 focus:bg-white text-sm focus:outline-none focus:ring-2 focus:ring-amber-500/20"
            >
              {[0, 1, 2, 3, 4].map(num => (
                <option key={num} value={num}>
                  {num} {lang === 'hi' ? 'बच्चे' : 'Child'}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Special Requests */}
        <div>
          <label className="block text-xs font-semibold uppercase tracking-wider text-theme-muted mb-1.5">
            {t('specialRequests')}
          </label>
          <textarea
            name="specialRequests"
            rows="2"
            value={formData.specialRequests}
            onChange={handleChange}
            placeholder={
              lang === 'hi'
                ? 'उदा. भूतल/लिफ्ट निकट कमरा, बिना लहसुन-प्याज का सात्विक भोजन, सुबह की गंगा आरती समय पर कॉल...'
                : 'e.g. Ground floor / near lift for seniors, Satvik meals requirement, late arrival...'
            }
            className="w-full px-4 py-2.5 rounded-lg border border-theme-border bg-slate-50/50 focus:bg-white text-sm focus:outline-none focus:ring-2 focus:ring-amber-500/20 resize-none"
          />
        </div>

        {/* Buttons */}
        <div className="pt-2 space-y-3">
          <button
            type="submit"
            className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-medium py-3.5 px-6 rounded-xl flex items-center justify-center gap-2.5 shadow-md hover:shadow-lg transition-all transform active:scale-[0.99] cursor-pointer"
          >
            <Send className="w-4 h-4" />
            <span>{t('sendWhatsappBtn')}</span>
          </button>

          <a
            href={`tel:${cleanPhoneForTel(propertyConfig.contact.phone)}`}
            className="w-full bg-theme-primary-light hover:bg-slate-200 text-theme-primary font-medium py-3 px-6 rounded-xl flex items-center justify-center gap-2 transition-all cursor-pointer text-sm"
          >
            <PhoneCall className="w-4 h-4 text-theme-secondary" />
            <span>{t('callDirectBtn')}: {propertyConfig.contact.phoneDisplay}</span>
          </a>
        </div>
      </form>

      {/* Mandatory Disclaimer from requirements */}
      <div className="mt-5 p-3.5 rounded-xl bg-amber-50/80 border border-amber-200/70 text-xs text-amber-900 leading-relaxed">
        <p className="font-semibold flex items-center gap-1.5 mb-1 text-amber-800">
          <AlertCircle className="w-3.5 h-3.5 flex-shrink-0" />
          {t('disclaimerTitle')}
        </p>
        <p className="text-amber-800/90">
          {t('disclaimerBody')}
        </p>
      </div>
    </div>
  );
};
