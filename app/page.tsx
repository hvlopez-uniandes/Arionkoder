import Link from 'next/link';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const centers = [
  {
    slug: 'serenity-spa',
    name: 'Serenity Beauty Spa',
    description: 'Your oasis of tranquility and beauty',
  },
  {
    slug: 'glamour-studio',
    name: 'Glamour Studio',
    description: 'Where elegance meets expertise',
  },
  {
    slug: 'urban-beauty',
    name: 'Urban Beauty Bar',
    description: 'Modern beauty services for the contemporary client',
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 py-16 max-w-6xl">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-4 text-gray-900 dark:text-gray-100">
            Beauty Center Booking System
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            Select a beauty center to view services and book an appointment
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {centers.map((center) => (
            <Card key={center.slug} className="hover:shadow-xl transition-shadow">
              <CardHeader>
                <CardTitle className="text-2xl">{center.name}</CardTitle>
                <CardDescription className="text-base">{center.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <Link href={`/${center.slug}`}>
                  <Button className="w-full" size="lg">
                    View Services
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
