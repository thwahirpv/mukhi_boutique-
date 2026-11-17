import { MessageCircle, PhoneCall, ShieldCheck, Video, Clock } from "lucide-react";
import { BOUTIQUE_INFO } from "@/lib/products";

export default function WhatsAppConciergeBanner() {
  const defaultInquiry = encodeURIComponent(
    "Hi Mukhi Boutique! I am browsing your online catalog and would like personalized assistance with bridal sarees and custom stitching."
  );

  return (
    <section className="py-16 md:py-24 bg-stone-900 text-white relative overflow-hidden border-t border-stone-800">
      {/* Decorative Gold Accent Lines */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(214,169,87,0.1)_0%,transparent_70%)]" />

      <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-emerald-950/80 border border-emerald-500/40 text-emerald-300 text-xs uppercase tracking-widest font-semibold mb-6">
          <MessageCircle size={14} className="text-emerald-400" />
          <span>Direct WhatsApp Shopping Experience</span>
        </div>

        <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-6 tracking-tight leading-tight">
          Effortless Ordering & Live Styling Assistance
        </h2>

        <p className="text-stone-300 text-sm md:text-base leading-relaxed max-w-2xl mx-auto mb-10 font-light">
          No complicated checkouts or automated forms. Pick your saree, click <strong className="text-white font-medium">Order on WhatsApp</strong>, and finalize your blouse customizations, live video draping, and order confirmation directly with our head designer.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <a
            href={`https://wa.me/${BOUTIQUE_INFO.whatsappNumber}?text=${defaultInquiry}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-8 py-4 bg-emerald-700 hover:bg-emerald-800 text-white text-xs uppercase tracking-widest font-semibold transition-colors duration-300 flex items-center justify-center gap-3 shadow-lg"
          >
            <MessageCircle size={18} />
            <span>Chat on WhatsApp ({BOUTIQUE_INFO.primaryPhone})</span>
          </a>
          <a
            href={`tel:${BOUTIQUE_INFO.whatsappNumber}`}
            className="w-full sm:w-auto px-8 py-4 border border-stone-600 hover:border-gold-400 text-stone-300 hover:text-gold-400 text-xs uppercase tracking-widest font-semibold transition-colors duration-300 flex items-center justify-center gap-3"
          >
            <PhoneCall size={16} />
            <span>Direct Call Showroom</span>
          </a>
        </div>

        {/* Feature Pills */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-10 border-t border-stone-800 text-stone-400 text-xs">
          <div className="flex items-center justify-center gap-2.5">
            <Video size={16} className="text-gold-400 shrink-0" />
            <span>High-Def Video Draping on Request</span>
          </div>
          <div className="flex items-center justify-center gap-2.5">
            <Clock size={16} className="text-gold-400 shrink-0" />
            <span>Quick Stylist Response (10am - 8pm IST)</span>
          </div>
          <div className="flex items-center justify-center gap-2.5">
            <ShieldCheck size={16} className="text-gold-400 shrink-0" />
            <span>Secure UPI / Net Banking & Invoicing</span>
          </div>
        </div>
      </div>
    </section>
  );
}
