"use client";

import { motion } from "framer-motion";
import { Building2, Command, Globe, Hexagon, Component, Radar } from "lucide-react";

const companies = [
  { name: "Acme Corp", icon: Building2 },
  { name: "Quantum", icon: Command },
  { name: "GlobalTech", icon: Globe },
  { name: "NexGen", icon: Hexagon },
  { name: "Synapse", icon: Component },
  { name: "Vertex", icon: Radar },
];

export function TrustedCompanies() {
  return (
    <section className="py-16 bg-white border-b border-border overflow-hidden relative">
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.03] z-0 mix-blend-overlay" />
      <div className="container mx-auto px-4 mb-10 relative z-10">
        <p className="text-center text-sm font-semibold text-muted-foreground uppercase tracking-[0.2em]">
          Trusted by Fortune 500 Industry Leaders
        </p>
      </div>
      
      <div className="relative flex overflow-x-hidden w-full group max-w-7xl mx-auto z-10">
        <div className="absolute left-0 top-0 w-48 h-full bg-gradient-to-r from-white via-white/80 to-transparent z-10" />
        <div className="absolute right-0 top-0 w-48 h-full bg-gradient-to-l from-white via-white/80 to-transparent z-10" />
        
        <div className="flex animate-[marquee_25s_linear_infinite] group-hover:[animation-play-state:paused] whitespace-nowrap items-center py-4 w-max">
          {[...companies, ...companies, ...companies].map((company, index) => (
            <div 
              key={index} 
              className="flex items-center gap-4 mx-16 text-muted-foreground/40 hover:text-[#0B1F3A] transition-all duration-500 cursor-pointer hover:scale-110 grayscale hover:grayscale-0"
            >
              <company.icon className="w-10 h-10" />
              <span className="text-2xl font-bold font-heading">{company.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
