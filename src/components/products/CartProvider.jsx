// import { createContext, useContext, useEffect, useState } from "react";

// export const CartContext = createContext();

// export default function CartProvider({ children }) {
//   const [cartLength, setCartLength] = useState(false);
//   const [cart, setCart]= useState( [] );

//   useEffect(()=>{
//     fetch('http://localhost:3002/shoppingCart/cartProducts').then((res)=>res.json()).then((res)=>{
//       setCart(res);
//       setCartLength(true);
//     })
//   },[cartLength])

//   return (
//     <CartContext.Provider value={{ cart, setCart }}>
//       {children}
//     </CartContext.Provider>
//   );
// }

// export function useCartItems() {
//   return useContext(CartContext);
// }