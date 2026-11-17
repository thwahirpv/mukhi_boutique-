"use client";

import { MessageCircle } from "lucide-react";
import { BOUTIQUE_INFO } from "@/lib/products";

export default function FloatingWhatsApp() {
  const defaultText = encodeURIComponent(
    "Hi Mukhi Boutique! I am browsing your online catalog and would like assistance with saree ordering and custom blouse stitching."
  );

  return (
    <aside aria-label="WhatsApp Concierge" className="fixed bottom-6 right-6 z-50 flex items-center group">
      {/* Floating Tooltip Pill */}
      <span className="hidden md:inline-block mr-3 px-3 py-1.5 bg-stone-900 text-white text-[11px] uppercase tracking-wider font-medium shadow-lg border border-stone-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
        Order & Chat on WhatsApp
      </span>

      {/* Floating Action Roundel */}
      <a
        href={`https://wa.me/${BOUTIQUE_INFO.whatsappNumber}?text=${defaultText}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with Mukhi Boutique on WhatsApp"
        className="w-14 h-14 bg-emerald-600 hover:bg-emerald-700 text-white rounded-full flex items-center justify-center shadow-2xl transition-all duration-300 hover:scale-110 active:scale-95 border-2 border-white/80"
      >
        <MessageCircle size={28} className="fill-white/20" />
      </a>
    </aside>
  );
}
