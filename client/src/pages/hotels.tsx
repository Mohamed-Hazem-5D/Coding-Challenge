import { HotelCard } from "@/components/ui/hotel-card";
import { hotels } from "@/lib/data";
import { useToast } from "@/hooks/use-toast";

export default function Hotels() {
  const { toast } = useToast();

  const handleSelect = (hotelId: string) => {
    toast({
      title: "Hotel Selected",
      description: "This feature will be available soon.",
    });
  };

  return (
    <div className="min-h-screen pt-20 pb-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8">Space Hotels</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {hotels.map((hotel) => (
            <HotelCard
              key={hotel.id}
              hotel={hotel}
              onSelect={() => handleSelect(hotel.id)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
