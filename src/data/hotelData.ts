import { Room, DiningVenue, SpaRitual, Experience, Addon } from '../types/hotel';

export const HERO_IMAGE = '/src/assets/images/hero_hotel_exterior_1794209901780.jpg';
export const SUITE_VILLA_IMAGE = '/src/assets/images/suite_ocean_villa_1794209902033.jpg';
export const DINING_IMAGE = '/src/assets/images/dining_michelin_restaurant_1794209902889.jpg';
export const SPA_IMAGE = '/src/assets/images/wellness_spa_sanctuary_1794209904003.jpg';

export const ROOMS_DATA: Room[] = [
  {
    id: 'cliffside-horizon-villa',
    name: 'The Cliffside Horizon Villa',
    subtitle: 'Private Cantilevered Pool & Sunset Terrace',
    category: 'villas',
    categoryLabel: 'Cliffside Villa',
    areaSqMeters: 185,
    areaSqFt: 1990,
    maxGuests: 4,
    bedType: 'Custom California King + Daybed',
    view: 'Panoramic Pacific Ocean & Coastline',
    basePriceUSD: 2450,
    image: SUITE_VILLA_IMAGE,
    gallery: [
      SUITE_VILLA_IMAGE,
      HERO_IMAGE,
      SPA_IMAGE
    ],
    description: 'Suspended dramatically above the craggy Pacific bluffs, the Horizon Villa marries indoor organic minimalism with boundless ocean panoramas. Floor-to-ceiling glass folds open to reveal a limestone terrace with private heated infinity plunge pool, outdoor lava stone fireplace, and open-air rain shower.',
    highlights: [
      'Private 10-meter heated infinity plunge pool',
      'Dedicated private butler service 24/7',
      'Outdoor lava stone terrace with fire lounge',
      'Deep carved Carrara marble soaking tub with ocean vistas'
    ],
    amenities: [
      'Dyson Supersonic hair care & Aesop botanical bath rituals',
      'Complimentary curated cellar bar with organic regional wines',
      'Artisanal linen by Frette and customizable goose-down pillow menu',
      'In-suite Bang & Olufsen acoustic system & acoustic soundproofing',
      'Sub-Zero private sommelier cabinet with temperature zones',
      'Daily morning breakfast on your terrace prepared à la minute'
    ],
    privileges: [
      'Guaranteed priority reservation at two-Michelin-starred L\'Étoile Marine',
      'Daily complimentary thermal hydrotherapy circuit access',
      'Round-trip airport luxury EV chauffeur transfer (SFO / Monterey / SJC)',
      'Unpacking & wardrobe pressing on arrival'
    ],
    floorPlanSummary: 'Master bedroom suite, open fireside salon, walk-in dressing galleria, double vanity limestone bath, private dining terrace with infinity plunge pool.'
  },
  {
    id: 'pacific-azure-suite',
    name: 'The Pacific Azure Suite',
    subtitle: 'Panoramic Oceanfront Living & Fireplace',
    category: 'suites',
    categoryLabel: 'Oceanfront Suite',
    areaSqMeters: 115,
    areaSqFt: 1240,
    maxGuests: 3,
    bedType: 'Bespoke California King',
    view: 'Direct Unobstructed Ocean View',
    basePriceUSD: 1650,
    image: SUITE_VILLA_IMAGE,
    gallery: [
      SUITE_VILLA_IMAGE,
      HERO_IMAGE
    ],
    description: 'Designed for deep restorative calm, this expansive suite features dual exposures facing the roaring Pacific. Natural white oak floors, hand-woven textured textiles, and a double-sided limestone fireplace create an intimate sanctuary after days spent exploring coastal trails.',
    highlights: [
      'Double-sided limestone hearth in bedroom and lounge',
      'Expansive cedarwood balcony with plush daybeds',
      'Handcrafted freestanding oval soaking bath',
      'Direct private access to cliffside meditation path'
    ],
    amenities: [
      'Complimentary morning cold-pressed organic juice service',
      'Frette 600-thread count sateen linens',
      'Full Aesop bath and body formulation line',
      'Custom bar with small-batch vermouth and local botanical gins',
      'High-speed Wi-Fi 7 with uninterrupted coverage',
      'Evening herbal infusion sleep ritual turndown'
    ],
    privileges: [
      'Complimentary access to morning coastal yoga on the pavilion',
      'Priority spa booking window',
      'Daily seasonal fruit basket and artisan chocolates'
    ],
    floorPlanSummary: 'Grand bedroom, fireside lounge area, expansive cedar veranda, double rain-shower bath suite with picture window soaking tub.'
  },
  {
    id: 'cypress-royal-penthouse',
    name: 'The Cypress Royal Penthouse',
    subtitle: 'Estate Masterpiece with 360° Wraparound Terrace',
    category: 'penthouses',
    categoryLabel: 'Penthouse Residence',
    areaSqMeters: 260,
    areaSqFt: 2800,
    maxGuests: 6,
    bedType: 'Two Master Kings + Executive Twin',
    view: '360° Coastline, Ancient Pines & Ocean',
    basePriceUSD: 4200,
    image: HERO_IMAGE,
    gallery: [
      HERO_IMAGE,
      SUITE_VILLA_IMAGE,
      DINING_IMAGE
    ],
    description: 'The pinnacle of luxury at The Grand Veridian. Crowned at the highest point of the resort, this two-bedroom master residence commands sweeping views from dawn to midnight stargazing. Features an expansive formal salon, private chef kitchen, temperature-controlled 120-bottle wine room, and a 140 m² teak terrace with hot spring spa.',
    highlights: [
      'Two master king suites with en-suite carved stone baths',
      'Private 140 m² wraparound teak terrace with cedar hot tub',
      'Private chef prep kitchen and bespoke dining room for 8',
      'Dedicated personal concierge and chauffeur for your entire stay'
    ],
    amenities: [
      'Private sommelier tasting in your penthouse upon arrival',
      'Dornbracht sensory water showers with chromotherapy',
      'Steinway & Sons Spirio high-resolution acoustic player piano',
      'Fully stocked premier bar with vintage champagne & single malts',
      'Exclusive private elevator entrance with biometric security',
      'Complimentary daily in-penthouse massage treatment for two'
    ],
    privileges: [
      'Unlimited private airport luxury transfer throughout stay',
      'Unlimited thermal spa facility and private cabana reservation',
      'Bespoke culinary experience with Executive Chef Alexandre Moreau'
    ],
    floorPlanSummary: 'Two master bedroom suites, fireside great room, 8-guest dining salon, sommelier bar, service kitchen, wraparound exterior terrace with cedar spa.'
  },
  {
    id: 'sunset-terrace-villa',
    name: 'The Sunset Terrace Villa',
    subtitle: 'Secluded Cliff Perch with Heated Plunge Pool',
    category: 'villas',
    categoryLabel: 'Cliffside Villa',
    areaSqMeters: 155,
    areaSqFt: 1670,
    maxGuests: 3,
    bedType: 'Handcrafted California King',
    view: 'Direct Golden Sunset Over the Pacific',
    basePriceUSD: 2150,
    image: SUITE_VILLA_IMAGE,
    gallery: [
      SUITE_VILLA_IMAGE,
      HERO_IMAGE
    ],
    description: 'Perched strategically where the afternoon light turns to liquid gold, this villa is an architectural homage to coastal solitude. Features a sunken living room, raw stone masonry, custom wool rugs, and an infinity plunge pool seamlessly meeting the sea horizon.',
    highlights: [
      'Sunken living room with panoramic glass corner walls',
      'Heated plunge pool with integrated hydro-massage jets',
      'Outdoor dining pergola with open fire pit',
      'Custom walnut cocktail console with mixology ingredients'
    ],
    amenities: [
      'Bespoke binoculars for seasonal whale watching',
      'Linen robes and shearling slippers by Charvet',
      'Private courtyard entry with fragrant jasmine and olive trees',
      'Nespresso Creatista with single-origin beans roasted on-site',
      'Heated travertine floors throughout living and bath areas'
    ],
    privileges: [
      'Sunset champagne bottle and caviar service on your terrace night of arrival',
      'Daily laundry and pressing service',
      'Private parking bay with dedicated Tesla Supercharger'
    ],
    floorPlanSummary: 'Private landscaped entry court, master suite, sunken conversation salon, travertine bath, infinity terrace with fire pit.'
  },
  {
    id: 'coastal-heritage-suite',
    name: 'The Coastal Heritage Suite',
    subtitle: 'Hand-Hewn Beams & Private Herb Garden Veranda',
    category: 'suites',
    categoryLabel: 'Oceanfront Suite',
    areaSqMeters: 98,
    areaSqFt: 1055,
    maxGuests: 2,
    bedType: 'Custom California King',
    view: 'Coastal Flora & Ocean Waves',
    basePriceUSD: 1450,
    image: SUITE_VILLA_IMAGE,
    gallery: [
      SUITE_VILLA_IMAGE,
      SPA_IMAGE
    ],
    description: 'A tribute to the native landscape and artisanal heritage of Big Sur. Built with reclaimed redwood and hand-cut coastal stone, the suite features a private sheltered patio surrounded by wild rosemary and lavender, overlooking waves breaking against the reef below.',
    highlights: [
      'Sheltered patio with heated daybed and fire table',
      'Freestanding cast iron soaking tub beside operable French casements',
      'Artisan-crafted pottery and curated California modern art collection',
      'Wood-burning fireplace with seasoned cedar logs supplied daily'
    ],
    amenities: [
      'Hand-loomed organic wool throws and down duvets',
      'Artisanal local farm tea collection & porcelain brewing kettle',
      'Sonos architectural sound system',
      'Spacious rain shower with dual showerheads and steam option'
    ],
    privileges: [
      'Complimentary guided coastal botany and geology morning walk',
      'Daily afternoon tea and pastry service in the library'
    ],
    floorPlanSummary: 'King bedroom, sitting salon with hearth, dressing alcove, spa bathroom, sheltered garden terrace.'
  },
  {
    id: 'zen-garden-pavilion',
    name: 'The Zen Garden Pavilion Suite',
    subtitle: 'Secluded Bamboo Sanctuary & Hinoki Soaking Tub',
    category: 'suites',
    categoryLabel: 'Oceanfront Suite',
    areaSqMeters: 130,
    areaSqFt: 1400,
    maxGuests: 2,
    bedType: 'Natural Latex & Cashmere King Platform',
    view: 'Private Japanese Courtyard & Ocean Mist',
    basePriceUSD: 1850,
    image: SUITE_VILLA_IMAGE,
    gallery: [
      SUITE_VILLA_IMAGE,
      SPA_IMAGE
    ],
    description: 'An architectural temple of silence and restoration. Surrounding an enclosed private raked-gravel garden and moss-draped bonsai pines, this suite includes an authentic Japanese Hinoki cedar deep ofuro tub, tatami meditation alcove, and serene water features.',
    highlights: [
      'Private enclosed Japanese rock garden & moss courtyard',
      'Authentic fragrant Japanese Hinoki cypress soaking tub',
      'Dedicated meditation and sound therapy corner with singing bowls',
      'Shoji screen sliding glass doors with acoustic double glazing'
    ],
    amenities: [
      'Organic Ceremonial Matcha set with Kyoto whisks',
      'Aromatherapy diffuser with wild sage and cedar wood extracts',
      'Yukata robes and natural woven slippers',
      'Heated tatami mats and organic linen bedding'
    ],
    privileges: [
      'Private 45-minute daily sound bath session in your pavilion',
      'Priority access to the resort thermal springs'
    ],
    floorPlanSummary: 'Courtyard foyer, meditation tatami alcove, king master retreat, Hinoki bath sanctuary, enclosed zen garden.'
  }
];

