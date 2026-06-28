import { ArrowRight } from "lucide-react";

export const Hero = () => {
  return (
    <section
      id="top"
      data-testid="hero-section"
      className="relative min-h-[92vh] flex items-end overflow-hidden bg-[#F5F3F0]"
    >
      {/* Image */}
      <div className="absolute inset-0">
        <img
          src="https://images.pexels.com/photos/11590235/pexels-photo-11590235.jpeg"
          alt="niceshoe hero"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent" />
      </div>

      {/* Top announcement */}
      <div className="absolute top-16 md:top-20 left-0 right-0 z-10 overflow-hidden border-y border-white/20 bg-black/20 backdrop-blur-sm">
        <div className="flex whitespace-nowrap animate-marquee py-2 text-white/90 text-xs tracking-[0.3em] uppercase">
          {Array.from({ length: 8 }).map((_, i) => (
            <span key={i} className="mx-8">
              Miễn phí vận chuyển toàn quốc · Đổi trả trong 30 ngày · Bảo hành chính hãng
            </span>
          ))}
        </div>
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 md:pb-24">
        <div className="max-w-3xl">
          <p
            className="overline text-white/90 mb-4 fade-up"
            style={{ animationDelay: "0.1s" }}
          >
            Bộ sưu tập Đông 2025
          </p>
          <h1
            className="font-heading text-white text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-[0.95] font-medium tracking-tighter fade-up"
            style={{ animationDelay: "0.25s" }}
          >
            Tối giản.
            <br />
            Tinh tế.
            <br />
            <em className="font-light italic text-white/90">Mỗi bước đi.</em>
          </h1>
          <p
            className="text-white/85 mt-6 max-w-xl text-base md:text-lg leading-relaxed fade-up"
            style={{ animationDelay: "0.4s" }}
          >
            niceshoe — thương hiệu giày Việt dành cho những ai trân trọng sự
            thanh lịch, chất lượng thủ công và cảm giác đi êm chân đến từng
            milimet.
          </p>

          <div
            className="mt-10 flex flex-col sm:flex-row gap-4 fade-up"
            style={{ animationDelay: "0.55s" }}
          >
            <a
              href="#products"
              data-testid="hero-cta-shop"
              className="inline-flex items-center justify-center gap-3 bg-white text-[#111111] px-8 py-4 text-sm font-medium tracking-wide hover:bg-white/90 transition-colors group"
            >
              Mua sắm ngay
              <ArrowRight
                className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                strokeWidth={1.5}
              />
            </a>
            <a
              href="#story"
              data-testid="hero-cta-story"
              className="inline-flex items-center justify-center gap-3 border border-white/60 text-white px-8 py-4 text-sm font-medium tracking-wide hover:bg-white/10 transition-colors"
            >
              Khám phá câu chuyện
            </a>
          </div>
        </div>
      </div>

      {/* Bottom right meta */}
      <div className="hidden md:flex absolute bottom-12 right-8 z-10 flex-col items-end text-white/85 text-xs tracking-widest">
        <span className="overline text-white/90">№ 001</span>
        <span className="mt-2">Hand-crafted · Sài Gòn</span>
      </div>
    </section>
  );
};
