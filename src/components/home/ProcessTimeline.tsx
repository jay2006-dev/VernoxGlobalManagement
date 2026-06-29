"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { MessageSquare, Target, Zap, TrendingUp } from "lucide-react";

const steps = [
  {
    title: "Discovery & Alignment",
    description: "Deep dive into your business objectives, market positioning, and operational bottlenecks.",
    icon: MessageSquare,
  },
  {
    title: "Strategic Blueprint",
    description: "Developing a tailored, data-driven roadmap to achieve your specific growth goals.",
    icon: Target,
  },
  {
    title: "Precision Execution",
    description: "Flawless implementation leveraging our elite teams and enterprise resources.",
    icon: Zap,
  },
  {
    title: "Scale & Optimize",
    description: "Continuous monitoring, refinement, and scaling for sustainable long-term success.",
    icon: TrendingUp,
  },
];

export function ProcessTimeline() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 80%", "center center"]
  });

  const lineWidth = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section ref={containerRef} className="py-32 bg-background relative overflow-hidden">
      {/* Subtle Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[300px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-24">
          <span className="text-accent font-bold tracking-[0.2em] uppercase text-sm mb-4 block flex items-center justify-center gap-2">
            <span className="w-8 h-[2px] bg-accent" />
            Our Methodology
            <span className="w-8 h-[2px] bg-accent" />
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading text-foreground tracking-tight">
            A Proven Process for Success
          </h2>
        </div>

        <div className="relative">
          {/* Desktop Connecting Lines */}
          <div className="hidden lg:block absolute top-12 left-[12.5%] right-[12.5%] h-[2px] bg-border rounded-full" />
          
          <motion.div 
            style={{ width: lineWidth }}
            className="hidden lg:block absolute top-12 left-[12.5%] h-[2px] bg-gradient-to-r from-primary via-accent to-primary rounded-full z-0 origin-left"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 relative z-10">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ delay: index * 0.15, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                className="relative flex flex-col items-center text-center group"
              >
                {/* Icon Container with glowing effect on hover */}
                <div className="relative mb-8">
                  <div className="absolute inset-0 bg-primary/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="w-24 h-24 rounded-2xl bg-white border border-border shadow-xl flex items-center justify-center group-hover:border-primary/50 group-hover:scale-110 transition-all duration-500 relative z-10">
                    <step.icon className="w-10 h-10 text-primary group-hover:text-accent transition-colors duration-500" />
                    
                    {/* Step Number Badge */}
                    <div className="absolute -top-4 -right-4 w-10 h-10 rounded-full bg-[#0B1F3A] text-white font-numbers font-bold flex items-center justify-center text-lg shadow-lg border-2 border-white group-hover:bg-accent group-hover:text-[#0B1F3A] transition-colors duration-500">
                      {index + 1}
                    </div>
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold font-heading text-foreground mb-4">{step.title}</h3>
                <p className="text-muted-foreground leading-relaxed max-w-xs">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
