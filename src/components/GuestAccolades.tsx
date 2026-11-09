import React, { useState } from 'react';
import { HOTEL_AWARDS, GUEST_TESTIMONIALS, FAQ_DATA } from '../data/hotelData';
import { Award, ChevronDown, CheckCircle2, Quote } from 'lucide-react';

export const GuestAccolades: React.FC = () => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  return (
    <section className="py-24 bg-stone-950 text-stone-100 border-t border-stone-850">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Accolades & Distinctions Strip */}
        <div className="mb-20">
          <div className="text-xs uppercase tracking-[0.2em] text-stone-400 font-medium mb-2">
            06. International Distinctions
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif text-white tracking-tight mb-8" style={{ textWrap: 'balance' }}>
            Recognized by Global Hospitality Authorities
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {HOTEL_AWARDS.map((award, idx) => (
              <div
                key={idx}
                className="p-6 bg-stone-900/50 border border-stone-850 rounded-lg space-y-2 hover:border-stone-750 transition-colors"
              >
                <div className="flex items-center gap-2 text-amber-200 mb-2">
                  <Award className="w-4 h-4" />
                  <span className="text-xs uppercase tracking-wider font-medium text-stone-400">{award.issuer}</span>
                </div>
                <div className="text-xl font-serif text-white">
                  {award.title}
                </div>
                <p className="text-xs text-stone-400 font-light leading-relaxed">
                  {award.detail}
                </p>
              </div>
            ))}
          </div>

          {/* Quantitative Rigor Stats Row */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-8 pt-8 border-t border-stone-850">
            <div>
              <div className="text-3xl sm:text-4xl font-serif text-white tabular-nums">45</div>
              <div className="text-xs uppercase tracking-wider text-stone-400 font-medium mt-1">Private Cliffside Acres</div>
              <p className="text-[11px] text-stone-500 font-light mt-0.5">Untamed coastal preserve</p>
            </div>
            <div>
              <div className="text-3xl sm:text-4xl font-serif text-white tabular-nums">100%</div>
              <div className="text-xs uppercase tracking-wider text-stone-400 font-medium mt-1">Oceanfront Vistas</div>
              <p className="text-[11px] text-stone-500 font-light mt-0.5">Every villa faces the Pacific</p>
            </div>
            <div>
              <div className="text-3xl sm:text-4xl font-serif text-white tabular-nums">1:3</div>
              <div className="text-xs uppercase tracking-wider text-stone-400 font-medium mt-1">Staff to Guest Ratio</div>
              <p className="text-[11px] text-stone-500 font-light mt-0.5">Dedicated butler and concierge</p>
            </div>
            <div>
              <div className="text-3xl sm:text-4xl font-serif text-white tabular-nums">38°C</div>
              <div className="text-xs uppercase tracking-wider text-stone-400 font-medium mt-1">Thermal Spring Waters</div>
              <p className="text-[11px] text-stone-500 font-light mt-0.5">Pure subterranean mineral flow</p>
            </div>
          </div>
        </div>

        {/* Attributable Verified Guest Testimonials */}
        <div className="mb-20">
          <div className="text-xs uppercase tracking-[0.2em] text-stone-400 font-medium mb-2">
            Guest Chronicles
          </div>
          <h3 className="text-2xl sm:text-3xl font-serif text-white mb-8">
            Impressions from the Bluffs
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {GUEST_TESTIMONIALS.map((t, idx) => (
              <div
                key={idx}
                className="p-7 bg-stone-900/60 border border-stone-850 rounded-lg flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <Quote className="w-5 h-5 text-stone-600" />
                  <p className="text-stone-300 text-sm font-light leading-relaxed italic">
                    "{t.quote}"
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-stone-850 space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-medium text-white">{t.author}</span>
                    {t.verified && (
                      <span className="text-[10px] text-stone-400 flex items-center gap-1 font-mono">
                        <CheckCircle2 className="w-3 h-3 text-stone-400" /> Verified
                      </span>
                    )}
                  </div>
                  <div className="text-xs text-stone-400">{t.location}</div>
                  <div className="text-[11px] text-stone-500">{t.stayDate}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Frequently Asked Questions */}
        <div className="max-w-3xl">
          <div className="text-xs uppercase tracking-[0.2em] text-stone-400 font-medium mb-2">
            Essential Details
          </div>
          <h3 className="text-2xl sm:text-3xl font-serif text-white mb-6">
            Frequently Inquired
          </h3>

          <div className="divide-y divide-stone-850 border-t border-b border-stone-850">
            {FAQ_DATA.map((faq, index) => {
              const isOpen = openFaqIndex === index;
              return (
                <div key={index} className="py-4">
                  <button
                    type="button"
                    onClick={() => setOpenFaqIndex(isOpen ? null : index)}
                    className="w-full flex items-center justify-between text-left text-sm sm:text-base font-medium text-stone-200 hover:text-white transition-colors cursor-pointer"
                  >
                    <span>{faq.question}</span>
                    <ChevronDown
                      className={`w-4 h-4 text-stone-400 transition-transform duration-200 shrink-0 ml-4 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <p className="mt-3 text-xs sm:text-sm text-stone-400 font-light leading-relaxed pr-8">
                      {faq.answer}
                    </p>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
