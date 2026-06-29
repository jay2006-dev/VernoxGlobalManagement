"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ShoppingBag, Laptop, Stethoscope, Building, Home, ArrowRight } from "lucide-react";

const industries = [
  { id: 1, name: "Retail", full: "Retail & E-commerce", desc: "Omnichannel growth and customer loyalty strategies.", icon: ShoppingBag, color: "bg-[#0B1F3A]" },
  { id: 2, name: "Tech", full: "Technology & SaaS", desc: "Accelerating market entry and user acquisition.", icon: Laptop, color: "bg-primary" },
  { id: 3, name: "Health", full: "Healthcare", desc: "Navigating compliance while scaling health services.", icon: Stethoscope, color: "bg-[#0B1F3A]" },
  { id: 4, name: "Finance", full: "Banking & Finance", desc: "Building trust and acquiring high-net-worth clients.", icon: Building, color: "bg-accent" },
  { id: 5, name: "Real Estate", full: "Real Estate", desc: "Optimizing sales funnels for premium properties.", icon: Home, color: "bg-[#0B1F3A]" },
];

export function IndustriesPreview() {
  const [active, setActive] = useState<number>(2);

  return (
    <section className="py-32 bg-muted/30">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-2xl">
            <span className="text-accent font-bold tracking-[0.2em] uppercase text-sm mb-4 block flex items-center gap-2">
              <span className="w-8 h-[2px] bg-accent" />
              Global Reach
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading text-foreground tracking-tight">
              Industries We Serve
            </h2>
          </div>
          <p className="text-lg text-muted-foreground max-w-md pb-2">
            Our deep domain expertise spans across critical sectors, allowing us to deliver specialized solutions that drive immediate impact.
          </p>
        </div>

        <div className="flex flex-col md:flex-row h-[750px] md:h-[500px] gap-4 w-full">
          {industries.map((industry) => {
            const isActive = active === industry.id;
            const isDarkColor = industry.id === 4; // Accent is light yellow
            
            return (
              <motion.div
                key={industry.id}
                layout
                onMouseEnter={() => setActive(industry.id)}
                onClick={() => setActive(industry.id)}
                animate={{ 
                  flex: isActive ? 4 : 1, 
                  opacity: 1 
                }}
                transition={{ duration: 0.5, type: "spring", bounce: 0.2 }}
                className={`relative overflow-hidden rounded-3xl cursor-pointer ${industry.color} flex flex-col justify-end group shadow-xl`}
              >
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 mix-blend-overlay pointer-events-none" />
                
                <motion.div 
                  layout
                  className={`absolute top-4 left-4 md:top-6 md:left-6 w-10 h-10 md:w-14 md:h-14 rounded-full flex items-center justify-center bg-white/10 backdrop-blur-md border border-white/20 ${!isActive ? 'hidden md:flex' : 'flex'}`}
                >
                  <industry.icon className={`w-5 h-5 md:w-6 md:h-6 ${isDarkColor ? 'text-[#0B1F3A]' : 'text-white'}`} />
                </motion.div>

                <div className="p-6 md:p-8 mt-auto z-10 relative h-full flex flex-col justify-end">
                  <AnimatePresence mode="popLayout">
                    {isActive ? (
                      <motion.div
                        key="content"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.3, delay: 0.1 }}
                        className={`space-y-3 ${isDarkColor ? 'text-[#0B1F3A]' : 'text-white'}`}
                      >
                        <h3 className="text-3xl md:text-4xl font-bold font-heading whitespace-nowrap tracking-tight">{industry.full}</h3>
                        <p className="opacity-90 text-sm md:text-base max-w-sm leading-relaxed">{industry.desc}</p>
                        <div className="pt-4">
                          <div className={`w-12 h-12 rounded-full border flex items-center justify-center transition-transform transform group-hover:translate-x-2 ${isDarkColor ? 'border-[#0B1F3A] bg-[#0B1F3A]/5' : 'border-white bg-white/5'}`}>
                            <ArrowRight className="w-5 h-5" />
                          </div>
                        </div>
                      </motion.div>
                    ) : (
                      <motion.div
                        key="title"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className={`flex flex-col items-start md:items-center justify-center md:justify-end h-full w-full px-6 md:px-0 pb-0 md:pb-4 ${isDarkColor ? 'text-[#0B1F3A]' : 'text-white'}`}
                      >
                        <h3 className="font-bold tracking-[0.2em] md:tracking-[0.3em] uppercase text-sm transform md:-rotate-90 md:-translate-y-20 whitespace-nowrap opacity-70 group-hover:opacity-100 transition-opacity">{industry.name}</h3>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  );
}
