import React from 'react'
import './prodBar.css'
import { Link, useNavigate } from 'react-router-dom';
import Apple from '/public/apple1.png'
import Badge from '@mui/material/Badge';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
// import SearchIcon from '@mui/icons-material/Search';
// import AppleIcon from '@mui/icons-material/Apple';


const ProdBar = () => {

    const navigate = useNavigate()
    function logOut() {
        localStorage.clear();
        navigate('/')
    }
  
      
    return (
        <div className='navbar-container'>
            <div className="wrapper-nav">
                <div className="left-nav">

                    {/* <div className="searchContainer">
                        <input
                         placeholder='Search..' 
                         className='searchInp'
                         
                         />
                        <SearchIcon />
                    </div> */}
                     <Link to="/product" className="logo" >
                        {/* <AppleIcon className='apple' />  */}
                        My Apple
                    </Link>
                </div>
                <div className="center-nav">
                   <img src={Apple} width={80}/>
                </div>
                <div className="right-nav">
                    <Link to={"/product"} className='link' ><p>Home</p></Link>
                    <Link className='link' to="/categories"><p>Categories</p></Link>
                    <Link to={"/about"} className='link' ><p>About us</p></Link>
                    <Link to={'/contact'} className='link'><p>Contact</p></Link>
                 <Link to='/' className='link'  onClick={logOut}> <p style={{fontSize:"18px", color:"black"}}>Log out</p></Link> 
                    <div className="menuItem">
                       <Link to={"/cart"}><Badge badgeContent={1} color="primary">
                            <ShoppingCartOutlinedIcon />
                        </Badge></Link> 
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProdBar