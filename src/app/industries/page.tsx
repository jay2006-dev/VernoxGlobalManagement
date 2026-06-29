import { Metadata } from "next";
import { Button } from "@/components/ui/button";
import { ArrowRight, ShoppingBag, Laptop, Stethoscope, GraduationCap, Building, Smartphone, Coffee, Home, CheckCircle } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Industries | Vornex Global",
  description: "Specialized consulting solutions for various industries.",
};

import { IndustriesClient } from "@/components/industries/IndustriesClient";

export default function IndustriesPage() {
  return (
    <div className="pt-24 pb-16 bg-background">
      <section className="py-24 relative overflow-hidden bg-muted/30 text-foreground">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5 z-0 mix-blend-overlay" />
        <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10 text-center max-w-4xl">
          <h1 className="text-5xl md:text-7xl font-bold font-heading mb-6 tracking-tight">Industries We Serve</h1>
          <p className="text-xl text-muted-foreground">
            Deep domain expertise tailored to the unique challenges of your sector.
          </p>
        </div>
      </section>

      <IndustriesClient />

      {/* CTA */}
      <section className="py-24 bg-muted/30 text-center px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold font-heading mb-6">Don't see your industry?</h2>
          <p className="text-lg text-muted-foreground mb-8">We have experience across a wide range of niches. Contact us to discuss your specific needs.</p>
          <Link href="/contact">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold h-14 px-8 rounded-full text-lg shadow-xl hover:-translate-y-1 transition-transform">
              Consult With Us
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
