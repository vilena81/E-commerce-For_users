import React from 'react'
import './categories.css'
import { useState } from 'react'


const CategoryItem = ({ name, id }) => {
    console.log(name)

    const [category, setCategory] = useState([])
    function getCategory(id) {
        fetch(`http://localhost:8000/category/${id}`)
            .then((res) => res.json())
            .then((res) => {
                console.log(res.Products);
                setCategory(res.Products);
            })
            .catch((error) => {
                console.log("Error fetching categories:", error);
            });
    }
    console.log(category)
    return (
        <div >
           
            <div className='container-item'>
                <div >
                    
                    <div className="title-item" onClick={() => getCategory(id)}>{name}</div>

                    {category.map((element) => {
                        return <div key={element.id} className='categoryItem'>
                            <div style={{ paddingTop: '40px', paddingBottom: "20px", color: "#47375B", fontSize: "20px" }}> <span>Name:</span> {element.name}</div>
                            <img src={element.img} className='imageCategory' />
                            <div style={{ paddingTop: '10px', paddingBottom: "10px" }}><span >Description:</span>{element.description}</div>
                            <div style={{ paddingTop: '10px', paddingBottom: "10px" }}><span>Price: </span> {element.price}  AMD </div>
                            <button className='buttonC'>Add to cart</button>
                            <hr />
                        </div>
                    })}
                </div>
            </div>
        </div>
    )
}

export default CategoryItem