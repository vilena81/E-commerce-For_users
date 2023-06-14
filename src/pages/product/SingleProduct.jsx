

// import { useState , useEffect} from 'react'

// const SingleProduct = () => {

//     const [product, setProduct] = useState(null);


//     useEffect(()=>{
//         fetch(`http://localhost:8000/product/${id}`)
//         .then((res) => res.json())
//         .then((res) => {
//             console.log(res);
//             setProduct(res);
//         })
//         .catch((error) => {
//             console.log('Error fetching product:', error);
//         });
//     })

//     return (
//         <div className='container'>
//             {product.map((el)=>{
//                 <div className="wrapper">
//                 <div className="imgContainer">
//                     <img src={el.img} />
//                 </div>
//                 <div className="infoContainer">
//                     <div className="name">Product name:{el.name} </div>
//                     <div className="name">Description: {el.description} </div>
//                     <div className="price">Price: <span>1569459 AMD</span> </div>
//                     <div className="quantity">Quantity: <span> 44</span></div>
//                 </div>
//                 <div className="filterContainer">
//                     <div className="filter">
//                         <div className="filterTitle">Color</div>
//                         <div className="filterColor" style={{ backgroundColor: "black" }}></div>
//                         <div className="filterColor" style={{ backgroundColor: "white", border: "1px solid black" }}></div>
//                         <div className="filterColor" style={{ backgroundColor: "#4E6750" }}></div>
//                         <div className="filterColor" style={{ backgroundColor: "#1A5374" }}></div>
//                         <div className="filterColor" style={{ backgroundColor: "#97010F" }}></div>
//                         <div className="filterColor" style={{ backgroundColor: "#D8C8CB" }}></div>
//                         <div className="filterColor" style={{ backgroundColor: "#79787D" }}></div>
//                         <div className="filterColor" style={{ backgroundColor: "#2B323B" }}></div>
//                     </div>
//                 </div>
//             </div>
//             })}

//             <button>ADD TO CART</button>
//         </div>
//     )
// }

// export default SingleProduct



// import { useState, useEffect } from 'react';
// import { useParams } from 'react-router-dom';


// const SingleProduct = () => {

//     const [product, setProduct] = useState(null);
//    const {id}= useParams()

//     useEffect(() => {
//         fetch(`http://localhost:8000/product/${id}`)
//             .then((res) => res.json())
//             .then((res) => {
//                 console.log(res);
//                 setProduct(res);
//             })
//             .catch((error) => {
//                 console.log('Error fetching product:', error);
//             });
//     }, [id]);

//     return (
//         <div className='container'>
//             {product && (
//                 <div className='wrapper'>
//                     <div className='imgContainer'>
//                         <img src={product.img} alt='Product' />
//                     </div>
//                     <div className='infoContainer'>
//                         <p className='name'>Product name: {product.name}</p>
//                         {/* <div className='name'>Description: {product.description}</div> */}
//                         <p className='price'>
//                             Price: {product.price}
//                         </p>
//                         <p className='quantity'>
//                             Quantity:{product.quantity}
//                         </p>
//                     </div>

//                 </div>
//             )}

//             <button>ADD TO CART</button>
//         </div>
//     );
// };

// export default SingleProduct;


import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ProdBar from './ProdBar';
import Footer from '../../components/footer/Footer';
const SingleProduct = () => {
  const [product, setProduct] = useState(null);
  const [error, setError] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    fetch(`http://localhost:8000/product/${id}`)
      .then((res) => res.json())
      .then((res) => {
        console.log(res)
        setProduct(res);
      })
      .catch((error) => {
        console.log('Error fetching product:', error);
        setError('Error fetching product. Please try again later.');
      });
  }, [id]);
  if (error) {
    return <div>Error:{error}</div>
  }
  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div className='containerS'>
      <ProdBar />
      <div className="containerSingle">
        {product && (
          <div className='wrapperSingle'>
            <div className='imgContainer'>
              <img className='imgSingle' src={product.img} alt='Product' />
            </div>
            <div className='infoContainer'>
              <p className='name'><span>Product name:</span>  {product.name}</p>
              <p className='price'><span>Price: </span> {product.price}</p>
              <p className='quantity'><span>Quantity:</span> {product.quantity}</p>
              <p className='quantity'><span>Description:</span> {product.description}</p>
              <div className='btn'><button className='add'>Add to cart</button></div>
              <div className='filterContainer'>
                <div className='filter'>
                  <div className='filterTitle'>Color</div>
                  <div className='filterColor' style={{ backgroundColor: 'black' }}></div>
                  <div
                    className='filterColor'
                    style={{ backgroundColor: 'white', border: '1px solid black' }}
                  > </div>
                  <div className='filterColor' style={{ backgroundColor: '#4E6750' }}></div>
                  <div className='filterColor' style={{ backgroundColor: '#1A5374' }}></div>
                  <div className='filterColor' style={{ backgroundColor: '#97010F' }}></div>
                  <div className='filterColor' style={{ backgroundColor: '#D8C8CB' }}></div>
                  <div className='filterColor' style={{ backgroundColor: '#79787D' }}></div>
                  <div className='filterColor' style={{ backgroundColor: '#2B323B' }}></div>
                </div>
              </div>
            </div>

          </div>
        )}
      </div>

<Footer/>
    </div>
  );
};

export default SingleProduct;



{/* <div className='filterContainer'>
<div className='filter'>
    <div className='filterTitle'>Color</div>
    <div className='filterColor' style={{ backgroundColor: 'black' }}></div>
    <div
        className='filterColor'
        style={{ backgroundColor: 'white', border: '1px solid black' }}
    > </div>
    <div className='filterColor' style={{ backgroundColor: '#4E6750' }}></div>
    <div className='filterColor' style={{ backgroundColor: '#1A5374' }}></div>
    <div className='filterColor' style={{ backgroundColor: '#97010F' }}></div>
    <div className='filterColor' style={{ backgroundColor: '#D8C8CB' }}></div>
    <div className='filterColor' style={{ backgroundColor: '#79787D' }}></div>
    <div className='filterColor' style={{ backgroundColor: '#2B323B' }}></div>
</div>
</div> */}