export const DINING_VENUES: DiningVenue[] = [
  {
    id: 'letoile-marine',
    name: "L'Étoile Marine",
    subtitle: 'Coast-to-Table Haute Gastronomy',
    michelinStars: 2,
    chef: 'Alexandre Moreau',
    description: 'Perched on the cantilevered glass edge of the cliffs, L\'Étoile Marine reinterprets coastal California bounty through classic French discipline. Every course tells a story of the tides, local heirloom diver-harvested seaweeds, and biodynamic coastal gardens.',
    image: DINING_IMAGE,
    hours: 'Wednesday – Sunday, 5:30 PM – 10:00 PM',
    dressCode: 'Elegant Attire (Jackets recommended)',
    signatureDish: 'Monterey Bay Abalone with Coastal Sea Urchin & Roasted Kelp Emulsion',
    menuCourses: [
      {
        category: 'Eight-Course Grand Tide Tasting',
        items: [
          {
            name: 'Pacific Dungeness Crab & Meyer Lemon Geleé',
            description: 'Avocado mousse, Oscietra caviar, crisp sea lettuce tartlet',
            price: 'Course I'
          },
          {
            name: 'Pan-Roasted Spot Prawn & Chanterelle Fricassee',
            description: 'Smoked shellfish jus, garden brassicas, sea fennel',
            price: 'Course III'
          },
          {
            name: 'Dry-Aged Sonoma Duck with Wild Huckleberry',
            description: 'Parsnip mille-feuille, fermented plum, roasted duck jus with tellicherry pepper',
            price: 'Course V'
          },
          {
            name: 'Carmel Valley Honey & Lavender Soufflé',
            description: 'Salted goat milk gelato, toasted pollen crisp',
            price: 'Course VII'
          }
        ]
      },
      {
        category: 'Cellar Sommelier Pairings',
        items: [
          {
            name: 'Pacific Terroir Pairing',
            description: 'Curated cool-climate Santa Lucia Highlands Pinot Noirs and Santa Cruz Mountain Chardonnays',
            price: '$185 / guest'
          },
          {
            name: 'Grand Cru Heritage Reserve',
            description: 'Rare vintage champagnes, Burgundy Grand Crus, and aged Napa Valley benchmark estates',
            price: '$340 / guest'
          }
        ]
      }
    ]
  },
  {
    id: 'horizon-bar',
    name: 'The Horizon Lounge & Raw Bar',
    subtitle: 'Sunset Mixology & Pacific Crudo',
    chef: 'Elena Rostova',
    description: 'An open-air fire table lounge where the Pacific breeze meets live acoustic strings and world-class mixology. Freshly shucked oysters, daily crudo plates, and an exhaustive collection of rare Japanese whiskies and small-batch vermouths.',
    image: DINING_IMAGE,
    hours: 'Daily, 12:00 PM – Midnight (Sunset Service 4:30 PM)',
    dressCode: 'Smart Coastal Casual',
    signatureDish: 'Chilled Seafood Plateau & Pacific Cypress Smoked Old Fashioned',
    menuCourses: [
      {
        category: 'Raw Bar & Small Plates',
        items: [
          {
            name: 'Hog Island Oyster Selection (Dozen)',
            description: 'Pickled sea beans, finger lime mignonette, house fermented hot sauce',
            price: '$48'
          },
          {
            name: 'Bluefin Tuna Crudo',
            description: 'White ponzu, crispy shallots, shiso oil, cured egg yolk',
            price: '$36'
          },
          {
            name: 'Wagyu Beef Tartare & Bone Marrow Toast',
            description: 'Quail egg yolk, caperberry, grilled sourdough',
            price: '$38'
          }
        ]
      },
      {
        category: 'Craft Botanical Cocktails',
        items: [
          {
            name: 'Veridian Coast & Mist',
            description: 'Botanical gin, Douglas fir liqueur, clarified lime, saline mist, wild bay leaf',
            price: '$26'
          },
          {
            name: 'Solstice Sunset',
            description: 'Mezcal artesanal, roasted blood orange, amaro nonino, smoked rosemary',
            price: '$28'
          }
        ]
      }
    ]
  },
  {
    id: 'la-terrazza',
    name: 'La Terrazza Al Fresco',
    subtitle: 'Morning Artisanal Bakery & Coastal Mediterranean',
    chef: 'Marco Valenti',
    description: 'Bathed in morning sunlight under centuries-old olive trees, La Terrazza offers handcrafted morning pastries, sourdough hearth breads, stone fruit tarts, and sun-drenched coastal lunches featuring wood-roasted fish and handmade pastas.',
    image: DINING_IMAGE,
    hours: 'Daily Breakfast 7:00 AM – 11:30 AM · Lunch 12:00 PM – 3:30 PM',
    dressCode: 'Resort Casual',
    signatureDish: 'House-Extruded Tagliolini with Santa Barbara Sea Urchin & Hand-Churned Butter',
    menuCourses: [
      {
        category: 'Morning Hearth',
        items: [
          {
            name: 'Pastry Tier from the Wood Oven',
            description: 'Wild blackberry kouign-amann, pain au chocolat, cardamom almond twist',
            price: '$24'
          },
          {
            name: 'Poached Farm Eggs Benedict on Sourdough Brioche',
            description: 'Dungeness crab, tarragon hollandaise, charred asparagus',
            price: '$34'
          }
        ]
      }
    ]
  }
];

