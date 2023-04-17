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
import ViewFinance from "./pages/Finance/ViewFinance/ViewFinance"
import ViewSells from "./pages/Sell/ViewSells/ViewSells"
import NewSell from "./pages/Sell/NewSell/NewSell"
import NewOrder from "./pages/Order/CreateOrder/CreateOrder"
import NotFound from "./pages/NotFound/NotFound"
import "./assets/styles/styles.css"
import Contact from "./pages/Contact/Contact"


export default function App() {
  const token = JSON.parse(localStorage.getItem("token"));

  return(
    <>
      <GlobalStyles/>
      <Router>
        <Routes>
          <Route path="/" element={<Landing/>}/>
          <Route path="/contact" element={<Contact/>}/>
        </Routes>
      </Router>
    </>
  )

  /*if(token){
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
                <Route path="/product/:productId" element={<ProductDetails/>}/>
                <Route path="/product/new" element={<CreateProduct/>}/>
                <Route path="/order" element={<ViewOrders/>}/>
                <Route path="/order/:orderId" element={<OrderDetails/>}/>
                <Route path="/order/new" element={<NewOrder/>}/>
                <Route path="/finance" element={<ViewFinance/>}/>
                <Route path="/sell" element={<ViewSells/>}/>
                <Route path="/sell/new" element={<NewSell/>}/>
                <Route path="/advertisement" element={<ViewAds/>}/>
              </Routes>  
            </Content>
          </Container>
        </Router>
      </>
    )
  } else {
    return(
      <>
        <GlobalStyles/>
        <Router>
          <Routes>
            <Route path="/" element={<Landing/>}/>
          </Routes>
        </Router>
      </>
    )
  }*/
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
  padding-left: 230px;
  padding-right: 20px;
  padding-bottom: 20px;
`

const Container = styled.div`
  height: 100vh;
  background-color: #F5F5F5;
`