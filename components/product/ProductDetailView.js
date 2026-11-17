"use client";

import { useState } from "react";
import Link from "next/link";
import { 
  Star, 
  MessageCircle, 
  PhoneCall, 
  ShieldCheck, 
  Truck, 
  Scissors, 
  Sparkles, 
  Check, 
  ChevronRight, 
  Plus, 
  Minus, 
  Share2, 
  Heart,
  Video,
  Info,
  ExternalLink
} from "lucide-react";
import { formatPrice, getWhatsAppOrderLink, BOUTIQUE_INFO } from "@/lib/products";
import WhatsAppOrderModal from "./WhatsAppOrderModal";

export default function ProductDetailView({ product, relatedProducts = [] }) {
  // State for interactive options
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [selectedColor, setSelectedColor] = useState(product.colors?.[0] || null);
  const [selectedVariation, setSelectedVariation] = useState(product.variations?.[0] || null);
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState("specifications");
  const [copiedLink, setCopiedLink] = useState(false);
  const [isOrderModalOpen, setIsOrderModalOpen] = useState(false);

  // Price calculations
  const additionalPrice = selectedVariation?.additionalPrice || 0;
  const unitPrice = product.price + additionalPrice;
  const originalUnitPrice = product.originalPrice + additionalPrice;
  const totalPrice = unitPrice * quantity;
  const totalSavings = (originalUnitPrice - unitPrice) * quantity;

  // WhatsApp order URL
  const whatsAppOrderUrl = getWhatsAppOrderLink({
    product,
    color: selectedColor,
    variation: selectedVariation,
    quantity
  });

  // Direct video drape inquiry link
  const whatsAppInquiryUrl = `https://wa.me/${BOUTIQUE_INFO.whatsappNumber}?text=${encodeURIComponent(
    `Hi Mukhi Boutique! I am interested in "${product.name}" (${product.sku}). Could you please share a video walkthrough / drape video of this saree in ${selectedColor?.name || "current color"}?`
  )}`;

  const handleShare = () => {
    if (typeof window !== "undefined") {
      navigator.clipboard.writeText(window.location.href);
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 2000);
    }
  };

  const images = product.images && product.images.length > 0 
    ? product.images 
    : [product.image];

  return (
    <div className="bg-stone-50 min-h-screen py-10">
      <div className="max-w-7xl mx-auto px-6">
        {/* Breadcrumb Navigation */}
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs uppercase tracking-wider text-stone-500 mb-8 overflow-x-auto whitespace-nowrap">
          <Link href="/" className="hover:text-gold-600 transition-colors">Home</Link>
          <ChevronRight size={12} className="text-stone-400" />
          <Link href="/catalog" className="hover:text-gold-600 transition-colors">Collections</Link>
          <ChevronRight size={12} className="text-stone-400" />
          <span className="text-stone-400">{product.category}</span>
          <ChevronRight size={12} className="text-stone-400" />
          <span className="text-stone-900 font-semibold truncate max-w-xs">{product.name}</span>
        </nav>

        {/* Main Product Showcase Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* LEFT: Multi-image Gallery (7 cols on lg) */}
          <div className="lg:col-span-7 space-y-4">
            {/* Primary Featured Image */}
            <div className="relative aspect-[3/4] bg-stone-200 overflow-hidden border border-stone-200/80 shadow-md group">
              <img
                src={images[selectedImageIndex]}
                alt={`${product.name} - View ${selectedImageIndex + 1}`}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />

              {/* Badges Overlay */}
              <div className="absolute top-4 left-4 flex flex-col gap-2 z-10 pointer-events-none">
                {product.tag && (
                  <span className="bg-stone-900/90 backdrop-blur-sm text-gold-300 text-xs uppercase tracking-widest px-3 py-1 font-medium border border-stone-700">
                    {product.tag}
                  </span>
                )}
                {product.discountPercentage && (
                  <span className="bg-gold-600 text-white text-xs uppercase tracking-widest px-3 py-1 font-semibold w-fit">
                    {product.discountPercentage}% OFF
                  </span>
                )}
              </div>

              {/* Share & Wishlist Floating Buttons */}
              <div className="absolute top-4 right-4 flex flex-col gap-2 z-10">
                <button
                  onClick={handleShare}
                  aria-label="Share product"
                  title="Copy product link"
                  className="w-10 h-10 bg-white/90 backdrop-blur-sm hover:bg-stone-900 hover:text-white text-stone-800 flex items-center justify-center transition-colors shadow-sm"
                >
                  <Share2 size={16} />
                </button>
              </div>

              {/* Quick feedback for copied link */}
              {copiedLink && (
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-stone-900 text-white text-xs px-4 py-2 uppercase tracking-wider font-medium shadow-lg z-20">
                  Link copied to clipboard!
                </div>
              )}
            </div>

            {/* Thumbnail Selectors */}
            {images.length > 1 && (
              <div className="grid grid-cols-4 sm:grid-cols-5 gap-3">
                {images.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedImageIndex(idx)}
                    className={`relative aspect-[3/4] overflow-hidden border-2 transition-all ${
                      selectedImageIndex === idx 
                        ? "border-gold-600 shadow-md scale-95" 
                        : "border-stone-200 opacity-70 hover:opacity-100 hover:border-stone-400"
                    }`}
                  >
                    <img
                      src={img}
                      alt={`Thumbnail ${idx + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            )}

            {/* Live Drape Callout */}
            <div className="p-4 bg-gold-50/70 border border-gold-200/80 flex items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-gold-600 text-white flex items-center justify-center shrink-0">
                  <Video size={18} />
                </div>
                <div>
                  <p className="text-xs font-semibold text-stone-900 uppercase tracking-wider">
                    Want to see how this saree drapes?
                  </p>
                  <p className="text-xs text-stone-600">
                    Request an HD video walkthrough or live WhatsApp consultation with our Kowdiar showroom stylist.
                  </p>
                </div>
              </div>
              <a
                href={whatsAppInquiryUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="shrink-0 px-4 py-2 bg-stone-900 hover:bg-gold-600 text-white text-xs uppercase tracking-wider font-semibold transition-colors"
              >
                Request Video
              </a>
            </div>
          </div>

          {/* RIGHT: Product Specs, Selection & Order (5 cols on lg) */}
          <div className="lg:col-span-5 bg-white p-8 md:p-10 border border-stone-200/80 shadow-sm space-y-6">
            
            {/* Header: SKU, Title, Rating */}
            <div>
              <div className="flex items-center justify-between text-xs text-stone-500 mb-2">
                <span className="uppercase tracking-[0.2em] text-gold-700 font-semibold">
                  {product.category}
                </span>
                <span className="font-mono text-[11px] text-stone-400 tracking-wider">
                  SKU: {product.sku}
                </span>
              </div>

              <h1 className="font-serif text-2xl md:text-3xl font-bold text-stone-900 leading-tight mb-3">
                {product.name}
              </h1>

              {/* Star Rating & In-Stock indicator */}
              <div className="flex items-center gap-4 text-xs pb-4 border-b border-stone-100">
                <div className="flex items-center gap-1.5">
                  <div className="flex items-center text-amber-500">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={13} className="fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <span className="font-bold text-stone-800">{product.rating}</span>
                  <span className="text-stone-400">({product.reviewCount} Reviews)</span>
                </div>
                <span className="text-stone-300">•</span>
                <span className="text-emerald-700 font-semibold uppercase tracking-wider flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse" />
                  In Stock (Ready to Ship)
                </span>
              </div>
            </div>

            {/* Pricing Box */}
            <div className="p-4 bg-stone-50 border border-stone-200/70">
              <div className="flex items-baseline gap-3 mb-1">
                <span className="text-3xl font-bold font-sans text-stone-900">
                  {formatPrice(unitPrice)}
                </span>
                {originalUnitPrice > unitPrice && (
                  <span className="text-base text-stone-400 line-through">
                    {formatPrice(originalUnitPrice)}
                  </span>
                )}
                {product.discountPercentage && (
                  <span className="text-xs uppercase tracking-wider font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 border border-emerald-200">
                    Save {formatPrice(totalSavings)} ({product.discountPercentage}% OFF)
                  </span>
                )}
              </div>
              <p className="text-[11px] text-stone-500">
                Inclusive of all taxes • Free insured door delivery across India
              </p>
            </div>

            {/* Color Swatch Selection */}
            {product.colors && product.colors.length > 0 && (
              <div className="space-y-3 pt-2">
                <div className="flex items-center justify-between text-xs">
                  <span className="uppercase tracking-wider font-semibold text-stone-800">
                    Select Color / Shade:
                  </span>
                  <span className="text-gold-700 font-medium">
                    {selectedColor?.name || "Select an option"}
                  </span>
                </div>
                <div className="flex flex-wrap gap-3">
                  {product.colors.map((color, idx) => {
                    const isSelected = selectedColor?.name === color.name;
                    return (
                      <button
                        key={idx}
                        onClick={() => setSelectedColor(color)}
                        className={`group relative flex items-center gap-2 px-3 py-2 border text-xs transition-all ${
                          isSelected
                            ? "border-stone-900 bg-stone-50 font-semibold shadow-xs"
                            : "border-stone-200 hover:border-stone-400 text-stone-600"
                        }`}
                      >
                        <span
                          className="w-4 h-4 rounded-full border border-stone-300 shrink-0"
                          style={{ backgroundColor: color.hex }}
                        />
                        <span>{color.name}</span>
                        {isSelected && <Check size={12} className="text-gold-600 ml-1" />}
                      </button>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Blouse & Variation Selection */}
            {product.variations && product.variations.length > 0 && (
              <div className="space-y-3 pt-2">
                <div className="flex items-center justify-between text-xs">
                  <span className="uppercase tracking-wider font-semibold text-stone-800">
                    Blouse & Stitching Option:
                  </span>
                  <span className="text-[11px] text-stone-500">
                    Tailored in Kowdiar Atelier
                  </span>
                </div>
                <div className="space-y-2">
                  {product.variations.map((variation) => {
                    const isSelected = selectedVariation?.id === variation.id;
                    return (
                      <button
                        key={variation.id}
                        onClick={() => setSelectedVariation(variation)}
                        className={`w-full text-left p-3.5 border transition-all text-xs flex items-center justify-between ${
                          isSelected
                            ? "border-stone-900 bg-gold-50/50 font-semibold shadow-xs"
                            : "border-stone-200 hover:border-stone-400 text-stone-700"
                        }`}
                      >
                        <div className="flex items-center gap-2">
                          <span className={`w-3.5 h-3.5 rounded-full border flex items-center justify-center ${
                            isSelected ? "border-gold-600" : "border-stone-400"
                          }`}>
                            {isSelected && <span className="w-2 h-2 rounded-full bg-gold-600" />}
                          </span>
                          <span>{variation.label}</span>
                        </div>
                        {variation.additionalPrice > 0 ? (
                          <span className="text-gold-700 font-bold">
                            +{formatPrice(variation.additionalPrice)}
                          </span>
                        ) : (
                          <span className="text-stone-500 font-normal">Included</span>
                        )}
                      </button>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Quantity Selector & Live Order Calculation */}
            <div className="pt-2 flex items-center justify-between border-t border-stone-100">
              <span className="text-xs uppercase tracking-wider font-semibold text-stone-800">
                Quantity:
              </span>
              <div className="flex items-center border border-stone-300">
                <button
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                  disabled={quantity <= 1}
                  aria-label="Decrease quantity"
                  className="w-9 h-9 flex items-center justify-center text-stone-600 hover:bg-stone-100 disabled:opacity-40 disabled:hover:bg-transparent"
                >
                  <Minus size={14} />
                </button>
                <span className="w-10 text-center font-bold text-sm text-stone-900 font-sans">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity((q) => q + 1)}
                  aria-label="Increase quantity"
                  className="w-9 h-9 flex items-center justify-center text-stone-600 hover:bg-stone-100"
                >
                  <Plus size={14} />
                </button>
              </div>
            </div>

            {/* Total Order Summary Banner */}
            <div className="p-4 bg-stone-900 text-white flex items-center justify-between">
              <div>
                <p className="text-[11px] uppercase tracking-wider text-gold-400 font-medium">
                  Total Order Value
                </p>
                <p className="text-xs text-stone-300">
                  {quantity} item(s) • {selectedColor?.name || "Standard Shade"}
                </p>
              </div>
              <p className="text-2xl font-bold font-sans text-white">
                {formatPrice(totalPrice)}
              </p>
            </div>

            {/* Primary Action Buttons */}
            <div className="space-y-3 pt-2">
              {/* WhatsApp Buy Now / Order Button with Modal Experience */}
              <button
                type="button"
                onClick={() => setIsOrderModalOpen(true)}
                className="w-full py-4 bg-emerald-700 hover:bg-emerald-800 text-white text-xs uppercase tracking-[0.2em] font-semibold text-center shadow-lg transition-colors duration-300 flex items-center justify-center gap-3 cursor-pointer"
              >
                <MessageCircle size={18} />
                <span>Buy Now via WhatsApp</span>
              </button>

              {/* Instant 1-Click WhatsApp Direct Link Option */}
              <div className="text-center">
                <a
                  href={whatsAppOrderUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-[11px] text-stone-500 hover:text-emerald-700 transition-colors underline underline-offset-4"
                >
                  <ExternalLink size={11} />
                  <span>Direct 1-Click WhatsApp (Skip custom fields)</span>
                </a>
              </div>

              {/* Secondary Direct Inquiry / Video Consultation Button */}
              <a
                href={whatsAppInquiryUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 border border-stone-800 text-stone-900 hover:bg-stone-900 hover:text-white text-xs uppercase tracking-widest font-semibold text-center transition-colors duration-300 flex items-center justify-center gap-2"
              >
                <Video size={16} />
                <span>Request Live Drape Video</span>
              </a>

              {/* Direct Phone Consultation */}
              <div className="text-center pt-1">
                <a
                  href={`tel:${BOUTIQUE_INFO.whatsappNumber}`}
                  className="inline-flex items-center gap-1.5 text-xs text-stone-500 hover:text-gold-700 transition-colors"
                >
                  <PhoneCall size={12} />
                  <span>Prefer to speak? Call our Kowdiar studio: {BOUTIQUE_INFO.primaryPhone}</span>
                </a>
              </div>
            </div>

            {/* Trust Assurances */}
            <div className="grid grid-cols-2 gap-3 pt-4 border-t border-stone-100 text-xs text-stone-600">
              <div className="flex items-center gap-2">
                <Sparkles size={14} className="text-gold-600 shrink-0" />
                <span>100% Silk Mark Authenticated</span>
              </div>
              <div className="flex items-center gap-2">
                <Truck size={14} className="text-gold-600 shrink-0" />
                <span>Insured Global Delivery</span>
              </div>
              <div className="flex items-center gap-2">
                <Scissors size={14} className="text-gold-600 shrink-0" />
                <span>Custom Atelier Blouse Tailoring</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck size={14} className="text-gold-600 shrink-0" />
                <span>Secure Invoicing & Payment</span>
              </div>
            </div>
          </div>
        </div>

        {/* LOWER SECTION: Technical Specifications, Care, and Ordering Guide Tabs */}
        <div className="mt-16 md:mt-24 bg-white border border-stone-200/80 p-8 md:p-12">
          {/* Tab Navigation */}
          <div className="flex flex-wrap gap-4 md:gap-8 border-b border-stone-200 pb-4 mb-8">
            <button
              onClick={() => setActiveTab("specifications")}
              className={`text-xs uppercase tracking-widest font-semibold pb-2 transition-colors border-b-2 -mb-5 ${
                activeTab === "specifications"
                  ? "border-stone-900 text-stone-900 font-bold"
                  : "border-transparent text-stone-500 hover:text-gold-600"
              }`}
            >
              Fabric & Weave Specifications
            </button>
            <button
              onClick={() => setActiveTab("ordering-guide")}
              className={`text-xs uppercase tracking-widest font-semibold pb-2 transition-colors border-b-2 -mb-5 ${
                activeTab === "ordering-guide"
                  ? "border-stone-900 text-stone-900 font-bold"
                  : "border-transparent text-stone-500 hover:text-gold-600"
              }`}
            >
              How WhatsApp Ordering Works
            </button>
            <button
              onClick={() => setActiveTab("care")}
              className={`text-xs uppercase tracking-widest font-semibold pb-2 transition-colors border-b-2 -mb-5 ${
                activeTab === "care"
                  ? "border-stone-900 text-stone-900 font-bold"
                  : "border-transparent text-stone-500 hover:text-gold-600"
              }`}
            >
              Care & Maintenance
            </button>
          </div>

          {/* Tab 1: Full Specifications Table */}
          {activeTab === "specifications" && (
            <div className="space-y-6">
              <div className="max-w-3xl">
                <h3 className="font-serif text-xl font-bold text-stone-900 mb-2">
                  Artisanal Provenance & Weave Details
                </h3>
                <p className="text-xs text-stone-600 leading-relaxed">
                  {product.description}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4 pt-4 border-t border-stone-100">
                {product.specifications && Object.entries(product.specifications).map(([key, val], idx) => (
                  <div key={idx} className="flex items-baseline justify-between py-2 border-b border-stone-100 text-xs">
                    <span className="font-semibold text-stone-800 uppercase tracking-wider">
                      {key}
                    </span>
                    <span className="text-stone-600 text-right max-w-xs font-light">
                      {val}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Tab 2: How WhatsApp Ordering Works */}
          {activeTab === "ordering-guide" && (
            <div className="space-y-6">
              <div className="max-w-3xl mb-8">
                <h3 className="font-serif text-xl font-bold text-stone-900 mb-2">
                  Seamless Shopping — No Cart or Checkout Required
                </h3>
                <p className="text-xs text-stone-600 leading-relaxed">
                  We believe luxury bridal shopping should be personal, reassuring, and bespoke. Here is how your order is processed:
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="p-6 bg-stone-50 border border-stone-200">
                  <div className="w-8 h-8 rounded-full bg-stone-900 text-white flex items-center justify-center font-bold text-xs mb-4">
                    1
                  </div>
                  <h4 className="font-serif font-bold text-stone-900 mb-2">
                    Click "Buy Now on WhatsApp"
                  </h4>
                  <p className="text-xs text-stone-600 leading-relaxed">
                    Your selected color, blouse stitching option, and calculated price are instantly pre-filled into a WhatsApp message.
                  </p>
                </div>

                <div className="p-6 bg-stone-50 border border-stone-200">
                  <div className="w-8 h-8 rounded-full bg-stone-900 text-white flex items-center justify-center font-bold text-xs mb-4">
                    2
                  </div>
                  <h4 className="font-serif font-bold text-stone-900 mb-2">
                    Stylist Confirmation & Video
                  </h4>
                  <p className="text-xs text-stone-600 leading-relaxed">
                    Our Kowdiar boutique master stylist reviews your request, shares high-definition video walkthroughs, and confirms blouse measurements.
                  </p>
                </div>

                <div className="p-6 bg-stone-50 border border-stone-200">
                  <div className="w-8 h-8 rounded-full bg-stone-900 text-white flex items-center justify-center font-bold text-xs mb-4">
                    3
                  </div>
                  <h4 className="font-serif font-bold text-stone-900 mb-2">
                    Secure Payment & Insured Dispatch
                  </h4>
                  <p className="text-xs text-stone-600 leading-relaxed">
                    Complete your payment seamlessly via official UPI QR code or bank transfer. Your order is carefully steamed, packed, and shipped with live tracking.
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Tab 3: Care Instructions */}
          {activeTab === "care" && (
            <div className="space-y-6 max-w-3xl">
              <h3 className="font-serif text-xl font-bold text-stone-900 mb-2">
                Preserving Your Heirloom Silk Drape
              </h3>
              <p className="text-xs text-stone-600 leading-relaxed">
                Handcrafted pure silk sarees with genuine metallic zari are heirloom investments. Proper preservation ensures they retain their rich luster for generations:
              </p>
              <ul className="space-y-3 text-xs text-stone-600 list-disc pl-5 leading-relaxed">
                <li><strong>Storage:</strong> Wrap the saree in a clean, breathable unbleached muslin or pure cotton cloth. Never store in plastic covers which trap humidity.</li>
                <li><strong>Refolding:</strong> Periodically take out your pure silk sarees every 4 to 6 months and air them in the shade, changing the fold lines to prevent zari creases.</li>
                <li><strong>Dry Cleaning:</strong> Strictly dry clean only by a certified textile specialist. Avoid harsh detergents or water immersion.</li>
                <li><strong>Perfume & Sprays:</strong> Never spray perfumes, body mists, or deodorants directly on the zari or silk fabric as alcohol can cause tarnishing.</li>
              </ul>
            </div>
          )}
        </div>

        {/* RELATED MASTERPIECES */}
        {relatedProducts.length > 0 && (
          <div className="mt-20 md:mt-28">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-gold-600 font-semibold mb-2">
                  Complete Your Bridal Trousseau
                </p>
                <h2 className="text-2xl md:text-3xl font-serif font-bold text-stone-900 tracking-tight">
                  You May Also Adore
                </h2>
              </div>
              <Link
                href="/catalog"
                className="text-xs uppercase tracking-widest font-semibold border-b border-stone-900 pb-1 text-stone-900 hover:text-gold-600 hover:border-gold-600 transition-colors w-fit"
              >
                View Full Catalog
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {relatedProducts.map((rel) => (
                <div
                  key={rel.id}
                  className="group bg-white border border-stone-200/80 overflow-hidden hover:border-stone-400 hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
                >
                  <Link href={`/product/${rel.id}`} className="block relative aspect-[3/4] bg-stone-100 overflow-hidden">
                    <img
                      src={rel.image}
                      alt={rel.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    {rel.tag && (
                      <span className="absolute top-4 left-4 bg-stone-900/90 text-gold-300 text-[10px] uppercase tracking-widest px-3 py-1 font-medium">
                        {rel.tag}
                      </span>
                    )}
                  </Link>

                  <div className="p-6">
                    <p className="text-[11px] uppercase tracking-wider text-gold-700 font-semibold mb-1">
                      {rel.category}
                    </p>
                    <Link href={`/product/${rel.id}`}>
                      <h3 className="font-serif font-bold text-stone-900 hover:text-gold-600 transition-colors mb-2 line-clamp-1">
                        {rel.name}
                      </h3>
                    </Link>
                    <div className="flex items-baseline gap-2 mb-4">
                      <span className="font-bold text-stone-900 text-sm">
                        {formatPrice(rel.price)}
                      </span>
                      {rel.originalPrice > rel.price && (
                        <span className="text-xs text-stone-400 line-through">
                          {formatPrice(rel.originalPrice)}
                        </span>
                      )}
                    </div>
                    <Link
                      href={`/product/${rel.id}`}
                      className="block w-full py-2.5 bg-stone-900 text-white text-xs uppercase tracking-widest font-semibold text-center hover:bg-gold-600 transition-colors"
                    >
                      View Specifications
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Interactive WhatsApp Order Modal */}
        <WhatsAppOrderModal
          isOpen={isOrderModalOpen}
          onClose={() => setIsOrderModalOpen(false)}
          product={product}
          selectedColor={selectedColor}
          selectedVariation={selectedVariation}
          quantity={quantity}
          onQuantityChange={setQuantity}
        />
      </div>
    </div>
  );
}
