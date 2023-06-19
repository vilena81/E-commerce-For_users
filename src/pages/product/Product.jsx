
// import React, { useEffect, useState } from 'react';
// import './product.css'
// import ProdBar from './ProdBar'
// import Footer from '../../components/footer/Footer';
// import { Link } from 'react-router-dom';
// import Announcement from '../../components/announcement/Announcement';


// const Product = ({ id, name }) => {
//   const [productData, setProductData] = useState([]);


//   useEffect(() => {
//     fetch('http://localhost:8000/products')
//       .then((res) => res.json())
//       .then((res) => {
//         console.log(res)
//         setProductData(res);
//       })
//       .catch((error) => {
//         console.log("Error fetching products:", error);
//       });
//   }, []);

//   return (
//     <div >
//       <ProdBar />
// <Announcement/>
//       <div className='containerProduct' >

//         {productData.map((prod) => {
//           return (
//             <div className="wrapper">
//               <div key={prod.id} >

//                 <Link to={`/single_product/${prod.id}`} className='link'>
//                   <p className='title' >{prod.name}</p>
//                   <img src={prod.img} style={{ height: "250px", width: "250px" }} />
//                 </Link>

//                 <div className="infoPrice">
//                   <p className='title'><span>Price:</span> {prod.price} AMD</p>
//                 </div>
//                 <Link to={`/single_product/${prod.id}`} className='link'><button>Show now</button> </Link>
//               </div>
//             </div>

//           )
//         })}
//       </div>
//       <Footer />
//     </div>
//   );
// };

// export default Product;

import React, { useEffect, useState } from 'react';
import './product.css'
import ProdBar from './ProdBar'
import Footer from '../../components/footer/Footer';
import { Link } from 'react-router-dom';
import Announcement from '../../components/announcement/Announcement';

const Product = ({ id, name }) => {
  const [productData, setProductData] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8000/products')
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        setProductData(res);
      })
      .catch((error) => {
        console.log("Error fetching products:", error);
      });
  }, []);

  return (
    <div>
      <ProdBar />
      <Announcement />
      <div className='containerProduct'>

        {productData.map((prod) => (
          <div className="wrapper" key={prod.id}>
            <div>
              <Link to={`/single_product/${prod.id}`} className='link'>
                <p className='title'>{prod.name}</p>
                <img src={prod.img} style={{ height: "250px", width: "250px" }} alt={prod.name} />
              </Link>
              <div className="infoPrice">
                <p className='title'><span>Price:</span> {prod.price} AMD</p>
              </div>
              <Link to={`/single_product/${prod.id}`} className='link'>
                <button>Show now</button>
              </Link>
            </div>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default Product;
