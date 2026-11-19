import React, { useEffect } from 'react';
import { X } from 'lucide-react';
import { BookingEnquiryForm } from './BookingEnquiryForm';

export const BookingModal = ({ isOpen, onClose, preselectedRoom = '' }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fadeIn">
      <div 
        className="relative w-full max-w-2xl max-h-[92vh] overflow-y-auto bg-white rounded-2xl shadow-floating"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 flex items-center justify-center transition-colors cursor-pointer"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="p-1">
          <BookingEnquiryForm
            preselectedRoom={preselectedRoom}
            onSuccess={() => {
              setTimeout(() => {
                onClose();
              }, 1200);
            }}
          />
        </div>
      </div>
    </div>
  );
};
