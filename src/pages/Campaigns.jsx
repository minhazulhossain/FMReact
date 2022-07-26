import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import LoaderCampaigns from "../components/LoaderCampaigns";
import { getCampaignsList } from "../services/frontend";

export default function Campaigns(){

    const [isLoading, setIsLoading] = useState(true);
    const [campaigns, setCampaigns] = useState([]);


    useEffect(() => {

        getCampaignsList().then(data => {
            setCampaigns(data.campaigns);
            setIsLoading(false);

            console.log(data)
        })

    }, []);

    if(isLoading){
        return (
            <div className="container my-5">
                <LoaderCampaigns/>
            </div>
        )
    }else{
        return (
            <div className="container mt-4">
                <div className="d-block d-lg-flex justify-content-between align-items-end">
                    <div className="page-breadcrumb">
                        <h4>Campaigns</h4>
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb mb-0">
                                <li className="breadcrumb-item"><a href="/" className="text-decoration-none">Home</a></li>
                                <li className="breadcrumb-item"><a href="/campaigns" className="text-decoration-none">Campaigns</a></li>
                            </ol>
                        </nav>
                    </div>
                    <div className="d-flex mt-3 mt-lg-0">
                        
                    </div>
                </div>
                <div className="row mt-2 mt-lg-4 gx-4">
                    {
                           campaigns.map(camp => (
                            <div className="col-lg-6" key={camp.id}>
                                <Link to={`/campaign-details/${camp.id}`} className="d-block">
                                    <img src={`https://fairmartslive.s3.ap-south-1.amazonaws.com/public/assets/images/campaign/${camp.campaign_rebon_image}`} alt="" className="w-100 shadow  mb-3" />
                                </Link>
                            </div>
                           ))
                    }
                </div>
            </div>
        );
    }
}