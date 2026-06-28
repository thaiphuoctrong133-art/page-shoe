import { useState, useEffect } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "../ui/dialog";
import { Badge } from "../ui/badge";
import { formatVND } from "../../data/catalog";
import { ShoppingBag } from "lucide-react";

const SIZES = [38, 39, 40, 41, 42, 43];

export const ProductQuickView = ({ product, onClose, onAdd }) => {
  const [size, setSize] = useState(40);

  useEffect(() => {
    if (product) setSize(40);
  }, [product]);

  if (!product) return null;

  return (
    <Dialog open={!!product} onOpenChange={(o) => !o && onClose()}>
      <DialogContent
        data-testid="quick-view-dialog"
        className="max-w-3xl p-0 rounded-none border-none overflow-hidden"
      >
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="relative aspect-[4/5] bg-[#F5F3F0] overflow-hidden">
            <img
              src={product.image}
              alt={product.name}
              className="absolute inset-0 w-full h-full object-cover"
            />
            {product.badge && (
              <Badge className="absolute top-3 left-3 rounded-none bg-white hover:bg-white text-[#111111] font-medium tracking-wide text-[10px] uppercase">
                {product.badge}
              </Badge>
            )}
          </div>

          <div className="p-6 md:p-10 flex flex-col bg-white">
            <DialogHeader className="text-left mb-4">
              <p className="overline mb-2">niceshoe</p>
              <DialogTitle className="font-heading text-2xl md:text-3xl font-medium tracking-tight text-[#111111]">
                {product.name}
              </DialogTitle>
              <DialogDescription className="text-sm text-[#666666] mt-2">
                Da bò thật, lót êm memory foam. Thiết kế thủ công tại Sài Gòn.
              </DialogDescription>
            </DialogHeader>

            <div className="flex items-baseline gap-3 mb-6">
              <span className="text-2xl font-medium text-[#111111]">
                {formatVND(product.price)}
              </span>
              {product.oldPrice && (
                <span className="text-sm text-[#666666] line-through">
                  {formatVND(product.oldPrice)}
                </span>
              )}
            </div>

            <div className="mb-6">
              <p className="overline mb-3">Chọn size</p>
              <div className="grid grid-cols-6 gap-2">
                {SIZES.map((s) => (
                  <button
                    key={s}
                    data-testid={`size-${s}`}
                    onClick={() => setSize(s)}
                    className={`py-3 text-sm font-medium border transition-colors ${
                      size === s
                        ? "border-[#111111] bg-[#111111] text-white"
                        : "border-[#E5E5E5] text-[#111111] hover:border-[#111111]"
                    }`}
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>

            <div className="mt-auto flex flex-col gap-3">
              <button
                data-testid="quick-view-add-to-cart"
                onClick={() => {
                  onAdd({ ...product }, size);
                  onClose();
                }}
                className="w-full bg-[#111111] text-white py-4 text-sm font-medium tracking-wide hover:bg-black/80 transition-colors inline-flex items-center justify-center gap-2"
              >
                <ShoppingBag className="w-4 h-4" strokeWidth={1.5} />
                Thêm vào giỏ — Size {size}
              </button>
              <p className="text-xs text-[#666666] text-center tracking-wide">
                Miễn phí vận chuyển · Đổi trả 30 ngày · Bảo hành 1 năm
              </p>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
