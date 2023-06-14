// // import './product.css'
// // import ProdBar from './ProdBar'
// import Footer from "../../components/footer/Footer";
// import RemoveIcon from '@mui/icons-material/Remove';
// // import { useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';

// // const Product = () => {
// //   const [products, setProducts] = useState([])

// //   useEffect(() => {
// //     fetch("http://localhost:8000/products")
// //       .then((res) => res.json())
// //       .then((res) => {
// //         console.log(res);
// //         setProducts(res);
// //       })
// //       .catch((error) => {
// //         console.log("Error fetching categories:", error);
// //       });
// //   }, []);
// //   return (


// //     <div className="containerList">
// //       <ProdBar />
// //       <div className="wrapper">
// //         {products.map((el) => {
// //           return (
// //             <div key={el.id} className='item'>
// //               <div className="infoContainer">
// //                 <div className="div">
// //                 <Link to={`/product/${el.id}`}><h4 className="name">Product: {el.name}</h4>
// //                   <img src={el.img} alt="" className="images" style={{ height: "100px" }} /></Link></div>
// //                 <div className="inform">
// //                   <p className="desc">Description: {el.description}</p>
// //                   <p className="price">Price: {el.price}</p>
// //                   <div className="quantity">Quantity: {el.quantity}</div>
// //                   <div>Category: {el.CategoryId}</div>
// //                   <button onClick={() => addToCard(el)} className="buttonProd" >Add to Card</button>
// //                 </div>
// //               </div>
// //             </div>
// //           )
// //         })}

// //       </div>
// //       <Footer />
// //     </div>


// //   )
// // }

// // export default Product








// import { useEffect, useState } from "react"
// import ProductList from "./ProductList";
// import { useParams } from "react-router-dom";

// const Product = () => {

//   const [productData, setProductData] = useState([]);
//   const { id } = useParams();
//    useEffect(() => {
//    fetch("http://localhost:8000/products")
//      .then((res) => res.json())
//      .then((res) => {
//        setProductData(res[0]);
//      });
//  }, []);
//   return (
//     <div className='container'>
//       {productData.map(item=>(
//         <ProductList item={item} key={item.id}/>
//       ))}
//      </div>
//   )
// }

// export default Product


import React, { useEffect, useState } from 'react';
// import ProductList from './ProductList';
import './product.css'
import ProdBar from './ProdBar'
import Footer from '../../components/footer/Footer';
import { Link } from 'react-router-dom';

const Product = ({id, name}) => {
  const [productData, setProductData] = useState([]);


  useEffect(() => {
    fetch('http://localhost:8000/products')
      .then((res) => res.json())
      .then((res) => {
        console.log(res)
        setProductData(res);
      })
      .catch((error) => {
        console.log("Error fetching products:", error);
      });
  }, []);

  return (
    <div>
      <ProdBar />
      <div className='containerProd'>

        {productData.map((prod) => {
          return (
            <div key={prod.id}>
              <Link to={`/single_product/${prod.id}`} style={{textDecoration:'none', color:"#333333"}}>
                <p >{prod.name}</p>
                <img src={prod.img} style={{ height: "250px", width: "250px" }} />
              </Link>
              {/* <p>Description: {prod.description}</p> */}
              <p>Price: {prod.price}</p>
            </div>
          )
        })}
      </div>
      <Footer/>
    </div>
  );
};

export default Product;