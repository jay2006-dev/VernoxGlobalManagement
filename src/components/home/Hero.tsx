"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play, BarChart3, TrendingUp } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const titleWords = ["Empowering", "Global", "Enterprises", "To", "Scale", "Beyond", "Limits."];

export function Hero() {
  return (
    <section className="relative min-h-[100svh] flex items-center justify-center pt-20 overflow-hidden">
      {/* Background with mesh gradient */}
      <div className="absolute inset-0 bg-[#0B1F3A] z-0">
        <Image src="/images/hero_corporate.png" alt="Corporate Boardroom" fill className="object-cover opacity-30 mix-blend-luminosity" priority />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0B1F3A]/90 via-[#0B1F3A]/70 to-[#0B1F3A]/90" />
      </div>

      <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10">
        <div className="max-w-5xl mx-auto flex flex-col items-center text-center">
          
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="mb-8"
          >
            <span className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-white/80 text-sm font-medium tracking-wide backdrop-blur-md flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              Redefining Corporate Strategy
            </span>
          </motion.div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold font-heading mb-8 tracking-tighter text-white flex flex-wrap justify-center gap-x-4 gap-y-2">
            {titleWords.map((word, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{ 
                  duration: 0.8, 
                  delay: i * 0.1, 
                  ease: [0.16, 1, 0.3, 1] 
                }}
                className={word === "Beyond" || word === "Limits." ? "text-accent" : ""}
              >
                {word}
              </motion.span>
            ))}
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
            className="text-lg md:text-xl text-gray-300 mb-12 max-w-2xl leading-relaxed"
          >
            Vornex Global Organization delivers strategic sales, targeted marketing, and unparalleled leadership development for Fortune 500 companies.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1, ease: "easeOut" }}
            className="flex flex-col sm:flex-row items-center gap-6"
          >
            <Link href="/contact" className="w-full sm:w-auto">
              <Button size="lg" className="bg-white hover:bg-gray-100 text-[#0B1F3A] font-bold h-14 px-8 rounded-full text-lg shadow-[0_0_40px_rgba(255,255,255,0.3)] hover:shadow-[0_0_60px_rgba(255,255,255,0.5)] transition-all duration-300 w-full">
                Partner With Us
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Button size="lg" variant="outline" className="bg-transparent border-white/20 text-white hover:bg-white/10 font-bold h-14 px-8 rounded-full text-lg backdrop-blur-md w-full sm:w-auto">
              <Play className="mr-2 h-5 w-5" />
              Watch Showreel
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Floating UI Elements for high-tech corporate feel */}
      <motion.div 
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 1.2, ease: "easeOut" }}
        className="absolute right-10 top-1/4 bg-white/5 border border-white/10 backdrop-blur-md p-4 rounded-2xl hidden lg:flex items-center gap-4 shadow-2xl"
      >
        <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center">
          <TrendingUp className="w-6 h-6 text-accent" />
        </div>
        <div>
          <div className="text-white font-bold text-lg">+142%</div>
          <div className="text-gray-400 text-xs">Avg. Revenue Growth</div>
        </div>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 1.4, ease: "easeOut" }}
        className="absolute left-10 bottom-1/4 bg-white/5 border border-white/10 backdrop-blur-md p-4 rounded-2xl hidden lg:flex items-center gap-4 shadow-2xl"
      >
        <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
          <BarChart3 className="w-6 h-6 text-primary" />
        </div>
        <div>
          <div className="text-white font-bold text-lg">Fortune 500</div>
          <div className="text-gray-400 text-xs">Trusted Partners</div>
        </div>
      </motion.div>
    </section>
  );
}