export const SPA_RITUALS: SpaRitual[] = [
  {
    id: 'marine-hydrotherapy',
    title: 'Marine Algae & Himalayan Mineral Hydro-Therapy',
    duration: '90 Minutes',
    priceUSD: 380,
    description: 'A deeply restorative immersion combining warm sea kelp body wraps, hydro-massage mineral baths rich in magnesium, and a rhythmic full-body lymphatic drainage massage using warmed coastal stones.',
    benefits: ['Cellular detoxification', 'Deep muscular decompression', 'Skin remineralization', 'Enhanced sleep quality']
  },
  {
    id: 'veridian-grounding',
    title: 'Veridian Cedarwood & Obsidian Grounding Ritual',
    duration: '120 Minutes',
    priceUSD: 490,
    description: 'Honoring ancient Big Sur traditions, this ritual begins with a sacred sage and cedar cleansing, followed by heated obsidian stone bodywork and deep tissue myofascial release with organic coastal botanical infusions.',
    benefits: ['Stress and tension release', 'Circulatory balance', 'Vagus nerve stimulation', 'Total somatic stillness']
  },
  {
    id: 'cellular-facial',
    title: 'Biologique Recherche Radiance Marine Facial',
    duration: '75 Minutes',
    priceUSD: 340,
    description: 'A targeted clinical facial utilizing micro-current stimulation, marine collagen serums, and cryogenic oxygen smoothing to lift contours and restore immediate youthful luminosity.',
    benefits: ['Immediate skin tightening', 'Deep dermal hydration', 'Fine line softening', 'Sustained natural glow']
  },
  {
    id: 'sound-bath-cave',
    title: 'Cave Sanctuary Sound Bath & Floatation Ritual',
    duration: '60 Minutes',
    priceUSD: 240,
    description: 'Floating weightlessly in a private 37°C mineral-saturated saltwater pool carved inside the sea cliff, guided by harmonic Tibetan singing bowls and ocean wave acoustics.',
    benefits: ['Alpha/Theta brainwave state', 'Complete zero-gravity spinal relief', 'Emotional grounding', 'Sensory reset']
  }
];

