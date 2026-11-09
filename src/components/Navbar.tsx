import React, { useState, useEffect } from 'react';
import { Calendar, Menu, X, ChevronRight, Phone } from 'lucide-react';

interface NavbarProps {
  onOpenBooking: () => void;
  bookingCount?: number;
  currency: string;
  setCurrency: (c: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenBooking,
  bookingCount = 0,
  currency,
  setCurrency
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Suites & Villas', href: '#accommodations' },
    { label: 'Gastronomy', href: '#gastronomy' },
    { label: 'Thermal Spa', href: '#wellness' },
    { label: 'Experiences', href: '#experiences' },
    { label: 'Resort Estate', href: '#estate-map' }
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-stone-925/90 backdrop-blur-md border-b border-stone-800/80 py-3.5 shadow-sm'
            : 'bg-gradient-to-b from-stone-950/80 via-stone-950/40 to-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 flex items-center justify-between gap-8">
          {/* Zone 1: Single text element wordmark */}
          <a
            href="#"
            className="text-xl sm:text-2xl font-serif tracking-tight text-white whitespace-nowrap shrink-0 hover:opacity-90 transition-opacity"
          >
            The Grand Veridian
          </a>

          {/* Zone 2: 4–5 clean single-line text navigation links */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-medium tracking-wide text-stone-200">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="hover:text-white transition-colors relative py-1 hover:underline underline-offset-8 decoration-stone-400 whitespace-nowrap shrink-0"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Zone 3: 1 primary action */}
          <div className="flex items-center gap-4 shrink-0">
            {/* Currency selector */}
            <div className="hidden sm:flex items-center text-xs font-mono text-stone-300 bg-stone-900/60 border border-stone-700/60 rounded px-2 py-1">
              <span className="text-stone-400 mr-1.5">Currency:</span>
              <select
                value={currency}
                onChange={(e) => setCurrency(e.target.value)}
                className="bg-transparent text-white focus:outline-none cursor-pointer"
                aria-label="Select Currency"
              >
                <option value="USD" className="bg-stone-900 text-white">USD ($)</option>
                <option value="EUR" className="bg-stone-900 text-white">EUR (€)</option>
                <option value="GBP" className="bg-stone-900 text-white">GBP (£)</option>
              </select>
            </div>

            <button
              onClick={onOpenBooking}
              className="relative px-5 py-2.5 text-xs font-medium tracking-wider uppercase text-stone-950 bg-stone-100 hover:bg-white rounded transition-colors whitespace-nowrap shrink-0 shadow-sm flex items-center gap-2 cursor-pointer"
            >
              <Calendar className="w-3.5 h-3.5 text-stone-900" />
              <span>Reserve Stay</span>
              {bookingCount > 0 && (
                <span className="w-4 h-4 rounded-full bg-stone-900 text-stone-100 text-[10px] flex items-center justify-center font-mono">
                  {bookingCount}
                </span>
              )}
            </button>

            {/* Mobile menu trigger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-stone-200 hover:text-white focus:outline-none"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-30 lg:hidden bg-stone-950/95 backdrop-blur-xl pt-24 px-6 flex flex-col justify-between pb-8">
          <div className="flex flex-col gap-6 text-lg font-serif">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-stone-200 hover:text-white border-b border-stone-800/80 pb-4 flex items-center justify-between"
              >
                <span>{link.label}</span>
                <ChevronRight className="w-4 h-4 text-stone-500" />
              </a>
            ))}
          </div>

          <div className="space-y-4 pt-6 border-t border-stone-800">
            <div className="flex items-center justify-between text-xs text-stone-400">
              <span>Direct Inquiries</span>
              <a href="tel:+18315550190" className="text-stone-200 flex items-center gap-1.5 hover:underline">
                <Phone className="w-3.5 h-3.5" />
                <span>+1 (831) 555-0190</span>
              </a>
            </div>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking();
              }}
              className="w-full py-3 text-center text-xs uppercase tracking-widest font-medium bg-stone-100 text-stone-950 rounded hover:bg-white transition-colors"
            >
              Check Availability &amp; Reserve
            </button>
          </div>
        </div>
      )}
    </>
  );
};
