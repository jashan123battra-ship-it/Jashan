import React, { useState } from 'react';
import { EXPERIENCES_DATA } from '../data/hotelData';
import { Experience } from '../types/hotel';
import { ConciergeInquiryModal } from './ConciergeInquiryModal';
import { Compass, Clock, Check, ArrowRight } from 'lucide-react';

interface ExperiencesSectionProps {
  currency: string;
  currencyRate: number;
  currencySymbol: string;
}

export const ExperiencesSection: React.FC<ExperiencesSectionProps> = ({
  currency,
  currencyRate,
  currencySymbol
}) => {
  const [selectedExperience, setSelectedExperience] = useState<Experience | null>(null);
  const [inquiryOpen, setInquiryOpen] = useState(false);
  const [inquirySubject, setInquirySubject] = useState('');

  const handleInquire = (exp: Experience) => {
    setSelectedExperience(exp);
    setInquirySubject(`Experience: ${exp.title}`);
    setInquiryOpen(true);
  };

  return (
    <section id="experiences" className="py-24 bg-stone-950 text-stone-100 border-t border-stone-850">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Heading */}
        <div className="max-w-2xl mb-12">
          <div className="text-xs uppercase tracking-[0.2em] text-stone-400 font-medium mb-2">
            04. Curated Excursions
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-white tracking-tight" style={{ textWrap: 'balance' }}>
            Uncharted Pacific Moments
          </h2>
          <p className="mt-3 text-stone-400 text-sm sm:text-base font-light leading-relaxed">
            From vintage wooden yacht charters slicing through Pacific crests to dark-sky celestial mapping with our resident astrophysicist.
          </p>
        </div>

        {/* Experiences Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {EXPERIENCES_DATA.map((exp) => {
            const formattedPrice = Math.round(exp.priceUSD * currencyRate).toLocaleString();

            return (
              <div
                key={exp.id}
                className="p-8 bg-stone-900/50 border border-stone-850 rounded-lg flex flex-col justify-between hover:border-stone-750 transition-colors"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between gap-4 text-xs">
                    <span className="uppercase tracking-widest text-amber-200/90 font-medium">
                      {exp.category}
                    </span>
                    <span className="text-stone-400 font-mono flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-stone-500" />
                      <span>{exp.duration}</span>
                    </span>
                  </div>

                  <h3 className="text-2xl font-serif text-white">
                    {exp.title}
                  </h3>

                  <p className="text-sm text-stone-300 font-light leading-relaxed">
                    {exp.description}
                  </p>

                  <div className="pt-3 border-t border-stone-800 space-y-1.5">
                    <div className="text-[11px] uppercase tracking-wider text-stone-400 font-medium mb-2">
                      Inclusions
                    </div>
                    {exp.included.map((item, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs text-stone-400">
                        <Check className="w-3.5 h-3.5 text-stone-500 shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-6 mt-6 border-t border-stone-850 flex items-center justify-between">
                  <div>
                    <div className="text-[11px] uppercase tracking-wider text-stone-500">From</div>
                    <div className="text-xl font-serif text-white tabular-nums">
                      {currencySymbol}{formattedPrice}
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={() => handleInquire(exp)}
                    className="px-5 py-2.5 text-xs uppercase tracking-widest font-semibold bg-stone-100 hover:bg-white text-stone-950 rounded transition-colors whitespace-nowrap cursor-pointer shadow"
                  >
                    Inquire Excursion
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <ConciergeInquiryModal
        isOpen={inquiryOpen}
        initialSubject={inquirySubject}
        onClose={() => setInquiryOpen(false)}
      />
    </section>
  );
};
