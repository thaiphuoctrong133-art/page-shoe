// Static product catalog for niceshoe landing page (Vietnamese)
export const PRODUCTS = [
  {
    id: "p-001",
    name: "Sneaker Urban White",
    category: "sneakers",
    price: 1290000,
    oldPrice: 1590000,
    badge: "Bán chạy",
    image: "https://images.pexels.com/photos/5172731/pexels-photo-5172731.jpeg",
    colors: ["Trắng", "Be"],
  },
  {
    id: "p-002",
    name: "Oxford Classic Brown",
    category: "leather",
    price: 2190000,
    oldPrice: null,
    badge: "Mới",
    image: "https://images.unsplash.com/photo-1563434564528-8fdf5996e622",
    colors: ["Nâu"],
  },
  {
    id: "p-003",
    name: "Pump Pearl Heel",
    category: "fashion",
    price: 1690000,
    oldPrice: null,
    badge: null,
    image: "https://images.unsplash.com/photo-1623123627523-edd3cc6d13bb",
    colors: ["Trắng ngà"],
  },
  {
    id: "p-004",
    name: "Loafer Onyx Black",
    category: "leather",
    price: 1990000,
    oldPrice: 2290000,
    badge: "Giảm giá",
    image: "https://images.pexels.com/photos/37465528/pexels-photo-37465528.jpeg",
    colors: ["Đen"],
  },
  {
    id: "p-005",
    name: "Stiletto Soft Ivory",
    category: "fashion",
    price: 1890000,
    oldPrice: null,
    badge: "Mới",
    image: "https://images.unsplash.com/photo-1562687848-c1664eff566d",
    colors: ["Ngà"],
  },
  {
    id: "p-006",
    name: "Runner Daylight",
    category: "sneakers",
    price: 1490000,
    oldPrice: null,
    badge: null,
    image: "https://images.pexels.com/photos/11590235/pexels-photo-11590235.jpeg",
    colors: ["Trắng"],
  },
  {
    id: "p-007",
    name: "Derby Walnut",
    category: "leather",
    price: 2390000,
    oldPrice: null,
    badge: null,
    image: "https://images.unsplash.com/photo-1614252369475-531eba835eb1?q=80&w=1200&auto=format&fit=crop",
    colors: ["Nâu hạt dẻ"],
  },
  {
    id: "p-008",
    name: "Sneaker Court Cream",
    category: "sneakers",
    price: 1390000,
    oldPrice: 1590000,
    badge: "Bán chạy",
    image: "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?q=80&w=1200&auto=format&fit=crop",
    colors: ["Kem"],
  },
];

export const CATEGORIES = [
  {
    key: "sneakers",
    title: "Sneakers",
    subtitle: "Năng động — mỗi ngày",
    image: "https://images.pexels.com/photos/11590235/pexels-photo-11590235.jpeg",
  },
  {
    key: "leather",
    title: "Giày Công Sở",
    subtitle: "Lịch lãm — tinh tế",
    image: "https://images.pexels.com/photos/37465528/pexels-photo-37465528.jpeg",
  },
  {
    key: "fashion",
    title: "Thời Trang Nữ",
    subtitle: "Thanh thoát — kiêu sa",
    image: "https://images.unsplash.com/photo-1562687848-c1664eff566d",
  },
];

export const TESTIMONIALS = [
  {
    quote:
      "Thiết kế tinh tế, đi rất êm chân. Đôi loafer mình mang đi làm suốt tuần mà vẫn thoải mái.",
    name: "Nguyễn Minh Anh",
    role: "Khách hàng tại Hà Nội",
  },
  {
    quote:
      "Chất liệu da thật, đường may chỉn chu. Giao hàng nhanh, đóng gói cẩn thận đúng kiểu thương hiệu cao cấp.",
    name: "Trần Quốc Bảo",
    role: "Khách hàng tại TP. HCM",
  },
  {
    quote:
      "Mua sneaker niceshoe cho cả gia đình. Form đẹp, màu trắng giữ rất bền, đáng đồng tiền.",
    name: "Lê Thu Hà",
    role: "Khách hàng tại Đà Nẵng",
  },
];

export const formatVND = (n) =>
  new Intl.NumberFormat("vi-VN", {
    style: "currency",
    currency: "VND",
    maximumFractionDigits: 0,
  }).format(n);
