import { useState } from "react";
import { toast } from "sonner";
import { ArrowRight } from "lucide-react";

export const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    if (!email.match(/^[^@\s]+@[^@\s]+\.[^@\s]+$/)) {
      toast.error("Vui lòng nhập email hợp lệ");
      return;
    }
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setEmail("");
      toast.success("Đăng ký thành công", {
        description: "Cảm ơn bạn đã đồng hành cùng niceshoe.",
      });
    }, 500);
  };

  return (
    <section
      data-testid="newsletter-section"
      className="relative py-20 md:py-32 bg-[#111111] text-white overflow-hidden"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="overline text-white/70 mb-4">niceshoe club</p>
        <h2 className="font-heading text-4xl md:text-6xl font-medium tracking-tighter leading-[1.05]">
          Nhận ưu đãi sớm <br />
          từ bộ sưu tập mới.
        </h2>
        <p className="text-white/70 mt-5 max-w-xl mx-auto text-base leading-relaxed">
          Đăng ký nhận tin để là người đầu tiên biết về sản phẩm giới hạn và mã
          giảm giá 10% cho đơn hàng đầu tiên.
        </p>

        <form
          onSubmit={onSubmit}
          className="mt-10 flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
        >
          <input
            type="email"
            placeholder="email@cuaban.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            data-testid="newsletter-input"
            className="flex-1 bg-transparent border-b border-white/40 text-white placeholder:text-white/40 px-1 py-3 focus:border-white focus:outline-none transition-colors"
          />
          <button
            type="submit"
            disabled={loading}
            data-testid="newsletter-submit"
            className="inline-flex items-center justify-center gap-2 bg-white text-[#111111] px-8 py-3 text-sm font-medium tracking-wide hover:bg-white/90 transition-colors disabled:opacity-60"
          >
            {loading ? "Đang gửi..." : "Đăng ký"}
            <ArrowRight className="w-4 h-4" strokeWidth={1.5} />
          </button>
        </form>
      </div>
    </section>
  );
};
