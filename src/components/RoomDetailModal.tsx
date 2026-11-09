import React, { useState } from 'react';
import { X, Check, BedDouble, Maximize2, Users, Eye, Sparkles } from 'lucide-react';
import { Room } from '../types/hotel';

interface RoomDetailModalProps {
  room: Room | null;
  onClose: () => void;
  onSelectAndBook: (room: Room) => void;
  currency: string;
  currencyRate: number;
  currencySymbol: string;
}

export const RoomDetailModal: React.FC<RoomDetailModalProps> = ({
  room,
  onClose,
  onSelectAndBook,
  currency,
  currencyRate,
  currencySymbol
}) => {
  if (!room) return null;

  const [activeImage, setActiveImage] = useState(room.image);

  const priceFormatted = Math.round(room.basePriceUSD * currencyRate).toLocaleString();

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-stone-950/80 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 md:p-10">
      <div className="relative bg-stone-900 border border-stone-800 text-stone-100 rounded-lg max-w-4xl w-full max-h-[92vh] overflow-y-auto shadow-2xl">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 text-stone-400 hover:text-white bg-stone-950/60 rounded-full transition-colors cursor-pointer"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Media Header */}
        <div className="relative h-72 sm:h-96 w-full overflow-hidden bg-stone-950">
          <img
            src={activeImage}
            alt={room.name}
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-stone-900 via-stone-900/20 to-transparent" />
          
          <div className="absolute bottom-6 left-6 right-6">
            <div className="text-xs uppercase tracking-widest text-stone-300 font-medium mb-1">
              {room.categoryLabel}
            </div>
            <h2 className="text-2xl sm:text-3xl font-serif text-white mb-2">
              {room.name}
            </h2>
            <div className="flex flex-wrap items-center gap-3 text-xs text-stone-300 font-light">
              <span>{room.areaSqMeters} m² ({room.areaSqFt} sq ft)</span>
              <span aria-hidden="true">·</span>
              <span>{room.view}</span>
              <span aria-hidden="true">·</span>
              <span>{room.bedType}</span>
              <span aria-hidden="true">·</span>
              <span>Up to {room.maxGuests} Guests</span>
            </div>
          </div>
        </div>

        {/* Gallery Thumbnails */}
        {room.gallery.length > 1 && (
          <div className="px-6 py-3 bg-stone-950/40 border-b border-stone-800/80 flex gap-2">
            {room.gallery.map((img, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => setActiveImage(img)}
                className={`relative w-16 h-12 rounded overflow-hidden border transition-all ${
                  activeImage === img ? 'border-stone-100 ring-1 ring-stone-100' : 'border-stone-800 opacity-60 hover:opacity-100'
                }`}
              >
                <img src={img} alt={`Gallery view ${idx + 1}`} className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        )}

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-8">
          {/* Overview Prose */}
          <div>
            <h3 className="text-xs uppercase tracking-widest text-stone-400 font-medium mb-2">The Space &amp; Ambience</h3>
            <p className="text-stone-300 text-sm sm:text-base leading-relaxed font-light">
              {room.description}
            </p>
          </div>

          {/* Key Architectural Highlights */}
          <div>
            <h3 className="text-xs uppercase tracking-widest text-stone-400 font-medium mb-3">Architectural Highlights</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {room.highlights.map((highlight, index) => (
                <div key={index} className="flex items-start gap-2.5 text-xs sm:text-sm text-stone-300">
                  <Check className="w-4 h-4 text-stone-400 shrink-0 mt-0.5" />
                  <span>{highlight}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Included Privileges */}
          <div className="p-4 bg-stone-950/50 border border-stone-800 rounded">
            <div className="flex items-center gap-2 mb-3">
              <Sparkles className="w-4 h-4 text-amber-200" />
              <h3 className="text-xs uppercase tracking-widest text-stone-200 font-medium">Bespoke In-Suite Privileges</h3>
            </div>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-stone-300">
              {room.privileges.map((privilege, i) => (
                <li key={i} className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-stone-500" />
                  <span>{privilege}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Amenities Grid */}
          <div>
            <h3 className="text-xs uppercase tracking-widest text-stone-400 font-medium mb-3">Suite Amenities</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-stone-400">
              {room.amenities.map((item, i) => (
                <div key={i} className="flex items-center gap-2 py-1 border-b border-stone-800/50">
                  <span className="text-stone-500">·</span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Floorplan summary */}
          <div>
            <h3 className="text-xs uppercase tracking-widest text-stone-400 font-medium mb-1">Spatial Layout</h3>
            <p className="text-xs text-stone-400 font-mono">
              {room.floorPlanSummary}
            </p>
          </div>

          {/* Action Footer */}
          <div className="pt-6 border-t border-stone-800 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <div className="text-xs text-stone-400 uppercase tracking-wider">Nightly Investment</div>
              <div className="text-2xl font-serif text-white tabular-nums">
                {currencySymbol}{priceFormatted} <span className="text-xs text-stone-400 font-sans font-normal">/ night</span>
              </div>
              <div className="text-[11px] text-stone-400">Exclusive of local taxes &amp; resort sanctuary fee</div>
            </div>

            <div className="flex items-center gap-3 w-full sm:w-auto">
              <button
                type="button"
                onClick={onClose}
                className="flex-1 sm:flex-none px-5 py-2.5 text-xs uppercase tracking-wider text-stone-300 hover:text-white border border-stone-700 rounded transition-colors"
              >
                Close
              </button>
              <button
                type="button"
                onClick={() => onSelectAndBook(room)}
                className="flex-1 sm:flex-none px-6 py-2.5 text-xs uppercase tracking-widest font-semibold bg-stone-100 hover:bg-white text-stone-950 rounded transition-colors shadow"
              >
                Reserve This Suite
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
