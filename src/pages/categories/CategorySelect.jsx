import React, { useState } from 'react';
import './categories.css'
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import ProdBar from '../product/ProdBar';

const CategorySelect = () => {
  const [categoryId, setCategoryId] = useState('');
  const [categoryProducts, setCategoryProducts] = useState([]);

  const handleChange = (event) => {
    const selectedCategoryId = event.target.value;
    setCategoryId(selectedCategoryId);

    fetch(`http://localhost:8000/category/${selectedCategoryId}`)
      .then((res) => res.json())
      .then((res) => {
        console.log(res.Products);
        setCategoryProducts(res.Products);
      })
      .catch((error) => {
        console.log("Error fetching category products:", error);
      });
  };

  return (

    <div>

      <Box sx={{ minWidth: 120 }}>
        <ProdBar />
        <FormControl style={{ width: "250px" }}>
          <InputLabel id="category-select-label">Category</InputLabel>
          <Select
            labelId="category-select-label"
            id="category-select"
            value={categoryId}
            label="Category"
            onChange={handleChange}
          >
            <MenuItem value={1}>iPhone</MenuItem>
            <MenuItem value={2}>iPad</MenuItem>
            <MenuItem value={3}>Accessories</MenuItem>
          </Select>
        </FormControl>


        <div className='containerCategory'>

          {categoryProducts.map((product) => (
            <div className="wrapperCategory">
              <div key={product.id} >
                <div>
                  <h4>{product.name}</h4>
                  <img src={product.img} style={{ width: "250px", height: "250px" }} />
                </div>
                <div className='info'>
                  <p className='titleCategory'><span>Description: </span>{product.description}</p>
                  <p className='titleCategory'> <span>Price:</span>  {product.price} AMD</p>
                </div>

              </div>
            </div>

          ))}
        </div>

      </Box>
    </div>
  );
}

export default CategorySelect;
