import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Catalog from "./components/Catalog";
import About from "./components/About";
import ConsignmentCTA from "./components/ConsignmentCTA";
import Footer from "./components/Footer";
import WelcomePopup from "./components/WelcomePopup";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      {/* Welcome Popup on first load */}
      <WelcomePopup />
      <Navbar />

      {/* Main Sections */}
      <main className="flex-grow">
        {/* Banner Showcase */}
        <Hero />

        {/* Live Filterable Grid */}
        <Catalog />

        {/* Brand Ethos & Booking Guide */}
        <About />

        {/* Call to Action for Sellers */}
        <ConsignmentCTA />
      </main>

      {/* Footer Details */}
      <Footer />
    </div>
  );
}
