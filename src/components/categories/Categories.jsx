import { useState, useEffect } from 'react';
import './categories.css'
import CategoryItem from './CategoryItem';


const Categories = () => {

  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/categories")
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        setCategories(res);
      })
      .catch((error) => {
        console.log("Error fetching categories:", error);
      });
  }, []);


  console.log(categories)
  return (
    <div className='containerCateg'>
      {categories.map((item) => {
        return < CategoryItem id={item.id} key={item.id} name={item.name} />

      })}
    </div>
  )
}

export default Categories