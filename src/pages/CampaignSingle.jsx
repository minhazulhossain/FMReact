import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom"
import LoaderDot from "../components/LoaderDot";
import ProductSingleCard from "../components/ProductSingleCard";
import { getCampaignDetails } from "../services/frontend";

export default function CampaignSingle(){

    let {id} = useParams();

    const [isLoading, setIsLoading] = useState(true);
    const [campaignInfo, setCampaignInfo] = useState({});
    const [products, setProducts] = useState([]);

    useEffect(() => {
        getCampaignDetails(id).then(data => {
            setCampaignInfo(data.campaign_info);
            setProducts(data.products.data);
            setIsLoading(false);

            console.log(data)
        })
    }, [id])

    return (
        <div className="container mt-4">
            <div className="page-banner mb-4">
                <img src={`https://fairmartslive.s3.ap-south-1.amazonaws.com/public/assets/images/campaign/${campaignInfo !== null ? campaignInfo.campaign_rebon_image : '' }`} alt="" className="h-50 w-100 shadow  mb-3" />
            </div>
            <div className="d-block d-lg-flex justify-content-between align-items-end">
                <div className="page-breadcrumb">
                    <h4>{campaignInfo.campaign_name}</h4>
                    <nav aria-label="breadcrumb" className="d-none d-md-block">
                        <ol className="breadcrumb mb-0">
                            <li className="breadcrumb-item">
                                <Link to='/' className="text-decoration-none">Home</Link>
                            </li>
                            <li className="breadcrumb-item">
                                <Link to='/campaigns' className="text-decoration-none">Campaigns</Link>
                            </li>
                            <li className="breadcrumb-item">
                                {campaignInfo.campaign_name}
                            </li>
                        </ol>
                    </nav>
                </div>
            </div>
            <div className="product-items mt-3">
                <div className="row g-2">
                    {
                        isLoading ? <LoaderDot/> : products.map(prod => (
                            <div className="col col-6 col-md-2" key={prod.id}>
                                <ProductSingleCard isLoading={isLoading} {...prod} />
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )

}