import { CATEGORIES } from "../../data/catalog";
import { ArrowUpRight } from "lucide-react";

export const CategoryBento = () => {
  return (
    <section
      data-testid="category-bento"
      className="py-16 md:py-24 bg-[#FAFAFA]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-12">
          <div>
            <p className="overline mb-3">Khám phá</p>
            <h2 className="font-heading text-3xl md:text-5xl font-medium tracking-tighter text-[#111111]">
              Mỗi đôi giày, <br />
              một câu chuyện riêng.
            </h2>
          </div>
          <a
            href="#products"
            data-testid="category-view-all"
            className="hidden md:inline-flex items-center gap-2 text-sm font-medium text-[#111111] border-b border-[#111111] pb-1 hover:opacity-60 transition-opacity"
          >
            Xem tất cả
            <ArrowUpRight className="w-4 h-4" strokeWidth={1.5} />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {CATEGORIES.map((cat, idx) => (
            <a
              key={cat.key}
              id={`category-${cat.key}`}
              href={`#products`}
              data-testid={`category-${cat.key}`}
              className={`group relative block overflow-hidden bg-[#F5F3F0] ${
                idx === 0 ? "md:row-span-2 aspect-[3/4] md:aspect-auto" : "aspect-[4/5]"
              }`}
            >
              <img
                src={cat.image}
                alt={cat.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1200ms] group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
              <div className="relative h-full flex flex-col justify-end p-6 md:p-8 text-white">
                <p className="overline text-white/80 mb-2">{cat.subtitle}</p>
                <div className="flex items-end justify-between">
                  <h3 className="font-heading text-2xl md:text-4xl font-medium tracking-tight">
                    {cat.title}
                  </h3>
                  <ArrowUpRight
                    className="w-6 h-6 group-hover:rotate-45 transition-transform duration-500"
                    strokeWidth={1.25}
                  />
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};
