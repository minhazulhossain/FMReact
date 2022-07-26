export default function Reviews(props){

    return (
        <>
            <div className="card rounded-0 sticky-top" id="reviews">
                <div className="card-header rounded-0 text-truncate">Ratings & Reviews of {props.productName}</div>
                <div className="card-body">
                    {
                        (props.data).length === 0 
                        ? <><h3>No Reviews yet!</h3></>
                        :<>
                        <div className="row align-items-center border-bottom mb-3 pb-3">
                            <div className="col-lg-6 text-center">
                                <h2 className="mb-0">{props.ratingAvg}/5.0</h2>
                                <div className="">Total {props.totalRatings} Ratings</div>
                            </div>
                        </div>
                        <div className="review-wrapper">
                            {(props.data).map(item => (
                                <div className="row border-bottom mb-3 pb-3" key={item.id}>
                                    <div className="fs-6 mb-2">
                                        {item.user.name} <i className="bi bi-patch-check-fill text-success"></i> 
                                        <span className="ms-2"> {item.review_time}</span> 
                                    </div>
                                    <div className="review-content-text mb-2">
                                        <i className="bi bi-chat-left-dots me-2"></i> 
                                        {item.review}
                                    </div>
                                </div>
                            ))}
                        </div>
                        </>
                    }
                </div>
            </div>

        </>
    )

}