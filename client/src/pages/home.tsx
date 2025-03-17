import { motion } from "framer-motion";
import { Rocket } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLocation } from "wouter";

export default function Home() {
  const [_, setLocation] = useLocation();

  return (
    <div className="min-h-screen">
      <div className="relative h-screen">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url(https://images.unsplash.com/photo-1451188502541-13943edb6acb)",
            backgroundBlendMode: "overlay",
            backgroundColor: "rgba(0, 0, 0, 0.5)"
          }}
        />

        <div className="relative container mx-auto px-4 h-full flex items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/50">
              Dubai to the Stars
            </h1>
            <p className="text-xl mb-8 text-gray-200">
              Experience luxury space travel like never before. Book your journey to the cosmos today.
            </p>
            <div className="flex space-x-4">
              <Button
                size="lg"
                onClick={() => setLocation("/destinations")}
                className="bg-primary/90 hover:bg-primary"
              >
                <Rocket className="mr-2 h-5 w-5" />
                Explore Destinations
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}