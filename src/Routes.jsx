// import { Route, Routes } from "react-router-dom"
// import Home from './pages/home/Home'
// import Register from './pages/register/Register'
// import Login from './pages/login/Login'
// import Product from "./pages/product/Product";
// import SingleProduct from "./pages/product/SingleProduct";
// import AboutAs from "./pages/about/AboutAs";
// import CategorySelect from "./pages/categories/CategorySelect";
// import Cart from "./pages/cart/Cart";
// import { useState } from "react";

// const token = localStorage.getItem('token');
// console.log(token, "asdfasd")
// // if(token ===null){
// //   redirect "/"
// // }
// // else{
// //  jwt.decode(tokn=en)
// //  if(token == real){

// //  }
// // }
// const AppRoutes = () => {

//   const[cart, setCart]=useState([])
//   function addToCart(prod){
//     setCart([...cart, prod])
//   }

//   return (
//     <Routes>
//       <Route path="/" element={<Home />} />
//         <Route path="/register" element={<Register />} />
//         <Route path="/login" element={<Login />} />
//         <Route path="/product" element={<Product />} />
//         <Route path="/single_product/:id" element={<SingleProduct addToCart={addToCart} />} />
//         <Route path="/about" element={<AboutAs />}></Route>
//         <Route path="/categories" element={<CategorySelect />}></Route>
//         <Route path="/cart" element={<Cart cart={cart}/>}></Route>
//     </Routes>
//   )
// }

// export default AppRoutes

import { Route, Routes, useNavigate } from "react-router-dom";
import Home from './pages/home/Home';
import Register from './pages/register/Register';
import Login from './pages/login/Login';
import Product from "./pages/product/Product";
import SingleProduct from "./pages/product/SingleProduct";
import AboutAs from "./pages/about/AboutAs";
import CategorySelect from "./pages/categories/CategorySelect";
import Cart from "./pages/cart/Cart";
import Contact from "./pages/cantact/Contact";
import { useState, useEffect } from "react";


const AppRoutes = () => {
  const navigate = useNavigate();
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token === null && !['/register', '/login'].includes(window.location.pathname)) {
      navigate("/");
    }
  }, [navigate]);
  

  function addToCart(prod) {
    setCart([...cart, prod]);
  }

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="/product" element={<Product />} />
      <Route path="/single_product/:id" element={<SingleProduct addToCart={addToCart} />} />
      <Route path="/about" element={<AboutAs />} />
      <Route path="/categories" element={<CategorySelect />} />
      <Route path="/cart" element={<Cart cart={cart} />} />
      <Route path="/contact" element={<Contact/>}/>
    </Routes>
  );
};

export default AppRoutes;
