import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
} from "../ui/sheet";
import { useCart } from "../../context/CartContext";
import { formatVND } from "../../data/catalog";
import { Minus, Plus, Trash2, ShoppingBag, ArrowRight } from "lucide-react";
import { toast } from "sonner";

export const CartSheet = () => {
  const { items, isOpen, setIsOpen, updateQty, removeItem, total, clear } =
    useCart();

  const handleCheckout = () => {
    toast.info("Tính năng thanh toán đang được phát triển", {
      description: "Bạn sẽ sớm có thể đặt hàng trực tiếp tại đây.",
    });
  };

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetContent
        data-testid="cart-sheet"
        side="right"
        className="w-full sm:max-w-md bg-white p-0 flex flex-col"
      >
        <SheetHeader className="p-6 border-b border-[#E5E5E5] text-left">
          <SheetTitle className="font-heading text-2xl font-medium tracking-tight flex items-center gap-2">
            <ShoppingBag className="w-5 h-5" strokeWidth={1.5} />
            Giỏ hàng
          </SheetTitle>
          <SheetDescription className="text-sm text-[#666666]">
            {items.length === 0
              ? "Giỏ hàng của bạn đang trống."
              : `${items.length} sản phẩm trong giỏ`}
          </SheetDescription>
        </SheetHeader>

        {/* Items */}
        <div className="flex-1 overflow-y-auto">
          {items.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center p-8 gap-4">
              <div className="w-16 h-16 bg-[#F5F3F0] flex items-center justify-center">
                <ShoppingBag
                  className="w-7 h-7 text-[#666666]"
                  strokeWidth={1.25}
                />
              </div>
              <div>
                <p className="font-heading text-lg font-medium text-[#111111]">
                  Chưa có gì ở đây
                </p>
                <p className="text-sm text-[#666666] mt-1">
                  Khám phá bộ sưu tập và chọn đôi giày yêu thích.
                </p>
              </div>
              <button
                data-testid="cart-empty-shop"
                onClick={() => setIsOpen(false)}
                className="mt-2 bg-[#111111] text-white px-6 py-3 text-sm font-medium tracking-wide hover:bg-black/80 transition-colors"
              >
                Tiếp tục mua sắm
              </button>
            </div>
          ) : (
            <ul className="divide-y divide-[#E5E5E5]">
              {items.map((it) => (
                <li
                  key={`${it.id}-${it.size}`}
                  data-testid={`cart-item-${it.id}-${it.size}`}
                  className="p-6 flex gap-4"
                >
                  <div className="w-20 h-24 bg-[#F5F3F0] overflow-hidden shrink-0">
                    <img
                      src={it.image}
                      alt={it.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1 flex flex-col">
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <p className="font-heading text-base font-medium text-[#111111] leading-tight">
                          {it.name}
                        </p>
                        <p className="text-xs text-[#666666] mt-1">
                          Size {it.size}
                        </p>
                      </div>
                      <button
                        onClick={() => removeItem(it.id, it.size)}
                        data-testid={`remove-${it.id}-${it.size}`}
                        aria-label="Xoá"
                        className="text-[#666666] hover:text-[#D32F2F] transition-colors"
                      >
                        <Trash2 className="w-4 h-4" strokeWidth={1.5} />
                      </button>
                    </div>

                    <div className="mt-auto flex items-center justify-between pt-3">
                      <div className="inline-flex items-center border border-[#E5E5E5]">
                        <button
                          onClick={() => updateQty(it.id, it.size, -1)}
                          data-testid={`qty-minus-${it.id}-${it.size}`}
                          className="w-8 h-8 inline-flex items-center justify-center hover:bg-[#F5F3F0] transition-colors"
                          aria-label="Giảm"
                        >
                          <Minus className="w-3 h-3" strokeWidth={2} />
                        </button>
                        <span
                          data-testid={`qty-value-${it.id}-${it.size}`}
                          className="w-8 text-center text-sm font-medium"
                        >
                          {it.qty}
                        </span>
                        <button
                          onClick={() => updateQty(it.id, it.size, 1)}
                          data-testid={`qty-plus-${it.id}-${it.size}`}
                          className="w-8 h-8 inline-flex items-center justify-center hover:bg-[#F5F3F0] transition-colors"
                          aria-label="Tăng"
                        >
                          <Plus className="w-3 h-3" strokeWidth={2} />
                        </button>
                      </div>
                      <p className="text-sm font-medium text-[#111111]">
                        {formatVND(it.price * it.qty)}
                      </p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="border-t border-[#E5E5E5] p-6 space-y-4">
            <div className="flex items-center justify-between text-sm">
              <span className="text-[#666666]">Tạm tính</span>
              <span className="font-medium text-[#111111]">
                {formatVND(total)}
              </span>
            </div>
            <div className="flex items-center justify-between text-sm">
              <span className="text-[#666666]">Vận chuyển</span>
              <span className="font-medium text-[#2E7D32]">Miễn phí</span>
            </div>
            <div className="flex items-center justify-between pt-3 border-t border-[#E5E5E5]">
              <span className="font-heading text-lg font-medium">
                Tổng cộng
              </span>
              <span
                data-testid="cart-total"
                className="font-heading text-xl font-medium"
              >
                {formatVND(total)}
              </span>
            </div>
            <button
              data-testid="cart-checkout"
              onClick={handleCheckout}
              className="w-full bg-[#111111] text-white py-4 text-sm font-medium tracking-wide hover:bg-black/80 transition-colors inline-flex items-center justify-center gap-2"
            >
              Thanh toán
              <ArrowRight className="w-4 h-4" strokeWidth={1.5} />
            </button>
            <button
              data-testid="cart-clear"
              onClick={clear}
              className="w-full text-xs text-[#666666] hover:text-[#111111] transition-colors"
            >
              Xoá toàn bộ giỏ hàng
            </button>
          </div>
        )}
      </SheetContent>
    </Sheet>
  );
};
