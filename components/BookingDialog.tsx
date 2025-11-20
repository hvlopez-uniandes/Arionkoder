'use client';

import { Service } from '@/lib/types';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import BookingForm from './BookingForm';

interface BookingDialogProps {
  centerId: string;
  service: Service;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export default function BookingDialog({
  centerId,
  service,
  open,
  onOpenChange,
}: BookingDialogProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[600px] max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Book {service.name}</DialogTitle>
          <DialogDescription>
            Please fill in your details to complete the booking.
          </DialogDescription>
        </DialogHeader>
        <BookingForm
          centerId={centerId}
          service={service}
          onSuccess={() => onOpenChange(false)}
        />
      </DialogContent>
    </Dialog>
  );
}

