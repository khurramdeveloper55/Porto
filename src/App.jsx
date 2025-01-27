import { useState } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import AppLayout from "./AppLayout";
import Home from "./ui/Home";
import CategoryPage from "./ui/products/CategoryPage";
import ProductDetails from "./ui/products/ProductDetails";
import ShopProducts from "./ui/products/ShopProducts";
import WishList from "./ui/WishList";

function App() {
  const queryClient = new QueryClient();
  const [visibleCount, setVisibleCount] = useState(12);
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Routes>
            <Route element={<AppLayout />}>
              <Route index element={<Home />} />
              <Route path="/:categoryName" element={<CategoryPage />} />
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
