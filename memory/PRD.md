# niceshoe — PRD

## Original Problem Statement
> Build a landing page: thiết kế cho tôi một trang bán hàng giày

## User Choices (Dec 2025)
- Loại giày: Đa dạng (sneakers, công sở, thời trang nữ)
- Phong cách: Hiện đại, tối giản
- Brand name: **niceshoe**
- Tính năng: Landing page tĩnh + giỏ hàng đơn giản (client-side)
- Ngôn ngữ: Tiếng Việt

## Architecture
- **Frontend**: React 19 + Tailwind + Shadcn UI + Sonner toasts + lucide-react icons
- **State**: CartContext (React Context + localStorage persist via key `niceshoe_cart_v1`)
- **Backend**: Unchanged template (FastAPI + MongoDB). No backend endpoints required — cart is fully client-side.
- **Fonts**: Outfit (heading) + Manrope (body), loaded from Google Fonts via `public/index.html`
- **Design system**: light theme — `#FAFAFA` background, `#111111` text, `#F5F3F0` alt sections, no rounded corners, no shadows on product cards. Editorial minimalism.

## User Personas
1. Khách hàng cá nhân muốn mua giày chất lượng — duyệt theo loại, xem nhanh, thêm vào giỏ.
2. Khách hàng đang cân nhắc thương hiệu — đọc câu chuyện, testimonials, đăng ký newsletter để nhận ưu đãi.

## Core Requirements (Static)
- Header sticky với logo + nav + cart badge
- Hero editorial + marquee thông báo
- Bento category grid (3 nhóm: Sneakers / Công sở / Thời trang nữ)
- Featured products (8 sản phẩm, filter + sort)
- Quick view dialog (Shadcn Dialog) với size selector
- Cart Sheet (Shadcn Sheet) — qty +/-, remove, total
- USPs (Truck, RefreshCcw, ShieldCheck, Award)
- Testimonials grid
- Newsletter signup (mocked, sonner toast)
- Footer với social + columns

## What's Been Implemented (2025-12)
- ✅ Full landing page with 8 sections, Vietnamese copy throughout
- ✅ 8 product cards with hover-reveal actions (add to cart, quick view)
- ✅ Client-side cart with localStorage persistence (lazy useState hydration)
- ✅ Sonner toasts (black square, bottom-right) for add-to-cart, newsletter
- ✅ Filter + sort on products
- ✅ Quick view dialog with size selector (38–43)
- ✅ Empty cart state + checkout placeholder toast
- ✅ Newsletter with `noValidate` and JS regex
- ✅ All interactive elements have `data-testid`
- ✅ Tested via testing_agent_v3 — 10/10 frontend scenarios pass

## Mocked / Placeholder
- **MOCKED**: "Thanh toán" button — shows toast, no real checkout
- **MOCKED**: Newsletter signup — simulates 500ms delay, not persisted

## Prioritized Backlog
### P0 (nice to have, deferred)
- Cửa hàng / store locator page
- Product detail page (route)

### P1
- Persist newsletter signup to backend (`POST /api/newsletter`)
- Real checkout flow (collect shipping info, save order in MongoDB)
- Add proper /api/products endpoint instead of static catalog
- Search functionality

### P2
- User accounts + wishlist
- Multi-language (EN/VN toggle)
- Stripe / cash-on-delivery integration
- Admin panel for inventory

## Next Action Items
- Phase 2: Wire newsletter + checkout to backend; persist orders in MongoDB
- Phase 3: Add product detail pages with routing
- Phase 4: Integrate real payment (Stripe / Razorpay / VNPay)
