import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Countdown } from "@/components/ui/countdown";
import { TripForm } from "@/components/booking/trip-form";
import { trips, aiTips } from "@/lib/data";
import { useToast } from "@/hooks/use-toast";
import { useLocation } from "wouter";

export default function Dashboard() {
  const [location] = useLocation();
  const { toast } = useToast();
  const tripId = new URLSearchParams(location.split("?")[1]).get("book");

  const { data: bookings } = useQuery({
    queryKey: ["/api/users/1/bookings"],
    queryFn: async () => {
      const res = await fetch("/api/users/1/bookings");
      if (!res.ok) throw new Error("Failed to fetch bookings");
      return res.json();
    },
  });

  const handleBooking = async (values: any) => {
    try {
      const res = await fetch("/api/bookings", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...values, userId: 1 }),
      });

      if (!res.ok) throw new Error("Failed to create booking");

      toast({
        title: "Booking Confirmed",
        description: "Your space journey has been booked!",
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to create booking",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="min-h-screen pt-20 pb-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8">Dashboard</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Next Launch</CardTitle>
              </CardHeader>
              <CardContent>
                <Countdown date={new Date(Date.now() + 15 * 24 * 60 * 60 * 1000)} />
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>AI Travel Tips</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {aiTips.map((tip, index) => (
                    <li key={index} className="flex items-start space-x-2">
                      <span className="text-primary">•</span>
                      <span>{tip}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>

          <div>
            {tripId && (
              <Card>
                <CardHeader>
                  <CardTitle>Book Your Trip</CardTitle>
                </CardHeader>
                <CardContent>
                  <TripForm
                    tripId={tripId}
                    onSubmit={handleBooking}
                  />
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
