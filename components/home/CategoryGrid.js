"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { CATEGORIES } from "@/lib/products";

export default function CategoryGrid() {
  return (
    <section className="py-20 md:py-28 bg-white border-y border-stone-200/60">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 md:mb-16 gap-6">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-gold-600 font-semibold mb-3">
              Curated Collections
            </p>
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-stone-900 tracking-tight">
              Explore By Category
            </h2>
          </div>
          <p className="text-stone-600 max-w-md text-sm md:text-base leading-relaxed">
            From ceremonial Kanchipuram bridal silks to featherlight contemporary organzas, each collection is hand-selected for timeless elegance.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {CATEGORIES.map((category) => (
            <Link
              key={category.id}
              href="/catalog"
              className="group relative overflow-hidden bg-stone-900 aspect-[3/4] block border border-stone-200/50 shadow-sm hover:shadow-xl transition-all duration-500"
            >
              {/* Background Image */}
              <img
                src={category.image}
                alt={category.title}
                className="w-full h-full object-cover opacity-80 group-hover:scale-110 group-hover:opacity-90 transition-all duration-700 ease-out"
              />
              
              {/* Luxury Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/40 to-transparent opacity-90 group-hover:opacity-85 transition-opacity" />

              {/* Inner Border Accent */}
              <div className="absolute inset-3 border border-white/20 group-hover:border-gold-400/50 transition-colors pointer-events-none" />

              {/* Content */}
              <div className="absolute inset-0 p-6 flex flex-col justify-end text-white">
                <span className="text-[11px] uppercase tracking-[0.25em] text-gold-400 font-medium mb-1">
                  {category.itemCount}
                </span>
                <h3 className="text-2xl font-serif font-bold text-white mb-2 group-hover:text-gold-300 transition-colors">
                  {category.title}
                </h3>
                <p className="text-xs text-stone-300 mb-4 line-clamp-2 font-light">
                  {category.subtitle}
                </p>

                <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-gold-400 font-medium group-hover:translate-x-1 transition-transform">
                  <span>View Details</span>
                  <ArrowRight size={14} />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
