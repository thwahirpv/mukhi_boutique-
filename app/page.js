import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/home/HeroSection";
import CategoryGrid from "@/components/home/CategoryGrid";
import FeaturedProducts from "@/components/home/FeaturedProducts";
import CraftsmanshipSection from "@/components/home/CraftsmanshipSection";
import ValuePillars from "@/components/home/ValuePillars";
import WhatsAppConciergeBanner from "@/components/home/WhatsAppConciergeBanner";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import InstagramDiary from "@/components/home/InstagramDiary";

export default function Home() {
  return (
    <main className="min-h-screen bg-stone-50 text-stone-900">
      <Navbar />
      
      {/* Existing Hero Section */}
      <HeroSection />
      
      {/* Existing Intro Section: The Digital Showroom */}
      <section className="py-20 md:py-28 bg-stone-50 border-b border-stone-200/60">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-gold-600 font-semibold mb-3">
            Welcome to Mukhi
          </p>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-stone-900 mb-6 tracking-tight">
            The Digital Showroom
          </h2>
          <div className="w-16 h-0.5 bg-gold-400 mx-auto mb-6" />
          <p className="text-base md:text-lg text-stone-600 leading-relaxed max-w-2xl mx-auto font-light">
            Located in the heart of Kowdiar, Mukhi Boutique brings you a curated selection of sarees, gowns, and bespoke attire. 
            Experience the texture, color, and craftsmanship that defines our brand, now available for you to browse online and order directly via WhatsApp.
          </p>
        </div>
      </section>

      {/* Value Propositions / Trust Highlights */}
      <ValuePillars />

      {/* Featured Collections / Categories */}
      <CategoryGrid />

      {/* Featured & Bestselling Products with Direct WhatsApp & Specs Links */}
      <FeaturedProducts />

      {/* Boutique Heritage & Craftsmanship */}
      <CraftsmanshipSection />

      {/* WhatsApp Personal Shopping & Concierge Banner */}
      <WhatsAppConciergeBanner />

      {/* Real Bridal Diaries & Testimonials */}
      <TestimonialsSection />

      {/* Social Lookbook Grid */}
      <InstagramDiary />

      {/* Existing Footer */}
      <Footer />
    </main>
  );
}
