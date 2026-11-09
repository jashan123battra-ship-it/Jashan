import React, { useState } from 'react';
import { X, Calendar, Users, Check, Sparkles, ArrowRight, ArrowLeft, Download, Printer, ShieldCheck } from 'lucide-react';
import { ROOMS_DATA, ADDONS_DATA } from '../data/hotelData';
import { BookingState, Room } from '../types/hotel';

interface BookingDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  bookingState: BookingState;
  onUpdateBooking: (updates: Partial<BookingState>) => void;
  currency: string;
  currencyRate: number;
  currencySymbol: string;
}

export const BookingDrawer: React.FC<BookingDrawerProps> = ({
  isOpen,
  onClose,
  bookingState,
  onUpdateBooking,
  currency,
  currencyRate,
  currencySymbol
}) => {
  const [step, setStep] = useState<1 | 2 | 3 | 4>(1);
  const [reservationCode, setReservationCode] = useState<string>('GV-74829');

  if (!isOpen) return null;

  // Selected room
  const selectedRoom = ROOMS_DATA.find((r) => r.id === bookingState.selectedRoomId) || ROOMS_DATA[0];

  // Calculate nights
  const calculateNights = (): number => {
    try {
      const d1 = new Date(bookingState.checkIn);
      const d2 = new Date(bookingState.checkOut);
      const diffTime = Math.abs(d2.getTime() - d1.getTime());
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
      return isNaN(diffDays) || diffDays < 1 ? 2 : diffDays;
    } catch {
      return 2;
    }
  };

  const nights = calculateNights();

  // Pricing calculation
  const roomCostUSD = selectedRoom.basePriceUSD * nights * bookingState.roomsCount;
  
  const addonsCostUSD = bookingState.selectedAddonIds.reduce((sum, id) => {
    const addon = ADDONS_DATA.find((a) => a.id === id);
    if (!addon) return sum;
    if (addon.unit === 'per night' || addon.unit === 'per day') return sum + addon.priceUSD * nights;
    if (addon.unit === 'per guest') return sum + addon.priceUSD * (bookingState.adults + bookingState.children);
    return sum + addon.priceUSD;
  }, 0);

  const resortFeeUSD = 95 * nights;
  const taxesUSD = Math.round((roomCostUSD + addonsCostUSD) * 0.14);
  const totalCostUSD = roomCostUSD + addonsCostUSD + resortFeeUSD + taxesUSD;

  const formatPrice = (usd: number) => {
    return Math.round(usd * currencyRate).toLocaleString();
  };

  const toggleAddon = (id: string) => {
    const current = [...bookingState.selectedAddonIds];
    const index = current.indexOf(id);
    if (index > -1) {
      current.splice(index, 1);
    } else {
      current.push(id);
    }
    onUpdateBooking({ selectedAddonIds: current });
  };

  const handleFinalSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!bookingState.guestName || !bookingState.guestEmail) return;
    const newCode = `GV-${Math.floor(10000 + Math.random() * 90000)}`;
    setReservationCode(newCode);
    setStep(4);
  };

  const generateIcsFile = () => {
    const icsData = [
      'BEGIN:VCALENDAR',
      'VERSION:2.0',
      'PRODID:-//The Grand Veridian Resort//Stay Reservation//EN',
      'BEGIN:VEVENT',
      `SUMMARY:Stay at The Grand Veridian Resort & Spa (${selectedRoom.name})`,
      `DESCRIPTION:Reservation Reference: #${reservationCode}\\nSuite: ${selectedRoom.name}\\nGuests: ${bookingState.adults} Adults, ${bookingState.children} Children\\nTelephone: +1 (831) 555-0190`,
      'LOCATION:The Grand Veridian, Big Sur Coast Highway, CA 93920',
      `DTSTART;VALUE=DATE:${bookingState.checkIn.replace(/-/g, '')}`,
      `DTEND;VALUE=DATE:${bookingState.checkOut.replace(/-/g, '')}`,
      'STATUS:CONFIRMED',
      'END:VEVENT',
      'END:VCALENDAR'
    ].join('\r\n');

    const blob = new Blob([icsData], { type: 'text/calendar;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', `GrandVeridian_Reservation_${reservationCode}.ics`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-stone-950/80 backdrop-blur-md flex justify-end">
      <div className="relative w-full max-w-2xl bg-stone-900 border-l border-stone-800 text-stone-100 h-full flex flex-col justify-between shadow-2xl">
        {/* Top Header */}
        <div className="p-6 border-b border-stone-800 flex items-center justify-between">
          <div>
            <div className="text-[11px] uppercase tracking-widest text-stone-400 font-medium">
              Reservation Concierge
            </div>
            <h2 className="text-xl sm:text-2xl font-serif text-white">
              {step === 4 ? 'Reservation Confirmed' : 'Reserve Your Stay'}
            </h2>
          </div>

          <button
            onClick={onClose}
            className="p-2 text-stone-400 hover:text-white rounded-full transition-colors cursor-pointer"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Step Progress Indicators (if not final) */}
        {step < 4 && (
          <div className="px-6 py-3 bg-stone-950/40 border-b border-stone-850 flex items-center justify-between text-xs text-stone-400">
            <span className={step === 1 ? 'text-white font-medium' : ''}>1. Dates &amp; Suite</span>
            <span className="text-stone-600">→</span>
            <span className={step === 2 ? 'text-white font-medium' : ''}>2. Curated Add-ons</span>
            <span className="text-stone-600">→</span>
            <span className={step === 3 ? 'text-white font-medium' : ''}>3. Guest Details</span>
          </div>
        )}

        {/* Content Body */}
        <div className="p-6 overflow-y-auto flex-1 space-y-6">
          {/* STEP 1: DATES & ROOM */}
          {step === 1 && (
            <div className="space-y-6">
              {/* Date pickers */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-3 bg-stone-950 border border-stone-800 rounded">
                  <label htmlFor="drawer-check-in-date" className="block text-[11px] uppercase tracking-wider text-stone-400 mb-1">
                    Check-in Date
                  </label>
                  <input
                    id="drawer-check-in-date"
                    type="date"
                    value={bookingState.checkIn}
                    onChange={(e) => onUpdateBooking({ checkIn: e.target.value })}
                    className="w-full bg-transparent text-sm text-white focus:outline-none [color-scheme:dark]"
                  />
                </div>
                <div className="p-3 bg-stone-950 border border-stone-800 rounded">
                  <label htmlFor="drawer-check-out-date" className="block text-[11px] uppercase tracking-wider text-stone-400 mb-1">
                    Check-out Date
                  </label>
                  <input
                    id="drawer-check-out-date"
                    type="date"
                    value={bookingState.checkOut}
                    onChange={(e) => onUpdateBooking({ checkOut: e.target.value })}
                    className="w-full bg-transparent text-sm text-white focus:outline-none [color-scheme:dark]"
                  />
                </div>
              </div>

              {/* Guests selection */}
              <div className="p-4 bg-stone-950 border border-stone-800 rounded flex items-center justify-between">
                <div>
                  <div className="text-xs uppercase tracking-wider text-stone-400">Selected Party</div>
                  <div className="text-sm font-medium text-white">
                    {bookingState.adults} Adults · {bookingState.children} Children · {bookingState.roomsCount} Suite
                  </div>
                </div>
                <div className="text-xs text-stone-400 font-mono">
                  {nights} {nights === 1 ? 'Night' : 'Nights'}
                </div>
              </div>

              {/* Suite Selection Cards */}
              <div className="space-y-3">
                <div className="text-xs uppercase tracking-widest text-stone-400 font-medium">
                  Select Accommodation
                </div>

                <div className="space-y-3 max-h-72 overflow-y-auto pr-1">
                  {ROOMS_DATA.map((room) => {
                    const isSelected = room.id === selectedRoom.id;
                    const priceNight = Math.round(room.basePriceUSD * currencyRate).toLocaleString();

                    return (
                      <div
                        key={room.id}
                        onClick={() => onUpdateBooking({ selectedRoomId: room.id })}
                        className={`p-3.5 rounded-lg border transition-all cursor-pointer flex items-center justify-between gap-4 ${
                          isSelected
                            ? 'bg-stone-800 border-stone-200'
                            : 'bg-stone-950/70 border-stone-800 hover:border-stone-700'
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <img
                            src={room.image}
                            alt={room.name}
                            referrerPolicy="no-referrer"
                            className="w-14 h-14 rounded object-cover shrink-0"
                          />
                          <div>
                            <div className="text-sm font-serif text-white">{room.name}</div>
                            <div className="text-xs text-stone-400 font-light">
                              {room.areaSqMeters} m² · {room.view}
                            </div>
                          </div>
                        </div>

                        <div className="text-right shrink-0">
                          <div className="text-sm font-serif text-white tabular-nums">
                            {currencySymbol}{priceNight}
                          </div>
                          <div className="text-[10px] text-stone-400">/ night</div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          )}

          {/* STEP 2: ADD-ONS */}
          {step === 2 && (
            <div className="space-y-4">
              <div>
                <div className="text-xs uppercase tracking-widest text-stone-400 font-medium mb-1">
                  Bespoke Enhancements
                </div>
                <p className="text-xs text-stone-400 font-light">
                  Elevate your stay with signature pre-arrival privileges and culinary touches.
                </p>
              </div>

              <div className="space-y-3">
                {ADDONS_DATA.map((addon) => {
                  const isChecked = bookingState.selectedAddonIds.includes(addon.id);
                  const priceFormatted = Math.round(addon.priceUSD * currencyRate).toLocaleString();

                  return (
                    <div
                      key={addon.id}
                      onClick={() => toggleAddon(addon.id)}
                      className={`p-4 rounded-lg border transition-all cursor-pointer flex items-start justify-between gap-4 ${
                        isChecked
                          ? 'bg-stone-800 border-stone-200'
                          : 'bg-stone-950/60 border-stone-800 hover:border-stone-700'
                      }`}
                    >
                      <div className="space-y-1">
                        <div className="flex items-center gap-2">
                          <div className={`w-4 h-4 rounded border flex items-center justify-center ${
                            isChecked ? 'bg-white border-white text-stone-950' : 'border-stone-600'
                          }`}>
                            {isChecked && <Check className="w-3 h-3 stroke-[3]" />}
                          </div>
                          <span className="text-sm font-medium text-white">{addon.title}</span>
                        </div>
                        <p className="text-xs text-stone-400 font-light pl-6">
                          {addon.description}
                        </p>
                      </div>

                      <div className="text-right shrink-0 pt-0.5">
                        <div className="text-sm font-serif text-white tabular-nums">
                          +{currencySymbol}{priceFormatted}
                        </div>
                        <div className="text-[10px] text-stone-400 font-mono">{addon.unit}</div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* STEP 3: GUEST DETAILS & SUMMARY */}
          {step === 3 && (
            <form id="booking-guest-form" onSubmit={handleFinalSubmit} className="space-y-4">
              <div>
                <div className="text-xs uppercase tracking-widest text-stone-400 font-medium mb-1">
                  Guest Information
                </div>
                <p className="text-xs text-stone-400 font-light">
                  Please provide your contact details for booking confirmation and pre-arrival concierge contact.
                </p>
              </div>

              <div>
                <label className="block text-[11px] uppercase tracking-wider text-stone-400 mb-1">Full Name</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Julian Vance"
                  value={bookingState.guestName}
                  onChange={(e) => onUpdateBooking({ guestName: e.target.value })}
                  className="w-full p-2.5 bg-stone-950 border border-stone-800 rounded text-xs text-white focus:outline-none focus:border-stone-600"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-[11px] uppercase tracking-wider text-stone-400 mb-1">Email Address</label>
                  <input
                    type="email"
                    required
                    placeholder="julian@vance.com"
                    value={bookingState.guestEmail}
                    onChange={(e) => onUpdateBooking({ guestEmail: e.target.value })}
                    className="w-full p-2.5 bg-stone-950 border border-stone-800 rounded text-xs text-white focus:outline-none focus:border-stone-600"
                  />
                </div>
                <div>
                  <label className="block text-[11px] uppercase tracking-wider text-stone-400 mb-1">Telephone</label>
                  <input
                    type="tel"
                    placeholder="+1 (831) 555-0190"
                    value={bookingState.guestPhone}
                    onChange={(e) => onUpdateBooking({ guestPhone: e.target.value })}
                    className="w-full p-2.5 bg-stone-950 border border-stone-800 rounded text-xs text-white focus:outline-none focus:border-stone-600"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[11px] uppercase tracking-wider text-stone-400 mb-1">Pillow Menu &amp; Bedding Preference</label>
                <select
                  value={bookingState.specialRequests}
                  onChange={(e) => onUpdateBooking({ specialRequests: e.target.value })}
                  className="w-full p-2.5 bg-stone-950 border border-stone-800 rounded text-xs text-white focus:outline-none focus:border-stone-600 cursor-pointer"
                >
                  <option value="Hungarian Goose Down (Plush)">Hungarian Goose Down (Plush)</option>
                  <option value="Hypoallergenic Silk & Memory Foam (Firm)">Hypoallergenic Silk &amp; Memory Foam (Firm)</option>
                  <option value="Organic Buckwheat & Lavender (Therapeutic)">Organic Buckwheat &amp; Lavender (Therapeutic)</option>
                  <option value="Cooling Bamboo Gel Foam">Cooling Bamboo Gel Foam</option>
                </select>
              </div>

              <div>
                <label className="block text-[11px] uppercase tracking-wider text-stone-400 mb-1">Dietary Preferences &amp; Arrival Notes</label>
                <input
                  type="text"
                  placeholder="e.g. Arriving 4 PM by private car, no dairy, celebrating anniversary"
                  value={bookingState.dietaryNotes}
                  onChange={(e) => onUpdateBooking({ dietaryNotes: e.target.value })}
                  className="w-full p-2.5 bg-stone-950 border border-stone-800 rounded text-xs text-white focus:outline-none focus:border-stone-600"
                />
              </div>

              {/* Trust Signal */}
              <div className="flex items-center gap-2 p-3 bg-stone-950 border border-stone-850 rounded text-xs text-stone-400">
                <ShieldCheck className="w-4 h-4 text-stone-300 shrink-0" />
                <span>Complimentary cancellation up to 14 days prior to arrival. No charge today.</span>
              </div>
            </form>
          )}

          {/* STEP 4: CONFIRMATION VOUCHER */}
          {step === 4 && (
            <div className="space-y-6 text-stone-100">
              <div className="p-6 bg-stone-950 border border-stone-800 rounded-lg text-center space-y-3">
                <div className="w-12 h-12 rounded-full bg-stone-900 border border-stone-700 flex items-center justify-center mx-auto text-amber-200">
                  <Check className="w-6 h-6" />
                </div>
                <div className="text-xs uppercase tracking-widest text-stone-400 font-medium">
                  Confirmed Reservation
                </div>
                <h3 className="text-2xl font-serif text-white">
                  We Await Your Arrival
                </h3>
                <div className="inline-block px-4 py-1.5 bg-stone-900 border border-stone-700 rounded font-mono text-sm tracking-wider text-amber-100">
                  Ref #{reservationCode}
                </div>
                <p className="text-xs text-stone-400 font-light max-w-md mx-auto">
                  A comprehensive welcome folio and itinerary have been dispatched to <span className="text-white">{bookingState.guestEmail}</span>.
                </p>
              </div>

              {/* Itinerary Summary */}
              <div className="p-5 bg-stone-950 border border-stone-850 rounded space-y-3 text-xs">
                <div className="flex justify-between border-b border-stone-850 pb-2">
                  <span className="text-stone-400">Suite</span>
                  <span className="font-medium text-white">{selectedRoom.name}</span>
                </div>
                <div className="flex justify-between border-b border-stone-850 pb-2">
                  <span className="text-stone-400">Dates</span>
                  <span className="text-white">{bookingState.checkIn} to {bookingState.checkOut} ({nights} Nights)</span>
                </div>
                <div className="flex justify-between border-b border-stone-850 pb-2">
                  <span className="text-stone-400">Guests</span>
                  <span className="text-white">{bookingState.adults} Adults{bookingState.children > 0 ? `, ${bookingState.children} Children` : ''}</span>
                </div>
                <div className="flex justify-between border-b border-stone-850 pb-2">
                  <span className="text-stone-400">Lead Guest</span>
                  <span className="text-white">{bookingState.guestName}</span>
                </div>
                {bookingState.selectedAddonIds.length > 0 && (
                  <div className="flex justify-between border-b border-stone-850 pb-2">
                    <span className="text-stone-400">Selected Add-ons</span>
                    <span className="text-white">{bookingState.selectedAddonIds.length} Curated Experience(s)</span>
                  </div>
                )}
                <div className="flex justify-between pt-1 text-sm font-medium">
                  <span className="text-stone-300">Total Anticipated Investment</span>
                  <span className="font-serif text-white tabular-nums">{currencySymbol}{formatPrice(totalCostUSD)}</span>
                </div>
              </div>

              {/* Export Actions */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={generateIcsFile}
                  className="px-4 py-2.5 bg-stone-800 hover:bg-stone-700 text-white rounded text-xs uppercase tracking-wider font-medium flex items-center justify-center gap-2 transition-colors cursor-pointer"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Add to Calendar (.ICS)</span>
                </button>
                <button
                  type="button"
                  onClick={() => window.print()}
                  className="px-4 py-2.5 bg-stone-800 hover:bg-stone-700 text-white rounded text-xs uppercase tracking-wider font-medium flex items-center justify-center gap-2 transition-colors cursor-pointer"
                >
                  <Printer className="w-3.5 h-3.5" />
                  <span>Print Itinerary Voucher</span>
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Drawer Bottom Bar with Dynamic Pricing Summary */}
        <div className="p-6 bg-stone-950 border-t border-stone-800 space-y-4">
          {step < 4 && (
            <div className="space-y-1.5 text-xs">
              <div className="flex justify-between text-stone-400">
                <span>{selectedRoom.name} ({nights} nights)</span>
                <span className="font-mono">{currencySymbol}{formatPrice(roomCostUSD)}</span>
              </div>
              {addonsCostUSD > 0 && (
                <div className="flex justify-between text-stone-400">
                  <span>Selected Enhancements</span>
                  <span className="font-mono">+{currencySymbol}{formatPrice(addonsCostUSD)}</span>
                </div>
              )}
              <div className="flex justify-between text-stone-400">
                <span>Resort Sanctuary Fee ($95/nt)</span>
                <span className="font-mono">{currencySymbol}{formatPrice(resortFeeUSD)}</span>
              </div>
              <div className="flex justify-between text-stone-400">
                <span>Estimated Local Hospitality Taxes (14%)</span>
                <span className="font-mono">{currencySymbol}{formatPrice(taxesUSD)}</span>
              </div>
              <div className="flex justify-between text-sm sm:text-base font-serif text-white pt-2 border-t border-stone-800">
                <span>Total Stay Investment</span>
                <span className="tabular-nums font-semibold">{currencySymbol}{formatPrice(totalCostUSD)}</span>
              </div>
            </div>
          )}

          {/* Navigation Controls */}
          <div className="flex items-center justify-between gap-4">
            {step === 1 && (
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 text-xs uppercase tracking-wider text-stone-400 hover:text-white"
              >
                Continue Browsing
              </button>
            )}

            {step === 2 && (
              <button
                type="button"
                onClick={() => setStep(1)}
                className="px-4 py-2 text-xs uppercase tracking-wider text-stone-400 hover:text-white flex items-center gap-1.5"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                <span>Back</span>
              </button>
            )}

            {step === 3 && (
              <button
                type="button"
                onClick={() => setStep(2)}
                className="px-4 py-2 text-xs uppercase tracking-wider text-stone-400 hover:text-white flex items-center gap-1.5"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                <span>Back</span>
              </button>
            )}

            {step === 1 && (
              <button
                type="button"
                onClick={() => setStep(2)}
                className="px-6 py-2.5 text-xs uppercase tracking-widest font-semibold bg-stone-100 hover:bg-white text-stone-950 rounded transition-colors shadow flex items-center gap-2 ml-auto cursor-pointer"
              >
                <span>Continue to Add-ons</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            )}

            {step === 2 && (
              <button
                type="button"
                onClick={() => setStep(3)}
                className="px-6 py-2.5 text-xs uppercase tracking-widest font-semibold bg-stone-100 hover:bg-white text-stone-950 rounded transition-colors shadow flex items-center gap-2 ml-auto cursor-pointer"
              >
                <span>Guest Details</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            )}

            {step === 3 && (
              <button
                type="submit"
                form="booking-guest-form"
                className="px-7 py-3 text-xs uppercase tracking-widest font-semibold bg-stone-100 hover:bg-white text-stone-950 rounded transition-colors shadow flex items-center gap-2 ml-auto cursor-pointer"
              >
                <span>Complete Reservation</span>
                <Check className="w-3.5 h-3.5" />
              </button>
            )}

            {step === 4 && (
              <button
                type="button"
                onClick={() => {
                  setStep(1);
                  onClose();
                }}
                className="w-full py-3 text-xs uppercase tracking-widest font-semibold bg-stone-100 hover:bg-white text-stone-950 rounded transition-colors shadow text-center cursor-pointer"
              >
                Done
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
