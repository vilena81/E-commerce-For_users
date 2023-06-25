
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import './navbar.css'
import SearchIcon from '@mui/icons-material/Search';
import Badge from '@mui/material/Badge';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import AppleIcon from '@mui/icons-material/Apple';
import MyApple from './apple1.png'

const Navbar = () => {

    const navigate = useNavigate()
    function logOut() {
        localStorage.clear();
        navigate('/')
    }

    return (
        <div className='navbar-container'>
            <div className="wrapper-nav">
                <div className="left-nav">
                    {/* <div className="language" style={{ color: "#686663" }}>EN</div>
                    <div className="searchContainer">
                        <input placeholder='Search..' className='searchInp' />
                        <SearchIcon />
                    </div> */}
                    {/* <Link to="/" className="logo" >
                        <AppleIcon className='apple' /> My Apple</Link> */}
                </div>
                <div className="center-nav">
                    <Link to="/" className="logoA" >
                        <img src={MyApple} style={{ width: "80px" }} />
                    </Link> </div>
                <div className="right-nav">

                    <Link to='/register' className="menuItem" style={{ color: "#686663", textDecoration: "none" }}>REGISTER</Link>
                    <Link to="/login" className="menuItem" style={{ color: "#686663", textDecoration: "none" }}>SIGN IN</Link>
                    <Link onClick={logOut} to='/' className="menuItem" style={{ color: "#686663", textDecoration: "none" }}>LOG OUT</Link>
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

export default Navbar