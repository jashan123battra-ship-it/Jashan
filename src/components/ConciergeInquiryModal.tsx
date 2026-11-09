import React, { useState } from 'react';
import { X, CheckCircle, Send, Sparkles } from 'lucide-react';

interface ConciergeInquiryModalProps {
  initialSubject?: string;
  isOpen: boolean;
  onClose: () => void;
}

export const ConciergeInquiryModal: React.FC<ConciergeInquiryModalProps> = ({
  initialSubject = 'General Concierge Inquiry',
  isOpen,
  onClose
}) => {
  const [subject, setSubject] = useState(initialSubject);
  const [guestName, setGuestName] = useState('');
  const [guestEmail, setGuestEmail] = useState('');
  const [arrivalDate, setArrivalDate] = useState('');
  const [message, setMessage] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!guestName || !guestEmail) return;
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
            <h3 className="text-2xl font-serif text-white">Inquiry Received</h3>
            <p className="text-xs sm:text-sm text-stone-300 font-light max-w-sm mx-auto">
              Chief Concierge Julian Vance and team have received your request regarding <strong className="text-white">{subject}</strong>.
            </p>
            <p className="text-[11px] text-stone-400">
              We will contact you at {guestEmail} within 4 business hours to curate your bespoke itinerary.
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
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <div className="text-[11px] uppercase tracking-widest text-stone-400 font-medium">
                Private Head Concierge
              </div>
              <h3 className="text-2xl font-serif text-white mt-1">
                Curate Your Stay
              </h3>
              <p className="text-xs text-stone-400 font-light mt-0.5">
                Helicopter transfers, private yacht excursions, and celebration arrangements.
              </p>
            </div>

            <div>
              <label className="block text-[11px] uppercase tracking-wider text-stone-400 mb-1">Inquiry Topic</label>
              <input
                type="text"
                required
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                className="w-full p-2.5 bg-stone-950 border border-stone-800 rounded text-xs text-white focus:outline-none focus:border-stone-600"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-[11px] uppercase tracking-wider text-stone-400 mb-1">Your Name</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Lord Sterling"
                  value={guestName}
                  onChange={(e) => setGuestName(e.target.value)}
                  className="w-full p-2.5 bg-stone-950 border border-stone-800 rounded text-xs text-white focus:outline-none focus:border-stone-600"
                />
              </div>

              <div>
                <label className="block text-[11px] uppercase tracking-wider text-stone-400 mb-1">Email Address</label>
                <input
                  type="email"
                  required
                  placeholder="client@luxury.com"
                  value={guestEmail}
                  onChange={(e) => setGuestEmail(e.target.value)}
                  className="w-full p-2.5 bg-stone-950 border border-stone-800 rounded text-xs text-white focus:outline-none focus:border-stone-600"
                />
              </div>
            </div>

            <div>
              <label className="block text-[11px] uppercase tracking-wider text-stone-400 mb-1">Approximate Travel Dates</label>
              <input
                type="text"
                placeholder="e.g. November 2026 or Spring 2027"
                value={arrivalDate}
                onChange={(e) => setArrivalDate(e.target.value)}
                className="w-full p-2.5 bg-stone-950 border border-stone-800 rounded text-xs text-white focus:outline-none focus:border-stone-600"
              />
            </div>

            <div>
              <label className="block text-[11px] uppercase tracking-wider text-stone-400 mb-1">Specific Wishes &amp; Special Arrangements</label>
              <textarea
                rows={3}
                placeholder="Describe your desired experience, party size, dietary preferences, or surprise milestones..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full p-2.5 bg-stone-950 border border-stone-800 rounded text-xs text-white focus:outline-none focus:border-stone-600"
              />
            </div>

            <div className="pt-3 border-t border-stone-800 flex items-center justify-end gap-3">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 text-xs uppercase tracking-wider text-stone-400 hover:text-white"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-6 py-2.5 text-xs uppercase tracking-widest font-semibold bg-stone-100 text-stone-950 hover:bg-white rounded transition-colors shadow flex items-center gap-2"
              >
                <span>Dispatch Inquiry</span>
                <Send className="w-3 h-3 text-stone-900" />
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
