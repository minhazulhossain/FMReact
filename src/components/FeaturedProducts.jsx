
import Slider from "react-slick";
import LoaderCampaigns from "./LoaderCampaigns";
import ProductSingleCard from "./ProductSingleCard";

export default function FeaturedProducts(props){

    const sliderSettings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1
    }

    return (
        <section className="flash-sale-wrapper mt-5">
        <div className="container">
            <div className="flash-sale">
                <div className="row align-items-center">
                    <div className="col-sm-4">
                        <a className="d-block text-decoration-none rounded-3 h-100 " href="/">
                            <div className="p-4">
                                <h2 className="mb-0 p-2 text-danger text-nowrap">
                                    <i className="bi bi-battery-charging"></i> Flash
                                    <span className="text-dark">&nbsp;Sale</span>
                                </h2>
                                <p className="mb-0 p-2 fs-6 text-body d-flex">
                                    <span className="day text-center text-lg-left">2 Days</span>
                                    <span className="px-1 d-none d-lg-block">:</span>
                                    <span className="hours text-center text-lg-left">15 Hours</span>
                                    <span className="px-1 d-none d-lg-block">:</span>
                                    <span className="day text-center text-lg-left">5 Minutes</span>
                                    <span className="px-1 d-none d-lg-block">:</span>
                                    <span className="day text-center text-lg-left">49 Seconds</span>
                                </p>
                            </div>
                            <div className="text-center d-none d-lg-block">
                                <img src="assets/images/essentials/mobile.svg" width="240" alt="Illustration" />
                            </div>
                        </a>
                    </div>
                    <div className="col-sm-8">
                        <div className="product-card-wrapper py-2 px-4">
                            {
                                props.isLoading ? <LoaderCampaigns/> : 
                                <Slider {...sliderSettings}>
                                    {
                                        (props.featureProducts).map(prod => (
                                            <div key={prod.id}>
                                                <ProductSingleCard id={prod.id} name={prod.name} 
                                                thumbnail={prod.thumbnail} price={prod.price} 
                                                emi={prod.enable_emi} stock={prod.stock}
                                                prevPrice={prod.previous_price}
                                                extraClassName="me-2"
                                                /> 
                                            </div>
                                        ))
                                    }
                                </Slider>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    )
}