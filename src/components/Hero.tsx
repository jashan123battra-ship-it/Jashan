import React, { useState } from 'react';
import { Calendar, Users, ChevronDown, Sparkles } from 'lucide-react';
import { HERO_IMAGE } from '../data/hotelData';
import { BookingState } from '../types/hotel';

interface HeroProps {
  bookingState: BookingState;
  onUpdateBooking: (updates: Partial<BookingState>) => void;
  onSearchAvailability: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  bookingState,
  onUpdateBooking,
  onSearchAvailability
}) => {
  const [guestPickerOpen, setGuestPickerOpen] = useState(false);

  return (
    <section className="relative min-h-[92vh] flex flex-col justify-between pt-28 pb-12 overflow-hidden bg-stone-950">
      {/* Background Image with Measured Contrast Scrim */}
      <div className="absolute inset-0 z-0">
        <img
          src={HERO_IMAGE}
          alt="The Grand Veridian cliffside luxury resort overlooking the Pacific Ocean"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center scale-100 transition-transform duration-1000 ease-out"
        />
        {/* Measured Scrim for contrast compliance */}
        <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/40 to-stone-950/70" />
        <div className="absolute inset-0 bg-black/25" />
      </div>

      {/* Main Content Area */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 w-full my-auto py-12">
        <div className="max-w-3xl">
          {/* Quiet 1-line text kicker without pills or decorative dots */}
          <div className="text-xs uppercase tracking-[0.25em] text-stone-300 font-medium mb-4 flex items-center gap-2">
            <span>Big Sur Coastal Sanctuary</span>
            <span aria-hidden="true" className="text-stone-500">·</span>
            <span>Est. 1928</span>
            <span aria-hidden="true" className="text-stone-500">·</span>
            <span>Three Michelin Keys</span>
          </div>

          <h1
            className="text-4xl sm:text-5xl lg:text-6xl font-serif text-white leading-[1.12] tracking-tight mb-6"
            style={{ textWrap: 'balance' }}
          >
            A Sanctuary of Timeless Calm &amp; Coastal Splendor
          </h1>

          <p className="text-base sm:text-lg text-stone-200 font-light leading-relaxed max-w-2xl mb-8">
            Suspended upon the dramatic Pacific cliffs of California. Where organic architecture meets the rhythm of the tides, two-Michelin-starred gastronomy, and deeply restorative thermal mineral waters.
          </p>

          <div className="flex flex-wrap items-center gap-5">
            <button
              onClick={onSearchAvailability}
              className="px-7 py-3 text-xs uppercase tracking-widest font-medium bg-stone-100 text-stone-950 hover:bg-white rounded transition-colors shadow-lg cursor-pointer whitespace-nowrap shrink-0"
            >
              Explore Accommodations
            </button>
            <a
              href="#experiences"
              className="px-6 py-3 text-xs uppercase tracking-widest font-medium text-white hover:text-stone-200 border border-stone-400/40 hover:border-stone-200 rounded transition-colors backdrop-blur-sm whitespace-nowrap shrink-0"
            >
              Discover The Estate
            </a>
          </div>
        </div>
      </div>

      {/* 4-Column Luxury Quick-Booking Strip (Placed cleanly below hero content) */}
      <div className="relative z-20 max-w-7xl mx-auto px-6 sm:px-8 w-full mt-8">
        <div className="bg-stone-900/90 backdrop-blur-md border border-stone-800 rounded-lg p-3 sm:p-4 shadow-2xl">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 items-center">
            {/* Check-In */}
            <div className="p-3 bg-stone-950/60 rounded border border-stone-800/80 hover:border-stone-700 transition-colors">
              <label htmlFor="check-in-date" className="block text-[11px] uppercase tracking-wider text-stone-400 mb-1">
                Check-in Date
              </label>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-stone-400 shrink-0" />
                <input
                  id="check-in-date"
                  type="date"
                  value={bookingState.checkIn}
                  onChange={(e) => onUpdateBooking({ checkIn: e.target.value })}
                  className="bg-transparent text-white text-sm font-medium focus:outline-none w-full cursor-pointer [color-scheme:dark]"
                />
              </div>
            </div>

            {/* Check-Out */}
            <div className="p-3 bg-stone-950/60 rounded border border-stone-800/80 hover:border-stone-700 transition-colors">
              <label htmlFor="check-out-date" className="block text-[11px] uppercase tracking-wider text-stone-400 mb-1">
                Check-out Date
              </label>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-stone-400 shrink-0" />
                <input
                  id="check-out-date"
                  type="date"
                  value={bookingState.checkOut}
                  onChange={(e) => onUpdateBooking({ checkOut: e.target.value })}
                  className="bg-transparent text-white text-sm font-medium focus:outline-none w-full cursor-pointer [color-scheme:dark]"
                />
              </div>
            </div>

            {/* Guests & Rooms Dropdown */}
            <div className="relative p-3 bg-stone-950/60 rounded border border-stone-800/80 hover:border-stone-700 transition-colors">
              <label className="block text-[11px] uppercase tracking-wider text-stone-400 mb-1">
                Guests &amp; Rooms
              </label>
              <button
                type="button"
                onClick={() => setGuestPickerOpen(!guestPickerOpen)}
                className="flex items-center justify-between w-full text-left text-sm text-white font-medium focus:outline-none cursor-pointer"
              >
                <div className="flex items-center gap-2 truncate">
                  <Users className="w-4 h-4 text-stone-400 shrink-0" />
                  <span className="truncate">
                    {bookingState.adults} {bookingState.adults === 1 ? 'Adult' : 'Adults'}
                    {bookingState.children > 0 ? `, ${bookingState.children} Ch` : ''} · {bookingState.roomsCount} {bookingState.roomsCount === 1 ? 'Room' : 'Rooms'}
                  </span>
                </div>
                <ChevronDown className={`w-4 h-4 text-stone-400 transition-transform ${guestPickerOpen ? 'rotate-180' : ''}`} />
              </button>

              {/* Guests Popover */}
              {guestPickerOpen && (
                <div className="absolute bottom-full left-0 right-0 sm:right-auto sm:w-72 mb-2 p-4 bg-stone-900 border border-stone-700 rounded-lg shadow-2xl z-50 text-white space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-sm font-medium">Adults</div>
                      <div className="text-xs text-stone-400">Ages 18+</div>
                    </div>
                    <div className="flex items-center gap-3">
                      <button
                        type="button"
                        onClick={() => onUpdateBooking({ adults: Math.max(1, bookingState.adults - 1) })}
                        className="w-7 h-7 rounded border border-stone-700 flex items-center justify-center hover:bg-stone-800 text-sm font-mono"
                      >
                        -
                      </button>
                      <span className="w-5 text-center font-mono text-sm">{bookingState.adults}</span>
                      <button
                        type="button"
                        onClick={() => onUpdateBooking({ adults: Math.min(8, bookingState.adults + 1) })}
                        className="w-7 h-7 rounded border border-stone-700 flex items-center justify-center hover:bg-stone-800 text-sm font-mono"
                      >
                        +
                      </button>
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-3 border-t border-stone-800">
                    <div>
                      <div className="text-sm font-medium">Children</div>
                      <div className="text-xs text-stone-400">Ages 14–17</div>
                    </div>
                    <div className="flex items-center gap-3">
                      <button
                        type="button"
                        onClick={() => onUpdateBooking({ children: Math.max(0, bookingState.children - 1) })}
                        className="w-7 h-7 rounded border border-stone-700 flex items-center justify-center hover:bg-stone-800 text-sm font-mono"
                      >
                        -
                      </button>
                      <span className="w-5 text-center font-mono text-sm">{bookingState.children}</span>
                      <button
                        type="button"
                        onClick={() => onUpdateBooking({ children: Math.min(4, bookingState.children + 1) })}
                        className="w-7 h-7 rounded border border-stone-700 flex items-center justify-center hover:bg-stone-800 text-sm font-mono"
                      >
                        +
                      </button>
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-3 border-t border-stone-800">
                    <div>
                      <div className="text-sm font-medium">Rooms</div>
                      <div className="text-xs text-stone-400">Max 4 suites</div>
                    </div>
                    <div className="flex items-center gap-3">
                      <button
                        type="button"
                        onClick={() => onUpdateBooking({ roomsCount: Math.max(1, bookingState.roomsCount - 1) })}
                        className="w-7 h-7 rounded border border-stone-700 flex items-center justify-center hover:bg-stone-800 text-sm font-mono"
                      >
                        -
                      </button>
                      <span className="w-5 text-center font-mono text-sm">{bookingState.roomsCount}</span>
                      <button
                        type="button"
                        onClick={() => onUpdateBooking({ roomsCount: Math.min(4, bookingState.roomsCount + 1) })}
                        className="w-7 h-7 rounded border border-stone-700 flex items-center justify-center hover:bg-stone-800 text-sm font-mono"
                      >
                        +
                      </button>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={() => setGuestPickerOpen(false)}
                    className="w-full py-1.5 text-xs uppercase tracking-wider bg-stone-800 hover:bg-stone-700 text-white rounded transition-colors text-center font-medium mt-2"
                  >
                    Done
                  </button>
                </div>
              )}
            </div>

            {/* Check Availability CTA */}
            <div>
              <button
                type="button"
                onClick={onSearchAvailability}
                className="w-full h-full py-3.5 px-4 bg-stone-100 hover:bg-white text-stone-950 text-xs uppercase tracking-widest font-semibold rounded transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-md"
              >
                <span>Check Rates</span>
                <Sparkles className="w-3.5 h-3.5 text-stone-800" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
