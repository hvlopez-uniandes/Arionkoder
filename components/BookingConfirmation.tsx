'use client';

import { Booking } from '@/lib/types';
import { CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { CheckCircle2, Calendar, Clock, User, Mail, DollarSign } from 'lucide-react';
import { format } from 'date-fns';
import { useRouter } from 'next/navigation';
import { getCenterSlugById } from '@/lib/api';

interface BookingConfirmationProps {
  booking: Booking;
}

export default function BookingConfirmation({ booking }: BookingConfirmationProps) {
  const router = useRouter();
  const centerSlug = getCenterSlugById(booking.centerId);

  const formatDate = (dateString: string) => {
    return format(new Date(dateString), 'EEEE, MMMM d, yyyy');
  };

  const formatTime = (timeString: string) => {
    const [hours, minutes] = timeString.split(':');
    const hour = parseInt(hours, 10);
    const ampm = hour >= 12 ? 'PM' : 'AM';
    const displayHour = hour % 12 || 12;
    return `${displayHour}:${minutes} ${ampm}`;
  };

  return (
    <>
      <CardHeader className="text-center pb-4">
        <div className="flex justify-center mb-4">
          <div className="rounded-full bg-green-100 dark:bg-green-900 p-3">
            <CheckCircle2 className="h-12 w-12 text-green-600 dark:text-green-400" />
          </div>
        </div>
        <CardTitle className="text-3xl font-bold mb-2">Booking Confirmed!</CardTitle>
        <CardDescription className="text-lg">
          Your appointment has been successfully scheduled.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 space-y-4">
          <div className="space-y-3">
            <h3 className="font-semibold text-lg mb-4 text-gray-900 dark:text-gray-100">
              Booking Details
            </h3>
            
            <div className="flex items-start gap-3">
              <div className="mt-1">
                <Calendar className="h-5 w-5 text-gray-500 dark:text-gray-400" />
              </div>
              <div>
                <p className="text-sm text-gray-500 dark:text-gray-400">Service</p>
                <p className="font-medium text-gray-900 dark:text-gray-100">{booking.serviceName}</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="mt-1">
                <Calendar className="h-5 w-5 text-gray-500 dark:text-gray-400" />
              </div>
              <div>
                <p className="text-sm text-gray-500 dark:text-gray-400">Date</p>
                <p className="font-medium text-gray-900 dark:text-gray-100">
                  {formatDate(booking.date)}
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="mt-1">
                <Clock className="h-5 w-5 text-gray-500 dark:text-gray-400" />
              </div>
              <div>
                <p className="text-sm text-gray-500 dark:text-gray-400">Time</p>
                <p className="font-medium text-gray-900 dark:text-gray-100">
                  {formatTime(booking.time)}
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="mt-1">
                <User className="h-5 w-5 text-gray-500 dark:text-gray-400" />
              </div>
              <div>
                <p className="text-sm text-gray-500 dark:text-gray-400">Client Name</p>
                <p className="font-medium text-gray-900 dark:text-gray-100">{booking.clientName}</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="mt-1">
                <Mail className="h-5 w-5 text-gray-500 dark:text-gray-400" />
              </div>
              <div>
                <p className="text-sm text-gray-500 dark:text-gray-400">Email</p>
                <p className="font-medium text-gray-900 dark:text-gray-100">{booking.clientEmail}</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="mt-1">
                <DollarSign className="h-5 w-5 text-gray-500 dark:text-gray-400" />
              </div>
              <div>
                <p className="text-sm text-gray-500 dark:text-gray-400">Booking ID</p>
                <p className="font-medium text-gray-900 dark:text-gray-100 font-mono text-sm">
                  {booking.id}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4">
          <p className="text-sm text-blue-900 dark:text-blue-200">
            <strong>Note:</strong> A confirmation email has been sent to {booking.clientEmail}. 
            Please arrive 10 minutes before your scheduled appointment time.
          </p>
        </div>

        <div className="flex gap-4 pt-4">
          {centerSlug && (
            <Button
              onClick={() => router.push(`/${centerSlug}`)}
              variant="outline"
              className="flex-1"
            >
              Book Another Service
            </Button>
          )}
          <Button
            onClick={() => router.push('/')}
            className={centerSlug ? 'flex-1' : 'w-full'}
          >
            Return Home
          </Button>
        </div>
      </CardContent>
    </>
  );
}

