import { Instagram } from "lucide-react";
import { BOUTIQUE_INFO } from "@/lib/products";

export default function InstagramDiary() {
  const posts = [
    {
      image: "/images/saree.png",
      caption: "Pure Mulberry Kanchipuram with Korvai border #MukhiBride",
      likes: "1.2k"
    },
    {
      image: "/images/hero.png",
      caption: "Intricate gold zari weaves crafted for eternity #SlowFashion",
      likes: "940"
    },
    {
      image: "/images/interior.png",
      caption: "Inside our Kowdiar showroom: where timeless drapes await you",
      likes: "1.8k"
    },
    {
      image: "/images/saree.png",
      caption: "Featherlight tissue drapes for evening receptions #Couture",
      likes: "1.5k"
    }
  ];

  return (
    <section className="py-20 bg-stone-50 border-b border-stone-200/60">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between mb-12 gap-4">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-gold-600 font-semibold mb-2">
              Social Lookbook
            </p>
            <h2 className="text-3xl font-serif font-bold text-stone-900 tracking-tight">
              Follow Our Bridal Diary
            </h2>
          </div>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-semibold text-stone-900 hover:text-gold-600 transition-colors border-b border-stone-900 pb-1"
          >
            <Instagram size={16} />
            <span>{BOUTIQUE_INFO.instagram}</span>
          </a>
        </div>

        {/* 4-Item Lookbook Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {posts.map((post, idx) => (
            <div
              key={idx}
              className="group relative aspect-[3/4] bg-stone-200 overflow-hidden shadow-xs hover:shadow-lg transition-all duration-500"
            >
              <img
                src={post.image}
                alt={post.caption}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-stone-950/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-6 text-white">
                <div className="self-end">
                  <Instagram size={20} className="text-gold-400" />
                </div>
                <div>
                  <p className="text-xs text-stone-200 line-clamp-3 mb-2 font-light">
                    {post.caption}
                  </p>
                  <span className="text-[10px] uppercase tracking-wider text-gold-400 font-medium">
                    ♥ {post.likes} Loves
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
