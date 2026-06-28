import { Truck, ShieldCheck, RefreshCcw, Award } from "lucide-react";

const ITEMS = [
  {
    icon: Truck,
    title: "Miễn phí vận chuyển",
    desc: "Cho mọi đơn hàng trên toàn quốc, giao trong 1–3 ngày làm việc.",
  },
  {
    icon: RefreshCcw,
    title: "Đổi trả 30 ngày",
    desc: "Đổi size hoặc hoàn tiền nếu sản phẩm chưa qua sử dụng.",
  },
  {
    icon: ShieldCheck,
    title: "Bảo hành chính hãng",
    desc: "Cam kết bảo hành đường keo, chỉ may suốt 12 tháng kể từ ngày mua.",
  },
  {
    icon: Award,
    title: "Da bò thật 100%",
    desc: "Nguồn da nhập khẩu, kiểm định chất lượng từng đôi trước khi giao.",
  },
];

export const USPs = () => {
  return (
    <section
      id="story"
      data-testid="usp-section"
      className="relative py-16 md:py-24 bg-[#F5F3F0] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-5">
            <p className="overline mb-3">Cam kết niceshoe</p>
            <h2 className="font-heading text-3xl md:text-5xl font-medium tracking-tighter text-[#111111] leading-tight">
              Chất lượng <br />
              <em className="font-light italic">không thoả hiệp.</em>
            </h2>
            <p className="text-[#666666] mt-5 text-base leading-relaxed max-w-md">
              Mỗi đôi giày niceshoe được hoàn thiện thủ công bởi nghệ nhân với
              hơn 15 năm kinh nghiệm. Chúng tôi tin vào sự tinh tế bền vững,
              không chạy theo xu hướng nhất thời.
            </p>
          </div>

          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-10">
            {ITEMS.map((it) => {
              const Icon = it.icon;
              return (
                <div
                  key={it.title}
                  data-testid={`usp-${it.title}`}
                  className="flex flex-col gap-3"
                >
                  <Icon
                    className="w-7 h-7 text-[#111111]"
                    strokeWidth={1.25}
                  />
                  <h3 className="font-heading text-lg font-medium text-[#111111]">
                    {it.title}
                  </h3>
                  <p className="text-sm text-[#666666] leading-relaxed">
                    {it.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
