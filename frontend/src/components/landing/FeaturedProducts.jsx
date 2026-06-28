import { useState, useMemo } from "react";
import { PRODUCTS, formatVND } from "../../data/catalog";
import { useCart } from "../../context/CartContext";
import { toast } from "sonner";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { Badge } from "../ui/badge";
import { Eye, Plus } from "lucide-react";
import { ProductQuickView } from "./ProductQuickView";

const FILTERS = [
  { key: "all", label: "Tất cả" },
  { key: "sneakers", label: "Sneakers" },
  { key: "leather", label: "Công sở" },
  { key: "fashion", label: "Thời trang nữ" },
];

const SORTS = [
  { key: "featured", label: "Nổi bật" },
  { key: "price-asc", label: "Giá: Thấp → Cao" },
  { key: "price-desc", label: "Giá: Cao → Thấp" },
  { key: "new", label: "Mới nhất" },
];

export const FeaturedProducts = () => {
  const { addItem } = useCart();
  const [filter, setFilter] = useState("all");
  const [sort, setSort] = useState("featured");
  const [quickView, setQuickView] = useState(null);

  const items = useMemo(() => {
    let arr = PRODUCTS.filter(
      (p) => filter === "all" || p.category === filter,
    );
    if (sort === "price-asc") arr = [...arr].sort((a, b) => a.price - b.price);
    if (sort === "price-desc") arr = [...arr].sort((a, b) => b.price - a.price);
    if (sort === "new")
      arr = [...arr].sort((a, b) => (a.badge === "Mới" ? -1 : 1));
    return arr;
  }, [filter, sort]);

  const handleAdd = (p) => {
    addItem(p, 40);
    toast.success("Đã thêm vào giỏ hàng", {
      description: `${p.name} · Size 40`,
    });
  };

  return (
    <section
      id="products"
      data-testid="featured-products"
      className="py-16 md:py-24 bg-[#FAFAFA]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div>
            <p className="overline mb-3">Bộ sưu tập</p>
            <h2 className="font-heading text-3xl md:text-5xl font-medium tracking-tighter text-[#111111]">
              Sản phẩm nổi bật
            </h2>
          </div>

          <div className="flex items-center gap-3">
            <Select value={sort} onValueChange={setSort}>
              <SelectTrigger
                data-testid="sort-select"
                className="w-[180px] rounded-none border-[#E5E5E5] border-x-0 border-t-0 border-b focus:ring-0"
              >
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {SORTS.map((s) => (
                  <SelectItem key={s.key} value={s.key}>
                    {s.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap gap-2 mb-8 border-b border-[#E5E5E5] pb-4">
          {FILTERS.map((f) => (
            <button
              key={f.key}
              data-testid={`filter-${f.key}`}
              onClick={() => setFilter(f.key)}
              className={`px-4 py-2 text-sm font-medium tracking-wide transition-all ${
                filter === f.key
                  ? "bg-[#111111] text-white"
                  : "bg-transparent text-[#666666] hover:text-[#111111]"
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* Product grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-10">
          {items.map((p) => (
            <article
              key={p.id}
              data-testid={`product-card-${p.id}`}
              className="group flex flex-col"
            >
              <div className="relative aspect-[4/5] bg-[#F5F3F0] overflow-hidden mb-4">
                <img
                  src={p.image}
                  alt={p.name}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1000ms] group-hover:scale-105"
                />
                {p.badge && (
                  <Badge
                    className={`absolute top-3 left-3 rounded-none font-medium tracking-wide text-[10px] uppercase ${
                      p.badge === "Giảm giá"
                        ? "bg-[#D32F2F] hover:bg-[#D32F2F] text-white"
                        : "bg-white hover:bg-white text-[#111111]"
                    }`}
                  >
                    {p.badge}
                  </Badge>
                )}

                {/* Hover actions */}
                <div className="absolute inset-x-3 bottom-3 flex gap-2 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                  <button
                    data-testid={`add-to-cart-${p.id}`}
                    onClick={() => handleAdd(p)}
                    className="flex-1 bg-[#111111] text-white text-xs font-medium tracking-wide py-3 hover:bg-black/80 transition-colors inline-flex items-center justify-center gap-2"
                  >
                    <Plus className="w-3.5 h-3.5" strokeWidth={2} />
                    Thêm vào giỏ
                  </button>
                  <button
                    data-testid={`quick-view-${p.id}`}
                    onClick={() => setQuickView(p)}
                    aria-label="Xem nhanh"
                    className="bg-white text-[#111111] py-3 px-3 hover:bg-white/90 transition-colors inline-flex items-center justify-center"
                  >
                    <Eye className="w-4 h-4" strokeWidth={1.5} />
                  </button>
                </div>
              </div>

              <div className="flex items-start justify-between gap-2">
                <div>
                  <h3 className="font-heading text-base md:text-lg font-medium text-[#111111] leading-tight">
                    {p.name}
                  </h3>
                  <p className="text-xs text-[#666666] mt-1 tracking-wide">
                    {p.colors.join(" · ")}
                  </p>
                </div>
                <div className="text-right shrink-0">
                  <p className="text-sm md:text-base font-medium text-[#111111]">
                    {formatVND(p.price)}
                  </p>
                  {p.oldPrice && (
                    <p className="text-xs text-[#666666] line-through">
                      {formatVND(p.oldPrice)}
                    </p>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>

        {items.length === 0 && (
          <div className="text-center py-16 text-[#666666] text-sm">
            Không có sản phẩm phù hợp.
          </div>
        )}
      </div>

      <ProductQuickView
        product={quickView}
        onClose={() => setQuickView(null)}
        onAdd={handleAdd}
      />
    </section>
  );
};
