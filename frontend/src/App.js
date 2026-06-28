import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "sonner";
import { CartProvider } from "@/context/CartContext";
import { Header } from "@/components/landing/Header";
import { Hero } from "@/components/landing/Hero";
import { CategoryBento } from "@/components/landing/CategoryBento";
import { FeaturedProducts } from "@/components/landing/FeaturedProducts";
import { USPs } from "@/components/landing/USPs";
import { Testimonials } from "@/components/landing/Testimonials";
import { Newsletter } from "@/components/landing/Newsletter";
import { Footer } from "@/components/landing/Footer";
import { CartSheet } from "@/components/landing/CartSheet";

const Landing = () => {
  return (
    <div data-testid="landing-page" className="bg-[#FAFAFA] text-[#111111] font-body">
      <Header />
      <main>
        <Hero />
        <CategoryBento />
        <FeaturedProducts />
        <USPs />
        <Testimonials />
        <Newsletter />
      </main>
      <Footer />
      <CartSheet />
    </div>
  );
};

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
        </Routes>
      </BrowserRouter>
      <Toaster
        position="bottom-right"
        toastOptions={{
          style: {
            background: "#111111",
            color: "#FFFFFF",
            border: "none",
            borderRadius: "0",
            fontFamily: "Manrope, sans-serif",
          },
        }}
      />
    </CartProvider>
  );
}

export default App;
