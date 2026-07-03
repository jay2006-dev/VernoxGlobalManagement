"use client";

import { motion } from "framer-motion";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

const features = [
  {
    title: "Customer First Approach",
    desc: "We prioritize your end-customers in every strategy we deploy, ensuring maximum retention and LTV."
  },
  {
    title: "Continuous Innovation",
    desc: "Staying ahead of market curves with data-driven insights and cutting-edge methodologies."
  },
  {
    title: "Unwavering Integrity",
    desc: "Transparency and ethical practices are the bedrock of our global operations."
  },
  {
    title: "Sustainable Growth",
    desc: "We don't just build for tomorrow; we build resilient strategies for the next decade."
  }
];

export function AboutPreview() {
  return (
    <section className="py-24 bg-background relative">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start relative">
          
          {/* Sticky Left Column */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="relative lg:sticky lg:top-32"
          >
            <div className="aspect-[4/5] rounded-3xl overflow-hidden relative border border-border shadow-2xl">
              <div className="absolute inset-0 bg-dark/10 mix-blend-multiply z-10 transition-colors duration-500 hover:bg-dark/0" />
              <img src="https://res.cloudinary.com/dunvmtqha/image/upload/8b0d5e06-6406-430c-b32e-f004ac93be22_xl6uvx.jpg" alt="Corporate Team" className="absolute inset-0 w-full h-full object-cover" />
            </div>
            
            <div className="absolute -bottom-8 -right-8 bg-white p-8 rounded-3xl shadow-2xl border border-gray-100 hidden md:block backdrop-blur-xl bg-white/90">
              <div className="text-6xl font-bold font-numbers text-primary mb-2 tracking-tighter">15<span className="text-accent">+</span></div>
              <div className="text-muted-foreground font-semibold uppercase tracking-wider text-sm">Years of Excellence</div>
            </div>
          </motion.div>

          {/* Scrolling Right Column */}
          <div className="space-y-16 py-10 lg:py-0">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <span className="text-accent font-bold tracking-[0.2em] uppercase text-sm mb-4 block flex items-center gap-2">
                <span className="w-8 h-[2px] bg-accent" />
                Who We Are
              </span>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading text-foreground leading-tight tracking-tight mb-6">
                Driving Corporate <br />
                <span className="text-primary">Transformation.</span>
              </h2>
              
              <p className="text-xl text-muted-foreground leading-relaxed">
                Vornex Global Organization is a premier consulting firm specializing in sales, marketing, and leadership development. We partner with Fortune 500 companies to navigate complex challenges, drive sustainable growth, and build high-performance teams.
              </p>
            </motion.div>

            <div className="space-y-8">
              {features.map((feature, index) => (
                <motion.div 
                  key={index} 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex gap-4 group"
                >
                  <div className="mt-1">
                    <CheckCircle2 className="w-8 h-8 text-accent/50 group-hover:text-accent transition-colors duration-300" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-foreground">{feature.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{feature.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <Link href="/about">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground h-14 px-8 rounded-full text-lg shadow-xl shadow-primary/20 group">
                  Discover Our Story
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
