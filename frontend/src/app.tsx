import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Header } from "./components/header";
import { ProductInfo } from "./pages/product-info";
import { Checkout } from "./pages/checkout";
import { Home } from "./pages/home";
import { FilterContextProvider } from "./contexts/filter-context";

export function App() {
  return (
    <BrowserRouter>
      <FilterContextProvider>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="products/:id" element={<ProductInfo />} />
          <Route path="checkout" element={<Checkout />} />
        </Routes>
      </FilterContextProvider>
    </BrowserRouter>
  )
}
