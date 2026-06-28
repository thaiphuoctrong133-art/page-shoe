import { Instagram, Facebook, Youtube } from "lucide-react";

const COLS = [
  {
    title: "Mua sắm",
    links: ["Sneakers", "Giày công sở", "Thời trang nữ", "Bộ sưu tập mới"],
  },
  {
    title: "Hỗ trợ",
    links: ["Hướng dẫn chọn size", "Chính sách đổi trả", "Vận chuyển", "FAQ"],
  },
  {
    title: "niceshoe",
    links: ["Câu chuyện thương hiệu", "Cửa hàng", "Tuyển dụng", "Liên hệ"],
  },
];

export const Footer = () => {
  return (
    <footer
      data-testid="site-footer"
      className="bg-[#0E0E0E] text-white pt-20 pb-10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-16 border-b border-white/10">
          <div className="md:col-span-5">
            <p className="font-heading text-3xl font-medium tracking-tight">
              niceshoe<span className="text-[#D32F2F]">.</span>
            </p>
            <p className="text-white/60 mt-4 max-w-sm leading-relaxed text-sm">
              Thương hiệu giày Việt thủ công — tối giản, tinh tế, đề cao chất
              lượng vượt thời gian.
            </p>
            <div className="flex items-center gap-3 mt-6">
              {[Instagram, Facebook, Youtube].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  data-testid={`social-${i}`}
                  className="w-10 h-10 border border-white/20 flex items-center justify-center hover:bg-white hover:text-[#111111] transition-colors"
                  aria-label="social"
                >
                  <Icon className="w-4 h-4" strokeWidth={1.5} />
                </a>
              ))}
            </div>
          </div>

          {COLS.map((col) => (
            <div key={col.title} className="md:col-span-2">
              <p className="overline text-white/80 mb-4">{col.title}</p>
              <ul className="flex flex-col gap-2.5">
                {col.links.map((l) => (
                  <li key={l}>
                    <a
                      href="#"
                      className="text-sm text-white/70 hover:text-white transition-colors"
                    >
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className="md:col-span-1 text-right hidden md:block">
            <p className="overline text-white/80 mb-4">VN</p>
            <p className="text-xs text-white/50">Tiếng Việt</p>
          </div>
        </div>

        <div className="pt-8 flex flex-col md:flex-row gap-4 md:items-center md:justify-between text-xs text-white/50">
          <p>© {new Date().getFullYear()} niceshoe. Tất cả quyền được bảo lưu.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">
              Chính sách bảo mật
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Điều khoản
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Cookie
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
