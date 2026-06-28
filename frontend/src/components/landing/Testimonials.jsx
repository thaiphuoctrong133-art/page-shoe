import { TESTIMONIALS } from "../../data/catalog";
import { Quote, Star } from "lucide-react";

export const Testimonials = () => {
  return (
    <section
      data-testid="testimonials-section"
      className="py-16 md:py-24 bg-[#FAFAFA]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-12">
          <div>
            <p className="overline mb-3">Khách hàng yêu thích</p>
            <h2 className="font-heading text-3xl md:text-5xl font-medium tracking-tighter text-[#111111]">
              Lời từ những bước đi.
            </h2>
          </div>
          <div className="hidden md:flex items-center gap-2 text-sm text-[#666666]">
            <div className="flex gap-0.5">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  className="w-4 h-4 fill-[#111111] text-[#111111]"
                />
              ))}
            </div>
            <span className="font-medium text-[#111111]">4.9</span>
            <span>· 2.300+ đánh giá</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {TESTIMONIALS.map((t, i) => (
            <figure
              key={i}
              data-testid={`testimonial-${i}`}
              className="bg-white border border-[#E5E5E5] p-8 flex flex-col gap-6 hover:border-[#111111] transition-colors"
            >
              <Quote
                className="w-7 h-7 text-[#111111]/30"
                strokeWidth={1.5}
              />
              <blockquote className="font-heading text-lg md:text-xl leading-snug text-[#111111] tracking-tight">
                “{t.quote}”
              </blockquote>
              <figcaption className="mt-auto">
                <p className="text-sm font-medium text-[#111111]">{t.name}</p>
                <p className="text-xs text-[#666666] mt-1 tracking-wide">
                  {t.role}
                </p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
};
