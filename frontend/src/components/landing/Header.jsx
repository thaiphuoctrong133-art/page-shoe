import { useState, useEffect } from "react";
import { Search, ShoppingBag, Menu, X } from "lucide-react";
import { useCart } from "../../context/CartContext";

const NAV = [
  { label: "Nam", href: "#category-leather" },
  { label: "Nữ", href: "#category-fashion" },
  { label: "Sneakers", href: "#category-sneakers" },
  { label: "Bộ sưu tập", href: "#products" },
  { label: "Câu chuyện", href: "#story" },
];

export const Header = () => {
  const { count, setIsOpen } = useCart();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      data-testid="site-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/85 backdrop-blur-md border-b border-black/5"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a
            href="#top"
            data-testid="logo-link"
            className="font-heading text-2xl md:text-3xl font-medium tracking-tight text-[#111111]"
          >
            niceshoe<span className="text-[#D32F2F]">.</span>
          </a>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-10">
            {NAV.map((n) => (
              <a
                key={n.label}
                href={n.href}
                data-testid={`nav-${n.label.toLowerCase().replace(/\s/g, "-")}`}
                className="text-sm font-medium text-[#111111] hover:text-[#666666] transition-colors tracking-wide"
              >
                {n.label}
              </a>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-2 md:gap-4">
            <button
              data-testid="search-button"
              className="p-2 hover:bg-black/5 transition-colors hidden sm:inline-flex"
              aria-label="Tìm kiếm"
            >
              <Search className="w-5 h-5 text-[#111111]" strokeWidth={1.5} />
            </button>

            <button
              data-testid="open-cart-button"
              onClick={() => setIsOpen(true)}
              className="relative p-2 hover:bg-black/5 transition-colors"
              aria-label="Giỏ hàng"
            >
              <ShoppingBag
                className="w-5 h-5 text-[#111111]"
                strokeWidth={1.5}
              />
              {count > 0 && (
                <span
                  data-testid="cart-count-badge"
                  className="absolute -top-0.5 -right-0.5 bg-[#111111] text-white text-[10px] font-bold w-5 h-5 flex items-center justify-center rounded-full"
                >
                  {count}
                </span>
              )}
            </button>

            <button
              data-testid="mobile-menu-toggle"
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden p-2 hover:bg-black/5 transition-colors"
              aria-label="Menu"
            >
              {mobileOpen ? (
                <X className="w-5 h-5" strokeWidth={1.5} />
              ) : (
                <Menu className="w-5 h-5" strokeWidth={1.5} />
              )}
            </button>
          </div>
        </div>

        {/* Mobile nav */}
        {mobileOpen && (
          <div
            data-testid="mobile-menu"
            className="lg:hidden border-t border-black/5 bg-white py-4"
          >
            <nav className="flex flex-col gap-3">
              {NAV.map((n) => (
                <a
                  key={n.label}
                  href={n.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-base font-medium text-[#111111] hover:text-[#666666] transition-colors py-1"
                >
                  {n.label}
                </a>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};
