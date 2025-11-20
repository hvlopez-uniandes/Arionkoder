import { Center, Service, Booking } from './types';

const mockCenters: Center[] = [
  {
    id: '1',
    name: 'Serenity Beauty Spa',
    slug: 'serenity-spa',
    description: 'Your oasis of tranquility and beauty. We offer premium beauty services in a relaxing environment.',
    services: [
      {
        id: 's1',
        name: 'Facial Treatment',
        duration: 60,
        price: 120,
        description: 'Deep cleansing facial with hydrating mask and massage.',
      },
      {
        id: 's2',
        name: 'Haircut & Styling',
        duration: 45,
        price: 65,
        description: 'Professional haircut with wash, cut, and style.',
      },
      {
        id: 's3',
        name: 'Manicure & Pedicure',
        duration: 90,
        price: 85,
        description: 'Complete nail care with polish application.',
      },
      {
        id: 's4',
        name: 'Full Body Massage',
        duration: 90,
        price: 150,
        description: 'Relaxing full body massage with aromatherapy oils.',
      },
    ],
  },
  {
    id: '2',
    name: 'Glamour Studio',
    slug: 'glamour-studio',
    description: 'Where elegance meets expertise. Transform your look with our professional beauty services.',
    services: [
      {
        id: 's5',
        name: 'Hair Color & Highlights',
        duration: 120,
        price: 180,
        description: 'Professional hair coloring with highlights and toning.',
      },
      {
        id: 's6',
        name: 'Bridal Makeup',
        duration: 90,
        price: 200,
        description: 'Complete bridal makeup with trial session included.',
      },
      {
        id: 's7',
        name: 'Eyebrow Threading',
        duration: 15,
        price: 25,
        description: 'Precise eyebrow shaping using traditional threading technique.',
      },
      {
        id: 's8',
        name: 'Lash Extensions',
        duration: 120,
        price: 160,
        description: 'Full set of premium lash extensions for voluminous lashes.',
      },
    ],
  },
  {
    id: '3',
    name: 'Urban Beauty Bar',
    slug: 'urban-beauty',
    description: 'Modern beauty services for the contemporary client. Fast, efficient, and stylish.',
    services: [
      {
        id: 's9',
        name: 'Express Facial',
        duration: 30,
        price: 60,
        description: 'Quick facial treatment perfect for busy schedules.',
      },
      {
        id: 's10',
        name: 'Hair Styling',
        duration: 60,
        price: 75,
        description: 'Professional hair styling for any occasion.',
      },
      {
        id: 's11',
        name: 'Gel Manicure',
        duration: 45,
        price: 55,
        description: 'Long-lasting gel polish manicure with nail art options.',
      },
    ],
  },
];

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export async function getCenterBySlug(slug: string): Promise<Center | null> {
  await delay(1500);
  const center = mockCenters.find((c) => c.slug === slug);
  return center || null;
}

export async function getServiceById(
  centerId: string,
  serviceId: string
): Promise<Service | null> {
  await delay(1500);
  const center = mockCenters.find((c) => c.id === centerId);
  if (!center) return null;
  return center.services.find((s) => s.id === serviceId) || null;
}

export async function submitBooking(booking: Omit<Booking, 'id' | 'createdAt'>): Promise<Booking> {
  await delay(1500);
  
  const newBooking: Booking = {
    ...booking,
    id: `booking-${Date.now()}`,
    createdAt: new Date().toISOString(),
  };

  const existingBookings = getStoredBookings();
  existingBookings.push(newBooking);
  localStorage.setItem('bookings', JSON.stringify(existingBookings));

  return newBooking;
}

export function getStoredBookings(): Booking[] {
  if (typeof globalThis.window === 'undefined') return [];
  const stored = localStorage.getItem('bookings');
  return stored ? JSON.parse(stored) : [];
}

export function getBookingById(id: string): Booking | null {
  const bookings = getStoredBookings();
  return bookings.find((b) => b.id === id) || null;
}

export function getCenterSlugById(centerId: string): string | null {
  const center = mockCenters.find((c) => c.id === centerId);
  return center?.slug || null;
}

