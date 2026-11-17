import { Star, Quote } from "lucide-react";
import { TESTIMONIALS } from "@/lib/products";

export default function TestimonialsSection() {
  return (
    <section className="py-20 md:py-28 bg-white border-b border-stone-200/60">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-xs uppercase tracking-[0.3em] text-gold-600 font-semibold mb-3">
            Client Words
          </p>
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-stone-900 tracking-tight mb-4">
            Bridal Diaries & Stories
          </h2>
          <p className="text-stone-600 text-sm md:text-base leading-relaxed">
            From intimate ceremonies in Kerala to international destination weddings, discover how Mukhi Boutique brought bridal dreams to life.
          </p>
        </div>

        {/* Testimonials Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-stone-50 p-8 md:p-10 border border-stone-200/80 flex flex-col justify-between relative hover:border-gold-500/50 hover:shadow-lg transition-all duration-300"
            >
              {/* Subtle Quote Icon */}
              <Quote className="w-10 h-10 text-stone-200 absolute top-6 right-6 pointer-events-none" />

              <div>
                {/* 5-Star Rating */}
                <div className="flex items-center gap-1 mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      size={14}
                      className="fill-gold-500 text-gold-500"
                    />
                  ))}
                </div>

                {/* Quote Text */}
                <p className="text-stone-700 text-sm leading-relaxed italic mb-8 relative z-10 font-light">
                  "{testimonial.quote}"
                </p>
              </div>

              {/* Author & Outfit Meta */}
              <div className="pt-6 border-t border-stone-200/80">
                <p className="font-serif font-bold text-stone-900 text-base">
                  {testimonial.author}
                </p>
                <p className="text-xs text-stone-500 mt-0.5">
                  {testimonial.role} • {testimonial.city}
                </p>
                <div className="mt-3 inline-block px-2.5 py-1 bg-white border border-stone-200 text-[11px] text-gold-700 font-medium">
                  {testimonial.outfit}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
