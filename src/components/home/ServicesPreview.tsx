"use client";

import { motion, Variants } from "framer-motion";
import { ArrowRight, LineChart, Briefcase, Megaphone, Users, Trophy, Globe } from "lucide-react";

const services = [
  {
    title: "Sales Solutions",
    description: "Accelerate revenue growth with our data-driven sales strategies and execution.",
    icon: LineChart,
    className: "md:col-span-2 lg:col-span-2 bg-[#0B1F3A] text-white border-transparent hover:shadow-2xl hover:shadow-[#0B1F3A]/20"
  },
  {
    title: "Brand Promotion",
    description: "Elevate your market presence and build lasting brand authority.",
    icon: Megaphone,
    className: "md:col-span-1 lg:col-span-1 bg-white border-border hover:border-primary/50"
  },
  {
    title: "Business Consulting",
    description: "Transform your operations and scale efficiently with expert guidance.",
    icon: Briefcase,
    className: "md:col-span-1 lg:col-span-1 bg-white border-border hover:border-primary/50"
  },
  {
    title: "Customer Acquisition",
    description: "Attract and convert high-value clients through targeted campaigns.",
    icon: Users,
    className: "md:col-span-1 lg:col-span-1 bg-white border-border hover:border-primary/50"
  },
  {
    title: "Leadership Development",
    description: "Cultivate the next generation of executives and managers.",
    icon: Trophy,
    className: "md:col-span-2 lg:col-span-1 bg-accent text-[#0B1F3A] border-transparent hover:shadow-xl hover:shadow-accent/20"
  },
  {
    title: "Market Expansion",
    description: "Successfully enter new territories with localized market intelligence.",
    icon: Globe,
    className: "md:col-span-2 lg:col-span-3 bg-muted/30 border-border flex flex-col md:flex-row items-start md:items-center justify-between gap-6 hover:bg-muted/50"
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const itemVariants: Variants = {
  hidden: { opacity: 0, scale: 0.95, y: 20 },
  show: { opacity: 1, scale: 1, y: 0, transition: { type: "spring", stiffness: 300, damping: 24 } }
};

export function ServicesPreview() {
  return (
    <section className="py-32 bg-background relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] w-[30%] h-[50%] bg-primary/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-[-10%] left-[-5%] w-[30%] h-[50%] bg-accent/5 rounded-full blur-[100px]" />
      </div>

      <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10 max-w-7xl">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-2xl">
            <span className="text-accent font-bold tracking-[0.2em] uppercase text-sm mb-4 block flex items-center gap-2">
              <span className="w-8 h-[2px] bg-accent" />
              Our Expertise
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading text-foreground tracking-tight">
              Comprehensive Enterprise Solutions
            </h2>
          </div>
          <p className="text-lg text-muted-foreground max-w-md pb-2">
            We deliver tailored strategies and execution frameworks designed to propel Fortune 500 companies to new heights.
          </p>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-min"
        >
          {services.map((service, index) => {
            const isDark = service.className.includes("text-white") || service.className.includes("bg-[#0B1F3A]");
            const isWide = service.className.includes("md:flex-row");
            
            return (
              <motion.div 
                key={index} 
                variants={itemVariants} 
                className={`group relative p-8 rounded-3xl border transition-all duration-500 overflow-hidden ${service.className}`}
              >
                <div className={`relative z-10 ${isWide ? 'flex flex-col md:flex-row w-full justify-between items-start md:items-center gap-8' : 'flex flex-col h-full'}`}>
                  
                  <div className={`${isWide ? 'flex-shrink-0' : 'mb-8'}`}>
                    <div className={`w-14 h-14 rounded-2xl flex items-center justify-center transition-colors duration-300 ${
                      isDark ? 'bg-white/10 text-white group-hover:bg-accent group-hover:text-[#0B1F3A]' 
                      : service.className.includes("bg-accent") ? 'bg-[#0B1F3A]/10 text-[#0B1F3A] group-hover:bg-[#0B1F3A] group-hover:text-accent'
                      : 'bg-primary/5 text-primary group-hover:bg-primary group-hover:text-white'
                    }`}>
                      <service.icon className="w-7 h-7" />
                    </div>
                  </div>
                  
                  <div className={`${isWide ? 'flex-grow' : 'flex flex-col flex-grow'}`}>
                    <h3 className={`text-2xl font-bold font-heading mb-3 ${isWide ? 'mb-2' : ''}`}>
                      {service.title}
                    </h3>
                    <p className={`opacity-80 leading-relaxed ${isWide ? 'max-w-xl' : 'flex-grow mb-8'}`}>
                      {service.description}
                    </p>
                    
                    {!isWide && (
                      <div className={`flex items-center font-semibold text-sm tracking-wider uppercase mt-auto cursor-pointer ${
                        isDark ? 'text-accent group-hover:text-white' : 'text-primary group-hover:text-accent'
                      }`}>
                        Explore <ArrowRight className="ml-2 w-4 h-4 transform group-hover:translate-x-2 transition-transform duration-300" />
                      </div>
                    )}
                  </div>
                  
                  {isWide && (
                    <div className="flex-shrink-0">
                      <div className="w-14 h-14 rounded-full bg-white border border-border flex items-center justify-center cursor-pointer group-hover:bg-primary group-hover:text-white group-hover:border-primary transition-all duration-300 shadow-sm">
                        <ArrowRight className="w-6 h-6 transform group-hover:-rotate-45 transition-transform duration-300" />
                      </div>
                    </div>
                  )}

                </div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  );
}
