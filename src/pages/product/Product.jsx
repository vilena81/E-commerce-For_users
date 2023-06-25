
import React, { useEffect, useState } from 'react';
import './product.css'
import ProdBar from './ProdBar'
import Footer from '../../components/footer/Footer';
import { Link } from 'react-router-dom';
import Announcement from '../../components/announcement/Announcement';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';


const Product = ({ id, name }) => {
  const [productData, setProductData] = useState([]);

  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(8);

  const getDisplayedProducts = () => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return productData.slice(startIndex, endIndex);
  };

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

  const totalPages = Math.ceil(productData.length / itemsPerPage);

  const goToPreviousPage = () => {
    setCurrentPage((prevPage) => prevPage - 1);
  };

  const goToNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  return (
    <div className='page'>
      <ProdBar />
      <Announcement />
      <div className='containerProduct'>

        {getDisplayedProducts().map((prod) => (
          <div className="wrapper" key={prod.id}>
            <div>
              <Link to={`/single_product/${prod.id}`} className='link'>
                <p className='titleProd'>{prod.name}</p>
                <img className='imageProd' src={prod.img} style={{ height: "250px", width: "250px" }} alt={prod.name} />
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
      <div className="pagination">
        <div className="icons1">
          <ArrowBackIosIcon onClick={goToPreviousPage} disabled={currentPage === 1} className='icona1' />
        </div>
        <div className="icons2">
          <ArrowForwardIosIcon onClick={goToNextPage} disabled={currentPage === totalPages} className='icona2' />
        </div>

      </div>
      <Footer />

    </div>
  );
};

export default Product;
