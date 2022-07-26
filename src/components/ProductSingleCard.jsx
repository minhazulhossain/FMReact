import { Link } from "react-router-dom";
import { imgUrl } from "../services/frontend";

import { priceFormat, discountPercentage } from "../helpers/helpers";

export default function ProductSingleCard(props){
    return (
        <Link to={`/product-details/${props.id}`} className={`product-card rounded-0 card text-decoration-none ${props.extraClassName}`}>
            <img src={`${imgUrl}/thumbnails/${props.thumbnail}`} className="card-img-top p-2" alt={props.name} />
            <div className="card-body p-2">
                <div className="product-title text-dark">{props.name}</div>
                <div className="product-price">
                    <span className="discounted-price text-dark fw-normal">৳ {priceFormat(props.price)}</span>
                    {props.previous_price === props.price ? '' : <span className="discounted-price text-danger fw-normal text-decoration-line-through ms-2">৳ {priceFormat(props.previous_price)}</span>}
                </div>
                <div className="product-badges-wrapper">
                    {props.emi === 1 ? <span className="badge bg-primary bg-opacity-75 rounded-0 fw-normal mb-1 d-block">EMI AVAILABLE</span> : '' }
                    {props.stock === 0 ? <span className="badge bg-danger bg-opacity-75 rounded-0 fw-normal mb-1 d-block">Out of Stock</span> : ''}
                    {props.previous_price === props.price ? '' : <span className="badge bg-warning bg-opacity-75 
                        rounded-0 fw-normal mb-1 d-block">{Math.round(discountPercentage(props.previous_price, props.price))}
                        % Discount</span>}
                </div>
            </div>
        </Link>
    )
}