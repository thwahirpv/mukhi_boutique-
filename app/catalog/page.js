"use client";

import { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Star, MessageCircle, Eye, ArrowRight, Filter, Search } from "lucide-react";
import { PRODUCTS, formatPrice, getWhatsAppOrderLink } from "@/lib/products";

export default function Catalog() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const categories = [
    { id: "all", label: "All Collections" },
    { id: "Bridal Sarees", label: "Bridal Sarees" },
    { id: "Kanchipuram Silks", label: "Kanchipuram Silks" },
    { id: "Festive Wear", label: "Festive & Party" },
    { id: "Designer Wear", label: "Designer Wear" }
  ];

  const filteredProducts = PRODUCTS.filter((product) => {
    const matchesCategory =
      selectedCategory === "all" || product.category === selectedCategory;
    const matchesSearch =
      searchQuery.trim() === "" ||
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.shortDescription.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.category.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <main className="min-h-screen bg-stone-50 text-stone-900 pt-20">
      <Navbar />

      {/* Catalog Header Banner */}
      <section className="bg-stone-900 text-white py-16 md:py-20 border-b border-stone-800">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-gold-400 font-semibold mb-3">
            Handcrafted in Kowdiar
          </p>
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-white tracking-tight mb-4">
            Curated Collections
          </h1>
          <p className="text-stone-300 text-sm md:text-base max-w-2xl mx-auto font-light">
            Discover our full repository of pure silk sarees, bridal drapes, and bespoke creations. Select any piece to view full technical specifications or place your order directly via WhatsApp.
          </p>
        </div>
      </section>

      {/* Filter and Search Bar */}
      <section className="bg-white border-b border-stone-200/80 sticky top-20 z-30 shadow-xs">
        <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col md:flex-row md:items-center justify-between gap-4">
          {/* Category Filter Pills */}
          <div className="flex items-center gap-2 overflow-x-auto pb-1 md:pb-0 whitespace-nowrap">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2 text-xs uppercase tracking-wider font-semibold transition-all border ${
                  selectedCategory === cat.id
                    ? "bg-stone-900 text-white border-stone-900"
                    : "bg-stone-50 text-stone-600 border-stone-200 hover:border-gold-600 hover:text-gold-700"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-72">
            <Search size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-stone-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search sarees, silks..."
              className="w-full pl-10 pr-4 py-2 bg-stone-50 border border-stone-200 text-xs focus:outline-none focus:border-stone-900 transition-colors"
            />
          </div>
        </div>
      </section>

      {/* Product Grid */}
      <section className="max-w-7xl mx-auto px-6 py-12 md:py-16">
        <div className="flex items-center justify-between mb-8">
          <p className="text-xs uppercase tracking-wider text-stone-500 font-medium">
            Showing <strong className="text-stone-900">{filteredProducts.length}</strong> Masterpiece(s)
          </p>
          <span className="text-xs text-stone-400">
            Click any item for detailed specifications
          </span>
        </div>

        {filteredProducts.length === 0 ? (
          <div className="text-center py-24 bg-white border border-stone-200 p-8">
            <h3 className="font-serif text-2xl font-bold text-stone-900 mb-2">No Sarees Found</h3>
            <p className="text-xs text-stone-600 mb-6">We couldn't find any items matching your selected filters.</p>
            <button
              onClick={() => { setSelectedCategory("all"); setSearchQuery(""); }}
              className="px-6 py-2.5 bg-stone-900 text-white text-xs uppercase tracking-widest font-semibold hover:bg-gold-600 transition-colors"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="group bg-white border border-stone-200/80 overflow-hidden flex flex-col justify-between hover:border-stone-400/80 hover:shadow-xl transition-all duration-500"
              >
                {/* Image & Badges */}
                <div className="relative aspect-[3/4] bg-stone-100 overflow-hidden">
                  <Link href={`/product/${product.id}`} className="block w-full h-full">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                    <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors duration-500" />
                  </Link>

                  {/* Badges */}
                  <div className="absolute top-4 left-4 flex flex-col gap-2 z-10 pointer-events-none">
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

                  {/* Floating Action Overlay on Hover */}
                  <div className="absolute inset-x-4 bottom-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0 z-10">
                    <Link
                      href={`/product/${product.id}`}
                      className="flex-1 py-3 bg-white text-stone-900 text-xs uppercase tracking-wider font-semibold text-center hover:bg-stone-900 hover:text-white transition-colors shadow-md flex items-center justify-center gap-2"
                    >
                      <Eye size={14} />
                      <span>Specifications</span>
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
                      <span>Order</span>
                    </a>
                  </div>
                </div>

                {/* Details */}
                <div className="p-6 flex flex-col flex-grow justify-between">
                  <div>
                    <div className="flex items-center justify-between text-xs text-stone-500 mb-2">
                      <span className="uppercase tracking-widest text-[11px] text-gold-700 font-semibold">
                        {product.category}
                      </span>
                      <div className="flex items-center gap-1 text-stone-700">
                        <Star size={12} className="fill-amber-400 text-amber-400" />
                        <span className="font-semibold text-xs">{product.rating}</span>
                        <span className="text-stone-400 text-[11px]">({product.reviewCount})</span>
                      </div>
                    </div>

                    <Link href={`/product/${product.id}`}>
                      <h3 className="font-serif text-lg font-bold text-stone-900 group-hover:text-gold-700 transition-colors mb-2 line-clamp-1">
                        {product.name}
                      </h3>
                    </Link>

                    <p className="text-xs text-stone-600 line-clamp-2 leading-relaxed mb-4 font-light">
                      {product.shortDescription}
                    </p>

                    {/* Color Dots */}
                    <div className="flex items-center gap-2 mb-4">
                      <span className="text-[11px] text-stone-500 uppercase tracking-wider font-medium">
                        Shades:
                      </span>
                      <div className="flex items-center gap-1.5">
                        {product.colors.map((c, i) => (
                          <span
                            key={i}
                            title={c.name}
                            className="w-3 h-3 rounded-full border border-stone-300"
                            style={{ backgroundColor: c.hex }}
                          />
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Pricing & CTA */}
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
                      <span className="text-[10px] text-stone-500">
                        SKU: {product.sku}
                      </span>
                    </div>

                    <Link
                      href={`/product/${product.id}`}
                      className="text-xs uppercase tracking-widest font-semibold border-b border-stone-900 pb-0.5 text-stone-900 hover:text-gold-600 hover:border-gold-600 transition-colors flex items-center gap-1"
                    >
                      <span>View</span>
                      <ArrowRight size={12} />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      <Footer />
    </main>
  );
}
