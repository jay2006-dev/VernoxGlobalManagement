"use client";

import { motion } from "framer-motion";
import { useEffect, useState, useRef } from "react";

const stats = [
  { value: 20, suffix: "+", label: "Business Partners" },
  { value: 500, suffix: "+", label: "Projects Completed" },
  { value: 15, suffix: "+", label: "Industries Served" },
  { value: 95, suffix: "%", label: "Client Satisfaction" },
];

function Counter({ value, suffix }: { value: number, suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setInView(true);
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (inView) {
      let start = 0;
      const end = value;
      const duration = 2000;
      const increment = end / (duration / 16);
      
      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);
      return () => clearInterval(timer);
    }
  }, [inView, value]);

  return (
    <div ref={ref} className="text-5xl md:text-6xl font-bold font-numbers text-primary mb-2">
      {count}{suffix}
    </div>
  );
}

export function Statistics() {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-50">
        <div className="absolute top-0 right-0 w-[50%] h-[100%] bg-primary/10 blur-[120px] rounded-bl-full" />
        <div className="absolute bottom-0 left-0 w-[50%] h-[100%] bg-accent/10 blur-[120px] rounded-tr-full" />
      </div>

      <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 text-center">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="flex flex-col items-center"
            >
              <Counter value={stat.value} suffix={stat.suffix} />
              <div className="text-muted-foreground font-medium text-lg mt-2">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
