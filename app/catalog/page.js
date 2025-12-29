import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default function Catalog() {
  return (
    <main className="min-h-screen pt-24">
      <Navbar />
      <div className="max-w-7xl mx-auto px-6 py-12">
        <h1 className="text-4xl font-serif font-bold text-stone-900 mb-8">Latest Collections</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
           {/* Placeholder items */}
           {[1, 2, 3, 4, 5, 6].map((item) => (
             <div key={item} className="group cursor-pointer">
               <div className="aspect-[3/4] bg-stone-200 mb-4 overflow-hidden relative">
                 <img 
                    src="/images/saree.png" 
                    alt={`Designer Saree ${item}`} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                 />
                 <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500" />
               </div>
               <h3 className="text-lg font-serif">Designer Saree {item}</h3>
               <p className="text-stone-500 text-sm mb-3">₹ 15,000 - ₹ 25,000</p>
               <button className="text-xs uppercase tracking-widest border-b border-stone-900 pb-1 hover:text-gold-600 hover:border-gold-600 transition-colors">
                 Enquire on WhatsApp
               </button>
             </div>
           ))}
        </div>
      </div>
      <Footer />
    </main>
  );
}
