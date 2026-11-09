import React, { useState } from 'react';
import { DINING_VENUES } from '../data/hotelData';
import { DiningVenue } from '../types/hotel';
import { TableReservationModal } from './TableReservationModal';
import { Utensils, Award, Clock, Sparkles } from 'lucide-react';

export const DiningSection: React.FC = () => {
  const [activeVenueId, setActiveVenueId] = useState<string>(DINING_VENUES[0].id);
  const [reservingVenue, setReservingVenue] = useState<DiningVenue | null>(null);

  const activeVenue = DINING_VENUES.find((v) => v.id === activeVenueId) || DINING_VENUES[0];

  return (
    <section id="gastronomy" className="py-24 bg-stone-950 text-stone-100 border-t border-stone-850">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Heading */}
        <div className="max-w-2xl mb-12">
          <div className="text-xs uppercase tracking-[0.2em] text-stone-400 font-medium mb-2">
            02. Gastronomy &amp; Cellar
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-white tracking-tight" style={{ textWrap: 'balance' }}>
            Culinary Artistry Above the Pacific
          </h2>
          <p className="mt-3 text-stone-400 text-sm sm:text-base font-light leading-relaxed">
            Coast-to-table cuisine guided by two Michelin stars, wild-foraged kelp, biodynamic estate produce, and one of the West Coast's most respected wine cellars.
          </p>
        </div>

        {/* Venue Selector Tabs */}
        <div className="flex flex-wrap items-center gap-2 mb-10 pb-4 border-b border-stone-850">
          {DINING_VENUES.map((venue) => (
            <button
              key={venue.id}
              onClick={() => setActiveVenueId(venue.id)}
              className={`px-4 py-2 text-xs uppercase tracking-wider font-medium rounded transition-all cursor-pointer ${
                activeVenueId === venue.id
                  ? 'bg-stone-100 text-stone-950 shadow-sm'
                  : 'text-stone-400 hover:text-white hover:bg-stone-900'
              }`}
            >
              <span className="flex items-center gap-1.5">
                <span>{venue.name}</span>
                {venue.michelinStars && (
                  <span className="text-[10px] tracking-normal lowercase font-serif italic text-amber-900">
                    ({venue.michelinStars}★ Michelin)
                  </span>
                )}
              </span>
            </button>
          ))}
        </div>

        {/* Asymmetric 2-Column Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          {/* Column 1: Dramatic Visual Media (5 cols) */}
          <div className="lg:col-span-5 relative rounded-lg overflow-hidden border border-stone-850 min-h-[420px] lg:min-h-full flex flex-col justify-end bg-stone-900">
            <img
              src={activeVenue.image}
              alt={activeVenue.name}
              referrerPolicy="no-referrer"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/40 to-transparent" />
            
            <div className="relative p-6 sm:p-8 space-y-2 z-10">
              {activeVenue.michelinStars && (
                <div className="flex items-center gap-2 text-amber-200 text-xs font-serif italic">
                  <Award className="w-4 h-4" />
                  <span>Two Michelin Stars Distinction 2025/2026</span>
                </div>
              )}
              <h3 className="text-2xl font-serif text-white">
                {activeVenue.name}
              </h3>
              <p className="text-xs text-stone-300 font-light">
                Executive Chef {activeVenue.chef}
              </p>
            </div>
          </div>

          {/* Column 2: Venue Detail & Sample Menu (7 cols) */}
          <div className="lg:col-span-7 bg-stone-900/50 border border-stone-850 rounded-lg p-6 sm:p-8 flex flex-col justify-between">
            <div className="space-y-6">
              {/* Overview & Credentials */}
              <div>
                <div className="flex flex-wrap items-center gap-3 text-xs text-stone-400 mb-2">
                  <span>{activeVenue.hours}</span>
                  <span aria-hidden="true">·</span>
                  <span>{activeVenue.dressCode}</span>
                </div>
                <p className="text-stone-300 text-sm leading-relaxed font-light">
                  {activeVenue.description}
                </p>
              </div>

              {/* Signature Dish Highlight */}
              <div className="p-4 bg-stone-950/80 border border-stone-800 rounded">
                <div className="text-[11px] uppercase tracking-wider text-amber-200/90 font-medium mb-1">
                  Signature Creation
                </div>
                <div className="text-sm font-medium text-white">
                  {activeVenue.signatureDish}
                </div>
              </div>

              {/* Sample Menu Courses */}
              <div className="space-y-4">
                <div className="text-xs uppercase tracking-widest text-stone-400 font-medium">
                  Sample Culinary Offerings
                </div>

                <div className="space-y-4">
                  {activeVenue.menuCourses.map((course, idx) => (
                    <div key={idx} className="space-y-2.5">
                      <div className="text-xs font-serif italic text-stone-400 border-b border-stone-800 pb-1">
                        {course.category}
                      </div>

                      <div className="space-y-2">
                        {course.items.map((item, itemIdx) => (
                          <div key={itemIdx} className="flex items-start justify-between gap-4 text-xs">
                            <div>
                              <div className="text-stone-200 font-medium">{item.name}</div>
                              <div className="text-stone-400 font-light">{item.description}</div>
                            </div>
                            <div className="text-stone-300 font-mono shrink-0 tabular-nums">
                              {item.price}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* CTA bar */}
            <div className="pt-8 mt-6 border-t border-stone-800 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-xs text-stone-400 font-light">
                Sommelier wine cellar tours and private dining salons available on request.
              </div>
              <button
                type="button"
                onClick={() => setReservingVenue(activeVenue)}
                className="w-full sm:w-auto px-6 py-2.5 text-xs uppercase tracking-widest font-semibold bg-stone-100 hover:bg-white text-stone-950 rounded transition-colors whitespace-nowrap cursor-pointer shadow"
              >
                Reserve a Table
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Table Reservation Modal */}
      <TableReservationModal
        venue={reservingVenue}
        onClose={() => setReservingVenue(null)}
      />
    </section>
  );
};
