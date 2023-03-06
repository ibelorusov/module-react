import {BrowserRouter, Routes, Route} from "react-router-dom";
// import {useDispatch} from "react-redux"
import PageNotFound from "../../pages/pageNotFound";
import Showcase from "../../pages/showcase";
import CartPage from "../../pages/cartPage";
import products from "../../services/menuList";
import "./App.css";

function App() {
  const dispatch = useDispatch();
  dispatch({
    type:"ADD_PRODUCTS",
    payload: products,
});
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Showcase />} />
      <Route path="/cart" element={<CartPage />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
    </BrowserRouter>
  );
}
export default App;