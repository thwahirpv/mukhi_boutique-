import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { MapPin, Phone, Mail } from "lucide-react";

export default function Contact() {
  return (
    <main className="min-h-screen pt-24">
      <Navbar />
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-2 gap-16">
        <div>
          <h1 className="text-4xl font-serif font-bold text-stone-900 mb-6">Book an Appointment</h1>
          <p className="text-stone-600 mb-8">
            Visit our boutique in Kowdiar for a personalized consultation. 
            Please fill out the form below to request a slot.
          </p>
          
          <form className="space-y-8">
            <div className="grid grid-cols-1 gap-6">
               <div className="relative border-b border-stone-300 focus-within:border-gold-600 transition-colors">
                  <input type="text" className="w-full py-2 bg-transparent focus:outline-none placeholder-stone-400" placeholder="Your Name" />
               </div>
               <div className="relative border-b border-stone-300 focus-within:border-gold-600 transition-colors">
                  <input type="tel" className="w-full py-2 bg-transparent focus:outline-none placeholder-stone-400" placeholder="Phone Number" />
               </div>
               <div className="relative border-b border-stone-300 focus-within:border-gold-600 transition-colors">
                  <input type="date" className="w-full py-2 bg-transparent focus:outline-none placeholder-stone-400 text-stone-600" />
               </div>
               <div className="relative border-b border-stone-300 focus-within:border-gold-600 transition-colors">
                  <textarea className="w-full py-2 bg-transparent focus:outline-none placeholder-stone-400 h-24 resize-none" placeholder="I am interested in..." />
               </div>
            </div>
            <button className="w-full bg-stone-900 text-white py-4 uppercase tracking-widest hover:bg-gold-600 transition-colors duration-300">
              Request Appointment
            </button>
          </form>
        </div>
        
        <div className="bg-stone-50 p-8 h-fit border border-stone-100">
          <h3 className="text-xl font-serif font-bold mb-6">Store Details</h3>
          
          <div className="space-y-6 text-stone-600 text-sm">
             <div className="flex gap-4">
                <MapPin className="w-5 h-5 text-gold-600 shrink-0" />
                <p>
                  <strong>Mukhi Boutique</strong><br/>
                  TC 18/1079-1, Parambukonam,<br/>
                  Kowdiar, Thiruvananthapuram - 695003
                </p>
             </div>
             
             <div className="flex gap-4">
                <Phone className="w-5 h-5 text-gold-600 shrink-0" />
                <p>
                  +91 79945 66638<br/>
                  +91 79075 16226
                </p>
             </div>
          </div>

          <div className="aspect-video bg-stone-200 mt-8 flex items-center justify-center text-stone-400 text-xs tracking-widest uppercase">
              Google Maps Placeholder
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
