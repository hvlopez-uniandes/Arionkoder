'use client';

import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import { getBookingById } from '@/lib/api';
import BookingConfirmation from '@/components/BookingConfirmation';
import { Card } from '@/components/ui/card';
import { Booking } from '@/lib/types';

export default function BookingConfirmationPage() {
  const params = useParams();
  const id = params.id as string;
  const [booking, setBooking] = useState<Booking | null>(null);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    const bookingData = getBookingById(id);
    setBooking(bookingData);
  }, [id]);

  if (!isMounted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 flex items-center justify-center p-4">
        <Card className="w-full max-w-2xl shadow-xl p-8">
          <div className="text-center">Loading...</div>
        </Card>
      </div>
    );
  }

  if (!booking) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 flex items-center justify-center p-4">
        <Card className="w-full max-w-md text-center p-8">
          <h1 className="text-4xl font-bold mb-2">404</h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
            Booking not found
          </p>
          <Link href="/" className="text-blue-600 hover:underline">
            Return Home
          </Link>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 flex items-center justify-center p-4">
      <Card className="w-full max-w-2xl shadow-xl">
        <BookingConfirmation booking={booking} />
      </Card>
    </div>
  );
}

