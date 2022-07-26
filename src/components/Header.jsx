import { useState } from 'react';
import { BsBag, BsHeart, BsFillGridFill, BsPhone, BsMailbox, 
    BsFacebook, BsYoutube, BsLinkedin, BsTwitter } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import SideCart from './SideCart';

import CategoryMenu from "./CategoryMenu";
import CartContents from './CartContents';

export default function Header(){

    const [catMenuShow, setCatMenuShow] = useState(false);
    const handleCatMenuClose = () => setCatMenuShow(false);
    const handleCatMenuShow = () => setCatMenuShow(true);

    const [cartShow, setCartShow] = useState(false);
    const handleCartClose = () => setCartShow(false);
    const handleCartShow = () => setCartShow(true);

    const cart= JSON.parse(localStorage.getItem('caRt')) || [];

    let totalPrice = cart.reduce((total, item) => total + item.totalPrice, 0);


    const [showSuggestions, setShowSuggestions] = useState(false);
    function globalSearchHandler(e){
        setShowSuggestions(true);
    }


    return (
        <header>
            <div className="main-header-wrapper">
                <div className="header-top d-none d-md-block">
                    <div className="container">
                        <div className="header-top-content">
                            <div className="contact-information">
                                <a>
                                   <BsPhone /> 01700 000 000
                                </a>
                                <a>
                                    <BsMailbox /> support@fairmart.com.bd
                                </a>
                            </div>
                            <div className="social-media-links">
                                <a href="#" className="text-decoration-none" target="_blank">
                                    <BsFacebook />
                                </a>
                                <a href="#" className="text-decoration-none" target="_blank">
                                    <BsYoutube />
                                </a>
                                <a href="#" className="text-decoration-none" target="_blank">
                                    <BsLinkedin />
                                </a>
                                <a href="#" className="text-decoration-none" target="_blank">
                                    <BsTwitter/>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="header-middle">
                    <nav className="navbar navbar-expand-lg">
                        <div className="container">
                            <Link to='/' className="navbar-brand d-flex align-items-center">
                                <img alt="" /> <h2 className="ms-2 mb-0 text-primary">FairMart</h2>
                            </Link>
                            <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <i className="bi bi-menu-button-wide"></i>
                            </button>
                            <div className="offcanvas offcanvas-start" id="navbarSupportedContent">
                                <div className="offcanvas-header">
                                    <h5 className="offcanvas-title" id="offcanvasExampleLabel">Menu</h5>
                                    <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                                </div>
                                <ul className="offcanvas-body navbar-nav ms-0 ms-lg-auto mb-2 mb-lg-0">
                                    <li className="nav-item">
                                        <Link to='/' className="nav-link active" aria-current="page">Home</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link active" to='/campaigns'>Campaigns</Link>
                                    </li>
                                    <li className="nav-item dropdown">
                                        <a className="nav-link dropdown-toggle pe-0" href="/" 
                                            id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                            Pages
                                        </a>
                                        <ul className="dropdown-menu rounded-0 border" aria-labelledby="navbarDropdown">
                                            <li><a className="dropdown-item" href="category-page.php">Category Page</a></li>
                                            <li><a className="dropdown-item" href="product-single.php">Product Details Page</a></li>
                                            <li><a className="dropdown-item" href="sign-in.php">Sign In Page</a></li>
                                            <li><a className="dropdown-item" href="user-account.php">Account Page</a></li>
                                            <li><a className="dropdown-item" href="cart.php">Cart Page</a></li>
                                            <li><a className="dropdown-item" href="checkout.php">Checkout Page</a></li>
                                            <li><a className="dropdown-item" href="brands.php">Brands Page</a></li>
                                            <li><a className="dropdown-item" href="seller-shop.php">Seller Page</a></li>
                                            <li><a className="dropdown-item" href="news.php">News Page</a></li>
                                            <li><a className="dropdown-item" href="404.php">404 Page</a></li>
                                        </ul>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="/">
                                            Contact
                                        </a>
                                    </li>
                                    <li className="nav-item" id="auth-nav-item">
                                        <a className="nav-link" href="/">
                                            Hello, Sign in
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                </div>
                <div className="header-bottom-wrapper">
                    <div className="container">
                        <div className="header-bottom">
                            <button className="btn p-0 btn-link header-bottom-left d-flex align-items-center" type="button" onClick={handleCatMenuShow}>
                                <BsFillGridFill /> <span className="d-none d-md-block ms-2">All Category</span>
                            </button>
                            <SideCart show={catMenuShow} close={handleCatMenuClose} placement='start' title='Main Categories' children={<CategoryMenu/>} />
                            <div className="header-bottom-search-wrap px-2 px-md-5">
                                <form action="" className="position-relative">
                                    <input type="text" className="form-control" placeholder="What are you looking for?" id="global-search-input" onChange={globalSearchHandler} />
                                    {
                                        showSuggestions ? 
                                        (
                                            <div className="card position-absolute w-100 p-3 mt-1 shadow rounded-0 border-0" 
                                                id="global-search-suggestions-block" style={{'z-index': '2000'}}>
                                                <div className="d-flex"> 
                                                    <span className="me-2">Popular Search:</span> 
                                                    <div>
                                                        <a href="/" className='text-decoration-none'>Fairmart</a>, 
                                                        <a href="/" className='text-decoration-none'>E-Commerce</a>
                                                    </div>
                                                </div>
                                            </div> 
                                        ):
                                        ''
                                    }
                                </form>
                            </div>
                            <div className="header-bottom-right d-flex">
                                <a href="user-account.php#wishlishts" className="wishlist-btn d-flex align-items-center">
                                    <BsHeart/> <span className="d-none d-lg-block ms-2">Favourites</span>
                                </a>
                                <button className="btn btn-link cart d-flex align-items-center text-decoration-none" type="button" onClick={handleCartShow} variant="primary">
                                    <BsBag /> <span className="d-none d-lg-block ms-2">৳ {totalPrice}</span>
                                </button>
                                <SideCart show={cartShow} close={handleCartClose} placement='end' title='My cart'>
                                    <CartContents />
                                </SideCart>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}
