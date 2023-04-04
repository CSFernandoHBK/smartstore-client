import { BrowserRouter, Route, Routes } from "react-router-dom"
import GlobalStyles from "./assets/styles/GlobalStyles"
import Home from "./pages/Home/Home"
import Landing from "./pages/Landing/Landing"
import OrderDetails from "./pages/Order/OrderDetails/OrderDetails"
import ProductDetails from "./pages/Product/ProductDetails/ProductDetails"
import ViewOrders from "./pages/Order/ViewOrders/ViewOrders"
import ViewAds from "./pages/Advertisement/ViewAds/ViewAds"

export default function App() {
  return(
    <>
      <GlobalStyles/>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing/>}/>
          <Route path="/product" element={<Home/>}/>
          <Route path="/product/:productId" element={<ProductDetails/>}/>
          <Route path="/order" element={<ViewOrders/>}/>
          <Route path="/order/:orderId" element={<OrderDetails/>}/>
          <Route path="/advertisement" element={<ViewAds/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
};
