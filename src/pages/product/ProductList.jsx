// import { Link, useParams } from 'react-router-dom'
// import { useEffect } from 'react'

// const ProductList = () => {

//     useEffect(() => {
//         fetch(`http://localhost:8000/product${id}`)
//           .then((res) => res.json())
//           .then((res) => {
//             console.log(res);
//             setProducts(res);
//           })
//           .catch((error) => {
//             console.log("Error fetching categories:", error);
//           });
//       }, []);

//     const {id}= useParams()
//     const product = productsData.find(el =>el.id === +id)
//     console.log(product)
//   return (
//     <div className='container-prod'>
//         <div className="container-item">
//             <img src={product.img}/>
//             <p>{product.name}</p>
//             <p>{product.price}</p>
//             <p>{product.description}</p>
//         </div>
//     </div>
//   )
// }

// export default ProductList

// import {  useParams } from 'react-router-dom';
// import { useEffect, useState } from 'react';

// const ProductList = () => {
//   const [product, setProduct] = useState(null);
//   const { id } = useParams();

//   useEffect(() => {
//     fetch(`http://localhost:8000/product/${id}`) 
//       .then((res) => res.json())
//       .then((res) => {
//         console.log(res);
//         setProduct(res);
//       })
//       .catch((error) => {
//         console.log("Error fetching product:", error);
//       });
//   }, [id]);

//   if (!product) {
//     return <div>Loading...</div>; 
//   }

//   return (
//     <div className='container-prod'>
//       <div className="container-item">
//         <img src={product.img} alt={product.name} />
//         <p>{product.name}</p>
//         <p>{product.price}</p>
//         <p>{product.description}</p>
//       </div>
//     </div>
//   );
// };

// export default ProductList;


// import { useState } from 'react';
// import './product.css'

// const ProductList = ({name, id , price}) => {

//   const [product, setProduct] = useState([]);
 
//   function getProduct (id){
//     fetch(`http://localhost:8000/product/${id}`)
//       .then((res) => res.json())
//       .then((res) => {
//         console.log(res);
//         setProduct(res);
//       })
//       .catch((error) => {
//         console.log('Error fetching product:', error);
//       });
//   }

//   return (
//     <div className="container">

//       <div className="circle">
//         <button onClick={()=>getProduct(id)}>!!!{name}</button>
//        {product.map((prod)=>{
//         return <div>
//           <div key={prod.id}>{prod.name}</div>
//           <div >img{img}</div>
//           <div >{price}</div>
//         </div>
        
//        })}
//       </div>
      
//     </div>
//   );
// };

// export default ProductList;



// import { useState } from 'react';
// import './product.css';
// import { Link } from 'react-router-dom';

// const ProductList = ({ id, name, img, price }) => {
//   const [product, setProduct] = useState(null);

//   const getProduct = (id) => {
//     fetch(`http://localhost:8000/product/${id}`)
//       .then((res) => res.json())
//       .then((res) => {
//         console.log(res);
//         setProduct(res);
//       })
//       .catch((error) => {
//         console.log('Error fetching product:', error);
//       });
//   };

//   return (
//     <div className="container">
//       <div className="circle">
//         <button onClick={() => getProduct(id)}>!!!{name}</button>
//         {product && (
//           <div>

//             <div key={product.id}>{product.name}</div>
//             <div>img!!!{product.img}</div>
//             <div>{product.price}</div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default ProductList;

//<div className='container-prod'>
    //   <div className='container-item'>
    //     <img src={product.img} alt={product.name} />
    //     <p>{product.name}</p>
    //     <p>{product.price}</p>
    //     <p>{product.description}</p>
    //   </div>
    // </div>