import { Sparkles, Scissors, Truck, MessageCircle } from "lucide-react";
import { VALUE_PROPOSITIONS } from "@/lib/products";

export default function ValuePillars() {
  const iconMap = {
    Sparkles: Sparkles,
    Scissors: Scissors,
    Truck: Truck,
    MessageCircle: MessageCircle
  };

  return (
    <section className="py-16 md:py-20 bg-stone-100/70 border-b border-stone-200/60">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {VALUE_PROPOSITIONS.map((prop, idx) => {
            const Icon = iconMap[prop.icon] || Sparkles;
            return (
              <div
                key={idx}
                className="bg-white p-8 border border-stone-200/80 hover:border-gold-500/60 transition-all duration-300 hover:shadow-md flex flex-col items-start group"
              >
                <div className="w-12 h-12 rounded-none bg-stone-900 group-hover:bg-gold-600 transition-colors flex items-center justify-center mb-6 text-gold-400 group-hover:text-white">
                  <Icon size={22} />
                </div>
                <h3 className="font-serif text-lg font-bold text-stone-900 mb-2">
                  {prop.title}
                </h3>
                <p className="text-xs text-stone-600 leading-relaxed">
                  {prop.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
