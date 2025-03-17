import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

interface TripCardProps {
  trip: {
    id: string;
    name: string;
    description: string;
    image: string;
    duration: string;
    price: {
      economy: number;
      business: number;
      luxury: number;
    };
  };
  onBook: () => void;
}

export function TripCard({ trip, onBook }: TripCardProps) {
  const { toast } = useToast();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Card className="overflow-hidden bg-card/50 backdrop-blur-lg border-primary/20">
        <div className="relative h-48">
          <img
            src={trip.image}
            alt={trip.name}
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>
        
        <CardHeader>
          <CardTitle className="text-xl font-bold">{trip.name}</CardTitle>
        </CardHeader>
        
        <CardContent>
          <p className="text-muted-foreground mb-4">{trip.description}</p>
          <div className="space-y-2">
            <p className="text-sm">Duration: {trip.duration}</p>
            <div className="space-y-1">
              <p className="text-sm">Starting from:</p>
              <p className="text-lg font-bold text-primary">
                ${trip.price.economy.toLocaleString()}
              </p>
            </div>
            <Button
              onClick={onBook}
              className="w-full bg-primary/90 hover:bg-primary"
            >
              Book Now
            </Button>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
