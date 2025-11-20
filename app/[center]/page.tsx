import { notFound } from 'next/navigation';
import { getCenterBySlug } from '@/lib/api';
import ServiceListing from '@/components/ServiceListing';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

interface CenterPageProps {
  params: Promise<{
    center: string;
  }>;
}

export default async function CenterPage({ params }: CenterPageProps) {
  const { center: slug } = await params;
  const center = await getCenterBySlug(slug);

  if (!center) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        {/* Center Header */}
        <Card className="mb-8 shadow-lg">
          <CardHeader className="text-center pb-4">
            <CardTitle className="text-4xl font-bold mb-2">{center.name}</CardTitle>
            <CardDescription className="text-lg">{center.description}</CardDescription>
          </CardHeader>
        </Card>

        {/* Services Section */}
        <div className="mb-6">
          <h2 className="text-3xl font-semibold mb-6 text-gray-900 dark:text-gray-100">
            Our Services
          </h2>
          <ServiceListing centerId={center.id} services={center.services} />
        </div>
      </div>
    </div>
  );
}

export async function generateMetadata({ params }: CenterPageProps) {
  const { center: slug } = await params;
  const center = await getCenterBySlug(slug);

  if (!center) {
    return {
      title: 'Center Not Found',
    };
  }

  return {
    title: `${center.name} - Beauty Center`,
    description: center.description,
  };
}

