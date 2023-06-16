import './cart.css'
import Navbar from '../../components/navbar/Navbar'
import Footer from '../../components/footer/Footer'
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import Announcement from '../../components/announcement/Announcement';
import ProdBar from '../product/ProdBar';

const Cart = ({ cart }) => {
    return (
        <div className='containerCart'>
            <ProdBar />
            <Announcement />
            <div className="wrapperCart">
                <h1 className="titleCart">Your bag</h1>
                {cart.map((elem) => {
                    return <div className="product">
                        <div className="productDetail">
                            <img className='imgCart' src={elem.img} />
                            <div className="details">
                                <div className="productPrice"><b> Product:</b>  {elem.name}</div>
                                <div className="productPrice"><b> Description:</b>  {elem.description}</div>
                                <div className="productPrice"><b>Price:</b> {elem.price}AMD</div>
                            </div>
                        </div>

                        <div className="priceDetails">
                            <div className="productAmountContainer">
                                <AddIcon />
                                <div className="productAmount">1</div>
                                <RemoveIcon />
                            </div>
                            <div className="productPrice">{elem.price} AMD</div>
                        </div>


                        <div className="bottomCart">

                            <div className="summary">
                                <h1 className="summaryTitle">ORDER SUMMARY</h1>
                                <div className="summaryItem">
                                    <div className="summaryItemText">SubTotal</div>
                                    <div className="summaryItemPrice">{elem.price} AMD</div>
                                </div>
                                <div className="summaryItem">
                                    <div className="summaryItemText">Estimated Shipping</div>
                                    <div className="summaryItemPrice">2000 AMD</div>
                                </div>
                                <div className="summaryItem">
                                    <div className="summaryItemText">Shipping Discount</div>
                                    <div className="summaryItemPrice"> 3000 AMD</div>
                                </div>
                                <div className="summaryItem">
                                    <div className="summaryItemText" type="total">Total</div>
                                    <div className="summaryItemPrice">7000 AMD</div>
                                </div>
                                <button className='summaryBtn'>CHECKOUT NOW</button>
                            </div>

                        </div>
                        <hr />
                    </div>

                })}


            </div>
            <Footer />
        </div>
    )
}

export default Cart