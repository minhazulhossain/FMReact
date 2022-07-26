import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import LoaderSingleProduct from "../components/LoaderSingleProduct";
import Breadcrumb from "../core-components/Breadcrumb";
import Button from "../core-components/Button";
import ProductImageGallery from "../core-components/ProductImageGallery";
import Reviews from "../core-components/Reviews";
import {getProductSingleData } from "../services/frontend";

export default function ProductSingle() {
  
  let cart = JSON.parse(localStorage.getItem('caRt')) || [];
  const paramObj = useParams();

  const [isLoading, setIsLoading] = useState({});
  const [product, setProduct] = useState({});
  const [categoryId, setcategoryId] = useState(null);
  const [gallary, setGallery] = useState([]);
  const [user, setUser] = useState({});
  const [availableQuantity, setAvailableQuantity] = useState(null);
  const [reviews, setReviews] = useState([]);
  const [ratingAvg, setRatingAvg] = useState(null);

  useEffect(() => {

    getProductSingleData(paramObj.id).then((data) => {
        setProduct(data.product);
        setGallery(data.product.galleries);
        setUser(data.product.user);
        setIsLoading(false);
        setAvailableQuantity(data.product.stock);
        setcategoryId(data.product.category_id);
        setReviews(data.reviews.data);
        setRatingAvg(data.reviews.avg_rating);

      console.log(data)


    });

  }, [paramObj.id, categoryId]);

  //Add Product to cart
  function addProductToCart(e, product){
    e.preventDefault();
    cart.push({
      id: product.id,
      name: product.name,
      price: product.price,
      totalPrice: product.price * Number(e.target['quantity'].value),
      thumbnail: product.thumbnail,
      quantity: Number(e.target['quantity'].value)
    });

    localStorage.setItem('caRt', JSON.stringify(cart));
  }


if (isLoading) {
    return (
      <div className="container my-3">
        <LoaderSingleProduct className="container" />
      </div>
    );
  } else {
    return (
      <div className="container">
        <Breadcrumb name1={categoryId} link1={categoryId} currentPage={product.name}/>
        <div className="product-single-wrapper">
          <div className="row mb-3">
            <div className="col-12 col-lg-6">
              <ProductImageGallery gallery={gallary} />
            </div>
            <div className="col-12 col-lg-6">
              <div className="product-single-details mb-3">
                <div className="row mb-4 align-items-center">
                  <div className="col">
                    <a href={'/categories/'} className="text-decoration-none">
                      { categoryId }
                    </a>
                  </div>
                  <div className="col-auto">
                    <div className="rating d-inline-flex">
                      <div className="rating-item">
                        <i className="bi bi-star-fill"></i>
                      </div>
                      <div className="rating-item">
                        <i className="bi bi-star-fill"></i>
                      </div>
                      <div className="rating-item">
                        <i className="bi bi-star-fill"></i>
                      </div>
                      <div className="rating-item">
                        <i className="bi bi-star-half"></i>
                      </div>
                      <div className="rating-item">
                        <i className="bi bi-star"></i>
                      </div>
                    </div>
                    <a
                      href="#reviews"
                      className="text-decoration-none font-size-xs text-reset ms-2"
                    >
                      Reviews ({reviews.length})
                    </a>
                  </div>
                </div>
                <h4
                  className="mb-3 text-dark product-title product-single-title"
                  id="product-title"
                >
                  {product.name}
                </h4>
                <div className="mb-4" id="product-single-price">
                  <span
                    className="h2 text-danger fw-bold ms-1"
                    id="product-single-regular-price"
                  >
                    ৳ {product.price}
                  </span>
                  <span className="fs-6 ms-1 fw-light">{product.item.stock >= 0 ? <span className="text-success fw-bold">In Stock</span> : <span className="text-danger fw-bold">Out of Stock</span>}</span>
                </div>
                <div className="mb-4">
                  <div className="dropdown social-dropdown-btn">
                    <button
                      className="btn btn-outline-secondary p-2 dropdown-toggle"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      EMI Start From: 6,658.33 / Month
                    </button>
                    <ul className="dropdown-menu dropdown-menu-start mt-1 p-3 rounded-0">
                      <li>
                        1. As soon as you complete your purchase order on
                        fairmart.com.bd, you will see the full amount charged on
                        your credit card.
                      </li>
                      <li>
                        2. As soon as you complete your purchase order on
                        fairmart.com.bd, you will see the full amount charged on
                        your credit card.
                      </li>
                      <li>
                        3. As soon as you complete your purchase order on
                        fairmart.com.bd, you will see the full amount charged on
                        your credit card.
                      </li>
                    </ul>
                  </div>
                  <div className="form-group">
                     <div className="row g-1">
                     <form onSubmit={(event) => addProductToCart(event,product)} className="d-flex mt-2">
                    {
                      availableQuantity > 0 ?  <>
                      <div className="col-auto col-sm-3 col-md-3 col-lg-auto">
                        <input type='number' className="form-control w-auto me-2 h-100" defaultValue='1'
                        name="quantity" min={1} max={availableQuantity} />
                        </div>
                        <div className="col-auto col-sm-auto col-md-3 col-lg d-grid">
                           <button className="add-to-cart btn btn-outline-secondary d-flex justify-content-center me-2">
                              <span className="d-none d-sm-block me-2">Add to Cart</span> 
                              <i className="bi bi-cart"></i>
                           </button>
                        </div>
                      </> : 
                      <>
                      <div className="col-auto col-sm-auto col-md-3 col-lg d-grid">
                          <Button name="Out of Stock" type="outline-danger" 
                          extraClasses="me-2" iconName="basket3" />
                        </div>
                      </>
                      }
                    
                        <div className="col-auto col-sm-auto col-md-auto col-lg-auto">
                           <Button type="outline-secondary" extraClasses="add-to-favourite me-2" iconName="heart" />
                        </div>
                        <div className="col-auto col-sm-auto col-md-auto col-lg-auto">
                           <div className="dropdown social-dropdown-btn">
                              <Button type="outline-secondary" extraClasses="dropdown-toggle" iconName="share" />
                              <ul className="dropdown-menu dropdown-menu-end mt-1">
                                 <li>
                                    <a href="=facebook.com" className="dropdown-item">Facebook</a>
                                 </li>
                                 <li>
                                    <a href="twitter.com" className="dropdown-item">Twitter</a>
                                 </li>
                                 <li>
                                    <a href="instagram.com" className="dropdown-item">Instagram</a>
                                 </li>
                              </ul>
                           </div>
                        </div>
                      </form>
                     </div>
                  </div>
                </div>
              </div>
              <div className="accordion" id="accordionExample">
                <div className="accordion-item rounded-0">
                  <h2 className="accordion-header" id="headingTwo">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseTwo"
                      aria-expanded="true"
                      aria-controls="collapseTwo"
                    >
                      <h5 className="mb-0 text-dark">Seller Information</h5>
                    </button>
                  </h2>
                  <div
                    id="collapseTwo"
                    className="accordion-collapse collapse show"
                    aria-labelledby="headingTwo"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      <div className="seller-info-wrapper d-flex justify-content-between align-items-center">
                        <div className="seller-info">
                          <p className="text-secondary mb-0">Sold By</p>
                          <h4>{user.name}</h4>
                        </div>
                        <a href="seller-shop.php" className="seller-img">
                          <img src={product.user.photo ? `https://fairmartslive.s3.ap-south-1.amazonaws.com/public/assets/images/${product.user.photo}` : `https://fairmartslive.s3.ap-south-1.amazonaws.com/public/assets/images/merchantDefaultLogo.jpg`} alt="" className="border p-2" height="75" />
                        </a>
                      </div>
                      <div className="mt-3">
                        <a
                          href="seller-shop.php"
                          className="text-decoration-none"
                        >
                          <i className="bi bi-arrow-right"></i> Visit Store
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="accordion-item rounded-0">
                  <h2 className="accordion-header" id="headingThree">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseThree"
                      aria-expanded="false"
                      aria-controls="collapseThree"
                    >
                      <h5 className="mb-0 text-dark">Promotions Available</h5>
                    </button>
                  </h2>
                  <div
                    id="collapseThree"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingThree"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      <ul className="list-group">
                        <li className="list-group-item border-0">
                          1. Spend 1000Tk get 200tk Coupon
                        </li>
                        <li className="list-group-item border-0">
                          2. Spend 1500Tk get 300tk Coupon
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12 col-lg-6 mb-3 mb-lg-0">

            </div>
            <div className="col-12 col-lg-6">
                <Reviews productName={product.name} ratingAvg={ratingAvg !=null ? (ratingAvg).toFixed(1) : ''} 
                  totalRatings={reviews.length} data={reviews}  />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
