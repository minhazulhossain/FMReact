export default function Page404(){
    return (
        <div className="not-found-page-wrapper pt-5 pb-5">
            <div className="container">
                <div className="row align-items-center pt-5 pb-4">
                    <div className="col-lg-6 order-2 order-lg-1 text-center text-lg-start">
                        <div className="px-4 px-lg-2">
                            <h1 className="text-dark fw-bold fs-1">Ooops...</h1>
                            <h3 className="mb-4 mb-lg-5">Sorry, we can't find that page.</h3>
                            <a href="#" className="text-decoration-none"><i className="bi bi-arrow-left-circle-fill me-2"></i> Home</a>
                        </div>
                    </div>
                    <div className="col-lg-6 order-1 order-lg-2 text-center">
                        <img src="assets/images/essentials/no-prod-found.png" alt="" className="mb-5 mb-lg-0 w-75" />
                    </div>
                </div>
            </div>
        </div>
    );
}