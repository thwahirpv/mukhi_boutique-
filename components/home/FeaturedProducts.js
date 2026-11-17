"use client";

import { useState } from "react";
import Link from "next/link";
import { Star, MessageCircle, Eye, ArrowRight } from "lucide-react";
import { PRODUCTS, formatPrice, getWhatsAppOrderLink } from "@/lib/products";

export default function FeaturedProducts() {
  const [activeFilter, setActiveFilter] = useState("all");

  const filterTabs = [
    { id: "all", label: "All Masterpieces" },
    { id: "Bridal Sarees", label: "Bridal Collection" },
    { id: "Kanchipuram Silks", label: "Kanchipuram Weaves" },
    { id: "Festive Wear", label: "Festive & Party" }
  ];

  const filteredProducts = activeFilter === "all"
    ? PRODUCTS
    : PRODUCTS.filter((p) => p.category === activeFilter);

  return (
    <section className="py-20 md:py-32 bg-stone-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <p className="text-xs uppercase tracking-[0.3em] text-gold-600 font-semibold mb-3">
            Handpicked For You
          </p>
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-stone-900 mb-4 tracking-tight">
            Featured Masterpieces
          </h2>
          <p className="text-stone-600 text-sm md:text-base leading-relaxed">
            Each drape represents weeks of painstaking loom work, certified silk purity, and our signature boutique finish. Select your favorite to view detailed specifications or order directly via WhatsApp.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 md:gap-4 mb-14">
          {filterTabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveFilter(tab.id)}
              className={`px-5 py-2.5 text-xs uppercase tracking-widest font-medium transition-all duration-300 border ${
                activeFilter === tab.id
                  ? "bg-stone-900 text-white border-stone-900 shadow-sm"
                  : "bg-white text-stone-600 border-stone-200 hover:border-gold-600 hover:text-gold-700"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="group bg-white border border-stone-200/70 overflow-hidden flex flex-col justify-between hover:border-stone-400/80 hover:shadow-xl transition-all duration-500"
            >
              {/* Image Container */}
              <div className="relative aspect-[3/4] bg-stone-100 overflow-hidden">
                <Link href={`/product/${product.id}`} className="block w-full h-full">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  {/* Subtle vignette on hover */}
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-black/25 transition-colors duration-500" />
                </Link>

                {/* Badge Pills */}
                <div className="absolute top-4 left-4 flex flex-col gap-2 z-10">
                  {product.tag && (
                    <span className="bg-stone-900/90 backdrop-blur-sm text-gold-300 text-[10px] uppercase tracking-widest px-3 py-1 font-medium border border-stone-700">
                      {product.tag}
                    </span>
                  )}
                  {product.discountPercentage && (
                    <span className="bg-gold-600 text-white text-[10px] uppercase tracking-widest px-2.5 py-0.5 font-semibold w-fit">
                      {product.discountPercentage}% OFF
                    </span>
                  )}
                </div>

                {/* Floating Quick Action Overlay */}
                <div className="absolute inset-x-4 bottom-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0 z-10">
                  <Link
                    href={`/product/${product.id}`}
                    className="flex-1 py-3 bg-white text-stone-900 text-xs uppercase tracking-wider font-semibold text-center hover:bg-stone-900 hover:text-white transition-colors shadow-md flex items-center justify-center gap-2"
                  >
                    <Eye size={14} />
                    <span>View Specs</span>
                  </Link>
                  <a
                    href={getWhatsAppOrderLink({
                      product,
                      color: product.colors[0],
                      variation: product.variations[0],
                      quantity: 1
                    })}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-3 bg-emerald-700 text-white text-xs uppercase tracking-wider font-semibold text-center hover:bg-emerald-800 transition-colors shadow-md flex items-center justify-center gap-2"
                  >
                    <MessageCircle size={14} />
                    <span>WhatsApp</span>
                  </a>
                </div>
              </div>

              {/* Product Info */}
              <div className="p-6 flex flex-col flex-grow justify-between">
                <div>
                  {/* Category & Rating */}
                  <div className="flex items-center justify-between text-xs text-stone-500 mb-2">
                    <span className="uppercase tracking-widest text-[11px] text-gold-700 font-medium">
                      {product.category}
                    </span>
                    <div className="flex items-center gap-1 text-stone-700">
                      <Star size={12} className="fill-amber-400 text-amber-400" />
                      <span className="font-semibold text-xs">{product.rating}</span>
                      <span className="text-stone-400 text-[11px]">({product.reviewCount})</span>
                    </div>
                  </div>

                  {/* Title */}
                  <Link href={`/product/${product.id}`}>
                    <h3 className="font-serif text-lg font-bold text-stone-900 group-hover:text-gold-700 transition-colors mb-2 line-clamp-1">
                      {product.name}
                    </h3>
                  </Link>

                  {/* Short Description */}
                  <p className="text-xs text-stone-600 line-clamp-2 leading-relaxed mb-4">
                    {product.shortDescription}
                  </p>

                  {/* Available Color Swatches Preview */}
                  <div className="flex items-center gap-2 mb-4">
                    <span className="text-[11px] text-stone-500 uppercase tracking-wider font-medium">
                      Shades:
                    </span>
                    <div className="flex items-center gap-1.5">
                      {product.colors.map((color, idx) => (
                        <span
                          key={idx}
                          title={color.name}
                          className="w-3.5 h-3.5 rounded-full border border-stone-300 shadow-xs"
                          style={{ backgroundColor: color.hex }}
                        />
                      ))}
                    </div>
                  </div>
                </div>

                {/* Price and CTA row */}
                <div className="pt-4 border-t border-stone-100 flex items-center justify-between mt-auto">
                  <div className="flex flex-col">
                    <div className="flex items-baseline gap-2">
                      <span className="text-lg font-bold text-stone-900 font-sans">
                        {formatPrice(product.price)}
                      </span>
                      {product.originalPrice > product.price && (
                        <span className="text-xs text-stone-400 line-through">
                          {formatPrice(product.originalPrice)}
                        </span>
                      )}
                    </div>
                    <span className="text-[10px] text-emerald-700 uppercase tracking-wider font-medium">
                      In Stock • Ready to Dispatch
                    </span>
                  </div>

                  <Link
                    href={`/product/${product.id}`}
                    className="text-xs uppercase tracking-widest font-semibold border-b border-stone-900 pb-0.5 text-stone-900 hover:text-gold-600 hover:border-gold-600 transition-colors flex items-center gap-1"
                  >
                    <span>Details</span>
                    <ArrowRight size={12} />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All CTA */}
        <div className="text-center mt-16">
          <Link
            href="/catalog"
            className="inline-flex items-center gap-3 px-10 py-4 bg-stone-900 text-white text-xs uppercase tracking-[0.2em] font-semibold hover:bg-gold-600 transition-colors duration-300 shadow-sm"
          >
            <span>Explore Entire Collection</span>
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}
