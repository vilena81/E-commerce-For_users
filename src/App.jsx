import { Routes, Route } from "react-router-dom";
import Home from './pages/home/Home'
import Register from './pages/register/Register'
import Login from './pages/login/Login'
import Product from "./pages/product/Product";
import SingleProduct from "./pages/product/SingleProduct";
import AboutAs from "./pages/about/AboutAs";
// import Categories from "./components/categories/Categories";
import CategorySelect from "./pages/categories/CategorySelect";


function App() {


  return (
    <>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/product" element={<Product />} />
        <Route path="/single_product/:id" element={<SingleProduct />} />
        <Route path="/about" element={<AboutAs />}></Route>
        {/* <Route path="/categories" element={<Categories />}></Route> */}
        <Route path="/categories" element={<CategorySelect />}></Route>
      </Routes>
    </>
  )
}
export default App;