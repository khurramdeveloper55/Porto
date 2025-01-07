import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
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

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route index element={<Navigate replace to="/" />} />
          <Route path="/magsafe" element={<MagSafe />} />
          <Route path="/screenprotectors" element={<ScreenProtectors />} />
          <Route path="/headphones" element={<HeadPhones />} />
          <Route path="/cases" element={<Cases />} />
          <Route path="/chargers" element={<Chargers />} />
          <Route path="/cables" element={<Cables />} />
          <Route path="/powerbank" element={<PowerBank />} />
          <Route path="/product" element={<ProductDetails />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
