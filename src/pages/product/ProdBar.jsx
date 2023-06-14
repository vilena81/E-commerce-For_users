import React from 'react'
import { Link } from 'react-router-dom';
import './prodBar.css'
import SearchIcon from '@mui/icons-material/Search';
import Badge from '@mui/material/Badge';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import AppleIcon from '@mui/icons-material/Apple';


const ProdBar = () => {
    return (
        <div className='navbar-container'>
            <div className="wrapper-nav">
                <div className="left-nav">

                    <div className="searchContainer">
                        <input placeholder='Search..' className='searchInp' />
                        <SearchIcon />
                    </div>
                </div>
                <div className="center-nav">
                    <Link to="/product" className="logo" >
                        <AppleIcon className='apple' /> My iPhone
                    </Link>
                </div>
                <div className="right-nav">
                <Link to={"/"} className='link' ><p>Home</p></Link>
                   <Link to={"/about"} className='link' ><p>About us</p></Link> 
                    <Link className='link'><p>Contact</p></Link>
                   
                    <div className="filterCategory">
                        <p>Categories</p>
                        
                    </div>
                     
                    <div className="menuItem">
                        <Badge badgeContent={4} color="primary">
                            <ShoppingCartOutlinedIcon />
                        </Badge>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProdBar