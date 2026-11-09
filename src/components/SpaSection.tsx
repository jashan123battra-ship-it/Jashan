import React, { useState } from 'react';
import { SPA_RITUALS } from '../data/hotelData';
import { SpaRitual } from '../types/hotel';
import { SpaAppointmentModal } from './SpaAppointmentModal';
import { Droplet, Sparkles, Wind, Flame, Waves } from 'lucide-react';
import { SPA_IMAGE } from '../data/hotelData';

interface SpaSectionProps {
  currency: string;
  currencyRate: number;
  currencySymbol: string;
}

export const SpaSection: React.FC<SpaSectionProps> = ({
  currency,
  currencyRate,
  currencySymbol
}) => {
  const [selectedRitual, setSelectedRitual] = useState<SpaRitual | null>(null);

  const spaFacilities = [
    {
      title: 'Heated Travertine Hydro-Pool',
      temp: '38°C / 100°F',
      desc: 'Infused with natural subterranean magnesium and potassium minerals, overlooking the Pacific fog.'
    },
    {
      title: 'Himalayan Salt Inhalation Cavern',
      temp: 'Microclimate Salt Halo',
      desc: 'Carved natural rock walls with dry pharmaceutical-grade aerosolized sodium for respiratory clarity.'
    },
    {
      title: 'Finnish Hemlock Sauna & Steam',
      temp: '85°C / 185°F',
      desc: 'Wild-harvested Big Sur eucalyptus infusions with cold crushed ice scrub stations.'
    },
    {
      title: 'Glacial Cold Immersion Plunge',
      temp: '10°C / 50°F',
      desc: 'Revitalizing contrast therapy for cellular longevity, endorphin elevation, and vagal tone.'
    }
  ];

  return (
    <section id="wellness" className="py-24 bg-stone-925 text-stone-100 border-t border-stone-850">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Heading */}
        <div className="max-w-2xl mb-12">
          <div className="text-xs uppercase tracking-[0.2em] text-stone-400 font-medium mb-2">
            03. Wellness &amp; Thermal Springs
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-white tracking-tight" style={{ textWrap: 'balance' }}>
            The Cliffside Sanctuary of Deep Restoration
          </h2>
          <p className="mt-3 text-stone-400 text-sm sm:text-base font-light leading-relaxed">
            Harnessing subterranean coastal mineral springs and ancient maritime botany to quiet the modern mind and restore physiological equilibrium.
          </p>
        </div>

        {/* Feature Hero Banner */}
        <div className="relative rounded-lg overflow-hidden border border-stone-850 mb-16 bg-stone-900">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
            <div className="lg:col-span-7 relative min-h-[380px] lg:min-h-[460px]">
              <img
                src={SPA_IMAGE}
                alt="The Grand Veridian Thermal Spa Sanctuary"
                referrerPolicy="no-referrer"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-stone-950 via-transparent to-transparent" />
            </div>

            <div className="lg:col-span-5 p-8 lg:p-10 flex flex-col justify-between bg-stone-900/90">
              <div className="space-y-4">
                <div className="text-xs uppercase tracking-widest text-amber-200/90 font-medium">
                  The Hydrothermal Circuit
                </div>
                <h3 className="text-2xl font-serif text-white">
                  Ancient Waters, Contemporary Science
                </h3>
                <p className="text-stone-300 text-sm font-light leading-relaxed">
                  Complimentary for all resort guests. Our 14,000-square-foot hydrothermal pavilion features private thermal mineral circuits designed according to classic Nordic contrast therapy principles.
                </p>

                <div className="space-y-3 pt-3 border-t border-stone-800">
                  {spaFacilities.map((fac, idx) => (
                    <div key={idx} className="space-y-0.5">
                      <div className="flex items-center justify-between text-xs font-medium">
                        <span className="text-stone-200">{fac.title}</span>
                        <span className="text-stone-400 font-mono text-[11px]">{fac.temp}</span>
                      </div>
                      <p className="text-[11px] text-stone-400 font-light">{fac.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-6 border-t border-stone-800 flex items-center justify-between">
                <span className="text-xs text-stone-400">Open Daily 7:00 AM – 9:00 PM</span>
                <button
                  type="button"
                  onClick={() => setSelectedRitual(SPA_RITUALS[0])}
                  className="px-5 py-2 text-xs uppercase tracking-wider font-semibold bg-stone-100 hover:bg-white text-stone-950 rounded transition-colors cursor-pointer shadow"
                >
                  Book Appointment
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Signature Spa Rituals Grid */}
        <div>
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-xl font-serif text-white">
              Signature Therapeutic Rituals
            </h3>
            <span className="text-xs text-stone-400">
              Biologique Recherche &amp; Wild Coastal Botanicals
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {SPA_RITUALS.map((ritual) => {
              const formattedPrice = Math.round(ritual.priceUSD * currencyRate).toLocaleString();

              return (
                <div
                  key={ritual.id}
                  className="p-6 bg-stone-900/60 border border-stone-850 rounded-lg flex flex-col justify-between hover:border-stone-700 transition-colors"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between gap-4">
                      <span className="text-xs text-stone-400 font-mono">{ritual.duration}</span>
                      <span className="text-base font-serif text-white tabular-nums">
                        {currencySymbol}{formattedPrice}
                      </span>
                    </div>

                    <h4 className="text-lg font-serif text-white">
                      {ritual.title}
                    </h4>

                    <p className="text-xs sm:text-sm text-stone-300 font-light leading-relaxed">
                      {ritual.description}
                    </p>

                    <div className="flex flex-wrap gap-2 pt-2">
                      {ritual.benefits.map((b, bIdx) => (
                        <span key={bIdx} className="text-[11px] text-stone-400 font-light">
                          {bIdx > 0 && <span className="mr-1.5 text-stone-600">·</span>}
                          {b}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="pt-5 mt-4 border-t border-stone-800/80 flex items-center justify-end">
                    <button
                      type="button"
                      onClick={() => setSelectedRitual(ritual)}
                      className="px-4 py-1.5 text-xs uppercase tracking-wider font-medium text-stone-300 hover:text-white border border-stone-700 hover:border-stone-500 rounded transition-colors cursor-pointer"
                    >
                      Reserve Ritual
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Spa Appointment Modal */}
      <SpaAppointmentModal
        ritual={selectedRitual}
        onClose={() => setSelectedRitual(null)}
        currencySymbol={currencySymbol}
        currencyRate={currencyRate}
      />
    </section>
  );
};
