import { useState } from "react";
import {
  QueryClient,
  QueryClientProvider,
  useIsFetching,
} from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import AppLayout from "./layouts/AppLayout";
import ProductDetails from "./pages/ProductDetails";
import ShopProducts from "./pages/ProductGallery";
import WishList from "./components/wishlist/WishList";
import HomePage from "./components/home/HomePage";
import CategoryProducts from "./pages/CategoryProducts";
import Cart from "./components/cart/Cart";
import Checkout from "./components/cart/Checkout";
import Login from "./components/login/Login";
import UserProfile from "./components/login/UserProfile";
import ProtectedRoute from "./components/common/ProtectedRoute";
import Loader from "./components/common/Loader";
import OrderComplete from "./components/cart/OrderComplete";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <MainApp />
    </QueryClientProvider>
  );
}

function MainApp() {
  const isFetching = useIsFetching();
  const [visibleCount, setVisibleCount] = useState(12);

  return (
    <>
      {isFetching ? <Loader /> : null}
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
            <Route path="/cart" element={<Cart />} />
            <Route element={<ProtectedRoute />}>
              <Route path="/checkout" element={<Checkout />} />
            </Route>
            <Route path="/login" element={<Login />} />
            <Route path="/done" element={<OrderComplete />} />
            <Route path="/user" element={<UserProfile />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

// function App() {
//   const isFetching = useIsFetching();
//   const [visibleCount, setVisibleCount] = useState(12);
//   return (
//     <>
//       <QueryClientProvider client={queryClient}>
//         {isFetching ? <Loader /> : null}
//         <BrowserRouter>
//           <Routes>
//             <Route element={<AppLayout />}>
//               <Route index element={<HomePage />} />
//               <Route path="/:categoryName" element={<CategoryProducts />} />
//               <Route path="/product/:productId" element={<ProductDetails />} />
//               <Route
//                 path="/shop"
//                 element={
//                   <ShopProducts
//                     visibleCount={visibleCount}
//                     setVisibleCount={setVisibleCount}
//                   />
//                 }
//               />
//               <Route path="/wishlist" element={<WishList />} />
//               <Route path="/cart" element={<Cart />} />
//               <Route element={<ProtectedRoute />}>
//                 <Route path="/checkout" element={<Checkout />} />
//               </Route>
//               <Route path="/login" element={<Login />} />
//               <Route path="/user" element={<UserProfile />} />
//             </Route>
//           </Routes>
//         </BrowserRouter>
//       </QueryClientProvider>
//     </>
//   );
// }

export default App;
