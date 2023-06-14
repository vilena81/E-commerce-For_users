import './cart.css'
import Navbar from '../../components/navbar/Navbar'
import Footer from '../../components/footer/Footer'
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import Announcement from '../../components/announcement/Announcement';

const Cart = () => {
    return (
        <div className='containerCart'>
            <Navbar />
           <Announcement/>
            <div className="wrapperCart">
                <h1 className="titleCart">Your bag</h1>
                <div className="topCart">
                    <button className="topButton">CONTINUE SHOPPING</button>
                    <div className="topTexts">
                        <div className="topText"><span >Shopping bag(2) </span></div>
                        <div className="topText"><span >Your Wishlist (0)</span></div>
                    </div>
                    <button type='filled' className="topButton">CHECKOUT NOW</button>
                </div>

                <div className="bottomCart">
                    <div className="infoCart">
                        <div className="product">
                            <div className="productDetail">
                                <img className='imgCart' src='https://static.baza.farpost.ru/v/1586486359323_bulletin' />
                                <div className="details">
                                    <div className="productName"><b> Product:</b> vcnffff { }</div>
                                    <div className="productId"><b>Id:</b> 45575 { }</div>
                                    <div className="productPrice"><b>Price:</b> 5566588 AMD { }</div>
                                </div>
                            </div>

                            <div className="priceDetails">
                                <div className="productAmountContainer">
                                    <AddIcon />
                                    <div className="productAmount">1</div>
                                    <RemoveIcon />
                                </div>
                                <div className="productPrice">$ 30</div>
                            </div>

                        </div>
                        <hr />
                        <div className="product">
                            <div className="productDetail">
                                <img className='imgCart' src='https://static.baza.farpost.ru/v/1586486359323_bulletin' />
                                <div className="details">
                                    <div className="productName"><b> Product:</b> vcnffff { }</div>
                                    <div className="productId"><b>Id:</b> 45575 { }</div>
                                    <div className="productPrice"><b>Price:</b> 5566588 AMD { }</div>
                                </div>
                            </div>

                            <div className="priceDetails">
                                <div className="productAmountContainer">
                                    <AddIcon />
                                    <div className="productAmount">1</div>
                                    <RemoveIcon />
                                </div>
                                <div className="productPrice">$ 30</div>
                            </div>

                        </div>
                    </div>
                    <div className="summary">
                        <h1 className="summaryTitle">ORDER SUMMARY</h1>
                    <div className="summaryItem">
                        <div className="summaryItemText">SubTotal</div>
                        <div className="summaryItemPrice">$ 80</div>
                    </div>
                    <div className="summaryItem">
                        <div className="summaryItemText">Estimated Shipping</div>
                        <div className="summaryItemPrice">$ 5.90</div>
                    </div>
                    <div className="summaryItem">
                        <div className="summaryItemText">Shipping Discount</div>
                        <div className="summaryItemPrice">$ -5.90</div>
                    </div>
                    <div className="summaryItem">
                        <div className="summaryItemText" type="total">Total</div>
                        <div className="summaryItemPrice">$ 80</div>
                    </div>
                    <button className='summaryBtn'>CHECKOUT NOW</button>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Cart