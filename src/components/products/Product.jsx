import './products.css'
import { useState } from 'react';

const Product = ({ id, name, img,  price }) => {

    const [product, setProduct] = useState([])
    function getProduct(id) {
        fetch(`http://localhost:8000/product/${id}`)
            .then((res) => res.json())
            .then((res) => {
                
                setProduct(res);
            })
            .catch((error) => {
                console.log("Error fetching categories:", error);
            });
    }
    console.log(product)
    return (
        <div className='containerProds'>
            <div className="info" onClick={() => getProduct(id)} >
                <div className="infoName">
                    <p>{name}</p>
                </div>
                <div className="imageProd">
                 <img src={img} alt='iPhone' style={{width:"280px", height:"280px"}} />   
                </div>   
                <div className="infoPrice">
                    <p style={{textAlign:'center'}}>Price: {price +" AMD"}</p>
                </div>
            </div>

            {/* {product.map((prod) => {
                return <div key={prod.id}>{prod.name}</div>
            })} */}
        </div>
    )
}



export default Product