'use client';

import { Service } from '@/lib/types';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import BookingDialog from './BookingDialog';
import { useState } from 'react';
import { Clock, DollarSign } from 'lucide-react';

interface ServiceListingProps {
  centerId: string;
  services: Service[];
}

export default function ServiceListing({ centerId, services }: ServiceListingProps) {
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleBookClick = (service: Service) => {
    setSelectedService(service);
    setIsDialogOpen(true);
  };

  const formatDuration = (minutes: number) => {
    const hours = Math.floor(minutes / 60);
    const mins = minutes % 60;
    if (hours > 0 && mins > 0) {
      return `${hours}h ${mins}m`;
    } else if (hours > 0) {
      return `${hours}h`;
    }
    return `${mins}m`;
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(price);
  };

  if (services.length === 0) {
    return (
      <div className="text-center py-12 text-gray-500 dark:text-gray-400">
        <p>No services available at this time.</p>
      </div>
    );
  }

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service) => (
          <Card key={service.id} className="flex flex-col hover:shadow-xl transition-shadow">
            <CardHeader>
              <CardTitle className="text-xl">{service.name}</CardTitle>
              <CardDescription className="mt-2">{service.description}</CardDescription>
            </CardHeader>
            <CardContent className="flex-1 flex flex-col justify-between">
              <div className="space-y-2 mb-4">
                <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                  <Clock className="h-4 w-4" />
                  <span>{formatDuration(service.duration)}</span>
                </div>
                <div className="flex items-center gap-2 text-lg font-semibold text-gray-900 dark:text-gray-100">
                  <DollarSign className="h-5 w-5" />
                  <span>{formatPrice(service.price)}</span>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button
                onClick={() => handleBookClick(service)}
                className="w-full"
                size="lg"
              >
                Book Appointment
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>

      {selectedService && (
        <BookingDialog
          centerId={centerId}
          service={selectedService}
          open={isDialogOpen}
          onOpenChange={setIsDialogOpen}
        />
      )}
    </>
  );
}

