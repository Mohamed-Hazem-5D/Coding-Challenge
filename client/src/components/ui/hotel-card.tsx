import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";

interface HotelCardProps {
  hotel: {
    id: string;
    name: string;
    description: string;
    image: string;
    pricePerNight: number;
    rating: number;
  };
  onSelect: () => void;
}

export function HotelCard({ hotel, onSelect }: HotelCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Card className="overflow-hidden bg-card/50 backdrop-blur-lg border-primary/20">
        <div className="relative h-48">
          <img
            src={hotel.image}
            alt={hotel.name}
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>
        
        <CardHeader>
          <CardTitle className="text-xl font-bold">{hotel.name}</CardTitle>
          <div className="flex items-center space-x-1">
            {Array.from({ length: hotel.rating }).map((_, i) => (
              <Star key={i} className="h-4 w-4 fill-primary text-primary" />
            ))}
          </div>
        </CardHeader>
        
        <CardContent>
          <p className="text-muted-foreground mb-4">{hotel.description}</p>
          <div className="space-y-4">
            <p className="text-lg font-bold text-primary">
              ${hotel.pricePerNight.toLocaleString()} / night
            </p>
            <Button
              onClick={onSelect}
              className="w-full bg-primary/90 hover:bg-primary"
            >
              View Details
            </Button>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
