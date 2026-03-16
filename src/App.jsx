import { Routes, Route } from "react-router-dom";
import { Check } from "lucide-react";
import { useCart } from "./hooks/useCart";
import HomePage from "./pages/HomePage";
import ProductPage from "./pages/ProductPage";

export default function App() {
  const { cart, toast, cartCount, addToCart, updateQty, removeItem } =
    useCart();

  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <HomePage
              cart={cart}
              cartCount={cartCount}
              onAddToCart={addToCart}
              onUpdateQty={updateQty}
              onRemove={removeItem}
            />
          }
        />
        <Route
          path="/product/:id"
          element={<ProductPage onAddToCart={addToCart} />}
        />
      </Routes>

      {/* Toast notification */}
      {toast && (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 bg-stone-950 text-stone-50 px-5 py-3 text-xs tracking-wide z-50 flex items-center gap-2.5 border border-amber-600 max-w-[calc(100vw-28px)]">
          <Check size={14} className="text-amber-600 shrink-0" />
          {toast}
        </div>
      )}
    </>
  );
}
