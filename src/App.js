import { BrowserRouter as Router, Navigate, Route, Routes } from "react-router-dom"
import GlobalStyles from "./assets/styles/GlobalStyles"
import Landing from "./pages/Landing/Landing"
import OrderDetails from "./pages/Order/OrderDetails/OrderDetails"
import ProductDetails from "./pages/Product/ProductDetails/ProductDetails"
import ViewOrders from "./pages/Order/ViewOrders/ViewOrders"
import ViewAds from "./pages/Advertisement/ViewAds/ViewAds"
import ViewProducts from "./pages/Product/ViewProducts/ViewProducts"
import TopBar from "./components/TopBar"
import styled from "styled-components"
import SideBar from "./components/Sidebar/SideBar"
import CreateProduct from "./pages/Product/CreateProduct/CreateProduct"


export default function App() {
  return(
    <>
      <GlobalStyles/>
      <Router>
        <SideBar/>
        <Container>
          <TopBar/>
          <Content>
            <Routes>
              <Route path="/" element={<Landing/>}/>
              <Route path="/product" element={<ViewProducts/>}/>
              <Route path="product/:productId" element={<ProductDetails/>}/>
              <Route path="/product/new" element={<CreateProduct/>}/>
              <Route path="order" element={<ViewOrders/>}/>
              <Route path="/order/:orderId" element={<OrderDetails/>}/>
              <Route path="advertisement" element={<ViewAds/>}/>
            </Routes>  
          </Content>
        </Container>
      </Router>
    </>
  )
};

function ProtectedRouteGuard({ children }) {
  const token = JSON.parse(localStorage.getItem("token"));

  if (!token) {
    return <Navigate to="/sign-in" />;
  }

  return <>
    {children}
  </>;
}

const Content = styled.div`
  padding-top: 100px;
  padding-left: 200px;
`

const Container = styled.div`

`