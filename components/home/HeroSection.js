"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="relative h-screen min-h-[600px] flex items-center justify-center bg-stone-900 overflow-hidden">
      {/* Background Effect */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-stone-800 via-stone-900 to-stone-950 opacity-80" />
      
      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-gold-400 text-sm md:text-base uppercase tracking-[0.3em] mb-4"
        >
          Kowdiar, Trivandrum
        </motion.p>
        
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-white mb-6 tracking-wide"
        >
          MUKHI
          <span className="block text-2xl md:text-3xl font-light mt-2 tracking-widest text-stone-300">BOUTIQUE</span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-stone-300 text-lg md:text-xl max-w-xl mx-auto mb-10 font-light"
        >
          Where tradition meets contemporary elegance. Exclusive bridal wear, designer sarees, and customized fashion.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col md:flex-row gap-4 justify-center"
        >
          <Link 
            href="/catalog" 
            className="px-8 py-3 bg-gold-600 text-white font-medium uppercase tracking-wider hover:bg-gold-700 transition-colors"
          >
            View Collection
          </Link>
          <Link 
            href="/contact" 
            className="px-8 py-3 border border-stone-500 text-stone-300 font-medium uppercase tracking-wider hover:border-gold-400 hover:text-gold-400 transition-colors"
          >
            Book Appointment
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
