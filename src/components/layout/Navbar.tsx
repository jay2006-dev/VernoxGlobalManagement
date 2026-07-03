"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Industries", href: "/industries" },
  { name: "Careers", href: "/careers" },
  { name: "Insights", href: "/insights" },
  { name: "Contact", href: "/contact" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-4 inset-x-4 md:inset-x-0 md:mx-auto md:w-[90%] max-w-7xl z-50 transition-all duration-300 rounded-full border border-white/40 shadow-[0_8px_30px_rgb(0,0,0,0.06)] backdrop-blur-xl bg-gradient-to-l from-blue-100/90 to-white/90 dark:from-blue-950/80 dark:to-slate-900/80 ${
        isScrolled
          ? "py-2 shadow-lg"
          : "py-3"
      }`}
    >
      <div className="w-full mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex items-center justify-between min-w-0">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <Image src="/logos/vornex_logo.png" alt="Vornex Global" width={160} height={45} className="h-8 md:h-10 w-auto max-w-[120px] md:max-w-[160px] rounded-full object-cover shrink-0" priority />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* CTA & Mobile Toggle */}
          <div className="flex items-center gap-4">
            <div className="hidden lg:block">
              <Link href="/contact">
                <Button className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-6">
                  Get Started
                </Button>
              </Link>
            </div>
            
            <button
              className="lg:hidden p-2 text-foreground"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="lg:hidden fixed top-[80px] left-4 right-4 bg-white/95 dark:bg-slate-900/95 backdrop-blur-2xl rounded-3xl border border-gray-200/50 shadow-2xl overflow-hidden z-40 max-h-[calc(100vh-100px)] overflow-y-auto"
          >
            <div className="px-6 py-8 flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-lg font-bold text-foreground hover:text-primary transition-colors p-3 rounded-xl hover:bg-muted/50 border border-transparent hover:border-border/50"
                >
                  {link.name}
                </Link>
              ))}
              <Link href="/contact" className="w-full mt-6" onClick={() => setIsMobileMenuOpen(false)}>
                <Button className="w-full bg-primary text-primary-foreground rounded-full h-14 text-lg font-bold shadow-lg">
                  Get Started
                </Button>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