export const EXPERIENCES_DATA: Experience[] = [
  {
    id: 'private-yacht',
    title: 'Private 60ft Hinckley Yacht Sunset Charter',
    duration: '3.5 Hours',
    priceUSD: 1800,
    category: 'Marine Excursion',
    description: 'Step directly from the resort private cove aboard our custom Hinckley luxury cruiser. Sail along the rugged Big Sur cliffs and sea otters sanctuaries while your private sommelier serves Dom Pérignon and chilled Pacific oysters.',
    included: ['Captain & steward crew', 'Vintage champagne & fresh oyster service', 'Snorkeling & paddleboards', 'Photography keepsake']
  },
  {
    id: 'private-cellar-tasting',
    title: 'Master Sommelier Big Sur Vineyard & Cellar Excursion',
    duration: '4 Hours',
    priceUSD: 850,
    category: 'Epicurean',
    description: 'A chauffeured journey in a vintage Porsche or Range Rover into secluded, high-altitude vineyards closed to the public. Taste library vintages directly from French oak barrels alongside the winemaker.',
    included: ['Private luxury vehicle & chauffeur', 'Barrel tastings at 3 private estates', 'Artisanal cheese & charcuterie lunch', 'Shipment coordination']
  },
  {
    id: 'guided-redwood-trail',
    title: 'Ancient Coastal Redwood Hike & Forest Meditation',
    duration: '2.5 Hours',
    priceUSD: 320,
    category: 'Wellness & Nature',
    description: 'Walk beneath 1,000-year-old coastal redwoods with our resident naturalist. Experience guided Shinrin-yoku (forest bathing), breathwork beside secluded waterfalls, and wild foraging insights.',
    included: ['Resident naturalist guide', 'Artisan trekking poles & binoculars', 'Wildcrafted herbal tonic & trail picnic', 'Reflective journal']
  },
  {
    id: 'stargazing-astronomy',
    title: 'Dark Sky Stargazing with Resident Astronomer',
    duration: '2 Hours',
    priceUSD: 450,
    category: 'Cosmic & Twilight',
    description: 'Perched on the resort high helipad with zero light pollution, peer through our research-grade 14-inch Schmidt-Cassegrain telescope into Saturn\'s rings, distant nebulae, and stellar nurseries.',
    included: ['Resident astrophysicist guide', 'High-powered computerized telescope', 'Heated cashmere throws & warm spiced mulled wine', 'Digital astrophotography prints']
  }
];

export const ADDONS_DATA: Addon[] = [
  {
    id: 'champagne-welcome',
    title: 'Krug Grande Cuvée & Caviar Arrival Welcome',
    description: 'A chilled bottle of Krug Grande Cuvée champagne and 50g of Royal Oscietra caviar with warm blinis in your suite upon arrival.',
    priceUSD: 420,
    unit: 'per stay'
  },
  {
    id: 'chauffeur-transfer',
    title: 'Private Luxury EV Chauffeur Transfer (Round-Trip)',
    description: 'Seamless door-to-door transfer in a custom Lucid Air Sapphire or Range Rover from SFO, SJC, or Monterey Airport.',
    priceUSD: 550,
    unit: 'per stay'
  },
  {
    id: 'couples-spa-pass',
    title: 'Daily Couples Hydrothermal & Mineral Circuit Pass',
    description: 'Unlimited private access to the salt cave, Finnish sauna, and heated travertine infinity hydro-pool throughout your stay.',
    priceUSD: 180,
    unit: 'per day'
  },
  {
    id: 'sommelier-curated-bar',
    title: 'Sommelier Curated Suite Cellar Collection (6 Bottles)',
    description: 'Hand-picked rare vintage regional wines and grower champagnes tailored to your individual taste preferences.',
    priceUSD: 680,
    unit: 'per stay'
  }
];

export const ESTATE_WAYPOINTS = [
  {
    id: 'main-lodge',
    name: 'The Great Lodge & Concierge',
    tag: 'Arrival & Gathering',
    description: 'The monumental stone heart of the resort with towering 12-meter wood-burning hearth, library, and grand ocean observation deck.',
    coords: { x: 38, y: 44 }
  },
  {
    id: 'cliff-villas',
    name: 'Horizon & Sunset Villas Perch',
    tag: 'Accommodations',
    description: 'Private cantilevered luxury villas carved directly into the western granite face with secluded plunge pools.',
    coords: { x: 26, y: 32 }
  },
  {
    id: 'etoile-restaurant',
    name: "L'Étoile Marine Restaurant",
    tag: 'Fine Dining',
    description: 'Two-Michelin-starred culinary temple with glass corner cantilever over the roaring waves.',
    coords: { x: 50, y: 55 }
  },
  {
    id: 'thermal-spa',
    name: 'The Thermal Mineral Spa & Cavern',
    tag: 'Wellness Sanctuary',
    description: 'Heated travertine mineral pools, herbal steam rooms, private salt chambers, and meditation gardens.',
    coords: { x: 62, y: 36 }
  },
  {
    id: 'infinity-pool',
    name: 'The Horizon Infinity Pool & Bar',
    tag: 'Leisure & Sun',
    description: 'Heated 35-meter cliffside infinity pool that appears to spill directly into the Pacific Ocean horizon.',
    coords: { x: 42, y: 72 }
  },
  {
    id: 'private-cove',
    name: 'Emerald Cove & Hinckley Dock',
    tag: 'Beach & Marina',
    description: 'Private protected sand cove for yacht boarding, coastal swimming, paddleboarding, and sea otter observation.',
    coords: { x: 18, y: 80 }
  },
  {
    id: 'astronomy-helipad',
    name: 'Celestial Helipad & Stargazing Lawn',
    tag: 'Arrival & Astronomy',
    description: 'Private helicopter landing facility and nighttime dark-sky observatory equipped with research telescopes.',
    coords: { x: 78, y: 22 }
  }
];

