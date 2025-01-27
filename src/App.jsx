import { useState } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import AppLayout from "./layouts/AppLayout";
import ProductDetails from "./pages/ProductDetails";
import ShopProducts from "./pages/ProductGallery";
import WishList from "./components/wishlist/WishList";
import HomePage from "./components/home/HomePage";
import CategoryProducts from "./pages/CategoryProducts";

function App() {
  const queryClient = new QueryClient();
  const [visibleCount, setVisibleCount] = useState(12);
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Routes>
            <Route element={<AppLayout />}>
              <Route index element={<HomePage />} />
              <Route path="/:categoryName" element={<CategoryProducts />} />
              <Route path="/product/:productId" element={<ProductDetails />} />
              <Route
                path="/shop"
                element={
                  <ShopProducts
                    visibleCount={visibleCount}
                    setVisibleCount={setVisibleCount}
                  />
                }
              />
              <Route path="/wishlist" element={<WishList />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </QueryClientProvider>
    </>
  );
}

export default App;
