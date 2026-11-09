import React, { useState } from 'react';
import { ESTATE_WAYPOINTS } from '../data/hotelData';
import { MapPin, Navigation, Compass, ChevronRight, Clock } from 'lucide-react';

export const InteractiveEstateMap: React.FC = () => {
  const [selectedPointId, setSelectedPointId] = useState<string>(ESTATE_WAYPOINTS[0].id);

  const selectedPoint = ESTATE_WAYPOINTS.find((p) => p.id === selectedPointId) || ESTATE_WAYPOINTS[0];

  return (
    <section id="estate-map" className="py-24 bg-stone-925 text-stone-100 border-t border-stone-850">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Heading */}
        <div className="max-w-2xl mb-12">
          <div className="text-xs uppercase tracking-[0.2em] text-stone-400 font-medium mb-2">
            05. Resort Domain
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-white tracking-tight" style={{ textWrap: 'balance' }}>
            The 45-Acre Cliffside Sanctuary
          </h2>
          <p className="mt-3 text-stone-400 text-sm sm:text-base font-light leading-relaxed">
            Perched 450 feet above sea level. Explore our private trails, secluded ocean cove, organic culinary gardens, and hydrothermal facilities.
          </p>
        </div>

        {/* Interactive Map Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Map Canvas Visual (8 cols) */}
          <div className="lg:col-span-8 relative bg-stone-900 border border-stone-800 rounded-lg overflow-hidden min-h-[460px] p-6 flex flex-col justify-between">
            {/* Architectural Stylized Vector Ocean & Terrain Background */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-stone-850 via-stone-900 to-stone-950 pointer-events-none" />
            
            {/* Subtle Topographic Elevation Contour Lines */}
            <svg
              className="absolute inset-0 w-full h-full opacity-15 pointer-events-none stroke-stone-400"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
            >
              <path d="M-50,200 Q200,120 450,250 T950,200" strokeWidth="1" strokeDasharray="3 3" />
              <path d="M-50,280 Q250,220 500,320 T950,290" strokeWidth="1" />
              <path d="M-50,380 Q220,300 480,410 T950,370" strokeWidth="1" strokeDasharray="4 4" />
              <path d="M-50,480 Q280,420 520,510 T950,480" strokeWidth="1" />
              <path d="M-50,560 Q210,500 550,590 T950,540" strokeWidth="1.5" />
            </svg>

            {/* Ocean boundary watermark label */}
            <div className="relative z-10 flex items-center justify-between text-xs text-stone-400 font-mono tracking-widest uppercase">
              <span className="flex items-center gap-2">
                <Compass className="w-4 h-4 text-stone-400" />
                <span>Pacific Ocean Coastline · 36°14'N 121°48'W</span>
              </span>
              <span>Elevation: 450 ft ASL</span>
            </div>

            {/* Interactive Waypoint Pins */}
            <div className="relative z-10 w-full h-80 my-4">
              {ESTATE_WAYPOINTS.map((wp) => {
                const isSelected = wp.id === selectedPointId;
                return (
                  <button
                    key={wp.id}
                    onClick={() => setSelectedPointId(wp.id)}
                    style={{ left: `${wp.coords.x}%`, top: `${wp.coords.y}%` }}
                    className={`absolute -translate-x-1/2 -translate-y-1/2 group cursor-pointer transition-transform ${
                      isSelected ? 'scale-125 z-20' : 'hover:scale-110 z-10'
                    }`}
                    title={wp.name}
                  >
                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center transition-all ${
                        isSelected
                          ? 'bg-stone-100 text-stone-950 shadow-lg ring-4 ring-stone-700/60'
                          : 'bg-stone-950/80 text-stone-300 border border-stone-700 hover:border-stone-400'
                      }`}
                    >
                      <MapPin className="w-4 h-4" />
                    </div>
                    <span
                      className={`hidden sm:block absolute top-9 left-1/2 -translate-x-1/2 whitespace-nowrap text-[11px] font-medium px-2 py-0.5 rounded pointer-events-none transition-all ${
                        isSelected
                          ? 'bg-stone-100 text-stone-950 shadow-sm'
                          : 'bg-stone-950/90 text-stone-300 border border-stone-800 opacity-80 group-hover:opacity-100'
                      }`}
                    >
                      {wp.name}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Map Legend Footer */}
            <div className="relative z-10 pt-4 border-t border-stone-850/80 flex flex-wrap items-center justify-between gap-4 text-xs text-stone-400">
              <span>Click any marker to inspect estate pavilion details</span>
              <span className="font-mono text-[11px]">Private Valet &amp; Buggy Escorts Provided</span>
            </div>
          </div>

          {/* Selected Station Inspector Card (4 cols) */}
          <div className="lg:col-span-4 bg-stone-900 border border-stone-800 rounded-lg p-6 flex flex-col justify-between">
            <div className="space-y-4">
              <div>
                <span className="text-[11px] uppercase tracking-widest text-amber-200/90 font-medium">
                  {selectedPoint.tag}
                </span>
                <h3 className="text-2xl font-serif text-white mt-1">
                  {selectedPoint.name}
                </h3>
              </div>

              <p className="text-stone-300 text-sm font-light leading-relaxed">
                {selectedPoint.description}
              </p>

              <div className="p-3.5 bg-stone-950 border border-stone-850 rounded space-y-2 text-xs">
                <div className="flex items-center justify-between text-stone-300">
                  <span className="text-stone-500">Access:</span>
                  <span>Resort Guests &amp; By Private Booking</span>
                </div>
                <div className="flex items-center justify-between text-stone-300">
                  <span className="text-stone-500">Transfer Time:</span>
                  <span>2–4 min chauffeured golf buggy</span>
                </div>
                <div className="flex items-center justify-between text-stone-300">
                  <span className="text-stone-500">Sanctuary Vibe:</span>
                  <span>Quiet contemplative sanctuary</span>
                </div>
              </div>
            </div>

            {/* Waypoints Quick Selector */}
            <div className="pt-6 border-t border-stone-800 mt-6 space-y-2">
              <div className="text-[11px] uppercase tracking-wider text-stone-500 font-medium">
                All Estate Stations
              </div>
              <div className="grid grid-cols-1 gap-1 max-h-44 overflow-y-auto pr-1">
                {ESTATE_WAYPOINTS.map((wp) => (
                  <button
                    key={wp.id}
                    onClick={() => setSelectedPointId(wp.id)}
                    className={`text-left px-2.5 py-1.5 rounded text-xs transition-colors flex items-center justify-between ${
                      wp.id === selectedPointId
                        ? 'bg-stone-800 text-white font-medium'
                        : 'text-stone-400 hover:text-stone-200 hover:bg-stone-950'
                    }`}
                  >
                    <span className="truncate">{wp.name}</span>
                    <ChevronRight className="w-3.5 h-3.5 opacity-50 shrink-0" />
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
