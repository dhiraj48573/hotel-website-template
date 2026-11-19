import React, { useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { LanguageProvider } from './context/LanguageContext';
import { ThemeProvider } from './context/ThemeContext';
import { ScrollToTop } from './components/ScrollToTop';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { WhatsAppFloatingButton } from './components/WhatsAppFloatingButton';
import { BookingModal } from './components/BookingModal';

// Pages
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Rooms } from './pages/Rooms';
import { Facilities } from './pages/Facilities';
import { Contact } from './pages/Contact';

export function App() {
  const [globalModalOpen, setGlobalModalOpen] = useState(false);
  const [globalSelectedRoom, setGlobalSelectedRoom] = useState('');

  const openGlobalModal = (roomName = '') => {
    setGlobalSelectedRoom(roomName);
    setGlobalModalOpen(true);
  };

  return (
    <ThemeProvider>
      <LanguageProvider>
        <ScrollToTop />
        <div className="flex flex-col min-h-screen">
          {/* Header Navigation */}
          <Navbar onOpenBookingModal={() => openGlobalModal('')} />

          {/* Main Routing View */}
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/rooms" element={<Rooms />} />
              <Route path="/facilities" element={<Facilities />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </main>

          {/* Site Footer */}
          <Footer />

          {/* Floating WhatsApp Action Button */}
          <WhatsAppFloatingButton onOpenBookingModal={() => openGlobalModal('')} />

          {/* Global Booking Enquiry Modal */}
          <BookingModal
            isOpen={globalModalOpen}
            onClose={() => setGlobalModalOpen(false)}
            preselectedRoom={globalSelectedRoom}
          />
        </div>
      </LanguageProvider>
    </ThemeProvider>
  );
}

export default App;
