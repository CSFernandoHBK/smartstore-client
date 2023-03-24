import { BrowserRouter, Route, Routes } from "react-router-dom"
import GlobalStyles from "./assets/styles/GlobalStyles"
import Landing from "./pages/Landing/Landing"

export default function App() {
  return(
    <>
      <GlobalStyles/>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
};
