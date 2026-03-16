import { useState } from "react";
import { useWidth } from "../hooks/useWidth";
import Header from "./Header";
import Footer from "./Footer";
import CartPanel from "./CartPanel";

export default function Layout({
  children,
  cart,
  cartCount,
  onAddToCart,
  onUpdateQty,
  onRemove,
  wishlistCount,
}) {
  const vw = useWidth();
  const isMobile = vw < 640;
  const isTablet = vw >= 640 && vw < 1024;

  const [cartOpen, setCartOpen] = useState(false);

  return (
    <div className="min-h-screen bg-stone-100 flex flex-col">
      {/* Header */}
      <Header
        isMobile={isMobile}
        cartCount={cartCount}
        wishlistCount={wishlistCount}
        onCartOpen={() => setCartOpen(true)}
      />

      {/* Page content */}
      <main className="flex-1">{children}</main>

      {/* Footer */}
      <Footer isMobile={isMobile} isTablet={isTablet} />

      {/* Cart panel */}
      {cartOpen && (
        <CartPanel
          cart={cart}
          isMobile={isMobile}
          onClose={() => setCartOpen(false)}
          onUpdateQty={onUpdateQty}
          onRemove={onRemove}
        />
      )}
    </div>
  );
}
