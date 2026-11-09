import React, { useState, useEffect } from 'react';
import { Mail, Check, Phone, MapPin, Compass } from 'lucide-react';

export const Footer: React.FC = () => {
  const [email, setEmail] = useState('');
  const [newsletterSubscribed, setNewsletterSubscribed] = useState(false);
  const [currentTime, setCurrentTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      // Hotel is located in California (America/Los_Angeles)
      const options: Intl.DateTimeFormatOptions = {
        timeZone: 'America/Los_Angeles',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true
      };
      setCurrentTime(new Intl.DateTimeFormat('en-US', options).format(new Date()));
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setNewsletterSubscribed(true);
  };

  return (
    <footer className="bg-stone-950 text-stone-300 border-t border-stone-850 pt-20 pb-12">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-stone-850">
          {/* Brand & Editorial Column (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <a href="#" className="text-2xl font-serif text-white tracking-tight">
              The Grand Veridian
            </a>
            <p className="text-xs sm:text-sm text-stone-400 font-light leading-relaxed max-w-sm">
              An architectural cliffside retreat along the untamed coast of Big Sur. Sanctuary for those seeking stillness, high culinary mastery, and profound immersion in nature.
            </p>

            <div className="pt-2 space-y-2 text-xs text-stone-400 font-mono">
              <div className="flex items-center gap-2">
                <Compass className="w-3.5 h-3.5 text-stone-500" />
                <span>36°14'28" N · 121°48'09" W</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-stone-500" />
                <span>Highway One, Big Sur, California 93920</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-stone-500" />
                <a href="tel:+18315550190" className="hover:text-white transition-colors">
                  +1 (831) 555-0190
                </a>
              </div>
              <div className="text-[11px] text-stone-500 pt-1">
                Pacific Standard Time: <span className="text-stone-300">{currentTime || '12:00:00 PM'}</span>
              </div>
            </div>
          </div>

          {/* Navigation Mirrors (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <div className="text-xs uppercase tracking-widest text-stone-400 font-medium">
              The Collection
            </div>
            <ul className="space-y-2 text-xs text-stone-400 font-light">
              <li><a href="#accommodations" className="hover:text-white transition-colors">Horizon &amp; Sunset Villas</a></li>
              <li><a href="#accommodations" className="hover:text-white transition-colors">Pacific Azure Ocean Suites</a></li>
              <li><a href="#accommodations" className="hover:text-white transition-colors">Cypress Royal Penthouse</a></li>
              <li><a href="#gastronomy" className="hover:text-white transition-colors">L'Étoile Marine Restaurant</a></li>
              <li><a href="#gastronomy" className="hover:text-white transition-colors">The Horizon Raw Bar</a></li>
              <li><a href="#wellness" className="hover:text-white transition-colors">The Thermal Spa &amp; Caverns</a></li>
              <li><a href="#estate-map" className="hover:text-white transition-colors">Interactive Estate Domain</a></li>
            </ul>
          </div>

          {/* Gazette Dispatch (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="text-xs uppercase tracking-widest text-stone-400 font-medium">
              The Veridian Gazette
            </div>
            <p className="text-xs text-stone-400 font-light leading-relaxed">
              Receive quarterly private bulletins regarding seasonal chef tables, wine release allocations, and astronomical solstices.
            </p>

            {newsletterSubscribed ? (
              <div className="p-3 bg-stone-900 border border-stone-800 rounded text-xs text-stone-200 flex items-center gap-2">
                <Check className="w-4 h-4 text-amber-200 shrink-0" />
                <span>You are enrolled in the Private Gazette list.</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="space-y-2">
                <div className="flex gap-2">
                  <input
                    type="email"
                    required
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="p-2.5 bg-stone-900 border border-stone-800 rounded text-xs text-white focus:outline-none focus:border-stone-600 flex-1"
                  />
                  <button
                    type="submit"
                    className="px-4 py-2.5 bg-stone-100 hover:bg-white text-stone-950 rounded text-xs uppercase tracking-wider font-semibold transition-colors cursor-pointer shrink-0"
                  >
                    Subscribe
                  </button>
                </div>
                <p className="text-[10px] text-stone-500">
                  Unsubscribe at any time. We respect strict privacy protocol.
                </p>
              </form>
            )}
          </div>
        </div>

        {/* Quiet Legal & Affiliation Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-stone-500 font-light">
          <div>
            &copy; {new Date().getFullYear()} The Grand Veridian Resort &amp; Spa. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-stone-300 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-stone-300 transition-colors">Terms of Hospitality</a>
            <a href="#" className="hover:text-stone-300 transition-colors">Accessibility Protocol</a>
            <a href="#" className="hover:text-stone-300 transition-colors">Press Inquiries</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
