"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, X, Send } from "lucide-react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const industriesList = [
  {
    id: 1,
    name: "Retail & E-commerce",
    desc: "Driving omnichannel growth and customer loyalty.",
    img: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=600",
    content: "The retail landscape is shifting dramatically. We help brands build seamless omnichannel experiences, optimize their supply chains, and leverage customer data to drive personalized loyalty programs that significantly increase lifetime value."
  },
  {
    id: 2,
    name: "Technology & Software",
    desc: "Accelerating market entry and user acquisition.",
    img: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=600",
    content: "From early-stage startups to established tech giants, we provide go-to-market strategies that accelerate user acquisition. We specialize in positioning SaaS products, structuring high-performing sales teams, and navigating complex enterprise procurement processes."
  },
  {
    id: 3,
    name: "Healthcare",
    desc: "Navigating compliance while scaling services.",
    img: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&q=80&w=600",
    content: "Scaling in healthcare requires a delicate balance of aggressive growth and strict regulatory compliance. We consult with healthcare providers, MedTech, and digital health platforms to expand their footprint without compromising patient care or data security."
  },
  {
    id: 4,
    name: "Education",
    desc: "Enhancing enrollment and institutional growth.",
    img: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&q=80&w=600",
    content: "Higher education and EdTech sectors face increasing competition. Our strategies focus on data-driven enrollment marketing, optimizing the student journey, and building robust alumni networks to ensure long-term institutional financial health."
  },
  {
    id: 5,
    name: "Banking & Finance",
    desc: "Building trust and acquiring high-net-worth clients.",
    img: "https://ebc-training.com/wp-content/uploads/2023/11/Banking-Insurance-and-Financial-Services.jpeg",
    content: "Trust is the currency of the financial sector. We help wealth management firms, retail banks, and fintech startups acquire high-net-worth clients through targeted account-based marketing, sophisticated branding, and superior client experience frameworks."
  },
  {
    id: 6,
    name: "Telecommunications",
    desc: "Expanding networks and reducing churn.",
    img: "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&q=80&w=600",
    content: "In a saturated market, retaining customers is just as crucial as acquiring new ones. We implement advanced predictive analytics to identify churn risks and design retention campaigns that keep telecom subscribers loyal in a highly competitive landscape."
  },
  {
    id: 7,
    name: "FMCG",
    desc: "Maximizing shelf-space and brand penetration.",
    img: "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&q=80&w=600",
    content: "Fast-Moving Consumer Goods demand rapid, agile marketing. We optimize distribution channels, refine brand messaging for instant shelf appeal, and create digital campaigns that drive both in-store and online purchasing behaviors."
  },
  {
    id: 8,
    name: "Real Estate",
    desc: "Optimizing sales funnels for premium properties.",
    img: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=600",
    content: "Selling premium real estate requires a white-glove approach. We build comprehensive sales funnels that qualify leads rigorously, ensuring your agents spend their time closing deals rather than chasing cold prospects."
  },
];

export function IndustriesClient() {
  const [selectedIndustry, setSelectedIndustry] = useState<typeof industriesList[0] | null>(null);

  return (
    <>
      <section className="py-24 container mx-auto px-4 md:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {industriesList.map((industry) => (
            <div
              key={industry.id}
              onClick={() => setSelectedIndustry(industry)}
              className="relative group rounded-3xl overflow-hidden aspect-[3/4] shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 cursor-pointer flex flex-col justify-end border border-white/10"
            >
              <img src={industry.img} alt={industry.name} className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/10 group-hover:from-black/95 group-hover:via-black/50 transition-colors duration-500" />

              <div className="relative z-10 p-6 flex flex-col gap-1 w-full translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                <h3 className="text-2xl font-bold font-heading text-white leading-tight mb-1">{industry.name}</h3>
                <p className="text-white/80 text-sm mb-5 line-clamp-2 opacity-90">{industry.desc}</p>

                <button className="flex items-center justify-between w-full bg-white/10 hover:bg-white/20 backdrop-blur-md text-white px-5 py-3.5 rounded-2xl transition-colors">
                  <span className="font-medium text-sm">Explore Now</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Industry Modal */}
      <AnimatePresence>
        {selectedIndustry && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 md:p-12 bg-black/60 backdrop-blur-sm overflow-y-auto"
            onClick={() => setSelectedIndustry(null)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="bg-card w-full max-w-2xl rounded-3xl overflow-hidden shadow-2xl relative my-auto border border-border flex flex-col max-h-[90vh]"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedIndustry(null)}
                className="absolute top-4 right-4 z-20 w-10 h-10 bg-black/20 hover:bg-black/40 backdrop-blur-md rounded-full flex items-center justify-center text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="w-full h-48 md:h-64 relative bg-muted flex-shrink-0">
                <img src={selectedIndustry.img} alt={selectedIndustry.name} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                <div className="absolute bottom-6 left-6 md:left-10 text-white">
                  <h2 className="text-3xl md:text-4xl font-bold font-heading leading-tight">{selectedIndustry.name}</h2>
                </div>
              </div>

              <div className="p-6 md:p-10 flex-1 overflow-y-auto">
                <div className="prose prose-lg dark:prose-invert max-w-none">
                  <p className="text-xl leading-relaxed mb-6 font-medium text-foreground/90">
                    {selectedIndustry.desc}
                  </p>
                  <p className="text-foreground/80 leading-relaxed whitespace-pre-wrap">
                    {selectedIndustry.content}
                  </p>
                </div>
              </div>

              {/* Modal Footer with Contact Button */}
              <div className="p-6 border-t border-border bg-muted/20 flex justify-end">
                <Link href="/contact">
                  <button className="flex items-center gap-3 bg-primary hover:bg-primary/90 text-primary-foreground font-bold h-14 px-8 rounded-full text-lg shadow-xl hover:-translate-y-1 transition-transform">
                    Consult With Us
                    <div className="bg-white/20 p-2 rounded-full">
                      <Send className="w-5 h-5" />
                    </div>
                  </button>
                </Link>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
