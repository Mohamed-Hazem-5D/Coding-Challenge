import { TripCard } from "@/components/ui/trip-card";
import { trips } from "@/lib/data";
import { useToast } from "@/hooks/use-toast";
import { useLocation } from "wouter";

export default function Destinations() {
  const { toast } = useToast();
  const [_, setLocation] = useLocation();

  const handleBook = (tripId: string) => {
    setLocation(`/dashboard?book=${tripId}`);
  };

  return (
    <div className="min-h-screen pt-20 pb-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8">Space Destinations</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {trips.map((trip) => (
            <TripCard
              key={trip.id}
              trip={trip}
              onBook={() => handleBook(trip.id)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}