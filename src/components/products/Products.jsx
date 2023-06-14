import './products.css'
import { useState, useEffect } from "react"
import Product from "./Product"

const Products = () => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        fetch("http://localhost:8000/products")
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
        <div className='prd' style={{ padding: '20px' }}>
            <h1 style={{ fontSize: '40px', color: "rgb(96, 94, 94)", textAlign: "center", marginTop: "30px" }}>Popular products</h1>

            <div className='container-prods' >
                {products.map((item) => {
                    return <Product id={item.id}
                        key={item.id}
                        name={item.name}
                        img={item.img}
                        price={item.price}
                    />
                })}
            </div>
        </div>
    )
}

export default Products