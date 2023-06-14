import Newsleter from "../../newsletter/Newsletter"
import Navbar from "../navbar/Navbar"
// import Products from "./Products"
import Footer from "../footer/Footer"
import './products.css'
import { colors } from "@mui/material"

const ProductList = () => {
    return (
        <div className='container-prodList'>
            <Navbar />
            <div className="title-list">Phones</div>
            <div className="filterContainer">
                <div className="filter-list">
                    <p className="filterText">Filter Products:</p>
                    <select>
                        <option disabled selected>Categories</option>
                        <option>iPhone</option>
                        <option>iPad</option>
                        <option>Accessories</option>
                    </select>
                   
                </div>
                <div className="filter-list">
                    <p className="filterText">Filter Products:</p>
                    <select>
                        <option disabled selected>Color</option>
                        <option style={{backgroundColor:"black"}}  >Black</option>
                        <option style={{backgroundColor:"white"}}  >White</option>
                        <option style={{backgroundColor:"#4E6750"}}>Green</option>
                        <option style={{backgroundColor:"#1A5374"}}>Blue</option>
                        <option style={{backgroundColor:"#97010F"}}>Red</option>
                        <option style={{backgroundColor:"#D8C8CB"}}>Pink</option>
                        <option style={{backgroundColor:"#79787D"}}>Graphite</option>
                        <option style={{backgroundColor:"#2B323B"}}>Midnight</option>
                    </select>
                    
                </div>

            </div>
            <Products />
            <Newsleter />
            <Footer />
        </div>
    )
}

export default ProductList