export const GUEST_TESTIMONIALS = [
  {
    quote: "The Grand Veridian operates in a rarefied echelon that few properties on Earth can touch. Watching the Pacific fog roll across our private infinity pool while the fire crackled in our villa was pure transcendence.",
    author: "Sir Julian & Lady Evelyn Vance",
    location: "London, United Kingdom",
    stayDate: "Stayed October 2025 · Cliffside Horizon Villa",
    verified: true
  },
  {
    quote: "Dining at L'Étoile Marine was easily the culinary highlight of our year. The sea urchin emulsion paired with local cool-climate Pinot Noir will live in my memory forever. The attention to detail is peerless.",
    author: "Dr. Kenji Takahashi",
    location: "Kyoto & San Francisco",
    stayDate: "Stayed September 2025 · Cypress Royal Penthouse",
    verified: true
  },
  {
    quote: "The thermal spring cave sanctuary restored my nervous system in three days. Staff anticipated every whim before we even formulated the thought. Truly the benchmark for American luxury hospitality.",
    author: "Eleanor Davenport-Hayes",
    location: "New York City",
    stayDate: "Stayed August 2025 · Pacific Azure Suite",
    verified: true
  }
];

export const HOTEL_AWARDS = [
  {
    title: 'Three Michelin Keys',
    issuer: 'Michelin Guide 2025 & 2026',
    detail: 'Highest Distinction for Extraordinary Stays'
  },
  {
    title: 'Forbes Five-Star Award',
    issuer: 'Forbes Travel Guide',
    detail: 'Triple Five-Star Rating: Hotel, Spa, Restaurant'
  },
  {
    title: '#1 Resort in North America',
    issuer: 'Condé Nast Traveler',
    detail: 'Readers\' Choice Awards 2025'
  },
  {
    title: 'World\'s 50 Best Hotels',
    issuer: 'The World’s 50 Best',
    detail: 'Top 10 Global Coastal Retaining Sanctuaries'
  }
];

export const FAQ_DATA = [
  {
    question: 'What are the check-in and check-out times?',
    answer: 'Standard check-in begins at 3:00 PM, and check-out is at 12:00 PM (noon). Early check-in and guaranteed late check-out can be arranged through your personal concierge upon reservation.'
  },
  {
    question: 'How do guests arrange arrival and airport transfers?',
    answer: 'We provide private chauffeured transfers in our bespoke fleet of luxury electric vehicles and Range Rovers from San Francisco (SFO), San Jose (SJC), and Monterey Peninsula (MRY) airports. In addition, our private on-site helipad accommodates private helicopter charters from major Northern California hubs with just 24 hours notice.'
  },
  {
    question: 'Are children and pets welcome at The Grand Veridian?',
    answer: 'To preserve the tranquil sanctuary atmosphere, guests must be 14 years of age or older. We welcome well-mannered canine companions up to 35 lbs in designated ground-level villas, complete with custom dog bedding, organic treats, and pet-sitting arrangements.'
  },
  {
    question: 'What is the resort deposit and cancellation policy?',
    answer: 'A deposit equal to the first two nights of your stay is required at booking. Reservations may be modified or cancelled with a full refund up to 14 days prior to scheduled arrival.'
  },
  {
    question: 'Do you cater to dietary preferences and allergies?',
    answer: 'Every kitchen at The Grand Veridian—including L\'Étoile Marine and in-villa dining—is fully equipped to cater to plant-based, gluten-free, kosher-style, and customized allergy specifications with prior notice.'
  }
];
