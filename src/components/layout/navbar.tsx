import { Link, useLocation } from "wouter";
import { Rocket, Hotel, User } from "lucide-react";

export function Navbar() {
  const [location] = useLocation();

  return (
    <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-lg border-b z-50">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <Link href="/">
            <a className="flex items-center space-x-2">
              <Rocket className="h-6 w-6 text-primary" />
              <span className="font-bold text-xl">Dubai Space</span>
            </a>
          </Link>

          <div className="flex items-center space-x-6">
            <Link href="/destinations">
              <a className={`flex items-center space-x-1 transition-colors ${location === '/destinations' ? 'text-primary' : 'hover:text-primary'}`}>
                <Rocket className="h-4 w-4" />
                <span>Destinations</span>
              </a>
            </Link>

            <Link href="/hotels">
              <a className={`flex items-center space-x-1 transition-colors ${location === '/hotels' ? 'text-primary' : 'hover:text-primary'}`}>
                <Hotel className="h-4 w-4" />
                <span>Hotels</span>
              </a>
            </Link>

            <Link href="/dashboard">
              <a className={`flex items-center space-x-1 transition-colors ${location === '/dashboard' ? 'text-primary' : 'hover:text-primary'}`}>
                <User className="h-4 w-4" />
                <span>Dashboard</span>
              </a>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}