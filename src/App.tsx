import React from "react";
import { Router, Switch, Route } from "wouter";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./lib/queryClient";
import { Toaster } from "@/components/ui/toaster";
import { Navbar } from "@/components/layout/navbar";
import Home from "@/pages/home";
import Destinations from "@/pages/destinations";
import Hotels from "@/pages/hotels";
import Dashboard from "@/pages/dashboard";
import NotFound from "@/pages/not-found";

// Hash-based routing setup for static hosting
const hashBaseLocation = () => {
  const hash = window.location.hash.replace(/^#/, '') || '/';
  return hash.startsWith('/') ? hash : `/${hash}`;
};

const useHashLocation = () => {
  const [loc, setLoc] = React.useState(hashBaseLocation());

  React.useEffect(() => {
    const handler = () => setLoc(hashBaseLocation());
    window.addEventListener('hashchange', handler);
    return () => window.removeEventListener('hashchange', handler);
  }, []);

  const navigate = React.useCallback((to: string) => {
    window.location.hash = to;
  }, []);

  return [loc, navigate];
};

function RouterContent() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/destinations" component={Destinations} />
      <Route path="/hotels" component={Hotels} />
      <Route path="/dashboard" component={Dashboard} />
      <Route component={NotFound} />
    </Switch>
  );
}

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router hook={useHashLocation}>
        <Navbar />
        <RouterContent />
        <Toaster />
      </Router>
    </QueryClientProvider>
  );
}
