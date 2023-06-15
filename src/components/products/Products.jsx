import './products.css'
import { useState, useEffect } from "react"
// import Product from "./Product"

const Products = () => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        fetch("http://localhost:8000/popular")
            .then((res) => res.json())
            .then((res) => {
                console.log(res);
                setProducts(res);
            })
            .catch((error) => {
                console.log("Error fetching categories:", error);
            });
    }, []);
    console.log(products)
    return (
        <div >
            <p style={{fontSize:"28px", color:"#333333", textAlign:"center", }}><i>Popular products</i></p>
            <div className="containerC">

                <div className="wrapper">
                    {products.map((item) => {
                        return <div key={item} className='itemPopular'>
                            <p>{item.name}</p>
                            <img src={item.img} style={{ width: "250px", height: "250px" }} />

                            <p>{item.price} AMD</p>
                        </div>
                    })}
                </div>
            </div>
        </div>
    )
}

export default Products