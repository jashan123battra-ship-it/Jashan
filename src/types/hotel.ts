export interface Room {
  id: string;
  name: string;
  subtitle: string;
  category: 'all' | 'suites' | 'villas' | 'penthouses';
  categoryLabel: string;
  areaSqMeters: number;
  areaSqFt: number;
  maxGuests: number;
  bedType: string;
  view: string;
  basePriceUSD: number;
  image: string;
  gallery: string[];
  description: string;
  highlights: string[];
  amenities: string[];
  privileges: string[];
  floorPlanSummary: string;
}

export interface DiningVenue {
  id: string;
  name: string;
  subtitle: string;
  michelinStars?: number;
  chef: string;
  description: string;
  image: string;
  hours: string;
  dressCode: string;
  signatureDish: string;
  menuCourses: {
    category: string;
    items: {
      name: string;
      description: string;
      price: string;
    }[];
  }[];
}

export interface SpaRitual {
  id: string;
  title: string;
  duration: string;
  priceUSD: number;
  description: string;
  benefits: string[];
}

export interface Experience {
  id: string;
  title: string;
  duration: string;
  priceUSD: number;
  category: string;
  description: string;
  included: string[];
}

export interface Addon {
  id: string;
  title: string;
  description: string;
  priceUSD: number;
  unit: 'per stay' | 'per guest' | 'per night' | 'per day';
}

export interface BookingState {
  checkIn: string;
  checkOut: string;
  adults: number;
  children: number;
  roomsCount: number;
  selectedRoomId: string | null;
  selectedAddonIds: string[];
  guestName: string;
  guestEmail: string;
  guestPhone: string;
  specialRequests: string;
  arrivalTransfer: boolean;
  dietaryNotes: string;
}
