import './footer.css'
import { Link } from 'react-router-dom';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import PinterestIcon from '@mui/icons-material/Pinterest';
import YouTubeIcon from '@mui/icons-material/YouTube';
import RoomIcon from '@mui/icons-material/Room';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';


const Footer = () => {
    return (
        <div className='container-foot'>
           
            <div className="left-foot">
                <h1 className="logo">My <i>Apple</i></h1>
                <p className="desc-foot">  Apple has released a total of 38 iPhones over the years (including the latest iPhone 14 models). We've given you a complete look at each iPhone evolution, starting when Steve Jobs unveiled the original iPhone in 2007. As you can see, the iPhone has gone through a lot of changes, from a 16 GB web browser to a 1 TB all-in-one camera, workspace, and entertainment center.</p>
                
                <div className="socialContainer">
                    <div className="socialIcon">
                        <FacebookIcon />
                    </div>
                    <div className="socialIcon">
                        <InstagramIcon />
                    </div>
                    <div className="socialIcon">
                        <TwitterIcon />
                    </div>
                    <div className="socialIcon">
                        <PinterestIcon />
                    </div>
                    <div className="socialIcon">
                        <YouTubeIcon />
                    </div>
                </div>
            </div>

            <div className="center-foot">
                <div className="title-foot">Useful Links</div>
                <ul className='list'>
                  <Link to={'/'} className="listItem"><li >Home</li></Link>  
                  
                    <Link to={'/product'} className="listItem"><li >Products</li></Link> 
                    <Link></Link>  <li className="listItem">Accessories</li>
                    <Link></Link> <li className="listItem">iPad</li>
                    <Link></Link> <li className="listItem">iPhone</li>
                    <Link to={"/about"} className="listItem">  <li >About us</li></Link> 
                    <Link to={"/contact"} className="listItem" > <li >Contacts</li>  </Link>  
                </ul>
            </div>

            <div className="right-foot">
                <div className="title-foot">Contact</div>
                <div className="contactItem">
                   <RoomIcon style={{marginRight:"10px"}}/> Erevan, Aram Khachatryan 155 str.
                </div>
                <div className="contactItem">
                <LocalPhoneIcon style={{marginRight:"10px"}}/>  +374 55 555 555
                </div>
                <div className="contactItem">
                <EmailIcon style={{marginRight:"10px"}}/>  iPhone@gmail.com
                </div>
                <img src="https://i.ibb.co/Qfvn4z6/payment.png" className='payment'/>
            </div>

        </div>
    )
}

export default Footer