import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import LoaderCampaigns from './LoaderCampaigns';
import { BsChevronRight } from 'react-icons/bs';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default function OngoingCampaigns(props){

    const sliderSettings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
    }

    return (
        <section className="ongoing-campaign-wrapper mt-5">
        <div className="container">
            <div className="section-title">
                <h4 className="title-text">Ongoing Campaigns</h4>
                <Link to="/campaigns" className="view-all-link text-dark">
                    View All <BsChevronRight />
                </Link>
            </div>
            <div className="campaign-slider-wrapper">
                {
                    props.isLoading ? <LoaderCampaigns/> : 

                    <Slider {...sliderSettings}>
                        {(props.campaigns).map(camp => (
                            <div key={camp.id}>
                                <Link to={`/campaign-details/${camp.id}`} className="d-block me-2">
                                    <img className='w-100' src={`https://fairmartslive.s3.ap-south-1.amazonaws.com/public/assets/images/campaign/${camp.campaign_rebon_image}`} alt="" />
                                </Link>
                            </div>
                        ))}
                    </Slider>
                }
            </div>
        </div>
    </section>
    )

}