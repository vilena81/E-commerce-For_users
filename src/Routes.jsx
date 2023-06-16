import { Route, Routes } from "react-router-dom"
import Home from './pages/home/Home'
import Register from './pages/register/Register'
import Login from './pages/login/Login'
import Product from "./pages/product/Product";
import SingleProduct from "./pages/product/SingleProduct";
import AboutAs from "./pages/about/AboutAs";
import CategorySelect from "./pages/categories/CategorySelect";
import Cart from "./pages/cart/Cart";
import { useState } from "react";

const AppRoutes = () => {

  const[cart, setCart]=useState([])
  function addToCart(prod){
    setCart([...cart, prod])
  }

  return (
    <Routes>
      <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/product" element={<Product />} />
        <Route path="/single_product/:id" element={<SingleProduct addToCart={addToCart} />} />
        <Route path="/about" element={<AboutAs />}></Route>
        <Route path="/categories" element={<CategorySelect />}></Route>
        <Route path="/cart" element={<Cart cart={cart}/>}></Route>
    </Routes>
  )
}

export default AppRoutes