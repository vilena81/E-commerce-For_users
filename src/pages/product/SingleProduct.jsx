import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ProdBar from './ProdBar';
import Footer from '../../components/footer/Footer';


const SingleProduct = ({addToCart}) => {
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
              <p className='price'><span>Price: </span> {product.price} AMD</p>
              <p className='quantity'><span>Quantity:</span> {product.quantity}</p>
              <p className='quantity'><span>Description:</span> {product.description}</p>
             
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
              <div className='btn'><button onClick={()=>addToCart(product)} className='addToCart'>Add to cart</button></div>
            </div>

          </div>
        )}
      </div>

<Footer/>
    </div>
  );
};

export default SingleProduct;




   