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
        <div className='container-item'>

            <button className="title-item" onClick={() => getCategory(id)}>{name}</button>
            {category.map((element) => {
                return <div key={element.id}> 
                {element.name}
               
                </div>
            })}
        </div>
    )
}

export default CategoryItem