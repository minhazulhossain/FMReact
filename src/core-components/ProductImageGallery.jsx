import Slider from "react-slick";

export default function ProductImageGallery(props){
    const sliderSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };
    return (
        <div className="product-single-img-gallery p-5">
            {
                (props.gallery).length === 0 ?
                <img
                    className="w-100"
                    src={`https://fairmartslive.s3.ap-south-1.amazonaws.com/public/assets/images/products/${props.photo}`}
                    alt=""
                /> 
                : 
                (
                <Slider className="single-product-slider" {...sliderSettings}>
                    {props.gallery.map((gal) => (
                        <li key={gal.id}>
                            <img
                            className="w-100"
                            src={`https://fairmartslive.s3.ap-south-1.amazonaws.com/public/assets/images/galleries/${gal.photo}`}
                            alt=""
                            />
                        </li>
                    ))}
                </Slider>
                )
            }
        </div>
    )
}