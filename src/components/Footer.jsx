export default function Footer(){
    return (
        <footer>
        <div className="footer-wrapper">
            <div className="container">
                <div className="row g-4">

                    <div className="col-lg-3">
                        <a className="me-0" href="index.html">
                            <img className="w-50" src="assets/images/essentials/logo.png" alt="logo" />
                        </a>
                        <p className="my-3">
                            Fair Mart Ltd. (fairmart.com.bd) is the prominent e-Commerce marketplace committed to ensuring a Premium Online Shopping Experience in Bangladesh for online shoppers
                        </p>

                        <ul className="list-inline mb-0 mt-3">
                            <li className="list-inline-item">
                                <a className="btn btn-white btn-sm p-2 text-facebook" href="#">
                                    <i className="bi bi-facebook"></i>
                                </a>
                            </li>
                            <li className="list-inline-item">
                                <a className="btn btn-white btn-sm p-2 text-instagram" href="#">
                                    <i className="bi bi-instagram"></i>
                                </a>
                            </li>
                            <li className="list-inline-item">
                                <a className="btn btn-white btn-sm p-2 text-twitter" href="#">
                                    <i className="bi bi-twitter"></i>
                                </a>
                            </li>
                            <li className="list-inline-item">
                                <a className="btn btn-white btn-sm p-2 text-linkedin" href="#">
                                    <i className="bi bi-linkedin"></i>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="col-lg-6">
                        <div className="row g-4">
                            <div className="col-6 col-md-4">
                                <h5 className="mb-2 mb-md-4">FairMart</h5>
                                <ul className="nav flex-column">
                                    <li className="nav-item">
                                        <a className="nav-link text-secondary ps-0" href="#">About us</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link text-secondary ps-0" href="#">Privacy Policy</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link text-secondary ps-0" href="#">Terms & Conditions</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link text-secondary ps-0" href="#">News</a>
                                    </li>
                                </ul>
                            </div>

                            <div className="col-6 col-md-4">
                                <h5 className="mb-2 mb-md-4">Customer Care</h5>
                                <ul className="nav flex-column">
                                    <li className="nav-item"><a className="nav-link text-secondary ps-0" href="#">Return and Refund Policy</a></li>
                                    <li className="nav-item"><a className="nav-link text-secondary ps-0" href="#">0% EMI With Credit Card</a></li>
                                    <li className="nav-item"><a className="nav-link text-secondary ps-0" href="#">How to Order</a></li>
                                </ul>
                            </div>

                            <div className="col-6 col-md-4">
                                <h5 className="mb-2 mb-md-4">Merchant Zone</h5>
                                <ul className="nav flex-column">
                                    <li className="nav-item"><a className="nav-link text-secondary ps-0" href="#">Become a Merchant / Login</a></li>
                                    <li className="nav-item"><a className="nav-link text-secondary ps-0" href="#">Merchant Help Center</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <h5 className="mb-2 mb-md-4">Contact</h5>
                        <p className="mb-2">
                            Toll free:<span className="h6 fw-light ms-2"> +880 9613505090</span>
                            <span className="d-block small">(09:00AM to 06:00PM )</span>
                        </p>

                        <p className="mb-0">Email:<span className="h6 fw-light ms-2"> support@fairmart.com.bd</span></p>

                        <div className="row g-2 mt-2">
                            <div className="col-6 col-sm-4 col-md-3 col-lg-6">
                                <a href="#"> <img src="assets/images/essentials/google-play.svg" alt="google play" /> </a>
                            </div>
                            <div className="col-6 col-sm-4 col-md-3 col-lg-6">
                                <a href="#"> <img src="assets/images/essentials/app-store.svg" alt="app-store" /> </a>
                            </div>
                        </div>
                    </div>
                </div>
                <hr className="mt-4 mb-0" />
                <div className="pt-3">
                    <div className="container px-0">
                        <div className="d-md-flex justify-content-between align-items-center py-3 text-center text-md-left">
                            <div className="text-primary-hover"> Copyrights <a href="#" className="text-success text-decoration-none ">©2022 Fairmart</a>. All rights reserved. </div>
                            <div className=" mt-3 mt-md-0">
                                <ul className="list-inline mb-0">
                                    <li className="list-inline-item">
                                        <div className="dropup mt-0 text-center text-sm-end">
                                            <a className="dropdown-toggle nav-link text-secondary" href="#" role="button" id="languageSwitcher" data-bs-toggle="dropdown" aria-expanded="false">
                                                <i className="fas fa-globe me-2"></i>Language
                                            </a>
                                            <ul className="dropdown-menu min-w-auto" aria-labelledby="languageSwitcher">
                                                <li>
                                                    <a className="dropdown-item me-4" href="#">English</a>
                                                </li>
                                                <li>
                                                    <a className="dropdown-item me-4" href="#">Bangla </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </li>
                                    <li className="list-inline-item"><a className="nav-link text-secondary" href="#">Terms of use</a></li>
                                    <li className="list-inline-item"><a className="nav-link text-secondary pe-0" href="#">Privacy policy</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>
    )
}