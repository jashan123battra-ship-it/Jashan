import React, { useState } from 'react';
import { X, Calendar, Clock, CheckCircle } from 'lucide-react';
import { SPA_RITUALS } from '../data/hotelData';
import { SpaRitual } from '../types/hotel';

interface SpaAppointmentModalProps {
  ritual: SpaRitual | null;
  onClose: () => void;
  currencySymbol: string;
  currencyRate: number;
}

export const SpaAppointmentModal: React.FC<SpaAppointmentModalProps> = ({
  ritual,
  onClose,
  currencySymbol,
  currencyRate
}) => {
  const [selectedRitualId, setSelectedRitualId] = useState(ritual?.id || SPA_RITUALS[0].id);
  const [date, setDate] = useState('2026-11-13');
  const [time, setTime] = useState('11:00');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [suiteNumber, setSuiteNumber] = useState('');
  const [specialFocus, setSpecialFocus] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);

  if (!ritual) return null;

  const currentRitual = SPA_RITUALS.find((r) => r.id === selectedRitualId) || ritual;
  const priceFormatted = Math.round(currentRitual.priceUSD * currencyRate).toLocaleString();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email) return;
    setIsSuccess(true);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-stone-950/80 backdrop-blur-md flex items-center justify-center p-4 sm:p-6">
      <div className="relative bg-stone-900 border border-stone-800 text-stone-100 rounded-lg max-w-lg w-full p-6 sm:p-8 shadow-2xl">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-stone-400 hover:text-white rounded-full transition-colors cursor-pointer"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>

        {isSuccess ? (
          <div className="text-center py-6 space-y-4">
            <div className="w-12 h-12 rounded-full bg-stone-800 border border-stone-700 flex items-center justify-center mx-auto text-amber-200">
              <CheckCircle className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-serif text-white">Appointment Confirmed</h3>
            <p className="text-xs sm:text-sm text-stone-300 font-light max-w-sm mx-auto">
              Your appointment for <strong className="text-white font-medium">{currentRitual.title}</strong> has been secured for {date} at {time}.
            </p>
            <div className="p-3 bg-stone-950/60 border border-stone-800 rounded text-xs text-stone-400 font-mono">
              Spa Reference: #SPA-{Math.floor(10000 + Math.random() * 90000)}
            </div>
            <p className="text-[11px] text-stone-500">
              Please arrive 20 minutes early to enjoy the thermal mineral baths and eucalyptus steam lounge.
            </p>
            <button
              type="button"
              onClick={onClose}
              className="mt-4 px-6 py-2.5 text-xs uppercase tracking-widest font-medium bg-stone-100 text-stone-950 hover:bg-white rounded transition-colors"
            >
              Done
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <div className="text-[11px] uppercase tracking-widest text-stone-400 font-medium">
                Thermal Sanctuary Appointment
              </div>
              <h3 className="text-2xl font-serif text-white mt-1">
                Request Spa Ritual
              </h3>
            </div>

            {/* Ritual Selector */}
            <div>
              <label className="block text-[11px] uppercase tracking-wider text-stone-400 mb-1">Select Ritual</label>
              <select
                value={selectedRitualId}
                onChange={(e) => setSelectedRitualId(e.target.value)}
                className="w-full p-2.5 bg-stone-950 border border-stone-800 rounded text-xs text-white focus:outline-none focus:border-stone-600 cursor-pointer"
              >
                {SPA_RITUALS.map((r) => (
                  <option key={r.id} value={r.id} className="bg-stone-900 text-white">
                    {r.title} ({r.duration} · ${r.priceUSD})
                  </option>
                ))}
              </select>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-[11px] uppercase tracking-wider text-stone-400 mb-1">Preferred Date</label>
                <div className="flex items-center gap-2 p-2.5 bg-stone-950 border border-stone-800 rounded text-xs text-white">
                  <Calendar className="w-3.5 h-3.5 text-stone-400 shrink-0" />
                  <input
                    type="date"
                    required
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className="bg-transparent focus:outline-none w-full [color-scheme:dark]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[11px] uppercase tracking-wider text-stone-400 mb-1">Time</label>
                <div className="flex items-center gap-2 p-2.5 bg-stone-950 border border-stone-800 rounded text-xs text-white">
                  <Clock className="w-3.5 h-3.5 text-stone-400 shrink-0" />
                  <select
                    value={time}
                    onChange={(e) => setTime(e.target.value)}
                    className="bg-transparent focus:outline-none w-full cursor-pointer"
                  >
                    <option value="09:00" className="bg-stone-900 text-white">9:00 AM</option>
                    <option value="11:00" className="bg-stone-900 text-white">11:00 AM</option>
                    <option value="13:30" className="bg-stone-900 text-white">1:30 PM</option>
                    <option value="15:30" className="bg-stone-900 text-white">3:30 PM</option>
                    <option value="17:00" className="bg-stone-900 text-white">5:00 PM</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="space-y-3 pt-1">
              <div>
                <label className="block text-[11px] uppercase tracking-wider text-stone-400 mb-1">Guest Full Name</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Kenji Takahashi"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full p-2.5 bg-stone-950 border border-stone-800 rounded text-xs text-white focus:outline-none focus:border-stone-600"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-[11px] uppercase tracking-wider text-stone-400 mb-1">Email</label>
                  <input
                    type="email"
                    required
                    placeholder="name@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full p-2.5 bg-stone-950 border border-stone-800 rounded text-xs text-white focus:outline-none focus:border-stone-600"
                  />
                </div>
                <div>
                  <label className="block text-[11px] uppercase tracking-wider text-stone-400 mb-1">Suite / Room # (Optional)</label>
                  <input
                    type="text"
                    placeholder="e.g. Horizon Villa 04"
                    value={suiteNumber}
                    onChange={(e) => setSuiteNumber(e.target.value)}
                    className="w-full p-2.5 bg-stone-950 border border-stone-800 rounded text-xs text-white focus:outline-none focus:border-stone-600"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[11px] uppercase tracking-wider text-stone-400 mb-1">Therapeutic Focus &amp; Health Notes</label>
                <input
                  type="text"
                  placeholder="e.g. Lower back focus, light pressure, sensitive skin"
                  value={specialFocus}
                  onChange={(e) => setSpecialFocus(e.target.value)}
                  className="w-full p-2.5 bg-stone-950 border border-stone-800 rounded text-xs text-white focus:outline-none focus:border-stone-600"
                />
              </div>
            </div>

            <div className="pt-4 border-t border-stone-800 flex items-center justify-between">
              <div>
                <span className="text-[11px] text-stone-400 uppercase tracking-wider">Fee: </span>
                <span className="text-base font-serif text-white tabular-nums">{currencySymbol}{priceFormatted}</span>
              </div>
              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-4 py-2 text-xs uppercase tracking-wider text-stone-400 hover:text-white"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-6 py-2.5 text-xs uppercase tracking-widest font-semibold bg-stone-100 text-stone-950 hover:bg-white rounded transition-colors shadow"
                >
                  Confirm Appointment
                </button>
              </div>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
