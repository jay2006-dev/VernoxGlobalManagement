"use client";

import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { useCallback, useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';
import { motion } from 'framer-motion';

const testimonials = [
  {
    quote: "Vornex Global completely transformed our sales acquisition process. Their team's dedication and strategic insight helped us double our market share in just 18 months.",
    author: "Sarah Jenkins",
    role: "VP of Sales, TechCorp",
    rating: 5
  },
  {
    quote: "The leadership development program provided by Vornex was exactly what our management team needed. It has fostered a culture of ownership and high performance.",
    author: "David Chen",
    role: "CEO, NexGen Innovations",
    rating: 5
  },
  {
    quote: "Exceptional consulting services. They don't just provide theoretical advice; they execute alongside your team to ensure the strategies actually deliver results.",
    author: "Elena Rodriguez",
    role: "Marketing Director, Global Retailers",
    rating: 5
  },
];

export function Testimonials() {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: "center" },
    [Autoplay({ delay: 3000, stopOnInteraction: false, stopOnMouseEnter: true })]
  );
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on('select', onSelect);
    emblaApi.on('reInit', onSelect);
  }, [emblaApi, onSelect]);

  return (
    <section className="py-32 bg-[#0B1F3A] relative overflow-hidden text-white">
      <div className="absolute top-10 left-10 md:left-20 text-white/5 pointer-events-none">
        <Quote className="w-64 h-64 md:w-96 md:h-96 rotate-180" />
      </div>

      <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div className="max-w-2xl">
            <span className="text-accent font-bold tracking-[0.2em] uppercase text-sm mb-4 block flex items-center gap-2">
              <span className="w-8 h-[2px] bg-accent" />
              Client Success
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading tracking-tight">
              Trusted by Leaders
            </h2>
          </div>
          <div className="flex gap-4">
            <button onClick={scrollPrev} className="w-14 h-14 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-[#0B1F3A] transition-all duration-300 backdrop-blur-md">
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button onClick={scrollNext} className="w-14 h-14 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-[#0B1F3A] transition-all duration-300 backdrop-blur-md">
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>

        <div className="relative max-w-6xl mx-auto">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="flex-[0_0_100%] min-w-0 pl-4 md:pl-8">
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="p-8 md:p-12 relative"
                  >
                    <div className="flex gap-1 mb-8">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-6 h-6 fill-accent text-accent" />
                      ))}
                    </div>
                    <blockquote className="text-2xl md:text-4xl lg:text-5xl font-heading font-bold leading-tight mb-12 text-white/90">
                      "{testimonial.quote}"
                    </blockquote>
                    <div className="flex items-center gap-6">
                      <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center font-bold text-white text-2xl backdrop-blur-md border border-white/20">
                        {testimonial.author.charAt(0)}
                      </div>
                      <div>
                        <div className="font-bold text-xl text-white">{testimonial.author}</div>
                        <div className="text-accent text-sm tracking-wider uppercase mt-1">{testimonial.role}</div>
                      </div>
                    </div>
                  </motion.div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
