import React, { useState } from 'react';
import { X, Calendar, Clock, Users, CheckCircle, Utensils } from 'lucide-react';
import { DiningVenue } from '../types/hotel';

interface TableReservationModalProps {
  venue: DiningVenue | null;
  onClose: () => void;
}

export const TableReservationModal: React.FC<TableReservationModalProps> = ({
  venue,
  onClose
}) => {
  const [date, setDate] = useState('2026-11-12');
  const [time, setTime] = useState('19:30');
  const [partySize, setPartySize] = useState('2');
  const [dietary, setDietary] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);

  if (!venue) return null;

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
            <h3 className="text-2xl font-serif text-white">Table Reserved</h3>
            <p className="text-xs sm:text-sm text-stone-300 font-light max-w-sm mx-auto">
              Your table at <strong className="text-white font-medium">{venue.name}</strong> has been secured for {partySize} guests on {date} at {time}.
            </p>
            <div className="p-3 bg-stone-950/60 border border-stone-800 rounded text-xs text-stone-400 font-mono">
              Reservation Reference: #TAB-{Math.floor(10000 + Math.random() * 90000)}
            </div>
            <p className="text-[11px] text-stone-500">
              A confirmation has been dispatched to {email}. Dress code: {venue.dressCode}.
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
                Gastronomy Reservation
              </div>
              <h3 className="text-2xl font-serif text-white mt-1">
                {venue.name}
              </h3>
              <p className="text-xs text-stone-400 font-light mt-0.5">
                {venue.subtitle} · {venue.dressCode}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div>
                <label className="block text-[11px] uppercase tracking-wider text-stone-400 mb-1">Date</label>
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
                    <option value="17:30" className="bg-stone-900 text-white">5:30 PM</option>
                    <option value="18:00" className="bg-stone-900 text-white">6:00 PM</option>
                    <option value="18:30" className="bg-stone-900 text-white">6:30 PM</option>
                    <option value="19:00" className="bg-stone-900 text-white">7:00 PM</option>
                    <option value="19:30" className="bg-stone-900 text-white">7:30 PM</option>
                    <option value="20:00" className="bg-stone-900 text-white">8:00 PM</option>
                    <option value="20:30" className="bg-stone-900 text-white">8:30 PM</option>
                    <option value="21:00" className="bg-stone-900 text-white">9:00 PM</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-[11px] uppercase tracking-wider text-stone-400 mb-1">Guests</label>
                <div className="flex items-center gap-2 p-2.5 bg-stone-950 border border-stone-800 rounded text-xs text-white">
                  <Users className="w-3.5 h-3.5 text-stone-400 shrink-0" />
                  <select
                    value={partySize}
                    onChange={(e) => setPartySize(e.target.value)}
                    className="bg-transparent focus:outline-none w-full cursor-pointer"
                  >
                    {[1, 2, 3, 4, 5, 6, 8].map((n) => (
                      <option key={n} value={n} className="bg-stone-900 text-white">
                        {n} {n === 1 ? 'Guest' : 'Guests'}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            <div className="space-y-3 pt-2">
              <div>
                <label className="block text-[11px] uppercase tracking-wider text-stone-400 mb-1">Lead Guest Name</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Eleanor Vance"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full p-2.5 bg-stone-950 border border-stone-800 rounded text-xs text-white focus:outline-none focus:border-stone-600"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-[11px] uppercase tracking-wider text-stone-400 mb-1">Email Address</label>
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
                  <label className="block text-[11px] uppercase tracking-wider text-stone-400 mb-1">Phone Number</label>
                  <input
                    type="tel"
                    placeholder="+1 (555) 000-0000"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full p-2.5 bg-stone-950 border border-stone-800 rounded text-xs text-white focus:outline-none focus:border-stone-600"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[11px] uppercase tracking-wider text-stone-400 mb-1">Dietary Preferences &amp; Special Occasions</label>
                <input
                  type="text"
                  placeholder="e.g. Anniversary, Shellfish allergy, Window table requested"
                  value={dietary}
                  onChange={(e) => setDietary(e.target.value)}
                  className="w-full p-2.5 bg-stone-950 border border-stone-800 rounded text-xs text-white focus:outline-none focus:border-stone-600"
                />
              </div>
            </div>

            <div className="pt-4 border-t border-stone-800 flex items-center justify-end gap-3">
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
                Confirm Reservation
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
