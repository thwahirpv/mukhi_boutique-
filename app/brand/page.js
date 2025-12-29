import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default function Brand() {
  return (
    <main className="min-h-screen pt-24">
      <Navbar />
      <div className="max-w-4xl mx-auto px-6 py-12">
        <h1 className="text-4xl font-serif font-bold text-stone-900 mb-8 text-center">Our Story</h1>
        <div className="prose prose-stone mx-auto text-center">
          <p className="text-lg leading-relaxed text-stone-600 mb-6">
            Mukhi Boutique was founded with a vision to bring high-fashion aesthetics to the traditional elegance of Trivandrum. 
            Located in the upscale neighborhood of Kowdiar, we have established ourselves as a destination for brides and fashion enthusiasts alike.
          </p>
          <div className="h-64 bg-stone-200 w-full my-8" />
          <p className="text-lg leading-relaxed text-stone-600 mb-6">
             Our philosophy is simple: every piece of clothing tells a story. From the hand-picked fabrics to the intricate embroidery, 
             we ensure that every garment we create is a masterpiece. We believe in the power of "slow fashion"—creating timeless pieces that are cherished for generations.
          </p>
        </div>
      </div>
      <Footer />
    </main>
  );
}
