// import React, { useState, useEffect } from 'react';
// import './categories.css'
// import Box from '@mui/material/Box';
// import InputLabel from '@mui/material/InputLabel';
// import MenuItem from '@mui/material/MenuItem';
// import FormControl from '@mui/material/FormControl';
// import Select from '@mui/material/Select';
// import ProdBar from '../product/ProdBar';

// const CategorySelect = () => {

//   const [categories, setCategories] = useState([])
//   const [categoryId, setCategoryId] = useState('');
//   const [categoryProducts, setCategoryProducts] = useState([]);


//   useEffect(() => {
//     fetch("http://localhost:8000/categories")
//       .then((res) => res.json())
//       .then((res) => {
//         console.log(res);
//         setCategories(res);
//       })
//       .catch((error) => {
//         console.log("Error fetching categories:", error);
//       });
//   }, []);

//   const handleChange = (event) => {
//     const selectedCategoryId = event.target.value;
//     setCategoryId(selectedCategoryId);

//     fetch(`http://localhost:8000/category/${selectedCategoryId}`)
//       .then((res) => res.json())
//       .then((res) => {
//         console.log(res.Products);
//         setCategoryProducts(res.Products);
//       })
//       .catch((error) => {
//         console.log("Error fetching category products:", error);
//       });
//   };

//   return (

//     <div>

//       <Box sx={{ minWidth: 120 }}>
//         <ProdBar />

//         <FormControl style={{ width: "250px" }}>
//           <InputLabel id="category-select-label">Category</InputLabel>
//           <Select
//             labelId="category-select-label"
//             id="category-select"
//             value={categoryId}
//             label="Category"
//             onChange={handleChange}
//           >
//             <MenuItem value={1}>iPhone</MenuItem>
//             <MenuItem value={2}>iPad</MenuItem>
//             <MenuItem value={3}>Accessories</MenuItem>
//           </Select>
//         </FormControl>


//         <div className='containerCategory'>

//           {categoryProducts.map((product) => (
//             <div className="wrapperCategory">
//               <div key={product.id} >
//                 <div>
//                   <h4>{product.name}</h4>
//                   <img src={product.img} style={{ width: "250px", height: "250px" }} />
//                 </div>
//                 <div className='info'>
//                   <p className='titleCategory'><span>Description: </span>{product.description}</p>
//                   <p className='titleCategory'> <span>Price:</span>  {product.price} AMD</p>
//                 </div>

//               </div>
//             </div>

//           ))}

//         </div>

//       </Box>

// <div> {categories.map((category) => {
//             return (
//               <div>
//                 <div key={category.id} >
//                   <div>
//                     <h4>{category.name}</h4>
//                     <img src={category.img} style={{ width: "250px", height: "250px" }} />
//                   </div>
//                   <div className='info'>
//                     <p className='titleCategory'><span>Description: </span>{category.description}</p>
//                     <p className='titleCategory'> <span>Price:</span>  {category.price} AMD</p>
//                   </div>

//                 </div>
//               </div>
//             )
//           })}
//           Catefhjf</div>

//     </div>
//   );
// }

// export default CategorySelect;


import React, { useState, useEffect } from 'react';
import './categories.css'
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import ProdBar from '../product/ProdBar';
import { Link } from 'react-router-dom';

const CategorySelect = () => {
  const [categories, setCategories] = useState([]);
  const [categoryId, setCategoryId] = useState('');
  const [categoryProducts, setCategoryProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/products")
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        setCategories(res);
      })
      .catch((error) => {
        console.log("Error fetching categories:", error);
      });
  }, []);

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
            onChange={handleChange}
            label="Category"
            InputLabelProps={{ label: 'Category' }}
          >
            <MenuItem value={1}>iPhone</MenuItem>
            <MenuItem value={2}>iPad</MenuItem>
            <MenuItem value={3}>Accessories</MenuItem>
          </Select>
        </FormControl>

        <div className='containerCategory'>
          {categoryProducts.map((product) => (
            <div className="wrapperCategory" key={product.id}>
              <div>
                <h4>{product.name}</h4>
                <div className="imageContainerCategory">
                  <img src={product.img} style={{ width: "250px", height: "250px" }} alt="Product" />
                </div>

              </div>
              <div className='info'>
                <p className='titleDescCategory'><span>Description: </span>{product.description}</p>
                <p className='titlePriceCategory'><span>Price:</span>  {product.price} AMD</p>
              </div>
            </div>
          ))}
        </div>

        <div className='allCategory'>
          {categories.map((category) => (
            <div key={category.id} className='wrapperAllCategory'>
              <div>
                <h4>{category.name}</h4>
                <img src={category.img} style={{ width: "250px", height: "250px" }} alt="Category" />
              </div>
              <div className='info'>
                <p className='titleCategory'><span>Description: </span>{category.description}</p>
                <p className='titleCategory'><span>Price:</span>  {category.price} AMD</p>
              </div>
            </div>
          ))}
        </div>

      </Box>
    </div>
  );
}

export default CategorySelect;
