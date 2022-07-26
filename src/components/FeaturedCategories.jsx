import { Link } from "react-router-dom";
import Slider from "react-slick";
import LoaderDot from "./LoaderDot";
import { BsChevronRight } from 'react-icons/bs';

import { imgUrl } from "../services/frontend";

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default function FeaturedCategories(props){

    const sliderSettings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 8,
        slidesToScroll: 1,
        className: 'me-2',
        useCSS: true
    }

    return ( 
        <section className="category-grid-wrapper mt-3 mt-lg-5">
            <div className="container">
                <div className="section-title">
                    <h4 className="title-text">Featured Categories</h4>
                    <Link to="/categories" className="view-all-link text-dark">
                        View All <BsChevronRight />
                    </Link>
                </div>
                <div className="category-grid">
                {
                    props.isLoading ? <LoaderDot/> : 

                    <Slider {...sliderSettings}>
                        {(props.categories).map(cat => (
                            <div key={cat.id}>
                                <a href={`/categories/${cat.slug}`} className="d-block card card-body border bg-white text-decoration-none mx-1 h-100">
                                    <img className="w-75 p-2 mb-2 mx-auto" src={`${imgUrl}/categories/${cat.photo}`} alt={cat.name} />
                                    <h5 className="text-center text-truncate">{cat.name}</h5>
                                </a>
                            </div>
                        ))}
                    </Slider>
                }
                </div>
            </div>
        </section>
     )

}