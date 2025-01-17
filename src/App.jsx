import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import HeadPhones from "./ui/products/HeadPhones";
import MagSafe from "./ui/products/MagSafe";
import Cases from "./ui/products/Cases";
import Chargers from "./ui/products/Chargers";
import Cables from "./ui/products/Cables";
import PowerBank from "./ui/products/PowerBank";
import AppLayout from "./AppLayout";
import ScreenProtectors from "./ui/products/ScreenProtectors";
import ProductDetails from "./ui/products/ProductDetails";
import Home from "./ui/Home";
import CategoryPage from "./ui/products/CategoryPage";

function App() {
  const queryClient = new QueryClient();
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Routes>
            <Route element={<AppLayout />}>
              <Route index element={<Home />} />
              <Route path="/:categoryName" element={<CategoryPage />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </QueryClientProvider>
    </>
  );
}

export default App;
