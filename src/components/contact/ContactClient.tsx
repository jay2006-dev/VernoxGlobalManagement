"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mailbox, ChevronRight, Send } from "lucide-react";

export function ContactClient() {
  const [showIntro, setShowIntro] = useState(true);
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    // Show the intro animation for 1.5 seconds before transitioning
    const timer = setTimeout(() => setShowIntro(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <AnimatePresence>
        {showIntro && (
          <motion.div
            key="intro-overlay"
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-background"
          >
            <motion.div
              layoutId="mailbox-icon"
              initial={{ scale: 0.2, rotate: -45, x: -300 }}
              animate={{ scale: 1.5, rotate: 0, x: 0 }}
              transition={{ type: "spring", stiffness: 100, damping: 15 }}
            >
              <Mailbox className="w-40 h-40 text-primary" strokeWidth={1} />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="pt-24 pb-12 bg-background min-h-screen">
        
        {/* Hero Banner Section */}
        <div className="container mx-auto px-4 md:px-6 lg:px-8 mb-16 md:mb-20 mt-4 relative z-10">
          <div className="w-full h-[250px] md:h-[450px] rounded-[2rem] overflow-hidden relative shadow-lg">
            <img 
              src="https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=2070&auto=format&fit=crop" 
              alt="Contacts Banner" 
              className="absolute inset-0 w-full h-full object-cover" 
            />
            <div className="absolute inset-0 bg-black/30" />
            
            <div className="absolute inset-0 p-6 md:p-16 flex flex-col justify-end md:justify-between">
              <div className="flex items-center gap-3 md:gap-4 mb-4 md:mb-0">
                 {!showIntro && (
                    <motion.div
                      layoutId="mailbox-icon"
                      transition={{ type: "spring", stiffness: 100, damping: 20 }}
                      className="text-white hidden md:block"
                    >
                      <Mailbox className="w-12 h-12" strokeWidth={2} />
                    </motion.div>
                  )}
                 <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold font-heading text-white tracking-tight">Contacts</h1>
              </div>
              <div className="self-end hidden md:block">
                <div className="bg-white/90 backdrop-blur-sm text-foreground px-6 py-2.5 rounded-full text-sm font-semibold tracking-wide">
                  Home / Contacts
                </div>
              </div>
            </div>
            
            {/* Outline vertical text */}
            <div className="absolute top-1/2 -translate-y-1/2 -right-16 origin-center -rotate-90 hidden lg:block opacity-70 pointer-events-none">
               <span className="text-8xl font-bold font-heading text-transparent" style={{ WebkitTextStroke: '1px rgba(255,255,255,0.8)' }}>
                 Contacts
               </span>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <section className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10 mb-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8">
            
            {/* Left Column: Details */}
            <div className="lg:col-span-7 space-y-12">
               <div>
                 <span className="text-xs font-bold tracking-wider text-muted-foreground uppercase block mb-4">/ get in touch /</span>
                 <h2 className="text-4xl md:text-5xl lg:text-[54px] font-bold font-heading leading-[1.1] mb-6 text-foreground max-w-2xl">
                   We are always ready to help you and answer your questions
                 </h2>
                 <p className="text-muted-foreground leading-relaxed max-w-md text-sm mt-8">
                   Define your goals and identify areas where we can add value to your business. We create strategic pathways to success.
                 </p>
               </div>
               
               <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-10 pt-4">
                 <div>
                   <h3 className="font-bold font-heading text-lg mb-3">Call Center</h3>
                   <div className="text-muted-foreground space-y-1 text-sm font-medium">
                     <p>800 109 975 20 34</p>
                     <p>+1 (555) 123-4567</p>
                   </div>
                 </div>
                 <div>
                   <h3 className="font-bold font-heading text-lg mb-3">Our Location</h3>
                   <div className="text-muted-foreground space-y-1 text-sm font-medium leading-relaxed">
                     <p>Admire Global Organisation<br/>3rd Floor, Above IFB Point,<br/>Pillar No. A894, Beside Bharat Petroleum,<br/>Moosapet, Hyderabad 500018</p>
                   </div>
                 </div>
                 <div>
                   <h3 className="font-bold font-heading text-lg mb-3">Email</h3>
                   <div className="text-muted-foreground space-y-1 text-sm font-medium">
                     <p>contact@vornexglobal.com</p>
                   </div>
                 </div>
                 <div>
                   <h3 className="font-bold font-heading text-lg mb-3">Social network</h3>
                   <div className="flex gap-4 text-muted-foreground font-semibold text-sm">
                     <a href="#" className="hover:text-primary transition-colors">f</a>
                     <a href="#" className="hover:text-primary transition-colors">X</a>
                     <a href="#" className="hover:text-primary transition-colors">in</a>
                     <a href="#" className="hover:text-primary transition-colors">yt</a>
                   </div>
                 </div>
               </div>
            </div>

            {/* Right Column: Form */}
            <div className="lg:col-span-5">
               <div className="bg-[#f7f8f9] dark:bg-slate-900/50 rounded-[2rem] p-10 md:p-12 h-full border border-gray-100 dark:border-gray-800">
                 <h3 className="text-2xl font-bold font-heading mb-3 text-foreground">Get in Touch</h3>
                 <p className="text-muted-foreground text-sm mb-12">Define your goals and identify areas where we can add value to your business</p>
                 
                 {isSubmitted ? (
                    <motion.div 
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="h-full flex flex-col items-center justify-center py-12 text-center space-y-4"
                    >
                      <div className="w-20 h-20 bg-green-100 dark:bg-green-900/40 rounded-full flex items-center justify-center mb-4">
                        <Send className="w-10 h-10 text-green-600 dark:text-green-400" />
                      </div>
                      <h3 className="text-2xl font-bold font-heading text-foreground">Thank you!</h3>
                      <p className="text-muted-foreground text-sm font-medium">Our team will approach you soon.</p>
                    </motion.div>
                 ) : (
                    <form className="space-y-8" onSubmit={(e) => { e.preventDefault(); setIsSubmitted(true); }}>
                       <input type="text" required placeholder="Full name" className="w-full bg-transparent border-b border-gray-300 dark:border-gray-700 pb-3 text-sm focus:outline-none focus:border-primary transition-colors placeholder:text-gray-400" />
                       <input type="email" required placeholder="Email" className="w-full bg-transparent border-b border-gray-300 dark:border-gray-700 pb-3 text-sm focus:outline-none focus:border-primary transition-colors placeholder:text-gray-400" />
                       <input type="text" required placeholder="Subject" className="w-full bg-transparent border-b border-gray-300 dark:border-gray-700 pb-3 text-sm focus:outline-none focus:border-primary transition-colors placeholder:text-gray-400" />
                       <textarea rows={3} required placeholder="Message" className="w-full bg-transparent border-b border-gray-300 dark:border-gray-700 pb-3 text-sm focus:outline-none focus:border-primary transition-colors resize-none placeholder:text-gray-400"></textarea>
                       
                       <div className="pt-6">
                         <button type="submit" className="bg-[#2A2A2A] hover:bg-black dark:bg-primary dark:hover:bg-primary/90 text-white rounded-full px-6 py-3 text-sm font-semibold flex items-center justify-center gap-2 transition-all duration-300 hover:shadow-lg">
                           <ChevronRight className="w-4 h-4" />
                           Send a message
                         </button>
                       </div>
                    </form>
                 )}
               </div>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10 mb-10">
          <div className="w-full h-[450px] rounded-[2rem] overflow-hidden bg-gray-200 border border-border grayscale hover:grayscale-0 transition-all duration-500 shadow-sm">
            <iframe 
              src="https://www.google.com/maps?q=Admire+Global+Organisation,+Moosapet,+Hyderabad&output=embed" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </section>

      </div>
    </>
  );
}
