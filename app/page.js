import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/home/HeroSection";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
      
      {/* Intro Section */}
      <section className="py-20 md:py-32 bg-stone-50">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-stone-900 mb-6">
            The Digital Showroom
          </h2>
          <p className="text-lg text-stone-600 leading-relaxed max-w-2xl mx-auto">
            Located in the heart of Kowdiar, Mukhi Boutique brings you a curated selection of sarees, gowns, and bespoke attire. 
            Experience the texture, color, and craftsmanship that defines our brand, now available for you to browse online.
          </p>
        </div>
      </section>

      <Footer />
    </main>
  );
}
