"use client";

import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";
import Image from "next/image";

const reasons = [
  "Experienced Team of Global Professionals",
  "Client-Centric Tailored Strategies",
  "Performance Driven Results",
  "Innovative & Scalable Solutions",
  "Adherence to Global Standards"
];

export function WhyChooseUs() {
  return (
    <section className="py-24 bg-muted/30 text-foreground overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div>
              <span className="text-primary font-semibold tracking-wider uppercase text-sm mb-4 block">
                Why Choose Us
              </span>
              <h2 className="text-4xl md:text-5xl font-bold font-heading mb-6 text-foreground">
                Unmatched Expertise. <br />
                Proven Results.
              </h2>
              <p className="text-lg text-muted-foreground">
                Partner with a firm that understands the intricacies of global markets. We combine deep industry knowledge with innovative execution to deliver measurable success.
              </p>
            </div>

            <ul className="space-y-4 pt-4">
              {reasons.map((reason, index) => (
                <motion.li 
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="flex items-center gap-4 bg-white p-4 rounded-xl border border-border shadow-sm hover:shadow-md transition-shadow"
                >
                  <CheckCircle className="w-6 h-6 text-accent flex-shrink-0" />
                  <span className="font-medium text-lg text-foreground">{reason}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="aspect-square rounded-full bg-gradient-to-tr from-primary to-secondary opacity-10 blur-3xl absolute inset-0" />
            <div className="relative rounded-3xl overflow-hidden border border-border aspect-[4/3] bg-white shadow-xl">
               <img src="https://res.cloudinary.com/dunvmtqha/image/upload/Screenshot_2026-06-29_064842_rknoml.png" alt="Corporate Team" className="absolute inset-0 w-full h-full object-cover" />
            </div>
            
            <div className="absolute -left-8 top-1/2 -translate-y-1/2 bg-white p-6 rounded-2xl border border-border shadow-2xl hidden md:block">
               <div className="flex items-center gap-4">
                 <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center">
                    <CheckCircle className="w-6 h-6 text-accent" />
                 </div>
                 <div>
                    <div className="text-xl font-bold font-numbers text-foreground">98%</div>
                    <div className="text-sm text-muted-foreground">Client Retention</div>
                 </div>
               </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
