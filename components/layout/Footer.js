import Link from "next/link";
import { Instagram, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-stone-900 text-stone-300 py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* Brand */}
        <div className="space-y-6">
          <div className="text-2xl font-serif font-bold text-white tracking-widest">
            MUKHI
            <span className="block text-xs font-sans tracking-wide text-gold-400">BOUTIQUE</span>
          </div>
          <p className="text-sm leading-relaxed max-w-xs text-stone-400">
            Defining elegance in Trivandrum. Exclusive designer wear for the modern bride and fashion enthusiast.
          </p>
        </div>

        {/* Links */}
        <div className="space-y-6">
          <h4 className="text-white text-sm uppercase tracking-widest">Explore</h4>
          <ul className="space-y-4 text-sm">
            <li><Link href="/catalog" className="hover:text-gold-400 transition-colors">Collections</Link></li>
            <li><Link href="/brand" className="hover:text-gold-400 transition-colors">Our Story</Link></li>
            <li><Link href="/contact" className="hover:text-gold-400 transition-colors">Book Appointment</Link></li>
          </ul>
        </div>

        {/* Contact */}
        <div className="space-y-6">
          <h4 className="text-white text-sm uppercase tracking-widest">Visit Us</h4>
          <div className="space-y-4 text-sm">
            <p className="flex items-start gap-4">
              <MapPin className="w-5 h-5 text-gold-400 shrink-0" />
              <span>
                TC 18/1079-1, Parambukonam,<br />
                Kowdiar, Thiruvananthapuram - 695003
              </span>
            </p>
            <p className="flex items-center gap-4">
              <Phone className="w-5 h-5 text-gold-400 shrink-0" />
              <span>+91 79945 66638 / +91 79075 16226</span>
            </p>
            <div className="pt-4">
              <a href="#" className="inline-block p-2 rounded-full border border-stone-700 hover:border-gold-400 hover:text-gold-400 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-6 mt-16 pt-8 border-t border-stone-800 text-xs text-stone-500 text-center">
        © {new Date().getFullYear()} Mukhi Boutique. All rights reserved.
      </div>
    </footer>
  );
}
