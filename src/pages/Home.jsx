import { useEffect, useState } from "react";
import FeaturedCategories from "../components/FeaturedCategories";
import HomeSlider from "../components/HomeSlider";
import { getLandingPage } from "../services/frontend";

import OngoingCampaigns from "../components/OnGoingCampaigns";
import FeaturedProducts from "../components/FeaturedProducts";

export default function Home(){

    const [isLoading, setIsLoading] = useState(true);
    const [sliders, setSliders] = useState([]);
    const [categories, setCategories] = useState([]);
    const [campaigns, setCampaigns] = useState([]);
    const [featureProducts, setFeatureProducts] = useState([]);


    useEffect(() => {
        getLandingPage().then(data => {
            console.log(data);
            setIsLoading(false);
            setSliders(data.sliders);
            setCategories(data.categories);
            setCampaigns(data.campaigns);
            setFeatureProducts(data.feature_products);
        })
    }, []);

    return (
        <>
            <HomeSlider isLoading={isLoading} sliders={sliders} />
            <FeaturedCategories isLoading={isLoading} categories= {categories} />
            <OngoingCampaigns isLoading={isLoading} campaigns={campaigns} />
            <FeaturedProducts isLoading={isLoading} featureProducts={featureProducts} />
        </>
    );
}