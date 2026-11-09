/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Accommodations } from './components/Accommodations';
import { DiningSection } from './components/DiningSection';
import { SpaSection } from './components/SpaSection';
import { ExperiencesSection } from './components/ExperiencesSection';
import { InteractiveEstateMap } from './components/InteractiveEstateMap';
import { GuestAccolades } from './components/GuestAccolades';
import { Footer } from './components/Footer';
import { BookingDrawer } from './components/BookingDrawer';
import { BookingState, Room } from './types/hotel';

export default function App() {
  const [bookingDrawerOpen, setBookingDrawerOpen] = useState(false);
  const [currency, setCurrency] = useState<'USD' | 'EUR' | 'GBP'>('USD');

  // Currency rate mapping
  const currencyConfig = {
    USD: { symbol: '$', rate: 1.0 },
    EUR: { symbol: '€', rate: 0.92 },
    GBP: { symbol: '£', rate: 0.78 }
  };

  const activeCurrencyConfig = currencyConfig[currency];

  // Default booking state
  const [bookingState, setBookingState] = useState<BookingState>({
    checkIn: '2026-11-12',
    checkOut: '2026-11-15',
    adults: 2,
    children: 0,
    roomsCount: 1,
    selectedRoomId: 'cliffside-horizon-villa',
    selectedAddonIds: [],
    guestName: '',
    guestEmail: '',
    guestPhone: '',
    specialRequests: 'Hungarian Goose Down (Plush)',
    arrivalTransfer: false,
    dietaryNotes: ''
  });

  const handleUpdateBooking = (updates: Partial<BookingState>) => {
    setBookingState((prev) => ({ ...prev, ...updates }));
  };

  const handleReserveRoom = (room: Room) => {
    setBookingState((prev) => ({
      ...prev,
      selectedRoomId: room.id
    }));
    setBookingDrawerOpen(true);
  };

  const handleSearchAvailability = () => {
    const accommodationsSection = document.getElementById('accommodations');
    if (accommodationsSection) {
      accommodationsSection.scrollIntoView({ behavior: 'smooth' });
    } else {
      setBookingDrawerOpen(true);
    }
  };

  return (
    <div className="min-h-screen bg-stone-950 text-stone-100 flex flex-col font-sans selection:bg-stone-800 selection:text-white">
      {/* Top Bar Navigation */}
      <Navbar
        onOpenBooking={() => setBookingDrawerOpen(true)}
        bookingCount={bookingState.selectedAddonIds.length + 1}
        currency={currency}
        setCurrency={(c) => setCurrency(c as 'USD' | 'EUR' | 'GBP')}
      />

      {/* Main Content */}
      <main className="flex-1">
        {/* Hero Section with Quick Booking Engine */}
        <Hero
          bookingState={bookingState}
          onUpdateBooking={handleUpdateBooking}
          onSearchAvailability={handleSearchAvailability}
        />

        {/* 01. Accommodations Showcase */}
        <Accommodations
          onReserveRoom={handleReserveRoom}
          currency={currency}
          currencyRate={activeCurrencyConfig.rate}
          currencySymbol={activeCurrencyConfig.symbol}
        />

        {/* 02. Gastronomy & Michelin Dining */}
        <DiningSection />

        {/* 03. Thermal Springs & Hydrotherapy Wellness */}
        <SpaSection
          currency={currency}
          currencyRate={activeCurrencyConfig.rate}
          currencySymbol={activeCurrencyConfig.symbol}
        />

        {/* 04. Curated Excursions & Marine Charters */}
        <ExperiencesSection
          currency={currency}
          currencyRate={activeCurrencyConfig.rate}
          currencySymbol={activeCurrencyConfig.symbol}
        />

        {/* 05. Interactive 45-Acre Cliffside Estate Map */}
        <InteractiveEstateMap />

        {/* 06. Accolades, Quantitative Rigor & FAQs */}
        <GuestAccolades />
      </main>

      {/* Luxury Editorial Footer */}
      <Footer />

      {/* Interactive Reservation Drawer with Calendar Export */}
      <BookingDrawer
        isOpen={bookingDrawerOpen}
        onClose={() => setBookingDrawerOpen(false)}
        bookingState={bookingState}
        onUpdateBooking={handleUpdateBooking}
        currency={currency}
        currencyRate={activeCurrencyConfig.rate}
        currencySymbol={activeCurrencyConfig.symbol}
      />
    </div>
  );
}
