"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export function CTA() {
  return (
    <section className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-white via-white/90 to-primary/20 z-0" />
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.03] z-0 mix-blend-overlay" />
      
      {/* Animated orb */}
      <motion.div 
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/20 rounded-full blur-[100px] z-0"
      />

      <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl lg:text-7xl font-bold font-heading text-primary tracking-tight mb-8"
          >
            Ready to Accelerate Your <br className="hidden md:block" /> Business Growth?
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-primary/80 max-w-2xl mx-auto mb-12 font-light"
          >
            Join the Fortune 500 companies that trust Vornex Global Organization to deliver strategic excellence and unparalleled results.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative inline-block group"
          >
            <div className="absolute inset-0 bg-accent rounded-full blur-xl opacity-50 group-hover:opacity-100 transition-opacity duration-500" />
            <Link href="/contact">
              <Button size="lg" className="relative bg-accent hover:bg-accent/90 text-[#0B1F3A] font-bold h-16 px-12 rounded-full text-lg shadow-2xl overflow-hidden transition-transform transform group-hover:scale-105 duration-300">
                <span className="relative z-10 flex items-center">
                  Contact Us Today
                  <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-2 transition-transform duration-300" />
                </span>
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
