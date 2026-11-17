import Link from "next/link";
import { Check, Sparkles, Scissors, Award } from "lucide-react";

export default function CraftsmanshipSection() {
  const highlights = [
    {
      title: "Silk Mark Certified Weaves",
      desc: "Every bridal and handloom piece is authenticated with pure mulberry silk certification."
    },
    {
      title: "Master Korvai & Kadwa Weaving",
      desc: "Preserving ancient interlocking techniques where borders and pallus are woven seamlessly by hand."
    },
    {
      title: "In-House Couture Atelier",
      desc: "From bridal aari hand embroidery to made-to-measure blouse tailoring, finished in our Kowdiar studio."
    }
  ];

  return (
    <section className="py-20 md:py-32 bg-stone-900 text-stone-100 overflow-hidden relative">
      {/* Background Accent Gradients */}
      <div className="absolute -top-32 -right-32 w-96 h-96 bg-gold-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-gold-400/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Visual Showcase */}
          <div className="relative">
            <div className="relative aspect-[4/5] max-w-lg mx-auto overflow-hidden shadow-2xl border border-stone-800">
              <img
                src="/images/interior.png"
                alt="Mukhi Boutique Kowdiar Showroom Interior"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-transparent to-transparent" />
              
              {/* Inner Luxury Gold Line */}
              <div className="absolute inset-4 border border-gold-400/30 pointer-events-none" />

              {/* Floating Badge */}
              <div className="absolute bottom-8 left-8 right-8 bg-stone-950/90 backdrop-blur-md p-5 border border-stone-800">
                <p className="text-[11px] uppercase tracking-[0.25em] text-gold-400 font-semibold mb-1">
                  Kowdiar Atelier
                </p>
                <p className="font-serif text-lg text-white font-bold">
                  Bespoke Bridal Consultations & Showroom
                </p>
                <p className="text-xs text-stone-400 mt-1">
                  Thiruvananthapuram, Kerala
                </p>
              </div>
            </div>

            {/* Decorative Offset Square */}
            <div className="hidden sm:block absolute -top-4 -left-4 w-28 h-28 border border-gold-600/30 -z-10" />
            <div className="hidden sm:block absolute -bottom-4 -right-4 w-28 h-28 border border-gold-600/30 -z-10" />
          </div>

          {/* Narrative Content */}
          <div className="space-y-8">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-gold-400 font-semibold mb-3">
                The Art of Slow Fashion
              </p>
              <h2 className="text-3xl md:text-5xl font-serif font-bold text-white tracking-tight leading-tight mb-6">
                Where Sacred Tradition Meets Haute Couture
              </h2>
              <p className="text-stone-300 text-sm md:text-base leading-relaxed font-light">
                Mukhi Boutique was established with an uncompromising commitment: to honor the sublime art of Indian weaving while offering the modern bride contemporary bespoke craftsmanship. 
              </p>
              <p className="text-stone-400 text-sm md:text-base leading-relaxed font-light mt-4">
                We work directly with generational weaving clusters across Kanchipuram, Varanasi, and Kerala. Every saree you explore in our digital showroom is produced in limited artisanal runs, ensuring your wedding ensemble is truly singular.
              </p>
            </div>

            {/* Feature Bullets */}
            <div className="space-y-5 pt-2 border-t border-stone-800">
              {highlights.map((item, idx) => (
                <div key={idx} className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-gold-950/80 border border-gold-600/50 flex items-center justify-center shrink-0 mt-0.5">
                    <Check size={16} className="text-gold-400" />
                  </div>
                  <div>
                    <h4 className="text-sm uppercase tracking-wider font-semibold text-white">
                      {item.title}
                    </h4>
                    <p className="text-xs text-stone-400 mt-1 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Metrics Grid */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-stone-800 text-center">
              <div>
                <p className="text-2xl md:text-3xl font-serif font-bold text-gold-400">
                  1,200+
                </p>
                <p className="text-[11px] uppercase tracking-wider text-stone-400 mt-1">
                  Handlooms Woven
                </p>
              </div>
              <div>
                <p className="text-2xl md:text-3xl font-serif font-bold text-gold-400">
                  500+
                </p>
                <p className="text-[11px] uppercase tracking-wider text-stone-400 mt-1">
                  Bridal Drapes
                </p>
              </div>
              <div>
                <p className="text-2xl md:text-3xl font-serif font-bold text-gold-400">
                  100%
                </p>
                <p className="text-[11px] uppercase tracking-wider text-stone-400 mt-1">
                  Pure Silk Mark
                </p>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link
                href="/brand"
                className="px-8 py-3.5 bg-gold-600 text-white text-xs uppercase tracking-widest font-semibold hover:bg-gold-700 transition-colors text-center"
              >
                Discover Our Story
              </Link>
              <Link
                href="/contact"
                className="px-8 py-3.5 border border-stone-700 text-stone-300 text-xs uppercase tracking-widest font-semibold hover:border-gold-400 hover:text-gold-400 transition-colors text-center"
              >
                Book Studio Appointment
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
