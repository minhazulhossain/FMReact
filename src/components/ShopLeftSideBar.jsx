export default function ShopLeftSideBar(){
    return (

        <div className="accordion accordion-flush cat-page-sidebar sticky-top" id="accordionExample">
            <div className="shop-sidebar-header d-flex justify-content-between align-items-center px-3 py-2 d-lg-none">
                <div className="fs-4">Filters</div>
                <button className="btn btn-outline-danger py-1 px-2 border-0" id="shop-filter-close-btn">
                        <i className="bi bi-x-lg"></i>
                </button>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header" id="headingOne">
                    <a className="accordion-button text-decoration-none" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                        Search
                    </a>
                </h2>
                <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                    <div className="accordion-body px-lg-0">
                        <div className="input-group">
                        <input type="text" className="form-control" placeholder="Search here..." id="product-search-btn" />
                        <button className="btn btn-outline-secondary py-2 px-3" type="button">
                            <i className="bi bi-search"></i>
                        </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header" id="headingTwo">
                    <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                    Brand
                    </button>
                </h2>
                <div id="collapseTwo" className="accordion-collapse collapse show" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                        <div className="cat-brand-wrap">
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" value="" id="samsung" />
                            <label className="form-check-label" htmlFor="samsung">
                            Samsung
                            </label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" value="" id="apex" />
                            <label className="form-check-label" htmlFor="apex">
                            Apex
                            </label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" value="" id="pulsar" />
                            <label className="form-check-label" htmlFor="pulsar">
                            Pulsar
                            </label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" value="" id="hyundai" />
                            <label className="form-check-label" htmlFor="hyundai">
                            Hyundai
                            </label>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header" id="headingThree">
                    <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                    Price
                    </button>
                </h2>
                <div id="collapseThree" className="accordion-collapse collapse show" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                        <form action="" className="row align-items-center g-1">
                        <div className="col-4 col-lg-4">
                            <label htmlFor="" className="visually-hidden">Min Price</label>
                            <input type="text" className="form-control" placeholder="Min" />
                        </div>
                        <div className="col-1 col-lg-1 text-center">
                            <span>-</span>
                        </div>
                        <div className="col-4 col-lg-4">
                            <label htmlFor="" className="visually-hidden">Min Price</label>
                            <input type="text" className="form-control" placeholder="Max" />
                        </div>
                        <div className="col-3 col-lg-3">
                            <button className="btn btn-outline-danger w-100 p-2" type="submit">
                            <i className="bi bi-play"></i>
                            </button>
                        </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}