import React, { useState } from 'react';
import { ROOMS_DATA } from '../data/hotelData';
import { Room } from '../types/hotel';
import { RoomDetailModal } from './RoomDetailModal';
import { ArrowRight, BedDouble, Maximize2, Users, Compass } from 'lucide-react';

interface AccommodationsProps {
  onReserveRoom: (room: Room) => void;
  currency: string;
  currencyRate: number;
  currencySymbol: string;
}

export const Accommodations: React.FC<AccommodationsProps> = ({
  onReserveRoom,
  currency,
  currencyRate,
  currencySymbol
}) => {
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'suites' | 'villas' | 'penthouses'>('all');
  const [detailRoom, setDetailRoom] = useState<Room | null>(null);

  const filteredRooms = selectedCategory === 'all'
    ? ROOMS_DATA
    : ROOMS_DATA.filter((r) => r.category === selectedCategory);

  const filterTabs = [
    { id: 'all', label: 'All Collections' },
    { id: 'villas', label: 'Cliffside Villas' },
    { id: 'suites', label: 'Oceanfront Suites' },
    { id: 'penthouses', label: 'Penthouse Residences' }
  ] as const;

  return (
    <section id="accommodations" className="py-24 bg-stone-925 text-stone-100 border-t border-stone-850">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <div className="text-xs uppercase tracking-[0.2em] text-stone-400 font-medium mb-2">
              01. Curated Accommodations
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-white tracking-tight" style={{ textWrap: 'balance' }}>
              Suites, Villas &amp; Cliffside Penthouses
            </h2>
            <p className="mt-3 text-stone-400 text-sm sm:text-base font-light leading-relaxed">
              Every room is sculpted into the natural granite contours of the Big Sur coast, oriented towards private sunset vistas with dedicated butler service.
            </p>
          </div>

          {/* Interactive Filter Tabs (Functional segmented controls) */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 bg-stone-900 border border-stone-800 rounded self-start md:self-end">
            {filterTabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setSelectedCategory(tab.id)}
                className={`px-3.5 py-1.5 text-xs font-medium rounded transition-colors whitespace-nowrap cursor-pointer ${
                  selectedCategory === tab.id
                    ? 'bg-stone-100 text-stone-950 shadow-sm'
                    : 'text-stone-400 hover:text-white hover:bg-stone-800/60'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Accommodations Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredRooms.map((room) => {
            const formattedPrice = Math.round(room.basePriceUSD * currencyRate).toLocaleString();

            return (
              <div
                key={room.id}
                className="group bg-stone-900/60 border border-stone-850 rounded-lg overflow-hidden flex flex-col justify-between hover:border-stone-700 transition-all duration-300"
              >
                {/* Media Container */}
                <div>
                  <div className="relative h-64 overflow-hidden bg-stone-950">
                    <img
                      src={room.image}
                      alt={room.name}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-stone-900/90 via-transparent to-transparent" />
                    
                    {/* Quiet 1-line text kicker */}
                    <div className="absolute top-4 left-4 text-[11px] uppercase tracking-widest text-stone-300 font-medium bg-stone-950/70 backdrop-blur-sm px-2.5 py-1 rounded">
                      {room.categoryLabel}
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-6">
                    {/* Unboxed Metadata with · separator */}
                    <div className="flex items-center gap-2 text-xs text-stone-400 font-light mb-2">
                      <span>{room.areaSqMeters} m²</span>
                      <span aria-hidden="true">·</span>
                      <span>{room.view}</span>
                      <span aria-hidden="true">·</span>
                      <span>Up to {room.maxGuests} Guests</span>
                    </div>

                    <h3 className="text-xl font-serif text-white group-hover:text-amber-100 transition-colors mb-1">
                      {room.name}
                    </h3>
                    <p className="text-xs text-stone-400 font-light mb-4 line-clamp-1">
                      {room.subtitle}
                    </p>

                    <p className="text-stone-300 text-xs sm:text-sm font-light leading-relaxed line-clamp-3 mb-4">
                      {room.description}
                    </p>

                    {/* Highlights list */}
                    <div className="space-y-1.5 pt-3 border-t border-stone-800/80 mb-4">
                      {room.highlights.slice(0, 2).map((item, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-xs text-stone-400">
                          <span className="text-stone-500">·</span>
                          <span className="truncate">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Card Footer */}
                <div className="p-6 pt-0 border-t border-stone-850/60 mt-auto flex items-center justify-between gap-3">
                  <div>
                    <div className="text-[11px] uppercase tracking-wider text-stone-500 font-medium">Nightly Rate</div>
                    <div className="text-lg sm:text-xl font-serif text-white tabular-nums">
                      {currencySymbol}{formattedPrice}
                      <span className="text-xs font-sans text-stone-400 font-normal"> / night</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={() => setDetailRoom(room)}
                      className="px-3 py-2 text-xs text-stone-300 hover:text-white border border-stone-700/80 hover:border-stone-500 rounded transition-colors whitespace-nowrap cursor-pointer"
                    >
                      Details
                    </button>
                    <button
                      type="button"
                      onClick={() => onReserveRoom(room)}
                      className="px-3.5 py-2 text-xs uppercase tracking-wider font-semibold bg-stone-100 hover:bg-white text-stone-950 rounded transition-colors whitespace-nowrap cursor-pointer shadow-sm"
                    >
                      Reserve
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Modal */}
      <RoomDetailModal
        room={detailRoom}
        onClose={() => setDetailRoom(null)}
        onSelectAndBook={(room) => {
          setDetailRoom(null);
          onReserveRoom(room);
        }}
        currency={currency}
        currencyRate={currencyRate}
        currencySymbol={currencySymbol}
      />
    </section>
  );
};
