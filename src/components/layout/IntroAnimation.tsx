"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function IntroAnimation() {
  const [show, setShow] = useState(true);

  useEffect(() => {
    // Hide the animation after 2.5 seconds
    const timer = setTimeout(() => {
      setShow(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-background"
        >
          <motion.h1
            initial={{ opacity: 0, scale: 0.9, filter: "blur(10px)" }}
            animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
            exit={{ 
              opacity: 0, 
              scale: 1.1, 
              filter: "blur(20px)",
              y: -50,
              transition: { duration: 1.2, ease: "easeIn" }
            }}
            transition={{ 
              duration: 1.5, 
              ease: "easeInOut"
            }}
            className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter text-foreground"
          >
            VORNEX
          </motion.h1>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
